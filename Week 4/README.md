# Proyecto Semana 04: Generador de Mensajes de Dominio

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 📋 Tu Dominio Asignado

**Dominio**: Plataforma de Microcréditos 💳

> ⚠️ **POLÍTICA ANTICOPIA**: Cada aprendiz tiene un **dominio único**. Tu código debe reflejar tu dominio específico. Una implementación copiada o no adaptada resulta en calificación de cero.

---

## 🎯 Objetivo

Construir un **generador de mensajes** en consola para el dominio de microcréditos, usando todos los métodos de string aprendidos esta semana y template literals para construir la salida.

---

## ✅ Requisitos Funcionales

El script debe:

1. **Declarar datos del dominio de microcréditos** como strings con `const`
   - Nombre del cliente solicitante (con espacios intencionales para `trim()`)
   - Tipo de crédito (ej: Microcrédito de Consumo)
   - Descripción del crédito aprobado
   - Código único del crédito con prefijo `MCR`

2. **Usar al menos 5 métodos de string diferentes**:
   - `toUpperCase()` y `toLowerCase()`
   - `trim()`
   - `includes()`, `startsWith()` y `endsWith()`
   - `slice()` y `split()`
   - `replaceAll()`

3. **Construir la salida con template literals** — sin concatenación con `+`

4. **Generar dos tipos de mensajes**:
   - Una **ficha de crédito** multilínea con todos los datos del cliente y el crédito
   - Un **mensaje de notificación** corto de una línea

5. **Mostrar al menos una validación** usando `includes`, `startsWith` o `endsWith`

---

## 💡 Ejemplo de referencia (Plataforma de Microcréditos)

```
=============================================
  PLATAFORMA DE MICROCRÉDITOS — FICHA DE CRÉDITO
=============================================
Cliente:     MARÍA FERNANDA OSPINA
Referencia:  maría fernanda ospina
Tipo:        Microcrédito de Consumo
Código:      MCR-2025-001
  Prefijo:   MCR
  Año:       2025
  Número:    001
Monto:       $800.000
Estado:      Activo

---------------------------------------------
Descripción:
Crédito aprobado para capital de trabajo con tasa preferencial y seguro de vida incluido.
=============================================

--- Validaciones ---
¿Código empieza con 'MCR'?:             true
¿Descripción menciona 'Crédito'?:       true
¿Código termina con consecutivo '001'?: true

--- Notificación ---
📢 Nuevo crédito registrado: María Fernanda Ospina — Ref. MCR 2025 001
```

---

## 🛠️ Archivos del Proyecto

```
4-proyecto/
├── README.md           ← estás aquí
├── starter/
│   └── script.js       ← tu punto de partida (completar los TODOs)
└── solution/
    └── script.js       ← referencia del instructor (no copiar)
```

---

## 🚀 Cómo ejecutar

```bash
node starter/script.js
```

---

## 📌 Entregables

1. `script.js` funcional, adaptado al dominio de microcréditos
2. Uso visible de al menos 5 métodos de string distintos
3. Toda la salida construida con template literals
4. Al menos una validación con `includes`, `startsWith` o `endsWith`
5. Código comentado en español explicando cada sección

---

## 📊 Criterios de Evaluación

| Criterio                                       | Puntos  |
| ---------------------------------------------- | ------- |
| El script funciona sin errores                 | 20      |
| Uso de al menos 5 métodos de string            | 25      |
| Template literals (sin `+`)                    | 20      |
| Ficha multilínea + mensaje corto               | 15      |
| Coherencia con el dominio asignado             | 10      |
| Nomenclatura en inglés, comentarios en español | 10      |
| **Total**                                      | **100** |

> ⚠️ **Penalizaciones**: -5 pts por uso de `var`, -5 pts por concatenación con `+` donde corresponde template literal
