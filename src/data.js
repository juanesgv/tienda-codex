export const demoVehicle = { model: 'Tivoli', year: '2019', fuel: 'Gasolina', transmission: 'Automática' };
export const vehicleLabel = v => `${v.model} ${v.year} · ${v.fuel} · ${v.transmission}`;
export const categories = [
  ['Filtración', 'Aceite, aire y combustible', 68],
  ['Frenos', 'Pastillas, discos y bombas', 124],
  ['Motor y distribución', 'Tensores, correas y empaques', 216],
  ['Suspensión', 'Amortiguadores y soportes', 98],
  ['Dirección', 'Terminales y rótulas', 47],
  ['Transmisión', 'Embrague, ejes y caja', 82],
  ['Eléctrico e iluminación', 'Farolas, sensores y arranque', 136],
  ['Refrigeración', 'Radiadores y termostatos', 61],
];
// Datos de demostración: no constituyen un catálogo ni compatibilidades verificadas.
export const parts = [
  { name: 'Filtro de aceite', code: '8123-45678', category: 'Filtración', price: 39000 },
  { name: 'Filtro de aire de motor', code: '8123-45679', category: 'Filtración', price: 78000 },
  { name: 'Pastillas de freno delanteras', code: '4813-09320', category: 'Frenos', price: 189000 },
  { name: 'Tensor de correa', code: '6712-00470', category: 'Motor y distribución', price: 245000 },
  { name: 'Amortiguador delantero', code: '4430-13400', category: 'Suspensión', price: 369000 },
  { name: 'Terminal de dirección', code: '4666-03500', category: 'Dirección', price: 119000 },
  { name: 'Kit de embrague', code: '3020-12300', category: 'Transmisión', price: 689000 },
  { name: 'Farola derecha', code: '8310-13520', category: 'Eléctrico e iluminación', price: 849000 },
  { name: 'Termostato de refrigeración', code: '1612-00150', category: 'Refrigeración', price: 98000 },
];
