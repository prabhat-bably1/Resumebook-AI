const code = [
"const developer = {",
"  name: 'Prabhat Ranjan Seth',",
"  role: 'Web Developer',",
"  skills: ['HTML','CSS','JavaScript'],",
"  experience: '5 Years',",
"};",
"",
"function solveProblem(){",
"   return 'Always Learning';",
"}",
"",
"git init",
"git add .",
"git commit -m 'ResumeBook AI'",
"git push origin main",
"",
"npm install",
"npm run dev",
"",
"console.log('Welcome to ResumeBook AI');",
"",
"<html>",
"<head>",
"<body>",
"</body>",
"</html>"
];

const bg = document.createElement("div");
bg.id = "code-background";
document.body.appendChild(bg);

for(let i=0;i<35;i++){

const line=document.createElement("div");

line.className="code-line";

line.innerText=code[Math.floor(Math.random()*code.length)];

line.style.left=Math.random()*100+"vw";

line.style.animationDuration=(20+Math.random()*15)+"s";

line.style.animationDelay=Math.random()*10+"s";

bg.appendChild(line);

}
