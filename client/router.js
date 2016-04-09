//Här definierar vi URL:er som ska gå att nå i webbläsaren.
// RJ

FlowRouter.route('/', {
	name: 'start',
	action: function(){
		BlazeLayout.render('mainLayout', {header: "mainHeader", main: "start"});
	}
});