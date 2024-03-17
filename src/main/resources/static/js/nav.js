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
        menuIcon.classList.add('active');
        menuOverlay.classList.add('active');
    }

    function closeMenu() {
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

    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');
    const indicatorParents = document.querySelector('.control ul');
    let sectionIndex = 0;
    const totalSlides = slider.querySelectorAll('section').length;

    function setIndex() {
        document.querySelectorAll('.control li').forEach((indicator) => {
            indicator.classList.remove('selected');
        });
        slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
        indicatorParents.children[sectionIndex].classList.add('selected');
    }

    document.querySelectorAll('.control li').forEach(function (indicator, ind) {
        indicator.addEventListener('click', function () {
            sectionIndex = ind;
            setIndex();
        });
    });

    leftArrow.addEventListener('click', function () {
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : totalSlides - 1;
        setIndex();
    });

    rightArrow.addEventListener('click', function () {
        sectionIndex = (sectionIndex < totalSlides - 1) ? sectionIndex + 1 : 0;
        setIndex();
    });
});