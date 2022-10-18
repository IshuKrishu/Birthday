var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 
var player_y=10;
var player_x=10;
var block_img_width=30;
var block_img_height=30;
var player_object="";
var block_img_object="";

function new_image()
{
	
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
    block_img_object.scaleToWidth(700);
    block_img_object.scaleToHeight(510);
    block_img_object.set({
    top:0,
    left:0
    });
    canvas.add(block_img_object);
    });
	
}



function playSound(){
	x.play();
}
