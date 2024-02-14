const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);


$(".flex-slide").each(function(){
  $(this).hover(function(){
      $(this).find('.flex-title').css({
          transform: 'rotate(0deg)',
          top: '10%'
      });
      $(this).find('.flex-about').css({
          opacity: '1'
      });
  }, function(){
      $(this).find('.flex-title').css({
          transform: 'rotate(90deg)',
          top: '15%'
      });
      $(this).find('.flex-about').css({
          opacity: '0'
      });
  })
});