$('document').ready(function(){
	var noso = [0,1,2,3,4]
	var soal1 = [{"n":"","i":"","q":"Bagian sel terluar tumbuhan berupa...","a":"nukleus","b":"mitokondria","c":"membran sel","d":"dinding sel","h":"d"},
	{"n":"","i":"","q":"Satuan struktural dan fungsional terkecil makhluk hidup disebut...","a":"gen","b":"sel","c":"organ","d":"jaringan","h":"b"},
	{"n":"","i":"","q":"Berdasarkan sel tubuhnya, tubuh makhluk hidup dibedakan menjadi dua kelompok, yaitu...","a":"uniseluler dan multiseluler","b":"bersel satu dan protozoa","c":"protozoa dan uniseluler","d":"metazoa dan multiseluler","h":"a"},
	{"n":"","i":"","q":"Makhluk hidup uniseluler adalah makhluk hidup yang...","a":"mengandung selulosa","b":"tubuhnya terdiri atas satu sel","c":"tubuhnya terdiri atas banyak sel","d":"sel-sel tubuhnya berdinding selulosa","h":"b"},
	{"n":"","i":"","q":"Bagian sel tumbuhan yang mengandung zat selulosa adalah...","a":"kloroplas","b":"nukleus","c":"neoroplas","d":"dinding sel","h":"a"}];
	


	
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