let C=window.innerWidth;document.addEventListener("DOMContentLoaded",e=>{I(),$(),setTimeout(()=>{const s=localStorage.getItem("5baa61e4werg"),n=document.body;if(C<=767){const o={filename:"test1.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"letter",orientation:"portrait"}};html2pdf().set(o).from(n).save()}else{const o=new jsPDF("p","mm","letter",!0,!0,1,2);o.addHTML(document.body,function(){o.save(`${s}.pdf`)})}},1500)});function $(){const e=new Date,s=e.getFullYear(),n=("0"+(e.getMonth()+1)).slice(-2),o=("0"+e.getDate()).slice(-2),m=("0"+e.getHours()).slice(-2),u=("0"+e.getMinutes()).slice(-2),r=("0"+e.getSeconds()).slice(-2),i=o+"-"+n+"-"+s+" "+m+":"+u+":"+r,l=document.querySelector("#date");l.innerHTML=i}function I(){const e=localStorage.getItem("5baa61e4"),s=localStorage.getItem("7f83b1657ff1fc53"),n=localStorage.getItem("5baa61e4werg"),o=document.querySelector(".setmat"),m=document.querySelector(".setccb"),u=document.querySelector(".setdoc"),r=document.querySelector(".tableAtracciones--body"),i=document.querySelector(".tablePasaportes--body"),l=document.querySelector(".listCombos"),L=document.querySelector(".cantPassText"),p=document.querySelector(".nav__desc");e&&s&&n?fetch(`/api/construirPdf/${e}/${s}/${n}`).then(a=>a.json()).then(a=>{const c=a.afiliados,T=a.combos,f=a.familairTipo2,g=a.infantilTipo1,v=a.inscritos,M=a.pasaportes;o.innerHTML=c.Matricula,m.innerHTML=c.CodigoCCB,u.innerHTML=v.Documento,L.innerHTML=c.CantidadPasaportes,c.Afiliado?p.innerHTML="FELICITACIONES Sr(a) empresario (a)":p.innerHTML=`¡FELICITACIONES!
                <span><br>REGISTRO PROCESADO CON ÉXITO</span>`,r.innerHTML="",r.innerHTML+=`
                <div class="tableAtracciones--body--single">
                    <p class="body1">${f.NOMBRE}</p>
                    <p class="body2">${f.VALOR}</p>
                </div>
                <div class="tableAtracciones--body--single">
                    <p class="body1">${g.NOMBRE}</p>
                    <p class="body2">${g.VALOR}</p>
                </div>
            `,i.innerHTML="",M.forEach(t=>{const d=t.Pasaporte.split(" "),H=t.Valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");i.innerHTML+=`
                    <div class="tablePasaportes--body--single">
                        <p class="body1">${d[1]}     </p>
                        <p class="body2">${t.Atracciones}</p>
                        <p class="body3">${t.Descuento}</p>
                        <p class="body4">$ ${H}</p>
                    </div>
                `}),l.innerHTML="",T.forEach(t=>{let d="";t.Descuento!="0%"&&(d="("+t.Descuento+" de descuento):"),l.innerHTML+=`
                    <li class="listCombos--single"><strong>${t.Pasaporte} ${d}</strong> ${t.Valor?"":t.Valor}</li>
                `});var h=document.getElementById("qrcode");const S=c.Matricula+c.CodigoCCB;let b=100,y=100;C<=767&&(b=80,y=80),new QRCode(h,{text:S,width:b,height:y,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H})}):window.location.href="/"}
