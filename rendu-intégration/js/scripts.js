function gestionDiv(element){
  var  text = document.getElementById(element);
  var  clique = document.getElementsByClassName('card__trigger');
  var more= "En savoir -"
  var less="En savoir -"
  if(text.style.display == "none"){
    text.style.display = "block";
    clique = more;
  }
  else{
    clique= less;
    text.style.display="none"
  }
}

if ($(".card__trigger").css('display', 'block')){
  $(".card p:nth-child(3)").css('color','rgba(255, 255, 255, 0.92)').css("height:60%");
}
else{
  ($("span:nth-child(1)").css('display','block'))
}