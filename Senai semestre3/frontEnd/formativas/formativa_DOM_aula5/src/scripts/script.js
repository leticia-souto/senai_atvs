
const nomeUsuario = document.querySelector("#nome-usuario");


nomeUsuario.textContent = "Letícia Souto";


const fotoPerfil = document.querySelector("#foto-perfil");


fotoPerfil.src = "src/images/sem_fotoPerfil.jpg"; 
fotoPerfil.alt = "Foto de perfil do usuário";


const containerPerfil = document.querySelector("#container-perfil");


containerPerfil.style.backgroundColor = "#e3f2fd"; 


const badgeStatus = document.querySelector("#badge-status");

badgeStatus.classList.add("online"); 
badgeStatus.textContent = "Status: Ativo";



const skills = document.querySelectorAll(".skill");

console.log("Total de skills:", skills.length);