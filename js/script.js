$(document).ready(function(){
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
   $('.faq .accordion-header').each(function() {
      let $this = $(this);

      $this.click(function() {
         const accordionItem = $this.parents('.accordion-item');
         const collapsedContent = accordionItem.find('.accordion-collapse')
         let isCollapsed = !collapsedContent.hasClass('show') //return true

         if(isCollapsed) {
            //Add isExpanded class to only collapsed accordion
            accordionItem.addClass('isExpanded').siblings().removeClass('isExpanded') 
         } 
      })
   }) ;

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
   let phoneInput = $('input[type="tel"]');
   let defaultVal = phoneInput.val();
  
   phoneInput.focus(function() {
       if(phoneInput.val() == defaultVal) {
         phoneInput.val("") ;
         phoneInput.addClass('text-color');
       }
   }).blur(function(){
       if(phoneInput.val().length == 0) {
            phoneInput.val(defaultVal);
       }
   });

   $('.navbar-toggler').click(function() {
      $(this).children().toggleClass('icon-x');
   })

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
