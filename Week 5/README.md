# Proyecto Semanal — Semana 05: Clasificador

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Implementar un sistema de clasificación usando `if/else`, operador ternario, `switch`, nullish coalescing `??` y optional chaining `?.`, aplicado al dominio de **Plataforma de Microcréditos**.

---

## 📋 Tu Dominio Asignado

**Dominio**: Plataforma de Microcréditos 💳

El elemento a clasificar es un **crédito solicitado por un cliente**. Cada crédito tiene un monto, un estado, un tipo y datos opcionales del solicitante que pueden o no estar disponibles en el sistema.

---

## ✅ Requisitos Funcionales

El script `script.js` debe:

1. **Datos del elemento** — Define al menos 5 variables con datos del crédito: nombre del cliente, estado, monto solicitado, tipo de crédito y objeto con información adicional opcional
2. **Clasificación con `if/else`** — Clasifica el crédito en al menos 3 categorías según el monto solicitado (Microcrédito Básico, Crédito Medio, Crédito Medio-Alto, Crédito Alto)
3. **Estado con operador ternario** — Determina si el crédito está activo o inactivo según `elementStatus`
4. **Tipo con `switch`** — Clasifica el crédito según su tipo: consumo, vivienda, empresarial, educativo
5. **Valor por defecto con `??`** — Usa `??` para el nombre del cliente y el detalle del crédito cuando sean `null` o `undefined`
6. **Acceso seguro con `?.`** — Usa `?.` para acceder de forma segura a la garantía y los días en mora del objeto `elementInfo`
7. **Ficha de salida** — Muestra un resumen con `console.log` usando template literals. Sin concatenación `+`

---

## 💡 Adaptación al dominio de Microcréditos

| Concepto        | Implementación en Microcréditos                          |
| --------------- | -------------------------------------------------------- |
| Elemento        | Crédito solicitado por un cliente                        |
| `if/else`       | Monto: Básico / Medio / Medio-Alto / Alto                |
| Ternario `? :`  | Estado: ✅ Activo / ❌ Inactivo                          |
| `switch`        | Tipo: consumo / vivienda / empresarial / educativo       |
| `??`            | Nombre del cliente o detalle si son `null`               |
| `?.`            | Garantía y días en mora desde objeto `elementInfo`       |

---

## 💡 Salida esperada

```
========================================
   FICHA DE CLASIFICACIÓN DE CRÉDITO
========================================
Nombre:           Carlos Andrés Ramírez
Estado:           ✅ Activo
Monto solicitado: $1.200.000
Clasificación:    Crédito Medio
Tipo de crédito:  Crédito de Consumo
Detalle:          Primera solicitud de crédito en la plataforma
Garantía:         Codeudor
Días en mora:     0
========================================
```

---

## 🏛️ Ejemplo de referencia (dominio no asignable)

El archivo `solution/script.js` muestra una implementación de referencia usando el **Acuario Municipal** como dominio de ejemplo. Este dominio **no está en la lista de dominios asignables**, por lo que no corresponde a ningún aprendiz.

> Usa la solución solo para entender la estructura esperada, **no para copiarla**.

---

## 📁 Estructura de archivos

```
3-proyecto/
├── README.md          ← estás aquí
├── starter/
│   └── script.js      ← tu implementación (microcréditos)
└── solution/
    └── script.js      ← referencia (Acuario Municipal)
```

---

## 🛠️ Cómo ejecutar

```bash
node starter/script.js
```

---

## 📊 Criterios de evaluación

| Criterio                        | Puntos      |
| ------------------------------- | ----------- |
| El script funciona sin errores  | 20 pts      |
| `if` / `else if` / `else`       | 20 pts      |
| Operador ternario `? :`         | 15 pts      |
| `switch` con `case` y `default` | 15 pts      |
| `??` y `?.` (ES2020)            | 10 pts      |
| Adaptación coherente al dominio | 10 pts      |
| Nomenclatura y código limpio    | 10 pts      |
| **Total**                       | **100 pts** |

**Mínimo para aprobar**: 70 pts
