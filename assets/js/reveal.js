const scrollOffset = 0.75;
const scrollElements = document.querySelectorAll(".hidden-element");
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) * offset)
  );
};
const displayScrollElement = () => {
  scrollElements.forEach((el)=> {
    el.classList.add('reveal');
  })
}
const hideScrollElement = () => {
  scrollElements.forEach((el)=> {
    el.classList.remove('reveal');
  })
}
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 0.75)) {
      displayScrollElement(el);

    } else {
      hideScrollElement(el);

    }
  })
}

//initialize throttleTimer as false
let throttleTimer = false;
const throttle = (callback, time) => {
    //don't run the function while throttle timer is true
    if (throttleTimer) return;

    //first set throttle timer to true so the function doesn't run
    throttleTimer = true;

    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
        callback();
        throttleTimer = false;
	}, time);
}
window.addEventListener('scroll', () => {
    throttle(handleScrollAnimation, 250);
  })