// COUNTERS

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const target = +counter.dataset.target;

  let count = 0;

  const update = () => {

    const increment = target / 80;

    if(count < target){

      count += increment;

      counter.innerText = Math.floor(count);

      requestAnimationFrame(update);

    }else{

      counter.innerText = target + "+";

    }

  };

  update();

});


// CUSTOM CURSOR

const cursor = document.createElement("div");
cursor.classList.add("cursor");

const blur = document.createElement("div");
blur.classList.add("cursor-blur");

document.body.appendChild(cursor);
document.body.appendChild(blur);

document.addEventListener("mousemove",(e)=>{

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  blur.style.left = e.clientX + "px";
  blur.style.top = e.clientY + "px";

});


// CARD HOVER EFFECT

const cards = document.querySelectorAll(
".project-card,.service-card,.stat"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

blur.style.width="120px";
blur.style.height="120px";

});

card.addEventListener("mouseleave",()=>{

blur.style.width="60px";
blur.style.height="60px";

});

});


// REVEAL ANIMATION

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll(
".stat,.project-card,.service-card"
).forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition=".8s";

observer.observe(el);

});
