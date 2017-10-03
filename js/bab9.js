$('document').ready(function(){
	var noso = [0,1,2,3,4]
	var soal1 = [{"n":"","i":"","q":"Manusia selalu mendambakan lingkungan yang...","a":"ramai,menyenangkan dan ekonomis","b":"menguntungkan, ramai, dan tinggi polusi","c":"bernilai ekonomi, modern, dan ramai","d":"bernilai ekonomi, nyaman dan rendah polusi","h":"a"},
	{"n":"","i":"","q":"Jenis tanaman pangan berikut ini yang tidak dimanfaatkan untuk mengembalikan dan meningkatkan kesuburan tanah adalah...","a":"tebu","b":"buncis","c":"kedelai","d":"kacang tanah","h":"a"},
	{"n":"","i":"","q":"Penggunaan pupuk ZA secara berlebihan akan menyebabkan...","a":"tanaman tumbuh subur","b":"bunga dan buah tumbuh baik","c":"keadaan tanah menjadi terlalu asam","d":"tanah akan kekurangan unsur nitrogen","h":"d"},
	{"n":"","i":"","q":"Untuk mengatasi sampah dari bahan plastik, sebaiknya sampah tersebut...","a":"dibakar","b":"ditimbun tanah","c":"dibuang ke sungai","d":"dibuang dalam bak sampah","h":"b"},
	{"n":"","i":"","q":"Pengairan yang berlebihan kurang menguntungkan karena...","a":"tanah menjadi lunak","b":"kelembaban tanah terganggu","c":"pertumbuhan akar akan terganggu","d":"tanah menjadi padat dan tidak berongga","h":"d"}];
	
	
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