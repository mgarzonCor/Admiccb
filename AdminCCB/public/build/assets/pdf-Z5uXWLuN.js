let v=window.innerWidth;document.addEventListener("DOMContentLoaded",e=>{P(),D(),setTimeout(()=>{const n=localStorage.getItem("5baa61e4werg"),c=document.body;if(v<=767){const s={filename:`${n}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"letter",orientation:"portrait"}};html2pdf().set(s).from(c).save()}else{const{jsPDF:s}=window.jspdf;html2canvas(document.body,{onrendered:function(d){var m=d.toDataURL("image/png"),o=new s("p","mm","letter"),i=o.internal.pageSize.getWidth(),r=o.internal.pageSize.getHeight();o.addImage(m,"PNG",0,0,i,r),o.save("te1st1.pdf"),console.log("PDF generated successfully.")}})}},1500)});function D(){const e=new Date,n=e.getFullYear(),c=("0"+(e.getMonth()+1)).slice(-2),s=("0"+e.getDate()).slice(-2),d=("0"+e.getHours()).slice(-2),m=("0"+e.getMinutes()).slice(-2),o=("0"+e.getSeconds()).slice(-2),i=s+"-"+c+"-"+n+" "+d+":"+m+":"+o,r=document.querySelector("#date");r.innerHTML=i}function P(){const e=localStorage.getItem("5baa61e4"),n=localStorage.getItem("7f83b1657ff1fc53"),c=localStorage.getItem("5baa61e4werg"),s=document.querySelector(".setmat"),d=document.querySelector(".setccb"),m=document.querySelector(".setdoc"),o=document.querySelector(".tableAtracciones--body"),i=document.querySelector(".tablePasaportes--body"),r=document.querySelector(".listCombos"),h=document.querySelector(".cantPassText"),p=document.querySelector(".nav__desc");e&&n&&c?fetch(`/api/construirPdf/${e}/${n}/${c}`).then(a=>a.json()).then(a=>{const l=a.afiliados,C=a.combos,u=a.familairTipo2,f=a.infantilTipo1,L=a.inscritos,S=a.pasaportes;s.innerHTML=l.Matricula,d.innerHTML=l.CodigoCCB,m.innerHTML=L.Documento,h.innerHTML=l.CantidadPasaportes,l.Afiliado?p.innerHTML="FELICITACIONES Sr (a) Afiliado(a)":p.innerHTML=`¡FELICITACIONES!
                <span><br>REGISTRO PROCESADO CON ÉXITO</span>`,o.innerHTML="",o.innerHTML+=`
                <div class="tableAtracciones--body--single">
                    <p class="body1">${u.NOMBRE}</p>
                    <p class="body2">${u.VALOR}</p>
                </div>
                <div class="tableAtracciones--body--single">
                    <p class="body1">${f.NOMBRE}</p>
                    <p class="body2">${f.VALOR}</p>
                </div>
            `,i.innerHTML="",S.forEach(t=>{const g=t.Pasaporte.split(" "),H=t.Valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");i.innerHTML+=`
                    <div class="tablePasaportes--body--single">
                        <p class="body1">${g[1]}     </p>
                        <p class="body2">${t.Atracciones}</p>
                        <p class="body3">${t.Descuento}</p>
                        <p class="body4">$ ${H}</p>
                    </div>
                `}),r.innerHTML="",C.forEach(t=>{let g="";t.Descuento!="0%"&&(g="("+t.Descuento+" de descuento):"),r.innerHTML+=`
                    <li class="listCombos--single"><strong>${t.Pasaporte} ${g}</strong> ${t.Valor?"":t.Valor}</li>
                `});var T=document.getElementById("qrcode");const M=l.Matricula+l.CodigoCCB;let b=100,y=100;v<=767&&(b=80,y=80),new QRCode(T,{text:M,width:b,height:y,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H})}):window.location.href="/"}
