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
    modalgit.src = "medias/img/git.png"
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
    modalgit.src = "medias/img/git.png"
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
    modalgit.src = "medias/img/git.png"
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
    modalgit.src = "medias/img/git.png"
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
    modalgit.src = "medias/img/git.png"
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
    modalgit.src = "medias/img/git.png"
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
    modalgit.src = "medias/img/git.png"
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
    modalgit.src = "medias/img/git.png"
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
    modalcomp.innerHTML = "- Maitrise de la création d'une page WEB (en particulier l'utilisation du JavaScript)</br>- Création d'un portefolio pour l'avenir"

    modallang.innerHTML = "HTML - CSS - JS"
    modalgit.src = "medias/img/git.png"
    modallink.href = "https://github.com/agerard57/agerard57.github"

    modalimg.src = "medias/img/GA_pp.jpg"
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
    
    modalgit.src = "medias/img/git.png"
    modallink.href = "https://github.com/agerard57/Pokedex-Front"
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