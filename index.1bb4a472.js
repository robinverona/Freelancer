const mobileMenu=document.querySelector(".sidebar"),mobileMenuButton=document.querySelector("#sidebar__button--open"),mobileCloseMenuButton=document.querySelector("#sidebar-header__button--close");console.log(mobileMenu),addEventListener("load",(()=>{console.log(mobileMenu.classList),console.log(window.innerHeight),mobileMenu.style.height=`${window.innerHeight}px`})),mobileMenuButton.addEventListener("click",(()=>{mobileMenu.classList.remove("sidebar--hidden"),mobileMenu.classList.add("sidebar--open"),document.querySelector("body").style.position="fixed",console.log(mobileMenu.classList),console.log(window.innerHeight)})),mobileCloseMenuButton.addEventListener("click",(()=>{mobileMenu.classList.remove("sidebar--open"),mobileMenu.classList.add("sidebar--hidden"),document.querySelector("body").style.position="static",console.log(mobileMenu.classList)}));
//# sourceMappingURL=index.1bb4a472.js.map
