const SITE = {
  nome: "Rafael PS",
  funcao: "Desenvolvedor de sistemas",
  titulo: "Construo sistemas web simples e bem organizados.",
  intro: `Sou graduado em Análise e Desenvolvimento de Sistemas, com base em JavaScript, Node e outras tecnologias 
          e certificação AWS Cloud Practitioner. Aqui estão meus projetos.`,
  email: "rafael.ps.skt@gmail.com",

  redes: [
    { nome: "GitHub",   tipo: "github",   url: "https://github.com/rafaelps10" },
    { nome: "LinkedIn", tipo: "linkedin", url: "https://www.linkedin.com/in/rafaelpintosantos/" },
    { nome: "E-mail",   tipo: "email",    url: "mailto:rafael.ps.skt@gmail.com" }
  ],

  tecnologias: [
    { nome: "JavaScript", estado: "uso" },
    { nome: "Node",       estado: "uso" },
    { nome: "Express",    estado: "uso" },
    { nome: "PostgreSQL", estado: "uso" },
    { nome: "HTML",       estado: "uso" },
    { nome: "CSS",        estado: "uso" },
    { nome: "AWS",        estado: "uso" },
    { nome: "Terraform",  estado: "aprendendo" }
  ],

  projetos: [
    {
      titulo: "Consulta CEP - Aplicação Web",
      descricao: `Aplicação web para consulta de endereços brasileiros a partir do CEP, com interface intuitiva e integração com uma API externa para obtenção dos dados. 
  O projeto tem como objetivo praticar conceitos de desenvolvimento web, consumo de APIs e comunicação por requisições HTTP.`,
      tags: ["JavaScript", "Node", "Express"],
      demo: "",
      codigo: "https://github.com/rafaelps10/consulta-cep"
    },
    {
      titulo: "CloudDocs",
      descricao: `CloudDocs é uma API REST desenvolvida com Node e Express para gerenciamento de documentos,
                  utilizando PostgreSQL para armazenar metadados e Amazon S3 para armazenamento de arquivos na nuvem.  
                  O projeto implementa autenticação com JWT, proteção de senhas com bcrypt e operações de upload, consulta,  
                  download e exclusão de documentos, aplicando conceitos de desenvolvimento backend, segurança e integração com serviços AWS.`,
      tags: ["JavaScript", "AWS", "PostgreSQL", "Node", "Express"],
      demo: "",
      codigo: "https://github.com/rafaelps10/clouddocs"
    }
  ],

  sobre: [
    `Profissional com formação em Análise e Desenvolvimento de Sistemas e experiência multidisciplinar em áreas técnicas e operacionais. 
    Atualmente estou em transição de carreira, buscando me capacitar para AWS Solutions Architect. Possuo conhecimentos em Javascript, Node, PostgreSQL, HTML5, CSS3 e Express. 
    No presente momento estou na Escola da Nuvem buscando a minha segunda certificação. Aprimorando conhecimentos em Linux, redes de computadores, AWS e afiando a minha lógica de programação. 
    O meu objetivo é me especializar em Cloud Computing, assim enriquecendo o meu conhecimento na área da tecnologia.
    Vivência em ambientes de saúde e laboratoriais, agregando visão sistêmica e trabalho sob pressão. 
    Habilidade para resolver problemas complexos através de soluções tecnológicas inovadoras. 
    Comprometido com aprendizado contínuo e atualização nas melhores práticas de desenvolvimento. Facilidade para trabalhar em equipe multidisciplinar e adaptação a novos desafios. 
    Inglês instrumental para leitura e interpretação de documentações técnicas.
    Busco integrar conhecimentos técnicos com experiências anteriores para entregar soluções eficientes.`
  ],
  fatos: [
    "Certificação AWS Solutions Architect - Associate (Em andamento)",
    "Certificação AWS Cloud Practitioner",
    "Graduação re/Start - Escola da Nuvem",
    "Graduação em Análise e Desenvolvimento de Sistemas",
    "Formação Web Full Stack Developer",
    
  ],
  contato: "Aberto a oportunidades, projetos e conversas. A forma mais rápida de falar comigo é por e-mail."
};

const $ = (id) => document.getElementById(id);
const el = (tag, props = {}, kids = []) => {
  const n = Object.assign(document.createElement(tag), props);
  kids.forEach((k) => n.append(k));
  return n;
};

document.title = SITE.nome + " — Portfólio";
$("brand").textContent = SITE.nome;
$("role").textContent = SITE.funcao;
$("headline").textContent = SITE.titulo;
$("intro").textContent = SITE.intro;
$("contact-text").textContent = SITE.contato;
$("email-btn").href = "mailto:" + SITE.email;
$("footer").textContent = "© " + new Date().getFullYear() + "  Developer by  " + SITE.nome;

/* Ícones das redes (SVG embutido, não precisa de internet) */
const ICONES = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
};

SITE.redes.forEach((r) => {
  const link = el("a", {
    href: r.url,
    title: r.nome,
    target: r.url.startsWith("http") ? "_blank" : "_self",
    rel: "noopener noreferrer"
  });
  link.setAttribute("aria-label", r.nome);
  if (ICONES[r.tipo]) link.innerHTML = ICONES[r.tipo];
  else link.textContent = r.nome; /* sem ícone: mostra o nome */
  $("socials").append(link);
});
SITE.sobre.forEach((p) => $("about").append(el("p", { textContent: p })));
SITE.fatos.forEach((f) => $("facts").append(el("li", { textContent: f })));

/* Seção Tecnologias */
SITE.tecnologias.forEach((t) =>
  $("stack").append(el("span", { className: "chip", textContent: t.nome + (t.estado === "aprendendo" ? " (aprendendo)" : "") }))
);

/* Projetos com filtro por tecnologia */
let ativo = null;

function desenharFiltros() {
  const box = $("filters");
  box.replaceChildren();
  SITE.tecnologias.forEach((t) => {
    const b = el("button", { className: "chip", type: "button", textContent: t.nome });
    b.setAttribute("aria-pressed", String(ativo === t.nome));
    b.addEventListener("click", () => {
      ativo = ativo === t.nome ? null : t.nome;
      desenharFiltros();
      desenharProjetos();
    });
    box.append(b);
  });
}

function desenharProjetos() {
  const box = $("projects");
  box.replaceChildren();
  const lista = SITE.projetos.filter((p) => !ativo || p.tags.includes(ativo));
  if (!lista.length) {
    box.append(el("p", { className: "empty", textContent: "Nenhum projeto com " + ativo + " ainda. Clique no filtro de novo para ver todos." }));
    return;
  }
  lista.forEach((p) => {
    const tags = el("div", { className: "tags" }, p.tags.map((t) => el("span", { className: "tag", textContent: t })));
    const links = el("div", { className: "links" });
    if (p.demo)   links.append(el("a", { href: p.demo,   textContent: "Ver online",  target: "_blank", rel: "noopener noreferrer" }));
    if (p.codigo) links.append(el("a", { href: p.codigo, textContent: "Ver código", target: "_blank", rel: "noopener noreferrer" }));
    box.append(el("article", { className: "project" }, [el("h3", { textContent: p.titulo }), el("p", { textContent: p.descricao }), tags, links]));
  });
}

desenharFiltros();
desenharProjetos();

/* Destaca no menu a seção visível */
const links = [...document.querySelectorAll(".nav a")];
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => obs.observe(s));
