import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import vm from 'node:vm';
const html=await readFile('dist/index.html','utf8'),app=await readFile('dist/app.js','utf8'),context={window:{}};
vm.runInNewContext(await readFile('dist/projects.js','utf8'),context);
const projects=context.window.portfolioProjects;
assert.equal(projects.length,13);
assert.equal(new Set(projects.map(p=>p.repo)).size,13);
assert.equal(projects.filter(p=>p.pending).length,4);
assert.equal(projects.filter(p=>p.featured).length,4);
for(const p of projects){
 assert.match(p.repo,/^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/);
 assert.ok(p.benefit&&p.audience);
 if(p.pending){assert.equal(p.screens.length,0);continue;}
 assert.ok(p.features.length&&p.screens.length&&p.previewNote);
 for(const screen of p.screens){assert.ok(screen.title&&screen.caption);assert.ok((await stat('dist/'+screen.src)).size>100);}
}
for(const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
 const p=m[1];if(!/^(https?:|mailto:)/.test(p))assert.ok((await stat('dist/'+p)).isFile());
}
assert.ok(html.includes('mailto:paulosergiiginternet@gmail.com'));
assert.ok(html.includes('https://wa.me/5583981824734'));
assert.ok(html.includes('https://wa.me/5521996049034'));
assert.ok(app.includes('https://wa.me/5521996049034'));
assert.ok(!/href=["']https:\/\/github\.com/.test(html+app));
for(const m of html.matchAll(/href="#([^"]+)"/g))assert.ok(html.includes('id="'+m[1]+'"'));
new vm.Script(app);
console.log('OK: 13 projetos, 9 apresentações com telas presentes, 4 aguardando acesso, contatos de vendas e JavaScript válidos.');
