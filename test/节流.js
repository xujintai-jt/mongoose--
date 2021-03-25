
function throttle(fn, delay) {
  let flag = true;
  return function () {
    let context = this
    let arg=arguments
    if (flag) {
      flag = false;
      setTimeout(() => {
        fn.apply(context,arg);
        flag = true;
      }, delay);
    }
  };
}

btn.onclick = throttle(fn1, 2000);
