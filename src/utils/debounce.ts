export function debounce<T extends Function>(func: T, delay: number): (...args: any[]) => void {
  let timerId:any
  return function (this: any, ...args: any[]) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
