
function deboundce(fn, delay) {
  let timer
  return function () {
    let context = this
    let arg = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, arg)
    }, delay)
  }
}

let resFn = deboundce(fn1, 2000)

btn.onclick = resFn
