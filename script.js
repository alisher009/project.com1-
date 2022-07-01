window.addEventListener('scroll', () => {
    document.querySelector('.block').classList.toggle
        ('window-scroll', window.scrollY > 0)
})
let clicks = document.querySelector('.block_alish')
let clickt = document.querySelector('#block_close') 
clickt.onclick = function () {
    clicks.addEventListener('click', e => {
        setTimeout(() => {
            clicks.remove(e.block_alish);
            
        }, 500);
    })  

}
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


        

