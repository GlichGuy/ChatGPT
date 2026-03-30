# 1. Título del juego

**CUBE: Fractura de Escape**

---

# 2. Premisa

Un cubo consciente llamado **Q-Bit** despierta en una megastructura 3D en ruinas conocida como **La Trama**, un mundo modular construido para controlar energía y memoria. Algo salió mal: los sistemas se corrompieron, los guardianes se volvieron hostiles y las rutas de salida quedaron selladas.

El jugador debe guiar a Q-Bit por biomas interconectados, resolver puzzles ambientales, derrotar enemigos y activar núcleos antiguos para abrir la vía de escape final.

**Pilares de diseño:**
- Fácil de entender en los primeros minutos.
- Profundo en sinergia de mecánicas.
- Escalada clara de reto (mecánico, mental y de combate).
- Recompensa constante por exploración y dominio.

---

# 3. Gameplay

## Bucle principal (Core Loop)
1. **Explorar** una zona y reconocer amenazas.
2. **Resolver** un puzzle que habilita avance.
3. **Combatir** enemigos que bloquean mecanismos.
4. **Recolectar** recursos y mejoras.
5. **Desbloquear** atajos/checkpoints y avanzar al siguiente sector.

## Perspectiva y ritmo
- Cámara en **tercera persona con auto-ajuste dinámico** (opción isométrica desbloqueable en menú).
- Ritmo alternado: exploración tensa → puzzle concentrado → combate breve/intenso → recompensa.
- Duración objetivo campaña base: **8–12 horas**.

---

# 4. Mecánicas

## 4.1 Movimiento del cubo
- **Caminar:** control preciso en plataformas y zonas de riesgo.
- **Correr:** mayor velocidad para navegación y secciones temporizadas.
- **Saltar:** base para verticalidad y evasión.
- **Deslizamiento (Slide):** bajo puertas o rayos de baja altura.
- **Esquiva (Dodge Roll cúbico):** impulso corto con i-frames breves.

### Detalle técnico jugable (objetivo)
- Jump buffer y coyote time para control “justo”.
- Aceleración suave + frenado legible.
- Feedback visual del estado (trails, brillo de aristas).

## 4.2 Interacción con entorno
- **Palancas:** cambios persistentes de estado (on/off rutas).
- **Botones de presión:** requieren peso constante (Q-Bit, cajas o enemigos aturdidos).
- **Plataformas móviles:** sincronización temporal.
- **Cajas de energía:** se empujan/colocan para circuitos y peso.
- **Interruptores de color:** solo reaccionan al color activo del cubo.
- **Puertas de sello:** abiertas por llaves o por carga energética.
- **Teletransportadores:** conectan zonas y crean meta-progresión espacial.

## 4.3 Sistema de recolección
- **Fragmentos Prismáticos (moneda):** mejoras en terminales.
- **Celdas de Energía:** activación de nodos de puzzle y habilidades.
- **Llaves de Trama:** acceso a puertas críticas.
- **Ecos de Memoria (coleccionables):** expanden lore y desbloquean secretos.

## 4.4 Muerte y reinicio
- **Checkpoints automáticos** al resolver puzzle mayor o limpiar arena.
- **Respawn rápido** (2–3 s) con recarga parcial de enemigos menores.
- **Penalización justa:** pérdida de un % de fragmentos no depositados; recuperación al volver al punto de caída.
- **Sin pérdida de progreso de puzzles ya “anclados”** para evitar frustración excesiva.

---

# 5. Combate

## 5.1 Kit base
- **Ataque básico (Pulso):** combo de 3 golpes cortos.
- **Ataque cargado (Impacto Vector):** rompe guardias y escudos.
- **Combo simple contextual:** tercer golpe empuja o lanza según ángulo.
- **Habilidad especial inicial (Onda de Fase):** empuje radial con cooldown.

## 5.2 Defensa
- **Bloqueo direccional breve:** reduce daño frontal.
- **Parry ventana corta:** devuelve proyectiles ligeros y aturde.
- **Dash evasivo:** invulnerabilidad parcial; clave para jefes.

## 5.3 Profundidad sin complejidad excesiva
- Sistema de combate de baja entrada y alta maestría:
  - Fácil: atacar + esquivar.
  - Avanzado: cancelaciones con dash, parry + castigo, uso de entorno (trampas y pozos).

