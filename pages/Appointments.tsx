import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Appointments: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'Próximas' | 'Histórico'>('Próximas');

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white dark:bg-[#111a22] p-4 pb-2 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-white/5">
        <button 
          onClick={() => navigate('/schedule')}
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] pr-10 text-slate-900 dark:text-white">
          Meus Agendamentos
        </h2>
      </header>

      {/* Segmented Control (Tabs) */}
      <div className="bg-white dark:bg-[#111a22] px-4 py-3 sticky top-[60px] z-40 shadow-sm dark:shadow-[0_4px_4px_rgba(0,0,0,0.2)]">
        <div className="flex h-10 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-[#233648] p-1">
          <label className="group relative flex cursor-pointer h-full flex-1 items-center justify-center overflow-hidden rounded-md text-sm font-medium leading-normal transition-all">
            <input 
              type="radio" 
              name="status-filter" 
              value="Próximas" 
              checked={filter === 'Próximas'} 
              onChange={() => setFilter('Próximas')}
              className="peer invisible w-0 absolute" 
            />
            <span className="z-10 truncate text-gray-500 peer-checked:text-slate-900 dark:text-[#92adc9] dark:peer-checked:text-white">Próximas</span>
            <div className="absolute inset-0 hidden bg-white shadow-sm peer-checked:block dark:bg-[#111a22] dark:shadow-[0_0_4px_rgba(0,0,0,0.1)] rounded-md m-[2px]"></div>
          </label>
          <label className="group relative flex cursor-pointer h-full flex-1 items-center justify-center overflow-hidden rounded-md text-sm font-medium leading-normal transition-all">
            <input 
              type="radio" 
              name="status-filter" 
              value="Histórico" 
              checked={filter === 'Histórico'}
              onChange={() => setFilter('Histórico')}
              className="peer invisible w-0 absolute" 
            />
            <span className="z-10 truncate text-gray-500 peer-checked:text-slate-900 dark:text-[#92adc9] dark:peer-checked:text-white">Histórico</span>
            <div className="absolute inset-0 hidden bg-white shadow-sm peer-checked:block dark:bg-[#111a22] dark:shadow-[0_0_4px_rgba(0,0,0,0.1)] rounded-md m-[2px]"></div>
          </label>
        </div>
      </div>

      {/* Content Area */}
      <main className="flex flex-col gap-4 p-4">
        {/* Appointment Card 1 (Confirmado) */}
        <article className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#192633] shadow-sm ring-1 ring-gray-200 dark:ring-white/5">
          <div className="p-4 flex gap-4">
            <div className="flex flex-col gap-2 flex-[2_2_0px]">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <span className="material-symbols-outlined mr-1 !text-[14px]">check_circle</span>
                  Confirmado
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-[#92adc9]">12 AGO • 14:30</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">Clínico Geral</h3>
                <div className="mt-1 flex items-start gap-1 text-sm text-slate-500 dark:text-[#92adc9]">
                  <span className="material-symbols-outlined !text-[16px] mt-0.5 shrink-0">location_on</span>
                  <span>UPA 24h - Unidade Centro</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined !text-[14px] text-slate-400 dark:text-slate-600">lock</span>
                <p className="text-[10px] text-slate-400 dark:text-slate-600 leading-none">Dados protegidos (LGPD)</p>
              </div>
            </div>
            <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: 'url("https://placeholder.pics/svg/300")'}}></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="material-symbols-outlined text-white drop-shadow-md">map</span>
              </div>
            </div>
          </div>
          <div className="flex border-t border-gray-100 bg-gray-50/50 p-3 dark:border-white/5 dark:bg-white/5">
            <div className="flex w-full gap-3">
              <button className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#192633]">
                <span className="material-symbols-outlined !text-[18px]">edit_calendar</span>
                <span className="truncate">Remarcar</span>
              </button>
              <button className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:border-red-900/30 dark:bg-red-900/10 dark:text-red-400 dark:hover:bg-red-900/20 dark:focus:ring-offset-[#192633]">
                <span className="truncate">Cancelar</span>
              </button>
            </div>
          </div>
        </article>

        {/* Appointment Card 2 (Pendente) */}
        <article className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#192633] shadow-sm ring-1 ring-gray-200 dark:ring-white/5">
          <div className="p-4 flex gap-4">
            <div className="flex flex-col gap-2 flex-[2_2_0px]">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                  <span className="material-symbols-outlined mr-1 !text-[14px]">schedule</span>
                  Pendente
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-[#92adc9]">20 AGO • 09:00</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">Pediatria</h3>
                <div className="mt-1 flex items-start gap-1 text-sm text-slate-500 dark:text-[#92adc9]">
                  <span className="material-symbols-outlined !text-[16px] mt-0.5 shrink-0">location_on</span>
                  <span>UPA Zona Norte</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined !text-[14px] text-slate-400 dark:text-slate-600">lock</span>
                <p className="text-[10px] text-slate-400 dark:text-slate-600 leading-none">Dados protegidos (LGPD)</p>
              </div>
            </div>
            <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: 'url("https://placeholder.pics/svg/300")'}}></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="material-symbols-outlined text-white drop-shadow-md">map</span>
              </div>
            </div>
          </div>
          <div className="flex border-t border-gray-100 bg-gray-50/50 p-3 dark:border-white/5 dark:bg-white/5">
            <div className="flex w-full gap-3">
              <button className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#192633]">
                <span className="material-symbols-outlined !text-[18px]">edit_calendar</span>
                <span className="truncate">Remarcar</span>
              </button>
              <button className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:border-red-900/30 dark:bg-red-900/10 dark:text-red-400 dark:hover:bg-red-900/20 dark:focus:ring-offset-[#192633]">
                <span className="truncate">Cancelar</span>
              </button>
            </div>
          </div>
        </article>

        {/* Appointment Card 3 (Agendado) */}
        <article className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#192633] shadow-sm ring-1 ring-gray-200 dark:ring-white/5">
          <div className="p-4 flex gap-4">
            <div className="flex flex-col gap-2 flex-[2_2_0px]">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                  <span className="material-symbols-outlined mr-1 !text-[14px]">event</span>
                  Agendado
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-[#92adc9]">15 SET • 10:00</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">Ortopedia</h3>
                <div className="mt-1 flex items-start gap-1 text-sm text-slate-500 dark:text-[#92adc9]">
                  <span className="material-symbols-outlined !text-[16px] mt-0.5 shrink-0">location_on</span>
                  <span>UPA Sul - Trauma</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined !text-[14px] text-slate-400 dark:text-slate-600">lock</span>
                <p className="text-[10px] text-slate-400 dark:text-slate-600 leading-none">Dados protegidos (LGPD)</p>
              </div>
            </div>
            <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: 'url("https://placeholder.pics/svg/300")'}}></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="material-symbols-outlined text-white drop-shadow-md">map</span>
              </div>
            </div>
          </div>
          <div className="flex border-t border-gray-100 bg-gray-50/50 p-3 dark:border-white/5 dark:bg-white/5">
            <div className="flex w-full gap-3">
              <button className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#192633]">
                <span className="material-symbols-outlined !text-[18px]">edit_calendar</span>
                <span className="truncate">Remarcar</span>
              </button>
              <button className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:border-red-900/30 dark:bg-red-900/10 dark:text-red-400 dark:hover:bg-red-900/20 dark:focus:ring-offset-[#192633]">
                <span className="truncate">Cancelar</span>
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* Floating Action Button Area / Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent dark:from-[#101922] dark:via-[#101922] dark:to-transparent z-50">
        <button 
          onClick={() => navigate('/schedule')}
          className="w-full flex h-14 cursor-pointer items-center justify-center gap-3 rounded-xl bg-primary shadow-lg shadow-primary/30 text-white transition-transform active:scale-[0.98]"
        >
          <span className="material-symbols-outlined">add_circle</span>
          <span className="text-base font-bold tracking-wide">Agendar Nova Consulta</span>
        </button>
      </div>
    </div>
  );
};

export default Appointments;