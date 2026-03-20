/*
 * script.js — Ficha de Presentación de Dominio
 *
 * Semana 1: ¿Qué es programar? Mi primer JavaScript
 * Bootcamp JavaScript ES2023
 *
 * ============================================
 * POLÍTICA ANTICOPIA
 * ============================================
 * Cada aprendiz trabaja sobre un DOMINIO ÚNICO asignado por el instructor.
 * Adapta TODOS los TODOs a tu dominio específico.
 * Copiar la implementación de otro compañero resulta en calificación de cero.
 *
 * INSTRUCCIONES:
 * 1. Confirma con tu instructor cuál es tu dominio asignado
 * 2. Reemplaza cada [PLACEHOLDER] con la información de TU dominio
 * 3. Completa cada TODO adaptado a tu contexto
 * 4. Ejecuta con: node starter/script.js
 *
 * NOTA SOBRE LOS EJEMPLOS:
 * Los comentarios de ayuda usan "Planetario" como dominio de ejemplo
 * porque NO es un dominio asignable. No copies esos valores —
 * crea los tuyos basados en tu dominio asignado.
 */

// ============================================
// ENCABEZADO — identifica el dominio y la entidad
// ============================================

console.log('=========================================');
console.log('  PLATAFORMA DE MICROCRÉDITOS - FICHA #16');
console.log('=========================================');
console.log('');

// ============================================
// INFORMACIÓN GENERAL
// ============================================

console.log('INFORMACIÓN GENERAL');
console.log('--------------------');

// Nombre del producto crediticio (entidad principal del dominio)
console.log('Microcrédito:    Crédito Semilla Emprendedor');

// Código único del crédito
console.log('Código:          MCR-016');

// Categoría del crédito según su propósito
console.log('Categoría:       Crédito Productivo - Microempresa');

// Estado actual del crédito
console.log('Estado:          Activo');

console.log('');

// ============================================
// DETALLES — datos numéricos y booleanos
// ============================================

console.log('DETALLES');
console.log('--------------------');

// Monto del crédito en pesos colombianos (number — sin comillas)
console.log('Monto del crédito:     ', 1500000);

// Monto total a pagar con interés del 3% mensual a 12 meses
// Fórmula: monto * (1 + tasa * plazo) → 1500000 * (1 + 0.03 * 12)
console.log('Total a pagar:         ', 1500000 * (1 + 0.03 * 12));

// ¿El crédito está al día en pagos?
console.log('Al día en pagos:       ', true);

// ¿Requiere codeudor?
console.log('Requiere codeudor:     ', false);

console.log('');

// ============================================
// RESUMEN DEL DOMINIO
// ============================================

console.log('RESUMEN DEL DOMINIO');
console.log('--------------------');

// Nombre del dominio asignado
console.log('Dominio:          Plataforma de Microcréditos');

// Entidad principal que gestiona el dominio
console.log('Entidad:          crédito');

// Total de créditos registrados en la plataforma (número coherente con el dominio)
console.log('Total registros:  248');

console.log('');

// ============================================
// CIERRE
// ============================================

console.log('=========================================');
console.log('  ¡Impulsa tu negocio con JavaScript!   ');
console.log('=========================================');