function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    //Pegar a tag img
     
    const img = document.querySelector("#profile img")

    // Substituir a imagem

    if (html.classList.contains("light")){
        // se tiver lightmode add img ligth
       img.setAttribute("src", "img/avatar-light.png")
       img.setAttribute("alt", "Foto Simples de Lucas Oliveira")
    } else {
        // se tiver sem lightmode manter a  img
        img.setAttribute("src", "img/Avatar.png")
        img.setAttribute("alt", "Foto de Lucas Oliveira, usando óculos")
    }


}