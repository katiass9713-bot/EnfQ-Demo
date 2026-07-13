import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, CheckCircle2, Activity,
  Stethoscope, ArrowLeft, Loader2, ListChecks, HeartPulse, Sparkles,
  ShieldCheck, Trash2, Plus, Search, Users, ShieldAlert
} from 'lucide-react';
import { menu_principal } from './data';
import { Especialidade, SituacaoClinica, Diagnostico, Intervencao, ResultadoNoc } from './types';

import { useAuth } from './components/AuthProvider';
import { collection, onSnapshot, doc, setDoc, deleteDoc, query } from 'firebase/firestore';
import { db } from './lib/firebase';

// Flow steps
type Step = 'home' | 'situations' | 'diagnostics' | 'factors' | 'characteristics' | 'phrase' | 'interventions' | 'results' | 'loading_plan' | 'plan' | 'admin';

export default function App() {
  // Mock session to bypass login for this copy of the platform
  const user = { name: "Estudante", email: "visitante@enfq.com" };
  const loading = false;
  const error = null;
  const logout = () => { resetFlow(); };
  
  const [step, setStep] = useState<Step>('home');
  const [specialty, setSpecialty] = useState<Especialidade | null>(null);
  const [situation, setSituation] = useState<SituacaoClinica | null>(null);
  const [diagnosis, setDiagnosis] = useState<Diagnostico | null>(null);
  const [factors, setFactors] = useState<string[]>([]);
  const [characteristics, setCharacteristics] = useState<string[]>([]);
  const [activities, setActivities] = useState<Record<string, string[]>>({});
  const [nocs, setNocs] = useState<Record<string, number>>({});
  
  const [feedback, setFeedback] = useState<{ title: string, message: string } | null>(null);

  // Locked specialty for single-specialty demo access
  const [unlockedSpecialtyId, setUnlockedSpecialtyId] = useState<string | null>(null);
  const [demoFinished, setDemoFinished] = useState(false);

  // Promo Modal States
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [promoMessage, setPromoMessage] = useState('');
  const [promoCancelText, setPromoCancelText] = useState('Agora não');
  const [promoOnConfirm, setPromoOnConfirm] = useState<(() => void) | null>(null);
  const [promoOnCancel, setPromoOnCancel] = useState<(() => void) | null>(null);

  const triggerPromo = ({ message, cancelText, onConfirm, onCancel }: { message: string, cancelText?: string, onConfirm?: () => void, onCancel?: () => void }) => {
    setPromoMessage(message);
    setPromoCancelText(cancelText || 'Agora não');
    setPromoOnConfirm(() => onConfirm || null);
    setPromoOnCancel(() => onCancel || null);
    setShowPromoModal(true);
  };

  // Scroll to bottom detection
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    if (step !== 'plan') {
      setReachedBottom(false);
      return;
    }

    const handleScroll = () => {
      const threshold = 50; // px before bottom
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      if (totalHeight - scrollPosition <= threshold) {
        setReachedBottom(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initially in case there is no scrollbar
    const timer = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [step]);

  const resetFlow = () => {
    if (step === 'plan') {
      setDemoFinished(true);
    }
    setStep('home');
    setSpecialty(null);
    setSituation(null);
    setDiagnosis(null);
    setFactors([]);
    setCharacteristics([]);
    setActivities({});
    setNocs({});
  };

  const handleSelectSpecialty = (esp: Especialidade) => {
    if (demoFinished) {
      triggerPromo({
        message: `Deseja praticar com novos cenários e outras especialidades, como "${esp.titulo}"? Assine a plataforma completa da EnfQ para ter acesso ilimitado ao nosso banco de casos, diagnósticos, intervenções e suporte com IA!`,
        cancelText: "Voltar ao Início"
      });
      return;
    }
    setSpecialty(esp);
    setStep('situations');
  };

  const handleSelectSituation = (sit: SituacaoClinica) => {
    setSituation(sit);
    setStep('diagnostics');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-[#00CED1] animate-spin mb-4" />
        <p className="text-[#64748B] font-semibold">Carregando...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E3A8A] pb-24">
        <LoginView />
      </div>
    );
  }

  const progressPercentage = {
    home: 0,
    situations: 10,
    diagnostics: 20,
    factors: 35,
    characteristics: 50,
    phrase: 65,
    interventions: 80,
    results: 95,
    loading_plan: 100,
    plan: 100,
    admin: 0
  }[step];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E3A8A] pb-24">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0] px-4 py-3 shadow-sm">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {step !== 'home' && (
              <button 
                onClick={resetFlow} 
                className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                aria-label="Voltar ao Início"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="flex items-center gap-2 text-[#1E3A8A] font-[800] text-lg">
              <Stethoscope className="w-6 h-6 text-[#00CED1]" />
              <span>EnfQ</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {step !== 'home' && step !== 'plan' && step !== 'admin' && (
              <div className="text-xs font-semibold text-[#1E3A8A] bg-white border border-[#E2E8F0] px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                Fase {progressPercentage}%
              </div>
            )}
            {user?.email === 'katiass9713@gmail.com' && step !== 'admin' && (
              <button 
                onClick={() => setStep('admin')} 
                className="text-xs font-bold text-[#00CED1] hover:text-[#00b5b8] bg-[#00CED1]/10 px-3 py-1.5 rounded-full transition-colors"
              >
                Painel Adm
              </button>
            )}
            <button onClick={logout} className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors">Sair</button>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-slate-100 w-full">
          <div 
            className="h-full bg-[#00CED1] transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 pt-6">
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-2xl flex items-center gap-3">
             <div className="font-semibold">{error}</div>
          </div>
        )}
        <AnimatePresence mode="wait">
          {step === 'home' && (
            <HomeView 
              key="home" 
              userName={user?.name || 'Enfermeiro(a)'}
              userEmail={user?.email || ''}
              onSelect={handleSelectSpecialty} 
              onGoToAdmin={() => setStep('admin')}
            />
          )}
          {step === 'admin' && user?.email === 'katiass9713@gmail.com' && (
            <AdminView 
              key="admin"
              user={user}
            />
          )}
          {step === 'situations' && specialty && (
            <SituationsView 
              key="situations" 
              specialty={specialty} 
              onSelect={handleSelectSituation} 
            />
          )}
          {step === 'diagnostics' && situation && (
            <DiagnosticsView 
              key="diag" 
              situation={situation} 
              onSelect={(d) => {
                if (d.isCorrect) {
                  setDiagnosis(d); 
                  setStep('factors');
                } else {
                  setFeedback({ 
                    title: "Diagnóstico Inadequado", 
                    message: d.dica || "Este não parece ser o diagnóstico mais prioritário para o caso. Revise a queixa principal e os achados clínicos." 
                  });
                }
              }} 
            />
          )}
          {step === 'factors' && diagnosis && (
            <FactorsView 
              key="factors" 
              diagnosis={diagnosis} 
              selected={factors} 
              onChange={setFactors} 
              onNext={() => {
                const selectedObjs = diagnosis.fatores_relacionados.filter(f => factors.includes(f.texto));
                if (selectedObjs.some(f => !f.isCorrect) || !selectedObjs.some(f => f.isCorrect)) {
                  setFeedback({
                    title: "Fatores Relacionados",
                    message: "Alguns fatores selecionados não têm relação direta com o caso ou não são prioritários. Analise a evolução detalhadamente."
                  });
                } else {
                  setStep('characteristics');
                }
              }} 
            />
          )}
          {step === 'characteristics' && diagnosis && (
            <CharacteristicsView 
              key="char" 
              diagnosis={diagnosis} 
              selected={characteristics} 
              onChange={setCharacteristics} 
              onNext={() => {
                const selectedObjs = diagnosis.caracteristicas_definidoras.filter(c => characteristics.includes(c.texto));
                if (selectedObjs.some(c => !c.isCorrect) || !selectedObjs.some(c => c.isCorrect)) {
                  setFeedback({
                    title: "Características Definidoras",
                    message: "As características (sinais/sintomas) selecionadas não são as mais evidentes neste quadro clínico. Reveja o exame físico."
                  });
                } else {
                  triggerPromo({
                    message: "Excelente escolha! Você formulou com precisão as características definidoras. Na plataforma EnfQ completa, você tem acesso a dezenas de outros cenários e feedbacks de inteligência artificial de última geração para acelerar seu aprendizado. Assine para continuar!",
                    cancelText: "Agora não",
                    onCancel: () => {
                      setStep('phrase');
                    }
                  });
                }
              }} 
            />
          )}
          {step === 'phrase' && diagnosis && (
            <PhraseView 
              key="phrase" 
              diagnosis={diagnosis} 
              factors={factors} 
              characteristics={characteristics} 
              onNext={() => setStep('interventions')} 
            />
          )}
          {step === 'interventions' && diagnosis && (
            <InterventionsView 
              key="interventions" 
              diagnosis={diagnosis} 
              activities={activities}
              setActivities={setActivities}
              onNext={() => {
                let hasIncorrect = false;
                let hasCorrect = false;
                for (const [nicTitle, acts] of Object.entries(activities)) {
                  const selectedActs = acts as string[];
                  const nic = diagnosis.intervencoes.find(n => n.titulo_nic === nicTitle);
                  if (nic) {
                    if (!nic.isCorrect && selectedActs.length > 0) hasIncorrect = true;
                    const selectedObjs = nic.atividades_nic.filter(a => selectedActs.includes(a.texto));
                    if (selectedObjs.some(a => !a.isCorrect)) hasIncorrect = true;
                    if (selectedObjs.some(a => a.isCorrect)) hasCorrect = true;
                  }
                }
                if (hasIncorrect || !hasCorrect) {
                  setFeedback({
                    title: "Intervenções Inadequadas",
                    message: "As intervenções escolhidas não são as mais indicadas para resolver o problema prioritário. Pense na ação mais imediata."
                  });
                } else {
                  setStep('results');
                }
              }} 
            />
          )}
          {step === 'results' && diagnosis && (
            <ResultsView 
              key="results" 
              diagnosis={diagnosis} 
              selectedNocs={nocs}
              onChangeNocs={setNocs}
              onNext={() => {
                setStep('loading_plan');
              }}
            />
          )}
          {step === 'loading_plan' && (
            <LoadingPlanView 
              key="loading_plan"
              onComplete={() => setStep('plan')}
            />
          )}
          {step === 'plan' && situation && diagnosis && (
            <CarePlanView 
              key="plan"
              situation={situation}
              diagnosis={diagnosis}
              factors={factors}
              characteristics={characteristics}
              activities={activities}
              selectedNocs={Object.keys(nocs).filter(k => nocs[k] > 0)}
              onRestart={resetFlow}
              triggerPromo={triggerPromo}
              reachedBottom={reachedBottom}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {feedback && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-white border border-[#E2E8F0] shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-3xl p-6 z-50 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-[800] text-[#1E3A8A] text-lg leading-tight">{feedback.title}</h3>
              </div>
              <p className="text-[#64748B] font-[500] text-sm leading-relaxed">{feedback.message}</p>
              <button 
                onClick={() => setFeedback(null)}
                className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white font-[700] py-3 rounded-full mt-2 transition-colors"
              >
                Tentar Novamente
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <PromoModal 
          isOpen={showPromoModal}
          message={promoMessage}
          cancelText={promoCancelText}
          onConfirm={promoOnConfirm || undefined}
          onCancel={promoOnCancel || undefined}
          onClose={() => setShowPromoModal(false)}
        />
      </main>
    </div>
  );
}

function LoginView() {
  const { login, error, loading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      login(name, email);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center justify-center min-h-[75vh]">
      <div className="bg-white p-8 rounded-[32px] shadow-[0_8px_32px_rgba(30,58,138,0.08)] border border-[#E2E8F0] w-full max-w-sm text-center">
        <div className="w-20 h-20 bg-[#00CED1]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Stethoscope className="w-10 h-10 text-[#00CED1]" />
        </div>
        <h1 className="text-[28px] font-[800] text-[#1E3A8A] mb-2">EnfQ</h1>
        <p className="text-[#64748B] font-[500] text-sm mb-8">Raciocínio Clínico em Enfermagem</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome..."
            className="w-full px-6 py-4 rounded-[16px] border-2 border-[#E2E8F0] bg-[#F8FAFC] text-[#1E3A8A] font-[600] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00CED1] transition-colors"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail..."
            className="w-full px-6 py-4 rounded-[16px] border-2 border-[#E2E8F0] bg-[#F8FAFC] text-[#1E3A8A] font-[600] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00CED1] transition-colors"
          />

          {error && (
            <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-2xl flex items-center justify-center gap-3">
               <div className="font-semibold text-sm text-center">{error}</div>
            </div>
          )}

          <button
            type="submit"
            disabled={!name.trim() || !email.trim() || loading}
            className={`w-full py-4 rounded-full font-[700] text-[16px] flex items-center justify-center gap-2 transition-all ${
              !name.trim() || !email.trim() || loading
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-[#00CED1] text-white hover:bg-[#00b5b8] active:scale-[0.98] shadow-[0_10px_20px_rgba(0,206,209,0.3)]'
            }`}
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Entrar'}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

function HomeView({ userName, userEmail, onSelect, onGoToAdmin }: { key?: string; userName: string; userEmail: string; onSelect: (esp: Especialidade) => void; onGoToAdmin: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
      <div className="mb-8">
        <p className="text-[#64748B] text-[16px] font-semibold mb-1 uppercase tracking-wide">Bem-vindo(a), {userName || 'Enfermeiro(a)'}</p>
        <h1 className="text-[32px] font-[800] text-[#1E3A8A] leading-tight tracking-tight">{menu_principal.titulo_tela}</h1>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {menu_principal.especialidades.map((esp, idx) => (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={esp.id}
            onClick={() => onSelect(esp)}
            className="flex flex-col justify-center p-6 rounded-[24px] border-2 border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-transform active:scale-95 hover:-translate-y-1 text-center min-h-[140px]"
            style={{ backgroundColor: esp.cor_fundo }}
          >
            <div className="text-[18px] font-[800] leading-[1.2] text-[#1E3A8A]">
              {esp.titulo}
            </div>
          </motion.button>
        ))}
      </div>

      {userEmail.toLowerCase().trim() === 'katiass9713@gmail.com' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-5 bg-[#00CED1]/5 border-2 border-dashed border-[#00CED1]/20 rounded-[24px] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#00CED1]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#00CED1]" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-[800] text-[#1E3A8A] text-base leading-tight">Painel de Administração</h3>
              <p className="text-xs text-[#64748B] font-[500] mt-1">Gerencie e autorize e-mails para acesso à plataforma.</p>
            </div>
          </div>
          <button 
            onClick={onGoToAdmin} 
            className="w-full sm:w-auto px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white font-[700] text-sm rounded-xl transition-colors shrink-0"
          >
            Gerenciar Acessos
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

function SituationsView({ specialty, onSelect }: { key?: string; specialty: Especialidade, onSelect: (s: SituacaoClinica) => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div className="bg-white/80 border border-[#E2E8F0] shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-[#1E3A8A] px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 font-[600] text-sm">
        <Sparkles className="w-4 h-4 text-[#00CED1]" />
        {specialty.titulo}
      </div>
      <h2 className="text-xl font-[800] text-[#1E3A8A] mb-4">Selecione o Cenário Clínico</h2>
      
      <div className="flex flex-col gap-3">
        {specialty.situacoes.map((sit, idx) => (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={idx}
            onClick={() => onSelect(sit)}
            className="flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-[16px] hover:border-[#00CED1] transition-all active:scale-[0.98] text-left group shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <span className="font-[600] text-[#1E3A8A] group-hover:text-[#00CED1]">{sit.cenario}</span>
            <ChevronRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#00CED1] transition-colors" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}


function DiagnosticsView({ situation, onSelect }: { key?: string; situation: SituacaoClinica, onSelect: (d: Diagnostico) => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div className="bg-white/80 border border-[#E2E8F0] shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-[#1E3A8A] px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 font-[600] text-sm">
        <Activity className="w-4 h-4 text-[#00CED1]" />
        Situação: {situation.cenario}
      </div>
      <h2 className="text-xl font-[800] text-[#1E3A8A] mb-4">Selecione o Diagnóstico de Enfermagem (NANDA-I)</h2>
      
      <div className="flex flex-col gap-3">
        {situation.diagnosticos.map((diag, idx) => {
          const displayTitle = diag.titulo_diagnostico.replace("★ [Recomendado] ", "");
          return (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={idx}
              onClick={() => onSelect(diag)}
              className="flex items-center justify-between p-4 bg-white border border-[#E2E8F0] rounded-[16px] hover:border-[#00CED1] transition-all active:scale-[0.98] text-left group shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <span className="font-[600] text-[#1E3A8A] group-hover:text-[#00CED1]">{displayTitle}</span>
              <ChevronRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#00CED1] transition-colors" />
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  );
}

function FactorsView({ diagnosis, selected, onChange, onNext }: { key?: string; diagnosis: Diagnostico, selected: string[], onChange: (s: string[]) => void, onNext: () => void }) {
  const toggle = (f: string) => selected.includes(f) ? onChange(selected.filter(x => x !== f)) : onChange([...selected, f]);
  const displayTitle = diagnosis.titulo_diagnostico.replace("★ [Recomendado] ", "");
  
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col h-full">
      <h2 className="text-xl font-[800] text-[#1E3A8A] mb-2">Fatores Relacionados</h2>
      <p className="text-[#64748B] mb-6 text-sm font-medium">Quais as prováveis causas para "{displayTitle}"?</p>
      
      <div className="flex flex-col gap-3 mb-8">
        {diagnosis.fatores_relacionados.map((fObj, i) => {
          const f = fObj.texto;
          const isSelected = selected.includes(f);
          return (
            <button
              key={i}
              onClick={() => toggle(f)}
              className={`flex items-center justify-between p-4 rounded-[16px] border-2 transition-all active:scale-[0.98] text-left font-[600] shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${
                isSelected ? 'border-[#00CED1] bg-[#00CED1]/10 text-[#1E3A8A]' : 'border-[#E2E8F0] bg-white hover:border-[#00CED1]/50 text-[#1E3A8A]'
              }`}
            >
              <span>{f}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-[#00CED1] bg-[#00CED1]' : 'border-[#E2E8F0]'}`}>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      <FloatingButton disabled={selected.length === 0} onClick={onNext} text="Continuar" />
    </motion.div>
  );
}

function CharacteristicsView({ diagnosis, selected, onChange, onNext }: { key?: string; diagnosis: Diagnostico, selected: string[], onChange: (s: string[]) => void, onNext: () => void }) {
  const toggle = (f: string) => selected.includes(f) ? onChange(selected.filter(x => x !== f)) : onChange([...selected, f]);
  
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h2 className="text-xl font-[800] text-[#1E3A8A] mb-2">Características Definidoras</h2>
      <p className="text-[#64748B] mb-6 text-sm font-medium">Quais os sinais e sintomas evidenciados pelo paciente?</p>
      
      <div className="flex flex-col gap-3 mb-8">
        {diagnosis.caracteristicas_definidoras.map((cObj, i) => {
          const c = cObj.texto;
          const isSelected = selected.includes(c);
          return (
            <button
              key={i}
              onClick={() => toggle(c)}
              className={`flex items-center justify-between p-4 rounded-[16px] border-2 transition-all active:scale-[0.98] text-left font-[600] shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${
                isSelected ? 'border-[#00CED1] bg-[#00CED1]/10 text-[#1E3A8A]' : 'border-[#E2E8F0] bg-white hover:border-[#00CED1]/50 text-[#1E3A8A]'
              }`}
            >
              <span>{c}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-[#00CED1] bg-[#00CED1]' : 'border-[#E2E8F0]'}`}>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      <FloatingButton disabled={selected.length === 0} onClick={onNext} text="Formar Diagnóstico" />
    </motion.div>
  );
}

function PhraseView({ diagnosis, factors, characteristics, onNext }: { key?: string; diagnosis: Diagnostico, factors: string[], characteristics: string[], onNext: () => void }) {
  const displayTitle = diagnosis.titulo_diagnostico.replace("★ [Recomendado] ", "");
  
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-white p-6 rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-[#E2E8F0] mb-8">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 text-green-600 p-3 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-center text-xl font-[800] text-[#1E3A8A] mb-6">Diagnóstico Formulado</h2>
        
        <p className="text-lg text-[#1E3A8A] leading-relaxed text-center font-[600]">
          <span className="text-[#1E3A8A] font-[800] text-xl">{displayTitle}</span><br/><br/>
          <span className="text-sm text-[#64748B] uppercase tracking-[1px] font-[700]">Relacionado a</span><br/>
          <span className="text-[#00CED1]">{factors.join(', ')}</span><br/><br/>
          <span className="text-sm text-[#64748B] uppercase tracking-[1px] font-[700]">Evidenciado por</span><br/>
          <span className="text-[#00CED1]">{characteristics.join(', ')}</span>
        </p>
      </div>

      <FloatingButton disabled={false} onClick={onNext} text="Ver Intervenções (NIC)" />
    </motion.div>
  );
}

function InterventionsView({ diagnosis, activities, setActivities, onNext }: { 
  key?: string;
  diagnosis: Diagnostico, 
  activities: Record<string, string[]>, 
  setActivities: (a: Record<string, string[]>) => void, 
  onNext: () => void 
}) {
  const [openNic, setOpenNic] = useState<string | null>(null);

  const toggleActivity = (nicTitle: string, act: string) => {
    const current = activities[nicTitle] || [];
    const updated = current.includes(act) ? current.filter(a => a !== act) : [...current, act];
    setActivities({ ...activities, [nicTitle]: updated });
  };

  const hasAnySelection = Object.values(activities).some(arr => arr.length > 0);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h2 className="text-xl font-[800] text-[#1E3A8A] mb-2">Intervenções de Enfermagem (NIC)</h2>
      <p className="text-[#64748B] mb-6 text-sm font-medium">Selecione as atividades que você prescreveria para o paciente.</p>
      
      <div className="flex flex-col gap-3 mb-8">
        {diagnosis.intervencoes.map((nic, i) => {
          const isOpen = openNic === nic.titulo_nic;
          const selectedCount = (activities[nic.titulo_nic] || []).length;
          
          return (
            <div key={i} className={`bg-white rounded-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border overflow-hidden transition-colors ${selectedCount > 0 ? 'border-[#00CED1]' : 'border-[#E2E8F0]'}`}>
              <button 
                onClick={() => setOpenNic(isOpen ? null : nic.titulo_nic)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="flex flex-col">
                  <span className="font-[700] text-[#1E3A8A]">{nic.titulo_nic}</span>
                  {selectedCount > 0 && (
                    <span className="text-xs font-[600] text-[#00CED1] mt-1">{selectedCount} atividades selecionadas</span>
                  )}
                </div>
                <div className={`p-2 rounded-full transition-transform ${isOpen ? 'rotate-90 bg-slate-100' : 'bg-slate-50'}`}>
                  <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-[#E2E8F0] bg-[#F8FAFC]/50"
                  >
                    <div className="p-3 flex flex-col gap-2">
                      {nic.atividades_nic.map((actObj, j) => {
                        const act = actObj.texto;
                        const isChecked = (activities[nic.titulo_nic] || []).includes(act);
                        return (
                          <div key={j} onClick={() => toggleActivity(nic.titulo_nic, act)} className={`flex items-start gap-3 p-3 rounded-xl bg-white border cursor-pointer active:scale-[0.99] transition-all ${isChecked ? 'border-[#00CED1]' : 'border-[#E2E8F0] hover:border-[#00CED1]/50'}`}>
                            <div className={`mt-0.5 shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${isChecked ? 'bg-[#00CED1] border-[#00CED1]' : 'border-[#E2E8F0] bg-white'}`}>
                               {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <span className={`text-sm text-left font-[600] ${isChecked ? 'text-[#1E3A8A]' : 'text-[#64748B]'}`}>{act}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <FloatingButton disabled={!hasAnySelection} onClick={onNext} text="Ver Resultados Esperados (NOC)" />
    </motion.div>
  );
}

function ResultsView({ diagnosis, selectedNocs, onChangeNocs, onNext }: { key?: string; diagnosis: Diagnostico, selectedNocs: Record<string, number>, onChangeNocs: (s: Record<string, number>) => void, onNext: () => void }) {
  const setRating = (n: string, r: number) => onChangeNocs({ ...selectedNocs, [n]: r });
  
  const hasSelection = Object.values(selectedNocs).some(v => v > 0);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col h-full">
      <h2 className="text-xl font-[800] text-[#1E3A8A] mb-2">Resultados Esperados (NOC)</h2>
      <p className="text-[#64748B] mb-6 text-sm font-medium">Avalie a importância de cada resultado esperado para este paciente (1 a 5).</p>
      
      <div className="flex flex-col gap-3 mb-8">
        {diagnosis.resultados_noc.map((nocObj, i) => {
          const n = nocObj.resultado;
          const rating = selectedNocs[n] || 0;
          return (
            <div
              key={i}
              className={`flex flex-col gap-3 p-4 rounded-[16px] border text-left transition-all ${
                rating > 0 
                  ? 'border-[#00CED1] bg-[#00CED1]/5 shadow-[0_4px_12px_rgba(0,206,209,0.1)]' 
                  : 'border-[#E2E8F0] bg-white'
              }`}
            >
              <div className="flex flex-col">
                <span className={`font-[700] text-[#1E3A8A]`}>{n}</span>
                <span className="text-sm font-[500] text-[#64748B] mt-1">{nocObj.definicao}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-bold text-[#94A3B8] mr-2">Importância:</span>
                {[1, 2, 3, 4, 5].map(val => (
                  <button
                    key={val}
                    onClick={() => setRating(n, val)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                      rating === val
                        ? 'border-[#00CED1] bg-[#00CED1] text-white shadow-md'
                        : 'border-[#E2E8F0] bg-white text-[#94A3B8] hover:border-[#00CED1]/50 hover:text-[#00CED1]'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <FloatingButton disabled={!hasSelection} onClick={onNext} text="Gerar Processo de Enfermagem" />
    </motion.div>
  );
}

function LoadingPlanView({ onComplete }: { key?: string; onComplete: () => void }) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const phases = [
    "Analisando diagnósticos NANDA-I...",
    "Aplicando intervenções NIC...",
    "Apurando resultados esperados NOC...",
    "Preparando prescrição de enfermagem..."
  ];

  const quotes = [
    '"A enfermagem é uma arte; e para realizá-la como arte, requer uma devoção tão exclusiva, um preparo tão rigoroso, quanto a obra de qualquer pintor ou escultor." - Florence Nightingale',
    '"A enfermagem é ajudar o indivíduo, doente ou sadio, no desempenho daquelas atividades que contribuem para a saúde ou sua recuperação." - Virginia Henderson',
    '"Cuidar é a essência da enfermagem." - Jean Watson',
    '"A enfermagem é um processo interpessoal terapêutico." - Hildegard Peplau',
    '"O cuidado de enfermagem requer o entendimento do ser humano como um todo sistêmico." - Callista Roy'
  ];

  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < phases.length) {
        setPhaseIndex(current);
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, [onComplete]);

  const progress = ((phaseIndex + 1) / phases.length) * 100;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 bg-[#00CED1]/10 rounded-full flex items-center justify-center mb-8 relative">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-[#00CED1]/30 border-t-[#00CED1] rounded-full"
        />
        <HeartPulse className="w-8 h-8 text-[#00CED1]" />
      </div>
      
      <h2 className="text-xl font-[800] text-[#1E3A8A] mb-2">{phases[phaseIndex]}</h2>
      
      <div className="w-full max-w-xs h-2 bg-[#E2E8F0] rounded-full overflow-hidden mb-12">
        <motion.div 
          className="h-full bg-[#00CED1]" 
          animate={{ width: `${progress}%` }} 
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-md bg-white p-6 rounded-3xl shadow-[0_8px_32px_rgba(30,58,138,0.05)] border border-[#E2E8F0] italic text-[#64748B] font-[500] text-sm">
        {quote}
      </div>
    </motion.div>
  );
}

function CarePlanView({ situation, diagnosis, factors, characteristics, activities, selectedNocs, onRestart }: any) {
  const [showFullBanner, setShowFullBanner] = useState(false);
  const nocRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFullBanner(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    if (nocRef.current) {
      observer.observe(nocRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pb-10">
      <div className="flex justify-center mb-6">
        <div className="bg-[#1E3A8A]/10 text-[#1E3A8A] p-4 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
          <HeartPulse className="w-10 h-10" />
        </div>
      </div>
      <h2 className="text-center text-2xl font-[800] text-[#1E3A8A] mb-8">Processo de Enfermagem Concluído</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-white p-5 rounded-[24px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
           <h3 className="text-[11px] font-[700] uppercase text-[#64748B] tracking-[1px] mb-2">Evolução de Enfermagem</h3>
           <div className="text-[#1E3A8A] font-[500] text-sm italic leading-relaxed whitespace-pre-wrap">
             {situation.evolucao_base}
           </div>
        </div>

        <div className="bg-white p-5 rounded-[24px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
           <h3 className="text-[11px] font-[700] uppercase text-[#64748B] tracking-[1px] mb-2">Diagnóstico NANDA-I</h3>
           <p className="text-[#1E3A8A] font-[800] text-lg leading-tight">{diagnosis.titulo_diagnostico.replace("★ [Recomendado] ", "")}</p>
        </div>

        <div ref={nocRef} className="bg-white p-5 rounded-[24px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
           <h3 className="text-[11px] font-[700] uppercase text-[#64748B] tracking-[1px] mb-3">Resultados Esperados (NOC)</h3>
           <ul className="pl-4 space-y-1">
             {(selectedNocs as string[]).map((noc, i) => (
               <li key={i} className="text-sm font-[600] text-[#1E3A8A] list-disc">{noc}</li>
             ))}
           </ul>
        </div>

        <div className="bg-white p-5 rounded-[24px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
           <h3 className="text-[11px] font-[700] uppercase text-[#64748B] tracking-[1px] mb-3">Prescrição de Enfermagem (NIC)</h3>
           {Object.entries(activities as Record<string, string[]>).filter(([_, acts]) => acts.length > 0).map(([nic, acts]) => (
             <div key={nic} className="mb-4 last:mb-0">
               <p className="font-[700] text-[#1E3A8A] text-sm mb-2">{nic}</p>
               <ul className="pl-4 space-y-1">
                 {acts.map((act, i) => (
                   <li key={i} className="text-sm font-[600] text-[#64748B] list-disc">{act}</li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
      </div>

      <button
        onClick={() => {
          setShowFullBanner(true);
        }}
        className="w-full bg-[#E2E8F0] text-[#1E3A8A] font-[700] py-4 rounded-full hover:bg-slate-300 active:scale-[0.98] transition-all shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
      >
        Novo Cenário Clínico
      </button>

      {showFullBanner && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8FAFC]/95 backdrop-blur-md p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            className="w-full max-w-lg p-8 md:p-12 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-[32px] shadow-[0_20px_50px_rgba(0,206,209,0.4)] text-center relative overflow-hidden border border-sky-300"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
            
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-white animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-[800] mb-4 text-white leading-tight">Domine o Raciocínio Clínico na Íntegra!</h3>
            <p className="text-sm md:text-base font-[500] mb-8 text-sky-50 leading-relaxed max-w-md mx-auto">
              Este foi apenas um cenário demonstrativo. Assine a versão completa da plataforma <strong>EnfQ</strong> para liberar o acesso ilimitado a todas as especialidades, centenas de casos reais e simulados dinâmicos com suporte profissional!
            </p>
            <div className="flex flex-col gap-3.5 max-w-xs mx-auto">
              <a
                href="https://enfaka.my.canva.site/enfq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-4 bg-white text-[#1E3A8A] font-[800] text-sm md:text-base rounded-full hover:bg-slate-50 transition-all shadow-[0_6px_15px_rgba(0,0,0,0.1)] hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                Assinar Agora
              </a>
              <button
                onClick={onRestart}
                className="w-full py-3 bg-white/20 hover:bg-white/30 text-white font-[700] text-xs rounded-full transition-all border border-white/40 active:scale-[0.98]"
              >
                VOLTAR AO INÍCIO
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

function PromoModal({ isOpen, message, cancelText, onConfirm, onCancel, onClose }: {
  isOpen: boolean;
  message: string;
  cancelText: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            onClose();
            if (onCancel) onCancel();
          }}
          className="fixed inset-0 bg-[#1E3A8A]/40 backdrop-blur-sm"
        />
        
        {/* Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 text-white rounded-[32px] p-8 shadow-[0_25px_50px_-12px_rgba(0,181,184,0.4)] border border-sky-300 w-full max-w-md text-center z-10 overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/25 via-transparent to-transparent pointer-events-none" />

          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 relative animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-[24px] font-[800] mb-3 leading-tight text-white">
            Acesse a Plataforma Completa!
          </h2>
          
          <p className="text-white/90 font-[500] text-sm mb-8 leading-relaxed">
            {message}
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://enfaka.my.canva.site/enfq"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                onClose();
                if (onConfirm) onConfirm();
              }}
              className="w-full py-4 bg-white text-[#1E3A8A] hover:bg-slate-50 font-[800] text-[16px] rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]"
            >
              Acessar Agora
            </a>
            
            <button
              onClick={() => {
                onClose();
                if (onCancel) onCancel();
              }}
              className="w-full py-3 bg-white/20 hover:bg-white/30 text-white font-[700] text-sm rounded-full transition-all border border-white/20 active:scale-[0.98]"
            >
              {cancelText}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// Utility Components
function FloatingButton({ onClick, disabled, text }: { onClick: () => void, disabled: boolean, text: string }) {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC] to-transparent z-40">
      <div className="max-w-2xl mx-auto flex justify-center">
        <button
          disabled={disabled}
          onClick={onClick}
          className={`w-full md:w-auto min-w-[280px] font-[700] text-[16px] py-4 px-8 rounded-full transition-all ${
            disabled 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
              : 'bg-[#00CED1] text-white hover:bg-[#00b5b8] active:scale-[0.98] shadow-[0_10px_20px_rgba(0,206,209,0.3)]'
          }`}
        >
          {text}
        </button>
      </div>
    </div>
  );
}

interface AuthorizedEmailDoc {
  id: string;
  email: string;
  addedBy?: string;
  addedAt?: any;
}

function AdminView({ user }: { key?: string; user: any }) {
  const [emails, setEmails] = useState<AuthorizedEmailDoc[]>([]);
  const [search, setSearch] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [loadingList, setLoadingList] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'authorized_emails'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list: AuthorizedEmailDoc[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        list.push({
          id: docSnap.id,
          email: data.email || docSnap.id,
          addedBy: data.addedBy || 'sistema',
          addedAt: data.addedAt
        });
      });
      list.sort((a, b) => {
        const dateA = a.addedAt?.seconds || 0;
        const dateB = b.addedAt?.seconds || 0;
        if (dateA !== dateB) return dateB - dateA;
        return a.email.localeCompare(b.email);
      });
      setEmails(list);
      setLoadingList(false);
    }, (err) => {
      console.error("Erro ao escutar emails autorizados:", err);
      setLoadingList(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailToAuth = newEmail.toLowerCase().trim();
    if (!emailToAuth) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailToAuth)) {
      setMessage({ text: 'Por favor, insira um endereço de e-mail válido.', isError: true });
      return;
    }

    setActionLoading(true);
    setMessage(null);

    try {
      if (emails.some(e => e.email === emailToAuth)) {
        setMessage({ text: 'Este e-mail já está autorizado.', isError: true });
        setActionLoading(false);
        return;
      }

      await setDoc(doc(db, 'authorized_emails', emailToAuth), {
        email: emailToAuth,
        addedBy: user.email,
        addedAt: new Date()
      });

      setNewEmail('');
      setMessage({ text: `E-mail "${emailToAuth}" autorizado com sucesso!`, isError: false });
    } catch (err) {
      console.error("Erro ao autorizar e-mail:", err);
      setMessage({ text: 'Erro ao autorizar o e-mail. Verifique sua conexão.', isError: true });
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteEmail = async (emailId: string) => {
    if (emailId === 'katiass9713@gmail.com') {
      setMessage({ text: 'Não é possível desautorizar o e-mail principal do administrador.', isError: true });
      return;
    }

    if (!window.confirm(`Tem certeza que deseja remover a autorização de ${emailId}?`)) {
      return;
    }

    setActionLoading(true);
    setMessage(null);

    try {
      await deleteDoc(doc(db, 'authorized_emails', emailId));
      setMessage({ text: `Autorização de "${emailId}" removida com sucesso.`, isError: false });
    } catch (err) {
      console.error("Erro ao remover autorização:", err);
      setMessage({ text: 'Erro ao remover a autorização.', isError: true });
    } finally {
      setActionLoading(false);
    }
  };

  const filteredEmails = emails.filter(e => 
    e.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="bg-[#1E3A8A]/10 text-[#1E3A8A] px-4 py-2 rounded-full inline-flex items-center gap-2 mb-2 font-[600] text-sm">
            <ShieldCheck className="w-4 h-4 text-[#00CED1]" />
            Painel do Administrador
          </div>
          <h1 className="text-2xl font-[800] text-[#1E3A8A] leading-tight tracking-tight">Gerenciamento de Acessos</h1>
          <p className="text-[#64748B] text-sm font-medium">Autorize e remova o acesso de e-mails para a plataforma.</p>
        </div>
      </div>

      {/* Add email Form */}
      <div className="bg-white p-6 rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-[#E2E8F0] mb-6">
        <h2 className="text-base font-[800] text-[#1E3A8A] mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5 text-[#00CED1]" />
          Autorizar Novo E-mail
        </h2>
        <form onSubmit={handleAddEmail} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Digite o e-mail do aluno/enfermeiro..."
            disabled={actionLoading}
            className="flex-1 px-4 py-3 rounded-[12px] border-2 border-[#E2E8F0] bg-[#F8FAFC] text-[#1E3A8A] font-[600] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00CED1] transition-colors disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!newEmail.trim() || actionLoading}
            className="px-6 py-3 bg-[#00CED1] hover:bg-[#00b5b8] text-white font-[700] rounded-xl transition-all disabled:bg-slate-200 disabled:text-slate-400 active:scale-[0.98]"
          >
            {actionLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Autorizar'}
          </button>
        </form>

        {message && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-3 rounded-xl border text-sm font-semibold flex items-center gap-2 ${
              message.isError 
                ? 'bg-red-50 border-red-100 text-red-700' 
                : 'bg-green-50 border-green-100 text-green-700'
            }`}
          >
            {message.isError ? <ShieldAlert className="w-4 h-4 shrink-0" /> : <ShieldCheck className="w-4 h-4 shrink-0" />}
            <span>{message.text}</span>
          </motion.div>
        )}
      </div>

      {/* List section */}
      <div className="bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-[#E2E8F0] overflow-hidden">
        <div className="p-6 border-b border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-base font-[800] text-[#1E3A8A] flex items-center gap-2">
            <Users className="w-5 h-5 text-[#00CED1]" />
            E-mails Autorizados ({emails.length})
          </h2>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar e-mail..."
              className="w-full sm:w-60 pl-9 pr-4 py-2 text-sm rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] text-[#1E3A8A] font-[500] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00CED1] transition-colors"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#94A3B8]" />
          </div>
        </div>

        {loadingList ? (
          <div className="p-12 flex flex-col items-center justify-center text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin text-[#00CED1] mb-2" />
            <p className="font-[600] text-sm">Carregando lista...</p>
          </div>
        ) : filteredEmails.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <Users className="w-12 h-12 mx-auto mb-3 text-slate-300" />
            <p className="font-[600] text-sm">Nenhum e-mail autorizado encontrado.</p>
          </div>
        ) : (
          <div className="divide-y divide-[#E2E8F0]">
            {filteredEmails.map((item) => {
              const dateStr = item.addedAt?.toDate 
                ? item.addedAt.toDate().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                : item.addedAt instanceof Date 
                  ? item.addedAt.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                  : 'Data indisponível';

              return (
                <div key={item.id} className="p-4 sm:px-6 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-[700] text-[#1E3A8A] truncate">{item.email}</p>
                    <p className="text-xs text-[#94A3B8] font-[500] mt-0.5">
                      Autorizado em: {dateStr}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteEmail(item.id)}
                    disabled={item.email === 'katiass9713@gmail.com' || actionLoading}
                    className={`p-2 rounded-xl transition-colors shrink-0 ${
                      item.email === 'katiass9713@gmail.com'
                        ? 'text-slate-200 cursor-not-allowed'
                        : 'text-red-500 hover:bg-red-50 hover:text-red-600'
                    }`}
                    title={item.email === 'katiass9713@gmail.com' ? 'Não é possível remover o administrador principal' : 'Remover autorização'}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
