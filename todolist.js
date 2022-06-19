const inp = document.getElementById('inp')
const but = document.getElementById('but')
const boxs = document.querySelectorAll('.box')

let drag = null;
but.onclick = function () {
   if (inp.value != '') {
      // random numder
      boxs[Math.floor(Math.random(boxs.length) * 4)].innerHTML += `
      <p class='item' draggable='true'>${inp.value}</p>`
      inp.value = '';
   }
   dragItem();
}
function dragItem() {
   let items = document.querySelectorAll('.item');
   for (let i = 0; i < items.length; i++) {

      items[i].addEventListener('dragstart', () => {
         drag = items[i];
         items[i].style.opacity = '0.5';
      })
      items[i].addEventListener('dragend', () => {
         drag = null;
         items[i].style.opacity = '1';
      })
      for (let i = 0; i < boxs.length; i++) {
         boxs[i].addEventListener('dragover', (e) => {
            e.preventDefault();
            boxs[i].style.background = 'green';
            boxs[i].style.color = '#fff';
         })
         boxs[i].addEventListener('dragleave', () => {
            boxs[i].style.background = '#fff';
            boxs[i].style.color = '#000';
         })
         boxs[i].addEventListener('drop', () => {
            boxs[i].append(drag);
            boxs[i].style.background = '#fff';
            boxs[i].style.color = '#000';
         })
      }
   }
}
