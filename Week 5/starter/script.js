// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// DOMINIO: Plataforma de Microcréditos
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// Nombre del cliente solicitante
const elementName = "Carlos Andrés Ramírez";

// Estado actual del crédito en el sistema
const elementStatus = "active";

// Monto solicitado en pesos colombianos (valor numérico para clasificar)
const elementValue = 1_200_000;

// Tipo de crédito solicitado
const elementType = "consumo";

// Objeto con información adicional del cliente (puede ser null si no aplica)
const elementInfo = {
  detail: "Primera solicitud de crédito en la plataforma",
  diasMora: 0,
  garantia: "Codeudor"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// Clasifica el crédito en 4 niveles según el monto solicitado
let classification;

if (elementValue >= 3_000_000) {
  classification = "Crédito Alto";
} else if (elementValue >= 1_500_000) {
  classification = "Crédito Medio-Alto";
} else if (elementValue >= 500_000) {
  classification = "Crédito Medio";
} else {
  classification = "Microcrédito Básico";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// Determina si el crédito está activo o inactivo
const statusLabel = elementStatus === "active" ? "✅ Activo" : "❌ Inactivo";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// Asigna una etiqueta descriptiva según el tipo de crédito
let typeLabel;

switch (elementType) {
  case "consumo":
    typeLabel = "Crédito de Consumo";
    break;
  case "vivienda":
    typeLabel = "Crédito de Vivienda";
    break;
  case "empresarial":
    typeLabel = "Crédito Empresarial";
    break;
  case "educativo":
    typeLabel = "Crédito Educativo";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// Muestra el nombre del cliente o un texto por defecto si es null
const displayName = elementName ?? "Sin nombre registrado";

// Muestra el detalle del crédito o un mensaje por defecto si no existe
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// Accede de forma segura a la garantía del crédito
const safeProperty = elementInfo?.garantia ?? "Sin garantía registrada";

// Accede de forma segura a los días en mora
const diasMoraSafe = elementInfo?.diasMora ?? "No disponible";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("   FICHA DE CLASIFICACIÓN DE CRÉDITO");
console.log("=".repeat(40));
console.log(`Nombre:           ${displayName}`);
console.log(`Estado:           ${statusLabel}`);
console.log(`Monto solicitado: $${elementValue.toLocaleString("es-CO")}`);
console.log(`Clasificación:    ${classification}`);
console.log(`Tipo de crédito:  ${typeLabel}`);
console.log(`Detalle:          ${infoDetail}`);
console.log(`Garantía:         ${safeProperty}`);
console.log(`Días en mora:     ${diasMoraSafe}`);
console.log("=".repeat(40));