/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  ArrowLeft, 
  Trophy, 
  FileText, 
  Activity, 
  Users, 
  Flame, 
  RefreshCw, 
  Sparkles, 
  CheckCircle, 
  ChevronRight,
  Clock,
  MapPin,
  Smartphone,
  Info
} from 'lucide-react';
import { scheduleData } from './data';
import { Day, AthleticEvent, Athlete, AthleteResult } from './types';

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
  
  // Interactive filters
  const [genderFilter, setGenderFilter] = useState<'Alle' | 'Menn' | 'Kvinner'>('Alle');
  const [typeFilter, setTypeFilter] = useState<'Alle' | 'Finale' | 'Forsøk/Semi'>('Alle');

  // Live simulation states
  const [isLive, setIsLive] = useState(false);
  const [liveStep, setLiveStep] = useState(0);
  const [liveCommentary, setLiveCommentary] = useState('');
  const [simulatedResults, setSimulatedResults] = useState<AthleteResult[]>([]);
  const simInterval = useRef<NodeJS.Timeout | null>(null);

  // Filter logic
  const dayEvents = scheduleData.filter((e) => e.day === activeDay);
  const filteredEvents = dayEvents.filter((event) => {
    const matchesGender = genderFilter === 'Alle' || event.gender === genderFilter;
    const matchesType = typeFilter === 'Alle' || 
      (typeFilter === 'Finale' ? event.type === 'Finale' : event.type !== 'Finale');
    return matchesGender && matchesType;
  });

  // Dynamic selection side-effects (reset live simulator when event changes)
  useEffect(() => {
    cleanupSimulation();
  }, [selectedEvent]);

  const cleanupSimulation = () => {
    if (simInterval.current) {
      clearInterval(simInterval.current);
      simInterval.current = null;
    }
    setIsLive(false);
    setLiveStep(0);
    setLiveCommentary('');
    setSimulatedResults([]);
  };

  const startLiveSimulation = (event: AthleticEvent) => {
    cleanupSimulation();
    setIsLive(true);
    setLiveStep(1);
    
    // Check if the event is a track or jump event and set standard timing
    const isSprint = event.name.includes('100m') || event.name.includes('400m');
    const isMiddleDist = event.name.includes('800m');
    const isLongDist = event.name.includes('10000m');
    
    const steps = [
      { text: 'Utøverne kalles opp til startposisjonene. Atmosfæren på stadion er elektrisk! 🏟️', delay: 2000 },
      { text: 'Løperne gjør seg klare i startblokkene. Absolutt stillhet over Trondheim Stadion... 🤫', delay: 2500 },
      { text: 'KLAR... (Set)... 🛑', delay: 1500 },
      { text: 'PANG! Startskuddet går! For en pangstart av feltet! 🔫🔥', delay: 2000 },
      { text: isSprint 
          ? 'Halvveis! De kjemper side om side! Skulder mot skulder! 🏃‍♂️💨' 
          : 'Feltet strekker seg ut. Taktisk posisjonering i svingen! 🏃‍♀️', 
        delay: 2500 
      },
      { text: 'De nærmer seg mållinjen! Utrolig spurtfinish! Publikum koker! 🙌🎉', delay: 2000 },
      { text: 'Målgang bekreftet! Offisielle tider og plasseringer beregnes av fotofinish...', delay: 1500 }
    ];

    let currentStepIndex = 0;
    setLiveCommentary(steps[0].text);

    const runNextStep = () => {
      currentStepIndex++;
      if (currentStepIndex < steps.length) {
        setLiveStep(currentStepIndex + 1);
        setLiveCommentary(steps[currentStepIndex].text);
        
        // Schedule next step recursively with custom delay
        simInterval.current = setTimeout(runNextStep, steps[currentStepIndex].delay);
      } else {
        // Compute finalized results dynamically based on startList
        const competitors = event.startList || [
          { bib: '11', name: 'Ola Nordmann', club: 'Trondheim Friidrett', personalBest: '10.50s', seasonBest: '10.60s' },
          { bib: '12', name: 'Kari Nordmann', club: 'IL i BUL', personalBest: '10.65s', seasonBest: '10.75s' },
          { bib: '13', name: 'Per Olsen', club: 'Gular IL', personalBest: '10.80s', seasonBest: '10.85s' }
        ];

        // Format result text beautifully
        const generateMockResult = (athlete: Athlete) => {
          const basePB = parseFloat(athlete.personalBest);
          const isTime = athlete.personalBest.endsWith('s') || athlete.personalBest.includes(':');
          
          if (isTime) {
            if (athlete.personalBest.includes(':')) {
              // Format 1:45.30
              const [minStr, secStr] = athlete.personalBest.split(':');
              const baseSeconds = parseInt(minStr) * 60 + parseFloat(secStr);
              const randSeconds = baseSeconds + (Math.random() * 2.5 - 0.5);
              const m = Math.floor(randSeconds / 60);
              const s = (randSeconds % 60).toFixed(2);
              return `${m}:${s.padStart(5, '0')}`;
            } else {
              // Sprint seconds e.g. 10.43s
              const randSec = (basePB + (Math.random() * 0.38 - 0.05)).toFixed(2);
              return `${randSec}s`;
            }
          } else {
            // Field events e.g. 7.92m
            const baseVal = parseFloat(athlete.personalBest);
            const randVal = (baseVal - (Math.random() * 0.45)).toFixed(2);
            return `${randVal}m`;
          }
        };

        const calculated = competitors
          .map((athlete) => ({
            athlete,
            rawResult: generateMockResult(athlete)
          }))
          // Sort ascending for times, descending for heights/distances
          .sort((a, b) => {
            const isField = a.rawResult.endsWith('m');
            const getNumber = (str: string) => {
              if (str.includes(':')) {
                const [m, s] = str.split(':');
                return parseInt(m) * 60 + parseFloat(s);
              }
              return parseFloat(str);
            };
            if (isField) {
              return getNumber(b.rawResult) - getNumber(a.rawResult);
            } else {
              return getNumber(a.rawResult) - getNumber(b.rawResult);
            }
          })
          .map((item, index) => {
            let badgeInfo = '';
            if (index === 0) badgeInfo = 'Gull (Simulert)';
            else if (index === 1) badgeInfo = 'Sølv';
            else if (index === 2) badgeInfo = 'Bronse';
            
            return {
              rank: index + 1,
              bib: item.athlete.bib,
              name: item.athlete.name,
              club: item.athlete.club,
              result: item.rawResult,
              info: badgeInfo
            };
          });

        setLiveStep(steps.length + 1);
        setSimulatedResults(calculated);
        setLiveCommentary('Resultatene er offisielle! Takk for at du fulgte denne øvelsen direkte.');
      }
    };

    // First transition is linear
    simInterval.current = setTimeout(runNextStep, steps[0].delay);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#031d25] text-slate-100 font-sans overflow-hidden relative selection:bg-nm-orange/30">
      
      {/* Top Header */}
      <header className="bg-nm-teal border-b border-white/10 px-4 sm:px-6 py-3.5 flex justify-between items-center shrink-0 shadow-xl z-30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-nm-orange rounded-xl flex items-center justify-center font-bold italic shadow-md animate-pulse">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tighter leading-none flex items-baseline gap-1">
              <span className="text-white">NM</span>
              <span className="text-nm-orange">2026</span>
            </h1>
            <p className="text-[10px] text-white/80 font-black uppercase tracking-widest leading-none mt-1">Friidrett • Trondheim</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-[10px] text-white/50 uppercase tracking-wider font-extrabold">Hovedarena</span>
            <span className="text-xs font-bold text-white flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-nm-orange" /> Trondheim Stadion
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-nm-blue uppercase tracking-wider">
            <Smartphone className="w-4 h-4 text-nm-blue shrink-0" />
            <span>Mobil Optimalisert</span>
          </div>
        </div>
      </header>

      {/* Main app grid */}
      <main className="flex-1 flex overflow-hidden flex-col lg:flex-row relative">
        
        {/* Left column / Top horizontal nav for small screens */}
        <aside className={`w-full lg:w-64 bg-[#02141a] border-b lg:border-b-0 lg:border-r border-white/10 p-3 sm:p-4 flex lg:flex-col gap-2 shrink-0 overflow-x-auto lg:overflow-x-visible no-scrollbar ${selectedEvent ? 'hidden lg:flex' : 'flex'}`}>
          <div className="hidden lg:block mb-4">
            <h2 className="text-[11px] font-extrabold text-[#0EB9E9] uppercase tracking-widest px-2 mb-2">Velg Konkurransedag</h2>
            <p className="text-xs text-white/55 px-2">Klikk på en dag for å liste opp alle øvelser.</p>
          </div>
          
          <div className="flex lg:flex-col gap-2 w-full lg:w-auto shrink-0">
            {DAYS.map((day) => {
              const isActive = activeDay === day;
              return (
                <button
                  key={day}
                  onClick={() => { setActiveDay(day); setSelectedEvent(null); }}
                  className={`min-w-[130px] lg:w-full p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-center relative cursor-pointer ${
                    isActive
                      ? 'bg-nm-teal text-white border-nm-orange/50 shadow-lg lg:after:absolute lg:after:left-0 lg:after:top-1/4 lg:after:bottom-1/4 lg:after:w-[4px] lg:after:bg-nm-orange lg:after:rounded-r-md'
                      : 'border-white/5 hover:bg-white/5 text-white/50'
                  }`}
                  style={{ touchAction: 'manipulation' }}
                >
                  <div className={`text-[10px] font-black uppercase tracking-wider ${isActive ? 'text-nm-orange' : 'text-white/40'}`}>
                    {getDayCode(day)}
                  </div>
                  <div className={`text-lg font-black tracking-tight ${isActive ? 'text-white' : 'text-white/80'}`}>
                    {getDayNumber(day)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Color-code legend */}
          <div className="hidden lg:block mt-auto p-4 bg-white/5 rounded-xl border border-white/5">
            <h3 className="text-[10px] font-bold uppercase text-white/40 tracking-widest mb-3">Fargekoder</h3>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-nm-orange border border-white/20"></span>
                <span className="text-xs font-semibold text-white/80">Finale (Medaljeøvelse)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-nm-blue border border-white/20"></span>
                <span className="text-xs font-semibold text-white/80">Forsøk / Semifinale</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Middle column: Interactive schedule list */}
        <section className={`flex-1 bg-[#031d25] p-4 sm:p-6 flex flex-col overflow-hidden ${selectedEvent ? 'hidden lg:flex' : 'flex'}`}>
          
          {/* List Toolbar / Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-nm-orange" />
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">{activeDay}</h3>
              </div>
              <p className="text-xs text-white/50 mt-1">Viser {filteredEvents.length} øvelser etter valgte filtre</p>
            </div>
            
            {/* Horizontal Filter Buttons */}
            <div className="flex flex-wrap gap-2 items-center bg-black/35 p-1.5 rounded-xl border border-white/5 w-fit">
              {/* Gender filter button group */}
              <div className="flex gap-1 border-r border-white/10 pr-2 mr-1">
                {(['Alle', 'Menn', 'Kvinner'] as const).map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setGenderFilter(gender)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-bold uppercase transition-all ${
                      genderFilter === gender
                        ? 'bg-nm-teal text-white shadow-sm'
                        : 'text-white/40 hover:text-white/75'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>

              {/* Type filter button group */}
              <div className="flex gap-1">
                {(['Alle', 'Finale', 'Forsøk/Semi'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type === 'Forsøk/Semi' ? 'Forsøk/Semi' : type)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-bold uppercase transition-all ${
                      (type === 'Forsøk/Semi' ? typeFilter === 'Forsøk/Semi' : typeFilter === type)
                        ? 'bg-nm-teal text-white shadow-sm'
                        : 'text-white/40 hover:text-white/75'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events List Scroll viewport */}
          <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 custom-scrollbar space-y-3">
            {filteredEvents.length === 0 ? (
              <div className="h-48 rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center p-6 bg-white/[0.02]">
                <Info className="w-10 h-10 text-white/30 mb-2" />
                <h4 className="font-bold text-white/70">Ingen øvelser matcher filtrene</h4>
                <p className="text-xs text-white/40 mt-1">Prøv å endre på kjønns- eller øvelsesfilteret over.</p>
              </div>
            ) : (
              filteredEvents.map((event) => {
                const isFinal = event.type === 'Finale';
                const colorBorder = isFinal ? 'border-nm-orange/30 hover:border-nm-orange/70 bg-nm-orange/5' : 'border-nm-blue/20 hover:border-nm-blue/60 bg-nm-blue/5';
                const badgeColor = isFinal ? 'bg-nm-orange text-white' : 'bg-nm-blue text-white';

                return (
                  <button
                    key={event.id}
                    onClick={() => { setSelectedEvent(event); cleanupSimulation(); }}
                    className={`text-left w-full flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-lg focus:shadow-lg ${colorBorder} ${selectedEvent?.id === event.id ? 'ring-2 ring-nm-orange' : ''}`}
                    style={{ touchAction: 'manipulation' }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Event Start Time */}
                      <div className="flex items-center gap-1.5 shrink-0 bg-black/30 px-3 py-1.5 rounded-lg border border-white/5">
                        <Clock className="w-4 h-4 text-nm-blue" />
                        <span className="font-mono text-sm font-bold text-white">{event.time}</span>
                      </div>
                      
                      {/* Name and Metadata */}
                      <div>
                        <h4 className="text-lg sm:text-xl font-black uppercase text-white leading-tight flex items-center gap-2">
                          {event.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider">
                            {event.gender}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 mt-3 sm:mt-0 pt-3 sm:pt-0 border-t border-white/5 sm:border-t-0">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider ${badgeColor}`}>
                        {event.type}
                      </span>
                      <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white" />
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </section>

        {/* Right column: Dynamic interactive Detail view */}
        <section className={`w-full lg:w-[480px] bg-[#053b4c] border-t lg:border-t-0 lg:border-l border-white/10 p-5 sm:p-6 flex flex-col shadow-2xl shrink-0 z-20 ${!selectedEvent ? 'hidden lg:flex' : 'flex'} ${selectedEvent ? 'absolute inset-0 lg:relative overflow-y-auto h-full lg:h-auto' : ''}`}>
          
          {!selectedEvent ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-nm-blue" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">Ingen øvelse valgt</h3>
              <p className="text-xs text-white/50 mt-1.5 max-w-xs leading-relaxed">Velg en øvelse fra tidsplanen på venstre side for å se startlister, resultater, og følge direktsendingen live.</p>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              
              {/* Back trigger / Close Detail header */}
              <div className="flex items-center justify-between mb-5">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-nm-blue text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all text-left"
                  style={{ touchAction: 'manipulation' }}
                >
                  <ArrowLeft className="w-4 h-4" /> Tilbake til oversikt
                </button>
                
                <span className="text-xs font-mono text-white/40">{selectedEvent.day} &bull; {selectedEvent.time}</span>
              </div>

              {/* Event main banner card */}
              <div className="bg-black/20 p-5 rounded-2xl border border-white/5 relative overflow-hidden mb-6 shrink-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nm-orange/5 blur-3xl rounded-full"></div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-block px-2.5 py-0.5 text-[9px] font-extrabold uppercase rounded tracking-wider ${selectedEvent.type === 'Finale' ? 'bg-nm-orange text-white' : 'bg-nm-blue text-white'}`}>
                    {selectedEvent.type}
                  </span>
                  <span className="text-white/30 text-xs font-bold">|</span>
                  <span className="text-[11px] font-black text-white/60 uppercase tracking-widest">{selectedEvent.gender}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black italic uppercase text-white leading-none mt-1">{selectedEvent.name}</h2>
              </div>

              {/* Custom dynamic switch for Simulator mode */}
              {isLive ? (
                // Live Race Simulator screen
                <div className="flex-1 bg-black/45 rounded-2xl border border-nm-orange/30 p-5 flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-red-600 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest text-white animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>DIREKTE</span>
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#0EB9E9] mb-4">NM Live Simulator</h3>
                    
                    {/* Visual Progress Track */}
                    <div className="space-y-3 mb-6">
                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className="absolute left-0 top-0 h-full bg-nm-orange rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((liveStep / 8) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[9px] font-bold text-white/40 uppercase tracking-wider">
                        <span>Oppvarming</span>
                        <span>Start</span>
                        <span>Underveis</span>
                        <span>Mål</span>
                      </div>
                    </div>

                    {/* Speech / Ticker bubble */}
                    <div className="bg-[#031d25] p-4 rounded-xl border border-white/10 shadow-inner flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-nm-orange/20 flex items-center justify-center shrink-0">
                        <Flame className="w-4 h-4 text-nm-orange" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-nm-orange tracking-widest">Speakeren rapporterer</p>
                        <p className="text-[13px] text-white font-bold mt-1 leading-relaxed">{liveCommentary}</p>
                      </div>
                    </div>
                  </div>

                  {/* Simulator results block */}
                  {simulatedResults.length > 0 && (
                    <div className="mt-4 flex-1 overflow-y-auto custom-scrollbar border-t border-white/10 pt-4 space-y-2">
                      <h4 className="text-[10px] font-black uppercase text-nm-blue tracking-widest mb-1.5">Mottatte Tider / Resultat</h4>
                      {simulatedResults.map((res) => (
                        <div key={res.bib} className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white/40 font-mono w-4">{res.rank}.</span>
                            <span className="font-bold text-white">{res.name}</span>
                            <span className="text-[10px] text-white/50">({res.club})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-nm-orange">{res.result}</span>
                            {res.info && (
                              <span className="text-[9px] bg-nm-orange/20 text-nm-orange px-1.5 py-0.2 rounded font-black uppercase">
                                {res.info}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex gap-2 shrink-0">
                    <button 
                      onClick={() => startLiveSimulation(selectedEvent)}
                      className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold uppercase text-[11px] tracking-wider text-white transition-all flex items-center justify-center gap-2"
                      style={{ touchAction: 'manipulation' }}
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Start over igjen
                    </button>
                    <button 
                      onClick={cleanupSimulation}
                      className="px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold uppercase text-[11px] tracking-wider text-white transition-all"
                      style={{ touchAction: 'manipulation' }}
                    >
                      Avbryt
                    </button>
                  </div>
                </div>
              ) : (
                // Tab-based lists details view
                <div className="flex-1 flex flex-col overflow-hidden">
                  
                  {/* Startliste block */}
                  <div className="mb-6 flex-1 flex flex-col min-h-0 overflow-y-auto pr-1">
                    <div className="flex items-center justify-between mb-3 shrink-0">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-nm-blue" />
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#0EB9E9]">Startliste</h3>
                      </div>
                      <span className="text-[10px] font-bold text-white/40">Startnummer & Detaljer</span>
                    </div>

                    <div className="space-y-2 bg-black/10 rounded-xl p-3 border border-white/5 overflow-y-auto max-h-[220px]">
                      {selectedEvent.startList && selectedEvent.startList.length > 0 ? (
                        selectedEvent.startList.map((athlete) => (
                          <div key={athlete.bib} className="flex items-center justify-between p-2.5 rounded hover:bg-white/5 transition border-b border-white/[0.03] last:border-0 text-xs">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="font-mono text-[10px] bg-slate-800 text-white/70 px-1.5 py-0.5 rounded shrink-0">
                                #{athlete.bib}
                              </span>
                              <div className="min-w-0">
                                <p className="font-bold text-white truncate">{athlete.name}</p>
                                <p className="text-[10px] text-white/50 truncate">{athlete.club}</p>
                              </div>
                            </div>
                            <div className="text-right shrink-0 font-mono text-[10.5px]">
                              <p className="text-white/80"><span className="text-[9px] text-white/40 font-sans">PB:</span> {athlete.personalBest}</p>
                              <p className="text-nm-blue"><span className="text-[9px] text-white/40 font-sans">SB:</span> {athlete.seasonBest}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-white/40 italic p-2 text-center">Ingen startliste registrert ennå.</p>
                      )}
                    </div>
                  </div>

                  {/* Resultater block */}
                  <div className="mb-6 flex-1 flex flex-col min-h-0 overflow-y-auto pr-1">
                    <div className="flex items-center justify-between mb-3 shrink-0">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-nm-orange" />
                        <h3 className="text-xs font-black uppercase tracking-widest text-nm-orange">Offisielle Resultater</h3>
                      </div>
                      <span className="text-[10px] font-bold text-white/40">Plassering & Tid</span>
                    </div>

                    <div className="space-y-2 bg-black/10 rounded-xl p-3 border border-white/5 overflow-y-auto max-h-[190px]">
                      {selectedEvent.results && selectedEvent.results.length > 0 ? (
                        selectedEvent.results.map((result) => {
                          const isPodium = result.rank <= 3;
                          const podiumColors = result.rank === 1 
                            ? 'text-[#F38D0D]' 
                            : result.rank === 2 
                              ? 'text-slate-300' 
                              : 'text-amber-700';

                          return (
                            <div key={result.bib} className="flex items-center justify-between p-2.5 rounded hover:bg-white/5 transition border-b border-white/[0.03] last:border-0 text-xs">
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className={`font-mono text-xs font-black ${isPodium ? podiumColors : 'text-white/40'} w-6 shrink-0 text-center`}>
                                  {result.rank === 1 ? '🥇' : result.rank === 2 ? '🥈' : result.rank === 3 ? '🥉' : `${result.rank}.`}
                                </span>
                                <div className="min-w-0">
                                  <p className="font-bold text-white truncate">{result.name}</p>
                                  <p className="text-[10px] text-white/50 truncate">{result.club}</p>
                                </div>
                              </div>
                              <div className="text-right shrink-0">
                                <p className="font-mono font-bold text-white text-xs">{result.result}</p>
                                {result.info && (
                                  <span className="text-[9px] bg-nm-orange/20 text-nm-orange px-1 rounded font-black uppercase">
                                    {result.info}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="p-4 text-center">
                          <p className="text-xs text-white/50 italic">Ingen resultater foreligger.</p>
                          <p className="text-[10.5px] text-[#0EB9E9] mt-1.5">Klikk på Følg Live-knappen under for å simulere øvelsen direkte!</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action bottom button */}
                  <button 
                    onClick={() => startLiveSimulation(selectedEvent)}
                    className="w-full py-4 bg-nm-orange hover:bg-[#d97e0b] rounded-xl font-bold uppercase tracking-widest text-white shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] hover:shadow-nm-orange/20 mr-1.5 shrink-0"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <Flame className="w-5 h-5 text-white animate-pulse" />
                    <span>Følg Øvelse Live</span>
                  </button>

                </div>
              )}
              
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
