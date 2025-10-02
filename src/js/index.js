

const botaoTrailer = document.querySelector('.trailer-btn')
const botaoFecharModal = document.querySelector('.modal-close')
const video = document.getElementById('video')
const modal = document.querySelector('.modal')
const linkDoVideo = video.src
const linkDetalhes = document.querySelector('.header nav li:last-child a')
const modalDetalhes = document.querySelector('.modal-detalhes')
const botaoFecharDetalhes = document.querySelector('.modal-detalhes-close')

function alternarModal() {
    modal.classList.toggle('open')
}

function alternarModalDetalhes() {
    modalDetalhes.classList.toggle('open')
}

botaoTrailer.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', linkDoVideo)
})

botaoFecharModal.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', '')
})

linkDetalhes.addEventListener('click', (event) => {
    event.preventDefault()
    alternarModalDetalhes()
})

botaoFecharDetalhes.addEventListener('click', () => {
    alternarModalDetalhes()
})

