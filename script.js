'use strict';
document.documentElement.classList.add('js-enabled');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.hidden = false;
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
const names = Object.fromEntries([...document.querySelectorAll('.product-card')].map(card => [card.querySelector('.add-product').dataset.id, card.dataset.name]));
const selected = new Map();
const panel = document.querySelector('.quote-panel');
function whatsapp(message) { return 'https://wa.me/56998220830?text=' + encodeURIComponent(message); }
function renderQuote() {
 if (!panel) return;
 const list = document.querySelector('#quote-items'); list.replaceChildren();
 for (const [id, quantity] of selected) {
  const li=document.createElement('li'); const name=document.createElement('strong'); name.textContent=names[id];
  const label=document.createElement('label'); label.textContent='Cantidad';
  const input=document.createElement('input'); input.type='number'; input.min='1'; input.max='999'; input.step='1'; input.value=quantity; input.setAttribute('aria-label','Cantidad de '+names[id]);
  input.addEventListener('input',()=>{const value=Math.max(1,Math.min(999,Math.trunc(Number(input.value)||1)));selected.set(id,value);input.value=value;updateLink();}); label.append(input);
  const remove=document.createElement('button');remove.type='button';remove.textContent='Quitar';remove.setAttribute('aria-label','Quitar '+names[id]);remove.addEventListener('click',()=>{selected.delete(id);renderQuote();document.querySelector('[data-id="'+id+'"]').focus();});li.append(name,label,remove);list.append(li);
 }
 document.querySelector('#count').textContent=selected.size;
 document.querySelector('#quote-status').textContent=selected.size?'Tu selección está lista para consultar.':'Agrega productos del catálogo para preparar tu consulta.';
 document.querySelectorAll('.add-product').forEach(button=>{button.textContent=selected.has(button.dataset.id)?'Agregado a mi consulta ✓':'Agregar a mi consulta +';button.setAttribute('aria-pressed',String(selected.has(button.dataset.id)));});updateLink();
}
function updateLink(){const lines=[...selected].map(([id,q])=>'- '+names[id]+': '+q+' envase(s), formato por confirmar.');document.querySelector('#quote-send').href=whatsapp(lines.length?'Hola, quisiera cotizar:\n'+lines.join('\n')+'\nPor favor confirmar formatos, precios, IVA, disponibilidad y despacho.':'Hola, quisiera información sobre sus productos.');}
document.querySelectorAll('.add-product').forEach(button=>button.addEventListener('click',()=>{if(!panel){window.location.href='productos.html?producto='+encodeURIComponent(button.dataset.id);return;} selected.set(button.dataset.id,selected.get(button.dataset.id)||1);renderQuote();}));
if(panel){panel.hidden=false;const requested=new URLSearchParams(location.search).get('producto');if(Object.hasOwn(names,requested))selected.set(requested,1);renderQuote();}
const search=document.querySelector('#search');
if(search){document.querySelector('.filters').hidden=false;const category=document.querySelector('#category');const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();function filter(){let count=0;document.querySelectorAll('.product-card').forEach(card=>{const match=normalize(card.dataset.name+' '+card.dataset.category).includes(normalize(search.value))&&(!category.value||category.value===card.dataset.category);card.hidden=!match;if(match)count++;});document.querySelector('#results').textContent=count+' producto'+(count===1?'':'s');document.querySelector('#empty').hidden=count!==0;}search.addEventListener('input',filter);category.addEventListener('change',filter);}
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const values=new FormData(form);const message='Hola, soy '+values.get('name').trim()+(values.get('company').trim()?' de '+values.get('company').trim():'')+'.\nComuna: '+values.get('city').trim()+'.\nConsulta: '+values.get('message').trim();const send=document.querySelector('#contact-send');send.href=whatsapp(message);send.hidden=false;document.querySelector('#contact-status').textContent='Mensaje preparado. Ábrelo en WhatsApp para revisarlo y enviarlo.';send.focus();});form.addEventListener('input',()=>{document.querySelector('#contact-send').hidden=true;document.querySelector('#contact-status').textContent='';});}
