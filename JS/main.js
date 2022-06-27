/* Affichage du menu */

const showMenu= (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        });
    }
}

showMenu('nav-toggle','nav-menu');

const navlink = document.querySelectorAll('.nav_link');

function linkAction(){
    navlink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navlink.forEach(n => n.addEventListener('click', linkAction));

/* Scroll reveal*/

const sr = ScrollReveal({
    origin: 'top',
    distance : '60px',
    duration : 2000,
    reset: true
});

sr.reveal('.accueil_title',{});
sr.reveal('.button',{delay : 200});
sr.reveal('.accueil_social-icon',{interval: 200});

sr.reveal('.APropos_img',{});
sr.reveal('.APropos_subtitle',{delay : 200});
sr.reveal('.APropos_text',{delay : 200});

sr.reveal('.competences_subtitle',{});
sr.reveal('.competences_1st', {delay: 200});
sr.reveal('.competences_2nd', {delay: 400});
sr.reveal('.competences_3rd',{delay: 600});

sr.reveal('.cards_item',{});

sr.reveal('.contact_input',{delay : 200})


/* to highlight menu items */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll",navHighlighter);

function navHighlighter(){

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY<= (sectionTop + sectionHeight)){
            navlink.forEach(n => n.classList.remove('active'));
            document.querySelector("a[href*=" + sectionId + "]").classList.add("active");
        }
    })
}


let images = ["IMG/greetings.png","IMG/butterfly_catch.png","IMG/coming_through.png","IMG/surprised_phone.png","IMG/pose.png","IMG/breakdance.png","IMG/espresso_drink.png","IMG/the_champ.png"]

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("accueil_image").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 6000);
}

var x = 0;

startTimer();
