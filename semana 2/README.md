# 🏦 Proyecto Semana 02 - Ficha de Datos del Dominio

## ¿De qué trata este proyecto?

Este script muestra en consola una ficha de datos de mi dominio asignado: **Plataforma de Microcréditos** 💰

La idea es practicar el uso de variables, tipos de datos, typeof y conversiones en JavaScript.

---

## 🗂️ Mi dominio

Trabajé con una plataforma llamada **PLATAFORMA DE MICROCRÉDITOS**, que permite a emprendedores acceder a financiamiento semilla para sus negocios.

Creé la ficha de un crédito:

- 🌱 **Crédito Semilla Emprendedor** — Crédito Productivo - Microempresa — Monto: $1.500.000

---

## 📄 ¿Qué incluye el script?

- 🟦 Variables con los 4 tipos que pedían: `string`, `number`, `boolean` y `null`
- 🔍 Uso de `typeof` para verificar cada tipo
- 🔄 Conversiones explícitas con `String()` y `Number()`
- 💲 Separadores de miles con `_` en los números grandes (ej: `1_500_000`)
- ❌ El valor `null` para la fecha de aprobación que todavía no está asignada

---

## 🗁 Estructura

```
3-proyecto/
├── README.md
└── starter/
    └── script.js
```

---

## 📝 Notas

- ⚠️ El `typeof null` devuelve `"object"` — es un bug viejo de JavaScript
- 🔢 Usé `Number(isItemAvailable)` para convertir el booleano de disponibilidad a número (`true` → `1`)
- 💬 Agregué `String(itemQuantity)` para mostrar el monto como texto con formato
- ✅ Todos los booleanos tienen prefijo `is` como pedían (ej: `isItemAvailable`)
