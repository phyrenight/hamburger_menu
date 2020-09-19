!(function(d){

    var open__menu__button = document.getElementsByClassName('button__menu--open');
    var close__menu__button = document.getElementsByClassName('button__menu--close');
    var navbar__mobile = document.getElementsByClassName('navbar__mobile');
    
    open__menu__button[0].onclick = function(){

        navbar__mobile[0].style.display= 'inline-block';
        close__menu__button[0].style.display = "inline-block";
        open__menu__button[0].style.display = 'none';
    }

    close__menu__button[0].onclick = function(){
        navbar__mobile[0].style.display = "none";
        close__menu__button[0].style.display = "none";
        open__menu__button[0].style.display = "inline-block";
    }
}(document));