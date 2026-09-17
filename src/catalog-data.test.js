import test from 'node:test';
import assert from 'node:assert/strict';
import {headlights,compatibility,initialGarage,filterProducts,validOptions} from './catalog-data.js';
test('15 resultados y distribución inicial exacta 4 / 2 / 9',()=>{
 assert.equal(headlights.length,15);const counts={fit:0,check:0,nofit:0};headlights.forEach(p=>counts[compatibility(p,initialGarage[0])]++);assert.deepEqual(counts,{fit:4,check:2,nofit:9});assert.equal(headlights.filter(p=>!p.image).length,1);
});
test('sin vehículo no se afirma compatibilidad',()=>headlights.forEach(p=>assert.equal(compatibility(p,null),null)));
test('versión incierta mueve las farolas dependientes de equipamiento a verificar',()=>{const v={...initialGarage[0],uncertain:true};assert.equal(headlights.filter(p=>compatibility(p,v)==='check').length,6);assert.equal(headlights.filter(p=>compatibility(p,v)==='nofit').length,9)});
test('filtros y ordenamiento preservan el catálogo base',()=>{
 const base={query:'farola'};assert.equal(filterProducts(headlights,base,initialGarage[0]).length,15);assert.equal(filterProducts(headlights,{...base,onlyFit:true},initialGarage[0]).length,4);const sorted=filterProducts(headlights,{...base,sort:'low',available:true,maxPrice:'650000'},null);assert.ok(sorted.every(p=>p.available&&p.price<=650000));assert.ok(sorted.every((p,i)=>i===0||p.price>=sorted[i-1].price));assert.equal(headlights[0].code,'8310-12310');
});
test('la selección guiada limita opciones según antecedentes',()=>{assert.deepEqual(validOptions('fuel',{model:'Tivoli'}),['Gasolina']);assert.deepEqual(validOptions('traction',{model:'Tivoli'}),['4×2']);assert.deepEqual(validOptions('transmission',{model:'Rexton'}),['Automática']);assert.ok(!validOptions('model',{year:'2019'}).includes('Rexton'))});
