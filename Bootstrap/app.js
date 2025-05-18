// Set the date we're counting down to
var countDownDate = new Date("Jul 15, 2025 15:37:25").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementsByClassName("demo").innerHTML = days + "روز    " + hours + "ساعت   "
    //     + minutes + "دقیقه   " + seconds + "ثانیه   ";

    var z = document.getElementsByClassName('demos');
    for (const element of z) {
        element.innerHTML =  days + "روز    " + hours + "ساعت   "
            + minutes + "دقیقه   " + seconds + "ثانیه   "
    }


    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = " ";
        var y = document.getElementsByClassName('demos');
        for (var i = 0 ; i <z.length;i++){
            y[i].innerHTML='';
        }

        // document.getElementById("after-expire").setAttribute('id' , "offer-expire-text");
        var g = document.getElementsByClassName('after-expire');
        for (var i = 0 ; i <z.length;i++){
            g[i].classList.add('offer-expire-text');
        }

        // document.getElementById("offer-expire-text-inner").innerHTML = "زمان تخفبف به پـایـان رسـیده";
        var d = document.getElementsByClassName('offer-expire-text-inner');
        for (var i = 0 ; i <z.length;i++){
            d[i].innerHTML='زمان تخفیف به پـایـان رسـیده';
        }

        // document.getElementById("offer-blur").style.filter = "blur(3px)";
        var t = document.getElementsByClassName('offer-blur');
        for (var i = 0 ; i <z.length;i++){
            t[i].style.filter='blur(3px)';
        }

    }
}, 1000);

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
    rtl:true,
    items:4,
    loop:true,
    margin:0,
    autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});