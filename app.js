var count = 0;
var cpu = [];
var player = [];

$('.bottomLeft')
  .mousedown(function() {
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    audio.play();
    $(this).css('background-color', '#ffff00');
  })
  .mouseup(function() {
    var num = 1;
    $(this).css('background-color', '#CCA707');
    if(!isCpuTurn()) {
      playerTurn(num);
    } 
  });

$('.bottomRight')
  .mousedown(function() {
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    audio.play();
    $(this).css('background-color', '#0099ff');
  })
  .mouseup(function() {
    var num = 2;
    $(this).css('background-color', '#094A8F');
    if(!isCpuTurn()){
      playerTurn(num);
    } 
  });

$('.topRight')
.mousedown(function() {
  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  audio.play();
  $(this).css('background-color', '#ff0000');
})
.mouseup(function() {
  var num = 3;
  $(this).css('background-color', '#9F0F17');
  if(!isCpuTurn()){
    playerTurn(num)
  } 
});

$('.topLeft')
.mousedown(function() {
  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  audio.play();
  $(this).css('background-color', '#66ff33');
})
.mouseup(function() {
  var num = 4;
  $(this).css('background-color', '#00A74A');
  if(!isCpuTurn()) {
    playerTurn(num);
  } 
});

$('.power').click(function() {
  if ($('.noiseButton').attr('disabled')) {
    $('.noiseButton').removeAttr('disabled');
    $('.control').removeAttr('disabled');
  } else {
    $('.noiseButton').attr('disabled', true);
    $('.control').attr('disabled', true);
  }
});

$('.start').on('click', function() {
  cpuTurn();
})

//If the count is odd it is the Players turn
function isCpuTurn() {
  return count % 2;
}

function randomNum() {
  return Math.floor(Math.random() * 4) + 1;
}

function randomButton() {
  var num = randomNum();
  cpu.push(num);
  var buttonStr = '';
  if (num === 1) {
    buttonStr = 'bottomLeft';
  } else if (num === 2) {
    buttonStr = 'bottomRight';
  } else if (num === 3) {
    buttonStr = 'topRight';
  } else {
    buttonStr = 'topLeft';
  }
  return buttonStr;
}

function cpuTurn() {
  var button = '.' + randomButton();
  $(button).mousedown();
  setTimeout(function() {
    $(button).mouseup(); 
  }, 500);
  // console.log(cpu)
}

function playerTurn(num) {
  player.push(num);
  if(arraysNotEqual()){
    console.log("WRONG");
    return false;
  }
  setTimeout(function() {
    cpuTurn(); 
  }, 500)
  console.log(player)
  console.log(cpu)
}

function arraysNotEqual() {
  return player.toString() !== cpu.toString();
}












