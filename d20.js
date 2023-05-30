console.log("welcome to my d1 roller hehe")

var $die = $('.die'),
    sides = 100,
    initialSide = 1,
    lastFace,
    timeoutId,
    transitionDuration = 500, 
    animationDuration  = 2000

$('ul > li > a').click(function () {
  reset()
  rollTo($(this).attr('href'))
  return false
})

function randomFace() {
  var face = Math.floor((Math.random() * sides)) + initialSide
  lastFace = face == lastFace ? randomFace() : face
  if (face !=20 ){
    return 1;
  }
  return face;
}

function rollTo(face) {
  clearTimeout(timeoutId)
  
  $('ul > li > a').removeClass('active')
  $('[href=' + face + ']').addClass('active')
  
  $die.attr('data-face', face)
}

function reset() {
  $die.attr('data-face', null).removeClass('rolling')
}

$('.randomize, .die').click(function () {
  $die.addClass('rolling')
  clearTimeout(timeoutId)
  
  timeoutId = setTimeout(function () {
    $die.removeClass('rolling')
    
    rollTo(randomFace())
  }, animationDuration)
  
  return false
})
