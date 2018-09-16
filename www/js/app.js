
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/* INIT */

// Dom7
var $$ = Dom7;

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
			aturcara: _ATURCARA,
			pujian: _PUJIAN
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
var kembmView = app.views.create('#view-kembm', {
	url: '/'
});

var pembicaraView = app.views.create('#view-pembicara', {
	url: '/pembicara/'
});

var aturcaraView = app.views.create('#view-pujian', {
	url: '/pujian/'
});

var catalogView = app.views.create('#view-aturcara', {
	url: '/aturcara/'
});

// var pujianView = app.views.create('#view-pujian', {
// 	url: '/pujian/'
// });


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
	// app.dialog.alert('Name: ' + name + '<br>Email: ' + email + '<br>Telephone No: ' + telephone);
});


/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/* SELF DEFINED METHODS */

function init(){
	initiateLoginPage();
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