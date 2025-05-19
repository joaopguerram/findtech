const servicos = [
    { titulo: 'Site Institucional', descricao: 'Desenvolvimento de sites profissionais para empresas.' },
    { titulo: 'Landing Pages', descricao: 'Páginas otimizadas para conversão e campanhas de marketing.' },
    { titulo: 'E-commerce', descricao: 'Lojas virtuais seguras, modernas e responsivas.' },
    { titulo: 'Manutenção e suporte', descricao: 'Acompanhamento mensal para manter seu site atualizado.' }
  ];

  const portfolio = [
    
    { titulo: 'DF Guincho', descricao: 'Site Institucional da empresa DF Guincho.', link: 'https://dfguincho.vercel.app/' },
    { titulo: 'Portifolio Dev Joao Pedro', descricao: 'Site para portifolio pessoal de Desenvolvedor Full Stack.', link: 'https://portifoliojp.vercel.app/' },
    
  ];

  const depoimentos = [
    { nome: 'João Guerra', texto: 'Excelente serviço! Rápido e profissional.' },
    { nome: 'Luciano Machado', texto: 'A FindTech criou o site perfeito para meu negócio.' }
  ];

  const servicosEl = document.getElementById('servicos-lista');
  servicos.forEach(s => {
    const card = `<div class="card"><h3>${s.titulo}</h3><p>${s.descricao}</p></div>`;
    servicosEl.innerHTML += card;
  });

  const portfolioEl = document.getElementById('portfolio-lista');
  portfolio.forEach(p => {
    const item = `<div class="card"><h3>${p.titulo}</h3><p>${p.descricao}</p><a href=${p.link} target="_blank" rel="noopener noreferrer">${p.link}</a></div>`;
    portfolioEl.innerHTML += item;
  });

  const depoimentosEl = document.getElementById('depoimentos-lista');
  depoimentos.forEach(d => {
    const item = `<div class="card"><p>"${d.texto}"</p><strong>- ${d.nome}</strong></div>`;
    depoimentosEl.innerHTML += item;
  });

  const form = document.getElementById("form-contato");
  const contatoSection = document.getElementById("contato");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/machadojp00@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        contatoSection.innerHTML = `
          <div class="mensagem-enviada">
            <h2>Mensagem enviada com sucesso!</h2>
            <p>Obrigado por entrar em contato. Responderemos em breve.</p>
          </div>
        `;
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar o formulário.");
    }
  });