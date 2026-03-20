// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
// 🎯 OBJETIVO: Construir un generador de mensajes
//    en consola usando métodos de string y
//    template literals.
//
// 📋 DOMINIO: Plataforma de Microcréditos
//
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Nombre de la plataforma de microcréditos
const DOMAIN_NAME = "Plataforma de Microcréditos";

// Nombre del cliente solicitante con espacios intencionales para aplicar trim()
const rawEntityName = "  María Fernanda Ospina  ";

// Tipo de crédito solicitado
const entityCategory = "Microcrédito de Consumo";

// Código único del crédito con prefijo MCR (MiCRocrédito)
const entityCode = "MCR-2025-001";

// Descripción del crédito con palabras clave del dominio
const entityDescription = "Crédito aprobado para capital de trabajo con tasa preferencial y seguro de vida incluido.";

// Monto aprobado del microcrédito en pesos colombianos
const mainValue = 800_000;

// Estado actual del crédito
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// Eliminar espacios al inicio y al final del nombre del cliente
const entityName = rawEntityName.trim();

// Nombre en mayúsculas para el encabezado de la ficha
const entityNameUpper = entityName.toUpperCase();

// Nombre en minúsculas para referencias internas del sistema
const entityNameLower = entityName.toLowerCase();

// Extraer prefijo del código (primeras 3 letras: "MCR") para validaciones
const codePrefix = entityCode.slice(0, 3);

// Reemplazar guiones por espacios en el código para el mensaje de notificación
const codeFriendly = entityCode.replaceAll("-", " ");

// Separar el código en partes usando split para mostrar año y número
const codeParts = entityCode.split("-");
const codeYear = codeParts[1];      // Año del crédito
const codeNumber = codeParts[2];    // Número consecutivo


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// Verificar que el código comience con el prefijo correcto "MCR"
const hasValidPrefix = entityCode.startsWith(codePrefix);

// Verificar que la descripción mencione la palabra "Crédito" (relevancia del dominio)
const descriptionIsRelevant = entityDescription.includes("Crédito");

// Verificar que el código termine con el consecutivo "001"
const hasValidSuffix = entityCode.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

// Ficha completa del crédito con todos los datos transformados
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE CRÉDITO
${separator}
Cliente:     ${entityNameUpper}
Referencia:  ${entityNameLower}
Tipo:        ${entityCategory}
Código:      ${entityCode}
  Prefijo:   ${codePrefix}
  Año:       ${codeYear}
  Número:    ${codeNumber}
Monto:       $${mainValue.toLocaleString("es-CO")}
Estado:      ${isActive ? "✅ Activo" : "❌ Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
console.log(`¿Código empieza con '${codePrefix}'?:          ${hasValidPrefix}`);
console.log(`¿Descripción menciona 'Crédito'?:             ${descriptionIsRelevant}`);
console.log(`¿Código termina con consecutivo '001'?:       ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

// Mensaje corto de una línea con el nombre limpio y el código amigable
const notification = `📢 Nuevo crédito registrado: ${entityName} — Ref. ${codeFriendly}`;
console.log(notification);
console.log("");
