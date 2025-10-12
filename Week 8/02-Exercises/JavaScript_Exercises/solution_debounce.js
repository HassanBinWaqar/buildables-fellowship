function debounce(fn, wait) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Example usage
const log = debounce((msg) => console.log('debounced:', msg), 300);
log('hello'); log('world');
