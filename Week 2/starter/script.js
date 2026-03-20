// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// 🎯 OBJETIVO: Crear una ficha de datos en consola
//    usando variables, tipos y conversiones.
//
// 📋 TU DOMINIO: Plataforma de Microcréditos
//
// ⚠️  POLÍTICA ANTICOPIA: Tu implementación debe ser
//    única y coherente con tu dominio asignado.
//    Implementaciones copiadas serán detectadas.
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "Plataforma de Microcréditos";

// Nombre del crédito ofrecido
const itemName = "Crédito Semilla Emprendedor";

// Tipo de crédito según su propósito
const itemCategory = "Crédito Productivo - Microempresa";

// Monto del crédito en pesos colombianos
const itemQuantity = 1_500_000;

// ¿El crédito está disponible para nuevos solicitantes?
const isItemAvailable = true;

// Approval date not yet assigned (process in progress)
const approvalDate = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:       ${itemName}`);
console.log(`Categoría:    ${itemCategory}`);
console.log(`Monto:        ${itemQuantity}`);
console.log(`Disponible:   ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:         ", typeof itemName);
console.log("typeof itemQuantity:     ", typeof itemQuantity);
console.log("typeof isItemAvailable:  ", typeof isItemAvailable);
console.log("typeof approvalDate:     ", typeof approvalDate);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Convertir el monto (number) a String para mostrarlo con formato de texto
const amountAsText = String(itemQuantity);
console.log("Monto como texto:        ", amountAsText);
console.log("typeof (convertido):     ", typeof amountAsText);

// Convertir disponibilidad a Number (true → 1, false → 0)
const availableAsNumber = Number(isItemAvailable);
console.log("Disponible como número:  ", availableAsNumber);
console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Fecha de aprobación:     ", approvalDate);
console.log("typeof null:             ", typeof approvalDate);   // "object" ← bug histórico de JS
console.log("¿Es null?:               ", approvalDate === null); // true
console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("  ¡Financia tu futuro con JS!");
console.log("===========================");