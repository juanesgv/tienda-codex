export const initialGarage=[
 {id:'tivoli',model:'Tivoli',year:'2019',brand:'SsangYong',transmission:'Automática',fuel:'Gasolina',traction:'4×2',plate:'ABC123',version:'Comfort · Halógena',uncertain:false},
 {id:'korando',model:'Korando',year:'2017',brand:'SsangYong',transmission:'Automática',fuel:'Diésel',traction:'4×4',plate:'DEF456',version:'Diésel 4×4',uncertain:false},
 {id:'rexton',model:'Rexton',year:'2020',brand:'SsangYong',transmission:'Automática',fuel:'Diésel',traction:'4×4',plate:'GHI789',version:'Diésel 4×4',uncertain:false},
];
export const modelPhoto=model=>`/assets/${model.toLowerCase()}.png`;
const rows=[
 ['Farola derecha Tivoli · Halógena','8310-12310',929000,'SsangYong','Tivoli','fit',true],
 ['Farola izquierda Tivoli · Halógena','8310-12320',929000,'SsangYong','Tivoli','fit',true],
 ['Farola derecha Tivoli · Alternativa','8310-12311',649000,'Depo','Tivoli','fit',true],
 ['Farola izquierda Tivoli · Alternativa','8310-12321',649000,'Depo','Tivoli','fit',true],
 ['Farola derecha · Proyector','8310-12410',1129000,'TYC','Tivoli, Korando, Actyon','check',true],
 ['Farola izquierda · Proyector','8310-12420',1129000,'TYC','Tivoli, Korando, Actyon','check',false],
 ['Farola derecha Korando','8310-13520',849000,'SsangYong','Korando','nofit',true],
 ['Farola izquierda Korando','8310-13530',849000,'SsangYong','Korando','nofit',true],
 ['Farola derecha Korando · Alternativa','8310-13521',589000,'Depo','Korando','nofit',true],
 ['Farola izquierda Korando · Alternativa','8310-13531',589000,'Depo','Korando','nofit',false],
 ['Farola derecha Actyon','8310-14510',729000,'SsangYong','Actyon','nofit',true],
 ['Farola izquierda Actyon','8310-14520',729000,'SsangYong','Actyon','nofit',true],
 ['Farola derecha Rexton','8310-15510',1399000,'SsangYong','Rexton','nofit',true],
 ['Farola izquierda Rexton','8310-15520',1399000,'SsangYong','Rexton','nofit',true],
 ['Farola derecha Actyon · Alternativa','8310-14511',519000,'Depo','Actyon','nofit',true],
];
export const headlights=rows.map(([name,code,price,brand,models,fit,available],i)=>({name,code,price,brand,models,fit,available,image:i===5?null:i>=12&&i<=13?'/assets/headlamp-rexton.png':i>=6?'/assets/headlamp-korando.png':'/assets/headlamp.png',category:'Farolas delanteras'}));
export function compatibility(product,vehicle){if(!vehicle)return null;if(product.fit==='check')return 'check';if(!product.models.split(', ').includes(vehicle.model))return 'nofit';if(vehicle.uncertain||vehicle.version?.includes('Proyector'))return 'check';return 'fit';}
export function filterProducts(items,{brand='',maxPrice='',available=false,onlyFit=false,category='',sort='relevance',query='farola'},vehicle){const text=query.toLowerCase().trim();const result=items.filter(p=>(!text||`${p.name} ${p.code}`.toLowerCase().includes(text))&&(!brand||p.brand===brand)&&(!maxPrice||p.price<=Number(maxPrice))&&(!available||p.available)&&(!category||p.category===category)&&(!onlyFit||!vehicle||compatibility(p,vehicle)==='fit'));return sort==='low'?[...result].sort((a,b)=>a.price-b.price):sort==='high'?[...result].sort((a,b)=>b.price-a.price):result;}
export const guideSteps=[['brand','Marca'],['year','Año'],['model','Línea'],['transmission','Caja'],['fuel','Combustible'],['traction','Tracción']];
export function validOptions(key,draft){switch(key){case 'brand':return ['SsangYong'];case 'year':return ['2018','2019','2020'];case 'model':return draft.year==='2020'?['Tivoli','Rexton']:['Tivoli','Korando'];case 'transmission':return draft.model==='Rexton'?['Automática']:['Automática','Mecánica'];case 'fuel':return draft.model==='Tivoli'?['Gasolina']:['Diésel'];case 'traction':return draft.model==='Tivoli'?['4×2']:draft.model==='Rexton'?['4×4']:['4×2','4×4'];default:return []}}
