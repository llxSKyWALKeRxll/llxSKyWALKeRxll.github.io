$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".navbar .logo a span").addClass("darken");
        } else {
            $(".navbar").removeClass("sticky");
            $(".navbar .logo a span").removeClass("darken");
        }
    });

    // Toggling menu//navbar
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggle("active");
        $(".menu-btn i").toggleClass("active");
    });

});