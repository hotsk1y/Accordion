const title = document.querySelectorAll('.title')
const btn = document.querySelector('#btn')

const firstInterface = () => {
  for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', (event) => {
      const descrItem = event.target.parentElement
      descrItem.classList.toggle('active')
    })
  }
}

const secondInterface = () => {
  for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', (event) => {
      const descrItem = event.target.parentElement
      descrItem.classList.toggle('active')
      for (let j = 0; j < title.length; j++) {
        if (title[j].parentElement.classList.contains('active')) {
          title[j].parentElement.classList.remove('active')
        }
      }
      descrItem.classList.toggle('active')
    })
  }
}

const startInterface = () => {
  if (btn.value === 'first') {
    firstInterface()
  } else {
    secondInterface()
  }
}

const changeInterface = () => {
  btn.addEventListener('click', () => {    
    if (btn.value === 'second') {
      btn.value = 'first'
    } else {
      btn.value = 'second'
    }
    console.log(btn.value)
    startInterface()
  })
}

startInterface()
changeInterface()