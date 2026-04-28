import { useState, useEffect, useRef } from "react";
import {
  Zap, Target, BarChart2, Star, Users, RefreshCw,
  ChevronRight, Trophy, Rocket, MapPin, Calendar,
  TrendingUp, Shield, Heart, Lightbulb, CheckCircle,
  Play, Award, Flag, Cpu, Globe, ArrowRight, Menu, X
} from "lucide-react";

const FONT_URL = "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap";

const valores = [
  {
    num: "01",
    titulo: "Levamos o Cliente ao Pódio",
    tag: "VALOR LOCOMOTIVA",
    destaque: true,
    icon: Trophy,
    cor: "#E8192C",
    comportamentos: [
      { icon: Target, texto: "Foco no Cliente: Identificamos e priorizamos as necessidades e resultados do cliente em todas as decisões e ações." },
      { icon: Zap, texto: "Proatividade: Antecipamos problemas e oferecemos soluções antes que o cliente precise pedir." },
      { icon: Heart, texto: "Relação de Parceria: Construímos conexões genuínas, entendendo dores e celebrando conquistas." },
      { icon: Users, texto: "Cultura de CS Integrada: Garantimos que o sucesso do cliente seja responsabilidade de toda a equipe." },
    ],
  },
  {
    num: "02",
    titulo: "Inovamos para Vencer",
    icon: Lightbulb,
    cor: "#FF6B35",
    comportamentos: [
      { icon: Target, texto: "Foco no Valor: Criamos soluções que gerem impacto real e perceptível para clientes e empresa." },
      { icon: CheckCircle, texto: "Aprender com Erros: Aceitamos falhas como parte do processo de inovação, usando-as para aprender e avançar rapidamente." },
      { icon: Play, texto: "Experimentação como acelerador: Tornamos nossos experimentos 'seguros para falhar'." },
      { icon: RefreshCw, texto: "Questionar e Evoluir: Desafiamos pressupostos com justificativas claras e propomos abordagens inovadoras." },
    ],
  },
  {
    num: "03",
    titulo: "Agimos com Base em Dados",
    icon: BarChart2,
    cor: "#00C9A7",
    comportamentos: [
      { icon: BarChart2, texto: "Tomar Decisões Orientadas por Dados: Sabemos a situação dos principais indicadores da empresa o tempo todo." },
      { icon: Cpu, texto: "Gerar Insights Relevantes: Transformamos dados em informações acionáveis para impulsionar resultados." },
      { icon: RefreshCw, texto: "Medir, Testar e Replicar: Implementamos um ciclo contínuo PDCA em processos e estratégias." },
      { icon: TrendingUp, texto: "Usar a Métrica Guia: Priorizamos ações que aumentem clientes ativos e leads gerados." },
    ],
  },
  {
    num: "04",
    titulo: "Entregamos Além do Esperado",
    icon: Star,
    cor: "#FFD700",
    comportamentos: [
      { icon: Star, texto: "Supera Expectativas: Buscamos entregar além do esperado sem comprometer o que foi combinado." },
      { icon: Shield, texto: "Atitude de Dono: Demonstramos responsabilidade genuína pelo crescimento e saúde da AutoForce." },
      { icon: TrendingUp, texto: "Melhoria Contínua: Somos inconformados e acreditamos que o resultado sempre pode ser melhorado." },
      { icon: Zap, texto: "Ser diferenciado: Somos movidos por fazer a diferença e por paixão no que fazemos." },
    ],
  },
  {
    num: "05",
    titulo: "Temos um Poderoso Espírito de Time",
    icon: Users,
    cor: "#7B5CFF",
    comportamentos: [
      { icon: Trophy, texto: "Celebrar e Inspirar: Comemoramos vitórias e motivamos os outros. Cada conquista é um chamado à ação!" },
      { icon: CheckCircle, texto: "Somos um time e não uma família: Pedimos e damos feedbacks honestos, sempre com objetivo de crescimento." },
      { icon: Globe, texto: "Colaborar e Compartilhar: Compartilhamos informações abertamente e de forma proativa." },
      { icon: Heart, texto: "Discordar e se Comprometer: Deixamos o ego de lado e buscamos as melhores ideias em benefício do resultado." },
    ],
  },
  {
    num: "06",
    titulo: "Somos Adaptáveis",
    icon: RefreshCw,
    cor: "#00B4D8",
    comportamentos: [
      { icon: Rocket, texto: "Agir com Coragem: Tomar iniciativas mesmo diante do risco de errar, valorizando o aprendizado constante." },
      { icon: CheckCircle, texto: "Aprender e Compartilhar: Transformar erros em lições e fomentar um ambiente de crescimento mútuo." },
      { icon: Shield, texto: "Manter a Calma e a Elegância: Inteligência emocional para lidar com mudanças sem perder o foco." },
      { icon: Globe, texto: "Enfrentar o Desconhecido: Encarar incertezas como oportunidades de aprendizado e evolução." },
    ],
  },
];