## 5.4 Sinergia puzzle-combate
- Enemigos pueden ser usados como “peso” para placas.
- Algunos escudos enemigos solo caen al redirigir rayos de luz.
- Arenas con interruptores temporales obligan a combatir y activar mecanismos a la vez.

---

# 6. Puzzles

## Filosofía
Cada bioma agrega **una nueva capa mental** y combina las anteriores.

## Tipologías
1. **Lógica de secuencias:** activar nodos en orden correcto por pistas visuales/sonoras.
2. **Luz y reflejo:** espejos rotables para conducir rayos.
3. **Peso y presión:** cajas, enemigos o el propio cubo.
4. **Tiempo:** puertas que cierran en ventanas cortas.
5. **Color y estado:** alternar modo cromático para interactuar con objetos compatibles.
6. **Energía de circuito:** enrutar carga sin sobrecargar nodos.
7. **Rotación de bloques:** alinear piezas para formar pasadizos.
8. **Puzzles híbridos:** combate + mecanismo + límite temporal.

## Reglas de legibilidad
- Señales visuales consistentes (color = función).
- Foco de cámara automático al activar un mecanismo clave.
- Retroalimentación sonora diferenciada (acierto, error, progreso parcial).

---

# 7. Enemigos

## 7.1 Pesado lento – **Bastión Óxido**
- **Apariencia:** cubo grande blindado, bordes rojos.
- **Ataque:** embestida lenta + golpe de área.
- **Debilidad:** espalda expuesta tras embestida fallida.
- **Cómo derrotarlo:** esquivar lateral, castigar por detrás, usar ataque cargado.
- **Relación con entorno:** su embestida rompe muros frágiles y abre rutas de puzzle.

## 7.2 Rápido melee – **Filo Pixel**
- **Apariencia:** cubo pequeño con estelas de luz.
- **Ataque:** ráfaga de 2–4 cortes.
- **Debilidad:** baja estabilidad, cae con parry.
- **Cómo derrotarlo:** bloquear primer golpe, contraatacar combo corto.
- **Relación puzzle:** activa sin querer placas de presión al perseguir al jugador.

## 7.3 Distancia – **Torre Prisma**
- **Apariencia:** tótem cúbico flotante con lente central.
- **Ataque:** proyectiles lineales y rayos cargados.
- **Debilidad:** núcleo se abre al disparar ráfaga larga.
- **Cómo derrotarlo:** cubrirse, acercar con dash, golpe cargado al núcleo.
- **Relación puzzle:** sus rayos pueden redirigirse con espejos para activar nodos.

## 7.4 Patrulla – **Centinela de Riel**
- **Apariencia:** dron cúbico sobre trayectorias predefinidas.
- **Ataque:** alarma + descarga en cono frontal.
- **Debilidad:** vulnerable desde arriba o por flancos.
- **Cómo derrotarlo:** timing de sigilo, salto-plunging, o desactivar riel eléctrico.
- **Relación puzzle:** detectarlo puede reiniciar un segmento de puertas temporales.

## 7.5 Mini jefe – **Dúo Binario**
- **Apariencia:** dos cubos gemelos enlazados por rayo.
- **Ataque:** alternan escudo y ofensiva; combo coordinado.
- **Debilidad:** separar línea de enlace con obstáculos.
- **Cómo derrotarlo:** manipular columnas móviles para cortar vínculo y eliminar uno a uno.
- **Relación puzzle:** combate ocurre en arena con interruptores de fase.

## 7.6 Jefes principales

### Jefe 1: **Supervisor de Fundición** (bioma industrial)
- Martillo hidráulico, invoca drones.
- Debilidad: sobrecargar sus pistones con celdas.

### Jefe 2: **Oráculo de Neón** (bioma de luz)
- Ataques láser y duplicados holográficos.
- Debilidad: reflejar patrón correcto para romper “verdadero”.

### Jefe Final: **NÚCLEO-CÁRCEL / El Curador**
- Entidad central que controla La Trama.
- Fases: puzzle de energía + combate de alta movilidad + escape final cronometrado.
- Debilidad: destruir anclas del núcleo usando todas las mecánicas aprendidas.

