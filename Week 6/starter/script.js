// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Plataforma de Microcréditos
// ============================================
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
// Cada objeto representa un crédito activo en la plataforma.

const credits = [
  { name: "Carlos Andrés Ramírez",  category: "consumo",     value: 1_200_000 },
  { name: "Laura Sofía Herrera",    category: "vivienda",    value: 4_500_000 },
  { name: "Miguel Ángel Torres",    category: "empresarial", value: 3_800_000 },
  { name: "Valentina Ríos Cano",    category: "consumo",     value: 750_000   },
  { name: "Jorge Esteban Morales",  category: "educativo",   value: 2_100_000 },
  { name: "Diana Marcela Ospina",   category: "vivienda",    value: 5_000_000 },
  { name: "Andrés Felipe Suárez",   category: "empresarial", value: 2_900_000 },
  { name: "Natalia Gómez Vargas",   category: "consumo",     value: 500_000   },
];

// Categorías de crédito de la plataforma
const categories = ["consumo", "vivienda", "empresarial", "educativo"];

// Etiqueta del valor numérico
const valueLabel = "monto solicitado";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const credit of credits) {
  lineNumber++;
  console.log(`${lineNumber}. ${credit.name} — ${credit.category} — ${valueLabel}: $${credit.value.toLocaleString("es-CO")}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const credit of credits) {
    if (credit.category === category) count++;
  }

  console.log(`${category}: ${count} crédito(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const credit of credits) {
  totalValue += credit.value;
}

const averageValue = credits.length > 0 ? totalValue / credits.length : 0;

console.log(`Total monto desembolsado: $${totalValue.toLocaleString("es-CO")}`);
console.log(`Promedio por crédito:     $${Math.round(averageValue).toLocaleString("es-CO")}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

let maxCredit = credits[0] ?? null;
let minCredit = credits[0] ?? null;

if (credits.length > 0) {
  for (const credit of credits) {
    if (credit.value > maxCredit.value) maxCredit = credit;
    if (credit.value < minCredit.value) minCredit = credit;
  }

  console.log(`Mayor monto: ${maxCredit?.name} ($${maxCredit?.value.toLocaleString("es-CO")})`);
  console.log(`Menor monto: ${minCredit?.name} ($${minCredit?.value.toLocaleString("es-CO")})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < credits.length; i++) {
  const credit = credits[i];

  const comparison = credit.value >= averageValue
    ? "sobre el promedio"
    : "bajo el promedio";

  console.log(`${i + 1}. ${credit.name} ($${credit.value.toLocaleString("es-CO")}) — ${comparison}`);
}

console.log("");

// ============================================
// SECCIÓN 7: Búsqueda con while — primer crédito en mora
// ============================================
console.log("=== BÚSQUEDA CON WHILE ===");

// Simulación: días en mora por cliente
const creditsWithMora = [
  { name: "Carlos Andrés Ramírez",  diasMora: 0  },
  { name: "Laura Sofía Herrera",    diasMora: 0  },
  { name: "Miguel Ángel Torres",    diasMora: 12 },
  { name: "Valentina Ríos Cano",    diasMora: 0  },
  { name: "Jorge Esteban Morales",  diasMora: 45 },
  { name: "Diana Marcela Ospina",   diasMora: 0  },
  { name: "Andrés Felipe Suárez",   diasMora: 3  },
  { name: "Natalia Gómez Vargas",   diasMora: 0  },
];

let idx = 0;
let primerEnMora = null;

// Recorre la lista hasta encontrar el primer crédito con mora (break)
while (idx < creditsWithMora.length) {
  if (creditsWithMora[idx].diasMora > 0) {
    primerEnMora = creditsWithMora[idx];
    break;
  }
  idx++;
}

if (primerEnMora) {
  console.log(`Primer crédito en mora: ${primerEnMora.name} (${primerEnMora.diasMora} días)`);
} else {
  console.log("No se encontraron créditos en mora.");
}

console.log("");
console.log("=== FIN DEL REPORTE ===");