var canvas = new fabric.Canvas('mc');
 var x= document.getElementById("myAudio");
var bio=""
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        bio=Img;
        bio.scaleToWidth(700);
        bio.scaleToHeight(510);
        bio.set({
            top:0,left:0
        });
    canvas.add(bio);
    });	
}

function playSound(){
	x.play();
}
