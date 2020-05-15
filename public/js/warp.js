const buttonSelector = document.querySelector('form')
const idSelector = document.querySelector('input')
const result = document.querySelector('#results')

buttonSelector.addEventListener('submit', (e) => {
    e.preventDefault()

    result.textContent = 'Loading...'

    const id = idSelector.value

    const url = 'https://warp-reff.herokuapp.com/refer.php?id=' + id
    //console.log(JSON.stringify(body))
    // console.log(headers)
    const raw = fetch (url).then((response) => {
    response.json().then((data) => {
        // console.log(data)
        if( data.error ) {
            return result.textContent = data.message
        }
        result.textContent = data.message
    })
})

    // console.log(id)
})