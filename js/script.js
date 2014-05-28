$(document).ready(function () {
	$("#js-mobile-navigation-button").click(function () {
		return $("#js-mobile-navigation td").each(function (e) {
			var t = this;
			return setTimeout(function () {
				return $(t).addClass("active")
			}, e * 50)
		})
	}), $("td a").click(function () {
		return $("#js-mobile-navigation td").each(function (e) {
			var t = this;
			return setTimeout(function () {
				return $(t).removeClass("active")
			}, e * 50)
		})
	}),	$("aside .nav li").hover(function (){
		var t = $(this).children()[1];
		var length = 0;
		$(t).children().each(function (i, e){
			length += $(e).height();
		});
		$(t).css("transition", ".5s ease");
		$(t).css("height", length + $(t).children().length * 20);
	}, function(){
		var t = $(this).children()[1];
		$(t).css("transition", "0.2s ease");
		$(t).css("height", 0);
	});

	$("header ul li").click(function() {
		$('html, body').animate({ scrollTop: $("#" + this.title).offset().top - 100}, 1000);
		$("header ul li").css("font-weight", "normal");
		$(this).css("font-weight", "bold");
	});
});

document.addEventListener('DOMContentLoaded', function () {
	Tabletop.init({
		key: "0AhtG6Yl2-hiRdDZtbzR0MERZNk9sRzMxaVVNVnhtbEE",
		callback: init
	});
});

function init(result) {
	result.events.elements.forEach(function (row) {
		console.log(row);
		var content = '<li><time class="cbp_tmtime"><span>'+row.date+'</span><span>'+row.time+'</span></time>';
		content += '<div class="cbp_tmlabel"><h2>'+row.title+'</h2><p>'+row.description+'</p></div></li>';
		$("#tmcalendar").append(content);
	});
}