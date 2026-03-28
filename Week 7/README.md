# Proyecto Semana 07 — Librería de Funciones Reutilizables

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Construir una **librería de funciones reutilizables** aplicada al dominio de **Plataforma de Microcréditos**. Cada función está bien nombrada, recibe información por parámetros, devuelve un valor con `return` y está separada del código que produce efectos (como `console.log`).

---

## 📋 Tu Dominio Asignado

**Dominio**: Plataforma de Microcréditos 💳

El elemento de trabajo es un **crédito activo** en la plataforma. Cada crédito tiene: cliente, categoría, monto, plazo en meses y estado activo/inactivo.

---

## ✅ Requisitos Funcionales

El script implementa las siguientes 6 secciones:

### Sección 1 — Datos del dominio
Constantes globales (`TASA_MENSUAL`, `COMISION_FIJA`, `CURRENCY`) y un array `credits` con 7 créditos, cada uno con: `id`, `name`, `category`, `value`, `active` y `plazo`.

### Sección 2 — Función de formato
Arrow function `formatCredit(credit)` que devuelve un string con nombre del cliente, categoría, monto formateado en pesos, plazo y estado activo/inactivo.

### Sección 3 — Función de cálculo (pura)
Dos funciones puras:
- `calculateCreditCost(monto, plazoMeses)` — calcula el costo total del crédito (capital + intereses + comisión)
- `calculateMonthlyFee(monto, plazoMeses)` — calcula la cuota mensual a pagar

### Sección 4 — Función de validación
Arrow function `isActive(credit)` que devuelve `true` si el crédito tiene `active === true`.

### Sección 5 — Funciones con parámetro por defecto
- `formatMonto(monto, label = VALUE_LABEL, moneda = CURRENCY)` — formatea un monto con etiqueta y moneda por defecto
- `generateCreditSummary(credit, mostrarCuota = false)` — genera una ficha del crédito; solo incluye la cuota si se pide explícitamente

### Sección 6 — Reporte usando las funciones
Reporte final que usa todas las funciones anteriores:
- `formatCredit` como callback en el listado
- `isActive` para contar créditos activos
- `calculateCreditCost` para sumar el costo total de la cartera
- `formatMonto` para mostrar estadísticas
- `generateCreditSummary` con `mostrarCuota = true` para el crédito mayor

---

## 💡 Funciones implementadas

| Función                   | Tipo         | Descripción                                      |
| ------------------------- | ------------ | ------------------------------------------------ |
| `formatCredit(credit)`    | Arrow / pura | Formatea un crédito como string                  |
| `calculateCreditCost(…)`  | Arrow / pura | Calcula costo total: capital + intereses + comisión |
| `calculateMonthlyFee(…)`  | Arrow / pura | Calcula la cuota mensual del crédito             |
| `isActive(credit)`        | Arrow / pura | Valida si el crédito está activo                 |
| `formatMonto(…)`          | Arrow        | Formatea monto con etiqueta y moneda por defecto |
| `generateCreditSummary(…)`| Arrow        | Genera ficha resumida con parámetro por defecto  |

---

## 💡 Salida esperada

```
════════════════════════════════════════════════
   REPORTE — Plataforma de Microcréditos
════════════════════════════════════════════════

📋 Listado de créditos:
  1. 💳 Carlos Andrés Ramírez [consumo] — $1.200.000 — 6 meses — ✅ Activo
  2. 💳 Laura Sofía Herrera [vivienda] — $4.500.000 — 12 meses — ✅ Activo
  ...

✅ Créditos activos: 5 / 7

📊 Estadísticas:
  Total desembolsado: $20.250.000 COP
  Costo total cartera: $27.517.500 COP

🔍 Crédito de mayor monto:
  Cliente:      Diana Marcela Ospina
  Categoría:    vivienda
  Monto:        $5.000.000
  Costo total:  $8.015.000
  Estado:       Inactivo
  Cuota/mes:    $333.958

════════════════════════════════════════════════
```

---

## 🏗️ Estructura

```
3-proyecto/
└── starter/
    └── script.js   ← implementación del dominio microcréditos
```

---

## 📊 Evaluación (100 pts)

| Criterio                                     | Puntos |
| -------------------------------------------- | ------ |
| Script ejecuta sin errores                   | 20 pts |
| Al menos 3 funciones declaradas              | 15 pts |
| Todas usan `return` correctamente            | 15 pts |
| Al menos 2 arrow functions                   | 15 pts |
| Al menos 1 parámetro por defecto             | 10 pts |
| Al menos 1 función usada como valor/callback | 15 pts |
| Dominio coherente + clean code               | 10 pts |

---

## 🛠️ Entregables

1. `starter/script.js` con todos los TODOs implementados
2. El script debe ejecutarse con `node script.js` sin errores
3. Comentarios en español explicando cada sección
