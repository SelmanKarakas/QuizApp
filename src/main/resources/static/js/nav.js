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

    let slideInterval = setInterval(function () {
        sectionIndex = (sectionIndex < totalSlides - 1) ? sectionIndex + 1 : 0;
        setIndex();
    }, 5000);

    slider.addEventListener("mouseenter", function () {
        clearInterval(slideInterval);
    });

    slider.addEventListener("mouseleave", function () {
        slideInterval = setInterval(function () {
            sectionIndex = (sectionIndex < totalSlides - 1) ? sectionIndex + 1 : 0;
            setIndex();
        }, 5000);
    });

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

    const sliderScrollbar = document.querySelector(".news-section .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb');
    const imageList = document.querySelector(".news-container ");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    let isDragging = false;
    let startX;
    let thumbStartPosition;

    scrollbarThumb.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        thumbStartPosition = scrollbarThumb.offsetLeft;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbStartPosition + deltaX;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
        isDragging = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
});