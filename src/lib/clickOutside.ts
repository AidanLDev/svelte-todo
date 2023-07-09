export const clickOutside = (node:HTMLElement) => {
  const handleClick = (e: MouseEvent) => {
    // check if the node contains the target of the event
    if (!node.contains(e.target as HTMLElement)) {
      setTimeout(() => {
        node.dispatchEvent(new CustomEvent('outclick'))
      }, 100) 
    }
  };

  // add the event listener to the document
  document.addEventListener('click', handleClick, true);

  // return an object with a destroy function
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
  }
}