function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

//pegar a tag img
 const img = document.querySelector("#profile img")

  // substituir a imagem
    if (html.classList.contains('light')) {
    // se tiver o light mode ativado, use a imagem avatar2
    img.setAttribute('src', './imagens/avatar-light.png')
  
   } else{
        //se não tiver o light mode ativado, use a imagem avatar
        img.setAttribute('src' , './imagens/avatar-dark.png')
    }

 
} 