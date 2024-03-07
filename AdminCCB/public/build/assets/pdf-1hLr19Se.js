let v=window.innerWidth;document.addEventListener("DOMContentLoaded",e=>{P(),D(),setTimeout(()=>{const s=localStorage.getItem("5baa61e4werg"),c=document.body;if(v<=767){const n={filename:`${s}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"letter",orientation:"portrait"}};html2pdf().set(n).from(c).save()}else{const{jsPDF:n}=window.jspdf;html2canvas(document.body,{onrendered:function(d){var m=d.toDataURL("image/png"),o=new n("p","mm","letter"),i=o.internal.pageSize.getWidth(),r=o.internal.pageSize.getHeight();o.addImage(m,"JPEG",0,0,i,r),o.save(`${s}.pdf`),console.log("PDF generated successfully.")}})}},1500)});function D(){const e=new Date,s=e.getFullYear(),c=("0"+(e.getMonth()+1)).slice(-2),n=("0"+e.getDate()).slice(-2),d=("0"+e.getHours()).slice(-2),m=("0"+e.getMinutes()).slice(-2),o=("0"+e.getSeconds()).slice(-2),i=n+"-"+c+"-"+s+" "+d+":"+m+":"+o,r=document.querySelector("#date");r.innerHTML=i}function P(){const e=localStorage.getItem("5baa61e4"),s=localStorage.getItem("7f83b1657ff1fc53"),c=localStorage.getItem("5baa61e4werg"),n=document.querySelector(".setmat"),d=document.querySelector(".setccb"),m=document.querySelector(".setdoc"),o=document.querySelector(".tableAtracciones--body"),i=document.querySelector(".tablePasaportes--body"),r=document.querySelector(".listCombos"),h=document.querySelector(".cantPassText"),g=document.querySelector(".nav__desc"),L=document.querySelector(".boxCombos__afiliados");e&&s&&c?fetch(`/api/construirPdf/${e}/${s}/${c}`).then(a=>a.json()).then(a=>{const l=a.afiliados,C=a.combos,f=a.familairTipo2,p=a.infantilTipo1,S=a.inscritos,M=a.pasaportes;n.innerHTML=l.Matricula,d.innerHTML=l.CodigoCCB,m.innerHTML=S.Documento,h.innerHTML=l.CantidadPasaportes,l.Afiliado==0?g.innerHTML="FELICITACIONES Sr(a) Empresario (a)":(g.innerHTML="¡Felicitaciones!  Sr (a) Afiliado(a)",L.classList.add("active")),o.innerHTML="",o.innerHTML+=`
                <div class="tableAtracciones--body--single">
                    <p class="body1">${f.NOMBRE}</p>
                    <p class="body2">${f.VALOR}</p>
                </div>
                <div class="tableAtracciones--body--single">
                    <p class="body1">${p.NOMBRE}</p>
                    <p class="body2">${p.VALOR}</p>
                </div>
            `,i.innerHTML="",M.forEach(t=>{const u=t.Pasaporte.split(" "),$=t.Valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");i.innerHTML+=`
                    <div class="tablePasaportes--body--single">
                        <p class="body1">${u[1]}     </p>
                        <p class="body2">${t.Atracciones}</p>
                        <p class="body3">${t.Descuento}</p>
                        <p class="body4">$ ${$}</p>
                    </div>
                `}),r.innerHTML="",C.forEach(t=>{let u="";t.Descuento!="0%"&&(u="("+t.Descuento+" de descuento):"),r.innerHTML+=`
                    <li class="listCombos--single"><strong>${t.Pasaporte} ${u}</strong> ${t.Valor?"":t.Valor}</li>
                `});var T=document.getElementById("qrcode");const H=l.Matricula+l.CodigoCCB;let b=100,y=100;v<=767&&(b=80,y=80),new QRCode(T,{text:H,width:b,height:y,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H})}):window.location.href="/"}
