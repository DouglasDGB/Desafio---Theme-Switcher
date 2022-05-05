function modoDark() {
  const add = document.querySelector('body')

  add.classList.toggle('temaEscuro')

  const botao = document.querySelector('button')

  botao.classList.toggle('buttonClaro')

  const direction = document.querySelector('button div')

  direction.classList.toggle('buttomball')
 
}
