
const ShowIntro = () => {   
    const IntroContainer=document.querySelector(".intro");

    setTimeout(() => {
                IntroContainer.classList.add("fading")
            }, 4000) 

}

const RemoveIntro = () => {
    const IntroContainer=document.querySelector(".intro");
    IntroContainer.style.display="none"; 
}

const FirstVisit = sessionStorage.getItem('visited');
if (FirstVisit == null) {
    ShowIntro();
    sessionStorage.setItem('visited',1)
} else {
    RemoveIntro();
}