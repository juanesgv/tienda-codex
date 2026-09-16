export const money = n => '$' + new Intl.NumberFormat('es-CO').format(n);
export const farola = {code:'8310-13520', name:'Farola derecha · Korando', brand:'SsangYong · Original', price:849000, applies:'Korando 2014–2019 · Halógena', qty:1};
export const alternatives = [
  {code:'8310-12310', name:'Farola derecha · Tivoli', brand:'SsangYong · Original', price:929000, applies:'Tivoli 2016–2020 · Halógena', qty:1},
  {code:'8310-12311', name:'Farola derecha · Tivoli', brand:'Depo · Alternativa', price:649000, applies:'Tivoli 2016–2020 · Halógena', qty:1},
];
export const currentCart = [
  {code:'8123-45678',name:'Filtro de aceite',brand:'SsangYong',price:39000,qty:1},
  {code:'4813-09320',name:'Pastillas de freno delanteras',brand:'Sangsin',price:189000,qty:1},
];
export const savedCart = [currentCart[0],{code:'8123-45679',name:'Filtro de aire de motor',brand:'SsangYong',price:78000,qty:1}];
// Reconciliar por referencia: conservar la cantidad mayor, no sumar un duplicado.
export function mergeCarts(current, previous) {
  const byCode = new Map(current.map(p => [p.code,{...p}]));
  previous.forEach(p => byCode.set(p.code, byCode.has(p.code) ? {...byCode.get(p.code),qty:Math.max(byCode.get(p.code).qty,p.qty)} : {...p}));
  return [...byCode.values()];
}
