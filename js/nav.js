const btnMobile = document.querySelector(".btn-mobile");

/*Criamos a função que irá mapear o nosso BTN para executar a 
função abrir e fechar o nosso MENU NAVBAR
Adicionamos uma classe dinâmica chama ACTIVE, para verificar,
se está ou não ativado o nosso BTN..
Usamos a função reservada TOGGLE, que simplesmente adiciona uma
classe caso ela não exista, e que remova a classe caso ela exista..
e.currentTarget.setAttribute('aria-expanded', active) -> setando o
atributo aria-expanded e se contem a class active setada dinâmicamente, 
para o usuário que tenha problemas visuáis conseguir identificar com o 
leitor de tela que essa area esta expandida, e o seu conteudo..
*/

btnMobile.addEventListener("click", (e) => {
  const nav = document.querySelector(".nav-head");
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  e.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    e.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    e.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
});

btnMobile.addEventListener("touchstart", (e) => {
  const nav = document.querySelector(".nav-head");
  nav.classList.toggle("active");

  if (e.type === "touchstart") {
    e.preventDefault();
  }
});