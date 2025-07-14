const materias = [
  { nombre: "Práctica de la Comunicación Oral y Escrita", ciclo: 1 },
  { nombre: "Introducción a los Estudios Literarios", ciclo: 1 },
  { nombre: "Teoría Literaria I", ciclo: 1 },
  { nombre: "Literatura Griega y Latina", ciclo: 1 },
  { nombre: "Literatura Hispanoamericana I", ciclo: 1 },
  { nombre: "Literatura Española I", ciclo: 1 },
  { nombre: "Lingüística General", ciclo: 1 },
  { nombre: "Gramática del Español", ciclo: 1 },
  { nombre: "Latín I", ciclo: 1 },
  { nombre: "Historia de la Lengua Española", ciclo: 1 },
  { nombre: "Semiótica General", ciclo: 1 },
  { nombre: "Optativa 1 (Formación general)", ciclo: 1 },

  { nombre: "Literatura Argentina I", ciclo: 2 },
  { nombre: "Literatura Española II", ciclo: 2 },
  { nombre: "Literatura Francesa e Italiana", ciclo: 2 },
  { nombre: "Teoría Literaria II", ciclo: 2 },
  { nombre: "Lingüística Textual", ciclo: 2 },
  { nombre: "Gramática Teórica", ciclo: 2 },
  { nombre: "Pragmática", ciclo: 2 },
  { nombre: "Problemática de la Literatura y las Artes Actuales", ciclo: 2 },
  { nombre: "Optativa por área 1", ciclo: 2 },
  { nombre: "Optativa 2 (Formación general)", ciclo: 2 },
  { nombre: "Psicolingüística y Adquisición del Lenguaje", ciclo: 2 },
  { nombre: "Psicología de la Educación", ciclo: 2 },
  { nombre: "Sociología de la Educación", ciclo: 2 },
  { nombre: "Política Educativa y Organización Escolar", ciclo: 2 },
  { nombre: "Didáctica General", ciclo: 2 },
  { nombre: "Didáctica de la Lengua y la Literatura", ciclo: 2 },
  { nombre: "Optativa 3 (Formación Docente)", ciclo: 2 },
  { nombre: "Seminario", ciclo: 2 },
  { nombre: "Práctica Docente", ciclo: 2 }
];

const container = document.getElementById("malla-container");

materias.forEach(materia => {
  const div = document.createElement("div");
  div.className = "materia";
  div.textContent = materia.nombre + " (Ciclo " + materia.ciclo + ")";
  div.onclick = () => {
    alert("Materia: " + materia.nombre + "\nCiclo: " + materia.ciclo);
  };
  container.appendChild(div);
});