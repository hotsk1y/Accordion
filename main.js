const title = document.querySelectorAll('.title')
const btn = document.querySelector('#btn')

function addFirstItems(event) {
  const descrItem = event.target.parentElement
  descrItem.classList.toggle('active')
}

const firstInterface = () => {
  for (let i = 0; i < title.length; i++) {
    title[i].removeEventListener('click', addSecondItems)
  }

  for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', addFirstItems)
  }
}

function addSecondItems(event) {
  const descrItem = event.target.parentElement
  descrItem.classList.toggle('active')
  for (let j = 0; j < title.length; j++) {
    if (title[j].parentElement.classList.contains('active')) {
      title[j].parentElement.classList.remove('active')
    }
  }
  descrItem.classList.toggle('active')
}

const secondInterface = () => {
  for (let i = 0; i < title.length; i++) {
    title[i].removeEventListener('click', addFirstItems)
  }

  for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', addSecondItems)
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