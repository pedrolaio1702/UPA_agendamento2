import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white dark:bg-[#111a22] p-4 pb-2 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-white/5">
        <button 
          onClick={() => navigate('/select-unit')}
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] pr-10 text-slate-900 dark:text-white">
          Perfil e Privacidade
        </h2>
      </header>

      <main className="flex flex-col gap-6 p-4">
        <div className="flex flex-col items-center justify-center gap-3 pt-2 pb-2">
          <div className="relative">
            <img 
              alt="Foto de Perfil" 
              className="size-24 rounded-full object-cover ring-4 ring-white dark:ring-[#192633] shadow-md" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAArXdWHmt5ybFrPU9T4qeu-mCfqfg5njNsmXnzq9K2JeTFuEH7bfSm2zItmg8YIZNMdXuYmyCms_I-zoXubrwpJwW2bb2D2uh8KiW9Ed8a_SCAjE9HlCPi6qP-j6LDUl1QQ9XyJ7PY2VibzD1B-KPVC5rHLy1iObjb1ZTvdSgs1n3pIJSd1QFU2YIpsNyiuMfAIPG2ivJjKhkk40F_GKcEKTTs4N7rhwA5Yfae5LRfO7V9_k1pmiCdsg7YBvnMFHM3LLCJKPvBzyI" 
            />
            <button className="absolute bottom-0 right-0 flex size-8 items-center justify-center rounded-full bg-primary text-white shadow-sm ring-2 ring-white dark:ring-[#101922]">
              <span className="material-symbols-outlined !text-[16px]">edit</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Maria Oliveira</h1>
            <div className="mt-1 inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 dark:bg-white/5">
              <span className="material-symbols-outlined !text-[14px] text-slate-500 dark:text-slate-400">badge</span>
              <p className="text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300">CPF: ***.492.103-**</p>
            </div>
          </div>
        </div>

        <section>
          <h3 className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#92adc9]">Dados Pessoais</h3>
          <div className="flex flex-col divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 dark:divide-white/5 dark:bg-[#192633] dark:ring-white/5">
            <button className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500">E-mail</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">maria.oliveira@email.com</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-600">chevron_right</span>
            </button>
            <button className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500">Telefone</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">(11) 98765-4321</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-600">chevron_right</span>
            </button>
            <button className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500">Endereço</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Rua das Flores, 123 - Centro</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-600">chevron_right</span>
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="material-symbols-outlined !text-[18px] text-primary">security</span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#92adc9]">Privacidade e LGPD</h3>
          </div>
          <div className="flex flex-col divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 dark:divide-white/5 dark:bg-[#192633] dark:ring-white/5">
            <button className="group flex w-full items-center gap-3 p-4 text-left hover:bg-gray-50 dark:hover:bg-white/5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <span className="material-symbols-outlined !text-[20px]">visibility</span>
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Visualizar Dados Coletados</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Veja quais informações temos sobre você</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-600">chevron_right</span>
            </button>
            <button className="group flex w-full items-center gap-3 p-4 text-left hover:bg-gray-50 dark:hover:bg-white/5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400">
                <span className="material-symbols-outlined !text-[20px]">download</span>
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Baixar Relatório de Dados</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Exportar formato portátil (XML/JSON)</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-600">chevron_right</span>
            </button>
            <button className="group flex w-full items-center gap-3 p-4 text-left hover:bg-gray-50 dark:hover:bg-white/5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400">
                <span className="material-symbols-outlined !text-[20px]">rule</span>
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Gerenciar Consentimentos</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Controle o uso dos seus dados</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-600">chevron_right</span>
            </button>
          </div>
        </section>

        <section className="mt-2">
          <button className="relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-red-50 p-4 text-left transition-all hover:bg-red-100 active:scale-[0.99] dark:bg-red-900/10 dark:hover:bg-red-900/20 ring-1 ring-red-100 dark:ring-red-500/20">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <span className="material-symbols-outlined !text-[20px]">delete_forever</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-red-700 dark:text-red-400">Excluir Conta e Dados</span>
                <span className="text-[11px] font-medium text-red-600/70 dark:text-red-400/70">Solicitar Direito ao Esquecimento</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-red-400 dark:text-red-500">chevron_right</span>
          </button>
          <p className="mt-3 px-2 text-center text-[10px] leading-relaxed text-slate-400 dark:text-slate-500">
            A exclusão dos dados está sujeita a prazos legais de retenção conforme Art. 16 da LGPD. Dados médicos podem ser retidos por obrigações regulatórias.
          </p>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-2 pb-6 pt-2 backdrop-blur-lg dark:border-white/5 dark:bg-[#111a22]/95 supports-[padding-bottom:env(safe-area-inset-bottom)]:pb-[env(safe-area-inset-bottom)]">
        <nav className="flex items-center justify-around">
          <button onClick={() => navigate('/dashboard')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-gray-400 transition-colors hover:text-primary dark:text-gray-500 dark:hover:text-primary">
            <span className="material-symbols-outlined !text-[26px] transition-transform group-active:scale-90">home</span>
            <span className="text-[10px] font-medium">Início</span>
          </button>
          <button onClick={() => navigate('/appointments')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-gray-400 transition-colors hover:text-primary dark:text-gray-500 dark:hover:text-primary">
            <div className="relative">
              <span className="material-symbols-outlined !text-[26px] transition-transform group-active:scale-90">calendar_month</span>
              <span className="absolute -right-1 -top-1 flex size-3 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white ring-2 ring-white dark:ring-[#111a22]">1</span>
            </div>
            <span className="text-[10px] font-medium">Consultas</span>
          </button>
          <button onClick={() => navigate('/profile')} className="group flex flex-1 flex-col items-center justify-center gap-1 p-2 text-primary transition-colors dark:text-primary">
            <span className="material-symbols-outlined !text-[26px] transition-transform group-active:scale-90 material-symbols-outlined-filled">person</span>
            <span className="text-[10px] font-bold">Perfil</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Profile;