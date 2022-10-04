$(document).ready(function(){
 $('.header').height($(window).height());
})
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
 })
 $(document).ready(function(){
    $(".navbar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 200;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});