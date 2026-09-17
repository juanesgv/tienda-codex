import test from 'node:test';
import assert from 'node:assert/strict';
import {cartItems,cartSubtotal,freeShippingProgress} from './cart-data.js';
test('subtotal del carrito usa cantidad por precio',()=>assert.equal(cartSubtotal(cartItems),935000));
test('progreso de envío nunca supera cien',()=>{assert.equal(freeShippingProgress(250000),50);assert.equal(freeShippingProgress(900000),100)});
test('persisten los tres estados de compatibilidad',()=>assert.deepEqual(new Set(cartItems.map(x=>x.fit)),new Set(['fit','nofit','check'])));
