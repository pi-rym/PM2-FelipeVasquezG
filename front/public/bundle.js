(()=>{var t={989:t=>{t.exports=t=>{const a=document.getElementById("box-pelicula");console.log(a),t.forEach((t=>{const{title:s,year:e,director:n,duration:r,genre:c,rate:p,poster:d}=t,o=document.createElement("div");o.classList.add("card"),o.innerHTML=`\n      <div class="card" style="width: 18rem;">\n      <a href="#" class="btn btn-primary">${s}</a>\n        <hr>\n        <img src= ${d} class="card-img-top" alt="...">\n        <div class="card-body">\n          <h5 class="card-title">Card title</h5>\n          <p class="card-text"><span>Year: </span>${e}</p>\n          <p class="card-text"><span>DIRECTOR: </span>${n}</p>\n          <p class="card-text"><span>Duracion: </span>${r}</p>\n          <p class="card-text"><span>Gener: </span>${c.join(", ")}</p>\n          <p class="card-text"><span>rate: </span>${p}</p>\n         \n        </div>\n      </div>`,a.appendChild(o)}))}}},a={};function s(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,s),r.exports}(()=>{document.getElementById("box-pelicula");const t=s(989);$.get("https://students-api.2.us-1.fl0.io/movies",(a=>{t(a)}))})()})();