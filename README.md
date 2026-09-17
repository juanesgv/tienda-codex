# TORQUE — prototipo de validación

React + Vite. Home con variantes sin vehículo y con vehículo, selector editable, búsqueda local y vistas responsive. No requiere backend.

## Ejecutar

```sh
npm install
npm run dev
```

## Compilar

```sh
npm run build
npm run preview
```

La barra superior pertenece a la revisión del prototipo, no a la tienda. Desktop limita el lienzo a 1440 px y móvil a 390 px; ambas vistas se adaptan a pantallas menores. Los datos son ilustrativos, no un catálogo real. La búsqueda solo consulta las nueve referencias de muestra. No se procesan compras.

## Estructura

- `src/main.jsx`: home e interacciones React.
- `src/styles.css`: sistema visual y adaptación responsive.
- `src/data.js`: referencias y conteos de muestra.

Base para incorporar las siguientes pantallas según sus prompts.

## Pantallas 2 y 3

La navegación superior permite abrir Compatibilidad y Checkout. Cada pantalla incluye selectores de variantes y ancho móvil.

- Compatibilidad: pulsa Agregar al carrito para abrir el aviso. Permite continuar sin bloquear, consultar las dos alternativas o preparar una consulta simulada con un asesor.
- Checkout: decisión de acceso, registro de dos campos, correo existente, fusión de carritos, garaje y taller pendiente de clasificación.
- Correo existente de prueba: `cliente@torque.co`. El botón Usar datos de prueba completa las credenciales simuladas. No hay autenticación real.
- Para recorrer el registro de taller, usa otro correo de muestra, una contraseña de al menos 8 caracteres y marca Soy taller o empresa.
- Fusión por código de referencia: conserva la cantidad mayor de los dos carritos para evitar sumar duplicados. El ejemplo pasa de dos referencias actuales y dos anteriores a tres referencias únicas, por $306.000.
- El plazo de taller (máximo un día hábil), las compatibilidades y todos los datos comerciales son supuestos para validar. Deben confirmarse con la operación antes de producción.
- El asesor, el correo de notificación, el garaje y la conservación del carrito se simulan en memoria; se reinician al recargar o cambiar de escenario. No se transmite información.
- Continuar desde la cuenta abre la demostración de checkout. Las pantallas usan escenarios independientes de prueba; no hay backend ni pasarela real.

`src/ValidationScreens.jsx` contiene los flujos, `src/validation.css` sus estilos y `src/flow-data.js` los datos y la reconciliación del carrito.

## Pantallas 4 y 5

- Checkout completo en cuatro pasos: pedido, dirección/envío, facturación y revisión final. Los datos se mantienen al retroceder o consultar el carrito dentro del escenario.
- Variantes: pedido de cuatro referencias, pedido de $39.000 (envío estándar $12.000) y destino sin cobertura. El envío estándar es gratuito desde $100.000; prioritario cuesta $18.000 y recogida no tiene costo. Son tarifas de muestra.
- Facturación precargada, datos de tercero y validación de formato CC/NIT. No valida identidad ni consulta autoridades.
- El IVA ilustrativo se extrae de precios que ya lo incluyen; subtotal sin IVA + IVA + envío − descuentos suma exactamente el total. Descuentos: $0 en estos ejemplos.
- Revalidación: tensor agotado, pastillas de $186.000 a $194.000, dos filtros sin cambios. Total original $548.000; sin tensor $311.000; con tensor intercambiable $550.000.
- Requiere resolver el agotado y aceptar el precio antes del paso simulado a pasarela. Cancelar no altera el pedido original ni realiza cobros.
- En móvil, el resumen desplegable permite consultar el pedido sin abandonar el paso.

Pruebas de cálculo y formato: `node --test src/purchase-data.test.js`.

## Resultados, identificación y garaje

- `06 · Resultados` muestra ambas variantes consecutivas: 15 tarjetas sin vehículo y 15 agrupadas con Tivoli 2019 (4 compatibles, 2 por verificar, 9 no compatibles). El control de escala de grises permite revisar iconos, textos y diferencias de borde.
- Filtros independientes en cada variante: categoría, marca, precio, disponibilidad y, con vehículo, solo compatibles (inicialmente desactivado). Ordenamiento funcional por precio.
- Buscar `farola` desde la home abre esta comparación. Identificar desde la home o los resultados abre el nuevo overlay.
- Consulta simulada: placa `ABC123` o VIN `KPA10000000000001` devuelven Tivoli. Otros valores de formato válido muestran el estado no encontrado. No se consulta ninguna base externa.
- Selección guiada de seis pasos con opciones dependientes; dos versiones ilustrativas de equipamiento y salida sin versión. Las farolas dependientes del equipamiento pasan a verificar.
- `08 · Garaje`: tres modelos, activación, eliminación y deshacer. Estado en memoria, no persistente tras recargar.
- En móvil el overlay ocupa toda la pantalla; resultados en una columna y filtros desplegables.
- Las fotos fueron creadas con el generador integrado `image_gen`; representan el diseño del prototipo, no son fotografías verificadas de los códigos. Se reutilizan tres imágenes de farolas entre las referencias. Hay una tarjeta intencionalmente sin foto.
- Assets: `public/assets/headlamp.png`, `headlamp-korando.png`, `headlamp-rexton.png`, `tivoli.png`, `korando.png`, `rexton.png`. Prompts completos en `public/assets/image-prompts.json` y `additional-image-prompts.json`.

Pruebas: `node --test src/catalog-data.test.js src/purchase-data.test.js`.
