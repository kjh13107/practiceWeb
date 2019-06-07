/*코드의 재사용을 위한 js파일 생성 */
/* 객체생성 및 메소드사용 */
var Links = {
  setColor: function(color) {
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //     while(i < alist.length){
  //       alist[i].style.color = color;
  //       i = i + 1;
  //     }
    $('a').css('color', color); // jquery를 사용
  }
}

var Body = {
  setColor: function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color); // jquery를 사용
  },
  setBackgroundColor: function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color); // jquery를 사용
  }
}

/* function을 이용한 event처리 */
function nightDayHandler(self) {
  if(self.value === 'NIGHT') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'DAY';

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'NIGHT';

    Links.setColor('blue');
  }
}
