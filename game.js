//alert("connected");
var current=6;
var colors = colorOfSize(6);
var targetColor=pickedColor();
var box=document.querySelectorAll(".box");
var display=document.getElementById("target");
var messageDisplay=document.getElementById("message");
var resetButton=document.getElementById("reset");
var easyButton=document.getElementById("easy");
var hardButton=document.getElementById("hard");
easyButton.addEventListener("click",function(){
easyButton.classList.add("selected");
hardButton.classList.remove("selected");
current=3;
messageDisplay.textContent="";
document.querySelector("h1").style.background="steelblue";
colors = colorOfSize(3);
targetColor=pickedColor();
display.textContent=targetColor;
for(var i=0;i<box.length;i++){
	if(colors[i])
		box[i].style.background=colors[i];
	else
		box[i].style.display="none";
}
});
hardButton.addEventListener("click",function(){
easyButton.classList.remove("selected");
hardButton.classList.add("selected");
current=6;
colors = colorOfSize(6);
targetColor=pickedColor();
display.textContent=targetColor;
messageDisplay.textContent="";
document.querySelector("h1").style.background="steelblue";
for(var i=0;i<box.length;i++){
	box[i].style.display="block";
		box[i].style.background=colors[i];

	}
});
display.textContent=targetColor;
for(var i=0;i<box.length;i++){
	box[i].style.background=colors[i];
	box[i].addEventListener("click",function(){
		if(this.style.background === targetColor){
			messageDisplay.textContent="Correct";
			messageDisplay.style.color="green";
			changeColor(targetColor);
			document.querySelector("h1").style.background=targetColor;
			resetButton.textContent="Play Again";
		}
		else{
			messageDisplay.textContent="Try Again";
			messageDisplay.style.color="red";
			this.style.background="black";
	}
	});
}
resetButton.addEventListener("click",function(){
	colors=colorOfSize(current);
	targetColor=pickedColor();
	display.textContent=targetColor;
	for(var i=0;i<colors.length;i++)
		box[i].style.background=colors[i];
	resetButton.textContent="reset";
	messageDisplay.textContent="";
	document.querySelector("h1").style.background="steelblue";
});
function changeColor(targetColor){
	for(var i=0;i<colors.length;i++)
		box[i].style.background=targetColor;
}
function pickedColor(){
	var index=Math.floor(Math.random()*colors.length);
	return colors[index];
}
function colorOfSize(num){
	var color=[];
	for(var i=0;i<num;i++){
		var a=Math.floor(Math.random()*256);
		a=a.toString();
		var b=Math.floor(Math.random()*256);
		b=b.toString();
		var c=Math.floor(Math.random()*256);
		c=c.toString();
		color.push("rgb("+a+", "+b+", "+c+")");
	}
	return color;
}
								