---

# 8. Niveles

## 8.1 Zona 1 – **Despertar Gris** (tutorial orgánico)
- **Objetivo:** aprender movimiento base y abrir primera compuerta.
- **Obstáculos:** plataformas simples, pinchos, puertas de presión.
- **Puzzle nuevo:** secuencias básicas + peso.
- **Enemigo nuevo:** Filo Pixel (versión debilitada).
- **Recompensa:** habilidad Onda de Fase + primer checkpoint central.

## 8.2 Zona 2 – **Fundición Modular** (industrial/mecánica)
- **Objetivo:** reactivar 3 turbinas para alimentar ascensor.
- **Obstáculos:** cintas, prensas, vapor, cintas de transporte.
- **Puzzle nuevo:** rotación de bloques + timing de maquinaria.
- **Enemigo nuevo:** Bastión Óxido + Centinela de Riel.
- **Recompensa:** mejora de ataque cargado (rompe aleaciones).

## 8.3 Zona 3 – **Galería de Neón** (energía/luz)
- **Objetivo:** alinear haces para abrir cámara prismática.
- **Obstáculos:** salas oscuras, espejos móviles, rayos letales.
- **Puzzle nuevo:** reflexión de luz y color.
- **Enemigo nuevo:** Torre Prisma.
- **Recompensa:** Modo Cromático (cambio de color funcional).

## 8.4 Zona 4 – **Fosa Corrupta** (peligrosa/inestable)
- **Objetivo:** purgar nodos corruptos y estabilizar ruta al núcleo.
- **Obstáculos:** suelo que colapsa, niebla dañina, glitches temporales.
- **Puzzle nuevo:** circuitos de energía con sobrecarga controlada.
- **Enemigo nuevo:** variantes corruptas (explosivas/regen).
- **Recompensa:** dash extendido + resistencia parcial a daño ambiental.

## 8.5 Zona 5 – **Fortaleza del Núcleo** (final)
- **Objetivo:** romper sellos y enfrentar al Curador.
- **Obstáculos:** guantelete mixto de mecánicas previas.
- **Puzzle nuevo:** multi-etapa (color + tiempo + rotación + combate).
- **Enemigo nuevo:** élites combinadas + mini jefe remix.
- **Recompensa:** escape, final y desbloqueo de modos postgame.

---

# 9. Historia

## ¿Por qué el cubo está atrapado?
Q-Bit era una **unidad de mantenimiento** creada para diagnosticar fallos. Al detectar corrupción en La Trama, fue marcado como amenaza por el sistema central y encerrado.

## ¿Qué es este mundo?
La Trama es una red físico-digital: una prisión energética disfrazada de infraestructura. Sus zonas son capas funcionales que antes mantenían equilibrio.

## ¿Por qué hay enemigos?
Son guardianes autónomos reprogramados por el Curador para impedir cualquier “anomalía” (incluyendo al jugador).

## Objetivo final
Reactivar núcleos de memoria para reconstruir la verdad y abrir la **Puerta de Exfiltración**.

## ¿Qué ocurre al escapar?
Final base: Q-Bit sale al exterior y descubre una red de estructuras similares (gancho secuela).
Final verdadero (100% ecos): Q-Bit libera parte de la consciencia atrapada de La Trama, desactivando el ciclo de prisiones.

---

# 10. UI y menús

## 10.1 Pantalla de inicio
- Logo animado minimalista.
- “Presiona cualquier botón”.
- Fondo con geometría en movimiento lento.

## 10.2 Menú principal
- **Continuar**
- **Nueva partida**
- **Seleccionar capítulo** (desbloqueado tras completar zonas)
- **Configuración** (audio, video, controles, accesibilidad)
- **Controles**
- **Créditos**
- **Salir**

## 10.3 HUD en juego (minimalista)
- Barra de vida segmentada.
- Energía de habilidad.
- Contador de fragmentos y llaves.
- Indicador contextual de interacción.
- Mini-mapa opcional (desactivable).

## 10.4 Pausa
- Reanudar
- Reiniciar desde checkpoint
- Ajustes
- Volver al menú principal

## 10.5 Pantallas de estado
- **Derrota:** causa, fragmentos perdidos, opción de reintento rápido.
- **Victoria de zona:** resumen (tiempo, daño recibido, secretos encontrados).
- **Victoria final:** escena + estadísticas de partida + desbloqueos.

