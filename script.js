const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navlinkItems = Array.from(navLinks.querySelectorAll('a'));

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});


navlinkItems.forEach((link)=>{
    link.addEventListener('click',(event)=>{
        event.preventDefault();
        navlinkItems.forEach((item)=>{
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});
