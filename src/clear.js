export function clearContent() {
    const content = document.getElementById('content');
    const container = document.getElementById('container');
    if (content) {
      content.innerHTML = '';
    }
    if(container){
    container.innerHTML='';
    } 
  }