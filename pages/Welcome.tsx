import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    if (agreed) {
      navigate('/select-unit');
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col group/design-root overflow-hidden bg-background-light dark:bg-background-dark">
      {/* TopAppBar */}
      <header className="flex items-center bg-background-light dark:bg-background-dark px-4 py-3 justify-between border-b border-gray-200 dark:border-gray-800 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg text-primary flex items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>medical_services</span>
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">UPA Digital</h2>
        </div>
        <button aria-label="Opções de Acessibilidade" className="text-[#111418] dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined">accessibility_new</span>
        </button>
      </header>

      {/* Main Content Area (Scrollable) */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-40 bg-background-light dark:bg-background-dark">
        {/* Headline & Welcome */}
        <div className="pt-6 px-4 pb-2 text-center">
          <h2 className="text-[#111418] dark:text-white tracking-light text-[28px] font-bold leading-tight pb-2">Bem-vindo ao Agendamento UPA</h2>
          <p className="text-[#637588] dark:text-[#93a1b0] text-base font-normal leading-normal">Seu agendamento rápido, seguro e acessível.</p>
        </div>

        {/* Hero Image Card */}
        <div className="px-4 py-4">
          <div 
            className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[140px] shadow-lg relative overflow-hidden group" 
            style={{backgroundImage: 'linear-gradient(180deg, rgba(19, 127, 236, 0) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOQ2rhZk5l-16geVnFMMcKJLvL7DQG0D1S58UA3dYRFS-zenHG5TefPcH6Udlulu2RA_ANv6OMPJqx15LITD-eui5-NUve0mbBRmfgOdq_KN0fghLbK5BrUHpzsFG-nDmzn50AeCiVHoK1rfCShctDjrtYTrzLgqQ9N_Iv1NXizIcwhEKivdtOTG1UiJv86aj9BZ4X3c_wePq1dwvsCoLr3keAR1pwwjSN_RiWccMHzWbQCCQIsTtKFN7psiMqtoknTGBhDKEl6ss")'}}
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            <div className="flex w-full items-end justify-between gap-4 p-4 relative z-10">
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-white text-sm">verified_user</span>
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Segurança Garantida</span>
                </div>
                <p className="text-white tracking-light text-xl font-bold leading-tight">Seus dados estão protegidos</p>
              </div>
            </div>
          </div>
        </div>

        {/* LGPD Consent Text Block */}
        <div className="px-4 pb-6">
          <div className="bg-white dark:bg-[#1C2630] rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <span className="material-symbols-outlined">gavel</span>
              <h3 classNam="text-base font-bold text-[#111418] dark:text-white">Termos de Uso e Privacidade</h3>
            </div>
            <p className="text-[#637588] dark:text-[#c4cbd3] text-sm leading-relaxed mb-4 font-body">
              Para realizar o agendamento de sua consulta, precisamos coletar alguns dados pessoais essenciais, como seu <strong>Nome Completo</strong> e <strong>CPF</strong>.
            </p>
            <p className="text-[#637588] dark:text-[#c4cbd3] text-sm leading-relaxed mb-4 font-body">
              Respeitamos sua privacidade e garantimos que seus dados serão utilizados <strong>exclusivamente</strong> para fins de atendimento médico e identificação no sistema de saúde, em total conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
            </p>
            <div className="bg-background-light dark:bg-background-dark rounded-lg p-3 flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#637588] dark:text-[#93a1b0] text-[20px] mt-0.5">info</span>
              <p className="text-xs text-[#637588] dark:text-[#93a1b0] leading-snug">
                Seus dados não serão compartilhados com terceiros para fins comerciais.
              </p>
            </div>
          </div>
        </div>
        <div className="h-6"></div>
      </main>

      {/* Sticky Footer Action Area */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-white/95 dark:bg-[#101922]/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 p-4 pb-8 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Checkbox Component */}
        <div className="mb-4">
          <label className="flex gap-x-3 items-start cursor-pointer group">
            <div className="relative flex items-center">
              <input 
                type="checkbox" 
                id="consent-check"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="peer h-6 w-6 cursor-pointer appearance-none rounded border-2 border-gray-300 dark:border-gray-600 bg-transparent checked:border-primary checked:bg-primary transition-all focus:ring-2 focus:ring-primary/20 focus:outline-none" 
              />
              <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"></path>
                </svg>
              </span>
            </div>
            <div className="flex-1">
              <p className="text-[#111418] dark:text-white text-sm font-medium leading-tight pt-0.5 group-hover:text-primary transition-colors">
                Li e concordo com o tratamento dos meus dados.
              </p>
            </div>
          </label>
        </div>

        {/* Primary Action Button */}
        <button 
          onClick={handleContinue}
          disabled={!agreed}
          className={`flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary/30 ${!agreed ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span className="text-base font-bold tracking-wide">Aceitar e Continuar</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        {/* Secondary Link */}
        <div className="mt-4 flex justify-center">
          <button className="text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors py-2 px-4">
            Ler Política de Privacidade Completa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;