var input = document.querySelectorAll('.in'),
    del = document.querySelector('.delete'),
    back = document.querySelector('.back'),
    out = document.querySelector('.out'),
    monitor = document.querySelector('.result');



//delete anything from result monitor
del.onclick= function () {
  monitor.textContent = ''
}

//delete last number from result monitor
back.onclick = function() {
  var resuAfterDel = monitor.textContent.slice(0, monitor.textContent.length - 1);
  monitor.textContent = resuAfterDel;
}
//show the final result in the monitor
out.onclick = function () {
  var result = eval(monitor.textContent);
  monitor.textContent = result
}

//show the number on the monitor
for(let i = 0; i <= input.length; i++) {
  //console.log(i);
  input[i].onclick = function () {
    monitor.textContent += this.textContent;
  }
}

//toggle black mode
function changeCheck (check) {
  if(check.dataset.check == 0) {
    check.dataset.check = 1;
    check.classList.add('checked');
    document.querySelector('.container').classList.add('black-mode')
  } else {
    check.dataset.check = 0;
    check.classList.remove('checked');
    document.querySelector('.container').classList.remove('black-mode')
  };
}


