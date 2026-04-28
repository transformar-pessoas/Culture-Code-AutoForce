import { useState, useEffect } from "react";
import {
  Zap, Target, BarChart2, Star, Users, RefreshCw,
  ChevronRight, Trophy, Rocket, MapPin, Calendar,
  TrendingUp, Shield, Heart, Lightbulb, CheckCircle,
  Play, Award, Flag, Cpu, Globe, ArrowRight, Menu, X,
  MessageCircle, Send
} from "lucide-react";

const FONT_URL = "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap";

const valores = [
  {
    num: "01",
    titulo: "Levamos o Cliente ao Pódio",
    tag: "VALOR LOCOMOTIVA",
    destaque: true,
    icon: Trophy,
    cor: "#1440FF",
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
  { nome: "Expandir", area: "Marketing e Vendas", desc: "Promover nossas soluções no mercado, expandir nossas fronteiras, fortalecer nossa marca e obter resultados exponenciais.", icon: TrendingUp, cor: "#1440FF" },
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

const TABS = ["Home", "Quem Somos", "Valores", "Tribos", "Jornada", "Racer Classe A", "Testes"];

const testeFitCultural = [
  { pergunta: "Qual é o valor locomotiva da AutoForce?", opcoes: ["Inovamos para Vencer", "Levamos o Cliente ao Pódio", "Agimos com Base em Dados", "Entregamos Além do Esperado"], correta: 1 },
  { pergunta: "Quantos valores comportamentais possui a AutoForce?", opcoes: ["4", "5", "6", "7"], correta: 2 },
  { pergunta: "Qual é a nossa missão?", opcoes: ["Ser a maior empresa de tecnologia do Brasil", "Transformação digital no setor automotivo", "Vender mais softwares", "Criar sites para concessionárias"], correta: 1 },
  { pergunta: "Qual tribo é responsável por Produto?", opcoes: ["Expandir", "Inovar", "Cuidar", "Evoluir"], correta: 1 },
  { pergunta: "Em que ano a AutoForce foi fundada?", opcoes: ["2014", "2015", "2016", "2017"], correta: 1 },
  { pergunta: "Qual é o primeiro princípio base da AutoForce?", opcoes: ["Cliente no Centro", "Vender para Vencer", "Colaboradores em 1° Lugar", "Inovação"], correta: 2 },
  { pergunta: "Qual é a nossa visão de meta financeira até 31/12/2026?", opcoes: ["R$ 10 milhões de faturamento", "R$ 15 milhões com 70% de margem bruta", "R$ 20 milhões de receita", "Dobrar o faturamento"], correta: 1 },
  { pergunta: "O que um Racer Classe A entrega?", opcoes: ["O esperado", "O mínimo necessário", "Além do esperado", "O que foi pedido"], correta: 2 },
  { pergunta: "Quantas tribos possui a AutoForce?", opcoes: ["3", "4", "5", "6"], correta: 2 },
  { pergunta: "Complete: 'Vender é o _______ da empresa'", opcoes: ["Objetivo principal", "Coração", "Foco primário", "Pilar fundamental"], correta: 1 },
];

const testeDISC = [
  { pergunta: "Ao iniciar um projeto, você prefere:", opcoes: ["Tomar a liderança e definir objetivos claros", "Analisar todos os detalhes antes de começar", "Envolver a equipe e criar um ambiente colaborativo", "Garantir que todos estejam alinhados e seguros"], perfis: ["D", "C", "I", "S"] },
  { pergunta: "Em situações de conflito, você tende a:", opcoes: ["Enfrentar diretamente e buscar resolução rápida", "Avaliar os fatos e encontrar a solução mais lógica", "Mediar e manter o relacionamento positivo", "Buscar consenso e evitar confrontos"], perfis: ["D", "C", "I", "S"] },
  { pergunta: "Sua motivação principal no trabalho é:", opcoes: ["Alcançar resultados e vencer desafios", "Fazer um trabalho perfeito e sem erros", "Conectar-se com pessoas e criar impacto", "Colaborar e manter harmonia no time"], perfis: ["D", "C", "I", "S"] },
  { pergunta: "Ao tomar decisões, você:", opcoes: ["Decide rapidamente baseado na sua intuição", "Analisa dados e informações detalhadamente", "Considera o impacto nas pessoas envolvidas", "Consulta a equipe e busca segurança"], perfis: ["D", "C", "I", "S"] },
  { pergunta: "Seu estilo de comunicação é:", opcoes: ["Direto e objetivo", "Preciso e detalhado", "Entusiasta e expressivo", "Calmo e empático"], perfis: ["D", "C", "I", "S"] },
  { pergunta: "Você se descreve como:", opcoes: ["Independente e determinado", "Disciplinado e exato", "Sociável e autoconfiante", "Paciente e persistente"], perfis: ["D", "C", "I", "S"] },
  { pergunta: "Em um ambiente de trabalho, você valoriza:", opcoes: ["Autonomia e eficácia", "Qualidade e eficiência", "Liberdade e criatividade", "Segurança e lealdade"], perfis: ["D", "C", "I", "S"] },
  { pergunta: "Seu maior medo profissional é:", opcoes: ["Perder o controle ou ser aproveitado", "Cometer erros ou críticas ao trabalho", "Rejeição social ou ser ignorado", "Mudanças repentinas ou conflitos"], perfis: ["D", "C", "I", "S"] },
  { pergunta: "Você se sente energizado quando:", opcoes: ["Supera desafios difíceis", "Resolve problemas complexos", "Trabalha em equipe e inspira pessoas", "Ajuda outros e mantém estabilidade"], perfis: ["D", "C", "I", "S"] },
  { pergunta: "Seu ponto forte é:", opcoes: ["Determinação e foco em resultados", "Atenção aos detalhes e precisão", "Entusiasmo e habilidades sociais", "Empatia e cooperação"], perfis: ["D", "C", "I", "S"] },
];

const chatFAQ = [
  {
    keywords: ["missão", "objetivo", "proposito", "propósito", "para que"],
    resposta: "Nossa missão é pensar, criar e entregar soluções de marketing digital e inteligência comercial que impulsionam a performance e geram resultados reais para negócios automotivos no Brasil."
  },
  {
    keywords: ["visão", "meta", "futuro", "objetivo financeiro", "faturamento", "ebitda"],
    resposta: "Nossa visão é alcançar um faturamento de R$ 15 milhões com uma margem bruta de 70% e um EBITDA de 30% até 31/12/2026."
  },
  {
    keywords: ["valores", "quantos valores", "cultura", "comportamentais"],
    resposta: "Temos 6 valores comportamentais: 1) Levamos o Cliente ao Pódio (Valor Locomotiva), 2) Inovamos para Vencer, 3) Agimos com Base em Dados, 4) Entregamos Além do Esperado, 5) Temos um Poderoso Espírito de Time, e 6) Somos Adaptáveis."
  },
  {
    keywords: ["valor locomotiva", "principal valor", "primeiro valor", "cliente ao pódio", "pódio"],
    resposta: "Nosso valor locomotiva é 'Levamos o Cliente ao Pódio'. Ele guia todos os outros valores e coloca o sucesso do cliente no centro de tudo que fazemos."
  },
  {
    keywords: ["tribos", "quantas tribos", "equipes", "áreas", "times"],
    resposta: "Temos 5 tribos: Expandir (Marketing e Vendas), Inovar (Produto), Cuidar (Atendimento ao Cliente), Evoluir (BI & AI) e Transformar (Financeiro e Pessoas)."
  },
  {
    keywords: ["expandir", "marketing", "vendas", "tribo expandir"],
    resposta: "A tribo EXPANDIR é responsável por Marketing e Vendas. Sua missão é promover nossas soluções no mercado, expandir nossas fronteiras, fortalecer nossa marca e obter resultados exponenciais."
  },
  {
    keywords: ["inovar", "produto", "desenvolvimento", "tribo inovar"],
    resposta: "A tribo INOVAR é responsável por Produto. Sua missão é pesquisar, validar e desenvolver produtos inovadores, confiáveis, escaláveis e amados pelos clientes."
  },
  {
    keywords: ["cuidar", "atendimento", "cs", "customer success", "tribo cuidar", "cliente"],
    resposta: "A tribo CUIDAR é responsável por Atendimento ao Cliente. Sua missão é oferecer uma experiência memorável aos nossos clientes e ajudá-los a obter resultados incríveis com as nossas soluções."
  },
  {
    keywords: ["evoluir", "bi", "ai", "inteligência", "dados", "analytics", "tribo evoluir"],
    resposta: "A tribo EVOLUIR é responsável por BI & AI. Sua missão é gerar inteligência e evolução contínua dos produtos e clientes com Business Intelligence, Inteligência Artificial e prototipação para antecipar tendências."
  },
  {
    keywords: ["transformar", "financeiro", "pessoas", "rh", "recursos humanos", "tribo transformar"],
    resposta: "A tribo TRANSFORMAR é responsável por Financeiro e Pessoas. Sua missão é contratar, gerenciar e desenvolver talentos na AutoForce, garantindo alinhamento com a missão, visão e valores da empresa."
  },
  {
    keywords: ["racer classe a", "racer", "classe a", "o que é racer"],
    resposta: "Um Racer Classe A tem brilho nos olhos, joga para vencer, faz a diferença no mundo, leva o cliente ao pódio e entrega além do esperado!"
  },
  {
    keywords: ["grito de guerra", "grito", "guerra", "racers"],
    resposta: "Nosso grito de guerra é: O que somos? RACERS! O que queremos? LEVAR O CLIENTE AO PÓDIO! E como faremos? INOVANDO PARA VENCER! VENCER, VENCER, VENCER! #GORACERS 🏁"
  },
  {
    keywords: ["fundada", "quando", "ano", "fundação", "2015", "história"],
    resposta: "A AutoForce foi fundada em 2015 por Tiago Fernandes, Emanuel Campos e Clênio Luiz em Natal-RN. Começamos validando a ideia do CMS Autódromo com concessionárias locais."
  },
  {
    keywords: ["sócios", "fundadores", "donos", "tiago", "emanuel", "clenio", "clênio"],
    resposta: "Nossos sócios são: Tiago Fernandes (Co-Founder e CEO), Emanuel Campos (CTO) e Clênio Luiz (CIO)."
  },
  {
    keywords: ["princípios", "3 princípios", "base"],
    resposta: "Nossos 3 Princípios Base são: 1) Colaboradores em 1° Lugar, 2) Foco do Cliente no Centro de Tudo, e 3) Vender para Vencer."
  },
  {
    keywords: ["vender", "coração", "cultura venda", "vendas"],
    resposta: "Vender é o coração da empresa! É a mentalidade que une toda a AutoForce, tornando cada área corresponsável pelo sucesso das vendas."
  },
  {
    keywords: ["inovação", "inovar para vencer", "valor 2"],
    resposta: "Inovamos para Vencer! Criamos soluções de impacto real, aprendemos com erros, experimentamos com segurança e questionamos pressupostos para evoluir constantemente."
  },
  {
    keywords: ["dados", "data driven", "métricas", "indicadores", "valor 3"],
    resposta: "Agimos com Base em Dados! Tomamos decisões orientadas por dados, geramos insights relevantes, medimos e testamos continuamente usando o ciclo PDCA."
  },
  {
    keywords: ["além do esperado", "superar", "valor 4"],
    resposta: "Entregamos Além do Esperado! Buscamos superar expectativas sem comprometer o combinado, temos atitude de dono e somos inconformados - acreditamos que o resultado sempre pode ser melhorado."
  },
  {
    keywords: ["espírito de time", "time", "equipe", "colaboração", "valor 5"],
    resposta: "Temos um Poderoso Espírito de Time! Celebramos vitórias, damos feedbacks honestos, colaboramos abertamente e deixamos o ego de lado em benefício do resultado."
  },
  {
    keywords: ["adaptáveis", "mudança", "flexível", "valor 6"],
    resposta: "Somos Adaptáveis! Agimos com coragem, aprendemos e compartilhamos, mantemos a calma e elegância diante de mudanças e encaramos o desconhecido como oportunidade."
  },
  {
    keywords: ["estratégico", "tático", "operacional", "organização", "níveis"],
    resposta: "Nossa organização tem 3 níveis: 1) Estratégico (C-level e Head) - elabora visão e planejamento; 2) Tático (Head/Coordenação) - executa o planejamento; 3) Operacional (Racer) - executa missões e encanta clientes."
  },
  {
    keywords: ["quem contratamos", "contratar", "recrutamento"],
    resposta: "Contratamos quem é intraempreendedor, quer fazer a diferença no mundo, tem postura de dono e faz acontecer!"
  },
  {
    keywords: ["quem promovemos", "promoção", "crescer"],
    resposta: "Promovemos quem entrega além do esperado, leva o cliente ao pódio, joga para vencer e tem energia e brilho nos olhos!"
  },
  {
    keywords: ["história", "jornada", "trajetória", "linha do tempo"],
    resposta: "Nossa jornada começou em 2014 com a validação da ideia do CMS Autódromo. Em 2015 fundamos oficialmente a AutoForce. Desde então, fomos acelerados pela Endeavor e Inovativa Brasil, recebemos aporte de R$ 2,3 milhões, fomos reconhecidos pela GPTW e homologados por grandes montadoras como Stellantis, Mercedes-Benz e Renault!"
  },
  {
    keywords: ["2014", "início", "começo", "origem"],
    resposta: "Em 2014, Tiago e Isa saíram da antiga agência e decidiram empreender novamente, validando a ideia do CMS Autódromo com concessionárias em Natal-RN e desenvolvendo o MVP da solução."
  },
  {
    keywords: ["2015", "fundação oficial"],
    resposta: "Em 2015, a AutoForce foi oficialmente fundada, já atendendo grupos de concessionárias em Natal e Anápolis. A equipe se instalou na incubadora ITNC e Clênio se juntou ao time."
  },
  {
    keywords: ["2017", "crescimento"],
    resposta: "Em 2017, a AutoForce conquistou grandes grupos econômicos no Nordeste e Sudeste do Brasil. Fomos para um escritório maior e começamos a estruturar o time de Racers."
  },
  {
    keywords: ["2018", "sócio", "mitsubishi", "renaro"],
    resposta: "Em 2018, Emanuel tornou-se sócio da AutoForce e líder técnico. A Mitsubishi HPE nos reconheceu como parceira oficial do programa RENARO."
  },
  {
    keywords: ["2019", "aceleração", "endeavor", "inovativa"],
    resposta: "Em 2019, a AutoForce foi acelerada pelos dois maiores programas de aceleração de startups da América Latina — Inovativa Brasil e Endeavor Scale-up."
  },
  {
    keywords: ["2020", "stellantis", "fiat", "jeep", "ddm"],
    resposta: "Em 2020, a Stellantis homologou a AutoForce no programa DDM, levando o CMS Autódromo às concessionárias Fiat e Jeep em todo o Brasil. Já éramos mais de 500 lojas usando a solução!"
  },
  {
    keywords: ["2021", "aporte", "investimento", "gptw", "angels"],
    resposta: "Em 2021, a AutoForce recebeu um aporte de R$ 2,3 milhões dos grupos BR Angels e GV Angels. Também fomos reconhecidos pela GPTW como uma das melhores empresas para trabalhar no Brasil."
  },
  {
    keywords: ["2022", "mercedes", "gwm", "autotech", "pistas"],
    resposta: "Em 2022, fomos homologados pela Mercedes-Benz Caminhões e Autotech GWM. A AutoForce entrou de vez nas pistas, acelerando nas principais categorias do Brasil: Stock Car, Copa Truck e mais."
  },
  {
    keywords: ["2023", "breakeven", "simpar", "autódromo 2"],
    resposta: "Em 2023, alcançamos o breakeven um ano após o aporte. A Simpar se tornou nosso 2º maior cliente e iniciamos o desenvolvimento do Autódromo 2.0."
  },
  {
    keywords: ["2024", "autódromo 2.0", "mansão racer", "embaixadores"],
    resposta: "Em 2024, lançamos o Autódromo 2.0 e apresentamos a 2ª Onda do Marketing Digital Automotivo. Nos mudamos para a Mansão Racer e reconhecemos nossos primeiros Embaixadores de Cultura."
  },
  {
    keywords: ["2025", "híbrido", "giants", "rebranding", "renault"],
    resposta: "Em 2025, retornamos ao modelo híbrido, entramos no programa GIANTS e passamos por um rebranding completo. A Renault homologou a AutoForce — e isso é só o começo!"
  },
  {
    keywords: ["aporte", "investimento", "quanto", "valor investido"],
    resposta: "Em 2021, recebemos um aporte de R$ 2,3 milhões dos grupos BR Angels e GV Angels. Alcançamos o breakeven um ano depois, em 2023."
  },
  {
    keywords: ["gptw", "great place to work", "melhor empresa"],
    resposta: "Em 2021, fomos reconhecidos pela GPTW (Great Place to Work) como uma das melhores empresas para trabalhar no Brasil! 🏆"
  },
  {
    keywords: ["autódromo", "cms", "produto", "solução"],
    resposta: "O Autódromo é nosso CMS (Sistema de Gerenciamento de Conteúdo) para concessionárias. Começou em 2014 como ideia, foi validado em 2015, evoluiu com milhares de lojas e em 2024 lançamos a versão 2.0!"
  },
  {
    keywords: ["natal", "onde", "localização", "cidade"],
    resposta: "Nascemos em Natal-RN! Foi lá que Tiago e Isa validaram a ideia do CMS Autódromo em 2014 com concessionárias locais. Hoje atendemos todo o Brasil!"
  },
  {
    keywords: ["mansão racer", "escritório", "sede"],
    resposta: "Em 2024, nos mudamos para a Mansão Racer, nosso escritório atual que reflete nossa cultura de alta performance e espírito de equipe!"
  },
  {
    keywords: ["embaixadores", "embaixador de cultura"],
    resposta: "Em 2024, reconhecemos nossos primeiros Embaixadores de Cultura — Racers que vivem intensamente nossos valores e inspiram todo o time!"
  }
];

export default function App() {
  const [tab, setTab] = useState("Home");
  const [activeValor, setActiveValor] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeOrg, setActiveOrg] = useState(0);
  const [testePage, setTestePage] = useState<"menu" | "fit" | "disc">("menu");
  const [respostasFit, setRespostasFit] = useState<number[]>([]);
  const [respostasDISC, setRespostasDISC] = useState<number[]>([]);
  const [showResultadoFit, setShowResultadoFit] = useState(false);
  const [showResultadoDISC, setShowResultadoDISC] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{text: string, isBot: boolean}[]>([
    { text: "Olá! 👋 Sou o assistente de cultura da AutoForce. Como posso te ajudar?", isBot: true }
  ]);
  const [userInput, setUserInput] = useState("");

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

  const switchTab = (t: string) => { setTab(t); setMenuOpen(false); setActiveValor(null); setTestePage("menu"); };

  const handleSendMessage = () => {
    const input = userInput.trim();
    if (!input) return;

    const newMessages = [...chatMessages, { text: input, isBot: false }];
    setChatMessages(newMessages);
    setUserInput("");

    const inputLower = input.toLowerCase();
    let resposta = "Desculpe, não encontrei uma resposta para isso. Tente perguntar sobre nossos valores, missão, tribos, ou o que é um Racer Classe A! 💙";

    for (const faq of chatFAQ) {
      if (faq.keywords.some(keyword => inputLower.includes(keyword))) {
        resposta = faq.resposta;
        break;
      }
    }

    setTimeout(() => {
      setChatMessages([...newMessages, { text: resposta, isBot: true }]);
    }, 500);
  };

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: "#080C10", minHeight: "100vh", color: "#E8EAF0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-tab { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; padding: 10px 16px; border: none; background: transparent; cursor: pointer; transition: all 0.2s; color: #C9D1D9; border-bottom: 2px solid transparent; }
        .nav-tab:hover { color: #1440FF; }
        .nav-tab.active { color: #1440FF; border-bottom-color: #1440FF; }
        .valor-card { background: #0D1117; border: 1px solid #1C2230; border-radius: 12px; padding: 24px; cursor: pointer; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
        .valor-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, transparent 0%, rgba(20,64,255,0.03) 100%); opacity: 0; transition: opacity 0.35s ease; }
        .valor-card:hover::before { opacity: 1; }
        .valor-card:hover { border-color: #1440FF; transform: translateY(-5px) scale(1.02); box-shadow: 0 12px 40px rgba(20,64,255,0.2); }
        .valor-card.active { border-color: #1440FF; background: #10151E; box-shadow: 0 8px 30px rgba(20,64,255,0.15); }
        .tribo-card { background: #0D1117; border: 1px solid #1C2230; border-radius: 12px; padding: 28px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; }
        .tribo-card::after { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 0; background: linear-gradient(to bottom, #1440FF, #0027D4); transition: height 0.3s ease; }
        .tribo-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(20,64,255,0.15); }
        .tribo-card:hover::after { height: 100%; }
        .timeline-item { display: flex; gap: 24px; padding: 24px 0; border-left: 2px solid #1C2230; padding-left: 32px; position: relative; transition: all 0.3s ease; }
        .timeline-item:hover { border-left-color: #1440FF; padding-left: 36px; }
        .timeline-dot { position: absolute; left: -9px; top: 28px; width: 16px; height: 16px; border-radius: 50%; background: #1440FF; border: 2px solid #080C10; box-shadow: 0 0 10px rgba(20,64,255,0.6); transition: all 0.3s ease; }
        .timeline-item:hover .timeline-dot { width: 20px; height: 20px; left: -11px; top: 26px; box-shadow: 0 0 20px rgba(20,64,255,0.8); }
        .stat-box { background: #0D1117; border: 1px solid #1C2230; border-radius: 12px; padding: 24px 20px; text-align: center; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
        .stat-box::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(20,64,255,0.1), transparent); transition: left 0.5s ease; }
        .stat-box:hover::before { left: 100%; }
        .stat-box:hover { border-color: #1440FF; transform: translateY(-4px) scale(1.05); box-shadow: 0 10px 30px rgba(20,64,255,0.2); }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        .pulse-icon { animation: pulse 2s ease-in-out infinite; }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .gradient-animate { background-size: 200% 200%; animation: gradientShift 8s ease infinite; }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .shimmer-text { background: linear-gradient(90deg, #fff 0%, #1440FF 25%, #fff 50%, #1440FF 75%, #fff 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 3s linear infinite; }
        .fade-in { opacity: 0; transform: translateY(10px); animation: fadeUp 0.4s ease forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .racer-hub-connector { position: absolute; background: linear-gradient(90deg, #1440FF 0%, transparent 100%); height: 2px; transform-origin: left center; opacity: 0.3; transition: all 0.4s ease; }
        .racer-hub-item:hover .racer-hub-connector { opacity: 1; height: 3px; }
        .racer-photo-card { position: relative; overflow: hidden; border-radius: 16px; height: 420px; cursor: pointer; border: 2px solid #1C2230; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .racer-photo-card:hover { border-color: #1440FF; box-shadow: 0 20px 60px rgba(20,64,255,0.3); transform: translateY(-8px); }
        .racer-photo-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .racer-photo-card:hover img { transform: scale(1.15); }
        .racer-photo-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(8,12,16,0.95) 0%, rgba(8,12,16,0.7) 50%, transparent 100%); padding: 28px 24px; transition: all 0.4s ease; }
        .racer-photo-card:hover .racer-photo-overlay { background: linear-gradient(to top, rgba(20,64,255,0.9) 0%, rgba(20,64,255,0.5) 60%, transparent 100%); padding-bottom: 36px; }
        .racer-stats { display: flex; gap: 16px; margin-top: 12px; opacity: 0; transform: translateY(10px); transition: all 0.4s ease; }
        .racer-photo-card:hover .racer-stats { opacity: 1; transform: translateY(0); }
        .grito-line { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(28px, 5vw, 56px); font-weight: 800; letter-spacing: 2px; line-height: 1; }
        .section-label { font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #1440FF; margin-bottom: 8px; }
        .big-title { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(32px, 6vw, 64px); font-weight: 800; line-height: 1.05; letter-spacing: -0.5px; }
        .comportamento-item { display: flex; gap: 14px; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid #1C2230; }
        .comportamento-item:last-child { border-bottom: none; }
        .badge { font-family: 'Barlow Condensed', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 2px; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; display: inline-block; }
        .stripe-bg { background: repeating-linear-gradient(135deg, transparent 0, transparent 10px, rgba(20,64,255,0.03) 10px, rgba(20,64,255,0.03) 20px); }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #080C10; } ::-webkit-scrollbar-thumb { background: #1C2230; border-radius: 2px; }
        .princip-card { background: #0D1117; border: 1px solid #1C2230; border-radius: 12px; padding: 32px; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
        .princip-card::before { content: ''; position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px; background: linear-gradient(135deg, #1440FF, #0027D4, #001A91); border-radius: 12px; opacity: 0; transition: opacity 0.35s ease; z-index: -1; }
        .princip-card:hover { border-color: transparent; transform: translateY(-4px) scale(1.03); box-shadow: 0 15px 50px rgba(20,64,255,0.25); }
        .princip-card:hover::before { opacity: 1; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        .float-animation { animation: float 3s ease-in-out infinite; }
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
            <img
              src="https://res.cloudinary.com/dm0fdycxx/image/upload/v1775845805/Property_1_Variant6_10_upubxj.png"
              alt="AutoForce Logo"
              style={{ height: 32, width: "auto" }}
            />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, color: "#9CA3AF", marginLeft: 4, marginTop: 2 }}>CÓDIGO DE CULTURA</span>
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
              <button key={t} onClick={() => switchTab(t)} style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 24px", background: "none", border: "none", cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", color: tab === t ? "#1440FF" : "#9CA3AF" }}>{t}</button>
            ))}
          </div>
        )}
      </nav>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* HOME */}
        {tab === "Home" && (
          <div className="fade-in">
            {/* Hero */}
            <div style={{ padding: "64px 0 48px", position: "relative", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 500px" }}>
                <div className="section-label" style={{ animation: "fadeUp 0.5s ease forwards" }}>Bem-vindo ao</div>
                <h1 className="big-title" style={{ color: "#fff", marginBottom: 16, animation: "fadeUp 0.6s ease forwards", animationDelay: "0.1s", opacity: 0 }}>
                  Código de Cultura<br /><span style={{ color: "#1440FF" }}>AutoForce</span>
                </h1>
                <p style={{ fontSize: 18, color: "#C9D1D9", maxWidth: 560, lineHeight: 1.7, marginBottom: 32, animation: "fadeUp 0.7s ease forwards", animationDelay: "0.2s", opacity: 0 }}>
                  Não queremos apenas ser um software por assinatura. Queremos realizar a <strong style={{ color: "#9CA3AF" }}>Transformação Digital no setor automotivo brasileiro</strong>.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", animation: "fadeUp 0.8s ease forwards", animationDelay: "0.3s", opacity: 0 }}>
                  <button onClick={() => switchTab("Valores")} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", background: "#1440FF", color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(20,64,255,0.3)" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(20,64,255,0.4)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(20,64,255,0.3)"; }}>
                    Nossos Valores <ArrowRight size={16} />
                  </button>
                  <button onClick={() => switchTab("Racer Classe A")} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", background: "transparent", color: "#9CA3AF", border: "1px solid #1C2230", borderRadius: 8, padding: "12px 24px", cursor: "pointer", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#1440FF"; e.currentTarget.style.color = "#1440FF"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C2230"; e.currentTarget.style.color = "#9CA3AF"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    Ser um Racer Classe A
                  </button>
                </div>
              </div>

              <div className="float-animation" style={{ flex: "0 0 auto", animation: "fadeUp 0.9s ease forwards", animationDelay: "0.4s", opacity: 0 }}>
                <img
                  src="https://res.cloudinary.com/dm0fdycxx/image/upload/v1777335518/Design_sem_nome_-_2026-04-27T211829.450_ufxfvz.png"
                  alt="Cultura AutoForce"
                  style={{
                    width: "auto",
                    maxWidth: 400,
                    height: "auto",
                    filter: "drop-shadow(0 20px 60px rgba(20,64,255,0.4))"
                  }}
                />
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 48 }}>
              {stats.map((s, i) => (
                <div key={i} className="stat-box fade-in" style={{ animationDelay: `${0.5 + i * 0.1}s`, opacity: 0 }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 800, color: "#1440FF", lineHeight: 1 }}>{s.valor}</div>
                  <div style={{ fontSize: 12, color: "#C9D1D9", marginTop: 4, letterSpacing: 0.5 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Missão + Visão */}
            <div className="hero-grid fade-in" style={{ marginBottom: 32, animationDelay: "0.7s", opacity: 0 }}>
              <div className="hero-cell">
                <div className="section-label">Nossa Missão</div>
                <p style={{ color: "#C9D1D9", fontSize: 16, lineHeight: 1.8 }}>Pensar, criar e entregar soluções de marketing digital e inteligência comercial que impulsionam a performance e geram resultados reais para negócios automotivos no Brasil.</p>
              </div>
              <div className="hero-cell" style={{ borderLeft: "2px solid #1440FF22" }}>
                <div className="section-label">Nossa Visão</div>
                <p style={{ color: "#C9D1D9", fontSize: 16, lineHeight: 1.8 }}>Alcançar um faturamento de <strong style={{ color: "#fff" }}>R$ 15 milhões</strong> com uma margem bruta de <strong style={{ color: "#fff" }}>70%</strong> e um EBITDA de <strong style={{ color: "#fff" }}>30%</strong> até 31/12/2026.</p>
              </div>
            </div>

            {/* Princípios */}
            <div className="section-label" style={{ marginTop: 48, marginBottom: 20 }}>Nossos 3 Princípios Base</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 48 }}>
              {principios.map((p, i) => (
                <div key={i} className="princip-card fade-in" style={{ animationDelay: `${0.8 + i * 0.1}s`, opacity: 0 }} onMouseEnter={e => {
                  const num = e.currentTarget.querySelector('.princip-num');
                  const icon = e.currentTarget.querySelector('.princip-icon');
                  if (num) num.style.color = "#fff";
                  if (icon) icon.style.color = "#fff";
                }} onMouseLeave={e => {
                  const num = e.currentTarget.querySelector('.princip-num');
                  const icon = e.currentTarget.querySelector('.princip-icon');
                  if (num) num.style.color = "#fff";
                  if (icon) icon.style.color = "#1440FF";
                }}>
                  <div className="princip-num" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 44, fontWeight: 800, color: "#fff", lineHeight: 1, transition: "color 0.3s ease" }}>{p.num}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "8px 0 12px" }}>
                    <div className="princip-icon" style={{ transition: "color 0.3s ease", color: "#1440FF", display: "flex" }}>
                      <p.icon size={20} />
                    </div>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{p.titulo}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#C9D1D9", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Cultura */}
            <div className="stripe-bg fade-in" style={{ border: "2px solid #1440FF", borderRadius: 12, padding: "32px", marginBottom: 48, textAlign: "center", animationDelay: "0.9s", opacity: 0, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: "-100%", width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(20,64,255,0.2), transparent)", animation: "shimmer 3s ease-in-out infinite" }} />
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#1440FF", marginBottom: 12 }}>Nossa Cultura</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 800, color: "#fff", position: "relative", zIndex: 1 }}>Vender é o coração da empresa!</div>
            </div>
          </div>
        )}

        {/* QUEM SOMOS */}
        {tab === "Quem Somos" && (
          <div className="fade-in" style={{ padding: "48px 0" }}>
            <div className="section-label">Sobre nós</div>
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 24 }}>Somos uma empresa de tecnologia<br />e educação em <span style={{ color: "#1440FF" }}>marketing digital</span></h2>
            <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 600, lineHeight: 1.8, marginBottom: 48 }}>
              Somos uma martech brasileira, fundada em 2015, com a missão de promover a transformação digital no setor automotivo. Por meio de tecnologias, processos e modelos de negócios inovadores, geramos valor para o setor automotivo e o desenvolvimento econômico do país.
            </p>

            {/* Organização */}
            <div className="section-label" style={{ marginBottom: 20 }}>Nossa Organização</div>
            <div style={{ display: "flex", gap: 48, alignItems: "center", marginBottom: 48, flexWrap: "wrap", justifyContent: "center" }}>
              {/* Pirâmide */}
              <div style={{ position: "relative", flex: "0 0 auto" }}>
                <svg width="320" height="280" viewBox="0 0 320 280" style={{ filter: "drop-shadow(0 10px 30px rgba(20,64,255,0.3))" }}>
                  {/* Base - Operacional */}
                  <polygon
                    points="40,260 280,260 240,180 80,180"
                    fill={activeOrg === 2 ? "#1440FF" : "#0D1117"}
                    stroke="#1440FF"
                    strokeWidth="2"
                    style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                    onMouseEnter={() => setActiveOrg(2)}
                    onClick={() => setActiveOrg(2)}
                  />

                  {/* Meio - Tático */}
                  <polygon
                    points="80,180 240,180 200,100 120,100"
                    fill={activeOrg === 1 ? "#0027D4" : "#0D1117"}
                    stroke="#0027D4"
                    strokeWidth="2"
                    style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                    onMouseEnter={() => setActiveOrg(1)}
                    onClick={() => setActiveOrg(1)}
                  />

                  {/* Topo - Estratégico */}
                  <polygon
                    points="120,100 200,100 160,20"
                    fill={activeOrg === 0 ? "#001A91" : "#0D1117"}
                    stroke="#001A91"
                    strokeWidth="2"
                    style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                    onMouseEnter={() => setActiveOrg(0)}
                    onClick={() => setActiveOrg(0)}
                  />
                </svg>
              </div>

              {/* Informações do Nível Selecionado */}
              <div style={{ flex: "1 1 400px", minWidth: 300 }}>
                {[
                  { nivel: "Estratégico", cargo: "C-level e Head", items: ["Elaborar visão e planejamento estratégico", "Relações públicas", "Gerenciar e desenvolver talentos", "Captar e administrar recursos financeiros", "Desenvolver e acompanhar indicadores-chave"], cor: "#001A91" },
                  { nivel: "Tático", cargo: "Head / Coordenação", items: ["Mentor do time", "Alocar recursos", "Gerenciar indicadores", "Executar o planejamento"], cor: "#0027D4" },
                  { nivel: "Operacional", cargo: "Racer", items: ["Executar as missões", "Atingir as metas", "Pesquisar e testar coisas novas", "Encantar os clientes"], cor: "#1440FF" },
                ][activeOrg] && (
                  <div className="org-level" style={{ borderLeft: `3px solid ${[
                    { nivel: "Estratégico", cargo: "C-level e Head", items: ["Elaborar visão e planejamento estratégico", "Relações públicas", "Gerenciar e desenvolver talentos", "Captar e administrar recursos financeiros", "Desenvolver e acompanhar indicadores-chave"], cor: "#001A91" },
                    { nivel: "Tático", cargo: "Head / Coordenação", items: ["Mentor do time", "Alocar recursos", "Gerenciar indicadores", "Executar o planejamento"], cor: "#0027D4" },
                    { nivel: "Operacional", cargo: "Racer", items: ["Executar as missões", "Atingir as metas", "Pesquisar e testar coisas novas", "Encantar os clientes"], cor: "#1440FF" },
                  ][activeOrg].cor}`, animation: "fadeUp 0.4s ease forwards" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                      <div>
                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 24, color: "#fff" }}>{activeOrg + 1} — {[
                          { nivel: "Estratégico", cargo: "C-level e Head", items: ["Elaborar visão e planejamento estratégico", "Relações públicas", "Gerenciar e desenvolver talentos", "Captar e administrar recursos financeiros", "Desenvolver e acompanhar indicadores-chave"], cor: "#001A91" },
                          { nivel: "Tático", cargo: "Head / Coordenação", items: ["Mentor do time", "Alocar recursos", "Gerenciar indicadores", "Executar o planejamento"], cor: "#0027D4" },
                          { nivel: "Operacional", cargo: "Racer", items: ["Executar as missões", "Atingir as metas", "Pesquisar e testar coisas novas", "Encantar os clientes"], cor: "#1440FF" },
                        ][activeOrg].nivel}</span>
                        <span style={{ display: "block", marginTop: 4, fontSize: 14, color: "#C9D1D9" }}>{[
                          { nivel: "Estratégico", cargo: "C-level e Head", items: ["Elaborar visão e planejamento estratégico", "Relações públicas", "Gerenciar e desenvolver talentos", "Captar e administrar recursos financeiros", "Desenvolver e acompanhar indicadores-chave"], cor: "#001A91" },
                          { nivel: "Tático", cargo: "Head / Coordenação", items: ["Mentor do time", "Alocar recursos", "Gerenciar indicadores", "Executar o planejamento"], cor: "#0027D4" },
                          { nivel: "Operacional", cargo: "Racer", items: ["Executar as missões", "Atingir as metas", "Pesquisar e testar coisas novas", "Encantar os clientes"], cor: "#1440FF" },
                        ][activeOrg].cargo}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
                      {[
                        { nivel: "Estratégico", cargo: "C-level e Head", items: ["Elaborar visão e planejamento estratégico", "Relações públicas", "Gerenciar e desenvolver talentos", "Captar e administrar recursos financeiros", "Desenvolver e acompanhar indicadores-chave"], cor: "#001A91" },
                        { nivel: "Tático", cargo: "Head / Coordenação", items: ["Mentor do time", "Alocar recursos", "Gerenciar indicadores", "Executar o planejamento"], cor: "#0027D4" },
                        { nivel: "Operacional", cargo: "Racer", items: ["Executar as missões", "Atingir as metas", "Pesquisar e testar coisas novas", "Encantar os clientes"], cor: "#1440FF" },
                      ][activeOrg].items.map((item, j) => (
                        <span key={j} style={{ fontSize: 13, background: "#161B22", border: "1px solid #1C2230", borderRadius: 6, padding: "6px 12px", color: "#C9D1D9" }}>{item}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quem contratamos / promovemos */}
            <div className="section-label" style={{ marginBottom: 20 }}>Nossa Cultura de Pessoas</div>
            <div className="hero-grid" style={{ marginBottom: 48 }}>
              <div className="hero-cell">
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 16 }}>Quem Contratamos</div>
                {["Quem é intraempreendedor", "Quem quer fazer a diferença no mundo", "Quem tem postura de dono", "Quem faz acontecer"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #1C2230" }}>
                    <CheckCircle size={14} color="#1440FF" />
                    <span style={{ fontSize: 14, color: "#9CA3AF" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="hero-cell" style={{ borderLeft: "2px solid #1440FF22" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 16 }}>Quem Promovemos</div>
                {["Quem entrega além do esperado", "Quem leva o cliente ao pódio", "Quem joga para vencer", "Quem tem energia e brilho nos olhos"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #1C2230" }}>
                    <Trophy size={14} color="#1440FF" />
                    <span style={{ fontSize: 14, color: "#9CA3AF" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fundadores */}
            <div className="section-label" style={{ marginBottom: 20 }}>Nossos Sócios</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {[
                { nome: "Tiago Fernandes", cargo: "Co-Founder e CEO", formacao: "Administrador", foto: "https://res.cloudinary.com/dm0fdycxx/image/upload/v1777334357/Perfil_Tiago_Fernandes_zq5fcb.png" },
                { nome: "Emanuel Campos", cargo: "CTO", formacao: "Analista de Sistemas", foto: "https://res.cloudinary.com/dm0fdycxx/image/upload/v1777334379/Perfil_Emanuel_fzniel.png" },
                { nome: "Clênio Luiz", cargo: "CIO", formacao: "Comunicador Social", foto: "https://res.cloudinary.com/dm0fdycxx/image/upload/v1777334368/Assinatura_Cl%C3%AAnioCarlos_ieg7dh.png" },
              ].map((s, i) => (
                <div key={i} style={{ background: "#0D1117", border: "1px solid #1C2230", borderRadius: 12, padding: "24px", textAlign: "center", transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#1440FF"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C2230"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ width: 120, height: 120, borderRadius: "50%", border: "3px solid #1440FF44", margin: "0 auto 16px", overflow: "hidden", background: "#0D1117" }}>
                    <img src={s.foto} alt={s.nome} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>{s.nome}</div>
                  <div style={{ fontSize: 13, color: "#1440FF", marginTop: 2 }}>{s.cargo}</div>
                  <div style={{ fontSize: 12, color: "#C9D1D9", marginTop: 4 }}>{s.formacao}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VALORES */}
        {tab === "Valores" && (
          <div className="fade-in" style={{ padding: "48px 0" }}>
            <div className="section-label">Nossa Bússola</div>
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 8 }}>6 Valores <span style={{ color: "#1440FF" }}>Comportamentais</span></h2>
            <p style={{ color: "#C9D1D9", marginBottom: 40, fontSize: 15 }}>Clique em um valor para ver como ele é vivido no dia a dia.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginBottom: 32 }}>
              {valores.map((v, i) => (
                <div key={i} className={`valor-card${activeValor === i ? " active" : ""} fade-in`} onClick={() => setActiveValor(activeValor === i ? null : i)} style={{ borderColor: activeValor === i ? "#1440FF" : undefined, animationDelay: `${i * 0.08}s`, opacity: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 40, fontWeight: 800, color: activeValor === i ? "#1440FF" : "#1C2230", lineHeight: 1, transition: "all 0.3s ease" }}>{v.num}</span>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1440FF18", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", transform: activeValor === i ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)" }}>
                      <v.icon size={18} color="#1440FF" />
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>{v.titulo}</div>
                  {v.tag && <span className="badge" style={{ background: "#1440FF22", color: "#1440FF" }}>{v.tag}</span>}
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 12, fontSize: 12, color: "#9CA3AF" }}>
                    <ChevronRight size={14} style={{ transition: "transform 0.2s", transform: activeValor === i ? "rotate(90deg)" : "rotate(0)" }} />
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: 1 }}>{activeValor === i ? "RECOLHER" : "COMO VIVEMOS"}</span>
                  </div>
                </div>
              ))}
            </div>
            {activeValor !== null && (
              <div style={{ background: "#0D1117", border: "1px solid #1440FF44", borderRadius: 12, padding: "32px", marginTop: 8, animation: "fadeUp 0.3s ease forwards" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: "#1440FF22", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {(() => { const Icon = valores[activeValor].icon; return <Icon size={22} color="#1440FF" />; })()}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, color: "#fff" }}>{valores[activeValor].titulo}</div>
                    <div style={{ fontSize: 12, color: "#C9D1D9" }}>Como vivemos na prática</div>
                  </div>
                </div>
                {valores[activeValor].comportamentos.map((c, j) => (
                  <div key={j} className="comportamento-item">
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: "#161B22", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <c.icon size={14} color="#1440FF" />
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
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 8 }}>Nossas <span style={{ color: "#1440FF" }}>5 Tribos</span></h2>
            <p style={{ color: "#C9D1D9", marginBottom: 40, fontSize: 15, maxWidth: 500 }}>Cada tribo tem uma missão clara e todos convergem para o sucesso do cliente.</p>
            <div style={{ position: "relative", marginBottom: 48 }}>
              <div className="fade-in" style={{ display: "flex", justifyContent: "center", marginBottom: 32, animationDelay: "0.2s", opacity: 0 }}>
                <div className="pulse-icon" style={{ width: 120, height: 120, borderRadius: "50%", background: "#0D1117", border: "3px solid #1440FF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(20,64,255,0.4)" }}>
                  <Heart size={28} color="#1440FF" />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 4 }}>CLIENTE</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {tribos.map((t, i) => (
                  <div key={i} className="tribo-card fade-in" style={{ borderLeft: `3px solid #1440FF`, animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 8, background: "#1440FF18", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s ease" }} onMouseEnter={e => e.currentTarget.style.transform = "rotate(360deg)"} onMouseLeave={e => e.currentTarget.style.transform = "rotate(0deg)"}>
                        <t.icon size={20} color="#1440FF" />
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff", lineHeight: 1 }}>{t.nome}</div>
                        <div style={{ fontSize: 11, color: "#1440FF", letterSpacing: 1, fontWeight: 600, textTransform: "uppercase" }}>{t.area}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "#C9D1D9", lineHeight: 1.7 }}>{t.desc}</p>
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
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 8 }}>Uma Jornada de <span style={{ color: "#1440FF" }}>Aceleração</span></h2>
            <p style={{ color: "#C9D1D9", marginBottom: 48, fontSize: 15 }}>De uma ideia em Natal-RN à transformação digital de todo o setor automotivo brasileiro.</p>
            <div style={{ position: "relative" }}>
              {jornada.map((item, i) => (
                <div key={i} className="timeline-item fade-in" style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}>
                  <div className="timeline-dot" />
                  <div style={{ paddingBottom: 8 }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: i === jornada.length - 1 ? "#1440FF" : "#9CA3AF", lineHeight: 1, marginBottom: 8 }}>{item.ano}</div>
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
            <h2 className="big-title" style={{ color: "#fff", marginBottom: 40 }}>Racer <span style={{ color: "#1440FF" }}>Classe A</span></h2>

            {/* Hub de Conectores com Imagem */}
            <div style={{ display: "flex", gap: 60, alignItems: "center", marginBottom: 60, flexWrap: "wrap", justifyContent: "center" }}>
              {/* Imagem Grande e Livre */}
              <div className="fade-in" style={{ position: "relative", animationDelay: "0.1s", opacity: 0, flex: "0 0 auto" }}>
                <img
                  src="https://res.cloudinary.com/dm0fdycxx/image/upload/v1775846229/Design_sem_nome_-_2026-04-10T153631.096_sx6j4m.png"
                  alt="Racer Classe A Logo"
                  style={{
                    width: "auto",
                    maxWidth: 500,
                    height: "auto",
                    display: "block",
                    filter: "drop-shadow(0 20px 60px rgba(20,64,255,0.4))"
                  }}
                />
                {/* Glow effect */}
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 600,
                  height: 600,
                  background: "radial-gradient(circle, rgba(20,64,255,0.2) 0%, transparent 60%)",
                  pointerEvents: "none",
                  zIndex: -1
                }} />
              </div>

              {/* Definições com Conectores */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative", flex: "1 1 400px", minWidth: 300 }}>
                {[
                  { icon: Zap, texto: "Tem brilho nos olhos" },
                  { icon: Trophy, texto: "Joga para vencer" },
                  { icon: Globe, texto: "Faz a diferença no mundo" },
                  { icon: Flag, texto: "Leva o cliente ao pódio" },
                  { icon: Star, texto: "Entrega além do esperado" },
                ].map((item, i) => (
                  <div key={i} className="racer-hub-item fade-in" style={{ 
                    background: "#0D1117", 
                    border: "1px solid #1C2230", 
                    borderRadius: 12, 
                    padding: "24px 28px", 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 16, 
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)", 
                    position: "relative", 
                    animationDelay: `${0.2 + i * 0.1}s`, 
                    opacity: 0 
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "#1440FF";
                      e.currentTarget.style.transform = "translateX(8px) scale(1.03)";
                      e.currentTarget.style.boxShadow = "0 15px 40px rgba(20,64,255,0.4)";
                      const icon = e.currentTarget.querySelector('.racer-icon') as HTMLElement;
                      if (icon) icon.style.transform = "rotate(360deg) scale(1.2)";
                      const connector = e.currentTarget.querySelector('.racer-hub-connector') as HTMLElement;
                      if (connector) {
                        connector.style.opacity = "1";
                        connector.style.width = "80px";
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "#1C2230";
                      e.currentTarget.style.transform = "translateX(0) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                      const icon = e.currentTarget.querySelector('.racer-icon') as HTMLElement;
                      if (icon) icon.style.transform = "rotate(0deg) scale(1)";
                      const connector = e.currentTarget.querySelector('.racer-hub-connector') as HTMLElement;
                      if (connector) {
                        connector.style.opacity = "0.4";
                        connector.style.width = "60px";
                      }
                    }}>
                    {/* Conector visual (linha horizontal à esquerda) */}
                    <div className="racer-hub-connector" style={{ 
                      background: "linear-gradient(to right, #1440FF 0%, transparent 100%)",
                      width: 60,
                      height: 2,
                      position: "absolute",
                      left: -60,
                      top: "50%",
                      transform: "translateY(-50%)",
                      opacity: 0.4,
                      transition: "all 0.4s ease"
                    }} />
                    <div className="racer-icon" style={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: 10, 
                      background: "#1440FF18", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      flexShrink: 0, 
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)" 
                    }}>
                      <item.icon size={24} color="#1440FF" />
                    </div>
                    <span style={{ 
                      fontFamily: "'Barlow Condensed', sans-serif", 
                      fontWeight: 700, 
                      fontSize: 20, 
                      color: "#fff", 
                      lineHeight: 1.2 
                    }}>{item.texto}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exemplos */}
            <div className="section-label" style={{ marginBottom: 20 }}>Nossos Exemplos de Excelência</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 48 }}>
              {/* Hannah Schmitz Card */}
              <div className="racer-photo-card fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
                <img src="https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2025/12/4/tr9h2ackccdbu0iy9a1e/hannah-schmitz-principal-strategy-engineer-of-oracle-red-bull-racing" alt="Hannah Schmitz - Estrategista" />
                <div className="racer-photo-overlay">
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", lineHeight: 1.1 }}>Hannah Schmitz</div>
                  <div style={{ fontSize: 14, color: "#E8EAF0", marginTop: 4, opacity: 0.9 }}>Estrategista-Chefe • Red Bull Racing</div>
                  <div className="racer-stats">
                    <span className="badge" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(10px)" }}>RACER</span>
                    <span className="badge" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(10px)" }}>ESTRATÉGIA</span>
                  </div>
                </div>
              </div>

              {/* Max Verstappen Card */}
              <div className="racer-photo-card fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
                <img src="https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2024/4/9/xozx4t0oac0owbh1nnda/motor-f1-max-verstappen-australia-2024" alt="Max Verstappen - Piloto" />
                <div className="racer-photo-overlay">
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", lineHeight: 1.1 }}>Max Verstappen</div>
                  <div style={{ fontSize: 14, color: "#E8EAF0", marginTop: 4, opacity: 0.9 }}>Piloto Principal • Red Bull Racing</div>
                  <div className="racer-stats">
                    <span className="badge" style={{ background: "rgba(255,215,0,0.2)", color: "#FFD700", backdropFilter: "blur(10px)" }}>CHAMPION</span>
                    <span className="badge" style={{ background: "rgba(255,215,0,0.2)", color: "#FFD700", backdropFilter: "blur(10px)" }}>4X CAMPEÃO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grito de Guerra */}
            <div className="stripe-bg gradient-animate" style={{ border: "2px solid #1440FF", borderRadius: 16, padding: "48px 32px", textAlign: "center", marginBottom: 48, background: "linear-gradient(135deg, rgba(20,64,255,0.08) 0%, rgba(0,39,212,0.05) 50%, rgba(20,64,255,0.08) 100%)", boxShadow: "0 10px 40px rgba(20,64,255,0.2)" }}>
              <div className="section-label" style={{ marginBottom: 28 }}>Nosso Grito de Guerra</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 13, color: "#C9D1D9", letterSpacing: 2, marginBottom: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>O QUE SOMOS?</div>
                  <div className="grito-line" style={{ color: "#1440FF" }}>RACERS!</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "#C9D1D9", letterSpacing: 2, marginBottom: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>O QUE QUEREMOS?</div>
                  <div className="grito-line" style={{ color: "#fff" }}>LEVAR O CLIENTE AO PÓDIO!</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "#C9D1D9", letterSpacing: 2, marginBottom: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>E COMO FAREMOS?</div>
                  <div className="grito-line" style={{ color: "#1440FF" }}>INOVANDO PARA VENCER!</div>
                  <div className="grito-line shimmer-text" style={{ marginTop: 4 }}>VENCER, VENCER, VENCER</div>
                </div>
                <div style={{ marginTop: 16, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, color: "#1440FF", letterSpacing: 3 }}>
                  #GORACERS 🏁
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="fade-in" style={{ background: "#0D1117", border: "1px solid #1C2230", borderLeft: "4px solid #1440FF", borderRadius: "0 12px 12px 0", padding: "24px 28px", marginBottom: 48, animationDelay: "0.8s", opacity: 0, transition: "all 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.borderLeftWidth = "6px"; e.currentTarget.style.paddingLeft = "26px"; }} onMouseLeave={e => { e.currentTarget.style.borderLeftWidth = "4px"; e.currentTarget.style.paddingLeft = "28px"; }}>
              <p style={{ fontSize: 18, color: "#9CA3AF", lineHeight: 1.8, fontStyle: "italic", marginBottom: 12 }}>
                "Eu sou parte de uma equipe. Então, quando venço, não sou eu apenas quem vence. De certa forma termino o trabalho de um grupo enorme de pessoas!"
              </p>
              <p style={{ fontSize: 15, color: "#1440FF", fontWeight: 600, textAlign: "right" }}>— Ayrton Senna</p>
            </div>
          </div>
        )}

        {/* TESTES */}
        {tab === "Testes" && (
          <div className="fade-in" style={{ padding: "48px 0" }}>
            {testePage === "menu" && (
              <>
                <div className="section-label">Avalie seus conhecimentos</div>
                <h2 className="big-title" style={{ color: "#fff", marginBottom: 40 }}>Testes para <span style={{ color: "#1440FF" }}>Racers</span></h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
                  {/* Teste Fit Cultural */}
                  <div className="tribo-card" style={{ cursor: "pointer" }} onClick={() => { setTestePage("fit"); setRespostasFit([]); setShowResultadoFit(false); }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 10, background: "#1440FF18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Target size={24} color="#1440FF" />
                      </div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, color: "#fff" }}>Fit Cultural AutoForce</div>
                    </div>
                    <p style={{ fontSize: 15, color: "#C9D1D9", lineHeight: 1.7, marginBottom: 16 }}>Teste seus conhecimentos sobre nossa cultura, valores, missão e história da empresa.</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#1440FF", fontSize: 14, fontWeight: 600 }}>
                      Iniciar Teste <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Teste DISC */}
                  <div className="tribo-card" style={{ cursor: "pointer" }} onClick={() => { setTestePage("disc"); setRespostasDISC([]); setShowResultadoDISC(false); }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 10, background: "#1440FF18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Users size={24} color="#1440FF" />
                      </div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, color: "#fff" }}>Teste DISC</div>
                    </div>
                    <p style={{ fontSize: 15, color: "#C9D1D9", lineHeight: 1.7, marginBottom: 16 }}>Descubra seus dois perfis comportamentais mais fortes: Dominante, Influente, Estável ou Conforme.</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#1440FF", fontSize: 14, fontWeight: 600 }}>
                      Iniciar Teste <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Teste Fit Cultural */}
            {testePage === "fit" && !showResultadoFit && (
              <>
                <button onClick={() => setTestePage("menu")} style={{ background: "transparent", border: "1px solid #1C2230", borderRadius: 8, padding: "8px 16px", color: "#9CA3AF", cursor: "pointer", marginBottom: 24, display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}>
                  ← Voltar aos Testes
                </button>
                <div className="section-label">Teste de Cultura</div>
                <h2 className="big-title" style={{ color: "#fff", marginBottom: 40 }}>Fit Cultural <span style={{ color: "#1440FF" }}>AutoForce</span></h2>

                {testeFitCultural.map((q, i) => (
                  <div key={i} style={{ background: "#0D1117", border: "1px solid #1C2230", borderRadius: 12, padding: "24px", marginBottom: 16 }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 16 }}>{i + 1}. {q.pergunta}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {q.opcoes.map((opc, j) => (
                        <button
                          key={j}
                          onClick={() => {
                            const novas = [...respostasFit];
                            novas[i] = j;
                            setRespostasFit(novas);
                          }}
                          style={{
                            background: respostasFit[i] === j ? "#1440FF22" : "#161B22",
                            border: respostasFit[i] === j ? "2px solid #1440FF" : "1px solid #1C2230",
                            borderRadius: 8,
                            padding: "12px 16px",
                            color: respostasFit[i] === j ? "#fff" : "#C9D1D9",
                            cursor: "pointer",
                            textAlign: "left",
                            fontSize: 14,
                            transition: "all 0.2s ease"
                          }}
                        >
                          {opc}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {respostasFit.length === testeFitCultural.length && (
                  <button onClick={() => setShowResultadoFit(true)} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", background: "#1440FF", color: "#fff", border: "none", borderRadius: 8, padding: "14px 32px", cursor: "pointer", boxShadow: "0 4px 15px rgba(20,64,255,0.3)", transition: "all 0.3s ease" }}>
                    Ver Resultado
                  </button>
                )}
              </>
            )}

            {/* Resultado Fit Cultural */}
            {testePage === "fit" && showResultadoFit && (
              <>
                <button onClick={() => setTestePage("menu")} style={{ background: "transparent", border: "1px solid #1C2230", borderRadius: 8, padding: "8px 16px", color: "#9CA3AF", cursor: "pointer", marginBottom: 24, display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}>
                  ← Voltar aos Testes
                </button>
                <div className="section-label">Resultado</div>
                <h2 className="big-title" style={{ color: "#fff", marginBottom: 40 }}>Seu <span style={{ color: "#1440FF" }}>Resultado</span></h2>

                {(() => {
                  const acertos = respostasFit.filter((r, i) => r === testeFitCultural[i].correta).length;
                  const percentual = Math.round((acertos / testeFitCultural.length) * 100);
                  return (
                    <div style={{ background: "#0D1117", border: "2px solid #1440FF", borderRadius: 16, padding: "40px", textAlign: "center", marginBottom: 32 }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 72, fontWeight: 800, color: "#1440FF", lineHeight: 1 }}>{percentual}%</div>
                      <div style={{ fontSize: 18, color: "#fff", marginTop: 12, marginBottom: 8 }}>Você acertou {acertos} de {testeFitCultural.length} questões</div>
                      <div style={{ fontSize: 15, color: "#C9D1D9", marginTop: 16 }}>
                        {percentual >= 80 && "Excelente! Você domina nossa cultura! 🏆"}
                        {percentual >= 60 && percentual < 80 && "Muito bom! Continue estudando nosso código de cultura! 👏"}
                        {percentual >= 40 && percentual < 60 && "Bom começo! Revise os valores e a história da AutoForce. 📚"}
                        {percentual < 40 && "Explore mais sobre nossa cultura. Você vai amar! 💙"}
                      </div>
                    </div>
                  );
                })()}

                <button onClick={() => { setRespostasFit([]); setShowResultadoFit(false); }} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", background: "#1440FF", color: "#fff", border: "none", borderRadius: 8, padding: "14px 32px", cursor: "pointer", boxShadow: "0 4px 15px rgba(20,64,255,0.3)" }}>
                  Refazer Teste
                </button>
              </>
            )}

            {/* Teste DISC */}
            {testePage === "disc" && !showResultadoDISC && (
              <>
                <button onClick={() => setTestePage("menu")} style={{ background: "transparent", border: "1px solid #1C2230", borderRadius: 8, padding: "8px 16px", color: "#9CA3AF", cursor: "pointer", marginBottom: 24, display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}>
                  ← Voltar aos Testes
                </button>
                <div className="section-label">Teste de Perfil</div>
                <h2 className="big-title" style={{ color: "#fff", marginBottom: 40 }}>Teste <span style={{ color: "#1440FF" }}>DISC</span></h2>

                {testeDISC.map((q, i) => (
                  <div key={i} style={{ background: "#0D1117", border: "1px solid #1C2230", borderRadius: 12, padding: "24px", marginBottom: 16 }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 16 }}>{i + 1}. {q.pergunta}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {q.opcoes.map((opc, j) => (
                        <button
                          key={j}
                          onClick={() => {
                            const novas = [...respostasDISC];
                            novas[i] = j;
                            setRespostasDISC(novas);
                          }}
                          style={{
                            background: respostasDISC[i] === j ? "#1440FF22" : "#161B22",
                            border: respostasDISC[i] === j ? "2px solid #1440FF" : "1px solid #1C2230",
                            borderRadius: 8,
                            padding: "12px 16px",
                            color: respostasDISC[i] === j ? "#fff" : "#C9D1D9",
                            cursor: "pointer",
                            textAlign: "left",
                            fontSize: 14,
                            transition: "all 0.2s ease"
                          }}
                        >
                          {opc}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {respostasDISC.length === testeDISC.length && (
                  <button onClick={() => setShowResultadoDISC(true)} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", background: "#1440FF", color: "#fff", border: "none", borderRadius: 8, padding: "14px 32px", cursor: "pointer", boxShadow: "0 4px 15px rgba(20,64,255,0.3)", transition: "all 0.3s ease" }}>
                    Ver Resultado
                  </button>
                )}
              </>
            )}

            {/* Resultado DISC */}
            {testePage === "disc" && showResultadoDISC && (
              <>
                <button onClick={() => setTestePage("menu")} style={{ background: "transparent", border: "1px solid #1C2230", borderRadius: 8, padding: "8px 16px", color: "#9CA3AF", cursor: "pointer", marginBottom: 24, display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}>
                  ← Voltar aos Testes
                </button>
                <div className="section-label">Resultado</div>
                <h2 className="big-title" style={{ color: "#fff", marginBottom: 40 }}>Seu Perfil <span style={{ color: "#1440FF" }}>DISC</span></h2>

                {(() => {
                  const contagem = { D: 0, I: 0, S: 0, C: 0 };
                  respostasDISC.forEach((r, i) => {
                    const perfil = testeDISC[i].perfis[r];
                    contagem[perfil as keyof typeof contagem]++;
                  });

                  const sorted = Object.entries(contagem).sort((a, b) => b[1] - a[1]);
                  const perfil1 = sorted[0][0];
                  const perfil2 = sorted[1][0];

                  const perfis = {
                    D: { nome: "Dominante / Executor", cor: "#FF4444", movido: "Desafios e Eficácia", traits: ["Independentes", "Auto Motivados", "Determinados"], busca: "RESULTADOS" },
                    I: { nome: "Influente / Comunicador", cor: "#FFD700", movido: "Liberdade e Criatividade", traits: ["Entusiasmados", "Autoconfiantes", "Sociáveis"], busca: "RELACIONAMENTOS" },
                    S: { nome: "Estável / Planejador", cor: "#00C9A7", movido: "Segurança e Lealdade", traits: ["Pacientes", "Persistentes", "Empáticos"], busca: "COLABORAÇÃO" },
                    C: { nome: "Conforme / Analista", cor: "#1440FF", movido: "Qualidade e Eficiência", traits: ["Exatos", "Disciplinados", "Lógicos"], busca: "PRECISÃO" }
                  };

                  return (
                    <>
                      <div style={{ marginBottom: 32 }}>
                        <p style={{ fontSize: 16, color: "#C9D1D9", marginBottom: 24 }}>Seus dois perfis mais fortes são:</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                          {[perfil1, perfil2].map((p, idx) => {
                            const info = perfis[p as keyof typeof perfis];
                            return (
                              <div key={idx} style={{ background: "#0D1117", border: `2px solid ${info.cor}`, borderRadius: 12, padding: "28px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: info.cor }}>{idx + 1}º</div>
                                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: "#fff" }}>{info.nome}</div>
                                </div>
                                <div style={{ marginBottom: 12 }}>
                                  <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 4 }}>Movido por:</div>
                                  <div style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>{info.movido}</div>
                                </div>
                                <div style={{ marginBottom: 12 }}>
                                  <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 6 }}>Características:</div>
                                  {info.traits.map((t, i) => (
                                    <div key={i} style={{ fontSize: 14, color: "#C9D1D9", marginBottom: 4 }}>• {t}</div>
                                  ))}
                                </div>
                                <div style={{ marginTop: 16, padding: "10px 16px", background: `${info.cor}22`, borderRadius: 8, textAlign: "center" }}>
                                  <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 2 }}>Busca:</div>
                                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 800, color: info.cor }}>{info.busca}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <button onClick={() => { setRespostasDISC([]); setShowResultadoDISC(false); }} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", background: "#1440FF", color: "#fff", border: "none", borderRadius: 8, padding: "14px 32px", cursor: "pointer", boxShadow: "0 4px 15px rgba(20,64,255,0.3)" }}>
                        Refazer Teste
                      </button>
                    </>
                  );
                })()}
              </>
            )}
          </div>
        )}

      </div>

      {/* CHATBOT */}
      {/* Botão Flutuante */}
      <div
        onClick={() => setChatOpen(!chatOpen)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1440FF, #0027D4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(20,64,255,0.4)",
          transition: "all 0.3s ease",
          zIndex: 1000
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 12px 32px rgba(20,64,255,0.6)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(20,64,255,0.4)";
        }}
      >
        {chatOpen ? <X size={28} color="#fff" /> : <MessageCircle size={28} color="#fff" />}
      </div>

      {/* Janela do Chat */}
      {chatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 24,
            width: 380,
            maxWidth: "calc(100vw - 48px)",
            height: 500,
            maxHeight: "calc(100vh - 150px)",
            background: "#0D1117",
            border: "2px solid #1440FF",
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(20,64,255,0.3)",
            display: "flex",
            flexDirection: "column",
            zIndex: 999,
            animation: "fadeUp 0.3s ease forwards"
          }}
        >
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #1440FF, #0027D4)",
            padding: "16px 20px",
            borderRadius: "14px 14px 0 0",
            display: "flex",
            alignItems: "center",
            gap: 12
          }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <MessageCircle size={20} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>
                Assistente de Cultura
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>AutoForce</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: 12
          }}>
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.isBot ? "flex-start" : "flex-end"
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: msg.isBot ? "4px 12px 12px 12px" : "12px 4px 12px 12px",
                    background: msg.isBot ? "#1C2230" : "#1440FF",
                    color: "#fff",
                    fontSize: 14,
                    lineHeight: 1.6
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Sugestões Rápidas */}
          <div style={{ padding: "12px 16px 12px", display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Valores", "Missão", "História", "Racer Classe A"].map(sug => (
              <button
                key={sug}
                onClick={() => {
                  const newMessages = [...chatMessages, { text: sug, isBot: false }];
                  setChatMessages(newMessages);
                  const inputLower = sug.toLowerCase();
                  let resposta = "Desculpe, não encontrei uma resposta para isso. 💙";
                  for (const faq of chatFAQ) {
                    if (faq.keywords.some(keyword => inputLower.includes(keyword))) {
                      resposta = faq.resposta;
                      break;
                    }
                  }
                  setTimeout(() => {
                    setChatMessages([...newMessages, { text: resposta, isBot: true }]);
                  }, 500);
                }}
                style={{
                  fontSize: 11,
                  padding: "6px 12px",
                  background: "#1C2230",
                  border: "1px solid #1440FF44",
                  borderRadius: 12,
                  color: "#1440FF",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontWeight: 600
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#1440FF22";
                  e.currentTarget.style.borderColor = "#1440FF";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#1C2230";
                  e.currentTarget.style.borderColor = "#1440FF44";
                }}
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{
            padding: "12px 16px",
            borderTop: "1px solid #1C2230",
            display: "flex",
            gap: 8
          }}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Faça uma pergunta..."
              style={{
                flex: 1,
                background: "#161B22",
                border: "1px solid #1C2230",
                borderRadius: 8,
                padding: "10px 12px",
                color: "#fff",
                fontSize: 14,
                outline: "none"
              }}
              onFocus={e => e.currentTarget.style.borderColor = "#1440FF"}
              onBlur={e => e.currentTarget.style.borderColor = "#1C2230"}
            />
            <button
              onClick={handleSendMessage}
              style={{
                background: "#1440FF",
                border: "none",
                borderRadius: 8,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#2050FF"}
              onMouseLeave={e => e.currentTarget.style.background = "#1440FF"}
            >
              <Send size={18} color="#fff" />
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1C2230", padding: "24px", marginTop: 40, textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <img
            src="https://res.cloudinary.com/dm0fdycxx/image/upload/v1775845805/Property_1_Variant6_10_upubxj.png"
            alt="AutoForce Logo"
            style={{ height: 28, width: "auto" }}
          />
        </div>
        <p style={{ fontSize: 12, color: "#9CA3AF" }}>Performance & Resultados • Fundada em 2015</p>
      </footer>
    </div>
  );
}