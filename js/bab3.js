$('document').ready(function(){
	var noso = [0,1,2,3]
	var soal1 = [{"n":"","i":"","q":"Ilmu yang mempelajari tentang pengelompokkan klasifikasi makhluk hidup adalah...","a":"anatomi","b":"patologi","c":"taksonomi","d":"mikrobiologi","h":"c"},
	{"n":"","i":"","q":"tujuan pengelompokkan atau klasifikasi makhluk hidup adalah...","a":"memberi nama makhluk hidup","b":"mengetahu asal usul makhluk hidup","c":"mempermudah pengenalan makhluk hidu","d":"mengetahui manfaat makhluk hidup bagi manusia ","h":"c"},
	{"n":"","i":"","q":"Kupu-kupu dan belalang berada pada satu subfilum insekta atau hersapoda, hal tersebut berdasarkan...","a":"ruas kaki, keadaan sayap dan mulutnya","b":"bagian tubuh, tiga pasang kaki dan jumlah sayap","c":"bagian kepala, jbentuk mulut dan jumlah kaki","d":"keadaan sayap, bentuk tubuh dan 4 pasang kaki","h":"d"}];


	
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