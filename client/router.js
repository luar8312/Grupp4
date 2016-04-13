//Här definierar vi URL:er som ska gå att nå i webbläsaren.
// RJ

FlowRouter.route('/', {
	name: 'start',
	action: function () {
		BlazeLayout.render('mainLayout', {header: "mainHeader", main: "start"});
	}
});

FlowRouter.route('home', {
	//route för startsida efter man har valt att
	// gå vidare utan inloggning eller när man är inloggad.
});

FlowRouter.route('forum', {
	//Route för att visa forumet.
});

FlowRouter.route('characters', {
	//Route för att visa sidan med karaktärer.
});

FlowRouter.route('find-here', {
	//Route för "hitta till oss".
});

FlowRouter.route('pictures', {
	//Route för att visa Instagram-flödet.
});