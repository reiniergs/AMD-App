
define(['jquery','underscore','backbone','calendar'],function ($, _, Backbone, calendar) {

	var clndrTemplate = "<div class='clndr-controls'>" +
    "<div class='clndr-control-button'><span class='clndr-previous-button'></span></div><div class='month'> <%= year %></div><div class='clndr-control-button rightalign'><span class='clndr-next-button'></span></div>" +
    "</div>" +
  "<table class='clndr-table' border='0' cellspacing='0' cellpadding='0'>" +
    "<thead>" +
    "<tr class='header-days'>" +
    "<% for(var i = 0; i < daysOfTheWeek.length; i++) { %>" +
      "<td class='header-day'><%= daysOfTheWeek[i] %></td>" +
    "<% } %>" +
    "</tr>" +
    "</thead>" +
    "<tbody>" +
    "<% for(var i = 0; i < numberOfRows; i++){ %>" +
      "<tr>" +
      "<% for(var j = 0; j < 7; j++){ %>" +
      "<% var d = j + i * 7; %>" +
      "<td class='<%= days[d].classes %>'><div class='day-contents'><%= days[d].day %>" +
      "</div></td>" +
      "<% } %>" +
      "</tr>" +
    "<% } %>" +
    "</tbody>" +
  "</table>";

  	var calendar = Backbone.View.extend({
  		initialize : function (setting) {
  			setting = setting || {};
  			_.extend(setting,{
  				render : function (data) {
  					var target =  _.template(clndrTemplate);
  					return target(data);
  				}
  			});
  			this.$el.clndr(setting);
  		}
  	});

  	return calendar; 
})