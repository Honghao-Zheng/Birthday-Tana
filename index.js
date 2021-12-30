var numberOfBeforeOpen = document.querySelectorAll(".beforeOpen").length;
var numberOfAfterOpen = document.querySelectorAll(".afterOpen").length;
document.querySelector(".box").addEventListener("mouseover", function() {
  document.querySelector(".box").classList.add("mouseOver");
});
document.querySelector(".box").addEventListener("mouseout", function() {
  document.querySelector(".box").classList.remove("mouseOver");
});

document.querySelector(".box").addEventListener("click", function() {
  document.querySelector(".box").classList.replace("box","boxOpened");
  document.querySelector(".boxOpened").classList.remove("mouseOver");

  for (var i = 0; i < numberOfBeforeOpen; i++) {
  document.querySelectorAll(".beforeOpen")[i].classList.add("hide");
  }

// 准备好了吗！！
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[0].classList.remove("hide");
  },0);
// 放大音量！！
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[0].classList.add("hide");
  },5000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[1].classList.remove("hide");
  },5000);
// 开！唱！
// 生日歌！！！
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[1].classList.add("hide");
  },10000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[2].classList.remove("hide");
  },10000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[3].classList.remove("hide");
  },10000);
  // 请准备好😒
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[2].classList.add("hide");
  },15000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[3].classList.add("hide");
  },15000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[4].classList.remove("hide");
  },15000);

//开始！！！
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[4].classList.add("hide");
  },23000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[5].classList.remove("hide");
  },23000);



  setTimeout(function(){
    new Audio('sounds/bad.m4a').play();
  },23000);
//（祝你蛋糕发霉）
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[6].classList.remove("hide");
  },23000+500);
  //（祝你洗澡没水）
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[7].classList.remove("hide");
  },23000+3000);
  //（祝你出门见鬼）
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[8].classList.remove("hide");
  },23000+6000);

  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[5].classList.add("hide");
  },23000+12000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[6].classList.add("hide");
  },23000+12000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[7].classList.add("hide");
  },23000+12000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[8].classList.add("hide");
  },23000+12000);


  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[9].classList.remove("hide");
  },23000+13000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[10].classList.remove("hide");
  },23000+17000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[11].classList.remove("hide");
  },23000+21000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[12].classList.remove("hide");
  },23000+25000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[13].classList.remove("hide");
  },23000+28000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[14].classList.remove("hide");
  },23000+31000);

  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[9].classList.add("hide");
  },23000+31000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[10].classList.add("hide");
  },23000+31000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[11].classList.add("hide");
  },23000+31000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[12].classList.add("hide");
  },23000+31000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[13].classList.add("hide");
  },23000+31000);

  setTimeout(function(){
    new Audio('sounds/good.mp3').play();
  },23000+31000);

  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[14].classList.add("hide");
  },23000+80000);
  setTimeout(function(){
    document.querySelectorAll(".afterOpen")[15].classList.remove("hide");
  },23000+80000);

  //     for (var j = 0; j < numberOfAfterOpen; j++) {
  // var showIt=document.querySelectorAll(".afterOpen")[j];
  // if(j==2){
  //
  // }

});


    // function showWord(word) {
    //   setTimeout(function() {
    //     word.classList.remove("hide");
    //   }, 10000);
    //
    // }
