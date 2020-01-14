/*test funzionamento*/
console.log("Ciao!");


/*************************GESTIONE CATEGORIE*********************************************/
$(".onglet").click(function(){
		$(".onglet").removeClass("onglet_active");
		$(".onglet").addClass("onglet_inactive");
		$(this).removeClass("onglet_inactive");
		$(this).addClass("onglet_active");
	});		

$(".first").click(function(){
		$(".first_category").css("display","block");
		$(".second_category").css("display","none");
		$(".third_category").css("display","none");
		$(".forth_category").css("display","none");
		$(".fifth_category").css("display","none");
		$(".sixth_category").css("display","none");
	});	

$(".second").click(function(){
		$(".first_category").css("display","none");
		$(".second_category").css("display","block");
		$(".third_category").css("display","none");
		$(".forth_category").css("display","none");
		$(".fifth_category").css("display","none");
		$(".sixth_category").css("display","none");
});	


$(".third").click(function(){
		$(".first_category").css("display","none");
		$(".second_category").css("display","none");
		$(".third_category").css("display","block");
		$(".forth_category").css("display","none");
		$(".fifth_category").css("display","none");
		$(".sixth_category").css("display","none");
});	

$(".fourth").click(function(){
		$(".first_category").css("display","none");
		$(".second_category").css("display","none");
		$(".third_category").css("display","none");
		$(".forth_category").css("display","block");
		$(".fifth_category").css("display","none");
		$(".sixth_category").css("display","none");
});	

$(".fifth").click(function(){
		$(".first_category").css("display","none");
		$(".second_category").css("display","none");
		$(".third_category").css("display","none");
		$(".forth_category").css("display","none");
		$(".fifth_category").css("display","block");
		$(".sixth_category").css("display","none");
});	

$(".sixth").click(function(){
		$(".first_category").css("display","none");
		$(".second_category").css("display","none");
		$(".third_category").css("display","none");
		$(".forth_category").css("display","none");
		$(".fifth_category").css("display","none");
		$(".sixth_category").css("display","block");
});	


/************************* FILTRO *********************************************/

$(".claim").hide();
   $(".review").show();


$("#bottone_review").on("click", function() {
   $(".claim").hide();
   $(".review").show();
});

$("#bottone_claim").on("click", function() {
   $(".review").hide();
   $(".claim").show();
});