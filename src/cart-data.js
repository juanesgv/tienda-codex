export const cartItems = [
  {code:'8310-22019',name:'Farola derecha Tivoli 2018–2020',price:328000,qty:1,stock:4,image:'/assets/headlamp.png',fit:'fit'},
  {code:'8123-45678',name:'Farola derecha Korando 2014–2017',price:340000,qty:1,stock:2,image:'/assets/headlamp-korando.png',fit:'nofit'},
  {code:'4813-09320',name:'Pastillas de freno delanteras',price:189000,qty:1,stock:6,image:'/assets/headlamp-rexton.png',fit:'check'},
  {code:'8123-45679',name:'Filtro de aire de motor',price:78000,qty:1,stock:8,image:'/assets/headlamp.png',fit:'fit'},
];

export const recoveredItems = [
  {code:'6712-00470',name:'Tensor de correa',price:245000,qty:1,stock:0,image:'/assets/headlamp-rexton.png',fit:'fit',replacement:{code:'6712-00471',name:'Tensor de correa · referencia intercambiable',price:239000,stock:3}},
  {code:'4813-09320',name:'Pastillas de freno delanteras',price:186000,newPrice:194000,qty:1,stock:4,image:'/assets/headlamp-korando.png',fit:'fit'},
  {code:'8123-45678',name:'Filtro de aceite',price:39000,qty:1,stock:8,image:'/assets/headlamp.png',fit:'fit'},
];

export const cartSubtotal = items => items.reduce((sum,item)=>sum+(item.newPrice??item.price)*item.qty,0);
export const freeShippingProgress = (subtotal, threshold=500000) => Math.min(100,Math.round(subtotal/threshold*100));