const tribos = [
  { nome: "Expandir", area: "Marketing e Vendas", desc: "Promover nossas soluções no mercado, expandir nossas fronteiras, fortalecer nossa marca e obter resultados exponenciais.", icon: TrendingUp, cor: "#E8192C" },
  { nome: "Inovar", area: "Produto", desc: "Pesquisar, validar e desenvolver produtos inovadores, confiáveis, escaláveis e amados pelos clientes.", icon: Lightbulb, cor: "#FF6B35" },
  { nome: "Cuidar", area: "Atendimento ao Cliente", desc: "Oferecer uma experiência memorável aos nossos clientes e ajudá-los a obter resultados incríveis com as nossas soluções.", icon: Heart, cor: "#00C9A7" },
  { nome: "Evoluir", area: "BI & AI", desc: "Gerar inteligência e evolução contínua dos produtos e clientes com BI, AI e prototipação para antecipar tendências.", icon: BarChart2, cor: "#7B5CFF" },
  { nome: "Transformar", area: "Financeiro e Pessoas", desc: "Contratar, gerenciar e desenvolver talentos na AutoForce, garantindo alinhamento com a missão, visão e valores da empresa.", icon: Users, cor: "#00B4D8" },
];

const jornada = [
  { ano: "2014", desc: "Tiago e Isa saem da antiga agência e decidem empreender novamente, validando a ideia do CMS Autódromo com concessionárias em Natal-RN e desenvolvendo o MVP da solução." },
  { ano: "2015", desc: "A AutoForce é oficialmente fundada, já atendendo grupos de concessionárias em Natal e Anápolis. A equipe se instala na incubadora ITNC e Clênio se junta ao time." },
  { ano: "2017", desc: "A AutoForce conquista grandes grupos econômicos no Nordeste e Sudeste do Brasil. Vai para um escritório maior e começa a estruturar o time de Racers." },
  { ano: "2018", desc: "Emanuel torna-se Desenvolvedor na AutoForce, onde lidera tecnicamente e se torna sócio. A Mitsubishi HPE reconhece a AutoForce como parceira oficial do programa RENARO." },
  { ano: "2019", desc: "A AutoForce é acelerada pelos dois maiores programas de aceleração de startups da América Latina — Inovativa Brasil e Endeavor Scale-up." },
  { ano: "2020", desc: "A Stellantis homologa a AutoForce no programa DDM, levando o CMS Autódromo às concessionárias Fiat e Jeep em todo o Brasil. Já são mais de 500 lojas usando a solução." },
  { ano: "2021", desc: "A AutoForce recebe um aporte de R$ 2,3 milhões dos grupos BR Angels e GV Angels. Também é reconhecida pela GPTW como uma das melhores empresas para trabalhar no Brasil." },
  { ano: "2022", desc: "Homologada pela Mercedes-Benz Caminhões e Autotech GWM. A AutoForce entra de vez nas pistas, acelerando nas principais categorias do Brasil: Stock Car, Copa Truck e mais." },
  { ano: "2023", desc: "Alcançamos o breakeven um ano após o aporte. A Simpar se torna nosso 2º maior cliente. Iniciamos o desenvolvimento do Autódromo 2.0." },
  { ano: "2024", desc: "Lançamos o Autódromo 2.0 e apresentamos a 2ª Onda do Marketing Digital Automotivo. Nos mudamos para a Mansão Racer e reconhecemos nossos primeiros Embaixadores de Cultura." },
  { ano: "2025", desc: "Retornamos ao modelo híbrido, entramos no programa GIANTS e passamos por um rebranding completo. A Renault homologa a AutoForce — e isso é só o começo!" },
];

