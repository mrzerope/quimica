const body=document.body;
const themeBtn=document.getElementById("themeBtn");
if(localStorage.getItem("theme")==="dark"){body.classList.add("dark");themeBtn.textContent="☀";}
themeBtn.addEventListener("click",()=>{body.classList.toggle("dark");const dark=body.classList.contains("dark");localStorage.setItem("theme",dark?"dark":"light");themeBtn.textContent=dark?"☀":"☾";});

document.querySelectorAll(".topic-title").forEach(btn=>btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open")));

document.getElementById("search").addEventListener("input",e=>{
 const q=e.target.value.toLowerCase().trim();
 document.querySelectorAll(".topic").forEach(t=>t.style.display=(t.innerText+" "+t.dataset.keywords).toLowerCase().includes(q)?"":"none");
});

window.addEventListener("scroll",()=>{
 const max=document.documentElement.scrollHeight-window.innerHeight;
 const v=max>0?Math.round(scrollY/max*100):0;
 document.getElementById("progressBar").style.width=v+"%";
 document.getElementById("progressText").textContent=v+"%";
});

const explanations={
 funciones:`<strong>💡 En sencillo:</strong> piensa que las funciones químicas son “familias” de compuestos que tienen características parecidas.<br><br><strong>Óxido:</strong> oxígeno + otro elemento. <strong>Hidróxido:</strong> contiene OH⁻. <strong>Ácido:</strong> pertenece a una familia de sustancias ácidas. <strong>Sal:</strong> otra familia de compuestos, como NaCl.<br><br><strong>🧠 Truco:</strong> si ves <strong>OH</strong> unido a un metal, piensa primero en hidróxido.`,
 enlaces:`<strong>💡 En sencillo:</strong> un enlace químico es la forma en que los átomos se mantienen unidos.<br><br><strong>Iónico:</strong> piensa en transferencia de electrones y iones. <strong>Covalente:</strong> los átomos comparten electrones. <strong>Metálico:</strong> corresponde a sustancias metálicas.<br><br><strong>🧠 Truco:</strong> “iónico = iones”, “covalente = compartir”.`,
 reacciones:`<strong>💡 En sencillo:</strong> una reacción química es como cambiar las piezas de un juego: tienes <strong>reactivos</strong> y obtienes <strong>productos</strong>.<br><br><strong>Síntesis:</strong> varias sustancias se unen. <strong>Descomposición:</strong> una se separa. <strong>Sustitución simple:</strong> una reemplaza a otra. <strong>Doble sustitución:</strong> dos compuestos intercambian partes.<br><br><strong>🧠 Truco:</strong> primero mira cuántas sustancias entran y cuántas salen.`,
 energia:`<strong>💡 En sencillo:</strong> imagina una reacción como subir una pequeña “cuesta” antes de comenzar. Esa cuesta representa la <strong>energía de activación</strong>.<br><br>Un <strong>catalizador</strong> ayuda a hacer más pequeña esa cuesta. Las <strong>enzimas</strong> son catalizadores biológicos y actúan sobre sustratos en su sitio activo.<br><br><strong>Exotérmica = libera energía.</strong> <strong>Endotérmica = absorbe energía.</strong>`,
 estequiometria:`<strong>💡 En sencillo:</strong> la estequiometría es como una receta. Si la receta dice cuántas “porciones” de cada sustancia necesitas, puedes calcular cuánto producto obtendrás.<br><br>El <strong>reactivo limitante</strong> es el ingrediente que se acaba primero y por eso determina cuánto producto puedes preparar.<br><br><strong>🧠 Ruta:</strong> balancear → pasar a moles → usar la proporción → convertir.`,
 soluciones:`<strong>💡 En sencillo:</strong> imagina agua con sal. La <strong>sal</strong> es el soluto y el <strong>agua</strong> es el solvente. Juntos forman una solución.<br><br>La <strong>molaridad</strong> responde: “¿cuántos moles de soluto hay por cada litro de solución?”.<br><br><strong>🧠 Truco:</strong> M = moles ÷ litros.`,
 agua:`<strong>💡 En sencillo:</strong> el agua no es simplemente “un líquido”: sus moléculas pueden atraerse mediante <strong>puentes de hidrógeno</strong>.<br><br>En su autoionización aparecen H⁺ y OH⁻. Un aumento de H⁺ se relaciona con mayor acidez; un aumento relativo de OH⁻, con mayor basicidad.`,
 acidos:`<strong>💡 En sencillo:</strong> piensa en un protón H⁺ como una pequeña “pelota” que puede transferirse.<br><br>Para <strong>Brønsted–Lowry</strong>, el ácido <strong>entrega</strong> el protón y la base lo <strong>recibe</strong>.<br><br><strong>🧠 Truco:</strong> Ácido = da H⁺ · Base = acepta H⁺.`
};

document.querySelectorAll(".explain-btn").forEach(btn=>{
 btn.addEventListener("click",()=>{
  const box=document.getElementById("exp-"+btn.dataset.explain);
  box.innerHTML=explanations[btn.dataset.explain];
  box.classList.toggle("show");
  btn.textContent=box.classList.contains("show")?"🙈 Ocultar explicación":"💡 Explícame esto de forma sencilla";
 });
});

const questions=[
["¿Cuál de los siguientes compuestos corresponde a un óxido básico?",["CO₂","CaO","H₂SO₄","NaOH"],1,"CaO corresponde a un óxido básico."],
["¿Cuál de los siguientes compuestos es un hidróxido?",["HCl","NaOH","CO₂","H₂SO₄"],1,"NaOH contiene el grupo OH⁻ y corresponde a un hidróxido."],
["H₂SO₄ corresponde a:",["Hidruro","Hidróxido","Oxácido","Sal"],2,"H₂SO₄ es un oxácido."],
["¿Cuál es la fórmula del ácido clorhídrico?",["HCl","HClO","H₂Cl","ClOH"],0,"La fórmula indicada en la práctica es HCl."],
["¿Cuál corresponde a una sal?",["NaOH","HCl","NaCl","CO₂"],2,"NaCl corresponde a una sal."],
["Dos o más sustancias forman un solo producto. Es una reacción de:",["Descomposición","Síntesis","Sustitución simple","Combustión"],1,"A + B → AB representa síntesis."],
["CaCO₃ → CaO + CO₂ corresponde a:",["Síntesis","Descomposición","Sustitución simple","Doble sustitución"],1,"Un compuesto se separa en sustancias más simples."],
["Zn + 2HCl → ZnCl₂ + H₂ corresponde a:",["Síntesis","Descomposición","Sustitución simple","Doble sustitución"],2,"El Zn desplaza al H del compuesto: sustitución simple."],
["AgNO₃ + NaCl → AgCl + NaNO₃ es:",["Doble sustitución","Síntesis","Combustión","Descomposición"],0,"Los compuestos intercambian partes: doble sustitución."],
["Ácido + base → sal + agua es una reacción de:",["Combustión","Neutralización","Descomposición","Oxidación"],1,"La práctica identifica esta reacción como neutralización."],
["Una reacción que libera energía hacia el ambiente es:",["Endotérmica","Exotérmica","Isotérmica","Catalítica"],1,"Exotérmica significa liberación de energía al ambiente."],
["Una reacción que absorbe energía del ambiente es:",["Exotérmica","Endotérmica","Redox","Síntesis"],1,"Endotérmica significa absorción de energía del ambiente."],
["Las enzimas son principalmente:",["Lípidos","Proteínas con función catalítica","Sales minerales","Carbohidratos"],1,"La práctica las identifica principalmente como proteínas con función catalítica."],
["La región de la enzima donde se une el sustrato se llama:",["Centro nuclear","Sitio activo","Grupo fosfato","Cadena lateral"],1,"El sitio activo es la región específica de unión del sustrato."],
["Una función fundamental de las enzimas es:",["Aumentar la energía de activación","Disminuir la energía de activación","Consumir todos los reactivos","Cambiar permanentemente el equilibrio"],1,"Los catalizadores disminuyen la energía de activación."],
["Un mol de cualquier sustancia contiene aproximadamente:",["6,022 × 10²³ partículas","6,022 × 10¹² partículas","3,011 × 10²³ partículas","9,81 × 10²³ partículas"],0,"Un mol corresponde aproximadamente a 6,022 × 10²³ partículas."],
["La masa molar aproximada del H₂O es:",["16 g/mol","17 g/mol","18 g/mol","20 g/mol"],2,"H₂O tiene una masa molar aproximada de 18 g/mol."],
["El reactivo que determina la cantidad máxima de producto es:",["Reactivo en exceso","Catalizador","Reactivo limitante","Solvente"],2,"El reactivo limitante determina la cantidad máxima de producto."],
["Una solución está formada por:",["Solamente solvente","Soluto y solvente","Dos solutos exclusivamente","Precipitado y solvente"],1,"La práctica define una solución como soluto + solvente."],
["La molaridad se expresa como:",["g de soluto/kg de solución","moles de soluto/L de solución","g de solvente/L de solución","moles de solvente/L de solución"],1,"M = moles de soluto por litro de solución."],
["La fórmula de molaridad es:",["M = V/n","M = n/V","M = m×V","M = MM/n"],1,"M = n/V."],
["¿Qué fórmula relaciona una dilución?",["M + V = M₂ + V₂","M₁V₁ = M₂V₂","n = m/MM","N = θM"],1,"Para una dilución de la misma sustancia se utiliza M₁V₁ = M₂V₂."],
["¿Qué fórmula relaciona moles, masa y masa molar?",["n = m/MM","M = n/V","N = θM","M₁V₁ = M₂V₂"],0,"n = m/MM."],
["¿Qué ley debe respetar el balanceo químico?",["Ley de conservación de la masa","Ley de Boyle","Ley de Ohm","Ley de Charles"],0,"El balanceo respeta la conservación de los átomos/materia."],
["La energía mínima necesaria para que ocurra una reacción es:",["Energía de activación","Energía molar","Energía de solución","Energía térmica total"],0,"Se denomina energía de activación."],
["Las sustancias sobre las que actúan las enzimas se llaman:",["Productos","Sustratos","Solventes","Catalizadores"],1,"Las enzimas actúan sobre sustratos."],
["El lugar específico donde se une el sustrato es:",["Sitio activo","Núcleo","Grupo fosfato","Solvente"],0,"Se denomina sitio activo."],
["En una solución, la sustancia generalmente presente en mayor proporción es:",["Soluto","Solvente","Catalizador","Producto"],1,"El solvente suele estar en mayor proporción."],
["% m/m relaciona:",["masa de soluto/masa de solución","moles/volumen","volumen/masa","masa de solvente/moles"],0,"% m/m = masa de soluto / masa de solución × 100."],
["N = θ × M corresponde a:",["Normalidad","Molaridad","Masa molar","Porcentaje"],0,"La sesión de soluciones presenta la relación N = θ × M."],
["HCl se clasifica como:",["Óxido","Hidróxido","Ácido hidrácido","Sal"],2,"HCl es un ácido hidrácido."],
["Na₂CO₃ es:",["Óxido básico","Hidróxido","Oxácido","Sal"],3,"Na₂CO₃ es carbonato de sodio, una sal."],
["CO₂ es:",["Óxido ácido","Hidróxido","Sal","Ácido hidrácido"],0,"CO₂ es un óxido ácido."],
["CaO se denomina:",["Óxido de calcio","Hidróxido de calcio","Ácido cálcico","Carbonato de calcio"],0,"CaO corresponde a óxido de calcio."],
["NaOH se denomina:",["Óxido de sodio","Hidróxido de sodio","Ácido de sodio","Cloruro de sodio"],1,"NaOH corresponde a hidróxido de sodio."],
["Fe₂O₃, en Stock, es:",["Óxido de hierro (II)","Óxido de hierro (III)","Dióxido de hierro","Óxido ferroso"],1,"El material presenta Fe₂O₃ como óxido de hierro (III)."],
["Cl₂O₅, en sistemática, es:",["Óxido de cloro","Pentaóxido de dicloro","Pentóxido de cloro","Cloruro de oxígeno"],1,"El ejemplo de la sesión es pentaóxido de dicloro."],
["CuO, en Stock, es:",["Óxido de cobre (I)","Óxido de cobre (II)","Monóxido de cobre (III)","Óxido cúprico (III)"],1,"El ejemplo de la sesión es óxido de cobre (II)."],
["La reacción A + B → AB es:",["Síntesis","Descomposición","Sustitución simple","Doble sustitución"],0,"Dos reactivos forman un producto."],
["La reacción AB → A + B es:",["Síntesis","Descomposición","Combustión","Neutralización"],1,"Un compuesto se separa."],
["La reacción A + BC → AC + B es:",["Doble sustitución","Sustitución simple","Síntesis","Descomposición"],1,"Un elemento desplaza a otro."],
["AB + CD → AD + CB representa:",["Síntesis","Descomposición","Doble sustitución","Combustión"],2,"Los dos compuestos intercambian partes."],
["Hidrocarburo + O₂ → CO₂ + H₂O es:",["Combustión","Síntesis","Descomposición","Doble sustitución"],0,"Es el patrón general de combustión presentado en la práctica."],
["Una reacción endotérmica:",["Libera energía","Absorbe energía","No intercambia energía","Siempre produce agua"],1,"Una reacción endotérmica absorbe energía del entorno."],
["Una reacción exotérmica:",["Absorbe energía","Libera energía","Siempre es una combustión","No necesita energía de activación"],1,"Una reacción exotérmica libera energía al ambiente."],
["Las enzimas pueden acelerar reacciones sin:",["Consumirse permanentemente","Tener sustrato","Tener sitio activo","Interactuar con reactivos"],0,"La práctica indica que no se consumen permanentemente en la reacción."],
["El pH puede modificar:",["La actividad de muchas enzimas","La masa molar","El número de Avogadro","La fórmula de NaCl"],0,"La práctica indica que el pH puede modificar la actividad de muchas enzimas."],
["La autoionización del agua considera:",["H⁺ y OH⁻","Na⁺ y Cl⁻","Ca²⁺ y CO₃²⁻","Fe³⁺ y O²⁻"],0,"En el material de agua se consideran H⁺ y OH⁻."],
["Los puentes de hidrógeno en agua se forman entre moléculas debido a la atracción asociada a:",["H y O","Na y Cl","Ca y C","Fe y S"],0,"El material destaca la interacción del H parcialmente positivo con O electronegativo."],
["En Brønsted–Lowry, un ácido es:",["Aceptor de protones","Donador de protones","Siempre un metal","Siempre un óxido"],1,"Ácido = donador de protones."],
["En Brønsted–Lowry, una base es:",["Donadora de protones","Aceptora de protones","Siempre un ácido","Siempre una sal"],1,"Base = aceptora de protones."],
["Una reacción entre ácido y base que forma sal y agua se denomina:",["Neutralización","Combustión","Síntesis","Descomposición"],0,"Es una neutralización."],
["Si aumenta H⁺ en el agua, el medio se desplaza hacia:",["Mayor acidez","Mayor basicidad","Neutralidad obligatoria","Mayor masa"],0,"El material relaciona aumento de H⁺ con mayor acidez."],
["Si aumenta OH⁻ respecto de H⁺, el medio se desplaza hacia:",["Mayor acidez","Mayor basicidad","Combustión","Neutralización obligatoria"],1,"El material relaciona aumento de OH⁻ con mayor basicidad."],
["En una solución de 8 g KCl + 42 g agua, la masa de solución es:",["42 g","8 g","50 g","34 g"],2,"8 + 42 = 50 g."],
["La masa molar se expresa normalmente en:",["g/mol","mol/L","L/mol","g/L únicamente"],0,"La unidad habitual de masa molar es g/mol."],
["Para resolver un problema de estequiometría primero conviene:",["Balancear la ecuación","Ignorar la ecuación","Cambiar los productos","Eliminar el reactivo limitante"],0,"La ruta de estudio propone comenzar balanceando la ecuación."],
["¿Qué componente de una solución es la sustancia disuelta?",["Soluto","Solvente","Producto","Catalizador"],0,"El soluto es la sustancia disuelta."],
["¿Qué componente de una solución suele estar en mayor proporción?",["Soluto","Solvente","Reactivo limitante","Catalizador"],1,"Generalmente, el solvente está en mayor proporción."],
["¿Qué número representa aproximadamente la cantidad de partículas de un mol?",["6,022 × 10²³","9,81 × 10²","3,14 × 10⁵","1,602 × 10⁻¹⁹"],0,"Es el número de Avogadro, aproximadamente 6,022 × 10²³."]
];

let currentQuiz=[],attempt=0,answered=false,timerInterval=null,secondsLeft=600;

function shuffle(a){return [...a].sort(()=>Math.random()-0.5);}
function generateQuiz(){
 attempt++;
 answered=false;
 currentQuiz=shuffle(questions).slice(0,10);
 const form=document.getElementById("quizForm");
 form.innerHTML="";
 currentQuiz.forEach((q,i)=>{
  const opts=shuffle(q[1].map((text,index)=>({text,index})));
  const div=document.createElement("div");
  div.className="question";
  div.dataset.correct=q[2];
  div.innerHTML=`<p><b>${i+1}.</b> ${q[0]}</p>`+
    opts.map(o=>`<label><input type="radio" name="q${i}" value="${o.index}"> ${o.text}</label>`).join("")+
    `<div class="answer-note"></div>`;
  form.appendChild(div);
 });
 document.getElementById("attempt").textContent=`Intento ${attempt}`;
 document.getElementById("score").textContent="0/10";
 document.getElementById("quizResult").textContent="";
 startTimerIfNeeded();
 document.getElementById("quiz").scrollIntoView({behavior:"smooth"});
}

function startTimerIfNeeded(){
 clearInterval(timerInterval);
 document.getElementById("timer").textContent="";
 if(!document.getElementById("timerToggle").checked)return;
 secondsLeft=600;
 updateTimer();
 timerInterval=setInterval(()=>{
  secondsLeft--;
  updateTimer();
  if(secondsLeft<=0){clearInterval(timerInterval);checkQuiz(true);}
 },1000);
}
function updateTimer(){
 const m=String(Math.floor(secondsLeft/60)).padStart(2,"0"),s=String(secondsLeft%60).padStart(2,"0");
 document.getElementById("timer").textContent=`Tiempo: ${m}:${s}`;
}
function checkQuiz(auto=false){
 if(answered)return;
 let score=0,blank=0;
 document.querySelectorAll(".question").forEach((card,i)=>{
  const selected=card.querySelector(`input[name="q${i}"]:checked`);
  card.classList.remove("correct","incorrect","answered");
  if(!selected){blank++;return;}
  const actual=Number(selected.value);
  const q=currentQuiz[i];
  card.classList.add("answered");
  const note=card.querySelector(".answer-note");
  if(actual===q[2]){score++;card.classList.add("correct");note.innerHTML="✅ <strong>Correcta.</strong> "+q[3];}
  else{card.classList.add("incorrect");note.innerHTML=`❌ <strong>Incorrecta.</strong> La respuesta correcta es: <strong>${q[1][q[2]]}</strong>. ${q[3]}`;}
 });
 answered=true;clearInterval(timerInterval);
 document.getElementById("score").textContent=`${score}/10`;
 document.getElementById("quizResult").textContent=auto?`⏰ Tiempo terminado. Resultado: ${score}/10.`:`Resultado: ${score}/10${blank?` · ${blank} sin responder`:""}.`;
}
document.getElementById("newQuiz").addEventListener("click",generateQuiz);
document.getElementById("retryQuiz").addEventListener("click",generateQuiz);
document.getElementById("checkQuiz").addEventListener("click",()=>checkQuiz(false));
document.getElementById("timerToggle").addEventListener("change",startTimerIfNeeded);
generateQuiz();
