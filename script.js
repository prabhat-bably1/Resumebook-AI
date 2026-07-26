/*=========================================
 ResumeBook AI
 script.js
 Complete Final Version
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==============================
      Smooth Fade Animation
    ==============================*/

    const elements = document.querySelectorAll(
        "section,.project,.edu-box,.skill,.left-section,.profile,.signature"
    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    elements.forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

    /*==============================
      Skill Bar Animation
    ==============================*/

    const fills=document.querySelectorAll(".fill");

    fills.forEach(fill=>{

        const width=fill.style.width || window.getComputedStyle(fill).width;

        fill.style.width="0";

        setTimeout(()=>{

            fill.style.width=width;

            fill.style.transition="2s ease";

        },400);

    });

    /*==============================
      Typing Effect
    ==============================*/

    const title=document.querySelector(".header h3");

    if(title){

        const text=title.innerText;

        title.innerHTML="";

        let i=0;

        function typing(){

            if(i<text.length){

                title.innerHTML+=text.charAt(i);

                i++;

                setTimeout(typing,45);

            }

        }

        typing();

    }

    /*==============================
      Active Navigation
    ==============================*/

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")=="#"+current){

                link.classList.add("active");

            }

        });

    });

    /*==============================
      Image Hover Effect
    ==============================*/

    const image=document.querySelector(".profile img");

    if(image){

        image.addEventListener("mouseenter",()=>{

            image.style.transform="scale(1.05) rotate(-2deg)";

            image.style.transition=".4s";

        });

        image.addEventListener("mouseleave",()=>{

            image.style.transform="scale(1)";

        });

    }

    /*==============================
      Project Hover
    ==============================*/

    const projects=document.querySelectorAll(".project");

    projects.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateX(10px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateX(0px)";

        });

    });

    /*==============================
      Scroll Progress Bar
    ==============================*/

    const progress=document.createElement("div");

    progress.id="progress-bar";

    document.body.appendChild(progress);

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const current=(window.scrollY/total)*100;

        progress.style.width=current+"%";

    });

    /*==============================
      Back To Top Button
    ==============================*/

    const topBtn=document.createElement("button");

    topBtn.innerHTML="↑";

    topBtn.id="topBtn";

    document.body.appendChild(topBtn);

    topBtn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    window.addEventListener("scroll",()=>{

        if(window.scrollY>350){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    });

    /*==============================
      Current Year
    ==============================*/

    const year=document.querySelector(".year");

    if(year){

        year.innerHTML=new Date().getFullYear();

    }

    console.log("ResumeBook AI Loaded Successfully");

});
