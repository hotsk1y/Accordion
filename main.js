function secondInterface() {
  for (let i = 0; i < this.title.length; i++) {
    this.title[i].removeEventListener('click', this.bindedFirstInt)
  }

  for (let i = 0; i < this.title.length; i++) {
    this.title[i].addEventListener('click', this.bindedSecondInt)
  }
}

function firstInterface(titles) {
  for (let i = 0; i < this.title.length; i++) {
    this.title[i].removeEventListener('click', this.bindedSecondInt)
  }

  for (let i = 0; i < this.title.length; i++) {
    this.title[i].addEventListener('click', this.bindedFirstInt)
  }
}



function addFirstItems(event) {
  const descrItem = event.target.parentElement
  descrItem.classList.toggle('active')
}



function addSecondItems(event) {
  const descrItem = event.target.parentElement

  for (let j = 0; j < this.title.length; j++) {
    if (this.title[j].parentElement.classList.contains('active')) {
      this.title[j].parentElement.classList.remove('active')
    }
  }
  descrItem.classList.toggle('active')
}


function startInterface() {
  if (this.btn.value === 'first') {
    this.firstint()
  } else {
    this.secondint()
  }
}



function changeInterface() {
  this.btn.addEventListener('click', () => {
    if (this.btn.value === 'second') {
      this.btn.value = 'first'
      this.btn.innerHTML = 'Включить второй интерфейс'
    } else {
      this.btn.value = 'second'
      this.btn.innerHTML = 'Включить первый интерфейс'
    }
    this.start()
  })
}

function addButtons(acctordionId) {
  btn = document.createElement('button');
  btn.setAttribute("value", "first");
  btn.innerHTML = 'Включить второй интерфейс'

  const accordion = document.getElementById(acctordionId)

  accordion.prepend(btn)
}

function changes() {

}


class Accordion {
  constructor(id) {
    this.addButtons = addButtons(id)

    this.title = document.querySelectorAll(`#${id} > .item > .title`)
    this.btn = document.querySelector('#' + id + ' > button')
    this.start = startInterface
    this.change = changeInterface
    this.firstint = firstInterface
    this.secondint = secondInterface
    this.bindedSecondInt = addSecondItems.bind(this)
    this.bindedFirstInt = addFirstItems.bind(this)
    this.start()
    this.change()    
  }
}

acc1 = new Accordion('acc1')
acc2 = new Accordion('acc2')
acc2 = new Accordion('acc3')

