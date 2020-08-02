const cases = document.querySelectorAll('.cases')
let player = 1

for (let i = 0; i < cases.length; i++) {
  cases[i].addEventListener('click', () => {
    if (player === 1) {
      if (cases[i].textContent === '' || cases[i].textContent !== 'X') {
        cases[i].textContent = 'O'
        player++
      }
    }
    if (player === 2) {
      // tour 1

      //centre
      // diagonales
      // Si la case 1 (0) ou 3 (2) ou 7 (6) ou 9 (8) est cochée par le joueur alors je coche la case 5 (4)
      cases[0].textContent === 'O' || cases[2].textContent === 'O' || cases[6].textContent === 'O' || cases[8].textContent === 'O' && cases[4].textContent === '' ? cases[4].textContent = 'X' : ''

      // côtés
      // Si la case 2 (1) ou 6 (5) ou 8 (7) ou 4 (3) est cochée par le joueur alors je coche la 5ème case (4)
      cases[1].textContent === 'O' || cases[5].textContent === 'O' || cases[7].textContent === 'O' || cases[3].textContent === 'O' && cases[4].textContent === '' && cases[7].textContent === 'O' ? cases[4].textContent = 'X' : ''

      // Si la case est 5 (4) est cochée par la joueur alors je coche la case 1 (0) ou 9 (8) ou 7 (6) ou 3 (2) ou 4 (3) ou 8 (7) ou 6 (5) ou 2 (1)
      cases[4].textContent === 'O' && cases[0].textContent === '' ? cases[0].textContent === 'X' : cases[8].textContent === '' ? cases[8].textContent === 'X' : cases[6].textContent === '' ? cases[6].textContent === 'X' : cases[2].textContent === '' ? cases[2].textContent === 'X' : cases[3].textContent === '' ? cases[3].textContent === 'X' : cases[7].textContent === '' ? cases[7].textContent === 'X' : cases[5].textContent === '' ? cases[5].textContent === 'X' : cases[1].textContent === '' ? cases[1].textContent === 'X' : ''



      // tour 2
      // possibilités
      // Si la case 4 (3) et 7 (6) est cochée par le joueur et que j'ai coché la 5ème case (4) alors je coche la 7ème case (6)
      cases[3].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[6].textContent === '' ? cases[6].textContent = 'X' : ''

      // Diagonales
      // Si la case 5 (4) est cochée par une croix et que la case 3 (2) est vide alors je la coche 
      cases[4].textContent === 'X' && cases[2].textContent === '' && (cases[0].textContent === 'O' && cases[1].textContent === 'O') || (cases[8].textContent === 'O' && cases[5].textContent === 'O') ? cases[2].textContent === 'X' : ''

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
      cases[8].textContent === 'O' && cases[5].textContent === 'O' && cases[2].textContent === '' ? cases[2].textContent = 'X' : ''

      // Si la case 3 (2) et 9 (8) sont cochées par le joueur alors je coche la 6ème case (5)
      cases[2].textContent === 'O' && cases[8].textContent === 'O' && cases[5].textContent === '' ? cases[5].textContent = 'X' : ''

      // Si la case 3 (2) et 6 (5) sont cochées par le joueur alors je coche la 9ème case (8)
      cases[2].textContent === 'O' && cases[5].textContent === 'O' && cases[8].textContent === '' ? cases[8].textContent = 'X' : ''



      // Côté bas
      // Si les cases 8 (7) et 9 (8) sont cochées par le joueur alors je coche la 7ème case (6)
      cases[7].textContent === 'O' && cases[8].textContent === 'O' && cases[6].textContent === '' ? cases[6].textContent = 'X' : ''

      // Si les cases 7 (6) et 9 (8) sont cochées par le joueur alors je coche la 8ème case (7)
      cases[6].textContent === 'O' && cases[8].textContent === 'O' && cases[7].textContent === '' ? cases[7].textContent = 'X' : ''

      // Si les cases 7 (6) et 8 (7) sont cochées par le joueur alors je coche la 9ème case (8)
      cases[6].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === '' ? cases[8].textContent = 'X' : ''


      // Milieu
      //Diagonales
      // Si les cases 5 (4) et 1 (0) sont cochées par la joueur alors je coche la 9ème case (8)
      cases[4].textContent === 'O' && cases[0].textContent === 'O' && cases[8].textContent === '' ? cases[8].textContent = 'X' : ''

      // Si les cases 1 (0) et 9 (8) sont cochées par le joueur alors je coche la 5ème case (4)
      cases[0].textContent === 'O' && cases[8].textContent === 'O' && cases[4].textContent === '' ? cases[4].textContent = 'X' : ''

      // Si les cases 5 (4) et 9 (8) sont cochées par la joueur alors je coche la 1ère case (0)
      cases[4].textContent === 'O' && cases[8].textContent === 'O' && cases[0].textContent === '' ? cases[0].textContent = 'X' : ''

      // Si les cases 5 (4) et 3 (2) sont cochées par la joueur alors je coche la 7ème case (6)
      cases[4].textContent === 'O' && cases[2].textContent === 'O' && cases[6].textContent === '' ? cases[6].textContent = 'X' : ''

      // Si les cases 3 (4) et 7 (6) sont cochées par la joueur alors je coche la 5ème case (4)
      cases[4].textContent === 'O' && cases[6].textContent === 'O' && cases[4].textContent === '' ? cases[4].textContent = 'X' : ''

      // Si les cases 5 (4) et 7 (6) sont cochées par la joueur alors je coche la 3ème case (2)
      cases[4].textContent === 'O' && cases[6].textContent === 'O' && cases[2].textContent === '' ? cases[2].textContent = 'X' : ''



      // 3ème tour
      // Possibilités
      // Si les cases 3 (2), 4 (3) et 8 (7) sont cochées par le joueur et que j'ai coché les cases 5 (4) et 7 (6) alors je coche la 9 (8)
      cases[2].textContent === 'O' && cases[3].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[6].textContent === 'X' && cases[8].textContent === '' ? cases[8].textContent = 'X' : ''



      // 4ème tour
      // Si les cases 2 (1), 6 (5), 9 (8) et 7 (6) sont cochés par le joueur alors je coche la 1ère case si elle est dispo sinon la 4ème (3)
      cases[1].textContent === 'O' && cases[5].textContent === 'O' && cases[8].textContent === 'O' && cases[6].textContent === 'O' ? cases[0].textContent === '' ? cases[0].textContent = 'X' : cases[3].textContent === '' ? cases[3].textContent = 'X' : '' : ''


      // Victoire


      player--
    }
  })
}
