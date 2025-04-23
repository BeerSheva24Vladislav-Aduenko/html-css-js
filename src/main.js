function calculate(el) {
  const parent = el.parentElement;  
  const base = parent.querySelector(".number").textContent;
  const exponent = parent.querySelector(".power").textContent;
  const result = Math.pow(base, exponent);
  parent.querySelector(".result").textContent = result;
}