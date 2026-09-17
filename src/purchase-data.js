export const checkoutItems = [
 {code:'6712-00470',name:'Tensor de correa',brand:'SsangYong',price:245000,qty:1,stock:0},
 {code:'4813-09320',name:'Pastillas de freno delanteras',brand:'Sangsin',price:186000,newPrice:194000,qty:1,stock:4},
 {code:'8123-45678',name:'Filtro de aceite',brand:'SsangYong',price:39000,qty:1,stock:8},
 {code:'8123-45679',name:'Filtro de aire de motor',brand:'SsangYong',price:78000,qty:1,stock:6},
];
export const lowValueItems = [
 {code:'9820-00005',name:'Fusible automotriz mini 15 A',brand:'Littelfuse',price:5000,qty:1,stock:24},
 {code:'9411-00007',name:'Bombillo testigo T5 12 V',brand:'Osram',price:7000,qty:1,stock:18},
];
export const completionSuggestions = [
 {code:'8123-45678',name:'Filtro de aceite Tivoli',brand:'SsangYong',price:39000,qty:1,stock:8},
 {code:'8123-45679',name:'Filtro de aire de motor Tivoli',brand:'SsangYong',price:78000,qty:1,stock:6},
];
export const replacement={code:'6712-00471',name:'Tensor de correa · Referencia intercambiable',brand:'INA',price:239000,qty:1,stock:3};
export const savedAddresses=[{id:'home',name:'Casa',recipient:'Andrés Martínez',phone:'3001234567',street:'Calle 127 # 19A-35, apto. 402',city:'Bogotá',department:'Bogotá D. C.'},{id:'shop',name:'Taller',recipient:'Andrés Martínez',phone:'3001234567',street:'Carrera 48 # 15-28',city:'Medellín',department:'Antioquia'}];
export const buyer={name:'Andrés Martínez',type:'CC',document:'1023456789',address:'Calle 127 # 19A-35, Bogotá'};
// Todos los valores son supuestos comerciales para el prototipo, en pesos enteros.
export function totals(items,shipping=0){const gross=items.reduce((s,p)=>s+p.price*p.qty,0);const tax=Math.round(gross*19/119);const subtotal=gross-tax;return {gross,subtotal,tax,discount:0,shipping,total:subtotal+tax+shipping};}
export function shippingCost(items,method){const gross=totals(items).gross;return method==='pickup'?0:method==='express'?18000:gross>=100000?0:12000;}
export function documentError(type,value){if(type==='CC')return /^\d{6,10}$/.test(value)?'':'Escribe entre 6 y 10 dígitos, sin puntos ni espacios.';return /^\d{9}-\d$/.test(value)?'':'Usa 9 dígitos, guion y dígito de verificación. Ejemplo: 900123456-7.';}
export function revalidatedItems(items,choice,quantities){return items.flatMap(p=>{if(p.stock===0)return choice==='replace'?[{...replacement,qty:Math.min(quantities[p.code]||1,replacement.stock)}]:[];return [{...p,price:p.newPrice??p.price,qty:quantities[p.code]??p.qty}];});}
