$ ('document').ready(function(){
	var nis = localStorage.getItem('nis');
	$("#nis").html(nis);
	var bab=localStorage.getItem('bab');
	$("#Mulai").click(function(){
		/******fungsi getjson ******/
		$.getJSON('http://rusiamee.000webhostapp.com/biologi/soal.php?b='+bab+'&n=1&nis='+nis, function (data){
			//wadah dari id soal
			$("#soal li").remove ();
			$.each(data,function(index,soal){
				$('#soal').append("<li>"+
				"<p id='nosoal' >"+soal.n+"</p>"+
				"<p>"+soal.p+"</p>"+
				"<p><input type='radio' name='jwb' value='a'>"+soal.a+"</p>"+
				"<p><input type='radio' name='jwb' value='b'>"+soal.b+"</p>"+
				"<p><input type='radio' name='jwb' value='c'>"+soal.c+"</p>"+
				"<p><input type='radio' name='jwb' value='d'>"+soal.d+"</p>"+
				"</li>"
				);
			})
		});	
	
	});
	//pada saat tombol "id=jawab" di klik 
	
	$("#jawab").click(function(){
		
		//ambil variabel nomor bab (dari local storage 'bab')
		//nomor soal (dari elemen <p id='nosoal'></p>)
		//jawaban dari elemen input yang dipilih
		
		bab=localStorage.getItem('bab');
		nomor=$('#nosoal').html();
		jawaban=$("input:checked").val();
		nisiswa = localStorage.getItem('nis');
		
		//fungsi mengirim ke server
		$.post("http://rusiamee.000webhostapp.com/biologi/jawab.php",{
			nmnis: nis,
			nmbab: bab,
			nsoal: nomor,
			jwban: jawaban
		
		//munculkan respon dari server ke elemen denan id='jawabanmu'
		}, function (result){
			$("#jawabanmu").html(result);
		})
		
		
	});
	
	$("#soalBerikut").click(function(){
		$('#jawabanmu').html('');
		var ns = $('#nosoal').html();
		var nxn = parseInt(ns)+1;
		var nis = localStorage.getItem('nis');
		$.getJSON('http://rusiamee.000webhostapp.com/biologi/soal.php?b='+bab+'&n='+nxn, function (data){
			//wadah dari id soal
			$("#soal li").remove ();
			$.each(data,function(index,soal){
				if(parseInt(soal.n) == 0){
					$.ajax({url:"http://rusiamee.000webhostapp.com/biologi/nilai.php",success: function(nilai){
					$('#soal').append("<li>"+
					"<p>"+nilai+"</p>"+
					"<a href='bab.html'>Selesai</a>"+
					"</li>");
					}});
					
				}else{
					$('#soal').append("<li>"+
					"<p id='nosoal' >"+soal.n+"</p>"+
					"<p>"+soal.p+"</p>"+
					"<p><input type='radio' name='jwb' value='a'>"+soal.a+"</p>"+
					"<p><input type='radio' name='jwb' value='b'>"+soal.b+"</p>"+
					"<p><input type='radio' name='jwb' value='c'>"+soal.c+"</p>"+
					"<p><input type='radio' name='jwb' value='d'>"+soal.d+"</p>"+
					"</li>"
				);
				}
			})
		});
	
	
	});
	
});