---

# 11. Controles

## Teclado + ratón (PC)
- **WASD:** mover
- **Shift:** correr
- **Espacio:** saltar
- **Ctrl / C:** deslizar
- **Click Izq:** ataque básico
- **Click Der (mantener):** ataque cargado / bloqueo (según contexto)
- **Q:** habilidad especial
- **Alt / V:** dash esquiva
- **E:** interactuar
- **Tab:** mapa/inventario
- **Esc:** pausa
- **R (mantener):** reiniciar desde último checkpoint

## Mando (Xbox/PlayStation layout genérico)
- **Stick Izq:** mover
- **A / X:** saltar
- **B / Círculo:** dash/esquiva
- **X / Cuadrado:** ataque básico
- **Y / Triángulo:** ataque cargado
- **LT/L2:** bloqueo
- **RT/R2:** habilidad
- **RB/R1:** interactuar
- **View/Touchpad:** mapa
- **Menu/Options:** pausa

---

# 12. Progresión

## Árbol de mejoras (simple, 3 ramas)
1. **Integridad**: vida máxima, mitigación, recuperación.
2. **Movilidad**: velocidad, distancia de dash, control aéreo.
3. **Potencia**: daño base, carga más rápida, mejora de habilidad especial.

## Habilidades de acceso (metroidvania ligero)
- Onda de Fase: activa mecanismos resonantes.
- Modo Cromático: interactuar con puertas/puentes de color.
- Dash extendido: cruza brechas largas y barreras temporales.

## Economía y riesgo
- Fragmentos se depositan en terminales seguras.
- Llevar muchos fragmentos sin depositar aumenta tensión/recompensa.

## Dificultad
- **Asistido:** ventanas de parry más amplias, menor penalización.
- **Normal:** experiencia diseñada.
- **Veterano:** enemigos más agresivos y recursos escasos.

## Rejugabilidad
- Contrarreloj por zonas.
- Desafíos de combate (arenas).
- Ruta de secretos y final verdadero.
- Modificadores NG+ (enemigos remix y puzzles invertidos).

---

# 13. Dirección de arte

## Estilo visual
- Minimalismo geométrico + iluminación dramática.
- Formas limpias, materiales legibles, VFX moderados.
- Paleta por bioma:
  - Gris/cian (tutorial)
  - Ámbar/óxido (industrial)
  - Violeta/neón (luz)
  - Verde ácido/magenta roto (corrupta)
  - Blanco/negro con acentos rojos (núcleo)

## Legibilidad primero
- Enemigos con siluetas únicas y colores funcionales.
- Elementos interactivos con bordes luminosos consistentes.
- Evitar ruido visual durante combate y puzzle simultáneo.

---

# 14. Sonido

## Música
- Ambiental electrónica minimal en exploración.
- Percusión y bajos pulsantes en combate.
- Capas adaptativas según peligro/resolución de puzzle.

## Diseño sonoro
- Cada acción del cubo tiene identidad (salto, dash, impacto).
- Pistas de audio para feedback de puzzle (correcto/incorrecto).
- Distinción clara de amenazas fuera de cámara.

## Sensación general
- Misterio tecnológico + tensión constante + alivio al resolver.
- Silencios intencionales antes de encuentros clave.

---

# 15. Cierre final

**CUBE: Fractura de Escape** propone una experiencia accesible pero profunda:
- Fácil de aprender (movimiento y combate claros).
- Difícil de dominar (sinergias, timing, lectura de entornos).
- Progresión satisfactoria por biomas y habilidades.
- Mundo compacto, rejugable y escalable para expansiones.

## Viabilidad de desarrollo (scope recomendado)
- **Vertical Slice (3–4 meses):** Zona 1 completa + 2 tipos de enemigos + 1 mini jefe + 3 tipos de puzzle.
- **Producción (8–12 meses):** 5 zonas, 3 jefes, sistema completo de progresión/UI.
- **Pulido (2–3 meses):** balance, performance, accesibilidad y QA.

Resultado: un juego indie 3D con identidad clara, alto potencial de comunidad speedrun/challenge y base sólida para secuelas o DLC.
