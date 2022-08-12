{/* 

in HTML make theme toggler and give below funtions onclick

cut paste below link in the head of your html and make the same css file by giving css in each file

<link rel="stylesheet" href="Color-1.css" class="alternate-Style" title="Color-1" disabled>
<link rel="stylesheet" href="Color-2.css" class="alternate-Style" title="Color-2" disabled>
<link rel="stylesheet" href="Color-3.css" class="alternate-Style" title="Color-3" disabled>
<link rel="stylesheet" href="Color-4.css" class="alternate-Style" title="Color-4" disabled>
<link rel="stylesheet" href="Color-5.css" class="alternate-Style" title="Color-5" disabled> */}



const AlternateStyle=document.querySelectorAll(".alternate-Style")

  {/* agr opr onclick function k parameter mei jo color dia gya hai agr wh braber hai title wale attribute mei jo color hai uske, to condition run ho */}
    const SetTheme = (color) => {
        AlternateStyle.forEach((style) =>{
            if (color === style.getAttribute("title")){
                style.removeAttribute("disabled");
            }
            else{
                style.setAttribute("disabled" ,true );
            }
        })
    }

    
    {/* // const palette=document.getElementsByClassName(".colorpalette") */}
    const themebtn=document.querySelector(".coloricon");
    themebtn.addEventListener("click" , () => {
        document.querySelector(".themeContainer").classList.toggle("open")
    })

    window.addEventListener("scroll" , () => {
        if(document.querySelector(".themeContainer").classList.contains("open")){
            document.querySelector(".themeContainer").classList.remove("open")
        }
        
    })
    


