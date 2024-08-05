window.addEventListener('scroll', function() {
    const headerTitle = document.querySelector('.header-title');
    const header = document.querySelector('header');
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        headerTitle.style.opacity = '0';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
        headerTitle.style.opacity = '1';
        header.style.backgroundColor = '#000000';
    }
});