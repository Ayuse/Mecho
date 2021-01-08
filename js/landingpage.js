//Paystack
var paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', payWithPaystack, false);
function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: 'pk_test_9245c8d4e7b803050a19fac3daffe93d2ecf8a92', // Replace with your public key
    email: document.getElementById('email-address').value,
    amount: 1000 * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
    currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
    ref: 'aa', // Replace with a reference you generated
    callback: function (response) {
      //this happens after the payment is completed successfully
      var reference = response.reference;
      alert('Payment complete! Reference: ' + reference);
      // Make an AJAX call to your server with the reference to verify the transaction
    },
    onClose: function () {
      alert('Transaction was not completed, window closed.');
    },
  });
  handler.openIframe();
}

// HEADER ANIMATION
window.onscroll = function () {
  scrollFunction();
};
var element = document.getElementById('body');
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    $('.navbar').addClass('fixed-top');
    element.classList.add('header-small');
    $('body').addClass('body-top-padding');
  } else {
    $('.navbar').removeClass('fixed-top');
    element.classList.remove('header-small');
    $('body').removeClass('body-top-padding');
  }
}

// OWL-CAROUSAL
$('.owl-carousel').owlCarousel({
  items: 3,
  loop: true,
  nav: false,
  dot: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// SCROLLSPY
$(document).ready(function () {
  $('.nav-link').click(function () {
    var t = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(t).offset().top - 75,
      },
      {
        duration: 1000,
      }
    );
    $('body').scrollspy({ target: '.navbar', offset: $(t).offset().top });
    return false;
  });
});

// AOS
AOS.init({
  offset: 120,
  delay: 0,
  duration: 1200,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
  disable: 'mobile',
});

//SIDEBAR-OPEN
$('#navbarSupportedContent').on('hidden.bs.collapse', function () {
  $('body').removeClass('sidebar-open');
});

$('#navbarSupportedContent').on('shown.bs.collapse', function () {
  $('body').addClass('sidebar-open');
});

window.onresize = function () {
  var w = window.innerWidth;
  if (w >= 992) {
    $('body').removeClass('sidebar-open');
    $('#navbarSupportedContent').removeClass('show');
  }
};
