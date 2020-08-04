const cases = document.querySelectorAll('.cases')
let player = 1
const body = document.querySelector('body')

//hover
cases.forEach(cas => {
  cas.addEventListener('mouseover', e => {
    if (cas.textContent === '') {
      e.target.textContent = 'o'
    }
  })
  cas.addEventListener('mouseout', e => {
    if (cas.textContent === 'o') {
      e.target.textContent = ''
    }
  })
})

// Check cases and verification results
const check = (ind, symbol, name) => {
  cases[ind].textContent = symbol
  cases[ind].classList.add(name)

  if ((cases[2].textContent === 'O' && cases[5].textContent === 'O' && cases[8].textContent === 'O')
    || (cases[0].textContent === 'O' && cases[3].textContent === 'O' && cases[6].textContent === 'O')) {
    endGame(`${'Bravo, vous avez gagné !'}`)
  }

  if ((cases[0].textContent === 'O' && cases[1].textContent === 'O' && cases[2].textContent === 'X' && cases[3].textContent === 'X' && cases[4].textContent === 'X' && cases[5].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'X' && cases[8].textContent === 'O')
    || (cases[0].textContent === 'X' && cases[1].textContent === 'O' && cases[2].textContent === 'X' && cases[3].textContent === 'O' && cases[4].textContent === 'X' && cases[5].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'X' && cases[8].textContent === 'O')
    || (cases[0].textContent === 'O' && cases[1].textContent === 'X' && cases[2].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'X' && cases[5].textContent === 'X' && cases[6].textContent === 'X' && cases[7].textContent === 'O' && cases[8].textContent === 'O')
    || (cases[0].textContent === 'X' && cases[1].textContent === 'O' && cases[2].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'X' && cases[5].textContent === 'X' && cases[6].textContent === 'X' && cases[7].textContent === 'O' && cases[8].textContent === 'O')
    || (cases[0].textContent === 'O' && cases[1].textContent === 'X' && cases[2].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'X' && cases[5].textContent === 'O' && cases[6].textContent === 'X' && cases[7].textContent === 'O' && cases[8].textContent === 'X')
    || (cases[0].textContent === 'X' && cases[1].textContent === 'O' && cases[2].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[5].textContent === 'X' && cases[6].textContent === 'X' && cases[7].textContent === 'X' && cases[8].textContent === 'O')
    || (cases[0].textContent === 'X' && cases[1].textContent === 'O' && cases[2].textContent === 'X' && cases[3].textContent === 'X' && cases[4].textContent === 'O' && cases[5].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'X' && cases[8].textContent === 'O')
    || (cases[0].textContent === 'O' && cases[1].textContent === 'O' && cases[2].textContent === 'X' && cases[3].textContent === 'X' && cases[4].textContent === 'O' && cases[5].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'X' && cases[8].textContent === 'X')
    || (cases[0].textContent === 'X' && cases[1].textContent === 'O' && cases[2].textContent === 'X' && cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[5].textContent === 'X' && cases[6].textContent === 'O' && cases[7].textContent === 'X' && cases[8].textContent === 'O')
    || (cases[0].textContent === 'X' && cases[1].textContent === 'X' && cases[2].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[5].textContent === 'X' && cases[6].textContent === 'X' && cases[7].textContent === 'O' && cases[8].textContent === 'O')
    || (cases[0].textContent === 'O' && cases[1].textContent === 'X' && cases[2].textContent === 'O' && cases[3].textContent === 'X' && cases[4].textContent === 'O' && cases[5].textContent === 'O' && cases[6].textContent === 'X' && cases[7].textContent === 'O' && cases[8].textContent === 'X')
    || (cases[0].textContent === 'O' && cases[1].textContent === 'X' && cases[2].textContent === 'X' && cases[3].textContent === 'X' && cases[4].textContent === 'O' && cases[5].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === 'X')
    || (cases[0].textContent === 'O' && cases[1].textContent === 'X' && cases[2].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[5].textContent === 'X' && cases[6].textContent === 'X' && cases[7].textContent === 'O' && cases[8].textContent === 'X')
    || (cases[0].textContent === 'O' && cases[1].textContent === 'O' && cases[2].textContent === 'X' && cases[3].textContent === 'X' && cases[4].textContent === 'X' && cases[5].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === 'X')
    || (cases[0].textContent === 'O' && cases[1].textContent === 'X' && cases[2].textContent === 'O' && cases[3].textContent === 'X' && cases[4].textContent === 'X' && cases[5].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === 'X')) {
    endGame(`${'Égalité !'}`)
  }
}

