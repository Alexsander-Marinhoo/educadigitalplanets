export const SCHOOL_INFO = {
  name: "Educa Digital Planets",
  slogan: "20 anos de tradição em ensino profissionalizante",
  phoneFormatted: "(11) 98340-6358",
  phoneRaw: "5511983406358",
  whatsappNumber: "5511983406358",
  facebookUrl: "https://www.facebook.com/educadigitalplanets",
  address: "Avenida Professor Alípio de Barros, 963",
  cityStateZip: "São Paulo - SP • CEP 08180-000",
  fullAddress: "Av. Professor Alípio de Barros, 963 - São Paulo, SP - CEP 08180-000",
  openingHours: "Segunda a Sexta: 08h às 21h | Sábados: 08h às 16h",
  yearsOfTradition: "20",
  studentsGraduated: "+15.000",
  satisfactionRate: "98%",
}

export function createWhatsAppLink(message = "") {
  const defaultMsg = "Olá! Gostaria de mais informações sobre as matrículas na Educa Digital Planets."
  const text = message || defaultMsg
  return `https://wa.me/${SCHOOL_INFO.phoneRaw}?text=${encodeURIComponent(text)}`
}

export const TARGET_AUDIENCES = [
  {
    id: "criancas",
    badge: "Kids & Teens (7 a 14 anos)",
    title: "Crianças e Pré-Adolescentes",
    highlight: "Base sólida, raciocínio lógico e disciplina desde a infância.",
    description: "Cursos desenvolvidos com didática dinâmica e lúdica. Preparamos as crianças para o mundo digital com segurança, noções de inglês, informática e reforço das matérias escolares.",
    benefits: [
      "Reforço escolar focado em matemática e português",
      "Primeiros passos no Inglês com conversação natural",
      "Informática educativa com foco em raciocínio lógico",
      "Desenvolvimento de foco, disciplina e concentração",
    ],
    ctaText: "Consultar Turmas Infantis",
    whatsappMsg: "Olá! Gostaria de informações sobre turmas para crianças/infantis na Educa Digital Planets.",
    color: "border-brand-royal/30",
  },
  {
    id: "jovens",
    badge: "Jovens (15 a 24 anos)",
    title: "Jovens e Ensino Médio",
    highlight: "Preparação prática e direta para o primeiro emprego e mercado de trabalho.",
    description: "Formação completa com ferramentas que as empresas realmente exigem: Pacote Office corporativo, comunicação assertiva, técnicas de vendas e inglês para entrevistas.",
    benefits: [
      "Pacote Office avançado (Excel, Word e PowerPoint)",
      "Inglês focado em conversação e mercado corporativo",
      "Comunicação, liderança e postura profissional",
      "Certificado reconhecido para enriquecer o currículo",
    ],
    ctaText: "Garantir Vaga para Jovens",
    whatsappMsg: "Olá! Gostaria de informações sobre cursos de capacitação para jovens na Educa Digital Planets.",
    color: "border-brand-royal/30",
    featured: true,
  },
  {
    id: "adultos",
    badge: "Adultos & Profissionais",
    title: "Adultos e Profissionais",
    highlight: "Atualização rápida, recolocação profissional ou promoção de carreira.",
    description: "Metodologia prática e direta ao ponto, sem enrolação. Ideal para quem precisa dominar ferramentas digitais essenciais, aprimorar a oratória ou destravar o inglês.",
    benefits: [
      "Horários flexíveis (incluindo noites e sábados)",
      "Aulas 100% práticas no computador individual",
      "Professores pacientes e com suporte presencial contínuo",
      "Cursos rápidos com alta aplicabilidade no dia a dia",
    ],
    ctaText: "Consultar Horários Adultos",
    whatsappMsg: "Olá! Gostaria de saber os horários e cursos para adultos na Educa Digital Planets.",
    color: "border-brand-royal/30",
  },
]

