import test from 'node:test';
import assert from 'node:assert/strict';
import {checkoutItems,lowValueItems,totals,shippingCost,documentError,revalidatedItems} from './purchase-data.js';
test('desglose exacto para precios y cantidades en pesos',()=>{
 for(let qty=1;qty<=9;qty++)for(const shipping of [0,12000,18000]){
  const items=checkoutItems.map(p=>({...p,qty}));const t=totals(items,shipping);
  assert.equal(t.subtotal-t.discount+t.tax+t.shipping,t.total);
  assert.equal(t.total,items.reduce((s,p)=>s+p.price*p.qty,0)+shipping);
 }
});
test('umbral de envío y opción prioritaria',()=>{
 assert.equal(shippingCost([{price:99999,qty:1}],'standard'),12000);
 assert.equal(shippingCost([{price:100000,qty:1}],'standard'),0);
 assert.equal(shippingCost(checkoutItems,'express'),18000);
 assert.equal(shippingCost([{price:39000,qty:1}],'pickup'),0);
});
test('quitar agotado y actualizar precio sin mutar pedido original',()=>{
 const q=Object.fromEntries(checkoutItems.map(p=>[p.code,p.qty]));
 const result=revalidatedItems(checkoutItems,'remove',q);
 assert.equal(result.length,3);assert.equal(totals(result).total,311000);
 assert.equal(result.find(p=>p.code==='4813-09320').price,194000);
 assert.equal(checkoutItems.find(p=>p.code==='4813-09320').price,186000);
 assert.equal(totals(checkoutItems).total,548000);
});
test('reemplazo intercambiable y cantidades recalculan el total',()=>{
 const q=Object.fromEntries(checkoutItems.map(p=>[p.code,p.qty]));
 const result=revalidatedItems(checkoutItems,'replace',q);
 assert.equal(result.length,4);assert.equal(totals(result).total,550000);
 assert.equal(result[0].code,'6712-00471');
 q['4813-09320']=2;
 assert.equal(totals(revalidatedItems(checkoutItems,'replace',q)).total,744000);
});
test('validación de formato de CC y NIT',()=>{
 assert.equal(documentError('CC','1023456789'),'');
 assert.ok(documentError('CC','1.023.456.789'));assert.ok(documentError('CC','abc'));
 assert.equal(documentError('NIT','900123456-7'),'');assert.ok(documentError('NIT','900123456'));
});
test('caso de fusible deja exactamente 88.000 para envío gratis',()=>{
 assert.equal(totals(lowValueItems).gross,12000);
 assert.equal(100000-totals(lowValueItems).gross,88000);
 assert.equal(lowValueItems[0].price,5000);
});
