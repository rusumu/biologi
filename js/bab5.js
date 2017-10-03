$('document').ready(function(){
	var noso = [0,1,2,3,4]
	var soal1 = [{"n":"","i":"","q":"Energi gerak dan panas pada tubuh makhluk hidup diperoleh dari...","a":"cahaya matahari"
	,"b":"proses fotosintesis","c":"penyusunan makanan","d":"proses oksidasi makanan","h":"a"},
	{"n":"","i":"","q":"Energi yang tersimpan dalam tubuh tumbuhan hijau menjadi sumber makanan bagi...","a":"karnivora","b":"herbivora","c":"parasit","d":"jamur","h":"b"},
	{"n":"","i":"","q":"Makhluk hidup memerlukan energi untuk melakukan berbagai aktivitas, antara lain bergerak, tumbuh dan berkembang diperlukan makanan yang banyak mengandung zat...","a":"lemak","b":"glukosa","c":"protein","d":"karbohidrat","h":"d"},
	{"n":"","i":"","q":"Berikut yang merupakan proses katabolisme adalah...","a":"sintesis lemak","b":"sintesis protein","c":"fotosintesis","d":"respirasi","h":"d"},
	{"n":"","i":"","q":"Tumbuhan hijau menyerap energi matahari melalui...","a":"stomata","b":"lentisel","c":"klorofil","d":"epidermis","h":"a"}];
	


	
	var acaksoal = shuffle(noso);
	
	//cek session index soal
	var is = localStorage.getItem('is');
	if(is == null){
		localStorage.setItem('is',0);
		var is = localStorage.getItem('is');
	}
	
	var jsoal = soal1.length;
	resetSoal(jsoal,is);
	
	var ns = noso[is];
	var data=soal1[ns];
		if(data.i==''){ var img =''; }
		else{
			var img="<img src='img/"+data.i+"' width='100px'>";
		}
		
 
		$('#soal').append(
		"<div class='list-group'>"+
		"<p>"+data.n+". "+data.q+"</p>"+
		img+
		"<a class='list-group-item' onclick=cekjwb('a','"+data.h+"')>"+data.a+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('b','"+data.h+"')>"+data.b+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('c','"+data.h+"')>"+data.c+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('d','"+data.h+"')>"+data.d+"</a>"+
		"</div>");
		
});

function cekjwb(j,k){
	if(j == k)
	{
		alert("benar");
	}else{
		alert("salah");
	}
	
	var i = localStorage.getItem('is');
	var b = parseInt(i)+1;
	localStorage.setItem('is',b);
	location.reload();
}

function resetSoal(jsoal,is){
	console.log("jumlah soal",jsoal);
	console.log("index",is);
	if(is >= jsoal)
	{
		localStorage.setItem('is',0);
	}
	//location.reload();
}

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};