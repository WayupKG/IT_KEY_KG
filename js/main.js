//----------------Кнопка меню-------------------

$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn-active');
});

//----------------Кнопка меню вызов-------------------

$('.menu-btn').on('click', function() {
    $('.menu-tel').toggleClass('menu-tel-active');
})

//----------------Анимация меню для телефона-------------------

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		var links = this.el.find('.link');
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

//----------------Всплывающая форма-------------------

$('.popup-with-form').magnificPopup({
    type: 'inline',
    focus: '#name',
    removalDelay: 300,
    mainClass: 'mfp-fade'
});

//----------------Слайдер-------------------

$(document).ready(function(){
    $('.slider-main').slick({
		arrows:false,
		dots:true,
		dotsClass: 'dots-style'
	});
    
});
