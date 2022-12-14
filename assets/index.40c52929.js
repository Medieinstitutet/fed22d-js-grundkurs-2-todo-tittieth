(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();let d=JSON.parse(localStorage.getItem("todos"))||[];const E=document.querySelector("#new-todo-form"),y=document.querySelector("#name"),S=localStorage.getItem("username")||"",T=d.filter(n=>n.done==!0);window.addEventListener("load",()=>{y.value=S.toUpperCase(),y.addEventListener("change",e=>{localStorage.setItem("username",e.target.value+"!")}),E.addEventListener("submit",n);function n(e){e.preventDefault();const o={content:e.target.elements.content.value,dueDate:e.target.elements.dueDate.value,category:e.target.elements.category.value,done:!1,createdAt:new Date().getTime()};d.push(o),localStorage.setItem("todos",JSON.stringify(d)),e.target.reset(),l(d),a(d)}l(d),a(d)});const C=document.querySelector("#completed");C.addEventListener("click",M);const L=document.querySelector("#todo-list");function l(n){L.innerHTML="",n.forEach(e=>{const o=document.createElement("div");o.classList.add("todo-item");const u=document.createElement("label"),t=document.createElement("input"),c=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),m=document.createElement("div"),p=document.createElement("button"),f=document.createElement("button");t.type="checkbox",t.checked=e.done,e.category=="personal"&&(i.innerHTML='<img src="public/icon-personal.png"/>'),e.category=="kids"&&(i.innerHTML='<img src="public/icon-kids.png"/>'),e.category=="job"&&(i.innerHTML='<img src="public/icon-job.png"/>'),e.category=="other"&&(i.innerHTML='<img src="public/icon-other.png"/>'),c.classList.add("todo-content"),r.classList.add("duedate-div"),i.classList.add("category-icon"),m.classList.add("actions"),p.classList.add("edit"),f.classList.add("delete"),r.innerHTML=e.dueDate,c.innerHTML=`<input type="text" value="${e.content}" readonly>`,p.innerHTML="Edit",f.innerHTML="Delete",u.appendChild(t),o.appendChild(u),o.appendChild(c),o.appendChild(r),o.appendChild(i),o.appendChild(m),m.appendChild(p),m.appendChild(f),L.appendChild(o),e.done&&o.classList.add("done"),t.addEventListener("click",g=>{e.done=g.target.checked,localStorage.setItem("arr",JSON.stringify(n)),e.done?o.classList.add("done"):o.classList.remove("done"),l(d),a(d)}),p.addEventListener("click",h);function h(g){const s=c.querySelector("input");s.removeAttribute("readonly"),s.focus(),s.addEventListener("blur",b=>{s.setAttribute("readonly",!0),e.content=b.target.value,localStorage.setItem("arr",JSON.stringify(n)),l(d)})}f.addEventListener("click",v);function v(g){n=n.filter(s=>s!=e),localStorage.setItem("arr",JSON.stringify(n)),l(d),a(d)}})}function M(){const n=d.filter(e=>e.done==!0);l(n),a(n)}function a(n){const e=document.querySelector("#items-left"),o=n.length===1?"todo":"todos";e.innerHTML=`${n.length} ${o}`}a(d);console.table(T);console.table(d);
