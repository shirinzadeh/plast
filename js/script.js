$(document).ready(function(){
   /**
    * NAVBAR
    */
      $('.navbar-toggler').click(function() {
      $(this).children().toggleClass('icon-x');
   })

   /**
    * TEAM OWL CAROUSEL
    */
   $(".owl-carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout:2500,
      autoplaySpeed: 1000,
      autoplayHoverPause: true,
      items: 4,
      margin: 24,
      stagePadding: 0,
      nav: false,
      dots: false,
      loop: true,
      responsive: {
         1200: {items: 4}
,         992: { items: 3 },
         768: { items: 2 },
         576: { 
            items: 2,
            stagePadding: 0
          },
          320: {
             items: 1,
             stagePadding: 0,
            //  margin: 100
          }
      }
   });

   /**
    * FAQ SHOW MORE BUTTON
    */
   $('.showmore').click(function() {
      let str = $('.showmore span')
      let arrowIcon = $('.showmore i');

      if(str.eq(0).text() === 'Show another +30 reviews') {
         str.eq(0).text('Close reviews');
         arrowIcon.eq(0).attr('class', 'icon-chevron-up');
         $('#hiddenFaqs').slideDown(500);
      } else {
         $('#hiddenFaqs').slideUp(500);
         str.eq(0).text('Show another +30 reviews');
         arrowIcon.eq(0).attr('class', 'icon-chevron-down');
      }
   });

   /**
    * FAQ ACCORDION
    */
   $(document).on("click",'.faq .accordion-header', function () {
      const $t = $(this);

      const parentAccItem = $t.parents('.accordion-item');
      let trg = parentAccItem.attr("data-trig");
      let accItem = $t.parents('.accordion').find('.accordion-item');

      accItem.removeClass('isExpanded');
       if (trg == 0) {
         accItem.attr("data-trig",'0');
         parentAccItem.attr("data-trig",'1');
         parentAccItem.addClass('isExpanded');
       } else {
         parentAccItem.removeClass('isExpanded');
         parentAccItem.attr("data-trig",'0');
       }   
   })

   /**
    * increase textarea height based on content
    */
   $("textarea").each(function () {
      this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    });

   /**
    * REMOVE DEFAULT VALUE OF INPUT ON FOCUS
    */
   let phoneInput = $('.phone-field');

      $(phoneInput).each(function() {
          $.data(this, 'default', this.value);
      }).css("color","#e0e0e0")
      .focus(function() {
          if (!$.data(this, 'edited')) {
              this.value = "";
              $(this).css("color","#424242");
          }
      }).change(function() {
          $.data(this, 'edited', this.value != "");
      }).blur(function() {
          if (!$.data(this, 'edited')) {
              this.value = $.data(this, 'default');
              $(this).css("color","#e0e0e0");
          }
      });W

   /**
    * ON SCROLL
    */
   $(window).scroll(function () {
      // ADD CLASS TO FIXED NAVBAR ON SCROLL
     var $nav = $(".navbar-fixed");
     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());


     //CHANGE ACTIVE CLASS ON SCROLL
     let $y = $(this).scrollTop();
     $('.nav-link').each(function (event) {
         if ($y >= $($(this).attr('href')).offset().top - 200) {
             $('.nav-link').not(this).removeClass('active');
             $(this).addClass('active');
         } else if($y <= 500) {
            $('.nav-link').not(this).removeClass('active');
         }
     });
   });
 });
