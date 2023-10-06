function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    //Pegar a tag img
     
    const img = document.querySelector("#profile img")

    // Substituir a imagem

    if (html.classList.contains('light')){
        // se tiver lightmode add img ligth
       img.setAttribute('src', '/img/avatar2.png')
       img.setAttribute('alt', 'Foto Simples de Lucas Oliveira')
    } else {
        // se tiver sem lightmode manter a  img
        img.setAttribute('src', '/img/avatar.png')
        img.setAttribute('alt', 'Foto de Lucas Oliveira, usando óculos e sem camisa e fundo de sítio')
    }


}