export function debounce (func,dealy) {
  let timer =null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply()
    },dealy)
  }
}