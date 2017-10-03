$('document').ready(function(){
	var noso = [0,1,2,3,4]
	var soal1 = [{"n":"","i":"","q":"Ekosistem adalah satu kesatuan fungsional yang terjadi interaksi timbal balik antara...","a":"semua makhluk hidup didaerah tersebut","b":"makhluk hidup satu spesies didaerah","c":"semua makhluk hidup dengan lingkungannya","d":"semua penyusun lingkungan dengan makhluk hidup","h":"d"},
	{"n":"","i":"","q":"sesuai dengan cara terbentuknya, ekosistem dikelompokkan menjadi ekosistem...","a":"darat dan air","b":"alam dan buatan","c":"air laut dan air tawar","d":"pegunungan dan padang pasir","h":"b"},
	{"n":"","i":"","q":"ekosistem tersusun atas empat komponen yaitu...","a":"tumbuhan,manusia,hewan dan bakteri","b":"produser,konsumer,reduser dan abiotik","c":"tumbuhan,konsumer,biotik dan pengurai","d":"tanah,air,biotik dan abiotik","h":"b"},
	{"n":"","i":"","q":"berikut yang merupakan lingkungan abiotik dalam suatu ekosistem antara lain...","a":"tumbuhan,pupuk,kambing dan bakteri","b":"bakteri,tumbuhan hijau, kelinci dan ikan","c":"cahaya matahari,air, tanah dan udara","d":"tanah,air,udara,bakteri dan tumbuhan","h":"c"},
	{"n":"","i":"","q":"Hal yang tidak menjelaskan tentang tumbuhan hijau adalah...","a":"merupakan organisme heterotrof","b":"mampu menyusun makanan sendiri","c":"berperan sebagai produsen dalam suatu ekosistem","d":"dapat menurunkan polusi udara dari karbondioksida","h":"c"}];
	


	
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