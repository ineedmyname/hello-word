var btn_menu=document.querySelector('#formore');
var btns=document.querySelectorAll('.notdisplay');
var btnclick=0;
/*
function btndisplay(){
  if(btnclick==0){
	for(i=0;i<btns.length;i++){
   	  btns[i].style.display='inline-block';
	}
    btnclick++;
	console.log(btnclick);
  }else{
	for(i=0;i<btns.length;i++){
	  btns[i].style.display='none';
	}
	btnclick--;
	console.log(btnclick);
  }
}
btn_menu.onclick=btndisplay;
*//*
function btndisplay(){
  btnclick++;
  for(i=0;i<btns.length;i++){
	btns[i].style.display='inline-block';
  }
  console.log(btnclick);
}
function btnnotdisplay(){
  btnclick--;
  for(i=0;i<btns.length;i++){
	btns[i].style.display='none';
  }
  console.log(btnclick);
}
btn_menu.onclick=function(){btnclick==0?btndisplay():btnnotdisplay();};
*/	  
function btndisplay(){
  if(btnclick==0){
	btn_menu.innerHTML="click again";
	setTimeout('document.querySelector("#education").style.display="inline-block";',80);
	setTimeout('document.querySelector("#work").style.display="inline-block";',160);
    setTimeout('document.querySelector("#skill").style.display="inline-block";',240);
	setTimeout('document.querySelector("#project").style.display="inline-block";',320);
	btnclick++;
	//console.log(btnclick);
  }else{
	btn_menu.innerHTML="click for more";
	for(var i=0;i<btns.length;i++){
	  btns[i].style.display='none';
    }
	btnclick--;
	//console.log(btnclick);
  }
}
btn_menu.onclick=btndisplay;
for(var i=0;i<btns.length;i++){
  btns[i].onclick=function(e){
  document.querySelector('.moreifo').style.display="block";
  console.log(e.target.id);
  document.querySelector('#itemhead').innerHTML=item[e.target.id][0];
  document.querySelector('#item').innerHTML=item[e.target.id][1];
  };
}
	  
document.querySelector('#back').onclick=function(){
  document.querySelector('.moreifo').style.display="none";
}