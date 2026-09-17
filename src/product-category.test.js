import test from 'node:test';
import assert from 'node:assert/strict';
import { categoryIndex, clampQuantity, filterVehicles } from './product-category-data.js';

test('cantidad se mantiene entre uno y el stock',()=>{
  assert.equal(clampQuantity(0,4),1);
  assert.equal(clampQuantity(3,4),3);
  assert.equal(clampQuantity(20,4),4);
});
test('buscador interno filtra sin distinguir mayúsculas',()=>{
  assert.equal(filterVehicles('korando').length,2);
  assert.equal(filterVehicles('ACTYON').length,2);
});
test('índice conserva ocho categorías con subcategorías visibles',()=>{
  assert.equal(categoryIndex.length,8);
  assert.ok(categoryIndex.every(category=>category[2].length>=4));
});
