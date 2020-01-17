/*************************GESTIONE CATEGORIE*********************************************/

// $(".first").click(function(){
		// $(".first").addClass("hello");
// });


// $(".onglet_inactive").click(function(){
		// $(".onglet_active").addClass("onglet_inactive");
		// $(".onglet_active").removeClass("onglet_active");
		// // $(this).addClass("hello");
		// $(this).removeClass("onglet_inactive");
		// $(this).addClass("onglet_active");
		// // $(this).addClass("false");
		// // console.log("Prova 2");
// });		
	
	
var background = document.getElementById("white_back");

$(".first").click(function(){
	
	   var element = document.getElementById("page_1");
		
	   if(element.classList.contains("onglet_active"))
	   {
			element.classList.remove("onglet_active");
			element.classList.add("onglet_inactive");
			
			background.classList.remove("white_background_top");
			background.classList.add("white_background_down");			
			
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");

			
			// document.getElementById('page_1_content').hide(10);
	   }
	   else
	   {
			$(".first_category").css("display","block");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
		   
		   
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
			
			// document.getElementsByClassName('first_category')[0].style.visibility = 'visible';
	   }
});	

$(".second").click(function(){
	
	   var element = document.getElementById("page_2");
		   
	   if(element.classList.contains("onglet_active"))
	   {
			element.classList.remove("onglet_active");
			element.classList.add("onglet_inactive");
			
			background.classList.remove("white_background_top");
			background.classList.add("white_background_down");		

			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");			
			
	   }
	   else
	   {
			$(".first_category").css("display","none");
			$(".second_category").css("display","block");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
		   
		   
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
	   }
});	

$(".third").click(function(){
	
	   var element = document.getElementById("page_3");
		   
	   if(element.classList.contains("onglet_active"))
	   {
			element.classList.remove("onglet_active");
			element.classList.add("onglet_inactive");
			
			background.classList.remove("white_background_top");
			background.classList.add("white_background_down");	

			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
			
	   }
	   else
	   {
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","block");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
			
			
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
	   }
});	

$(".fourth").click(function(){
	
	   var element = document.getElementById("page_4");
		   
	   if(element.classList.contains("onglet_active"))
	   {
			element.classList.remove("onglet_active");
			element.classList.add("onglet_inactive");
			
			background.classList.remove("white_background_top");
			background.classList.add("white_background_down");	

			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
			
	   }
	   else
	   {
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","block");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
		   
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
	   }
});	

$(".fifth").click(function(){
	
	   var element = document.getElementById("page_5");
		   
	   if(element.classList.contains("onglet_active"))
	   {
			element.classList.remove("onglet_active");
			element.classList.add("onglet_inactive");
			
			background.classList.remove("white_background_top");
			background.classList.add("white_background_down");			
			
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
	   }
	   else
	   {		   
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","block");
			$(".sixth_category").css("display","none");
		   
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
	   }
});	

$(".sixth").click(function(){
	
	   var element = document.getElementById("page_6");
		   
	   if(element.classList.contains("onglet_active"))
	   {
			element.classList.remove("onglet_active");
			element.classList.add("onglet_inactive");
			
			background.classList.remove("white_background_top");
			background.classList.add("white_background_down");			
			
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
	   }
	   else
	   {
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","block");
			
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
	   }
});	







$(".first").click(function(){
		
	});	

// $(".second").click(function(){
		// $(".first_category").css("display","none");
		// $(".second_category").css("display","block");
		// $(".third_category").css("display","none");
		// $(".forth_category").css("display","none");
		// $(".fifth_category").css("display","none");
		// $(".sixth_category").css("display","none");
// });	


// $(".third").click(function(){
		// $(".first_category").css("display","none");
		// $(".second_category").css("display","none");
		// $(".third_category").css("display","block");
		// $(".forth_category").css("display","none");
		// $(".fifth_category").css("display","none");
		// $(".sixth_category").css("display","none");
// });	

// $(".fourth").click(function(){
		// $(".first_category").css("display","none");
		// $(".second_category").css("display","none");
		// $(".third_category").css("display","none");
		// $(".forth_category").css("display","block");
		// $(".fifth_category").css("display","none");
		// $(".sixth_category").css("display","none");
// });	

// $(".fifth").click(function(){
		// $(".first_category").css("display","none");
		// $(".second_category").css("display","none");
		// $(".third_category").css("display","none");
		// $(".forth_category").css("display","none");
		// $(".fifth_category").css("display","block");
		// $(".sixth_category").css("display","none");
// });	

// $(".sixth").click(function(){
		// $(".first_category").css("display","none");
		// $(".second_category").css("display","none");
		// $(".third_category").css("display","none");
		// $(".forth_category").css("display","none");
		// $(".fifth_category").css("display","none");
		// $(".sixth_category").css("display","block");
// });	


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

$("#btn_data_type").on("click", function() {
   $(".review").hide();
   $(".claim").show();
   
});




