export function handleTab (ev) {
  let activeTab = document.getElementsByClassName("tabs__title--active");
  let activePanel = document.getElementsByClassName("main__panel");
  let inicio = document.getElementById("inicio_panel");
  let exp = document.getElementById("experiencia_panel");
  let proj = document.getElementById("proyectos_panel");
  let contacto = document.getElementById("contacto_panel");
  let clickedTab = ev.currentTarget;

  activeTab[0].classList.add("tabs__title");
  activeTab[0].classList.remove("tabs__title--active");
  clickedTab.classList.add("tabs__title--active");
  clickedTab.classList.remove("tabs__title");

  activePanel[0].classList.add("main__panel--hidden");
  activePanel[0].classList.remove("main__panel");

  if (clickedTab.id === "inicio") {
    inicio.classList.add("main__panel");
    inicio.classList.remove("main__panel--hidden");
  }

  if (clickedTab.id === "experiencia") {
    exp.classList.add("main__panel");
    exp.classList.remove("main__panel--hidden");
  }

  if (clickedTab.id === "proyectos") {
    proj.classList.add("main__panel");
    proj.classList.remove("main__panel--hidden");
  }

  if (clickedTab.id === "contacto") {
    contacto.classList.add("main__panel");
    contacto.classList.remove("main__panel--hidden");
  }
};

export function handleEmail (ev) {
  
  ev.preventDefault();
  let hidden = document.querySelector(".hiddenMail");
  if (hidden) {
    let email = hidden
      .getAttribute("data-email")
      .replace(/ARR/, "@")
      .replace(/PUN/, ".");
    hidden.classList.remove("hiddenMail");
    hidden.innerHTML = email;
    hidden.setAttribute("href", "mailto:" + email);
  }
};

