# 📦 Proyecto Semana 08: Gestión de Inventario con Arrays

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Aplicar todos los métodos de arrays vistos en la semana para construir un script de gestión de cartera adaptado al dominio de **Plataforma de Microcréditos**.

---

## 📋 Tu Dominio Asignado

**Dominio**: Plataforma de Microcréditos 💳

El inventario es la **cartera de créditos activos** de la plataforma. Cada crédito tiene: cliente, monto, plazo en meses, categoría y estado activo/inactivo.

---

## ✅ Requisitos Funcionales implementados

### 1. Estructura de datos
Array `items` con 6 créditos. Cada objeto tiene: `id`, `name`, `monto` (numérico), `plazo`, `categoria` y `active` (booleano).

### 2. Métodos de mutación
| Método    | Uso en el dominio                                          |
| --------- | ---------------------------------------------------------- |
| `push`    | `addItem()` — agregar un nuevo crédito al final de la cartera |
| `pop`     | `removeLastItem()` — eliminar el último crédito ingresado  |
| `unshift` | `addPriorityItem()` — agregar un crédito urgente al inicio |
| `splice`  | `removeByIndex()` — eliminar un crédito por posición       |

### 3. Métodos de búsqueda y filtrado
| Método   | Uso en el dominio                                        |
| -------- | -------------------------------------------------------- |
| `find`   | `findByName()` — localizar un crédito por nombre del cliente |
| `filter` | `getActiveItems()` — obtener solo los créditos activos   |

### 4. Métodos de iteración y transformación
| Método    | Uso en el dominio                                          |
| --------- | ---------------------------------------------------------- |
| `forEach` | Mostrar cada crédito formateado en el reporte              |
| `map`     | Generar lista de nombres y calcular cuotas mensuales       |
| `reduce`  | Calcular el monto total de la cartera (bonus)              |

### 5. Spread operator
Copia inmutable de la cartera con un crédito temporal extra, sin modificar el array `items` original.

---

## 💡 Salida esperada

```
=======================================================
💳 GESTIÓN DE CARTERA DE MICROCRÉDITOS
=======================================================

📋 Cartera inicial (6 créditos):
  [1] Carlos Andrés Ramírez — $1.200.000 — 6 meses — consumo — ✅ Activo
  [2] Laura Sofía Herrera — $4.500.000 — 12 meses — vivienda — ✅ Activo
  ...

--- Operaciones de mutación ---
✅ Crédito agregado: Andrés Felipe Suárez — $2.900.000
⚡ Crédito prioritario agregado al inicio: Natalia Gómez Vargas
🗑️  Crédito eliminado en posición 3: Miguel Ángel Torres
🗑️  Crédito eliminado (último): Andrés Felipe Suárez

--- Cartera después de mutaciones ---
  [0] Natalia Gómez Vargas — $500.000 — 3 meses — consumo — ✅ Activo
  ...

--- Búsqueda y filtrado ---
🔍 Crédito encontrado: [2] Laura Sofía Herrera — $4.500.000 ...

✅ Créditos activos (4):
  - Natalia Gómez Vargas
  ...

📸 Snapshot (sin modificar items): 7 elementos — items sigue con 6

--- Transformación con map ---
👥 Clientes en cartera:
  - Natalia Gómez Vargas
  ...

💰 Cuotas mensuales estimadas:
  Natalia Gómez Vargas: $166.667/mes
  ...

--- Resumen final ---
Total en cartera:  6 créditos
Activos:           4 | Inactivos: 2
Monto total:       $14.050.000 COP

=======================================================
✅ Reporte completado
=======================================================
```

---

## 🚀 Cómo ejecutar

```bash
node starter/script.js
```

---

## 📊 Criterios de Evaluación

| Criterio                                   | Puntos     |
| ------------------------------------------ | ---------- |
| Script ejecuta sin errores                 | 10 pts     |
| Mínimo 5 objetos con propiedades correctas | 5 pts      |
| Demuestra ≥ 4 métodos de mutación          | 10 pts     |
| Demuestra ≥ 2 métodos de búsqueda/filtrado | 5 pts      |
| Demuestra `map` para transformar datos     | 5 pts      |
| Spread operator usado correctamente        | 5 pts      |
| Reporte final claro y bien etiquetado      | 5 pts      |
| Código coherente con el dominio asignado   | 10 pts     |
| Nombres descriptivos, formato correcto     | 5 pts      |
| **Total**                                  | **60 pts** |
