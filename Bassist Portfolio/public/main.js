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
    <iframe data-aos="slide-down" src="https://open.spotify.com/embed/track/3YCr8Uo5NXZVX8jDHN02pS" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" id="quequen"></iframe>
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


<!-- LINKS-->

<div class="faq-container" data-aos="fade-right">
    <div class="faq spoti">
        <h3 class="faq-title">
            Discord </h3>

        <div class="faq-text">

        </div>

        <button>
<i class="fas fa-chevron-down"></i>
<i class="fas fa-times"></i>
</button>
    </div>
</div>

<div class="link-doble">
    <div class="dona-patreon">
        <div class="faq-container" data-aos="fade-right">
            <div class="faq patreon">
                <h3 class="faq-title">
                    Patreon </h3>

                <p class="faq-text">
                    DESCRIPTION A REALIZAR
                </p>

                <button>
    <i class="fas fa-chevron-down"></i>
    <i class="fas fa-times"></i>
</button>
            </div>
        </div>
    </div>
    <div class="dona-cafe">
        <div class="faq-container" data-aos="fade-right">
            <div class="faq cafe ">
                <h3 class="faq-title">
                    Cafecito </h3>
                <div class="flexcafe">
                    <p class="faq-text">
                        Gracias por ayudarme con tu cafe! me ayudas a seguir generando contenido… Te pongo en los agradecimientos de Youtube!
                    </p>
                </div>

                <button>
    <i class="fas fa-chevron-down"></i>
    <i class="fas fa-times"></i>
</button>
            </div>
        </div>
    </div>


    <!-- video -->

    <div class="videoplayer item" data-aos="slide-up" data-aos-once="true">
        <iframe width="360" height="240" src="https://www.youtube.com/embed/pTZGm_xOyg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>



    <footer class="firma">
        <div class="footerflex">
            <p>Desarrollo y diseño
                <a href="https://www.instagram.com/devcalabro/">@devcalabro</a></p>
            <p>2021 Bs As Argentina</p>
        </div>
    </footer>




</div>
`




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