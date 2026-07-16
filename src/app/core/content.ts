/**
 * ============================================================
 *  CONTEÚDO DO SITE
 *  Este é o único arquivo que você provavelmente precisa editar
 *  para colocar seus dados reais. Troque os textos abaixo.
 * ============================================================
 */

export interface Servico {
  titulo: string;
  descricao: string;
}

export interface Publico {
  titulo: string;
  descricao: string;
}

export const siteContent = {
  advogado: {
    nome: "Jessica Atadaine",
    tratamento: "Dra.", // ou 'Dr.'
    iniciais: "AR", // usado no selo/logo do cabeçalho
    oab: "OAB/SP 000.000",
    areaPrincipal: "Direito de Família e Sucessões",
    cidade: "Sorocaba/SP",
    atendeOnline: true,
    fotoUrl: "", // coloque a URL/caminho da sua foto aqui (ex: 'assets/foto.jpg')
  },

  hero: {
    titulo: "Orientação jurídica séria, próxima e sob medida.",
    subtitulo:
      "Advocacia dedicada a pessoas físicas em Direito de Família e Sucessões, com atendimento presencial em Sorocaba/SP e online para todo o Brasil.",
  },

  contato: {
    whatsapp: "5511999999999", // DDI+DDD+número, só dígitos
    whatsappMensagem: "Olá! Gostaria de agendar uma reunião.",
    email: "contato@seudominio.com.br",
    telefone: "(11) 99999-9999",
    endereco: "Rua Exemplo, 123 — Sala 45, Centro, Sorocaba/SP",
  },

  redesSociais: {
    instagram: "https://instagram.com/seuusuario",
    linkedin: "https://linkedin.com/in/seuusuario",
  },

  sobre: {
    texto: `Atuo há mais de 10 anos no Direito de Família e Sucessões, ajudando
    pessoas a atravessar momentos delicados — divórcios, partilhas, inventários
    e planejamento sucessório — com clareza, agilidade e cuidado. Acredito que
    um bom acompanhamento jurídico começa por ouvir com atenção antes de
    qualquer petição.`,
    anosExperiencia: 10,
  },

  quandoContratar: {
    titulo: "Quando procurar um advogado?",
    texto: `Muita gente só busca ajuda jurídica quando o problema já aconteceu.
    Mas em situações como separação, herança ou elaboração de um testamento,
    uma orientação preventiva evita desgastes, perdas financeiras e conflitos
    familiares maiores no futuro.`,
  },

  servicos: [
    {
      titulo: "Divórcio e Separação",
      descricao:
        "Condução de divórcios consensuais e litigiosos, acordos de guarda, pensão e partilha de bens.",
    },
    {
      titulo: "Inventário e Partilha",
      descricao:
        "Inventários judiciais e extrajudiciais, com foco em agilidade e redução de desgaste entre herdeiros.",
    },
    {
      titulo: "Planejamento Sucessório",
      descricao:
        "Testamentos, doações e estruturação patrimonial para proteger sua família e evitar litígios futuros.",
    },
    {
      titulo: "Guarda e Pensão Alimentícia",
      descricao:
        "Ações de guarda, regulamentação de visitas e revisão de pensão alimentícia.",
    },
    {
      titulo: "União Estável",
      descricao:
        "Reconhecimento, contratos e dissolução de união estável, com segurança jurídica para ambas as partes.",
    },
    {
      titulo: "Consultoria Jurídica Preventiva",
      descricao:
        "Orientação individual para decisões familiares e patrimoniais antes que se tornem um problema.",
    },
  ] as Servico[],

  publico: [
    {
      titulo: "Você",
      descricao:
        "Busca entender seus direitos antes de tomar uma decisão importante para sua vida ou sua família.",
    },
    {
      titulo: "Famílias",
      descricao:
        "Precisam resolver questões de guarda, pensão ou partilha com equilíbrio entre as partes.",
    },
    {
      titulo: "Herdeiros",
      descricao:
        "Estão diante de um inventário e querem conduzi-lo com agilidade e o mínimo de desgaste.",
    },
  ] as Publico[],
};
