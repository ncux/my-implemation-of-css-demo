const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

// The navTop stays constant the whole time. Meanwhile, the scrollY gradually increases as we move down the page.
// Thus, we'll need to trigger our sticky functionality when scrollY is greater than navTop.

function stickyNavigation() {
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);

    if (window.scrollY >= navTop) {
        // nav offsetHeight = height of nav
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', stickyNavigation);

