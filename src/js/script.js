const cases = document.querySelectorAll('.cases')
let player = 1

for (let i = 0; i < cases.length; i++) {
  cases[i].addEventListener('click', () => {
    if (player === 1) {
      cases[i].textContent = 'O'
      player++
    }
    if (player === 2) {
      if (cases[0].textContent === 'O' || cases[2].textContent === 'O' || cases[6].textContent === 'O' || cases[8].textContent === 'O') {
        cases[4].innerHTML = 'X'
      }
    }
  })
}
