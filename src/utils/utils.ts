
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}
export function _stylingElement(progressEl, value){
  if(value){
    value.forEach(element => {
      progressEl.shadowRoot.querySelector(`${element.selector}`).setAttribute("style", `${element.style}`);
    });
  }
}
