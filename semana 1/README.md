# 🏦 Ficha de Presentación de Dominio
## Plataforma de Microcréditos — Semana 1

> 🎓 Proyecto del Bootcamp JavaScript ES2023  
> 👩‍💻 Estudiante en proceso de aprendizaje

---

## 💰 ¿De qué trata este proyecto?

Este script de JavaScript muestra en la consola una **ficha de presentación** de un crédito dentro de una plataforma de **microcréditos**.

La plataforma permite que emprendedores accedan a financiamiento semilla para impulsar sus negocios. ¡Como darle un empujón a tu idea con código!

---

## 🗂️ Mi Dominio: Plataforma de Microcréditos

| 📌 Campo | 💡 Descripción |
|---|---|
| **Dominio** | Plataforma de Microcréditos |
| **Nombre de la plataforma** | PLATAFORMA DE MICROCRÉDITOS |
| **Entidad principal** | Crédito |
| **Crédito de ejemplo** | Crédito Semilla Emprendedor |
| **Código del crédito** | MCR-016 |
| **Categoría** | Crédito Productivo - Microempresa |
| **Estado** | Activo |

---

## 🧮 ¿Qué calcula el script?

El script calcula automáticamente el **total a pagar** con interés:

```
$1.500.000 × (1 + 0.03 × 12) = $2.040.000
```

Esto representa el monto final con una **tasa del 3% mensual a 12 meses**, lo que significa que:
- ✅ El crédito está **al día en pagos** (`true`)
- ✅ **No requiere codeudor** (`false`)

---

## 📚 ¿Qué aprendí esta semana?

Estos son los conceptos de JavaScript que apliqué en el proyecto:

### 🔤 String (texto)
Valores escritos entre comillas. Se usan para nombres, códigos y categorías.
```js
'Crédito Semilla Emprendedor'
'MCR-016'
'Crédito Productivo - Microempresa'
```

### 🔢 Number (número)
Valores numéricos sin comillas. Se usan para montos, tasas y plazos.
```js
1500000     // monto del crédito
0.03        // tasa de interés mensual
12          // plazo en meses
```

### ✅ Boolean (verdadero o falso)
Solo puede ser `true` o `false`. Se usa para representar estados del crédito.
```js
true    // al día en pagos
false   // no requiere codeudor
```

### ➕ Expresión aritmética
Un cálculo que JavaScript resuelve automáticamente.
```js
1500000 * (1 + 0.03 * 12)   // resultado: 2.040.000
```

---

## 📋 Requisitos cumplidos

- [x] ✅ Nombre de la entidad principal (string)
- [x] ✅ Identificador o código único (string)
- [x] ✅ Descripción o categoría (string)
- [x] ✅ Al menos un dato numérico (number)
- [x] ✅ Dos valores boolean
- [x] ✅ Una expresión aritmética calculada
- [x] ✅ Sección de resumen del dominio
- [x] ✅ Mínimo 3 comentarios en español
- [x] ✅ Salida organizada con separadores visuales
- [x] ✅ Corre sin errores con `node script.js`

---

## 📊 Salida esperada en consola

```
=========================================
  PLATAFORMA DE MICROCRÉDITOS - FICHA #16
=========================================

INFORMACIÓN GENERAL
--------------------
Microcrédito:    Crédito Semilla Emprendedor
Código:          MCR-016
Categoría:       Crédito Productivo - Microempresa
Estado:          Activo

DETALLES
--------------------
Monto del crédito:      1500000
Total a pagar:          2040000
Al día en pagos:        true
Requiere codeudor:      false

RESUMEN DEL DOMINIO
--------------------
Dominio:          Plataforma de Microcréditos
Entidad:          crédito
Total registros:  248

=========================================
  ¡Impulsa tu negocio con JavaScript!   
=========================================
```

---

## 🗂️ Estructura del proyecto

```
3-proyecto/
├── README.md        ← Este archivo
└── starter/
    └── script.js    ← Mi código JavaScript
```

---

## 💡 Reflexión personal

> Este fue mi primer script de JavaScript. Aprendí que programar es darle instrucciones claras a la consola, y que cada tipo de dato (string, number, boolean) tiene su propósito. La plataforma de microcréditos fue un dominio muy interesante para aprender porque trabaja con datos reales del mundo financiero, como tasas de interés y plazos de pago. Ver cómo JavaScript calcula automáticamente el total a pagar con una simple fórmula fue lo que más me impresionó. 🚀

---

*🎓 Bootcamp JavaScript ES2023 — Semana 1*
