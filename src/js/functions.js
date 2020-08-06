const cases = document.querySelectorAll('.cases')
const body = document.querySelector('body')
export default function check(ind, symbol, name) {
    cases[ind].textContent = symbol
    cases[ind].classList.add(name)

    if ((cases[0].textContent === 'O' && cases[1].textContent === 'O' && cases[2].textContent === 'O')
        || (cases[3].textContent === 'O' && cases[4].textContent === 'O' && cases[5].textContent === 'O')
        || (cases[6].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === 'O')
        || (cases[0].textContent === 'O' && cases[3].textContent === 'O' && cases[6].textContent === 'O')
        || (cases[1].textContent === 'O' && cases[4].textContent === 'O' && cases[7].textContent === 'O')
        || (cases[2].textContent === 'O' && cases[5].textContent === 'O' && cases[8].textContent === 'O')
        || (cases[0].textContent === 'O' && cases[4].textContent === 'O' && cases[8].textContent === 'O')
        || (cases[2].textContent === 'O' && cases[4].textContent === 'O' && cases[6].textContent === 'O')) {
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
        || (cases[0].textContent === 'O' && cases[1].textContent === 'X' && cases[2].textContent === 'O' && cases[3].textContent === 'X' && cases[4].textContent === 'X' && cases[5].textContent === 'O' && cases[6].textContent === 'O' && cases[7].textContent === 'O' && cases[8].textContent === 'X')
        || (cases[0].textContent === 'X' && cases[1].textContent === 'O' && cases[2].textContent === 'O' && cases[3].textContent === 'O' && cases[4].textContent === 'X' && cases[5].textContent === 'X' && cases[6].textContent === 'O' && cases[7].textContent === 'X' && cases[8].textContent === 'O')) {
        endGame(`${'Égalité !'}`)
    }

    if ((cases[0].textContent === 'X' && cases[1].textContent === 'X' && cases[2].textContent === 'X')
        || (cases[3].textContent === 'X' && cases[4].textContent === 'X' && cases[5].textContent === 'X')
        || (cases[6].textContent === 'X' && cases[7].textContent === 'X' && cases[8].textContent === 'X')
        || (cases[0].textContent === 'X' && cases[3].textContent === 'X' && cases[6].textContent === 'X')
        || (cases[1].textContent === 'X' && cases[4].textContent === 'X' && cases[7].textContent === 'X')
        || (cases[2].textContent === 'X' && cases[5].textContent === 'X' && cases[8].textContent === 'X')
        || (cases[0].textContent === 'X' && cases[4].textContent === 'X' && cases[8].textContent === 'X')
        || (cases[2].textContent === 'X' && cases[4].textContent === 'X' && cases[6].textContent === 'X')) {
        endGame(`${'t\'as perdu !!!!!!!!'}`)
    }
}

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

// hover 
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
