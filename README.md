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
- Entrega y pago no están implementados; Continuar a entrega muestra el límite del prototipo.

`src/ValidationScreens.jsx` contiene los flujos, `src/validation.css` sus estilos y `src/flow-data.js` los datos y la reconciliación del carrito.
