export const orders=[
 {id:'TQ-2026-18427',date:'17 sep. 2026',total:550000,status:'waiting',label:'Esperando confirmación',vehicle:'Tivoli'},
 {id:'TQ-2026-18104',date:'12 sep. 2026',total:328000,status:'preparing',label:'En preparación',vehicle:'Tivoli'},
 {id:'TQ-2026-17289',date:'28 ago. 2026',total:712000,status:'shipped',label:'Enviado',vehicle:'Mixto'},
 {id:'TQ-2026-15932',date:'2 ago. 2026',total:117000,status:'delivered',label:'Entregado',vehicle:'Korando'},
];
export const orderProducts=[
 {code:'8310-22019',name:'Farola derecha Tivoli 2018–2020',price:328000,qty:1,vehicle:'Tivoli 2019',image:'/assets/headlamp.png'},
 {code:'4813-09320',name:'Pastillas de freno delanteras',price:194000,qty:1,vehicle:'Tivoli 2019',image:'/assets/headlamp-rexton.png'},
];
export const mixedProducts=[
 {code:'8310-22019',name:'Farola derecha Tivoli 2018–2020',price:328000,vehicle:'Tivoli 2019',image:'/assets/headlamp.png'},
 {code:'8310-13520',name:'Farola derecha Korando 2014–2017',price:340000,vehicle:'Korando 2017',image:'/assets/headlamp-korando.png'},
 {code:'8123-45678',name:'Filtro de aceite',price:44000,vehicle:'Rexton 2020',image:'/assets/headlamp-rexton.png'},
];
export const alerts=[
 {code:'6712-00470',name:'Tensor de correa',vehicle:'Tivoli 2019',status:'waiting',date:'Aviso activo desde 12 sep. 2026',price:245000},
 {code:'8310-13520',name:'Farola derecha Korando',vehicle:'Korando 2017',status:'waiting',date:'Aviso activo desde 4 sep. 2026',price:849000},
 {code:'8123-45679',name:'Filtro de aire de motor',vehicle:'Tivoli 2019',status:'arrived',date:'Llegó hoy · 8 unidades disponibles',price:78000},
];
export const ordersForVehicle=(vehicle)=>vehicle==='Todos'?orders:orders.filter(o=>o.vehicle===vehicle||o.vehicle==='Mixto');
export const linesForVehicle=(vehicle)=>mixedProducts.filter(p=>p.vehicle.startsWith(vehicle));
