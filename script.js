const container = document.getElementById("container");
const containerDiv = document.getElementById("conatiner-info");
const botaoModo = document.getElementById("theme-icon");

const mudarTema = () => {
    if (container.classList.contains("bg-gray-100")) {
      container.classList.remove("bg-gray-100", "text-gray-900");
      container.classList.add("bg-gray-900", "text-gray-100");
      botaoModo.classList.remove("fa-moon");
      botaoModo.classList.add("fa-sun");
    } else {
      container.classList.remove("bg-gray-900", "text-gray-100");
      container.classList.add("bg-gray-100", "text-gray-900");
      botaoModo.classList.remove("fa-sun");
      botaoModo.classList.add("fa-moon");
      
    }
    

}

