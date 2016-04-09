//initialisering av projektets facebook-applikation.
window.fbAsyncInit = function() {
	FB.init({
		appId      : '817222461743198',
		xfbml      : true,
		version    : 'v2.5'
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.fb.net/sv_SE/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'fb-jssdk'));

