// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Plataforma de Microcréditos
// ============================================

// ---- CONFIGURACIÓN DEL DOMINIO ----
const DOMAIN_NAME = "Cartera de Microcréditos";
const VALUE_LABEL = "créditos";

// ============================================
// 1. ARRAY INICIAL — Cartera de créditos
// ============================================

// Cada objeto representa un crédito activo en la plataforma.
// Propiedades: id, name (cliente), monto, plazo, categoria, active
const items = [
  { id: 1, name: "Carlos Andrés Ramírez",  monto: 1_200_000, plazo: 6,  categoria: "consumo",     active: true  },
  { id: 2, name: "Laura Sofía Herrera",    monto: 4_500_000, plazo: 12, categoria: "vivienda",    active: true  },
  { id: 3, name: "Miguel Ángel Torres",    monto: 3_800_000, plazo: 9,  categoria: "empresarial", active: false },
  { id: 4, name: "Valentina Ríos Cano",    monto: 750_000,   plazo: 3,  categoria: "consumo",     active: true  },
  { id: 5, name: "Jorge Esteban Morales",  monto: 2_100_000, plazo: 12, categoria: "educativo",   active: true  },
  { id: 6, name: "Diana Marcela Ospina",   monto: 5_000_000, plazo: 24, categoria: "vivienda",    active: false },
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo crédito a la cartera
 * @param {Object} newCredit - Crédito a agregar
 */
const addItem = (newCredit) => {
  items.push(newCredit);
  console.log(`✅ Crédito agregado: ${newCredit.name} — $${newCredit.monto.toLocaleString("es-CO")}`);
};

/**
 * Elimina el último crédito de la cartera
 * @returns {Object} El crédito eliminado
 */
const removeLastItem = () => {
  const removed = items.pop();
  console.log(`🗑️  Crédito eliminado (último): ${removed.name}`);
  return removed;
};

/**
 * Agrega un crédito prioritario (urgente) al inicio de la cartera
 * @param {Object} priorityCredit - Crédito a agregar con prioridad
 */
const addPriorityItem = (priorityCredit) => {
  items.unshift(priorityCredit);
  console.log(`⚡ Crédito prioritario agregado al inicio: ${priorityCredit.name}`);
};

/**
 * Elimina un crédito por su posición en la cartera
 * @param {number} index - Posición del crédito a eliminar
 */
const removeByIndex = (index) => {
  const [removed] = items.splice(index, 1);
  console.log(`🗑️  Crédito eliminado en posición ${index}: ${removed.name}`);
};

/**
 * Obtiene todos los créditos activos de la cartera
 * @returns {Array} Array de créditos con active === true
 */
const getActiveItems = () => {
  return items.filter((credit) => credit.active === true);
};

/**
 * Busca un crédito por el nombre del cliente
 * @param {string} name - Nombre del cliente a buscar
 * @returns {Object|undefined} El crédito encontrado o undefined
 */
const findByName = (name) => {
  return items.find((credit) => credit.name === name);
};

/**
 * Formatea un crédito para mostrar en el reporte
 * @param {Object} credit - Crédito a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (credit) =>
  `[${credit.id}] ${credit.name} — $${credit.monto.toLocaleString("es-CO")} — ${credit.plazo} meses — ${credit.categoria} — ${credit.active ? "✅ Activo" : "❌ Inactivo"}`;

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(55)}`);
console.log(`💳 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(55)}\n`);

// --- Estado inicial ---
console.log(`📋 Cartera inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((credit) => {
  console.log(`  ${formatItem(credit)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// push — agregar un nuevo crédito al final
addItem({
  id: 7, name: "Andrés Felipe Suárez",
  monto: 2_900_000, plazo: 9, categoria: "empresarial", active: true
});

// unshift — agregar un crédito urgente al inicio de la cartera
addPriorityItem({
  id: 0, name: "Natalia Gómez Vargas",
  monto: 500_000, plazo: 3, categoria: "consumo", active: true
});

// splice — eliminar el crédito en posición 3 (Torres, en mora)
removeByIndex(3);

// pop — eliminar el último crédito de la cartera
removeLastItem();

console.log("\n--- Cartera después de mutaciones ---\n");
items.forEach((credit) => {
  console.log(`  ${formatItem(credit)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// find — buscar crédito por nombre del cliente
const creditoEncontrado = findByName("Laura Sofía Herrera");
if (creditoEncontrado) {
  console.log(`🔍 Crédito encontrado: ${formatItem(creditoEncontrado)}`);
} else {
  console.log("🔍 Crédito no encontrado.");
}

// filter — obtener todos los créditos activos
const activeCredits = getActiveItems();
console.log(`\n✅ Créditos activos (${activeCredits.length}):`);
activeCredits.forEach((c) => console.log(`  - ${c.name}`));

// spread — snapshot inmutable de la cartera actual
const snapshot = [...items, {
  id: 99, name: "Temporal de Prueba",
  monto: 100_000, plazo: 1, categoria: "consumo", active: false
}];
console.log(`\n📸 Snapshot (sin modificar items): ${snapshot.length} elementos — items sigue con ${items.length}`);

console.log("\n--- Transformación con map ---\n");

// map — lista de nombres de clientes
const nombres = items.map((c) => c.name);
console.log("👥 Clientes en cartera:");
nombres.forEach((n) => console.log(`  - ${n}`));

// map — cuota mensual estimada por crédito (monto / plazo)
const cuotas = items.map((c) => ({
  cliente: c.name,
  cuotaMensual: Math.round(c.monto / c.plazo)
}));
console.log("\n💰 Cuotas mensuales estimadas:");
cuotas.forEach((c) => console.log(`  ${c.cliente}: $${c.cuotaMensual.toLocaleString("es-CO")}/mes`));

console.log("\n--- Resumen final ---\n");
const activeCount = getActiveItems().length;
const totalCartera = items.reduce((sum, c) => sum + c.monto, 0);
console.log(`Total en cartera:  ${items.length} ${VALUE_LABEL}`);
console.log(`Activos:           ${activeCount} | Inactivos: ${items.length - activeCount}`);
console.log(`Monto total:       $${totalCartera.toLocaleString("es-CO")} COP`);

console.log(`\n${"=".repeat(55)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(55)}\n`);