import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSpecialty, setSelectedSpecialty] = useState('Geral');
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedTime, setSelectedTime] = useState('08:30');

  const specialties = [
    { id: 'Geral', name: 'Clínico Geral', icon: 'stethoscope' },
    { id: 'Pediatria', name: 'Pediatria', icon: 'child_care' },
    { id: 'Odonto', name: 'Odontologia', icon: 'dentistry' },
  ];

  const timeSlots = [
    { time: '08:00', status: 'available' },
    { time: '08:30', status: 'available' },
    { time: '09:00', status: 'full' },
    { time: '09:30', status: 'available' },
    { time: '10:00', status: 'available' },
    { time: '10:30', status: 'available' },
    { time: '11:00', status: 'full' },
    { time: '11:30', status: 'available' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col pb-28">
      {/* Top App Bar */}
      <div className="sticky top-0 z-20 flex items-center bg-background-light dark:bg-background-dark p-4 border-b border-slate-200 dark:border-slate-800/60 shadow-sm dark:shadow-none">
        <button 
          onClick={() => navigate('/select-unit')}
          aria-label="Voltar" 
          className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
        </button>
        <h1 className="ml-2 text-xl font-bold leading-tight tracking-tight flex-1">Agendar Consulta</h1>
        <button aria-label="Ajuda" className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">help</span>
        </button>
      </div>

      {/* Specialty Selector */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 pb-3">
          <h2 className="text-xl font-bold tracking-tight">Especialidade</h2>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2">
          {specialties.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setSelectedSpecialty(spec.id)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-transform active:scale-95 ${
                selectedSpecialty === spec.id
                  ? 'bg-primary shadow-lg shadow-primary/25'
                  : 'bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${selectedSpecialty === spec.id ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                {spec.icon}
              </span>
              <p className={`text-sm font-medium leading-normal ${selectedSpecialty === spec.id ? 'text-white font-bold' : 'text-slate-600 dark:text-slate-300'}`}>
                {spec.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Picker */}
      <div className="mt-6 px-4">
        <h2 className="text-xl font-bold tracking-tight mb-4">Selecione a Data</h2>
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4 px-2">
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-200">chevron_left</span>
            </button>
            <span className="text-base font-bold text-slate-900 dark:text-white">Dezembro 2023</span>
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-200">chevron_right</span>
            </button>
          </div>
          <div className="grid grid-cols-7 mb-2">
            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
              <div key={i} className="text-slate-400 text-xs font-bold text-center py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-2">
            <div className="aspect-square"></div>
            <div className="aspect-square"></div>
            <div className="aspect-square"></div>
            <div className="aspect-square"></div>
            {[1, 2, 3].map(d => (
              <button key={d} className="aspect-square flex items-center justify-center text-sm font-medium text-slate-400 cursor-not-allowed">{d}</button>
            ))}
            {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(d => (
              <button key={d} onClick={() => setSelectedDate(d)} className="aspect-square flex items-center justify-center">
                <div className={`flex size-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  selectedDate === d 
                    ? 'bg-primary text-white font-bold shadow-md shadow-primary/30' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                }`}>
                  {d}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Time Slots */}
      <div className="mt-8 px-4">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">Horários Disponíveis</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-primary"></div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Livre</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Lotado</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {timeSlots.map((slot, index) => {
            const isFull = slot.status === 'full';
            const isSelected = selectedTime === slot.time;
            
            return (
              <button
                key={index}
                disabled={isFull}
                onClick={() => !isFull && setSelectedTime(slot.time)}
                className={`group relative flex flex-col items-center justify-center gap-1 rounded-xl py-3 transition-all ${
                  isSelected 
                    ? 'bg-primary shadow-lg shadow-primary/30 ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark' 
                    : isFull 
                      ? 'border border-transparent bg-slate-100 dark:bg-slate-800/40 opacity-50 cursor-not-allowed'
                      : 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark hover:border-primary active:scale-95'
                }`}
              >
                <span className={`text-sm ${
                  isSelected ? 'font-bold text-white' : 
                  isFull ? 'font-medium text-slate-400 dark:text-slate-500 line-through decoration-2' : 
                  'font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary'
                }`}>
                  {slot.time}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Action */}
      <div className="fixed bottom-0 left-0 w-full z-30 p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
        <div className="mb-3 flex items-start gap-2 px-1 opacity-70">
          <span className="material-symbols-outlined text-[16px] text-slate-500 dark:text-slate-400 mt-0.5">lock</span>
          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            Seus dados estão protegidos pela <strong>LGPD</strong>. Ao confirmar, você consente com o uso dos dados para fins médicos.
          </p>
        </div>
        <button 
          onClick={() => navigate('/appointments')}
          className="w-full rounded-xl bg-primary py-4 text-center text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-blue-600 active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Confirmar Agendamento
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
        </button>
      </div>
    </div>
  );
};

export default Schedule;