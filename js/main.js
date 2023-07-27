


const publicacionesUser = [
    {
        name: "Ignacio Bon",
        imgProfile: "./img/ryoji-iwata-IBaVuZsJJTo-unsplash.jpg",
        comentario: "Hoy hay un día muy agradable!!",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    },
    {
        name: "María González",
        imgProfile: "./img/maria-gonzalez.jpg",
        comentario: "Me encantó la película que vi ayer. ¡Muy recomendada!",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    },
    {
        name: "Carlos Mendoza",
        imgProfile: "./img/carlos-mendoza.jpg",
        comentario: "Acabo de terminar un libro increíble. ¡Emocionante hasta la última página!",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    },
    {
        name: "Ana López",
        imgProfile: "./img/ana-lopez.jpg",
        comentario: "Qué día tan bonito para disfrutar en familia en el parque.",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    },
    {
        name: "Juan Martínez",
        imgProfile: "./img/juan-martinez.jpg",
        comentario: "Hoy me siento inspirado para pintar algo hermoso.",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    },
    {
        name: "Luisa Fernández",
        imgProfile: "./img/luisa-fernandez.jpg",
        comentario: "¡Finalmente aprendí a tocar esa canción en la guitarra!",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    },
    {
        name: "Pedro Ramírez",
        imgProfile: "./img/pedro-ramirez.jpg",
        comentario: "¡Qué deliciosa cena preparé anoche! Comida casera siempre es la mejor.",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    },
    {
        name: "Laura Torres",
        imgProfile: "./img/laura-torres.jpg",
        comentario: "Hoy fue un día agotador en el trabajo, pero valió la pena.",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    },
    {
        name: "Gabriel Sánchez",
        imgProfile: "./img/gabriel-sanchez.jpg",
        comentario: "Ya estoy listo para mi próximo viaje. ¡Qué emoción!",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    },
    {
        name: "Isabella Gómez",
        imgProfile: "./img/isabella-gomez.jpg",
        comentario: "¡Wow, mira este hermoso paisaje! ¡Quiero ir allí algún día!",
        imgComentario: "./img/iconosreaciones-removebg-preview.png"
    }
];



function cargarComentarios() {

    const contenedorPublicaciones = document.getElementById('contenedoragregarPublicacion');

    publicacionesUser.forEach(publicaciones => {

        const publicacion = document.createElement('div');
        publicacion.innerHTML = ` <div class="nuevaPublication">
          <div class="contenedorimgpub">
          <div class="profilecircule">
           <img class="imgprofile" src="./img//ryoji-iwata-IBaVuZsJJTo-unsplash.jpg" alt="">

           <div class="online-dot"></div>
            </div>
          <div class="fecha">
           <p class="namePublication">${publicaciones.name}</p>
           <p class="data">21/07/23</p>
          </div>
         </div>
          <p class="textoPublication">${publicaciones.comentario}</p>
           <div class="contenido">
         <img class="imagenPubli" src="./img//ryoji-iwata-IBaVuZsJJTo-unsplash.jpg" alt="">
          </div>

          <div class="intebloq">
         <img class="iconreaciones" src="./img/iconosreaciones-removebg-preview.png" alt="">
          <p class="interacciones"> <span class="number">122</span> Me gusta <span
               class="number">32</span>
           Comentarios <span class="number">1200</span>Compartidos</p>
          </div>
          <div class="contenedor">
           <button class="botoncomen"> <i class="fas fa-thumbs-up"></i>
           <span>Me gusta</span>
           </button>

          <button class="botoncomen"> <i class="fas fa-comment"></i>
           <span>Comentar</span>
            </button>


          <button class="botoncomen"> <i class="fas fa-share"></i>
           <span>Compartir</span>
          </button>


         </div>

          </div>`
        contenedorPublicaciones.appendChild(publicacion)

    });

}
cargarComentarios()



function cargarHistorias() {

    const historias = document.getElementById('historias');

    publicacionesUser.forEach(historia => {

        const publicarHistorias = document.createElement('div');
        publicarHistorias.innerHTML = `
                <div class="contcolor">
                    <section class="bloqueUser">
                        <img class="imagenProfile" src="./img//ryoji-iwata-IBaVuZsJJTo-unsplash.jpg" alt="">


                    </section>
                    <div class="flexUser">
                        <img class="usuarioPublicado" src="./img/bailey-zindel-NRQV-hBF10M-unsplash.jpg" alt="">
                        <p class="namePublication">${historia.name}</p>
                    </div>
                </div>
        `

        historias.appendChild(publicarHistorias)
    });


}
cargarHistorias()



function enlinea() {
    const conectados = document.getElementById('conectados'); 

    publicacionesUser.forEach(conectado => {
        const enweb = document.createElement('li');
        enweb.classList.add('itemspan');

        enweb.innerHTML = `
            <div class="profilecircule imgasideprofile enlinea">
                <img class="imgprofile" src="${conectado.imgComentario}" alt="">
                <div class="online-dot conectadosli"></div>
            </div>
            <div class="fecha">
                <div class="alineado">
                    <p class="namePublication">${conectado.name}</p>
                </div>
            </div>
        `;

        conectados.appendChild(enweb);
    });
}
enlinea();


const busqueda = document.getElementById('busqueda')


const search = document.getElementById('search-icon')

search.addEventListener("click", function () {

    busqueda.classList.toggle("ocultarelemento")


})