const principios = [
  { num: "1°", titulo: "Colaboradores em 1° Lugar", desc: "Assegura que o time esteja motivado, capacitado e alinhado com a missão de apoiar e sustentar as vendas da empresa.", icon: Users },
  { num: "2°", titulo: "Foco do Cliente no Centro de Tudo", desc: "Orienta o propósito da venda, garantindo que entregamos soluções reais e resultados mensuráveis para nossos clientes.", icon: Target },
  { num: "3°", titulo: "Vender para Vencer", desc: "É a mentalidade que une toda a empresa, tornando cada área corresponsável pelo sucesso das vendas.", icon: Trophy },
];

const stats = [
  { valor: "+300", label: "Grupos Econômicos" },
  { valor: "+2000", label: "Concessionárias Atendidas" },
  { valor: "+1500", label: "Showrooms Digitais" },
  { valor: "+10M", label: "Usuários Mensais" },
];

const TABS = ["Home", "Quem Somos", "Valores", "Tribos", "Jornada", "Racer Classe A"];

export default function CultureCode() {
  const [tab, setTab] = useState("Home");
  const [activeValor, setActiveValor] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONT_URL;
    document.head.appendChild(link);
    setTimeout(() => setVisible(true), 50);
  }, []);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [tab]);

  const switchTab = (t) => { setTab(t); setMenuOpen(false); setActiveValor(null); };

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: "#080C10", minHeight: "100vh", color: "#E8EAF0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-tab { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; padding: 10px 16px; border: none; background: transparent; cursor: pointer; transition: all 0.2s; color: #6B7280; border-bottom: 2px solid transparent; }
        .nav-tab:hover { color: #E8192C; }
        .nav-tab.active { color: #E8192C; border-bottom-color: #E8192C; }
        .valor-card { background: #0D1117; border: 1px solid #1C2230; border-radius: 12px; padding: 24px; cursor: pointer; transition: all 0.25s; }
        .valor-card:hover { border-color: #E8192C; transform: translateY(-3px); box-shadow: 0 8px 30px rgba(232,25,44,0.15); }
        .valor-card.active { border-color: #E8192C; background: #10151E; }
        .tribo-card { background: #0D1117; border: 1px solid #1C2230; border-radius: 12px; padding: 28px; transition: all 0.25s; }
        .tribo-card:hover { transform: translateY(-4px); }
        .timeline-item { display: flex; gap: 24px; padding: 24px 0; border-left: 2px solid #1C2230; padding-left: 32px; position: relative; }
        .timeline-dot { position: absolute; left: -9px; top: 28px; width: 16px; height: 16px; border-radius: 50%; background: #E8192C; border: 2px solid #080C10; }
        .stat-box { background: #0D1117; border: 1px solid #1C2230; border-radius: 12px; padding: 24px 20px; text-align: center; transition: all 0.2s; }
        .stat-box:hover { border-color: #E8192C33; }
        .fade-in { opacity: 0; transform: translateY(10px); animation: fadeUp 0.4s ease forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .grito-line { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(28px, 5vw, 56px); font-weight: 800; letter-spacing: 2px; line-height: 1; }
        .section-label { font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #E8192C; margin-bottom: 8px; }
        .big-title { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(32px, 6vw, 64px); font-weight: 800; line-height: 1.05; letter-spacing: -0.5px; }
        .comportamento-item { display: flex; gap: 14px; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid #1C2230; }
        .comportamento-item:last-child { border-bottom: none; }
        .badge { font-family: 'Barlow Condensed', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 2px; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; display: inline-block; }
        .stripe-bg { background: repeating-linear-gradient(135deg, transparent 0, transparent 10px, rgba(232,25,44,0.03) 10px, rgba(232,25,44,0.03) 20px); }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #080C10; } ::-webkit-scrollbar-thumb { background: #1C2230; border-radius: 2px; }
        .princip-card { background: #0D1117; border: 1px solid #1C2230; border-radius: 12px; padding: 32px; transition: all 0.2s; }
        .princip-card:hover { border-color: #E8192C44; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: #1C2230; border: 1px solid #1C2230; border-radius: 12px; overflow: hidden; }
        .hero-cell { background: #0D1117; padding: 28px; }
        .org-level { background: #0D1117; border: 1px solid #1C2230; border-radius: 10px; padding: 20px 24px; }
        @media (max-width: 640px) { .hero-grid { grid-template-columns: 1fr; } .nav-desktop { display: none !important; } .nav-mobile { display: flex !important; } }
        @media (min-width: 641px) { .nav-desktop { display: flex !important; } .nav-mobile-btn { display: none !important; } .mobile-menu { display: none !important; } }
      `}</style>

      {/* NAV */}
      <nav style={{ background: "#0A0E14", borderBottom: "1px solid #1C2230", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 0" }}>
            <div style={{ width: 28, height: 28, background: "#E8192C", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap size={16} color="#fff" fill="#fff" />
            </div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: 1, color: "#fff" }}>AUTO<span style={{ color: "#E8192C" }}>FORCE</span></span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, color: "#4B5563", marginLeft: 4, marginTop: 2 }}>CÓDIGO DE CULTURA</span>
          </div>
          <div className="nav-desktop" style={{ display: "flex", gap: 0 }}>
            {TABS.map((t) => (
              <button key={t} className={`nav-tab${tab === t ? " active" : ""}`} onClick={() => switchTab(t)}>{t}</button>
            ))}
          </div>
          <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#E8EAF0", padding: "8px" }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu" style={{ background: "#0A0E14", borderTop: "1px solid #1C2230", padding: "8px 0" }}>
            {TABS.map((t) => (
              <button key={t} onClick={() => switchTab(t)} style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 24px", background: "none", border: "none", cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", color: tab === t ? "#E8192C" : "#9CA3AF" }}>{t}</button>
            ))}
          </div>
        )}
      </nav>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* HOME */}
        {tab === "Home" && (
          <div className="fade-in">
            {/* Hero */}
            <div style={{ padding: "64px 0 48px", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse at 80% 50%, rgba(232,25,44,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div className="section-label">Bem-vindo ao</div>
              <h1 className="big-title" style={{ color: "#fff", marginBottom: 16, maxWidth: 700 }}>
                Código de Cultura<br /><span style={{ color: "#E8192C" }}>AutoForce</span>
              </h1>
              <p style={{ fontSize: 18, color: "#6B7280", maxWidth: 560, lineHeight: 1.7, marginBottom: 32 }}>
                Não queremos apenas ser um software por assinatura. Queremos realizar a <strong style={{ color: "#9CA3AF" }}>Transformação Digital no setor automotivo brasileiro</strong>.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => switchTab("Valores")} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", background: "#E8192C", color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                  Nossos Valores <ArrowRight size={16} />
                </button>
                <button onClick={() => switchTab("Racer Classe A")} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", background: "transparent", color: "#9CA3AF", border: "1px solid #1C2230", borderRadius: 8, padding: "12px 24px", cursor: "pointer" }}>
                  Ser um Racer Classe A
                </button>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 48 }}>
              {stats.map((s, i) => (
                <div key={i} className="stat-box" style={{ animationDelay: `${i * 80}ms` }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 800, color: "#E8192C", lineHeight: 1 }}>{s.valor}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4, letterSpacing: 0.5 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Missão + Visão */}
            <div className="hero-grid" style={{ marginBottom: 32 }}>
              <div className="hero-cell">
                <div className="section-label">Nossa Missão</div>
                <p style={{ color: "#C9D1D9", fontSize: 16, lineHeight: 1.8 }}>Pensar, criar e entregar soluções de marketing digital e inteligência comercial que impulsionam a performance e geram resultados reais para negócios automotivos no Brasil.</p>
              </div>
              <div className="hero-cell" style={{ borderLeft: "2px solid #E8192C22" }}>
                <div className="section-label">Nossa Visão</div>
                <p style={{ color: "#C9D1D9", fontSize: 16, lineHeight: 1.8 }}>Alcançar um faturamento de <strong style={{ color: "#fff" }}>R$ 15 milhões</strong> com uma margem bruta de <strong style={{ color: "#fff" }}>70%</strong> e um EBITDA de <strong style={{ color: "#fff" }}>30%</strong> até 31/12/2026.</p>
              </div>
            </div>

            {/* Princípios */}
            <div className="section-label" style={{ marginTop: 48, marginBottom: 20 }}>Nossos 3 Princípios Base</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 48 }}>
              {principios.map((p, i) => (
                <div key={i} className="princip-card">
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 44, fontWeight: 800, color: "#E8192C22", lineHeight: 1 }}>{p.num}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "8px 0 12px" }}>
                    <p.icon size={20} color="#E8192C" />
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{p.titulo}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Cultura */}
            <div className="stripe-bg" style={{ border: "1px solid #E8192C33", borderRadius: 12, padding: "32px", marginBottom: 48, textAlign: "center" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#E8192C", marginBottom: 12 }}>Nossa Cultura</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 800, color: "#fff" }}>Vender é o coração da empresa!</div>
            </div>
          </div>
        )}

        {/* QUEM SOMOS */}
        {tab === "Quem Somos" && (
          <div className="fade-in" style={{ padding: "48px 0" }}>
            <div className="section-label">Sobre nós</div>
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 24 }}>Somos uma empresa de tecnologia<br />e educação em <span style={{ color: "#E8192C" }}>marketing digital</span></h2>
            <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 600, lineHeight: 1.8, marginBottom: 48 }}>
              Somos uma martech brasileira, fundada em 2015, com a missão de promover a transformação digital no setor automotivo. Por meio de tecnologias, processos e modelos de negócios inovadores, geramos valor para o setor automotivo e o desenvolvimento econômico do país.
            </p>

            {/* Organização */}
            <div className="section-label" style={{ marginBottom: 20 }}>Nossa Organização</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
              {[
                { nivel: "1 — Estratégico", cargo: "C-level e Head", items: ["Elaborar visão e planejamento estratégico", "Relações públicas", "Gerenciar e desenvolver talentos", "Captar e administrar recursos financeiros", "Desenvolver e acompanhar indicadores-chave"], cor: "#E8192C" },
                { nivel: "2 — Tático", cargo: "Head / Coordenação", items: ["Mentor do time", "Alocar recursos", "Gerenciar indicadores", "Executar o planejamento"], cor: "#FF6B35" },
                { nivel: "3 — Operacional", cargo: "Racer", items: ["Executar as missões", "Atingir as metas", "Pesquisar e testar coisas novas", "Encantar os clientes"], cor: "#00C9A7" },
              ].map((org, i) => (
                <div key={i} className="org-level" style={{ borderLeft: `3px solid ${org.cor}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>{org.nivel}</span>
                      <span style={{ marginLeft: 12, fontSize: 13, color: "#6B7280" }}>{org.cargo}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                    {org.items.map((item, j) => (
                      <span key={j} style={{ fontSize: 12, background: "#161B22", border: "1px solid #1C2230", borderRadius: 6, padding: "4px 10px", color: "#9CA3AF" }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quem contratamos / promovemos */}
            <div className="section-label" style={{ marginBottom: 20 }}>Nossa Cultura de Pessoas</div>
            <div className="hero-grid" style={{ marginBottom: 48 }}>
              <div className="hero-cell">
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 16 }}>Quem Contratamos</div>
                {["Quem é intraempreendedor", "Quem quer fazer a diferença no mundo", "Quem tem postura de dono", "Quem faz acontecer"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #1C2230" }}>
                    <CheckCircle size={14} color="#E8192C" />
                    <span style={{ fontSize: 14, color: "#9CA3AF" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="hero-cell" style={{ borderLeft: "2px solid #E8192C22" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 16 }}>Quem Promovemos</div>
                {["Quem entrega além do esperado", "Quem leva o cliente ao pódio", "Quem joga para vencer", "Quem tem energia e brilho nos olhos"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #1C2230" }}>
                    <Trophy size={14} color="#E8192C" />
                    <span style={{ fontSize: 14, color: "#9CA3AF" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fundadores */}
            <div className="section-label" style={{ marginBottom: 20 }}>Nossos Sócios</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {[
                { nome: "Tiago Fernandes", cargo: "Co-Founder e CEO", formacao: "Administrador" },
                { nome: "Emanuel Campos", cargo: "CTO", formacao: "Analista de Sistemas" },
                { nome: "Clênio Luiz", cargo: "CIO", formacao: "Comunicador Social" },
              ].map((s, i) => (
                <div key={i} style={{ background: "#0D1117", border: "1px solid #1C2230", borderRadius: 12, padding: "24px", textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#E8192C22", border: "2px solid #E8192C44", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, color: "#E8192C" }}>{s.nome.split(" ").map(w => w[0]).slice(0, 2).join("")}</span>
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>{s.nome}</div>
                  <div style={{ fontSize: 13, color: "#E8192C", marginTop: 2 }}>{s.cargo}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>{s.formacao}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VALORES */}
        {tab === "Valores" && (
          <div className="fade-in" style={{ padding: "48px 0" }}>
            <div className="section-label">Nossa Bússola</div>
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 8 }}>6 Valores <span style={{ color: "#E8192C" }}>Comportamentais</span></h2>
            <p style={{ color: "#6B7280", marginBottom: 40, fontSize: 15 }}>Clique em um valor para ver como ele é vivido no dia a dia.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginBottom: 32 }}>
              {valores.map((v, i) => (
                <div key={i} className={`valor-card${activeValor === i ? " active" : ""}`} onClick={() => setActiveValor(activeValor === i ? null : i)} style={{ borderColor: activeValor === i ? v.cor : undefined }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 40, fontWeight: 800, color: activeValor === i ? v.cor : "#1C2230", lineHeight: 1 }}>{v.num}</span>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: `${v.cor}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <v.icon size={18} color={v.cor} />
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>{v.titulo}</div>
                  {v.tag && <span className="badge" style={{ background: `${v.cor}22`, color: v.cor }}>{v.tag}</span>}
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 12, fontSize: 12, color: "#4B5563" }}>
                    <ChevronRight size={14} style={{ transition: "transform 0.2s", transform: activeValor === i ? "rotate(90deg)" : "rotate(0)" }} />
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: 1 }}>{activeValor === i ? "RECOLHER" : "COMO VIVEMOS"}</span>
                  </div>
                </div>
              ))}
            </div>
            {activeValor !== null && (
              <div style={{ background: "#0D1117", border: `1px solid ${valores[activeValor].cor}44`, borderRadius: 12, padding: "32px", marginTop: 8, animation: "fadeUp 0.3s ease forwards" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: `${valores[activeValor].cor}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {(() => { const Icon = valores[activeValor].icon; return <Icon size={22} color={valores[activeValor].cor} />; })()}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, color: "#fff" }}>{valores[activeValor].titulo}</div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>Como vivemos na prática</div>
                  </div>
                </div>
                {valores[activeValor].comportamentos.map((c, j) => (
                  <div key={j} className="comportamento-item">
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: "#161B22", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <c.icon size={14} color={valores[activeValor].cor} />
                    </div>
                    <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.7 }}>{c.texto}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TRIBOS */}
        {tab === "Tribos" && (
          <div className="fade-in" style={{ padding: "48px 0" }}>
            <div className="section-label">Nossa Estrutura</div>
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 8 }}>Nossas <span style={{ color: "#E8192C" }}>5 Tribos</span></h2>
            <p style={{ color: "#6B7280", marginBottom: 40, fontSize: 15, maxWidth: 500 }}>Cada tribo tem uma missão clara e todos convergem para o sucesso do cliente.</p>
            <div style={{ position: "relative", marginBottom: 48 }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
                <div style={{ width: 120, height: 120, borderRadius: "50%", background: "#0D1117", border: "2px solid #E8192C", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <Heart size={28} color="#E8192C" />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 4 }}>CLIENTE</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {tribos.map((t, i) => (
                  <div key={i} className="tribo-card" style={{ borderLeft: `3px solid ${t.cor}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 8, background: `${t.cor}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <t.icon size={20} color={t.cor} />
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff", lineHeight: 1 }}>{t.nome}</div>
                        <div style={{ fontSize: 11, color: t.cor, letterSpacing: 1, fontWeight: 600, textTransform: "uppercase" }}>{t.area}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* JORNADA */}
        {tab === "Jornada" && (
          <div className="fade-in" style={{ padding: "48px 0" }}>
            <div className="section-label">Nossa História</div>
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 8 }}>Uma Jornada de <span style={{ color: "#E8192C" }}>Aceleração</span></h2>
            <p style={{ color: "#6B7280", marginBottom: 48, fontSize: 15 }}>De uma ideia em Natal-RN à transformação digital de todo o setor automotivo brasileiro.</p>
            <div style={{ position: "relative" }}>
              {jornada.map((item, i) => (
                <div key={i} className="timeline-item" style={{ animationDelay: `${i * 60}ms` }}>
                  <div className="timeline-dot" />
                  <div style={{ paddingBottom: 8 }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: i === jornada.length - 1 ? "#E8192C" : "#4B5563", lineHeight: 1, marginBottom: 8 }}>{item.ano}</div>
                    <p style={{ fontSize: 15, color: "#9CA3AF", lineHeight: 1.8, maxWidth: 640 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RACER CLASSE A */}
        {tab === "Racer Classe A" && (
          <div className="fade-in" style={{ padding: "48px 0" }}>
            <div className="section-label">Sobre ser</div>
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 40 }}>Racer <span style={{ color: "#E8192C" }}>Classe A</span></h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
              {[
                { icon: Zap, texto: "Tem brilho nos olhos", cor: "#FFD700" },
                { icon: Trophy, texto: "Joga para vencer", cor: "#E8192C" },
                { icon: Globe, texto: "Faz a diferença no mundo", cor: "#00C9A7" },
                { icon: Flag, texto: "Leva o cliente ao pódio", cor: "#FF6B35" },
                { icon: Star, texto: "Entrega além do esperado", cor: "#7B5CFF" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0D1117", border: "1px solid #1C2230", borderRadius: 12, padding: "28px 24px", display: "flex", alignItems: "center", gap: 16, transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = item.cor + "66"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C2230"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: `${item.cor}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={24} color={item.cor} />
                  </div>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>{item.texto}</span>
                </div>
              ))}
            </div>

            {/* Exemplos */}
            <div className="section-label" style={{ marginBottom: 20 }}>Nossos Exemplos</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 48 }}>
              <div style={{ background: "#0D1117", border: "1px solid #1C2230", borderRadius: 12, padding: "24px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#6B728018", border: "2px solid #6B728044", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, color: "#9CA3AF" }}>HS</span>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff" }}>Hannah Schmitz</div>
                <div style={{ fontSize: 13, color: "#E8192C", marginTop: 4 }}>Estrategista-Chefe</div>
                <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>Red Bull Racing</div>
                <span className="badge" style={{ background: "#6B728022", color: "#9CA3AF", marginTop: 12 }}>RACER</span>
              </div>
              <div style={{ background: "#0D1117", border: "2px solid #E8192C44", borderRadius: 12, padding: "24px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#E8192C18", border: "2px solid #E8192C44", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, color: "#E8192C" }}>MV</span>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff" }}>Max Verstappen</div>
                <div style={{ fontSize: 13, color: "#E8192C", marginTop: 4 }}>Piloto Principal</div>
                <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>Red Bull Racing</div>
                <span className="badge" style={{ background: "#E8192C22", color: "#E8192C", marginTop: 12 }}>CHAMPION</span>
              </div>
            </div>

            {/* Grito de Guerra */}
            <div className="stripe-bg" style={{ border: "1px solid #E8192C44", borderRadius: 16, padding: "48px 32px", textAlign: "center", marginBottom: 48 }}>
              <div className="section-label" style={{ marginBottom: 28 }}>Nosso Grito de Guerra</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 13, color: "#6B7280", letterSpacing: 2, marginBottom: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>O QUE SOMOS?</div>
                  <div className="grito-line" style={{ color: "#E8192C" }}>RACERS!</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "#6B7280", letterSpacing: 2, marginBottom: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>O QUE QUEREMOS?</div>
                  <div className="grito-line" style={{ color: "#fff" }}>LEVAR O CLIENTE AO PÓDIO!</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "#6B7280", letterSpacing: 2, marginBottom: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>E COMO FAREMOS?</div>
                  <div className="grito-line" style={{ color: "#FF6B35" }}>INOVANDO PARA VENCER!</div>
                  <div className="grito-line" style={{ color: "#FF6B35", marginTop: 4 }}>VENCER, VENCER, VENCER</div>
                </div>
                <div style={{ marginTop: 16, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, color: "#E8192C", letterSpacing: 3 }}>
                  #GORACERS 🏁
                </div>
              </div>
            </div>

            {/* Quote */}
            <div style={{ background: "#0D1117", border: "1px solid #1C2230", borderLeft: "4px solid #E8192C", borderRadius: "0 12px 12px 0", padding: "24px 28px", marginBottom: 48 }}>
              <p style={{ fontSize: 18, color: "#9CA3AF", lineHeight: 1.8, fontStyle: "italic" }}>
                "Eu sou parte de uma equipe. Então, quando venço, não sou eu apenas quem vence. De certa forma termino o trabalho de um grupo enorme de pessoas!"
              </p>
            </div>
          </div>
        )}

      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1C2230", padding: "24px", marginTop: 40, textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 20, height: 20, background: "#E8192C", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={11} color="#fff" fill="#fff" />
          </div>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: 1, color: "#4B5563" }}>AUTO<span style={{ color: "#E8192C" }}>FORCE</span> — Código de Cultura</span>
        </div>
        <p style={{ fontSize: 12, color: "#374151" }}>Transformação Digital no Setor Automotivo Brasileiro • Fundada em 2015</p>
      </footer>
    </div>
  );
}