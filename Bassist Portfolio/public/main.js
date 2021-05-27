// ELEMENTS 

const app = document.querySelector('#app');

app.innerHTML = `
<div class="upper-side">
<div class="back-img">

</div>

</div>
<!-- Upper part -->

<div class="container-overlay">
<!-- Bio data -->


<!-- SPOTIFY -->}



<div class="bio-desc" data-aos="slide-down">
    <p class="desc">Músico sesionista<br>Bajista profesional<br>Clases de Bajo en y a domicilio</p>
</div>


<div class="videoplayer cancion">
    <iframe data-aos="slide-down" src="https://open.spotify.com/embed/track/3YCr8Uo5NXZVX8jDHN02pS" width="340" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" id="quequen"></iframe>
</div>


<div class="bio uno">
    <div class="bio-links" data-aos="fade-right">
        <a href="https://www.instagram.com/fran.sarmientox/" class="insta">@fransarmientox</a>
        <a href="https://www.twitch.tv/fransarmientox" class="twitch">twitch.tv/fransarmientox</a>
        <a href="https://www.youtube.com/c/franciscosarmiento" class="youtube">youtube.com/franciscosarmiento</a>
    </div>
</div>


<div class="bioflex">


    <div class="bio dos">

    </div>

</div>


<!-- LINKS -->

<div class="faq-container" data-aos="fade-right">
    <div class="faq spoti">
        <h3 class="faq-title">
            Discord 
        </h3>

        <p class="faq-text">
        En el canal de Discord vas a encontrar tablaturas, partituras y data exclusiva de canciones y análisis musicales, además de una gran comunidad que crece día a día. Te esperamos!
        <a id="discordboton" href="https://discord.gg/invite/GyD7SVC"><img id="discord" src="./assets/img/discord2.png" alt="Sumate a nuestro Discord"></a>
        
        </p>

        <button>
             <i class="fas fa-chevron-down"></i>
             <i class="fas fa-times"></i>
        </button>
    </div>
</div>


    
<div class="faq-container" data-aos="fade-right">
    <div class="faq patreon spoti">
            <h3 class="faq-title">
                Patreon 
            </h3>

            <p class="faq-text">
                Mi idea con el patreon es que podamos tener un canal de conversación directo basado en TIERS. Te invito a conocer distintas formas de ayudarme y armar un camino juntos en el mundo del bajo.                    <a id="patronboton" href="https://www.patreon.com/clasesdebajoenyadomicilio"><img id="patron" src="./assets/img/PATRON.png" alt="Support me on Patreon!"></a> 
            </p>
                
            <button>
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
    </div>
</div>
   
   
<div class="faq-container" data-aos="fade-right">
    <div class="faq cafe spoti ">
        <h3 class="faq-title">
            Cafecito 
        </h3>
            
        <p class="faq-text">
            Un cafecito es una manera de bancar mis proyectos y ayudarme a seguir generando contenido de calidad. Con el café, se incluye tu nombre en los agradecimientos de Youtube.
            <a id="cafeboton" href='https://cafecito.app/fransarmientox' rel='noopener' target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_1.png' alt='Invitame un café en cafecito.app' /></a>
        </p>                
                
        <button>
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
        </button>
    </div>
</div>
   




    <footer class="firma">
        <div class="footerflex">
            <p>Desarrollo y diseño
                <a href="https://www.devcalabro.web.app">@devcalabro</a></p>
            <p>2021 Bs As Argentina</p>
        </div>
    </footer>





`

// <!-- video -->

// <div class="videoplayer item" data-aos="slide-up" data-aos-once="true">
//     <iframe width="360" height="240" src="https://www.youtube.com/embed/pTZGm_xOyg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// </div>




// FUNCION Animations
AOS.init({
    duration: 1100,
})


// DESPLEGABLES 


const boton = document.querySelectorAll('button');
for (e of boton) {
    e.classList.add('faq-toggle');
}

const toggle = document.querySelectorAll('.faq-toggle');


toggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})

// PRELOADER