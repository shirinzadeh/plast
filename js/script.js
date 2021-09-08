$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      items: 4,
      margin: 24,
      stagePadding: 24,
      nav: false,
      dots: false,
      loop: false,
      responsive: {
         1200: {items: 4}
,         992: { items: 3 },
         768: { items: 2 },
         450: { 
            items: 2,
            stagePadding: 0
          },
          320: {
             items: 1,
             stagePadding: 0
          }
      }
   });

   $('.showmore').click(function() {
      let $this = $(this);

      let str = $('.showmore span')
      let downIcon = $('.showmore i');

      if(str.eq(0).text() === 'Show another +30 reviews') {
         str.eq(0).text('Close reviews');
         downIcon.eq(0).attr('class', 'icon-chevron-up');
         $('#hiddenFaqs').slideDown(500);
      } else {
         $('#hiddenFaqs').slideUp(500);
         str.eq(0).text('Show another +30 reviews');
         downIcon.eq(0).attr('class', 'icon-chevron-down');
          }

   })

   //without if statement console give Cannot read property 'addEventListener' of null at pages which cannot find the id
// for(let i=0; i<moreBtnText.length; i++) {
//    if(moreBtnText) {
//       moreBtnText[i].addEventListener("click", ()=> {
//          let content = moreBtnText[i].textContent; //Show more
//          let hiddenContent = document.querySelectorAll('#hidden-elements')
//             if( content === "Show more" ) {
//                moreBtnText[i].textContent = "Show less";
//                moreBtnIcon[i].classList.value = "fas fa-minus" //change plus icon to minus
//                hiddenContent[i].classList.remove('d-none'); 
//                hiddenContent[i].classList.add('d-block');
//                // }
//             } else {
//                moreBtnText[i].textContent = "Show more";
//                moreBtnIcon[i].classList.value = "fas fa-plus" //change minus icon to plus
//                hiddenContent[i].classList.remove('d-block'); 
//                hiddenContent[i].classList.add('d-none');
//             }
//       })
//    }
// }

   // $('.faq .accordion-button').each(function(i, el) {
   //    $(this).click(function() {
   //       if(!$(this).hasClass('collapsed')) {
   //          $(this).parents('.accordion-item').addClass('isExpanded')
   //       } else {
   //          $(this).parents('.accordion-item').removeClass('isExpanded')
   //       }
   //    })
   // })
      
 });