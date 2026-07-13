const startBtn = document.getElementById("startBtn");
const boarding = document.getElementById("boarding");
const intro = document.querySelector(".intro-card");

const revealBtn = document.getElementById("revealBtn");
const destination = document.getElementById("destination");
const final = document.getElementById("final");


/*
  OTWARCIE BILETU
*/

startBtn.addEventListener("click", () => {

  intro.classList.add("hidden");

  setTimeout(() => {

    boarding.classList.remove("hidden");

  },500);

});



/*
  ODKRYCIE KIERUNKU
*/

revealBtn.addEventListener("click", () => {


  revealBtn.innerHTML = "Searching destination...";

  revealBtn.disabled = true;


  setTimeout(()=>{

    revealBtn.innerHTML = "Decrypting itinerary...";

  },1500);



  setTimeout(()=>{


    destination.innerHTML = "";

    const text = "GENUA 🇮🇹";

    let i = 0;


    const typing = setInterval(()=>{


      destination.innerHTML += text[i];

      i++;


      if(i >= text.length){

        clearInterval(typing);

        showFinal();

      }


    },200);



  },3000);



});





function showFinal(){


 setTimeout(()=>{


  boarding.classList.add("hidden");


  final.classList.remove("hidden");


  createConfetti();


 },1500);



}



/*
  KONFETTI
*/

function createConfetti(){


 const colors=[
 "#e87aa8",
 "#ffd166",
 "#ffffff",
 "#8bd3dd",
 "#b8e0d2"
 ];


 for(let i=0;i<80;i++){


  const piece=document.createElement("div");


  piece.style.position="fixed";
  piece.style.width="10px";
  piece.style.height="10px";

  piece.style.background=
  colors[Math.floor(Math.random()*colors.length)];


  piece.style.left=
  Math.random()*100+"vw";


  piece.style.top="-20px";


  piece.style.borderRadius="50%";


  piece.style.zIndex="10";


  document.body.appendChild(piece);



  const animation =
  piece.animate([

    {
      transform:"translateY(0) rotate(0)",
      opacity:1
    },

    {
      transform:
      `translateY(100vh) rotate(720deg)`,
      opacity:0
    }


  ],{


    duration:
    3000 + Math.random()*2000,


    easing:"ease-out"

  });



  animation.onfinish=()=>{

    piece.remove();

  };


 }


}