export const COURSES = [
  {
    id: "ingles",
    title: "Inglês Descontraído & Conversação",
    subtitle: "Aulas presenciais para crianças e jovens dos 7 aos 17 anos",
    duration: "Aulas Presenciais | 7 aos 17 anos",
    badge: "Inglês Descontraído",
    description: "Método dinâmico, leve e sem medo de errar! Desenvolva conversação natural, vocabulário e pronúncia em turmas niveladas por idade.",
    modules: [
      "Conversação prática e descontraída",
      "Vocabulário do dia a dia e pronúncia correta",
      "Simulações reais, jogos e atividades interativas",
      "Material didático moderno e suporte presencial",
    ],
    whatsappMsg: "Olá! Gostaria de saber mais sobre as turmas presenciais de Inglês Descontraído na Educa Digital Planets!",
    cta: "Garantir Vaga no WhatsApp",
  },
  {
    id: "informatica",
    title: "Informática Profissionalizante",
    subtitle: "Domine as ferramentas essenciais para o mercado e a escola",
    duration: "Presencial | 1 Computador por Aluno",
    badge: "Cursos Profissionalizantes",
    description: "Aprenda na prática: Windows, Pacote Office (Word, Excel do básico ao avançado, PowerPoint), digitação e rotinas do dia a dia no computador.",
    modules: [
      "Windows e organização de arquivos",
      "Excel Prático: fórmulas, planilhas e relatórios",
      "Word corporativo e apresentações em PowerPoint",
      "Digitação rápida, e-mails e produtividade digital",
    ],
    whatsappMsg: "Olá! Gostaria de saber mais sobre o curso de Informática Profissionalizante na Educa Digital Planets!",
    cta: "Saber Mais no WhatsApp",
  },
  {
    id: "comunicacao",
    title: "Curso de Comunicação: Falar Bem Muda Tudo",
    subtitle: "Seu filho tem muito a dizer — ele só precisa do espaço certo para descobrir a própria voz",
    duration: "Especial para Jovens e Adolescentes",
    badge: "Falar Bem Muda Tudo",
    description: "Criado especialmente para jovens e alunos desenvolverem oratória, desinibição, postura, técnicas de apresentação e segurança para falar em público.",
    modules: [
      "Oratória, desinibição e autocontrole",
      "Comunicação assertiva e postura profissional",
      "Técnicas de apresentação em público e trabalhos escolares",
      "Desenvolvimento de liderança e autoconfiança",
    ],
    whatsappMsg: "Olá! Gostaria de saber mais sobre o Curso de Comunicação para Jovens (Falar Bem Muda Tudo) na Educa Digital Planets!",
    cta: "Consultar Turmas no WhatsApp",
  },
  {
    id: "inclusiva",
    title: "Educação Inclusiva • Alunos com TEA",
    subtitle: "Atendimento acolhedor e adaptado em Informática e Inglês",
    duration: "Acompanhamento Paciente & Especializado",
    badge: "Educação Inclusiva",
    description: "Estrutura e metodologia preparadas com carinho e paciência para alunos com Transtorno do Espectro Autista (TEA) nos cursos de Informática e Inglês.",
    modules: [
      "Curso de Informática adaptado ao ritmo do aluno",
      "Curso de Inglês interativo e focado no estímulo",
      "Professores acolhedores com atendimento individualizado",
      "Ambiente seguro e respeitoso para desenvolvimento pleno",
    ],
    whatsappMsg: "Olá! Gostaria de informações sobre os cursos de Educação Inclusiva para Alunos com TEA na Educa Digital Planets.",
    cta: "Falar com Coordenação Pedagógica",
  },
  {
    id: "reforco",
    title: "Reforço Escolar Especializado",
    subtitle: "Acompanhamento pedagógico para Ensino Fundamental e Médio",
    duration: "Acompanhamento Contínuo",
    badge: "Suporte Individual",
    description: "Apoio individualizado para sanar dúvidas, fixar matérias escolares, realizar tarefas e preparar o aluno para provas, melhorando notas e autoconfiança.",
    modules: [
      "Matemática, Português, Ciências e Redação",
      "Técnicas de estudo e organização escolar",
      "Resolução de listas de exercícios e provas",
      "Atendimento paciente e focado nas dificuldades do aluno",
    ],
    whatsappMsg: "Olá! Gostaria de saber mais sobre o Reforço Escolar presencial na Educa Digital Planets!",
    cta: "Saber Mais no WhatsApp",
  },
]

