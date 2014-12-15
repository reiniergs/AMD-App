define(['backbone'],function (Backbone) {

	var defaultTemplate = "<form name='loginForm'>" +
						  "<label>Email" +
						      "<input type='text' name='username' placeholder='Enter email' data-email>" +
						   "</label>" +
						   "<button data-action>Recovery password</button>" +
						   "<ul class='errors'></ul>" +
						   "<ul class='options'>" +
						   		"<li data-option='login'>Log in</li>" +
						   "</ul>" +
       					  "</form>";
    var that;

	recoveryView = Backbone.View.extend({
		initialize : function (initValues) {
			this.template = initValues.template || defaultTemplate;
			this.strategy = initValues.strategy;
			that = this;
		},
		render : function () {
			return this.template;
		},
		events : {
			'click [data-action]' : 'runStrategy',
			'click [data-option]' : 'triggerOption'
		},
		runStrategy : function (e) {
			e.preventDefault();
			this.$('.errors').empty();
			this.strategy(this.$('[data-email]').val(),this.done);
		},
		done : function (success,messages) {
			if (success) {
				that.trigger('user-recovery-success');
			} else that.errors(messages);
		},
		errors : function (errorList) {
			_.each(errorList,function (error) {
				that.$('.errors').append('<li>' + error + '</li>');
			}.bind(that));
		},
		triggerOption : function (e) {
			e.preventDefault();
			e.stopPropagation();
			this.trigger('option-clicked',this.$(e.target).attr('data-option'));
		}
	});

	return recoveryView;

});