$('.bottomLeft')
  .mousedown(function() {
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    audio.play();
    $(this).css('background-color', '#ffff00');
  })
  .mouseup(function() {
    $(this).css('background-color', '#CCA707')
  });

$('.bottomRight')
  .mousedown(function() {
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    audio.play();
    $(this).css('background-color', '#0099ff');
  })
  .mouseup(function() {
    $(this).css('background-color', '#094A8F')
  });

$('.topRight')
.mousedown(function() {
  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  audio.play();
  $(this).css('background-color', '#ff0000');
})
.mouseup(function() {
  $(this).css('background-color', '#9F0F17')
});

$('.topLeft')
.mousedown(function() {
  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  audio.play();
  $(this).css('background-color', '#66ff33');
})
.mouseup(function() {
  $(this).css('background-color', '#00A74A')
});

$('.power').click(function() {
  if ($('.noiseButton').attr('disabled')) {
    $('.noiseButton').removeAttr('disabled');
  } else {
    $('.noiseButton').attr('disabled', true);
  }
});

