import { AthleticEvent } from './types';

export const scheduleData: AthleticEvent[] = [
  // Torsdag 23.07
  {
    id: '1',
    day: 'Torsdag 23.07',
    time: '10:00',
    gender: 'Kvinner',
    name: 'Slegge',
    type: 'Finale',
    startList: [
      { bib: '301', name: 'Beatrice Nedberge Llano', club: 'Laksevåg TIL', personalBest: '72.12m', seasonBest: '71.40m' },
      { bib: '302', name: 'Thomasin Elisabeth', club: 'IL Gneist', personalBest: '59.50m', seasonBest: '58.40m' },
      { bib: '303', name: 'Oda Marie Myklebust', club: 'Bergens TF', personalBest: '56.10m', seasonBest: '55.50m' },
      { bib: '304', name: 'Ruth-Magrethe Nilsen', club: 'Modum FIK', personalBest: '52.30m', seasonBest: '51.80m' }
    ],
    results: [
      { rank: 1, bib: '301', name: 'Beatrice Nedberge Llano', club: 'Laksevåg TIL', result: '71.10m', info: 'Gull' },
      { rank: 2, bib: '302', name: 'Thomasin Elisabeth', club: 'IL Gneist', result: '58.90m', info: 'Sølv' },
      { rank: 3, bib: '303', name: 'Oda Marie Myklebust', club: 'Bergens TF', result: '55.80m', info: 'Bronse' }
    ]
  },
  {
    id: '2',
    day: 'Torsdag 23.07',
    time: '10:30',
    gender: 'Kvinner',
    name: '100m',
    type: 'Forsøk',
    startList: [
      { bib: '201', name: 'Helene Rønningen', club: 'Tyrving IL', personalBest: '11.38s', seasonBest: '11.45s' },
      { bib: '202', name: 'Christine Bjelland Jensen', club: 'Norna-Salhus', personalBest: '11.47s', seasonBest: '11.52s' },
      { bib: '203', name: 'Vilde Aasmo', club: 'Sandnes IL', personalBest: '11.71s', seasonBest: '11.77s' },
      { bib: '204', name: 'Marte Pettersen', club: 'Trondheim Friidrett', personalBest: '11.78s', seasonBest: '11.85s' },
      { bib: '205', name: 'Maren Bakke', club: 'IL Gular', personalBest: '12.10s', seasonBest: '12.15s' }
    ],
    results: [
      { rank: 1, bib: '201', name: 'Helene Rønningen', club: 'Tyrving IL', result: '11.49s', info: 'Q' },
      { rank: 2, bib: '202', name: 'Christine Bjelland Jensen', club: 'Norna-Salhus', result: '11.58s', info: 'Q' },
      { rank: 3, bib: '203', name: 'Vilde Aasmo', club: 'Sandnes IL', result: '11.82s', info: 'q' }
    ]
  },
  {
    id: '3',
    day: 'Torsdag 23.07',
    time: '11:00',
    gender: 'Menn',
    name: '100m',
    type: 'Forsøk',
    startList: [
      { bib: '101', name: 'Salum Ageze Kashafala', club: 'IL Norna-Salhus', personalBest: '10.43s', seasonBest: '10.48s' },
      { bib: '102', name: 'Jacob Vaula', club: 'Gular IL', personalBest: '10.46s', seasonBest: '10.46s' },
      { bib: '103', name: 'Even Meinseth', club: 'Øystese IL', personalBest: '10.51s', seasonBest: '10.55s' },
      { bib: '104', name: 'Per Tinius Fremstad-Waldron', club: 'IL i BUL', personalBest: '10.58s', seasonBest: '10.60s' },
      { bib: '105', name: 'Christian Mensah', club: 'Trondheim Friidrett', personalBest: '10.65s', seasonBest: '10.72s' }
    ],
    results: [
      { rank: 1, bib: '101', name: 'Salum Ageze Kashafala', club: 'IL Norna-Salhus', result: '10.45s', info: 'Q' },
      { rank: 2, bib: '102', name: 'Jacob Vaula', club: 'Gular IL', result: '10.49s', info: 'Q' },
      { rank: 3, bib: '103', name: 'Even Meinseth', club: 'Øystese IL', result: '10.54s', info: 'q' }
    ]
  },
  {
    id: '4',
    day: 'Torsdag 23.07',
    time: '11:45',
    gender: 'Kvinner',
    name: 'Høyde',
    type: 'Finale',
    startList: [
      { bib: '401', name: 'Tonje Angelsen', club: 'IK Tjalve', personalBest: '1.97m', seasonBest: '1.86m' },
      { bib: '402', name: 'Thea Emilie Selstø', club: 'Fil Aks-77', personalBest: '1.82m', seasonBest: '1.81m' },
      { bib: '403', name: 'Hedvig Kallåk', club: 'Trondheim Friidrett', personalBest: '1.80m', seasonBest: '1.78m' },
      { bib: '404', name: 'Kathrine Haarklau', club: 'IL Gular', personalBest: '1.75m', seasonBest: '1.74m' }
    ],
    results: [
      { rank: 1, bib: '401', name: 'Tonje Angelsen', club: 'IK Tjalve', result: '1.85m', info: 'Gull' },
      { rank: 2, bib: '402', name: 'Thea Emilie Selstø', club: 'Fil Aks-77', result: '1.80m', info: 'Sølv' },
      { rank: 3, bib: '403', name: 'Hedvig Kallåk', club: 'Trondheim Friidrett', result: '1.78m', info: 'Bronse' }
    ]
  },
  {
    id: '5',
    day: 'Torsdag 23.07',
    time: '12:30',
    gender: 'Kvinner',
    name: '100m',
    type: 'Semifinale',
    startList: [
      { bib: '201', name: 'Helene Rønningen', club: 'Tyrving IL', personalBest: '11.38s', seasonBest: '11.45s' },
      { bib: '202', name: 'Christine Bjelland Jensen', club: 'Norna-Salhus', personalBest: '11.47s', seasonBest: '11.52s' },
      { bib: '203', name: 'Vilde Aasmo', club: 'Sandnes IL', personalBest: '11.71s', seasonBest: '11.77s' }
    ],
    results: [
      { rank: 1, bib: '201', name: 'Helene Rønningen', club: 'Tyrving IL', result: '11.42s', info: 'Q' },
      { rank: 2, bib: '202', name: 'Christine Bjelland Jensen', club: 'Norna-Salhus', result: '11.50s', info: 'Q' }
    ]
  },
  {
    id: '6',
    day: 'Torsdag 23.07',
    time: '13:00',
    gender: 'Menn',
    name: '100m',
    type: 'Semifinale',
    startList: [
      { bib: '101', name: 'Salum Ageze Kashafala', club: 'IL Norna-Salhus', personalBest: '10.43s', seasonBest: '10.48s' },
      { bib: '102', name: 'Jacob Vaula', club: 'Gular IL', personalBest: '10.46s', seasonBest: '10.46s' },
      { bib: '103', name: 'Even Meinseth', club: 'Øystese IL', personalBest: '10.51s', seasonBest: '10.55s' }
    ],
    results: [
      { rank: 1, bib: '101', name: 'Salum Ageze Kashafala', club: 'IL Norna-Salhus', result: '10.38s', info: 'Q' },
      { rank: 2, bib: '102', name: 'Jacob Vaula', club: 'Gular IL', result: '10.42s', info: 'Q' }
    ]
  },
  {
    id: '7',
    day: 'Torsdag 23.07',
    time: '14:00',
    gender: 'Menn',
    name: 'Lengde',
    type: 'Finale',
    startList: [
      { bib: '121', name: 'Ingar Kiplesund', club: 'Selsbakk IF', personalBest: '8.10m', seasonBest: '7.92m' },
      { bib: '122', name: 'Henrik Flåtnes', club: 'Tønsberg FIK', personalBest: '7.95m', seasonBest: '7.85m' },
      { bib: '123', name: 'Sander Aae Skotheim', club: 'IK Tjalve', personalBest: '7.74m', seasonBest: '7.70m' },
      { bib: '124', name: 'Markus Rooth', club: 'IK Tjalve', personalBest: '7.62m', seasonBest: '7.58m' }
    ],
    results: [
      { rank: 1, bib: '121', name: 'Ingar Kiplesund', club: 'Selsbakk IF', result: '7.96m', info: 'Gull' },
      { rank: 2, bib: '122', name: 'Henrik Flåtnes', club: 'Tønsberg FIK', result: '7.82m', info: 'Sølv' },
      { rank: 3, bib: '123', name: 'Sander Aae Skotheim', club: 'IK Tjalve', result: '7.71m', info: 'Bronse' }
    ]
  },
  {
    id: '8',
    day: 'Torsdag 23.07',
    time: '15:00',
    gender: 'Kvinner',
    name: '100m',
    type: 'Finale',
    startList: [
      { bib: '201', name: 'Helene Rønningen', club: 'Tyrving IL', personalBest: '11.38s', seasonBest: '11.45s' },
      { bib: '202', name: 'Christine Bjelland Jensen', club: 'Norna-Salhus', personalBest: '11.47s', seasonBest: '11.52s' },
      { bib: '203', name: 'Vilde Aasmo', club: 'Sandnes IL', personalBest: '11.71s', seasonBest: '11.77s' }
    ],
    results: [
      { rank: 1, bib: '201', name: 'Helene Rønningen', club: 'Tyrving IL', result: '11.35s', info: 'Gull (PB)' },
      { rank: 2, bib: '202', name: 'Christine Bjelland Jensen', club: 'Norna-Salhus', result: '11.45s', info: 'Sølv (SB)' },
      { rank: 3, bib: '203', name: 'Vilde Aasmo', club: 'Sandnes IL', result: '11.68s', info: 'Bronse' }
    ]
  },
  {
    id: '9',
    day: 'Torsdag 23.07',
    time: '15:15',
    gender: 'Menn',
    name: '100m',
    type: 'Finale',
    startList: [
      { bib: '101', name: 'Salum Ageze Kashafala', club: 'IL Norna-Salhus', personalBest: '10.43s', seasonBest: '10.48s' },
      { bib: '102', name: 'Jacob Vaula', club: 'Gular IL', personalBest: '10.46s', seasonBest: '10.46s' },
      { bib: '103', name: 'Even Meinseth', club: 'Øystese IL', personalBest: '10.51s', seasonBest: '10.55s' }
    ],
    results: [
      { rank: 1, bib: '101', name: 'Salum Ageze Kashafala', club: 'IL Norna-Salhus', result: '10.39s', info: 'Gull' },
      { rank: 2, bib: '102', name: 'Jacob Vaula', club: 'Gular IL', result: '10.43s', info: 'Sølv' },
      { rank: 3, bib: '103', name: 'Even Meinseth', club: 'Øystese IL', result: '10.48s', info: 'Bronse' }
    ]
  },

  // Fredag 24.07
  {
    id: '10',
    day: 'Fredag 24.07',
    time: '10:00',
    gender: 'Menn',
    name: 'Spyd',
    type: 'Finale',
    startList: [
      { bib: '131', name: 'Kasper Sagen', club: 'IL i BUL', personalBest: '79.90m', seasonBest: '78.50m' },
      { bib: '132', name: 'Myron Weinberg', club: 'IK Tjalve', personalBest: '75.20m', seasonBest: '74.10m' },
      { bib: '133', name: 'Daniel Thrana', club: 'Kristiansands IF', personalBest: '72.10m', seasonBest: '71.50m' }
    ],
    results: [
      { rank: 1, bib: '131', name: 'Kasper Sagen', club: 'IL i BUL', result: '77.92m', info: 'Gull' },
      { rank: 2, bib: '132', name: 'Myron Weinberg', club: 'IK Tjalve', result: '74.40m', info: 'Sølv' },
      { rank: 3, bib: '133', name: 'Daniel Thrana', club: 'Kristiansands IF', result: '71.20m', info: 'Bronse' }
    ]
  },
  {
    id: '11',
    day: 'Fredag 24.07',
    time: '10:30',
    gender: 'Kvinner',
    name: '400m',
    type: 'Forsøk',
    startList: [
      { bib: '207', name: 'Henriette Jæger', club: 'Aremark IF', personalBest: '50.81s', seasonBest: '50.81s' },
      { bib: '208', name: 'Lakeri Ertzgaard', club: 'IK Tjalve', personalBest: '52.95s', seasonBest: '53.20s' },
      { bib: '209', name: 'Line Kloster', club: 'Vidar SK', personalBest: '51.89s', seasonBest: '52.40s' }
    ],
    results: [
      { rank: 1, bib: '207', name: 'Henriette Jæger', club: 'Aremark IF', result: '51.20s', info: 'Q' },
      { rank: 2, bib: '209', name: 'Line Kloster', club: 'Vidar SK', result: '52.12s', info: 'Q' }
    ]
  },
  {
    id: '12',
    day: 'Fredag 24.07',
    time: '11:00',
    gender: 'Menn',
    name: '400m',
    type: 'Forsøk',
    startList: [
      { bib: '109', name: 'Karsten Warholm', club: 'Dimna IL', personalBest: '44.87s', seasonBest: '45.05s' },
      { bib: '110', name: 'Håvard Bentdal Ingvaldsen', club: 'Moelven IL', personalBest: '44.86s', seasonBest: '45.12s' },
      { bib: '111', name: 'Andreas Grimerud', club: 'Moelven IL', personalBest: '46.22s', seasonBest: '46.40s' }
    ],
    results: [
      { rank: 1, bib: '110', name: 'Håvard Bentdal Ingvaldsen', club: 'Moelven IL', result: '45.54s', info: 'Q' },
      { rank: 2, bib: '109', name: 'Karsten Warholm', club: 'Dimna IL', result: '45.68s', info: 'Q' }
    ]
  },
  {
    id: '13',
    day: 'Fredag 24.07',
    time: '12:30',
    gender: 'Kvinner',
    name: 'Stav',
    type: 'Finale',
    startList: [
      { bib: '241', name: 'Lene Retzius', club: 'IL i BUL', personalBest: '4.70m', seasonBest: '4.55m' },
      { bib: '242', name: 'Kitty Friele Faye', club: 'Fana IL', personalBest: '4.30m', seasonBest: '4.25m' },
      { bib: '243', name: 'Birgitte Kjuus', club: 'Ullensaker/Kisa IL', personalBest: '4.05m', seasonBest: '4.00m' }
    ],
    results: [
      { rank: 1, bib: '241', name: 'Lene Retzius', club: 'IL i BUL', result: '4.52m', info: 'Gull' },
      { rank: 2, bib: '242', name: 'Kitty Friele Faye', club: 'Fana IL', result: '4.30m', info: 'Sølv' },
      { rank: 3, bib: '243', name: 'Birgitte Kjuus', club: 'Ullensaker/Kisa IL', result: '3.90m', info: 'Bronse' }
    ]
  },
  {
    id: '14',
    day: 'Fredag 24.07',
    time: '13:30',
    gender: 'Kvinner',
    name: '400m',
    type: 'Semifinale',
    startList: [
      { bib: '207', name: 'Henriette Jæger', club: 'Aremark IF', personalBest: '50.81s', seasonBest: '50.81s' },
      { bib: '209', name: 'Line Kloster', club: 'Vidar SK', personalBest: '51.89s', seasonBest: '52.40s' }
    ],
    results: [
      { rank: 1, bib: '207', name: 'Henriette Jæger', club: 'Aremark IF', result: '50.95s', info: 'Q' }
    ]
  },
  {
    id: '15',
    day: 'Fredag 24.07',
    time: '14:00',
    gender: 'Menn',
    name: '400m',
    type: 'Semifinale',
    startList: [
      { bib: '109', name: 'Karsten Warholm', club: 'Dimna IL', personalBest: '44.87s', seasonBest: '45.05s' },
      { bib: '110', name: 'Håvard Bentdal Ingvaldsen', club: 'Moelven IL', personalBest: '44.86s', seasonBest: '45.12s' }
    ],
    results: [
      { rank: 1, bib: '110', name: 'Håvard Bentdal Ingvaldsen', club: 'Moelven IL', result: '45.10s', info: 'Q' }
    ]
  },
  {
    id: '16',
    day: 'Fredag 24.07',
    time: '15:30',
    gender: 'Menn',
    name: '800m',
    type: 'Forsøk',
    startList: [
      { bib: '113', name: 'Tobias Grønstad', club: 'IK Tjalve', personalBest: '1:44.81', seasonBest: '1:45.10' },
      { bib: '114', name: 'Ole Jakob Solbu', club: 'Ås IL', personalBest: '1:45.55', seasonBest: '1:45.90' },
      { bib: '115', name: 'Filip Ingebrigtsen', club: 'Sandnes IL', personalBest: '1:46.74', seasonBest: '1:47.50' }
    ]
  },
  {
    id: '17',
    day: 'Fredag 24.07',
    time: '16:00',
    gender: 'Kvinner',
    name: '800m',
    type: 'Forsøk',
    startList: [
      { bib: '211', name: 'Hedda Hynne', club: 'IK Tjalve', personalBest: '1:58.10', seasonBest: '2:01.50' },
      { bib: '212', name: 'Malin Nyfors', club: 'IK Tjalve', personalBest: '2:02.30', seasonBest: '2:03.10' },
      { bib: '213', name: 'Ingeborg Østgård', club: 'IK Tjalve', personalBest: '2:03.40', seasonBest: '2:04.20' }
    ]
  },

  // Lørdag 25.07
  {
    id: '18',
    day: 'Lørdag 25.07',
    time: '10:00',
    gender: 'Kvinner',
    name: 'Diskos',
    type: 'Finale',
    startList: [
      { bib: '251', name: 'Lotta Flatum', club: 'Brandbu IF', personalBest: '53.50m', seasonBest: '53.10m' },
      { bib: '252', name: 'Elisabeth Thon Rosvold', club: 'IK Tjalve', personalBest: '54.20m', seasonBest: '52.90m' },
      { bib: '253', name: 'Hanna Emilie Hjeltnes', club: 'Ullensaker/Kisa IL', personalBest: '48.90m', seasonBest: '47.50m' }
    ]
  },
  {
    id: '19',
    day: 'Lørdag 25.07',
    time: '10:45',
    gender: 'Menn',
    name: 'Tresteg',
    type: 'Finale',
    startList: [
      { bib: '141', name: 'Sondre Vie Ytrearne', club: 'Fana IL', personalBest: '16.12m', seasonBest: '15.90m' },
      { bib: '142', name: 'Henrik Flåtnes', club: 'Tønsberg FIK', personalBest: '16.05m', seasonBest: '15.80m' },
      { bib: '143', name: 'Viljar Gjerde', club: 'Norna-Salhus', personalBest: '15.45m', seasonBest: '15.20m' }
    ]
  },
  {
    id: '20',
    day: 'Lørdag 25.07',
    time: '11:30',
    gender: 'Kvinner',
    name: '400m',
    type: 'Finale',
    startList: [
      { bib: '207', name: 'Henriette Jæger', club: 'Aremark IF', personalBest: '50.81s', seasonBest: '50.81s' },
      { bib: '209', name: 'Line Kloster', club: 'Vidar SK', personalBest: '51.89s', seasonBest: '52.40s' },
      { bib: '208', name: 'Lakeri Ertzgaard', club: 'IK Tjalve', personalBest: '52.95s', seasonBest: '53.20s' }
    ]
  },
  {
    id: '21',
    day: 'Lørdag 25.07',
    time: '11:45',
    gender: 'Menn',
    name: '400m',
    type: 'Finale',
    startList: [
      { bib: '109', name: 'Karsten Warholm', club: 'Dimna IL', personalBest: '44.87s', seasonBest: '45.05s' },
      { bib: '110', name: 'Håvard Bentdal Ingvaldsen', club: 'Moelven IL', personalBest: '44.86s', seasonBest: '45.12s' },
      { bib: '111', name: 'Andreas Grimerud', club: 'Moelven IL', personalBest: '46.22s', seasonBest: '46.40s' }
    ]
  },
  {
    id: '22',
    day: 'Lørdag 25.07',
    time: '12:30',
    gender: 'Kvinner',
    name: '800m',
    type: 'Finale',
    startList: [
      { bib: '211', name: 'Hedda Hynne', club: 'IK Tjalve', personalBest: '1:58.10', seasonBest: '2:01.50' },
      { bib: '212', name: 'Malin Nyfors', club: 'IK Tjalve', personalBest: '2:02.30', seasonBest: '2:03.10' },
      { bib: '213', name: 'Ingeborg Østgård', club: 'IK Tjalve', personalBest: '2:03.40', seasonBest: '2:04.20' }
    ]
  },
  {
    id: '23',
    day: 'Lørdag 25.07',
    time: '12:45',
    gender: 'Menn',
    name: '800m',
    type: 'Finale',
    startList: [
      { bib: '113', name: 'Tobias Grønstad', club: 'IK Tjalve', personalBest: '1:44.81', seasonBest: '1:45.10' },
      { bib: '114', name: 'Ole Jakob Solbu', club: 'Ås IL', personalBest: '1:45.55', seasonBest: '1:45.90' },
      { bib: '115', name: 'Filip Ingebrigtsen', club: 'Sandnes IL', personalBest: '1:46.74', seasonBest: '1:47.50' }
    ]
  },
  {
    id: '24',
    day: 'Lørdag 25.07',
    time: '14:00',
    gender: 'Kvinner',
    name: '10000m',
    type: 'Finale',
    startList: [
      { bib: '281', name: 'Karoline Bjerkeli Grøvdal', club: 'IK Tjalve', personalBest: '30:50.84', seasonBest: '31:10.50' },
      { bib: '282', name: 'Hanne Mjøen Maridal', club: 'Strindheim IL', personalBest: '32:40.10', seasonBest: '32:55.30' },
      { bib: '283', name: 'Maria Sagnes Wågan', club: 'IK Tjalve', personalBest: '33:10.50', seasonBest: '33:30.20' }
    ]
  },
  {
    id: '25',
    day: 'Lørdag 25.07',
    time: '14:45',
    gender: 'Menn',
    name: '10000m',
    type: 'Finale',
    startList: [
      { bib: '181', name: 'Zerei Kbrom Mezngi', club: 'IK Tjalve', personalBest: '27:41.44', seasonBest: '28:10.10' },
      { bib: '182', name: 'Senay Fissehatsion', club: 'Ullensaker/Kisa IL', personalBest: '28:20.50', seasonBest: '28:45.30' },
      { bib: '183', name: 'Awet Nftalem Kibrab', club: 'Ullensaker/Kisa IL', personalBest: '28:35.20', seasonBest: '28:50.10' }
    ]
  }
];
