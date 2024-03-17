document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuJust = document.querySelector('.menu');
    const closeMenuIcon = document.querySelector('.close-menu-icon');
    const langTr = document.querySelector('.lang-tr');
    const langUy = document.querySelector('.lang-uy');

    langTr.addEventListener('click', function () {
        langTr.style.display = 'none';
        langUy.style.display = 'inline';
    });

    langUy.addEventListener('click', function () {
        langUy.style.display = 'none';
        langTr.style.display = 'inline';
    });

    function openMenu() {
        menuIcon.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    }

    function closeMenu(){
        menuIcon.classList.remove('active');
        menuOverlay.classList.remove('active');
    }

    menuIcon.addEventListener('click', function () {
        openMenu();
    });
    closeMenuIcon.addEventListener('click', function () {
        closeMenu();
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menuJust.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuIcon) {
            closeMenu();
        }
    });

    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    });


});
