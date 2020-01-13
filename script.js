
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


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  // no transitions
	transitionDuration: 0.0000000000000000000000000000000000000000000000000000000001
  // layoutMode: 'fitRows'
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('.filters-category-group').on( 'click', 'option', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});




// bind filter button click
$('.filters-category-group').on( 'click', 'div', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
