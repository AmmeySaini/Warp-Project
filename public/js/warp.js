const buttonSelector = document.querySelector('form')
const idSelector = document.querySelector('input')
const result = document.querySelector('#results')
const idTimes = document.querySelector('#times')
const load = document.querySelector('#load')

buttonSelector.addEventListener('submit', (e) => {
    e.preventDefault()

    const id = idSelector.value
    // console.log(idTimes.value)
    const times = idTimes.value

    if( times > 15) {
        load.textContent = ''
        return result.textContent = 'Times Value Cant Exceed 15'
    }
    
    const ff_c = (id, v, times) => {
        load.textContent = 'On Your Marks...'
        const url = 'https://warp-reff.herokuapp.com/refer.php?id=' + id
        const raw = fetch (url).then((response) => {
            response.json().then((data) => {
                // console.log(v + times)
                if( v == times ) {
                    load.textContent = 'COMPLETED!!'
                }
                // console.log(data)
                if( data.error ) {
                    return result.textContent = 'S.No -' + v + ' '+ data.message
                }
                result.textContent = 'S.No -' + v + ' '+ data.message
            })
        })
    }
    for(let v = 1; v <= times; v++){
        ff_c(id, v, times)
    }

    // const raw = fetch (url).then((response) => {
    //     response.json().then((data) => {
    //         // console.log(data)
    //         if( data.error ) {
    //             return result.textContent = data.message
    //         }
    //         result.textContent = data.message
    //     })
    // })

    // console.log(id)
})