

 // $(document).on('click','.first',function () {
        
			
		

 // })

/*test funzionamento*/
console.log("Ciao 1!");
// console.log(div.classList.contains("foo"));

// $(".first").on("click", function() {
		
	// if($('div').hasClass('onglet_active')) 
	// {
		// $(".first").addClass("onglet_inactive");
		// $(".onglet_active").removeClass("onglet_active");
	// }
// })

console.log("Ciao 2!");

/*************************GESTIONE CATEGORIE*********************************************/

$(".first").click(function(){
		$(".first").addClass("hello");
});


$(".onglet_inactive").click(function(){
		$(".onglet_active").addClass("onglet_inactive");
		$(".onglet_active").removeClass("onglet_active");
		// $(this).addClass("hello");
		$(this).removeClass("onglet_inactive");
		$(this).addClass("onglet_active");
		// $(this).addClass("false");
		// console.log("Prova 2");
});		
	
	
	
// function swapDiv(event,elem)
// {
	// elem.parentNode.insertBefore(elem,elem.parentNode.firstChild);
// }	
	
	
	
	
		// <!-- function swapDiv(event,elem){ -->
			// <!-- elem.parentNode.insertBefore(elem,elem.parentNode.firstChild); -->
		// <!-- } -->

		// <!-- </script> -->


		 // <!-- <div id="container"> -->
				// <!-- <div onclick="swapDiv(event,this);">1</div> -->
				// <!-- <div onclick="swapDiv(event,this);">2</div> -->
				// <!-- <div onclick="swapDiv(event,this);">3</div> -->
		 // <!-- </div> -->
	

// $(".first").click(function(){
		// $(".first_category").css("display","block");
		// $(".second_category").css("display","none");
		// $(".third_category").css("display","none");
		// $(".forth_category").css("display","none");
		// $(".fifth_category").css("display","none");
		// $(".sixth_category").css("display","none");
	// });	

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




