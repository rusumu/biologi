$('document').ready(function(){
	var noso = [0,1,2,3,4]
	var soal1 = [{"n":"","i":"","q":"Hubungan yang erat antara dua organisme tidak terjadi pada bentuk hubungan...","a":"mutualisme","b":"komensalisme","c":"predasi","d":"parasitisme","h":"d"},
	{"n":"","i":"","q":"Interaksi antara kelompok hewan zebra dengan rusa disuatu padang rumput merupakan hubungan...","a":"predasi","b":"kompetisi","c":"adaptasi","d":"simbiosis","h":"c"},
	{"n":"","i":"","q":"Interaksi berikut yang merupakan contoh interaksi komponen biotik dengan abiotik adalah...","a":"tanah dengan air","b":"rusa dengan rumput","c":"rumput dengan tanah","d":"rumput dengan domba","h":"a"},
	{"n":"","i":"","q":"Didalam hutan dapat kita jumpai interaksi antara karnivor dengan herbivor yang kita sebut dengan hubungan...","a":"koloni","b":"migrasi","c":"predasi","d":"kompetisi","h":"b"},
	{"n":"","i":"","q":"Prinsip interaksi antarmakhluk hdup yang dimanfaatkan untuk pengobatan dalam dunia kedokteran adalah...","a":"predasi","b":"kompetisi","c":"simbiosis","d":"antibiosis","h":"d"}];
	


	
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