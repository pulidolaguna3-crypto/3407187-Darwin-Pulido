// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Dominio: Plataforma de Microcréditos
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
// Constantes base de una plataforma de microcréditos colombiana

const MONTO_BASE_CREDITO = 500_000;          // Monto mínimo de microcrédito en pesos
const TASA_INTERES_MENSUAL = 0.025;          // Tasa de interés mensual (2.5%)
const COMISION_APERTURA = 15_000;            // Comisión fija por apertura de crédito
const PLAZO_MAXIMO_MESES = 12;               // Plazo máximo permitido en meses
const SEGURO_MENSUAL = 8_000;                // Costo del seguro de vida mensual
const LIMITE_CREDITO_NUEVO = 1_500_000;      // Límite para clientes nuevos
const LIMITE_CREDITO_RECURRENTE = 5_000_000; // Límite para clientes recurrentes

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Datos del crédito a calcular
const montoPrestado = 800_000;  // Monto solicitado por el cliente
const plazoMeses = 6;           // Plazo elegido en meses

// Cálculo del interés total generado durante el plazo
const interesTotal = montoPrestado * TASA_INTERES_MENSUAL * plazoMeses;
console.log("Interés total del crédito:", interesTotal);

// Cálculo del seguro de vida acumulado durante el plazo
const seguroTotal = SEGURO_MENSUAL * plazoMeses;
console.log("Costo total del seguro:", seguroTotal);

// Costo total que debe pagar el cliente (capital + intereses + comisión + seguro)
const costoTotal = montoPrestado + interesTotal + COMISION_APERTURA + seguroTotal;
console.log("Costo total a pagar:", costoTotal);

// Cuota mensual dividiendo el costo total entre el plazo
const cuotaMensual = costoTotal / plazoMeses;
console.log("Cuota mensual:", cuotaMensual);

// Meses que le quedan disponibles al cliente dentro del plazo máximo
const mesesRestantes = PLAZO_MAXIMO_MESES - plazoMeses;
console.log("Meses restantes del plazo máximo:", mesesRestantes);

// Porcentaje del límite de crédito que está siendo utilizado
const porcentajeUtilizado = (montoPrestado / LIMITE_CREDITO_NUEVO) * 100;
console.log("Porcentaje del límite utilizado:", porcentajeUtilizado + "%");

// Diferencia entre el límite recurrente y el nuevo (beneficio por fidelidad)
const beneficioFidelidad = LIMITE_CREDITO_RECURRENTE - LIMITE_CREDITO_NUEVO;
console.log("Beneficio de límite por fidelidad:", beneficioFidelidad);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// Simulación del saldo pendiente a lo largo del tiempo
let saldoPendiente = montoPrestado;
console.log("Saldo inicial del crédito:", saldoPendiente);

// Abono del mes 1: el cliente paga su primera cuota de capital
saldoPendiente -= 133_333;
console.log("Saldo tras pago mes 1:", saldoPendiente);

// Abono del mes 2
saldoPendiente -= 133_333;
console.log("Saldo tras pago mes 2:", saldoPendiente);

// El cliente se retrasa en el mes 3: se aplica mora del 5%
saldoPendiente *= 1.05;
console.log("Saldo con mora aplicada (mes 3 tardío):", saldoPendiente);

// Se negocia una condonación parcial de $20.000 por acuerdo de pago
saldoPendiente -= 20_000;
console.log("Saldo tras condonación parcial:", saldoPendiente);

// Acumulado de recaudo de la cartera
let totalRecaudado = 0;
totalRecaudado += 133_333; // Recaudo mes 1
console.log("Total recaudado tras mes 1:", totalRecaudado);
totalRecaudado += 133_333; // Recaudo mes 2
console.log("Total recaudado tras mes 2:", totalRecaudado);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const diasMora = 15;          // Días de retraso en el pago actual
const estadoCredito = "activo"; // Estado actual del crédito
const cuotasPagadas = 2;      // Número de cuotas canceladas hasta ahora

// Verificar si el cliente está completamente al día (sin ningún día de mora)
const estaAlDia = diasMora === 0;
console.log("¿Crédito al día?", estaAlDia);

// Verificar si el crédito tiene estado activo en el sistema
const estaActivo = estadoCredito === "activo";
console.log("¿Crédito activo?", estaActivo);

// Verificar si el cliente pagó exactamente la mitad del plazo
const cumplioMitadPlazo = cuotasPagadas === plazoMeses / 2;
console.log("¿Pagó exactamente la mitad del plazo?", cumplioMitadPlazo);

// Detectar si existe algún día de mora (mayor a cero)
const tieneMora = diasMora > 0;
console.log("¿Tiene mora?", tieneMora);

// Clasificar mora como urgente si supera los 30 días
const esUrgente = diasMora > 30;
console.log("¿Mora urgente (más de 30 días)?", esUrgente);

// Validar si la cuota mensual supera el umbral de cuota alta
const cuotaEsAlta = cuotaMensual > 200_000;
console.log("¿Cuota mensual supera $200.000?", cuotaEsAlta);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const esClienteRecurrente = true;   // Cliente con créditos previos en la plataforma
const historialLimpio = true;       // Sin incumplimientos históricos
const ingresoMensual = 1_200_000;   // Ingreso mensual declarado del solicitante
const edadCliente = 28;             // Edad del cliente

// Calificación básica: debe ser recurrente Y tener historial limpio
const calificaCredito = esClienteRecurrente && historialLimpio;
console.log("¿Califica para crédito recurrente?", calificaCredito);

// Capacidad de pago: la cuota no debe superar el 30% del ingreso mensual
const capacidadDePago = cuotaMensual <= ingresoMensual * 0.30;
console.log("¿Tiene capacidad de pago?", capacidadDePago);

// Aprobación final: debe calificar para crédito Y demostrar capacidad de pago
const creditoAprobado = calificaCredito && capacidadDePago;
console.log("¿Crédito aprobado?", creditoAprobado);

// Alerta de riesgo: mora crítica O más del 80% del límite utilizado
const alertaRiesgo = diasMora > 30 || porcentajeUtilizado > 80;
console.log("¿Alerta de riesgo activada?", alertaRiesgo);

// Elegible para aumento de límite: recurrente, historial limpio, y buen ingreso O mayor de 25
const elegibleMayorLimite = esClienteRecurrente && historialLimpio && (ingresoMensual >= 1_000_000 || edadCliente >= 25);
console.log("¿Elegible para aumento de límite?", elegibleMayorLimite);

// Puede refinanciar: no debe tener mora activa Y el crédito debe estar activo
const puedeRefinanciar = !tieneMora && estaActivo;
console.log("¿Puede refinanciar?", puedeRefinanciar);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");
console.log("Monto prestado:          $" + montoPrestado.toLocaleString("es-CO"));
console.log("Plazo:                   " + plazoMeses + " meses");
console.log("Interés total:           $" + interesTotal.toLocaleString("es-CO"));
console.log("Costo total del seguro:  $" + seguroTotal.toLocaleString("es-CO"));
console.log("Comisión de apertura:    $" + COMISION_APERTURA.toLocaleString("es-CO"));
console.log("Costo total a pagar:     $" + costoTotal.toLocaleString("es-CO"));
console.log("Cuota mensual:           $" + cuotaMensual.toLocaleString("es-CO"));
console.log("Días en mora:            " + diasMora);
console.log("Crédito aprobado:        " + creditoAprobado);
console.log("Alerta de riesgo:        " + alertaRiesgo);
console.log("Elegible mayor límite:   " + elegibleMayorLimite);
console.log("Puede refinanciar:       " + puedeRefinanciar);
console.log("");