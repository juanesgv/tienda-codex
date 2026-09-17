export const product = {
  name: 'Farola derecha', code: '8123-45678', price: 340000, stock: 4,
  description: 'Conjunto óptico delantero derecho. Carcasa negra, lente transparente y regulación eléctrica. Se entrega como unidad completa, lista para instalación.',
};

export const gallery = [
  ['/assets/headlamp.png', 'Vista frontal'],
  ['/assets/headlamp-korando.png', 'Vista posterior'],
  ['/assets/headlamp-rexton.png', 'Conectores'],
  ['/assets/headlamp.png', 'Detalle de lente'],
];

export const compatibleVehicles = [
  'SsangYong Korando 2014–2017 · Gasolina 2.0 · Automática',
  'SsangYong Korando 2014–2017 · Diésel 2.0 · Automática',
  'SsangYong Actyon 2015–2018 · Diésel 2.0 · Mecánica',
  'SsangYong Actyon Sports 2016–2018 · Diésel 2.0 · Automática',
];

export const compatibilityStates = {
  none: { short: 'A · Sin vehículo', title: 'Confirma si sirve para tu vehículo' },
  fit: { short: 'B · Compatible', title: 'Sirve para tu Tivoli 2019' },
  nofit: { short: 'C · No compatible', title: 'No sirve para tu Tivoli 2019' },
  check: { short: 'D · Sin datos', title: 'Verificar compatibilidad' },
  sold: { short: 'E · Agotado', title: 'Hay una referencia vigente' },
};

export const alternatives = [
  { name: 'Farola derecha Tivoli 2018–2020', code: '8310-22019', price: 328000 },
  { name: 'Farola derecha Tivoli LED 2019', code: '8310-22021', price: 412000 },
];

export const replacement = { name: 'Farola derecha Korando · referencia vigente', code: '8123-45910', price: 356000 };

export const categoryIndex = [
  ['Filtración', 186, ['Filtros de aceite', 'Filtros de aire', 'Filtros de combustible', 'Filtros de cabina']],
  ['Frenos', 248, ['Pastillas', 'Discos', 'Bombas', 'Bandas y campanas']],
  ['Motor y distribución', 1320, ['Correas', 'Tensores', 'Empaques', 'Soportes de motor']],
  ['Suspensión', 784, ['Amortiguadores', 'Espirales', 'Bujes', 'Brazos']],
  ['Dirección', 412, ['Terminales', 'Rótulas', 'Cremalleras', 'Bombas hidráulicas']],
  ['Transmisión', 963, ['Embrague', 'Ejes', 'Homocinéticas', 'Componentes de caja']],
  ['Eléctrico e iluminación', 1764, ['Farolas', 'Stops', 'Sensores', 'Arranque y carga']],
  ['Refrigeración', 638, ['Radiadores', 'Termostatos', 'Mangueras', 'Bombas de agua']],
];

export const categoryRows = [
  ['Farola derecha Tivoli 2018–2020', '8310-22019', '$328.000', 'Disponible'],
  ['Farola izquierda Tivoli 2018–2020', '8310-22018', '$328.000', 'Disponible'],
  ['Bombillo farola H7 12 V 55 W', '9411-00755', '$42.000', 'Últimas 3'],
  ['Control de luces y direccionales', '8591-11040', '$286.000', 'Disponible'],
];

export const clampQuantity = (value, stock) => Math.max(1, Math.min(stock, Number(value) || 1));
export const filterVehicles = (query) => compatibleVehicles.filter(v => v.toLowerCase().includes(query.trim().toLowerCase()));
