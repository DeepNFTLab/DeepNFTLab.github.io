const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


const home = document.querySelector('#home_bar')
const about = document.querySelector('#about_bar')
const gallery = document.querySelector('#gallery_bar')
const roadmap = document.querySelector('#roadmap_bar')
const team = document.querySelector('#team_bar')
const contact = document.querySelector('#contact_bar')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

home.addEventListener('click',function(){
    menuLinks.classList.toggle('active');
});
about.addEventListener('click',function(){
    menuLinks.classList.toggle('active');
});
gallery.addEventListener('click',function(){
    menuLinks.classList.toggle('active');
});
roadmap.addEventListener('click',function(){
    menuLinks.classList.toggle('active');
});
team.addEventListener('click',function(){
    menuLinks.classList.toggle('active');
});
contact.addEventListener('click',function(){
    menuLinks.classList.toggle('active');
});