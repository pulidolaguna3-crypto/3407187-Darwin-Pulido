// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Plataforma de Microcréditos
// ============================================

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// Constantes globales de la plataforma
const DOMAIN_NAME    = "Plataforma de Microcréditos";
const VALUE_LABEL    = "monto";
const CURRENCY       = "COP";
const TASA_MENSUAL   = 0.025; // tasa de interés mensual del 2.5%
const COMISION_FIJA  = 15_000; // comisión de apertura en pesos

// Array de créditos activos en la plataforma
const credits = [
  { id: 1, name: "Carlos Andrés Ramírez",  category: "consumo",     value: 1_200_000, active: true,  plazo: 6  },
  { id: 2, name: "Laura Sofía Herrera",    category: "vivienda",    value: 4_500_000, active: true,  plazo: 12 },
  { id: 3, name: "Miguel Ángel Torres",    category: "empresarial", value: 3_800_000, active: false, plazo: 9  },
  { id: 4, name: "Valentina Ríos Cano",    category: "consumo",     value: 750_000,   active: true,  plazo: 3  },
  { id: 5, name: "Jorge Esteban Morales",  category: "educativo",   value: 2_100_000, active: true,  plazo: 12 },
  { id: 6, name: "Diana Marcela Ospina",   category: "vivienda",    value: 5_000_000, active: false, plazo: 24 },
  { id: 7, name: "Andrés Felipe Suárez",   category: "empresarial", value: 2_900_000, active: true,  plazo: 9  },
];

// ============================================
// SECCIÓN 2: Función de formato (arrow function)
// ============================================

// Recibe un crédito y devuelve un string formateado para mostrar en pantalla.
// Usa template literals con las propiedades relevantes del crédito.
const formatCredit = (credit) =>
  `💳 ${credit.name} [${credit.category}] — $${credit.value.toLocaleString("es-CO")} — ${credit.plazo} meses — ${credit.active ? "✅ Activo" : "❌ Inactivo"}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula el costo total de un crédito: capital + intereses + comisión.
// Es una función pura: mismos argumentos → siempre el mismo resultado.
const calculateCreditCost = (monto, plazoMeses, tasaMensual = TASA_MENSUAL, comision = COMISION_FIJA) => {
  const interesTotal = monto * tasaMensual * plazoMeses;
  const costoTotal   = monto + interesTotal + comision;
  return Math.round(costoTotal);
};

// Calcula la cuota mensual que debe pagar el cliente.
// También es una función pura que depende solo de sus parámetros.
const calculateMonthlyFee = (monto, plazoMeses, tasaMensual = TASA_MENSUAL) => {
  const costoTotal = monto + monto * tasaMensual * plazoMeses;
  return Math.round(costoTotal / plazoMeses);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Verifica si un crédito está activo en el sistema.
// Devuelve true si el crédito puede seguir siendo procesado.
const isActive = (credit) => credit.active === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// Formatea un monto en pesos colombianos con etiqueta y moneda por defecto.
// Si no se pasa moneda, usa COP. Si no se pasa etiqueta, usa VALUE_LABEL.
const formatMonto = (monto, label = VALUE_LABEL, moneda = CURRENCY) =>
  `${label}: $${monto.toLocaleString("es-CO")} ${moneda}`;

// Genera una ficha resumida de un crédito con valores calculados.
// El parámetro mostrarCuota es false por defecto para resúmenes rápidos.
const generateCreditSummary = (credit, mostrarCuota = false) => {
  const costoTotal = calculateCreditCost(credit.value, credit.plazo);
  const cuota      = calculateMonthlyFee(credit.value, credit.plazo);
  const estado     = isActive(credit) ? "Activo" : "Inactivo";

  let summary  = `  Cliente:      ${credit.name}\n`;
      summary += `  Categoría:    ${credit.category}\n`;
      summary += `  Monto:        $${credit.value.toLocaleString("es-CO")}\n`;
      summary += `  Costo total:  $${costoTotal.toLocaleString("es-CO")}\n`;
      summary += `  Estado:       ${estado}`;

  // Solo agrega la cuota si se solicita explícitamente
  if (mostrarCuota) {
    summary += `\n  Cuota/mes:    $${cuota.toLocaleString("es-CO")}`;
  }

  return summary;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(48)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(48)}`);

// --- Listado usando formatCredit como callback ---
console.log("\n📋 Listado de créditos:");
let lineNumber = 1;
for (const credit of credits) {
  console.log(`  ${lineNumber}. ${formatCredit(credit)}`);
  lineNumber++;
}

// --- Conteo de créditos activos usando isActive ---
let activeCount = 0;
for (const credit of credits) {
  if (isActive(credit)) activeCount++;
}
console.log(`\n✅ Créditos activos: ${activeCount} / ${credits.length}`);

// --- Cálculo del total desembolsado y costo de cartera ---
let totalDesembolsado = 0;
let totalCostoCartera = 0;

for (const credit of credits) {
  totalDesembolsado += credit.value;
  totalCostoCartera += calculateCreditCost(credit.value, credit.plazo);
}

console.log(`\n📊 Estadísticas:`);
console.log(`  ${formatMonto(totalDesembolsado, "Total desembolsado")}`);
console.log(`  ${formatMonto(totalCostoCartera, "Costo total cartera")}`);

// --- Ficha detallada del crédito de mayor monto con cuota ---
const creditoMayor = credits.reduce((max, c) => c.value > max.value ? c : max, credits[0]);
console.log(`\n🔍 Crédito de mayor monto:`);
console.log(generateCreditSummary(creditoMayor, true));

console.log(`\n${"═".repeat(48)}\n`);