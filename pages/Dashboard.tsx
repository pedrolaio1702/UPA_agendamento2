import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden min-h-screen">
      {/* Mobile Drawer Navigation */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300 ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleDrawer}
      ></div>
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-background-dark dark:bg-[#0d141c] z-50 shadow-2xl border-r border-slate-800 transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center gap-3 px-2 pb-6 pt-4 border-b border-slate-800/50 mb-4">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              RS
            </div>
            <div>
              <p className="text-white text-base font-bold leading-tight">Dr. Ricardo Silva</p>
              <p className="text-slate-400 text-xs">Administrador Geral</p>
            </div>
          </div>
          <nav className="flex-1 space-y-2">
            <button className="flex items-center gap-4 px-4 py-3 rounded-lg bg-primary/20 text-primary border border-primary/10 w-full">
              <span className="material-symbols-outlined">grid_view</span>
              <span className="text-sm font-bold">Dashboard</span>
            </button>
            <button onClick={() => navigate('/appointments')} className="flex items-center gap-4 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors w-full">
              <span className="material-symbols-outlined">calendar_month</span>
              <span className="text-sm font-medium">Agendamentos</span>
            </button>
            <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors w-full">
              <span className="material-symbols-outlined">bar_chart</span>
              <span className="text-sm font-medium">Relatórios</span>
            </button>
            <button onClick={() => navigate('/profile')} className="flex items-center gap-4 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors w-full">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Configurações</span>
            </button>
          </nav>
          <div className="mt-auto px-2">
            <button 
              onClick={() => navigate('/welcome')}
              className="flex items-center gap-3 text-red-400 text-sm font-medium p-2 hover:bg-red-400/10 rounded-lg w-full"
            >
              <span className="material-symbols-outlined">logout</span>
              Sair
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative flex flex-col w-full max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark pb-20">
        {/* Top App Bar */}
        <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={toggleDrawer} className="p-2 -ml-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-white">
              <span className="material-symbols-outlined text-[28px]">menu</span>
            </button>
            <h1 className="text-lg font-bold text-center flex-1 pr-8">Dashboard UPA</h1>
            <div className="relative">
              <div className="size-2 bg-red-500 rounded-full absolute top-1 right-1 border-2 border-background-dark"></div>
              <button className="p-2 -mr-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-white">
                <span className="material-symbols-outlined">notifications</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col gap-6 p-4">
          {/* Date Filter / Greeting */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Hoje, 24 Out</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Resumo do Plantão</h2>
            </div>
            <button className="size-10 bg-slate-200 dark:bg-surface-dark rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3">
            {/* Main Card Spans Full Width */}
            <div className="col-span-2 bg-white dark:bg-surface-dark p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <span className="bg-primary/20 text-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined">assignment_ind</span>
                  </span>
                  <span className="flex items-center text-accent-green text-sm font-bold bg-accent-green/10 px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-sm mr-1">trending_up</span> +5%
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Agendamentos</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">124</p>
              </div>
            </div>

            {/* Secondary Cards */}
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-2">
                <span className="material-symbols-outlined text-accent-yellow">hourglass_top</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">18</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mt-1">Pacientes<br/>Aguardando</p>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-2">
                <span className="material-symbols-outlined text-accent-orange">bed</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">06</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mt-1">Vagas<br/>Disponíveis</p>
              </div>
            </div>
          </div>

          {/* Bar Chart Section */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 dark:text-white">Atendimentos por Área</h3>
              <button className="text-primary text-sm font-semibold">Ver todos</button>
            </div>
            {/* Simple CSS Bar Chart */}
            <div className="flex items-end gap-3 h-40 w-full justify-between">
              <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                <div className="w-full bg-slate-100 dark:bg-slate-700/50 rounded-t-md relative h-32 flex items-end overflow-hidden">
                  <div className="w-full bg-primary/40 dark:bg-primary/40 h-[65%] rounded-t-md group-hover:bg-primary/60 transition-colors relative"></div>
                  <div className="absolute bottom-0 inset-x-0 text-center text-[10px] font-bold text-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity">65</div>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Cliníco</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                <div className="w-full bg-slate-100 dark:bg-slate-700/50 rounded-t-md relative h-32 flex items-end overflow-hidden">
                  <div className="w-full bg-primary h-[85%] rounded-t-md group-hover:bg-primary-dark transition-colors relative"></div>
                  <div className="absolute bottom-0 inset-x-0 text-center text-[10px] font-bold text-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity">85</div>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Pediatria</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                <div className="w-full bg-slate-100 dark:bg-slate-700/50 rounded-t-md relative h-32 flex items-end overflow-hidden">
                  <div className="w-full bg-primary/60 dark:bg-primary/60 h-[45%] rounded-t-md group-hover:bg-primary/80 transition-colors relative"></div>
                  <div className="absolute bottom-0 inset-x-0 text-center text-[10px] font-bold text-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity">45</div>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Ortopedia</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                <div className="w-full bg-slate-100 dark:bg-slate-700/50 rounded-t-md relative h-32 flex items-end overflow-hidden">
                  <div className="w-full bg-primary/30 dark:bg-primary/30 h-[30%] rounded-t-md group-hover:bg-primary/50 transition-colors relative"></div>
                  <div className="absolute bottom-0 inset-x-0 text-center text-[10px] font-bold text-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity">30</div>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Cardio</span>
              </div>
            </div>
          </div>

          {/* Recent Appointments List */}
          <div>
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Próximos Agendamentos</h3>
              <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg h-12 w-12 text-slate-600 dark:text-slate-300">
                    <span className="text-[10px] font-bold uppercase">Hoje</span>
                    <span className="text-base font-bold">14:00</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Maria Oliveira</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Pediatria • Dr. Santos</p>
                  </div>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-accent-green/10 text-accent-green border border-accent-green/20">
                    Confirmado
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg h-12 w-12 text-slate-600 dark:text-slate-300">
                    <span className="text-[10px] font-bold uppercase">Hoje</span>
                    <span className="text-base font-bold">14:30</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">João Pereira</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Ortopedia • Dra. Lima</p>
                  </div>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20">
                    Em Espera
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg h-12 w-12 text-slate-600 dark:text-slate-300">
                    <span className="text-[10px] font-bold uppercase">Hoje</span>
                    <span className="text-base font-bold">15:00</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Ana Souza</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Clínico Geral • Dr. Ricardo</p>
                  </div>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-accent-green/10 text-accent-green border border-accent-green/20">
                    Confirmado
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg h-12 w-12 text-slate-600 dark:text-slate-300">
                    <span className="text-[10px] font-bold uppercase">Hoje</span>
                    <span className="text-base font-bold">15:30</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Carlos Mendes</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Cardiologia • Dr. Silva</p>
                  </div>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20">
                    Em Espera
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Navigation Bar (Alternative for Mobile) */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 h-16 px-6 flex items-center justify-between z-20">
          <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-[24px]">home</span>
            <span className="text-[10px] font-medium">Início</span>
          </button>
          <button onClick={() => navigate('/appointments')} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            <span className="text-[10px] font-medium">Agenda</span>
          </button>
          {/* Floating Action Button effect */}
          <div className="relative -top-6">
            <button 
              onClick={() => navigate('/schedule')}
              className="size-14 bg-primary hover:bg-primary-dark shadow-lg shadow-primary/30 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-[28px]">add</span>
            </button>
          </div>
          <button onClick={() => navigate('/select-unit')} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[24px]">group</span>
            <span className="text-[10px] font-medium">Pacientes</span>
          </button>
          <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[24px]">settings</span>
            <span className="text-[10px] font-medium">Ajustes</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;