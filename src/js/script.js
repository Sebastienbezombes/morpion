const cases = document.querySelectorAll('.cases')
let player = 1

for (let i = 0; i < cases.length; i++) {
  cases[i].addEventListener('click', () => {
    if (player === 1) {
      cases[i].textContent = 'O'
      player++
      console.log(player)
    }
    if (player === 2) {
      // côtés
      // Si la case 1 (0) ou 3 (2) ou 7 (6) ou 9 (8) est cochée par le joueur alors je coche la case 5 (4)
      cases[0].textContent === 'O' || cases[2].textContent === 'O' || cases[6].textContent === 'O' || cases[8].textContent === 'O' ? cases[4].textContent = 'X' : ''


      // Côté gauche
      //Si la case 4 (3) et 7 (6) sont cochées par le joueur alors je coche la 1ère case (0)
      cases[3].textContent === 'O' && cases[6].textContent === 'O' && cases[0].textContent === '' ? cases[0].textContent = 'X' : ''

      //Si la case 1 (0) et 7 (6) sont cochées par le joueur alors je coche la 4ème case (3)
      cases[0].textContent === 'O' && cases[6].textContent === 'O' && cases[3].textContent === '' ? cases[3].textContent = 'X' : ''

      // Si la case 1 (0) et 4 (3) sont cochées par le joueur alors je coche la 7ème case (6)
      cases[0].textContent === 'O' && cases[3].textContent === 'O' && cases[6].textContent === '' ? cases[6].textContent = 'X' : ''



      // Côté haut
      // Si la case 2 (1) et 3 (2) sont cochées par le joueur alors je coche la 1ère case (0)
      cases[1].textContent === 'O' && cases[2].textContent === 'O' && cases[0].textContent === '' ? cases[0].textContent = 'X' : ''

      // Si la case 1 (0) et 3 (2) sont cochées par le joueur alors je coche la 2ème case (1)
      cases[0].textContent === 'O' && cases[2].textContent === 'O' && cases[1].textContent === '' ? cases[1].textContent = 'X' : ''

      // Si la case 1 (0) et 2 (1) sont cochées par le joueur alors je coche la 3ème case (2)
      cases[0].textContent === 'O' && cases[1].textContent === 'O' && cases[2].textContent === '' ? cases[2].textContent = 'X' : ''



      // Côté droit
      // Si la case 9 (8) et 6 (5) sont cochées par le joueur alors je coche la 3ème case (2)
      cases[8].textContent === 'O' && cases[5].textContent === 'O' && cases[0].textContent === '' ? cases[0].textContent = 'X' : ''

      // Si la case 3 (2) et 9 (8) sont cochées par le joueur alors je coche la 6ème case (5)
      cases[2].textContent === 'O' && cases[8].textContent === 'O' && cases[5].textContent === '' ? cases[5].textContent = 'X' : ''

      // Si la case 3 (2) et 6 (5) sont cochées par le joueur alors je coche la 9ème case (8)
      cases[2].textContent === 'O' && cases[5].textContent === 'O' && cases[8].textContent === '' ? cases[8].textContent = 'X' : ''










      player--
    }
  })
}
