var d = new Date();
document.getElementById("demo").innerHTML = d;

function changeimg(){
	var img1 = document.getElementById('hanana');
	img1.src = '../static/hana2.jpg';
}
function changeimage(){
	var img1 = document.getElementById('hanana');
	img1.src = '../static/hana.png';
}
var total=0
function info(){
	total=total+1;
		if(total==1 || total==7|| total==13){
			var heading = document.getElementById('header');
			heading.innerHTML = "I am 16 years old";}		
			if(total==2 || total==8 || total==14){
			var heading = document.getElementById('head');
			heading.innerHTML = "my favorite character is Ienshtien ";}
			if(total==3 || total==9 || total==15){
			var heading = document.getElementById('hea');
			heading.innerHTML = "my favorite hobby is drawing";}
						if(total==4 || total==10|| total==16){
			var heading = document.getElementById('hea');
			heading.innerHTML = "";}

			if(total==5 || total==11 || total==17){
			var heading = document.getElementById('head');
			heading.innerHTML = "";}

			if(total==6 || total==12 || total==18){
			var heading = document.getElementById('header');
			heading.innerHTML = "";}


}
