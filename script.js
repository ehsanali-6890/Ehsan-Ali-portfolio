document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
      const increment = target / 80;

      if (count < target) {
        count += increment;
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
});
