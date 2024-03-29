document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuJust = document.querySelector('.menu');
    const closeMenuIcon = document.querySelector('.close-menu-icon');
    var navbar = document.querySelector('.navbar');
    var lastScrollTop = 0;
    var path = window.location.pathname;
    var navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === path) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
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
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll down
            navbar.classList.add('active');
        } else {
            // Scroll up
            navbar.classList.remove('active');
        }

        lastScrollTop = currentScroll;
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
    /*    const sliderScrollbar = document.querySelector(".news-section .slider-scrollbar");
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
        };*/
    let listVideo = document.querySelectorAll('.video-list .list-video');
    let mainVideo = document.querySelector('.main-video .video');
    let title = document.querySelector('.main-video .title');

    listVideo.forEach(video => {
        video.onclick = () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            if (video.classList.contains('active')){
                let src = video.children[0].getAttribute('src');
                mainVideo.src = src;
                let text = video.children[1].innerHTML
                title.innerHTML = text;
            }
        }
    })

});