define(['jquery','backbone','./login.js','./recoveryPass.js','foundation.dropdown'],function ($,Backbone,loginView,recoveryView) {

	var loginModel = Backbone.Model.extend({
		defaults : {
			login : false,
			view  : 'login' 
		}
	});

	var loginWidget = Backbone.View.extend({
		template : $('[data-template-loginWidget]').html(),
		initialize : function () {
			this.model = new loginModel();
			this.content = new Backbone.View();

			
			this.render();
			this.$el.foundation();
			this.listenTo(this.content,'option-clicked',this.optionClicked);
			this.listenTo(this.model,'change:view',this.renderView);
		},
		render : function () {
			this.$el.html(this.template);
			this.$('[data-dropdown]').html(this.model.get('login') ? this.model.get('user').name : 'Log in');
			this.renderView();			
		},
		loginStrategy : function (username,password,done) {
			$.ajax({
				url : 'users/login/' + username + '/' + password,
				type : 'GET'
			}).done(function (res) {
				if (res.success) {
					done(true,null);	
				} else {
					done(false,['User and Password incorrect.'])
				}
			});
		},
		recoveryStrategy : function (email,done) {
			$.ajax({
				url : 'users/recovery/' + email,
				type : 'GET'
			}).done(function (res) {
				done(res.success,res.messages);	
			});
		},
		renderView : function () {
			if (this.content) {
				 this.content.setElement('');
				 this.content.remove();
				}
			switch (this.model.get('view')) {
				case 'login':
						this.content = new loginView({
							el : this.$('[data-dropdown-content]'),
							template : $('[data-template-login]').html(),
							strategy : this.loginStrategy
					    });
					    this.$('[data-dropdown-content]').html(this.content.render());
				break; 
				case 'recovery-password':
						this.content = new recoveryView({
							el : this.$('[data-dropdown-content]'),
							strategy : this.recoveryStrategy
						});
						this.$('[data-dropdown-content]').html(this.content.render());
				break;
			}
		},
		optionClicked : function (option) {
			this.model.set('view',option);
		}
	});

	return {
		init : function (element) {
			return new loginWidget({
				el : element
			});
		}
	}
});