const btns = document.querySelectorAll('.btn-container')
const submitBtn = document.querySelector('.submit-btn')
const span = document.querySelector('.card-2 .card-body span')
const initialCard = document.querySelector('.card-1')
// i gave the first card a class of .card-1
const SecondCard = document.querySelector('.card-2')
Array.from(btns).forEach(btn =>{
btn.addEventListener('click', e => {
  let text = e.target.textContent
  submitBtn.addEventListener('click', e =>{
    initialCard.classList.add('hide')
    SecondCard.classList.remove('hide')
    span.textContent = text
  })
})
})
