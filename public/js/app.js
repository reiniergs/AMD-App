define(['jquery','underscore','calendar','./components/calendar-extend.js'],function ($, _,calendar,clndrExtended) {



	return {
		init : function (el) {
			var clndr = new clndrExtended({ el : el, name : 'Rey'});
			//$(el).clndr();
		}
	}
});