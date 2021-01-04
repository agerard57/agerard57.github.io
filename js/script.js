var handlerFired;
window.addEventListener('scroll', function (e) {
    var containerTop = document.querySelector('#logo').getBoundingClientRect().top;
    if (containerTop <= 0) {
        if (!handlerFired) {
            handlerFired = 1;
            console.log('container at top of viewport or above');
            document.getElementById("logo_animation").style.display = "block";
            setTimeout(() => {
                document.getElementById("mini_logo").style.left = "9vw";
                document.getElementById("mini_logo").style.opacity = "100%";
            }, 100);

        }
    }
    if (containerTop > 0) {
        handlerFired = 0;
        document.getElementById("mini_logo").style.left = "0vw";
        document.getElementById("mini_logo").style.opacity = "0%";
        document.getElementById("navbar").style.marginLeft = "0px";


    }
});


function showText(id, delay) {
    var elem = document.getElementById(id);
    setTimeout(function () {
        elem.style.opacity = 1;
    }, delay * 750)
}
window.onload = function () {
    showText('fade1', 7);
    showText('fade2', 8);
    showText('fade3', 9);
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//-----------------------------------Modal-----------------------------------

var modaltitle = document.getElementById("modal-title");
var modalsem = document.getElementById("modal-semester");
var modalduree = document.getElementById("modal-duree");
var modalnbpers = document.getElementById("modal-nbpers");
var modalcontent = document.getElementById("modal-desc");
var modalcomp = document.getElementById("modal-comp");
var modallang = document.getElementById("modal-languages");
var modallink = document.getElementById("modal-github-link");
var modalimg = document.getElementById("modal-img");
var modalgit = document.getElementById("modal-github");







var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function block() {
    modal.style.display = "block";
}

var btnc = document.getElementById("myBtn-C");
btnc.onclick = function () {
    block();

    modaltitle.innerHTML = "Projet C"
    modalsem.innerHTML = "<b>Semestre</b> 1"
    modalduree.innerHTML = "<b>Durée :</b> 6 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 3"

    modalcontent.innerHTML = "Mise en application des acquis dans le domaine de l'analyse et de la programmation dans un travail de groupe"
    modalcomp.innerHTML = "Maîtriser les concepts de l'algorithmique et de la programmation"

    modallang.innerHTML = "Langage C"
    modallink.href = "https://github.com/agerard57/JEU_DE_NIM"

    modalimg.src = "medias/img/m-c.png"
}

var btnw1 = document.getElementById("myBtn-WEB1");
btnw1.onclick = function () {
    block();
    modaltitle.innerHTML = "Développement d’un site web statique"
    modalsem.innerHTML = "<b>Semestre</b> 1"
    modalduree.innerHTML = "<b>Durée :</b> 5 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 4"

    modalcontent.innerHTML = "Développement des compétences relationnelles et l’autonomie dans le travail"
    modalcomp.innerHTML = "- Aptitudes à synthétiser l’information écrite et sa présentation orale </br>- Maitrise de la recherche documentaire </br>- Aptitudes à la synthèse des compétences techniques acquises"

    modallang.innerHTML = "HTML5 - CSS3"
    modallink.href = "https://github.com/agerard57/Rap-n-Roll"

    modalimg.src = "medias/img/m-web1.png"
}

var btnw2 = document.getElementById("myBtn-WEB2");
btnw2.onclick = function () {
    modal.style.display = "block";

    modaltitle.innerHTML = "Développement d’un site web"
    modalsem.innerHTML = "<b>Semestre</b> 2"
    modalduree.innerHTML = "<b>Durée :</b> 8 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 6"

    modalcontent.innerHTML = "Mise en œuvre des méthodes de conduite de projet"
    modalcomp.innerHTML = "- Mise en pratique de la méthodologie de conduite de projets </br>- Développement des compétences d’autonomie et d’initiative de l’étudiant </br>- Développement des aptitudes au travail en équipe"

    modallang.innerHTML = "HTML5 - CSS3 - JavaScript"
    modallink.href = "https://github.com/agerard57/AAEIUTM"

    modalimg.src = "medias/img/m-web2.png"
}

var btnj = document.getElementById("myBtn-JAVA");
btnj.onclick = function () {
    modal.style.display = "block";

    modaltitle.innerHTML = "Réalisation d'un logiciel de gestion d’une vidéothèque"
    modalsem.innerHTML = "<b>Semestre</b> 2"
    modalduree.innerHTML = "<b>Durée :</b> 10 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 2"

    modalcontent.innerHTML = "Modélisation complète d'un problème avec UML  sa mise en œuvre en Java"
    modalcomp.innerHTML = "- Programmation par objet</br>- UML</br>- Langage Java (classe, héritage, gestion d'une interface graphique complète et gestion des événements graphiques…) "

    modallang.innerHTML = "Java"
    modallink.href = "https://github.com/agerard57/Videotheque_JAVA"

    modalimg.src = "medias/img/m-java.png"
}

var btnasm = document.getElementById("myBtn-ASM");
btnasm.onclick = function () {
    modal.style.display = "block";

    modaltitle.innerHTML = "Projet Assembleur x86"
    modalsem.innerHTML = "<b>Semestre</b> 2"
    modalduree.innerHTML = "<b>Durée :</b> 4 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 2"

    modalcontent.innerHTML = "Réalisation d'un jeu dans une architecture x86 en .asm"
    modalcomp.innerHTML = "Maîtriser les concepts de fonctionnement d'un ordinateur"

    modallang.innerHTML = "Assembleur 8086"
    modallink.href = "https://github.com/agerard57/JEU_8086_ASM"

    modalimg.src = "medias/img/m-asm.jpg"
}

var btnihm = document.getElementById("myBtn-IHM");
btnihm.onclick = function () {
    modal.style.display = "block";

    modaltitle.innerHTML = "Projet IHM"
    modalsem.innerHTML = "<b>Semestre</b> 2"
    modalduree.innerHTML = "<b>Durée :</b> 10 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 2"

    modalcontent.innerHTML = "Mise en place d'une application avec base de données de gestion des infractions"
    modalcomp.innerHTML = "- Maîtriser les concepts d'ergonomie et d'UX</br>- Gérer l'implémentation d'une BDD dans un projet"

    modallang.innerHTML = "Pascal"
    modallink.href = "https://github.com/agerard57/Projet-IHM"

    modalimg.src = "medias/img/m-ihm.png"
}

var btncpoa = document.getElementById("myBtn-CPOA");
btncpoa.onclick = function () {
    modal.style.display = "block";

    modaltitle.innerHTML = "Projet CPOA"
    modalsem.innerHTML = "<b>Semestre</b> 3"
    modalduree.innerHTML = "<b>Durée :</b> 8 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 2"

    modalcontent.innerHTML = "Mise en application des acquis dans le domaine de l'analyse et de la programmation dans un travail de groupe"
    modalcomp.innerHTML = "- Programmation événementielle</br>- JDBC</br>- Design Pattern DAO</br>- Architecture MVC</br>- Tests unitaires"

    modallang.innerHTML = "Java - JavaFX - JUnit - mySQL - Git"
    modallink.href = "https://github.com/agerard57/GERARD_GIANGRECO_CPOA_TD1_2020"

    modalimg.src = "medias/img/m-cpoa.png"
}

var btnphp = document.getElementById("myBtn-PHP");
btnphp.onclick = function () {
    modal.style.display = "block";

    modaltitle.innerHTML = "Développement d’un site web en PHP"
    modalsem.innerHTML = "<b>Semestre</b> 3"
    modalduree.innerHTML = "<b>Durée :</b> 4 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 2"

    modalcontent.innerHTML = "Création d'un site internet de news en utilisant l'outil PHP ainsi qu'une base de données"
    modalcomp.innerHTML = "- Maitrise de l'implémentation de la PHP</br>- Maitrise de l'implémentation de bases de données dans un projet"

    modallang.innerHTML = "PHP - CSS - JS"
    modallink.href = "https://github.com/agerard57/PHP_projet"

    modalimg.src = "medias/img/m-php.png"
}

var btnga = document.getElementById("myBtn-GA");
btnga.onclick = function () {
    modal.style.display = "block";

    modaltitle.innerHTML = "Développement d’un site web portfolio"
    modalsem.innerHTML = "<b>Semestre</b> 3"
    modalduree.innerHTML = "<b>Durée :</b> 3 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 1"

    modalcontent.innerHTML = "Création d'un site internet de type \"portfolio\" représentant principalement mes projets"
    modalcomp.innerHTML = "- Maitrise de la création d'une page WEB (en particulier l'utilisation du JavaScript)</b>- Création d'un portefolio pour l'avenir"

    modallang.innerHTML = "HTML - CSS - JS"
    modallink.display = "none"
    modalimg.src = "medias/img/GA_PP.png"
}

var btnpd = document.getElementById("myBtn-PD");
btnpd.onclick = function () {
    modal.style.display = "block";

    modaltitle.innerHTML = "Développement d'une application hybride"
    modalsem.innerHTML = "<b>Semestre</b> 3"
    modalduree.innerHTML = "<b>Durée :</b> 8 semaines"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 4"

    modalcontent.innerHTML = "Développement d'un pokedex dans le cadre du projet tuteuré du semestre"
    modalcomp.innerHTML = "Maîtriser de nouveaux concepts de création de pages web et d'applications, notamment avec l'utilisation de ReactJS"

    modallang.innerHTML = "ReactJS - TSX - SCSS - JavaScript - Json - FluentUI"
    modallink.display = "none"
    modalimg.src = "medias/img/m-pd.png"

}

var btnlu = document.getElementById("myBtn-LIGHTUP");
btnlu.onclick = function () {
    modal.style.display = "block";

    modaltitle.innerHTML = "Light Up (Micro-Entreprise)"
    modalsem.innerHTML = "<b>Années</b> 2017-2019"
    modalduree.innerHTML = "<b>Durée :</b> 2-3 ans"
    modalnbpers.innerHTML = "<b>Nombre de personnes dans le groupe :</b> 7"

    modalcontent.innerHTML = "Création et gestion en tant que PDG d'une micro-entreprise ayant pour but la création et le développement d'une lampe de luminothérapie connectée avec une application mobile en Bluetooth"
    modalcomp.innerHTML = "- Esprit d'équipe</br>- Développement d'un site internet</br>- Gestion d'une équipe</br>- Codage de cartes microprossesseur (arduino)</br>- Codage d'une application mobile cross-platform"

    modallang.innerHTML = "C++ - C# - Python"

    modalgit.src = "medias/img/fb.png"
    modallink.href = "https://www.facebook.com/LightUpCondorcet"

    modalimg.src = "medias/img/m-lu.png"
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var btns1 = document.getElementById("btnS1");
var btns2 = document.getElementById("btnS2");
var btns3 = document.getElementById("btnS3");

var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");

btns1.onclick = function () {
    s1.style.display = "block";
    s2.style.display = "none";
    s3.style.display = "none";
}

btns2.onclick = function () {
    s1.style.display = "none";
    s2.style.display = "block";
    s3.style.display = "none";
}

btns3.onclick = function () {
    s1.style.display = "none";
    s2.style.display = "none";
    s3.style.display = "block";
}