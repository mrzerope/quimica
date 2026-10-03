const body=document.body;
const themeBtn=document.getElementById("themeBtn");
const savedTheme=localStorage.getItem("theme");
if(savedTheme==="dark"){body.classList.add("dark");themeBtn.textContent="☀";}
themeBtn.addEventListener("click",()=>{
  body.classList.toggle("dark");
  const dark=body.classList.contains("dark");
  localStorage.setItem("theme",dark?"dark":"light");
  themeBtn.textContent=dark?"☀":"☾";
});

document.querySelectorAll(".topic-title").forEach(btn=>{
  btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open"));
});

const search=document.getElementById("search");
search.addEventListener("input",()=>{
  const q=search.value.toLowerCase().trim();
  document.querySelectorAll(".topic").forEach(topic=>{
    const text=(topic.innerText+" "+topic.dataset.keywords).toLowerCase();
    topic.style.display=text.includes(q)?"":"none";
  });
});

function updateProgress(){
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const value=max>0?Math.round((window.scrollY/max)*100):0;
  document.getElementById("progressBar").style.width=value+"%";
  document.getElementById("progressText").textContent=value+"%";
}
window.addEventListener("scroll",updateProgress);
updateProgress();

const answers={q1:"b",q2:"b",q3:"b",q4:"a",q5:"b",q6:"a",q7:"a",q8:"b",q9:"c",q10:"b"};
document.getElementById("checkQuiz").addEventListener("click",()=>{
  let score=0, unanswered=0;
  Object.entries(answers).forEach(([q,a])=>{
    const selected=document.querySelector(`input[name="${q}"]:checked`);
    if(!selected){unanswered++;return;}
    if(selected.value===a)score++;
  });
  document.getElementById("score").textContent=`${score}/10`;
  const result=document.getElementById("quizResult");
  result.textContent=unanswered
    ? `Resultado: ${score}/10. Te faltan ${unanswered} pregunta(s) por responder.`
    : `Resultado: ${score}/10. Revisa las secciones de los temas que todavía te cuesten.`;
});
