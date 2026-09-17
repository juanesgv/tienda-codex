import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, CarFront, ShoppingCart, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { categories, parts, demoVehicle, vehicleLabel } from './data';
import './fonts.css';
import './styles.css';
import { ValidationScreens } from './ValidationScreens';
import './validation.css';
import { PurchaseScreens } from './PurchaseScreens';
import './purchase.css';
import { SearchExperience } from './SearchExperience';
import { VehicleWizard, Garage } from './VehicleExperience';
import { initialGarage } from './catalog-data';
import './catalog.css';
import { ProductCategoryScreens } from './ProductCategoryScreens';
import './product-category.css';
import { CartScreens } from './CartScreens';
import './cart.css';
import { AccountScreens } from './AccountScreens';
import './account.css';
import { GarageScreens } from './GarageScreens';
import './garage-states.css';

const money = value => '$' + new Intl.NumberFormat('es-CO').format(value);
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

function App() {
  const [screen, setScreen] = useState('home');
  const [garage, setGarage] = useState(initialGarage);
  const [garageActive, setGarageActive] = useState(initialGarage[0]);
  function saveVehicle(v) {setVehicle(v);setGarageActive(v);setGarage(list=>{const found=list.find(p=>p.plate===v.plate && v.plate!=='Sin placa');return found?list.map(p=>p.id===found.id?v:p):[...list,v]});}
  const [vehicle, setVehicle] = useState(null);
  const [picker, setPicker] = useState(false);
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [notice, setNotice] = useState('');
  const searchRef = useRef(null);
  const resultRef = useRef(null);
  useEffect(() => { if(searched !== null) resultRef.current?.focus(); }, [searched]);
  function search(value) {if(value.trim().toLowerCase()==='farola'){setScreen('results');return}setQuery(value); setSearched(value.trim()); setNotice('');}
  const filtered = searched === null ? [] : parts.filter(p => normalize(`${p.name} ${p.code} ${p.category}`).includes(normalize(searched)));
  return <div id="torque-home">
    <nav className="screen-nav" aria-label="Pantallas del prototipo"><span className="prototype-label">TORQUE / VALIDACIÓN</span>{[['home','01 · Home'],['fit','02 · Compatibilidad'],['checkout','03 · Cuenta'],['purchase','04 · Checkout'],['revalidate','05 · Revalidación'],['results','06 · Resultados'],['identify','07 · Identificar'],['garage','08 · Garaje'],['product','09 · Producto'],['categories','10 · Categorías'],['cart','11 · Carrito'],['account','12 · Mi cuenta']].map(([id,label]) => <button key={id} aria-current={screen === id ? 'page' : undefined} onClick={() => setScreen(id)}>{label}</button>)}</nav>
    {screen==='garage' ? <GarageScreens mobile={mobile} setMobile={setMobile}/> : screen==='account' ? <AccountScreens mobile={mobile} setMobile={setMobile}/> : screen==='cart' ? <CartScreens mobile={mobile} setMobile={setMobile}/> : ['product','categories'].includes(screen) ? <ProductCategoryScreens screen={screen} mobile={mobile} setMobile={setMobile}/> : ['results','identify'].includes(screen) ? <SearchExperience key={screen} mobile={mobile} setMobile={setMobile} active={vehicle} onVehicleSaved={saveVehicle} identifyOnly={screen==='identify'}/> : screen==='garage' ? <><div className="reviewbar"><div className="reviewgroup"><button onClick={()=>setMobile(false)}>Desktop · 1440</button><button onClick={()=>setMobile(true)}>Móvil · 390</button></div></div><Garage vehicles={garage} setVehicles={setGarage} active={garageActive} onActivate={v=>{setGarageActive(v);setVehicle(v)}} onIdentify={()=>setPicker(true)} mobile={mobile}/>{picker&&<VehicleWizard mobile={mobile} onClose={()=>setPicker(false)} onSave={saveVehicle}/>}</> : ['purchase','revalidate'].includes(screen) ? <PurchaseScreens key={screen} screen={screen} mobile={mobile} setMobile={setMobile}/> : screen !== 'home' ? <ValidationScreens screen={screen} mobile={mobile} setMobile={setMobile} onContinue={()=>setScreen('purchase')}/> : <>
    <div className="reviewbar" aria-label="Controles del prototipo"><span className="prototype-label">PROTOTIPO / HOME</span><div className="reviewgroup"><button aria-pressed={!vehicle} onClick={() => {setVehicle(null);setSearched(null);}}>A · Sin vehículo</button><button aria-pressed={!!vehicle} onClick={() => {setVehicle(demoVehicle);setSearched(null);}}>B · Vehículo activo</button></div><div className="reviewgroup"><button aria-pressed={!mobile} onClick={() => setMobile(false)}>Desktop · 1440</button><button aria-pressed={mobile} onClick={() => setMobile(true)}>Móvil · 390</button></div></div>
    <div className={`product${mobile ? ' mobile' : ''}`}>
      <header className="header"><button className="brand homebrand" onClick={() => {setQuery('');setSearched(null);setNotice('');}}>TORQUE<span className="brandmark">/</span></button><span className="descriptor">REPUESTOS AUTOMOTRICES</span><div className="headerlinks"><span>Colombia · COP</span><button className="cart" onClick={() => setNotice('Tu carrito está vacío.')} aria-label="Carrito, 0 productos"><ShoppingCart aria-hidden="true"/><span>Carrito</span><b>0</b></button></div></header>
      {vehicle && <div className="vehicle"><div className="vehicleinner"><CarFront aria-hidden="true"/><div className="vehicletext"><span className="eyebrow">TU VEHÍCULO</span><strong>{vehicleLabel(vehicle)}</strong></div><div className="vehicleactions"><button onClick={() => setPicker(true)}>Cambiar</button><button onClick={() => setVehicle(null)}>Quitar <X size={16} aria-hidden="true"/></button></div></div></div>}
      <main><section className="searchsection"><div className="cataloglabel"><span className="eyebrow">CATÁLOGO DE REPUESTOS</span><span className="catalogcount">11.400 referencias</span></div><h1>Encuentra la pieza correcta.</h1>
        <form className="searchform" onSubmit={e => {e.preventDefault(); if(query.trim()) search(query); else {setNotice('Escribe el nombre o el código del repuesto.');searchRef.current.focus();}}}><label className="sr" htmlFor="torque-search">Busca tu repuesto por nombre o código</label><div className="searchfield"><Search aria-hidden="true"/><input ref={searchRef} id="torque-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Busca tu repuesto: filtro de aceite, farola, 8123-45678" autoComplete="off"/></div><button className="primary">Buscar <ArrowRight aria-hidden="true"/></button></form>
        <div className="searchhint">Por nombre o código de parte.<span className="hintvehicle"> No necesitas identificar tu vehículo para buscar.</span></div>
        <div className="examples"><span>Búsquedas frecuentes</span>{['Filtro de aceite','Pastillas de freno','Tensor de correa'].map(s => <button key={s} onClick={() => search(s)}>{s}</button>)}</div>
        {!vehicle ? <div className="identify"><div className="identifyicon"><CarFront aria-hidden="true"/></div><div className="identifycopy"><strong>Afina la búsqueda con tu vehículo</strong><span>Te ayudamos a encontrar referencias compatibles.</span></div><button className="secondary" onClick={() => setPicker(true)}>Identificar mi vehículo <span aria-hidden="true">→</span></button><span className="optional">Opcional</span></div> : <div className="activehelp"><span className="fit">✓ Vehículo identificado</span><span>Las categorías muestran referencias para tu {vehicle.model}.</span></div>}
        {notice && <div className="searchfeedback" role="status">{notice}<button className="iconbutton" aria-label="Cerrar aviso" onClick={() => setNotice('')}><X/></button></div>}
      </section>
      {searched !== null ? <section className="results"><div className="sectionheading"><h2 ref={resultRef} tabIndex={-1}>Resultados para «{searched}»</h2><button className="secondary" onClick={() => {setSearched(null);setQuery('');searchRef.current.focus();}}>Volver al catálogo</button></div><p className="demodata">Vista de prueba · Datos de muestra, sin compatibilidad verificada.</p><div aria-live="polite"><p>{filtered.length} {filtered.length === 1 ? 'referencia de muestra' : 'referencias de muestra'}</p>{filtered.length ? <div className="resultlist">{filtered.map(p => <article className="resultrow" key={p.code}><div><h3>{p.name}</h3><span className="partcode">{p.code}</span></div><span className="check">? Verificar compatibilidad</span><strong className="price">{money(p.price)}</strong></article>)}</div> : <div className="empty"><h3>No encontramos esa referencia en la muestra.</h3><p>Prueba con «filtro de aceite», «farola» o «8123-45678».</p></div>}</div></section> : <section className="categories"><div className="sectionheading"><h2>Explora por sistema</h2><span className="categoryscope">{vehicle ? `832 referencias para tu ${vehicle.model}` : 'Todo el catálogo · 8 categorías'}</span></div><div className="categorygrid">{categories.map(([name, description, count], i) => <button key={name} className="category" onClick={() => search(name)}><span className="catnumber">0{i+1}</span><ArrowUpRight className="catarrow" aria-hidden="true"/><span className="catname">{name}</span><span className="catdetail">{vehicle ? `${count} referencias` : description}</span></button>)}</div><div className="categoryfoot"><span>{vehicle ? 'Confirma la compatibilidad exacta en cada referencia.' : 'Repuestos para Tivoli, Korando, Actyon y Rexton.'}</span><span className="mono">CAT. / 01—08</span></div></section>}
      <section className="trust" aria-label="Respaldo de tu compra"><div><span className="trustindex">01 / ORIGINALIDAD</span><h3>Sabes qué estás comprando.</h3><p>Marca y origen identificados<br/> en cada referencia.</p></div><div><span className="trustindex">02 / GARANTÍA</span><h3>Condiciones claras, por pieza.</h3><p>Consulta la cobertura y los requisitos<br/> antes de comprar.</p></div><div><span className="trustindex">03 / ENVÍOS</span><h3>Destino, costo y plazo.</h3><p>Confirma la entrega en tu municipio<br/> antes de pagar.</p></div></section>
      </main><footer><span className="footerbrand">TORQUE</span><span>La pieza correcta, sin llamar a nadie.</span><span className="footercountry">REPUESTOS / COLOMBIA</span></footer>
    </div><p className="prototype-note">Prototipo para validación. Catálogo, códigos, precios y conteos ilustrativos.</p>
    {picker && <VehicleWizard mobile={mobile} onClose={() => setPicker(false)} onSave={saveVehicle}/>}
    </>}
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);


