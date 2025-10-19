(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s=[{name:"JavaScript",category:"Language"},{name:"React",category:"Framework"},{name:"Node.js",category:"Runtime"},{name:"HTML5",category:"Markup"},{name:"CSS3",category:"Styling"},{name:"Git",category:"Version Control"},{name:"MongoDB",category:"Database"},{name:"Express",category:"Framework"}],i=[{title:"Project One",description:"A full-stack web application built with React and Node.js featuring real-time updates and responsive design.",tech:["React","Node.js","MongoDB"]},{title:"Project Two",description:"Modern e-commerce platform with secure payment integration and inventory management system.",tech:["JavaScript","Express","CSS3"]},{title:"Project Three",description:"Portfolio website showcasing creative designs with smooth animations and optimal performance.",tech:["React","CSS3","HTML5"]}];function d(){const c=document.getElementById("tech-grid");s.forEach(r=>{const o=document.createElement("div");o.className="tech-card",o.innerHTML=`
      <h3 class="tech-name">${r.name}</h3>
      <p class="tech-category">${r.category}</p>
    `,c.appendChild(o)})}function l(){const c=document.getElementById("projects-grid");i.forEach(r=>{const o=document.createElement("div");o.className="project-card";const n=r.tech.map(e=>`<span class="tech-tag">${e}</span>`).join("");o.innerHTML=`
      <div class="project-image">
        <span>Project Image</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${r.title}</h3>
        <p class="project-description">${r.description}</p>
        <div class="project-tech">
          ${n}
        </div>
      </div>
    `,c.appendChild(o)})}document.addEventListener("DOMContentLoaded",()=>{d(),l()});
