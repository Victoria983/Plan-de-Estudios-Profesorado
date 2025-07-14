const materias = [
  { nombre: "Práctica de la Comunicación Oral y Escrita", ciclo: 1 },
  { nombre: "Introducción a los Estudios Literarios", ciclo: 1 },
  // ... (agregá todas las materias igual que antes)
  { nombre: "Práctica Docente", ciclo: 2 }
];

const container = document.getElementById("malla-container");

materias.forEach(materia => {
  const div = document.createElement("div");
  div.className = "materia";
  div.textContent = materia.nombre + " (Ciclo " + materia.ciclo + ")";

  // Estado de materia marcada
  div.onclick = () => {
    div.classList.toggle("aprobada");
  };

  container.appendChild(div);
});
