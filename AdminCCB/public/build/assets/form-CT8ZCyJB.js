let T,q;document.addEventListener("DOMContentLoaded",r=>{H(),E()});function E(){const r=document.querySelector("#follow"),c=document.querySelector("#nombre"),a=document.querySelector("#cedula"),i=document.querySelector("#telefono"),s=document.querySelector("#email"),u=document.querySelector("#confemail"),S=document.querySelectorAll(".valAprovText"),p=document.querySelectorAll(".valAprovNum"),g=document.querySelectorAll('input[name="first"'),l=document.querySelectorAll('input[name="second"');let n=!1,d=!1,v=!1;S.forEach(function(e){e.addEventListener("input",function(f){var m=e.value,L=/^[a-zA-Z-á-é-í-ó-ú ]*$/;L.test(m)||(e.value=e.value.replace(/[^a-zA-Z-á-é-í-ó-ú ]/g,""))})}),p.forEach(function(e){e.addEventListener("input",function(f){var m=e.value,L=/^[0-9]*$/;L.test(m)||(e.value=e.value.replace(/[^0-9]/g,""))})}),r&&r.addEventListener("click",e=>{e.preventDefault(),n=!1,d=!1,v=!1;const f=document.querySelectorAll(".valid1"),m=document.querySelectorAll(".valid2"),L=document.querySelector("#pass"),b=document.querySelector("#passInf"),y=document.querySelector("#passFam");let h,x;const C=Number(b.value)+Number(y.value);let M=!1,I=!1;if(c.value==""||a.valid==""||i.value==""||s.value==""||u.value==""?(f.forEach(function(t){t.value.trim()==""?t.classList.add("err"):t.classList.remove("err")}),o("Los campos con (*) son obligatorios")):s.value!==u.value?(u.classList.add("err"),u.innerHTML="",o("Los correos no coinciden")):n=!0,b.value==""||y.value==""?m.forEach(function(t){t.value.trim()==""?t.classList.add("err"):t.classList.remove("err")}):C>L.innerHTML?o("La cantidad de pasaportes infantil y familiar no coinciden con la cantidad total"):d=!0,g.forEach(function(t){t.checked&&(M=!0,h=t.value)}),l.forEach(function(t){t.checked&&(I=!0,x=t.value)}),M&&I?v=!0:o("Los campos con (*) son obligatorios"),n&&d&&v){const t=T.innerText+q.innerHTML;r.setAttribute("disabled","true"),localStorage.setItem("5baa61e4",T.innerHTML),localStorage.setItem("7f83b1657ff1fc53",q.innerHTML),localStorage.setItem("5baa61e4werg",a.value),_(ixi.innerText,y.value,b.value,c.value,a.value,T.innerText,i.value,s.value,t,h,x)}});function o(e){const f=document.querySelector(".msnModal"),m=f.closest(".modalvalid");m.classList.add("show"),f.innerHTML=e,setTimeout(()=>{m.classList.remove("show")},2e3)}}function H(){const r=localStorage.getItem("5baa61e4"),c=localStorage.getItem("7f83b1657ff1fc53"),a=document.querySelector(".nm"),i=document.querySelector(".cc"),s=document.querySelector(".rs"),u=document.querySelector(".cp"),S=document.querySelector(".ixi"),p=document.querySelector(".boxInfantil__content"),g=document.querySelector(".boxFamiliar__content");T=a,q=i,r&&c?fetch(`/api/afiliado/${r}/${c}`).then(l=>l.json()).then(l=>{const n=l.afiliados,d=l.infantilTipo1,v=d.VALOR.split(", "),o=l.familairTipo2,e=o.VALOR.split(", ");p.innerHTML="",g.innerHTML="",l.status&&(a.innerText=n.Matricula,i.innerText=n.CodigoCCB,s.innerText=n.RazonSocial,u.innerText=n.CantidadPasaportes,S.innerText=n.Id_Afiliado,A(d,v,p,"passInf"),A(o,e,g,"passFam"))}):window.location.href="/"}function A(r,c,a,i){a.innerHTML+=`
        <div class="boxInfantil__content--single"><strong>${r.NOMBRE}</strong></div>
    `,c.forEach(s=>{a.innerHTML+=`
            <div class="boxInfantil__content--single">${s}</div>
        `}),a.innerHTML+=`
        <div class="boxInfantil__content--single">Cant. pasaporte <input type="number" class="valAprovNum valid2" id="${i}"></div>
    `}function _(r,c,a,i,s,u,S,p,g,l,n){new FormData;const d={Id_Afiliados:4,CantidadFamiliar:c,CantidadInfantil:a,test:i,Documento:s,Matricula:u,Celular:S,Email:p,CodigoRedencion:g,Utilidad:l,Hogar:n},v=document.querySelector('meta[name="csrf-token"]').getAttribute("content");$.ajax({url:"/api/guardarInscritos",method:"POST",data:d,haders:{"Content-type":"application/json","X-CSRF-TOKEN":v},success:function(o){console.log("Datos enviados correctamente",o),o.message==="Registro creado correctamente"?window.location.href="/pdf":window.location.href="/"},error:function(o,e,f){console.error("Error al enviar datos:",f)}})}
