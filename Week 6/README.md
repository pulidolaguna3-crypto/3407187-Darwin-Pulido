# 🚀 Proyecto Semanal — Semana 06: Reporte con Bucles

> 🎯 **ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Implementar un **sistema de reporte** que procese una colección de créditos de la **Plataforma de Microcréditos** usando todos los tipos de bucle vistos esta semana.

---

## 📋 Tu dominio asignado

**Dominio**: Plataforma de Microcréditos 💳

El elemento de trabajo es un **crédito activo** en la plataforma. Cada crédito tiene un cliente, una categoría (consumo, vivienda, empresarial, educativo) y un monto solicitado en pesos colombianos.

---

## ✅ Requisitos Funcionales

Tu `script.js` implementa los siguientes 7 componentes:

### 1. Datos del dominio (array de créditos)
Array `credits` con 8 créditos activos. Cada elemento tiene: `name` (cliente), `category` (tipo de crédito) y `value` (monto en pesos).

### 2. Listar todos los créditos con `for...of`
Recorre el array e imprime cada crédito con su cliente, categoría y monto.

### 3. Contar por categoría con `for...of` + contador
Usando `for...of` anidado, cuenta cuántos créditos pertenecen a cada categoría: consumo, vivienda, empresarial, educativo.

### 4. Calcular totales y promedio con acumulador
Suma el monto de todos los créditos y calcula el promedio por crédito.

### 5. Encontrar el crédito de mayor y menor monto
Identifica qué cliente tiene el crédito más alto y cuál el más bajo.

### 6. Generar reporte con `for` clásico
Usando un `for` clásico, imprime un reporte numerado indicando si cada crédito está sobre o bajo el promedio.

### 7. Búsqueda con `while` + `break`
Recorre la lista de clientes hasta encontrar el primero con días de mora, usando `break` para detener la búsqueda al primer resultado.

---

## 💡 Adaptación al dominio de Microcréditos

| Componente      | Implementación                                               |
| --------------- | ------------------------------------------------------------ |
| Array principal | `credits` — 8 créditos con cliente, categoría y monto       |
| Categorías      | consumo, vivienda, empresarial, educativo                    |
| Valor numérico  | Monto solicitado en pesos colombianos                        |
| `for...of`      | Listado y conteo por categoría                               |
| `for` clásico   | Reporte sobre/bajo el promedio                               |
| `while` + break | Búsqueda del primer crédito con mora                         |
| Acumulador      | Total desembolsado y promedio por crédito                    |

---

## 💡 Salida esperada

```
=== LISTADO COMPLETO ===
1. Carlos Andrés Ramírez — consumo — monto solicitado: $1.200.000
2. Laura Sofía Herrera — vivienda — monto solicitado: $4.500.000
...

=== CONTEO POR CATEGORÍA ===
consumo: 3 crédito(s)
vivienda: 2 crédito(s)
empresarial: 2 crédito(s)
educativo: 1 crédito(s)

=== ESTADÍSTICAS ===
Total monto desembolsado: $20.750.000
Promedio por crédito:     $2.594.000

=== MÁXIMO Y MÍNIMO ===
Mayor monto: Diana Marcela Ospina ($5.000.000)
Menor monto: Natalia Gómez Vargas ($500.000)

=== REPORTE DETALLADO ===
1. Carlos Andrés Ramírez ($1.200.000) — bajo el promedio
2. Laura Sofía Herrera ($4.500.000) — sobre el promedio
...

=== BÚSQUEDA CON WHILE ===
Primer crédito en mora: Miguel Ángel Torres (12 días)

=== FIN DEL REPORTE ===
```

---

## 🗂️ Estructura de archivos

```
3-proyecto/
├── README.md          ← este archivo
└── starter/
    └── script.js      ← aquí está tu proyecto
```

> **Nota**: La carpeta `solution/` existe localmente para referencia del instructor
> pero **no se publica en GitHub**.

---

## 📤 Entregables

1. `starter/script.js` completamente implementado con el dominio de microcréditos
2. El script debe ejecutarse sin errores: `node starter/script.js`
3. La salida debe mostrar todos los componentes del reporte

---

## 🛠️ Evaluación

| Componente                        | Puntos |
| --------------------------------- | ------ |
| Script sin errores                | 20     |
| `for` clásico funcional           | 20     |
| `while` o `do...while`            | 15     |
| `for...of` funcional              | 15     |
| `break` o `continue`              | 10     |
| Contadores y/o acumuladores       | 10     |
| Dominio coherente + código limpio | 10     |
