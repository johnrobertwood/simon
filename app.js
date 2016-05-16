var intervalId;
var count = 0;
var round = '--';
var cpu = [];
var player = [];
var playbackMode = false;
var cpuTurnMode = true;
var replayMode = false;
var strictMode = false;

$('.strict').on('click', function() {
  if (strictMode) {
    strictMode = false;
    $(this).css('background-color', '#CCA707');
  } else {
    strictMode = true;
    $(this).css('background-color', '#ffff00');
  }
})

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
  count = 0;
  round = 1;
  cpu = [];
  player = [];
  playbackMode = false;
  cpuTurnMode = false;
  replayMode = false;
  playSequence();
  document.getElementById('counter').innerHTML = "1";
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
}

function playerTurn(num) {
  var compArr = cpu.slice(0, player.length);
  if(arraysNotEqual(player, compArr)) {
      mistakeSound();
      player = [];
      document.getElementById('counter').innerHTML = "--";
      window.setTimeout(function() {
        document.getElementById('counter').innerHTML = round;
      }, 1000)
      window.setTimeout(playSequence, 2000);
    if (strictMode) {
      cpu = [];
      round = 1;
    } else {
      playbackMode = true;
      replayMode = true;
    }
  } else if (player.length === cpu.length) {
    if (round === 20) {
      alert("You win")
      round = 1;
      cpu = [];
      player = [];
      document.getElementById('counter').innerHTML = "--";
      window.setTimeout(function() {
        document.getElementById('counter').innerHTML = round;
      }, 1000)
      window.setTimeout(playSequence, 2000);
    } else {    
      round += 1;
      player = [];
      playbackMode = true;
      playSequence();
      document.getElementById('counter').innerHTML = round;
    }
  } 
}

function arraysNotEqual(pArr, cArr) {
  return pArr.toString() !== cArr.toString();
}

function playSequence() {
  intervalId = window.setInterval(playButton, 1000);
}

function stopSequence() {
  clearInterval(intervalId);
}

function mistakeSound() {
    var mistake = new Audio('http://adambeagle.com/static/audio/simon_mistake.mp3');
    mistake.play();
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
      
      if(replayMode) {
        replayMode = false; 
        cpuTurnMode = false;
      } else { 
        cpuTurn();
      }
    }
}
