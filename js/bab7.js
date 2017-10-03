$('document').ready(function(){
	var noso = [0,1,2,3,4]
	var soal1 = [{"n":"","i":"","q":"Dari bermacam-macam tumbuhan di bawah ini, yang bukan termasuk tumbuhan heterotrof adalah...","a":"benalu","b":"anggrek","c":"tali putri","d":"raflesia","h":"d"},
	{"n":"","i":"","q":"Didalam akuarium ikan mendapat keuntungan dari tumbuhan air berupa...","a":"oksigen dari hasil fotosintesis","b":"Karbohidrat dari hasil asimilasi","c":"mineral dari hasil penyerapan air","d":"karbondioksida dari hasil pernapasan","h":"d"},
	{"n":"","i":"","q":"Roti yang dibiarkan dalam waktu yang lama akan mengalami pembusukan karena aktivitas...","a":"ulat dan cacing","b":"jamur dan bakteri","c":"protozoa dan bakteri","d":"manusia dan protozoa","h":"b"},
	{"n":"","i":"","q":"Keseluruhan organisme yang terdiri atas berbagai jenis komunitas yang mendiami suatu habitat disebut...","a":"individu","b":"ekosistem","c":"komunitas","d":"ekologi","h":"b"},
	{"n":"","i":"","q":"Lengkapilah rantai makanan berikut ini: X-> kecebong ->kumbang air->ikan -> manusia. X kemungkinan adalah...","a":"katak","b":"pohon","c":"rumput kolam","d":"rumput laut","h":"c"}];
	


	
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