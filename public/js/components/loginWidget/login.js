define(['backbone','underscore'],function(Backbone,_) {

	var defaultTemplate = "<form name='loginForm'>" +
						  "<label>Username" +
						      "<input type='text' name='username' placeholder='Username' data-username>" +
						   "</label>" +
						   "<label>Password" +
						      "<input type='password' name='password' placeholder='Password' data-pass>" +
						   "</label>" + 
						   "<input id='remember' type='checkbox'><label for='remember'>Remember me</label>" + 
						   "<button data-action>Login in</button>" +
						   "<ul class='errors'></ul>" 
       					  "</form>";
    var that;

	var loginView = Backbone.View.extend({
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
			this.strategy(this.$('[data-username]').val(),this.$('[data-password]').val(),this.done);
		},
		done : function (success,messages) {
			if (success) {
				that.trigger('user-login-success');
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

	return loginView;

});