export const DIFFERENTIALS = [
  {
    number: "01",
    title: "20 Anos de Tradição",
    description: "Duas décadas formando milhares de alunos na região. Nossa história é a maior garantia de credibilidade, compromisso e seriedade com o seu aprendizado.",
  },
  {
    number: "02",
    title: "Aulas 100% Presenciais",
    description: "Laboratórios estruturados com 1 computador por aluno, contato direto com o professor para tirar dúvidas na hora e ambiente focado nos estudos.",
  },
  {
    number: "03",
    title: "Material Didático Atualizado",
    description: "Apostilas e conteúdos revisados constantemente para refletir as necessidades reais do mercado de trabalho e as atualizações tecnológicas.",
  },
  {
    number: "04",
    title: "Professores Qualificados",
    description: "Equipe pedagógica dedicada, com experiência prática e didática humanizada para acompanhar a evolução de cada estudante passo a passo.",
  },
]

export const REAL_PHOTOS = [
  {
    title: "Laboratório de Informática",
    description: "Máquinas modernas com computadores individuais para prática contínua.",
    tag: "Estrutura",
    image: "/modelo/eb306c8052d895ffb5421f20a4070bc3.jpg",
  },
  {
    title: "Salas de Aulas Práticas",
    description: "Ambientes climatizados e confortáveis preparados para turmas reduzidas.",
    tag: "Conforto",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Acompanhamento Individual",
    description: "Professores presentes tirando dúvidas de cada aluno durante os exercícios.",
    tag: "Metodologia",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Turmas Interativas",
    description: "Dinâmicas em grupo para desenvolvimento de conversação e liderança.",
    tag: "Ambiente",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
]

export const TESTIMONIALS = [
  {
    name: "Mariana Souza",
    role: "Ex-aluna de Informática e Inglês",
    text: "Fiz os cursos na Educa Digital Planets e consegui meu primeiro emprego como assistente administrativa em menos de 2 meses após concluir o módulo de Excel e rotinas corporativas. Os professores são muito pacientes!",
  },
  {
    name: "Carlos Eduardo Mendes",
    role: "Pai de aluno de Reforço e Informática Kids",
    text: "A escola tem uma estrutura muito séria e acolhedora. Meu filho melhorou muito as notas escolares e aprendeu a usar o computador com responsabilidade. Recomendo de olhos fechados!",
  },
  {
    name: "Juliana Ribeiro",
    role: "Aluna de Comunicação & Oratória",
    text: "Tinha muita vergonha de falar em reuniões. O curso presencial me destravou totalmente! O atendimento e a dedicação da equipe de 20 anos de tradição fazem toda a diferença.",
  },
]

export const FAQ_ITEMS = [
  {
    question: "Como funciona o processo de matrícula?",
    answer: "É muito simples e rápido! Você clica no botão do WhatsApp, conversa com um de nossos consultores pedagógicos, agenda uma visita para conhecer a escola e garante sua vaga na turma desejada.",
  },
  {
    question: "Os cursos são 100% presenciais?",
    answer: "Sim! Todos os nossos cursos acontecem de forma 100% presencial em nossa sede, com laboratórios modernos, 1 computador por aluno e acompanhamento direto com o instrutor em sala de aula.",
  },
  {
    question: "Qual a idade mínima para começar?",
    answer: "Temos opções de turmas para crianças a partir de 7 anos (Kids), programas específicos para adolescentes/jovens e cursos sob medida para adultos e idosos.",
  },
  {
    question: "Recebo certificado ao concluir o curso?",
    answer: "Sim! Ao concluir seu curso presencial com frequência e aprovação nas atividades práticas, você recebe um Certificado de Conclusão válido em todo o território nacional para enriquecer seu currículo.",
  },
  {
    question: "Quais são os horários disponíveis?",
    answer: "Oferecemos flexibilidade de horários nos períodos da Manhã, Tarde, Noite e turmas especiais aos Sábados para atender a sua rotina.",
  },
]

