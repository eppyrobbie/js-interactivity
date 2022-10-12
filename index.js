
const message = document.querySelector('#message')


function addMovie(event){
    event.preventDefault()
    const inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const target = document.querySelector('ul')
    target.appendChild(movie)
    inputField.value = ''
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent='X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted. Poor guy.'
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    let movieName = event.target.textContent
    if(event.target.classList.contains('checked')){
        message.textContent=  `${movieName} watched!`
    } else{
        message.textContent = 'Movie Added Back'
    }
}

function revealMessage (){
    message.className=""
    setTimeout(hideMessage, 1000)
    
}

function hideMessage(){
    message.className = 'hide'
}

const movieInput = document.querySelector('form')

movieInput.addEventListener('submit', addMovie)