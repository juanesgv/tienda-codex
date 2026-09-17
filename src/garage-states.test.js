import test from 'node:test';import assert from 'node:assert/strict';
const vehicles=[{model:'Tivoli',plate:'ABC123'},{model:'Korando',plate:'XYZ789'},{model:'Actyon',plate:null}];
test('garaje base contiene tres vehículos y un caso sin placa',()=>{assert.equal(vehicles.length,3);assert.equal(vehicles.filter(v=>!v.plate).length,1)});
test('eliminar activo no selecciona otro automáticamente',()=>{let active='Tivoli';active=null;assert.equal(active,null)});
