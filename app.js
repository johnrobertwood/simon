var count = 0;
var cpu = [];
var player = [];
var playbackMode = false;
var cpuTurnMode = false;

$('.bottomLeft')
  .mousedown(function() {
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    audio.play();
    $(this).css('background-color', '#ffff00');
  })
  .mouseup(function() {
    var num = 1;
    $(this).css('background-color', '#CCA707');
    if(!playbackMode && !cpuTurnMode) {
      player.push(num)
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
    if(!playbackMode && !cpuTurnMode){
      player.push(num)
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
  if(!playbackMode && !cpuTurnMode){
    console.log('playerturn')
    player.push(num)
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
  if(!playbackMode && !cpuTurnMode){
    console.log('playerturn')
    player.push(num)
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
  playSequence();

})

//If the count is odd it is the Players turn
function isCpuTurn() {
  return  player.length !== cpu.length;
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
    cpuTurnMode = false;
  }, 500);
  console.log(cpu)
}

function playerTurn(num) {
  // console.log(cpu)
  // console.log(player)
  // var compArr = cpu.slice(0, player.length)
  // if(arraysNotEqual()) {
  //   return false;
  // }
  playbackMode = true;
  playSequence();
}

function arraysMatch(pArr, cArr) {
  return pArr.toString() === cArr.toString();
}

function arraysNotEqual() {
  return player.toString() !== cpu.toString();
}

var intervalId;

function playSequence() {
  intervalId = window.setInterval(playButton, 1000);
}

function stopSequence() {
  clearInterval(intervalId);
}

function playButton(index) {
    num = cpu[count]
    var buttonStr = '';
    if (num === 1) {
      buttonStr = '.bottomLeft';
    } else if (num === 2) {
      buttonStr = '.bottomRight';
    } else if (num === 3) {
      buttonStr = '.topRight';
    } else if (num === 4) {
      buttonStr = '.topLeft';
    }
    $(buttonStr).mousedown();
    setTimeout(function() {
      $(buttonStr).mouseup(); 
    }, 500);

    count += 1;

    if (count > cpu.length) {
      count = 0;
      stopSequence();
      playbackMode = false;
      cpuTurnMode = true;
      cpuTurn();
    }
}












