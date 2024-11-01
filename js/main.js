// loader

(function ($) { 
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 2000);
    };
    loader(); 
})(jQuery);

// btn up

let btnup = document.querySelector('.btnup');
window.onscroll = function(){
    if(scrollY >= 102){
        $('header').addClass('active');
        btnup.style.display = 'block';
    }else{
        $('header').removeClass('active');
        btnup.style.display = 'none';
    }
}
btnup.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    });
}

// page load
window.onload = function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    })
}

let open = document.querySelector('#open');
let close = document.querySelector('#close');
open.onclick = function(){
    (function ($) { 
        $(".menu").addClass("open");
        $(".unlockscreen").addClass("lockscreen");
        $("body").addClass("of-h");
    })(jQuery);
};
close.onclick = function(){
    (function ($) { 
        $(".menu").removeClass("open");
        $(".unlockscreen").removeClass("lockscreen");
        $("body").removeClass("of-h");
    })(jQuery);
};

document.querySelector("#btn-help").onclick = function(){
    (function ($) { 
        $("body").addClass("of-h");
    })(jQuery);
};
document.querySelector("#btn-of-h-close").onclick = function(){
    (function ($) { 
        $("body").removeClass("of-h");
    })(jQuery);
};