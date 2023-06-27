const scrollOffset = 0.75;
const scrollElement = document.querySelector(".hidden-element");
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) * offset)
  );
};
const displayScrollElement = () => {
  scrollElement.classList.add('reveal');
}
const hideScrollElement = () => {
  scrollElement.classList.remove('reveal');
}
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
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