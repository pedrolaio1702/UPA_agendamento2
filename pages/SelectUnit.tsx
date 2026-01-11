import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectUnit: React.FC = () => {
  const navigate = useNavigate();
  const [selectedUnit, setSelectedUnit] = useState('1');

  const units = [
    { id: '1', name: 'UPA 24h - Zona Sul', address: 'Av. Interlagos, 1234', distance: '1.2 km', open: true },
    { id: '2', name: 'UPA Central', address: 'Rua da Saúde, 500', distance: '3.5 km', open: false },
    { id: '3', name: 'UPA Zona Norte', address: 'Av. das Nações, 890', distance: '5.0 km', open: false },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-gray-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 border-b border-gray-200 dark:border-surface-border">
        <button 
          onClick={() => navigate('/welcome')}
          aria-label="Voltar" 
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-surface-border transition-colors text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="ml-2 text-lg font-bold leading-tight flex-1 text-center pr-10 text-gray-900 dark:text-white">Selecionar Unidade</h2>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col pb-24">
        <div className="px-4 pt-6 pb-2">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Onde você deseja ser atendido?
          </h1>
          <p className="text-gray-500 dark:text-text-secondary mt-1 text-sm">
            Selecione a região para ver as unidades disponíveis.
          </p>
        </div>

        {/* Location Filters */}
        <div className="flex flex-col gap-4 px-4 py-4">
          <div className="relative w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2" htmlFor="state-select">
              Estado (UF)
            </label>
            <div className="relative">
              <select defaultValue="SP" className="appearance-none w-full bg-white dark:bg-surface-dark border border-gray-300 dark:border-surface-border text-gray-900 dark:text-white text-base rounded-lg focus:ring-primary focus:border-primary block p-3 pr-10 h-14 transition-colors" id="state-select">
                <option disabled value="">Selecione o estado</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-text-secondary">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2" htmlFor="city-select">
              Cidade
            </label>
            <div className="relative">
              <select defaultValue="saopaulo" className="appearance-none w-full bg-white dark:bg-surface-dark border border-gray-300 dark:border-surface-border text-gray-900 dark:text-white text-base rounded-lg focus:ring-primary focus:border-primary block p-3 pr-10 h-14 transition-colors" id="city-select">
                <option disabled value="">Selecione a cidade</option>
                <option value="saopaulo">São Paulo</option>
                <option value="campinas">Campinas</option>
                <option value="santos">Santos</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-text-secondary">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-200 dark:bg-surface-border mx-4 my-2"></div>

        {/* Units List */}
        <div className="px-4 py-4 flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-text-secondary uppercase tracking-wider mb-1">
            Unidades encontradas
          </h3>
          <div role="radiogroup" aria-label="Lista de unidades de saúde" className="flex flex-col gap-3">
            {units.map((unit) => (
              <label 
                key={unit.id}
                className={`group relative flex items-center gap-4 rounded-xl border ${selectedUnit === unit.id ? 'border-2 border-primary bg-primary/5 dark:bg-surface-dark' : 'border-gray-200 dark:border-surface-border bg-white dark:bg-surface-dark'} p-4 cursor-pointer transition-all shadow-sm`}
              >
                <input 
                  type="radio" 
                  name="unit-selection" 
                  className="peer sr-only" 
                  checked={selectedUnit === unit.id}
                  onChange={() => setSelectedUnit(unit.id)}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-base font-bold text-gray-900 dark:text-white truncate">{unit.name}</p>
                    {unit.open && (
                      <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                        Aberto agora
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-text-secondary mb-1">{unit.address}</p>
                  <div className={`flex items-center gap-1 text-xs font-medium ${selectedUnit === unit.id ? 'text-primary' : 'text-gray-500 dark:text-text-secondary'}`}>
                    <span className="material-symbols-outlined text-[16px]">near_me</span>
                    <span>{unit.distance}</span>
                  </div>
                </div>
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-white transition-all ${selectedUnit === unit.id ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                </div>
                <div className={`absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full border-2 border-gray-300 dark:border-surface-border pointer-events-none ${selectedUnit === unit.id ? 'opacity-0' : 'opacity-100'}`}></div>
              </label>
            ))}
          </div>
        </div>

        <div className="px-6 py-2 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            Sua localização é usada apenas para esta busca.
          </p>
        </div>
      </main>

      {/* Bottom Action & Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-surface-border pb-safe">
        <div className="p-4 bg-gradient-to-t from-white via-white to-transparent dark:from-background-dark dark:via-background-dark">
          <button 
            onClick={() => navigate('/schedule')}
            className="w-full h-14 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] focus:ring-4 focus:ring-primary/30 outline-none"
          >
            Próximo
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <nav className="flex justify-around items-center h-16 bg-white dark:bg-[#0d141c]">
          <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center justify-center w-full h-full text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors gap-1">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Início</span>
          </button>
          <button onClick={() => navigate('/appointments')} className="flex flex-col items-center justify-center w-full h-full text-primary gap-1 relative">
            <span className="material-symbols-outlined fill-current">calendar_month</span>
            <span className="text-[10px] font-bold">Consultas</span>
            <span className="absolute top-2 right-1/3 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-[#0d141c]"></span>
          </button>
          <button onClick={() => navigate('/profile')} className="flex flex-col items-center justify-center w-full h-full text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors gap-1">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Perfil</span>
          </button>
        </nav>
        <div className="h-[env(safe-area-inset-bottom)] w-full bg-white dark:bg-[#0d141c]"></div>
      </div>
    </div>
  );
};

export default SelectUnit;