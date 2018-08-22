
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/* INIT */

// Dom7
var $$ = Dom7;

// Templates
var tmp_aturcara = $$('script#aturcara').html();

// Framework7 App main instance
var app  = new Framework7({
	root: '#app', // App root element
	id: 'io.framework7.testapp', // App bundle ID
	name: 'Framework7', // App name
	theme: 'auto', // Automatic theme detection
	// App root data
	data: function () {
		return {
			user: _USER,
			// Demo products for Catalog section
			products: _PRODUCTS,
			aturcara: _ATURCARA
		};
	},
	// App root methods
	methods: {
		helloWorld: function () {
			app.dialog.alert('Hello World!');
		},
	},
	// App routes
	routes: routes,
	on: {
		pageInit: init
	}
});

// Init/Create views
var homeView = app.views.create('#view-home', {
	url: '/'
});

var catalogView = app.views.create('#view-catalog', {
	url: '/catalog/'
});

var settingsView = app.views.create('#view-settings', {
	url: '/settings/'
});


/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/* EVENTS HANDLING */

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
	var name = $$('#my-login-screen [name="name"]').val();
	var email = $$('#my-login-screen [name="email"]').val();
	var telephone = $$('#my-login-screen [name="telephone"]').val();

	// Save the info into the formdata
	app.form.storeFormData('form-userinfo', {
		'name': name,
		'email': email,
		'telephone': telephone
	});
		
	closeLoginPage();

	// Alert username and password
	app.dialog.alert('Name: ' + name + '<br>Email: ' + email + '<br>Telephone No: ' + telephone);
});


/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/* SELF DEFINED METHODS */

function init(){
	initiateTemplates();
	initiateLoginPage();
}

function initiateTemplates(){
	// For aturcara
	var aturcaraTemplate = Template7.compile(tmp_aturcara),
		context = { aturcara : _ATURCARA };
	aturcaraTemplate(context);
}

function initiateLoginPage(){
	//prepareApp();

	var user = app.form.getFormData('form-userinfo');
	if (_.isEmpty(user)){
		openLoginPage();
	}
}

function openLoginPage(){
	app.loginScreen.open('#my-login-screen');
}

function closeLoginPage(){
	app.loginScreen.close('#my-login-screen');
	$$('.page-content').scrollTop(0);
}

function prepareApp(){
	// This part is to standy the list of calls and page generation
	// that needs to be completed upon opening the app.

	app.request.get('mocks/aturcara.json', function(data){
		console.log("Can i see what is ::: ", data);
		prepareCampSchedule(data);
	});
}

function prepareCampSchedule(){
	app.request.get('mocks/aturcara.json', function(data){
		console.log("Can i see what is ::: ", data);
		prepareCampSchedule(data);
	});
}	