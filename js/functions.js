const button = document.querySelector('#new-row')
const numberOfRows = document.querySelector('#number-of-rows')
const jokerNumbers = document.querySelector('table')

let totalRows = 0

button.addEventListener('click', () => {
    addJokerLine()
})

const addJokerLine = () => {
    const row = jokerNumbers.insertRow()
    for (let i = 0; i < 7; i++) {
        const cell = row.insertCell(i)
        const randomNumber = Math.floor(Math.random() * 10)
        cell.innerHTML = randomNumber
    }    
    totalRows++;
    numberOfRows.innerHTML = "Valmiita rivejä " + totalRows
}