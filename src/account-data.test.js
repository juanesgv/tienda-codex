import test from 'node:test';import assert from 'node:assert/strict';
import {linesForVehicle,orders,ordersForVehicle} from './account-data.js';
test('los pedidos tienen estados en lenguaje de cliente',()=>assert.ok(orders.every(o=>['Esperando confirmación','En preparación','Enviado','Entregado'].includes(o.label))));
test('el filtro mixto devuelve solo la línea del vehículo',()=>{assert.equal(linesForVehicle('Tivoli').length,1);assert.equal(linesForVehicle('Korando').length,1)});
test('el historial incluye pedidos mixtos al filtrar',()=>assert.ok(ordersForVehicle('Rexton').some(o=>o.vehicle==='Mixto')));
