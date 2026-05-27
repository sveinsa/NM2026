/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, ArrowLeft, Trophy, FileText, Activity } from 'lucide-react';
import { scheduleData } from './data';
import { Day, AthleticEvent } from './types';

const DAYS: Day[] = ['Torsdag 23.07', 'Fredag 24.07', 'Lørdag 25.07'];

const getDayCode = (day: Day) => {
  if (day.startsWith('Tors')) return 'TORSDAG';
  if (day.startsWith('Fre')) return 'FREDAG';
  if (day.startsWith('Lør')) return 'LØRDAG';
  return '';
};

const getDayNumber = (day: Day) => {
  return day.split(' ')[1];
};

export default function App() {
  const [activeDay, setActiveDay] = useState<Day>(DAYS[0]);
  const [selectedEvent, setSelectedEvent] = useState<AthleticEvent | null>(null);

  const currentEvents = scheduleData.filter((e) => e.day === activeDay);

  return (
    <div className="flex flex-col h-screen w-full bg-[#031d25] text-slate-100 font-sans overflow-hidden">
      {/* Header Section */}
      <header className="bg-nm-teal border-b border-white/10 px-6 py-4 flex justify-between items-center shrink-0 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-nm-orange rounded-full flex items-center justify-center font-bold italic tracking-tighter text-xl text-white">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase tracking-tight leading-tight flex items-baseline">
              <span className="text-nm-blue">NM</span>
              <span className="text-nm-orange">2026</span>
            </h1>
            <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest leading-none">Friidrett • Trondheim</p>
          </div>
        </div>
        <div className="hidden sm:flex gap-4">
          <div className="text-right">
            <span className="block text-[10px] text-white/50 uppercase tracking-widest font-bold">Sted</span>
            <span className="text-sm font-semibold text-white">Trondheim Stadion</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden flex-col md:flex-row">
        {/* Sidebar: Days Navigation */}
        <aside className="w-full md:w-64 bg-[#02141a] border-b md:border-b-0 md:border-r border-white/5 p-4 flex md:flex-col gap-2 shrink-0 overflow-x-auto">
          <h2 className="hidden md:block text-[11px] font-bold text-white/40 uppercase tracking-widest mb-2 px-2">Velg Dato</h2>
          {DAYS.map((day) => {
            const isActive = activeDay === day;
            return (
              <button
                key={day}
                onClick={() => { setActiveDay(day); setSelectedEvent(null); }}
                className={`min-w-[120px] md:min-w-0 md:w-full p-4 rounded-xl text-left border transition-all flex flex-col justify-center ${
                  isActive
                    ? 'bg-nm-teal/40 text-nm-orange border-nm-orange/20 shadow-lg relative md:after:absolute md:after:left-0 md:after:top-1/4 md:after:bottom-1/4 md:after:w-[4px] md:after:bg-nm-orange md:after:rounded-r-md'
                    : 'border-white/5 hover:bg-white/5 text-white/50'
                }`}
              >
                <div className={`text-xs font-bold uppercase ${isActive ? 'opacity-70' : 'text-white/40'}`}>
                  {getDayCode(day)}
                </div>
                <div className={`text-xl font-bold ${isActive ? 'text-nm-blue' : 'text-white/80'}`}>
                  {getDayNumber(day)}
                </div>
              </button>
            );
          })}

          <div className="hidden md:block mt-auto p-4 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-nm-orange"></span>
              <span className="text-xs font-medium">Finale</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-nm-blue"></span>
              <span className="text-xs font-medium">Forsøk/Semi</span>
            </div>
          </div>
        </aside>

        {/* Main Schedule Grid */}
        <section className={`flex-1 bg-[#031d25] p-6 flex flex-col overflow-hidden ${selectedEvent ? 'hidden lg:flex' : 'flex'}`}>
          <div className="flex justify-between items-end mb-6 shrink-0">
            <h3 className="text-3xl font-black italic uppercase text-white tracking-tighter">
              {activeDay}
            </h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold uppercase tracking-wider text-white">Menn</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold uppercase tracking-wider text-white">Kvinner</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto pr-2 custom-scrollbar">
            {currentEvents.map((event) => {
              const isFinal = event.type === 'Finale';
              const colorClass = isFinal ? 'border-nm-orange/30 bg-nm-orange/5' : 'border-nm-blue/30 bg-nm-blue/5';
              const dotClass = isFinal ? 'bg-nm-orange' : 'bg-nm-blue';

              return (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`text-left flex flex-col p-4 rounded-xl border ${colorClass} hover:ring-1 hover:ring-white/20 transition-all active:scale-95 ${selectedEvent?.id === event.id ? 'ring-1 ring-white/30' : ''}`}
                >
                  <div className="flex justify-between items-start mb-2 w-full">
                     <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded text-white ${dotClass}`}>
                       {event.type}
                     </span>
                     <span className="text-xs font-bold opacity-60 text-white">{event.time}</span>
                  </div>
                  <h4 className="text-xl font-bold uppercase text-white leading-tight">{event.name}</h4>
                  <p className="text-xs font-medium opacity-50 text-white/70">{event.gender}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Detail View: Floating Panel */}
        <section className={`w-full lg:w-80 bg-[#053b4c] border-t lg:border-t-0 lg:border-l border-white/10 p-6 flex flex-col shadow-2xl shrink-0 ${!selectedEvent ? 'hidden lg:flex' : 'flex'} ${selectedEvent ? 'absolute inset-0 z-20 lg:relative lg:inset-auto lg:z-auto overflow-y-auto' : ''}`}>
          {!selectedEvent ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
               <Calendar className="w-16 h-16 mb-4 text-nm-blue" />
               <p className="text-sm uppercase font-bold tracking-widest text-[#0EB9E9]">Velg en øvelse for å se detaljer</p>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <button onClick={() => setSelectedEvent(null)} className="text-nm-blue text-xs font-bold flex items-center gap-1 hover:underline lg:hidden">
                    <ArrowLeft className="w-4 h-4" />
                    Tilbake
                  </button>
                </div>
                
                <span className={`inline-block w-fit px-2 py-1 text-[10px] font-black uppercase rounded ${selectedEvent.type === 'Finale' ? 'bg-nm-orange text-white' : 'bg-nm-blue text-white'}`}>
                  {selectedEvent.type}
                </span>
                
                <h2 className="text-4xl font-black italic mt-2 uppercase leading-none text-white">{selectedEvent.name}</h2>
                
                <div className="flex gap-4 mt-6">
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase">Kjønn</p>
                    <p className="text-lg font-bold text-white">{selectedEvent.gender}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase">Tidspunkt</p>
                    <p className="text-lg font-bold text-white">{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                       <FileText className="w-4 h-4 text-nm-blue" />
                       <p className="text-[10px] text-white/40 font-bold uppercase">Startliste</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-white">
                      <span>{selectedEvent.name} {selectedEvent.gender}</span>
                      <span className="text-nm-orange font-bold cursor-pointer hover:underline">Vis PDF</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                       <Trophy className="w-4 h-4 text-nm-orange" />
                       <p className="text-[10px] text-white/40 font-bold uppercase">Resultater</p>
                    </div>
                    <p className="text-sm text-slate-400 italic">Resultater blir tilgjengelige etter øvelsesslutt.</p>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 mt-6 bg-nm-orange rounded-xl font-bold uppercase tracking-widest hover:bg-[#d97e0b] transition-colors text-white shadow-lg">
                Følg Øvelse Live
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
