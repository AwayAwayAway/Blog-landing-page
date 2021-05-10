const destopBtns = document.querySelectorAll(".destop-btns")
const submenu = document.querySelectorAll(".submenu")
const destopIcon = document.querySelectorAll(".d-menu-icon")
const body = window.document;


//Destop menu

destopBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        const showSubmenu = e.currentTarget;
        if (showSubmenu == destopBtns[0]) {
            if ( submenu[1].classList.contains('submenuShow') || submenu[2].classList.contains('submenuShow')) { 
                submenu[1].classList.remove('submenuShow');
                submenu[2].classList.remove('submenuShow');
            } 
            submenu[0].classList.toggle('submenuShow');
            
        } else if (showSubmenu === destopBtns[1]) {
            if ( submenu[0].classList.contains('submenuShow') || submenu[2].classList.contains('submenuShow')) { 
                submenu[0].classList.remove('submenuShow');
                submenu[2].classList.remove('submenuShow');
            } 
            submenu[1].classList.toggle('submenuShow');   
        }
        else {
            if ( submenu[0].classList.contains('submenuShow') || submenu[1].classList.contains('submenuShow')) { 
                submenu[0].classList.remove('submenuShow');
                submenu[1].classList.remove('submenuShow');
            } 
            submenu[2].classList.toggle('submenuShow');
        }
    })  
})

//Destop menu arrows

destopBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        const showSubmenu = e.currentTarget;
        if (showSubmenu == destopBtns[0]) {
            if ( destopIcon[1].classList.contains('d-menu-icon-rotate') || destopIcon[2].classList.contains('d-menu-icon-rotate')) { 
                destopIcon[1].classList.remove('d-menu-icon-rotate');
                destopIcon[2].classList.remove('d-menu-icon-rotate');
            } 
            destopIcon[0].classList.toggle('d-menu-icon-rotate'); 
            
        } else if (showSubmenu === destopBtns[1]) {
            if ( destopIcon[0].classList.contains('d-menu-icon-rotate') || destopIcon[2].classList.contains('d-menu-icon-rotate')) { 
                destopIcon[0].classList.remove('d-menu-icon-rotate'); 
                destopIcon[2].classList.remove('d-menu-icon-rotate'); 
            } 
            destopIcon[1].classList.toggle('d-menu-icon-rotate'); 
            
        }
        else {
            if ( destopIcon[0].classList.contains('d-menu-icon-rotate') || destopIcon[1].classList.contains('d-menu-icon-rotate')) { 
                destopIcon[0].classList.remove('d-menu-icon-rotate');
                destopIcon[1].classList.remove('d-menu-icon-rotate');
            } 
            destopIcon[2].classList.toggle('d-menu-icon-rotate');
        }
    })  
})

// reset menu on scroll

body.addEventListener('scroll', () => {
    submenu[0].classList.remove('submenuShow');
    submenu[1].classList.remove('submenuShow');
    submenu[2].classList.remove('submenuShow');
    destopIcon[0].classList.remove('d-menu-icon-rotate'); 
    destopIcon[1].classList.remove('d-menu-icon-rotate'); 
    destopIcon[2].classList.remove('d-menu-icon-rotate'); 
})




// mobile menu JS

const mobileToggle = document.querySelector("#mobile-toggle")
const mobileMenu = document.querySelector(".mobile-menu__dropdown")
const mobileMenuButtons = document.querySelectorAll(".mobile-menu-buttons")
const mobileSubmenu = document.querySelectorAll(".mobile-menu__submenu")

console.log (mobileToggle)
console.log (mobileMenu)
console.log (mobileMenuButtons)
console.log (mobileSubmenu)


mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-show');
})

mobileMenuButtons.forEach ( (mBtn) => {
    mBtn.addEventListener('click', (m) => {
        const submenuTarget = m.currentTarget;
        console.log(submenuTarget);
        if (submenuTarget == mobileMenuButtons[0]) {
            mobileSubmenu[0].classList.toggle("mobile-submenu-show")
        } 
        else if (submenuTarget == mobileMenuButtons[1])
            mobileSubmenu[1].classList.toggle("mobile-submenu-show")
        else {
            mobileSubmenu[2].classList.toggle("mobile-submenu-show")
        }
    })
})

body.addEventListener('scroll', () => {
    mobileMenu.classList.remove("mobile-menu-show");
})