//code
for (let i = 0; i < cases.length; i++) {
  cases[i].addEventListener('click', () => {
    if (player === 1) {
      if (cases[i].textContent === '' || cases[i].textContent !== 'X') {
        check(i, `${'O'}`, `${'round'}`)
        player++
      }
    }
    if (player === 2) {

      // tour 1
      // Si la case 5(4) est coché par le joueur alors je coche la première case

      if (cases[4].textContent === 'O' && cases[0].textContent === '' && cases[1].textContent === '' && cases[2].textContent === '' && cases[3].textContent === '' && cases[5].textContent === '' && cases[6].textContent === '' && cases[7].textContent === '' && cases[8].textContent === '') {
        let randomFirst = Math.random() * 4
        if (randomFirst <= 1 && cases[0].textContent === '') { check(0, `${'X'}`, `${'cross'}`) }
        if (randomFirst > 1 && randomFirst <= 2 && cases[2].textContent === '') { check(2, `${'X'}`, `${'cross'}`) }
        if (randomFirst > 2 && randomFirst <= 3 && cases[6].textContent === '') { check(6, `${'X'}`, `${'cross'}`) }
        if (randomFirst > 3 && cases[8].textContent === '') { check(8, `${'X'}`, `${'cross'}`) }


      }

      //centre
      // diagonales
      // Si la case 1 (0) ou 3 (2) ou 7 (6) ou 9 (8) est cochée par le joueur alors je coche la case 5 (4)
      cases[0].textContent === 'O' && cases[4].textContent === '' || cases[2].textContent === 'O' && cases[4].textContent === '' || cases[6].textContent === 'O' && cases[4].textContent === '' || cases[8].textContent === 'O' && cases[4].textContent === '' ? check(4, `${'X'}`, `${'cross'}`) : ''

      // côtés
      // Si la case 2 (1) ou 6 (5) ou 8 (7) ou 4 (3) est cochée par le joueur alors je coche la 5ème case (4)
      cases[1].textContent === 'O' && cases[4].textContent === '' && cases[4].textContent !== 'O' || cases[5].textContent === 'O' && cases[4].textContent === '' && cases[4].textContent !== 'O' || cases[7].textContent === 'O' && cases[4].textContent === '' && cases[4].textContent !== 'O' || cases[3].textContent === 'O' && cases[4].textContent === '' && cases[4].textContent !== 'O' ? check(4, `${'X'}`, `${'cross'}`) : ''


      // tour 2
      // possibilités
      // Si la case 4 (3) et 7 (6) est cochée par le joueur et que j'ai coché la 5ème case (4) alors je coche la 7ème case (6)
      cases[3].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[6].textContent === '' ? check(6, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1) et 6(5) sont cochées par le joueur et que j'ai coché la case 5(4) alors je coche la 3ème case (2)
      cases[1].textContent === 'O' && cases[5].textContent === 'O' && cases[4].textContent === 'X' && cases[2].textContent === '' ? check(2, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1) et 4(3) sont cochées par le joueur et que j'ai coché la case 5(4) alors je coche la case 1(0)
      cases[1].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'X' && cases[0].textContent === '' ? check(0, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1) et 5(4) sont cochées par le joueur et que j'ai coché la case 7(6) alors je coche la 8(7)
      cases[1].textContent === 'O' && cases[4].textContent === 'O' && cases[6].textContent === 'X' && cases[7].textContent === '' ? check(7, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5(4) et 6(5) sont cochées par le joueur et que j'ai coché la case 1(0) alors je coche la 4(3)
      cases[4].textContent === 'O' && cases[5].textContent === 'O' && cases[0].textContent === 'X' && cases[3].textContent === '' ? check(3, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5(4) et 6(5) sont cochées par le joueur et que j'ai coché la case 3(2) alors je coche la 4(3)
      cases[4].textContent === 'O' && cases[5].textContent === 'O' && cases[2].textContent === 'X' && cases[3].textContent === '' ? check(3, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 6(5) et 8(7) sont cochées par le joueur et que j'ai coché la case 5(4) alors je coche la 9(8)
      cases[5].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[8].textContent === '' ? check(8, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 4(3) et 5(4) sont cochées par le joueur et que j'ai coché la case 1(0) alors je coche la 6(5)
      cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[0].textContent === 'X' && cases[5].textContent === '' ? check(5, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1) et 5(4) sont cochées par le joueur et que j'ai coché la case 3(2) alors je coche la case 8(7)
      cases[1].textContent === 'O' && cases[4].textContent === 'O' && cases[2].textContent === 'X' && cases[7].textContent === '' ? check(7, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5(4) et 8(7) sont cochées par le joueur et que j'ai coché la case 9(8) alors je coche la case 2(1)
      cases[4].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === 'X' && cases[1].textContent === '' ? check(1, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1) et 5(4) sont cochées par le joueur et que j'ai coché la case 1(0) alors je coche la case 8(7)
      cases[1].textContent === 'O' && cases[4].textContent === 'O' && cases[0].textContent === 'X' && cases[7].textContent === '' ? check(7, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 4(3) et 6(5) sont cochées par le joueur et que j'ai coché la case 5(4) alors je coche la case 3(2)
      cases[3].textContent === 'O' && cases[5].textContent === 'O' && cases[4].textContent === 'X' && cases[2].textContent === '' ? check(2, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1(0) et 9(8) sont cochées par le joueur et que j'ai coché la case 5(4) alors je coche la case 7(6)
      cases[0].textContent === 'O' && cases[8].textContent === 'O' && cases[4].textContent === 'X' && cases[6].textContent === '' ? check(6, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1) et 8(7) sont cochées par le joueur et que j'ai coché la case 5(4) alors je coche la case 1(0)
      cases[1].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[0].textContent === '' ? check(0, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 4(3) et 9(8) sont cochées par le joueur et que j'ai coché la case 5(4) alors je coche la case 7(6)
      cases[3].textContent === 'O' && cases[8].textContent === 'O' && cases[4].textContent === 'X' && cases[6].textContent === '' ? check(6, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5(4) et 6(5) sont cochées par le joueur et que j'ai coché la case 9(8) alors je coche la case 4(3)
      cases[4].textContent === 'O' && cases[5].textContent === 'O' && cases[8].textContent === 'X' && cases[3].textContent === '' && cases[0].textContent === '' && cases[1].textContent === '' && cases[2].textContent === '' && cases[6].textContent === '' && cases[7].textContent === '' ? check(3, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 4(3) et 5(4) sont cochées par le joueur et que j'ai coché la case 3(2) alors je coche la case 6(5)
      cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[2].textContent === 'X' && cases[5].textContent === '' && cases[0].textContent === '' && cases[1].textContent === '' && cases[6].textContent === '' && cases[7].textContent === '' && cases[8].textContent === '' ? check(5, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5(4) et 8(7) sont cochées par le joueur et que j'ai coché la case 1(0) alors je coche la case 2(1)
      cases[4].textContent === 'O' && cases[7].textContent === 'O' && cases[0].textContent === 'X' && cases[1].textContent === '' && cases[2].textContent === '' && cases[3].textContent === '' && cases[5].textContent === '' && cases[6].textContent === '' && cases[8].textContent === '' ? check(1, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5(4) et 8(7) sont cochées par le joueur et que j'ai coché la case 7(6) alors je coche la case 2(1)
      cases[4].textContent === 'O' && cases[7].textContent === 'O' && cases[6].textContent === 'X' && cases[1].textContent === '' && cases[0].textContent === '' && cases[2].textContent === '' && cases[3].textContent === '' && cases[5].textContent === '' && cases[8].textContent === '' ? check(1, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5(4) et 6(5) sont cochées par le joueur et que j'ai coché la case 7(6) alors je coche la case 4(3)
      cases[4].textContent === 'O' && cases[5].textContent === 'O' && cases[6].textContent === 'X' && cases[3].textContent === '' && cases[0].textContent === '' && cases[1].textContent === '' && cases[2].textContent === '' && cases[7].textContent === '' && cases[8].textContent === '' ? check(3, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1) et 5(4) sont cochées par le joueur et que j'ai coché la case 9(8) alors je coche la case 8(7)
      cases[1].textContent === 'O' && cases[4].textContent === 'O' && cases[8].textContent === 'X' && cases[7].textContent === '' && cases[0].textContent === '' && cases[2].textContent === '' && cases[3].textContent === '' && cases[5].textContent === '' && cases[6].textContent === '' ? check(7, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 4(3) et 5(4) sont cochées par le joueur et que j'ai coché la case 9(8) alors je coche la case 6(5)
      cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[8].textContent === 'X' && cases[5].textContent === '' && cases[0].textContent === '' && cases[1].textContent === '' && cases[2].textContent === '' && cases[6].textContent === '' && cases[7].textContent === '' ? check(7, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5(4) et 7(6) sont cochées par le joueur et que j'ai coché la case 3(2) alors je coche la case 4(3)
      cases[4].textContent === 'O' && cases[6].textContent === 'O' && cases[2].textContent === 'X' && cases[3].textContent === '' && cases[0].textContent === '' && cases[1].textContent === '' && cases[5].textContent === '' && cases[7].textContent === '' && cases[8].textContent === '' ? check(3, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5(4) et 8(7) sont cochées par le joueur et que j'ai coché la case 3(2) alors je coche la case 2(1)
      cases[4].textContent === 'O' && cases[7].textContent === 'O' && cases[2].textContent === 'X' && cases[1].textContent === '' && cases[0].textContent === '' && cases[3].textContent === '' && cases[5].textContent === '' && cases[6].textContent === '' && cases[8].textContent === '' ? check(1, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 3(2) et 7(6) sont cochées par le joueur et que j'ai coché la case 5(4) alors je coche la case 9(8)
      cases[2].textContent === 'O' && cases[6].textContent === 'O' && cases[4].textContent === 'X' && cases[8].textContent === '' && cases[0].textContent === '' && cases[1].textContent === '' && cases[3].textContent === '' && cases[5].textContent === '' && cases[7].textContent === '' ? check(8, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1(0) et 8(7) sont cochées par le joueur et que j'ai coché la case 5(4) alors je coche la case 4(3)
      cases[0].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[3].textContent === '' && cases[1].textContent === '' && cases[2].textContent === '' && cases[5].textContent === '' && cases[6].textContent === '' && cases[8].textContent === '' ? check(3, `${'X'}`, `${'cross'}`) : ''


      // Côté gauche
      //Si la case 4 (3) et 7 (6) sont cochées par le joueur alors je coche la 1ère case (0)
      cases[3].textContent === 'O' && cases[6].textContent === 'O' && cases[0].textContent === '' ? check(0, `${'X'}`, `${'cross'}`) : ''

      // Si la case 1 (0) et 4 (3) sont cochées par le joueur alors je coche la 7ème case (6)
      cases[0].textContent === 'O' && cases[3].textContent === 'O' && cases[6].textContent === '' ? check(6, `${'X'}`, `${'cross'}`) : ''



      // Côté haut
      // Si la case 2 (1) et 3 (2) sont cochées par le joueur alors je coche la 1ère case (0)
      cases[1].textContent === 'O' && cases[2].textContent === 'O' && cases[0].textContent === '' ? check(0, `${'X'}`, `${'cross'}`) : ''

      // Si la case 1 (0) et 3 (2) sont cochées par le joueur alors je coche la 2ème case (1)
      cases[0].textContent === 'O' && cases[2].textContent === 'O' && cases[1].textContent === '' ? check(1, `${'X'}`, `${'cross'}`) : ''

      // Si la case 1 (0) et 2 (1) sont cochées par le joueur alors je coche la 3ème case (2)
      cases[0].textContent === 'O' && cases[1].textContent === 'O' && cases[2].textContent === '' ? check(2, `${'X'}`, `${'cross'}`) : ''



      // Côté droit
      // Si la case 9 (8) et 6 (5) sont cochées par le joueur alors je coche la 3ème case (2)
      cases[8].textContent === 'O' && cases[5].textContent === 'O' && cases[2].textContent === '' && cases[2].textContent !== 'O' ? check(2, `${'X'}`, `${'cross'}`) : ''

      // Si la case 3 (2) et 9 (8) sont cochées par le joueur alors je coche la 6ème case (5)
      cases[2].textContent === 'O' && cases[8].textContent === 'O' && cases[5].textContent === '' && cases[1].textContent !== 'X' ? check(5, `${'X'}`, `${'cross'}`) : ''

      // Si la case 3 (2) et 6 (5) sont cochées par le joueur alors je coche la 9ème case (8)
      cases[2].textContent === 'O' && cases[5].textContent === 'O' && cases[8].textContent === '' ? check(8, `${'X'}`, `${'cross'}`) : ''



      // Côté bas
      // Si les cases 8 (7) et 9 (8) sont cochées par le joueur alors je coche la 7ème case (6)
      cases[7].textContent === 'O' && cases[8].textContent === 'O' && cases[6].textContent === '' ? check(6, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 7 (6) et 9 (8) sont cochées par le joueur alors je coche la 8ème case (7)
      cases[6].textContent === 'O' && cases[8].textContent === 'O' && cases[7].textContent === '' ? check(7, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 7 (6) et 8 (7) sont cochées par le joueur alors je coche la 9ème case (8)
      cases[6].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === '' ? check(8, `${'X'}`, `${'cross'}`) : ''


      // Milieu
      //Diagonales
      // Si les cases 5 (4) et 1 (0) sont cochées par la joueur alors je coche la 9ème case (8)
      cases[4].textContent === 'O' && cases[0].textContent === 'O' && cases[8].textContent === '' ? check(8, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1 (0) et 9 (8) sont cochées par le joueur alors je coche la 5ème case (4)
      cases[0].textContent === 'O' && cases[8].textContent === 'O' && cases[4].textContent === '' ? check(4, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5 (4) et 9 (8) sont cochées par la joueur alors je coche la 1ère case (0)
      cases[4].textContent === 'O' && cases[8].textContent === 'O' && cases[0].textContent === '' ? check(0, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5 (4) et 3 (2) sont cochées par la joueur alors je coche la 7ème case (6)
      cases[4].textContent === 'O' && cases[2].textContent === 'O' && cases[6].textContent === '' ? check(6, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 3 (2) et 7 (6) sont cochées par la joueur alors je coche la 5ème case (4)
      cases[2].textContent === 'O' && cases[6].textContent === 'O' && cases[4].textContent === '' ? check(4, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5 (4) et 7 (6) sont cochées par la joueur alors je coche la 3ème case (2)
      cases[4].textContent === 'O' && cases[6].textContent === 'O' && cases[2].textContent === '' ? check(2, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 5 (4) et 9 (8) sont cochées par la joueur alors je coche la 3ème case (2)
      cases[4].textContent === 'O' && cases[8].textContent === 'O' && cases[6].textContent === '' && cases[1].textContent === '' && cases[2].textContent === '' && cases[3].textContent === '' && cases[5].textContent === '' && cases[7].textContent === '' ? check(6, `${'X'}`, `${'cross'}`) : ''



      // 3ème tour
      // Possibilités
      // Si les cases 3 (2), 4 (3) et 8 (7) sont cochées par le joueur et que j'ai coché les cases 5 (4) et 7 (6) alors je coche la 9 (8)
      cases[2].textContent === 'O' && cases[3].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[6].textContent === 'X' && cases[8].textContent === '' ? check(8, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1), 4(3) et 9(8) sont cochées par le joueur et que j'ai coché les cases 1(0) et 5 (4) alors je coche la troisième case (2)
      cases[1].textContent === 'O' && cases[3].textContent === 'O' && cases[8].textContent === 'O' && cases[0].textContent === 'X' && cases[4].textContent === 'X' && cases[2].textContent === '' && cases[6].textContent !== 'X' ? check(2, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1(0), 6(5) et 8(7) sont cochées par le joueur et que j'ai coché les cases 5(4) et 9 (8) alors je coche la 7ème case (6)
      cases[0].textContent === 'O' && cases[2].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[8].textContent === 'X' && cases[6].textContent === '' ? check(6, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1), 7(6) et 9(8) sont cochées par le joueur et que j'ai coché les cases 5(4) et 8 (7) alors je coche la 4ème case (3)
      cases[1].textContent === 'O' && cases[6].textContent === 'O' && cases[8].textContent === 'O' && cases[4].textContent === 'X' && cases[7].textContent === 'X' && cases[3].textContent === '' ? check(3, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1(0), 6(5) et 8(7) sont cochées par le joueur et que j'ai coché les cases 5(4) et 9(8) alors je coche la case 7(6)
      cases[0].textContent === 'O' && cases[5].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[8].textContent === 'X' && cases[6].textContent === '' && cases[1].textContent === '' && cases[2].textContent === '' && cases[3].textContent === '' && cases[6].textContent === '' ? check(6, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1), 4(3) et 5(4) sont cochées par le joueur et que j'ai coché les cases 3(2) et 8(7) alors je coche la case 6(5)
      cases[1].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[2].textContent === 'X' && cases[7].textContent === 'X' && cases[5].textContent === '' && cases[0].textContent === '' && cases[6].textContent === '' && cases[8].textContent === '' ? check(5, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1(0), 3(2) et 8(7) sont cochées par le joueur et que j'ai coché les cases 2(1) et 5(4) alors je coche la case 4(3)
      cases[0].textContent === 'O' && cases[2].textContent === 'O' && cases[7].textContent === 'O' && cases[1].textContent === 'X' && cases[4].textContent === 'X' && cases[3].textContent === '' && cases[5].textContent === '' && cases[6].textContent === '' && cases[8].textContent === '' ? check(3, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1(0), 7(6) et 8(7) sont cochées par le joueur et que j'ai coché les cases 5(4) et 9(8) alors je coche la case 4(3)
      cases[0].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'O' && cases[4].textContent === 'X' && cases[8].textContent === 'X' && cases[3].textContent === '' && cases[1].textContent === '' && cases[2].textContent === '' && cases[5].textContent === '' ? check(3, `${'X'}`, `${'cross'}`) : ''

      // 4ème tour
      // Si les cases 2(1), 4(3), 7(6) et 9(8) sont cochées par le joueur et que j'ai coché les cases 1(0), 5(4) et 8(7) alors je coche la 3ème case (2)
      cases[1].textContent === 'O' && cases[3].textContent === 'O' && cases[6].textContent === 'O' && cases[8].textContent === 'O' && cases[0].textContent === 'X' && cases[4].textContent === 'X' && cases[7].textContent === 'X' && cases[2].textContent === '' ? check(2, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2(1), 4(3), 5(4) et 9(8) sont cochées par le joueur et que j'ai coché les cases 1(0), 7(6) et 8(7) alors je coche la 6ème case (5)
      cases[1].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[8].textContent === 'O' && cases[0].textContent === 'X' && cases[6].textContent === 'X' && cases[7].textContent === 'X' && cases[5].textContent === '' ? check(5, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1(0), 4(3), 5(4) et 8(7) sont cochées par le joueur et que j'ai coché les cases 2(1), 7(6) et 9(8) alors je coche la 6ème case (5)
      cases[0].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[7].textContent === 'O' && cases[1].textContent === 'X' && cases[6].textContent === 'X' && cases[8].textContent === 'X' && cases[5].textContent === '' ? check(5, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1(0), 6(5), 7(6) et 8(7) sont cochées par le joueur et que j'ai coché les cases 4(3), 5(4) et 9(8) alors je coche la 2ème case (1)
      cases[0].textContent === 'O' && cases[5].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'O' && cases[3].textContent === 'X' && cases[4].textContent === 'X' && cases[8].textContent === 'X' && cases[1].textContent === '' ? check(1, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 2 (1), 4 (3), 8 (7) et 9 (8) sont cochées par le joueur et que j'ai coché les cases 5 (4), 6 (5) et 7 (6) alors je coche la 1ère case
      cases[1].textContent === 'O' && cases[3].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === 'O' && cases[4].textContent === 'X' && cases[5].textContent === 'X' && cases[6].textContent === 'X' && cases[0].textContent === '' ? check(0, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 1(0), 3(2), 8(7) et 9(8) sont cochées par le joueur et que j'ai coché les cases 2(1), 5(4) et 7(6) alors je coche la 6ème case (5)
      cases[0].textContent === 'O' && cases[2].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === 'O' && cases[1].textContent === 'X' && cases[4].textContent === 'X' && cases[6].textContent === 'X' && cases[5].textContent === '' ? check(5, `${'X'}`, `${'cross'}`) : ''

      // Si les cases 3(2), 5(4), 6(5) et 8(7) sont cochées par le joueur et que j'ai coché les cases 2(1), 7(6) et 9(8) alors je coche la 4ème case (3)
      cases[2].textContent === 'O' && cases[4].textContent === 'O' && cases[5].textContent === 'O' && cases[7].textContent === 'O' && cases[1].textContent === 'X' && cases[6].textContent === 'X' && cases[8].textContent === 'X' && cases[3].textContent === '' && cases[0].textContent === '' ? check(5, `${'X'}`, `${'cross'}`) : ''


      // Si les cases 4(3), 5(4), 8(7) et 9(8) sont cochées par le joueur et que j'ai coché les cases 1(0), 6(5) et 9(8) alors je coche la 2ème case (1)
      cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === 'O' && cases[0].textContent === 'X' && cases[5].textContent === 'X' && cases[8].textContent === 'X' && cases[1].textContent === '' && cases[2].textContent === '' ? check(1, `${'X'}`, `${'cross'}`) : ''


      player--

    }
  })
}

// function display results
const endGame = text => {
  let h1 = document.createElement('h1')
  h1.textContent = `${text}`
  h1.classList.add('textEnd')
  body.appendChild(h1)
  setTimeout(() => {
    for (let i = 0; i <= 8; i++) { cases[i].textContent = '' }
    h1.textContent = ''
  }, 3000)
}
