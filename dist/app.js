const projects=window.portfolioProjects;
const grid=document.querySelector('#project-grid'),dialog=document.querySelector('#project-dialog'),imageDialog=document.querySelector('#image-dialog');
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const categoryNames={industrial:'Indústria',management:'Gestão',web:'Web & experiências',tools:'Ferramentas'};
const saleUrl=project=>'https://wa.me/5521996049034?text='+encodeURIComponent('Olá, Gabriel! Vi o projeto '+project.title+' no portfólio do Paulo Sérgio e gostaria de conversar sobre uma solução para minha empresa.');
let currentProject=null,currentScreen=0;
function renderProjects(filter='all'){
const selected=projects.filter(p=>filter==='all'||p.category===filter);
grid.innerHTML=selected.map(p=>'<article class="project-card '+(p.featured?'featured':'compact')+'"><button class="project-cover '+(p.pending?'cover-pending':'')+'" data-project="'+p.id+'" aria-label="Ver apresentação de '+escapeHtml(p.title)+'">'+(p.screens.length?'<img src="'+p.screens[0].src+'" alt="Prévia: '+escapeHtml(p.screens[0].title)+' — '+escapeHtml(p.title)+'" loading="lazy"><span class="cover-action">Ver as telas <b>↗</b></span>':'<span class="pending-symbol" aria-hidden="true">◈</span><span>Apresentação em preparação</span>')+'</button><div class="card-body"><p class="project-label">'+escapeHtml(p.label)+'</p><h3>'+escapeHtml(p.title)+'</h3><p class="description">'+escapeHtml(p.description)+'</p><div class="tags"><span>'+categoryNames[p.category]+'</span>'+(p.screens.length?'<span>'+p.screens.length+' '+(p.screens.length===1?'tela':'telas')+' para explorar</span>':'<span>Prévia em breve</span>')+(p.status?'<span>'+escapeHtml(p.status)+'</span>':'')+'</div><div class="card-footer"><button class="detail-button" data-project="'+p.id+'">'+(p.pending?'Conhecer o projeto':'Ver apresentação')+' <span>↗</span></button><span class="card-screen-count">'+(p.screens.length?String(p.screens.length).padStart(2,'0')+' / TELAS':'EM BREVE')+'</span></div></div></article>').join('');
document.querySelector('#result-count').textContent=selected.length+' '+(selected.length===1?'projeto':'projetos');
}
function showScreen(index){
currentScreen=(index+currentProject.screens.length)%currentProject.screens.length;
const screen=currentProject.screens[currentScreen],image=document.querySelector('#preview-image');
image.src=screen.src;image.alt=screen.title+' — '+currentProject.title;
document.querySelector('#screen-title').textContent=screen.title;
document.querySelector('#screen-caption').textContent=screen.caption;
document.querySelector('#screen-counter').textContent=(currentScreen+1)+' / '+currentProject.screens.length;
document.querySelectorAll('[data-screen]').forEach(button=>{const active=Number(button.dataset.screen)===currentScreen;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}
function openProject(projectId){
const p=projects.find(item=>item.id===projectId);if(!p)return;
currentProject=p;currentScreen=0;
document.querySelector('#dialog-content').innerHTML='<div class="case-intro"><p class="eyebrow">'+escapeHtml(p.label)+'</p><h2 id="dialog-title">'+escapeHtml(p.title)+'</h2><p class="case-summary">'+escapeHtml(p.description)+'</p></div><div class="case-layout">'+(p.screens.length?'<section class="preview-gallery" aria-label="Telas do projeto"><div class="screen-tabs" role="group" aria-label="Escolher tela">'+p.screens.map((s,i)=>'<button data-screen="'+i+'" aria-pressed="'+(i===0)+'" class="'+(i===0?'active':'')+'">'+escapeHtml(s.title)+'</button>').join('')+'</div><button class="screenshot-button" id="expand-screen" aria-label="Ampliar a tela do projeto"><img id="preview-image" src="'+p.screens[0].src+'" alt="'+escapeHtml(p.screens[0].title)+' — '+escapeHtml(p.title)+'"><span>Ampliar tela ↗</span></button><div class="gallery-footer"><div class="screen-description" aria-live="polite"><h3 id="screen-title">'+escapeHtml(p.screens[0].title)+'</h3><p id="screen-caption">'+escapeHtml(p.screens[0].caption)+'</p></div><div class="gallery-controls"><button data-step="-1" aria-label="Tela anterior" '+(p.screens.length===1?'disabled':'')+'>←</button><span id="screen-counter">1 / '+p.screens.length+'</span><button data-step="1" aria-label="Próxima tela" '+(p.screens.length===1?'disabled':'')+'>→</button></div></div><p class="preview-note">'+escapeHtml(p.previewNote)+(p.sourceNote?' '+escapeHtml(p.sourceNote):'')+'</p></section>':'<section class="pending-preview"><span aria-hidden="true">◈</span><h3>Apresentação visual em preparação</h3><p>As telas deste projeto serão adicionadas à galeria assim que estiverem disponíveis. Nossa equipe pode conversar com você sobre o trabalho.</p></section>')+'<aside class="case-details"><h3>O que resolve</h3><p>'+escapeHtml(p.benefit)+'</p>'+(p.features.length?'<h3>Principais funções</h3><ul>'+p.features.map(f=>'<li>'+escapeHtml(f)+'</li>').join('')+'</ul>':'')+'<h3>Para quem</h3><p>'+escapeHtml(p.audience)+'</p>'+(p.status?'<p class="case-status">'+escapeHtml(p.status)+'</p>':'')+'<div class="case-sales"><small>GABRIEL · ATENDIMENTO DE VENDAS</small><a class="button primary" href="'+saleUrl(p)+'" target="_blank" rel="noopener noreferrer">'+(p.pending?'Consultar projeto':'Quero uma solução assim')+' <span>↗</span></a><p>(21) 9 9604-9034</p></div></aside></div>';
dialog.showModal();document.body.classList.add('dialog-open');
}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});renderProjects(button.dataset.filter);}));
grid.addEventListener('click',event=>{const button=event.target.closest('[data-project]');if(button)openProject(button.dataset.project);});
dialog.addEventListener('click',event=>{
const tab=event.target.closest('[data-screen]');if(tab)showScreen(Number(tab.dataset.screen));
const step=event.target.closest('[data-step]');if(step)showScreen(currentScreen+Number(step.dataset.step));
if(event.target.closest('#expand-screen')){const screen=currentProject.screens[currentScreen];const image=document.querySelector('#expanded-image');image.src=screen.src;image.alt=screen.title+' — '+currentProject.title;document.querySelector('#expanded-caption').textContent=screen.title+' · '+currentProject.previewNote;imageDialog.showModal();}
if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}
});
dialog.addEventListener('keydown',event=>{if(imageDialog.open||!currentProject?.screens.length||event.target.closest('.screen-tabs'))return;if(event.key==='ArrowRight'){event.preventDefault();showScreen(currentScreen+1);}if(event.key==='ArrowLeft'){event.preventDefault();showScreen(currentScreen-1);}});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');currentProject=null;});
document.querySelector('.image-close').addEventListener('click',()=>imageDialog.close());
imageDialog.addEventListener('click',event=>{if(event.target===imageDialog){const r=imageDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)imageDialog.close();}});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a')){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');nav.classList.remove('open');}});
document.querySelector('#year').textContent=new Date().getFullYear();renderProjects();
