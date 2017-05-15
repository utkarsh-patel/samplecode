//"use strict";
// Create AngularJS application

// routes configuration

//var appURL = "http://mojod855/MojoRestPRG/api";
// var appURL = "https://mojoqa855.vfimagewear.com/MojoRestPRG/api";
// var appURL = "http://localhost:9080/MojoRestPRG/api";

// Added for Defect#8068 //
 var appURL = "/MojoRestPRG/api";
  //Added for Defect#8068 //
 

var app = angular.module('demoLearningTurn', [ 'ngRoute', 'angular.backtop',
		'me.mnmlst.ng-dummy', 'ngPopover', 'ngDialog', 'wt.responsive',
		'ui.bootstrap', 'ngStorage', 'base64' ]);
// var myApp = angular.module('demoLearningTurn', []);

var myapp = angular.module('myapp', []);

app.controller('mainCtrl', [ '$scope', function($scope) {

} ]);

app.config(function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl : 'login.html',
		controller : 'mainCtrl'
	})

	.when('/login', {
		templateUrl : 'login.html',
		controller : 'mainCtrl'
	})

	.when('/uniforms', {
		templateUrl : 'uniforms.html',
		controller : 'shopUniformCtrl'
	})

	.when('/contactus', {
		templateUrl : 'contactus.html',
		controller : 'aboutCtrl'
	})

	.when('/notifications', {
		templateUrl : 'notifications.html',
		controller : 'aboutCtrl'
	})

	.when('/myaccount', {
		templateUrl : 'myaccount.html',
		controller : 'myAccountCtrl'
	})

	.when('/selectprogram', {
		templateUrl : 'selectprogram.html',
		controller : 'tabCtrl'
	}).when('/changepassword', {

		templateUrl : 'change_password.html',

		controller : 'messagedisplayController'

	}).when('/shopping_cart_emp', {

		templateUrl : 'shopping_cart_emp.html',

		controller : 'copyOrderController'

	})

	.when('/Change_Email', {

		templateUrl : 'change_password.html',

		controller : 'aboutCtrl'

	}).when('/shop_shirts', {
		templateUrl : 'shop_shirts.html',
		controller : 'garmentsDisplayController'
	})

	.when('/dress_uniforms', {
		templateUrl : 'dress_uniforms.html',
		controller : 'productDisplayController'
	})

	.when('/product_details', {
		templateUrl : 'product_details.html',
		controller : 'productDetailController'
	})

	.when('/return_items', {

		templateUrl : 'return_items.html',

		controller : 'returnItemsController'
	})

	.when('/Change_Password', {

		templateUrl : 'change_password.html',

		controller : 'changePasswordController'

	}).when('/news', {
		templateUrl : 'news.html',
		controller : 'newsController'
	})

	.when('/confirmation_emp', {
		templateUrl : 'confirmation_emp.html',
		controller : 'mainCtrl'
	})

	.when('/customersupport', {
		templateUrl : 'customersupport.html',
		controller : 'customerSupportController'

	}).when('/shippingaddress', {
		templateUrl : 'shippingaddress.html',
		controller : 'contactCtrl'
	}).when('/viewbalance', {
		templateUrl : 'viewbalance.html',
		controller : 'aboutCtrl'
	})
	// sev change

	.when('/order_history', {

		templateUrl : 'order_history.html',

		controller : 'orderController'

	})// sev change end

	/*
	 * .when('/order_detail', { templateUrl : 'order_detail.html', controller :
	 * 'orderDetailCtrl' })
	 */

	.when('/Contact_Us', {

		templateUrl : 'contactus.html',

		controller : 'contactUsController'

	})

	.when('/order_customization', {
		templateUrl : 'order_customization.html',
		controller : 'orderCustomizationCtrl'
	})

	.when('/forgot-password', {

		templateUrl : 'forgot-password.html',

		controller : 'forgotPasswordController'

	}).when('/Log_Off', {

		templateUrl : 'login.html',

		controller : 'logOffController'

	});

});

// Create Controller with name mainCtrl

app.controller('mainCtrl', function($scope) {

	$scope.msg = 'Wellcome to AngularJS Application Main Page';
});

app.factory('UserNameDisplayService', function() {

	var empProgData = [];

	return {

		setData : function(data) {
			empProgData.data = data;
		},

		getData : function() {

			return empProgData.data;
		}

	};

});

app.factory('ContactUsService', function() {

	var empProgData = [];

	return {

		setData : function(data) {
			empProgData.data = data;
		},

		getData : function() {

			return empProgData.data;
		}

	};

});

app.factory('MessageDisplayService', function() {

	var empProgData = [];

	return {

		setData : function(data) {
			empProgData.data = data;
		},

		getData : function() {

			return empProgData.data;
		}

	};

});

app.factory('changeEmailService', function() {
	var orderHistoryData = [];

	return {

		setData : function(data) {
			orderHistoryData.data = data;
		},

		getData : function() {

			return orderHistoryData.data;
		}

	};
});

app.factory('returnItemService', function() {
	var returnItemData = [];

	return {

		setData : function(data) {
			returnItemData.data = data;
		},

		getData : function() {

			return returnItemData.data;
		}

	};
});
app.factory('OrderDisplayService', function() {

	var empProgData = [];

	return {

		setData : function(data) {
			empProgData.data = data;
		},

		getData : function() {

			return empProgData.data;
		}

	};

});
app.factory('InvoiceOrderDisplayService', function() {

	var empProgData = [];

	return {

		setData : function(data) {
			empProgData.data = data;
		},

		getData : function() {

			return empProgData.data;
		}

	};

});
app.factory('orderHistoryService', function() {
	var orderHistoryData = [];

	return {

		setData : function(data) {
			orderHistoryData.data = data;
		},

		getData : function() {

			return orderHistoryData.data;
		}

	};
});

app.factory('ViewCustService', function() {
	var ViewCustData = [];

	return {

		setData : function(data) {
			ViewCustData.data = data;
		},

		getData : function() {

			return ViewCustData.data;
		}

	};
});

app.factory('checkboxSelectedCountService', function() {
	var checkboxSelectedCount = [];

	return {

		setData : function(data) {
			checkboxSelectedCount.data = data;
		},

		getData : function() {

			return checkboxSelectedCount.data;
		}

	};
});

app
		.controller(
				"masterController",
				[
						"$scope",
						"ngPopoverFactory",
						function(o, e) {
									o.message = "Click on any of the above buttons to see the popovers in action",
									o.openCallback = function(e) {
										o.message = "You just opened " + e
									};
							o.closeCallback = function(e) {
								o.message = "You just closed " + e
							};
							o.closePopover = function(o) {
								e.closePopover(o)
							};
						} ]);

// Create Controller with name aboutCtrl

app.controller('aboutCtrl', function($scope) {
	$scope.msg = 'You are now at about us page';
});

// Create Controller with name contactCtrl

app.controller('contactCtrl', function($scope) {
	$scope.msg = 'Cotact us! Jammy. its contact us demo page';
});
/* header */
app.controller("expressionController", function($scope, $window) {
	$scope.re = /^[0-9]{1,6}$/; /* for zipcode validation */
	// Show Div

	$scope.showDiv = function() {
		$scope.showhideprop = true;
		var element = $window.document.getElementById("submit_button");
		element.focus();
	};

	// Hide Div
	$scope.hideDiv = function() {
		$scope.showhideprop = false;

	};

});

/* end header */

/* var app = angular.module("app", []); */
app
		.controller(
				"HttpGetController",
				function($scope, $http) {

					$scope.SendData = function() {
						// use $.param jQuery function to serialize data from
						// JSON
						var data = $.param({
							fName : $scope.loginUserID,
							pwd : $scope.formData.password
						});
						console.log("user input", data);
						var config = {
							headers : {
								'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
							}
						};

					};

				});
/* var app = angular.module('urlApp', []); */
app.controller('urlCtrl_log', function($scope, $log, $window) {
	$scope.ClickMeToRedirect_alert = function() {

		var url = "#selectprogram";
		$log.log(url);
		$window.location.href = url;
	};
});

app.controller('TestController', function($scope) {
	function TestController() {

	}

});

app.controller('urlCtrl', function($scope,$sessionStorage) {
	$scope.toggle = true;
	$scope.toggleClass = function() {
		var myEl = angular.element(document.querySelector('#wrapper'));
		myEl.toggleClass('toggled');
		$scope.toggle = $scope.toggle === false ? true : false;
	};

});

app.controller('SearchCtrl', [ '$scope', function($scope) {
	$scope.custom = true;
	$scope.toggleCustom = function() {
		$scope.custom = $scope.custom === false ? true : false;
	};
} ]);

app.controller('urlCtrl', function($scope,$rootScope, $sce) {
	$scope.toggle = true;
	$scope.toggleClass = function() {
		var myEl = angular.element(document.querySelector('#wrapper'));
		//Added for dynamic content by madhu
    		$rootScope.$emit("CallParentMethod", {});
    	//Added for dynamic content by madhu end
		myEl.toggleClass('toggled');
		$scope.toggle = $scope.toggle === false ? true : false;
	};

});

app.config([ 'ngDialogProvider', function(ngDialogProvider) {

	ngDialogProvider.setDefaults({
		className : 'ngdialog-theme-default',
		plain : false,
		showClose : true,
		closeByDocument : true,
		closeByEscape : true,
		appendTo : false,
		preCloseCallback : function() {
			console.log('default pre-close callback');
		}
	});
} ]);

app.controller('MainCtrl1', function($scope, $rootScope, ngDialog,
		$sessionStorage) {

	$scope.totalBasicsbalance = $sessionStorage.totalBasicBalance;
	

	$scope.openInlineController1 = function() {

		$rootScope.theme = 'ngdialog-theme-plain';

		ngDialog.open({

			template : 'withInlineController',

			className : 'ngdialog-theme-plain'
		});
	};

	$scope.openCart = function() {

		$rootScope.theme = 'ngdialog-theme-plain';

		ngDialog.open({

			template : 'withOpenCart',

			className : 'ngdialog-theme-plain'
		});
	};
	
	$scope.supervisorRole = $sessionStorage.supervisorRole;
});
app.factory('chooseProgramService', function() {
	var empProgData = [];

	return {

		setData : function(data) {
			empProgData.data = data;
		},

		getData : function() {

			return empProgData.data;
		}

	};
});

app.factory('rememberMeService', function() {

	function fetchValue(name) {
		// alert("IN login action "+name);
		var gCookieVal = document.cookie.split("; ");
		for (var i = 0; i < gCookieVal.length; i++) {
			// a name/value pair (a crumb) is separated by an equal sign
			var gCrumb = gCookieVal[i].split("=");
			if (name === gCrumb[0]) {
				var value = '';
				try {
					value = angular.fromJson(gCrumb[1]);
				} catch (e) {
					value = unescape(gCrumb[1]);
				}
				return value;
			}
		}
		// a cookie with the requested name does not exist
		return null;
	}
	return function(name, values) {
		if (arguments.length === 1)
			return fetchValue(name);
		var cookie = name + '=';
		if (typeof values === 'object') {
			var expires = '';
			cookie += (typeof values.value === 'object') ? angular
					.toJson(values.value)
					+ ';' : values.value + ';';
			if (values.expires) {
				var date = new Date();

				date.setTime(date.getTime()
						+ (values.expires * 24 * 60 * 60 * 1000));
				expires = date.toGMTString();

			}
			cookie += (!values.session) ? 'expires=' + expires + ';' : '';
			cookie += (values.path) ? 'path=' + values.path + ';' : '';
			cookie += (values.secure) ? 'secure;' : '';
		} else {
			cookie += values + ';';
		}
		document.cookie = cookie;
	};
});

app.factory('DataService', function() {
	var empProgData = [];

	return {

		setData : function(data) {
			empProgData.data = data;
		},

		getData : function() {

			return empProgData.data;
		}

	};
});

/*
 * app.factory('ChangePwdDataService', function() { var empProgData = [];
 * 
 * return {
 * 
 * setData: function(data) { empProgData.data = data; },
 * 
 * getData: function(){
 * 
 * return empProgData.data; }
 *  }; });
 */

app.factory('ForgotPasswordMessageDisplayService', function() {
	var empProgData = [];

	return {

		setData : function(data) {
			empProgData.data = data;
		},

		getData : function() {

			return empProgData.data;
		}

	};
});

// Key Press Event, this will trigger for keyboard enter key
app.directive('myEnter', function() {
	return function(scope, element, attrs) {
		element.bind("keydown keypress", function(event) {
			if (event.which === 13) {
				scope.$apply(function() {
					scope.$eval(attrs.myEnter);
				});

				event.preventDefault();
			}
		});
	};
});

app
		.controller(
				"loginController",
				function($scope, $http, $log, $window, $rootScope,
						UserNameDisplayService, MessageDisplayService,
						chooseProgramService, $sessionStorage, DataService,
						rememberMeService, $base64, $sce,$localStorage) {

					if (rememberMeService('7ZXYZ@L')
							&& rememberMeService('UU@#90')) {

						$scope.loginUserID = rememberMeService('7ZXYZ@L');
						$scope.formData.password = rememberMeService('UU@#90');
						//alert("DC : " + $scope.loginUserID);
						//alert("DC : " + $scope.formData.password);
					}

					$scope.rememberMe = function() {
						alert("in remember me function");

						//alert($scope.remember);
						if ($scope.remember) {

							rememberMeService('7ZXYZ@L', $scope.loginUserID);
							rememberMeService('UU@#90',
									$scope.formData.password);

							//alert("En : " + $base64.encode($scope.loginUserID));
							//alert("En : "+ $base64.encode($scope.formData.password));
						} else {

							rememberMeService('7ZXYZ@L', '');
							rememberMeService('UU@#90', '');
						}
					};

					/*
					 * $scope.message = MessageDisplayService.getData();
					 * alert($scope.message);
					 * 
					 * if($scope.message=="info_message"){
					 * 
					 * $scope.work=DataService.getData(); //$scope.Work=
					 * $scope.PostDataResponse['work']; $scope.Infomessage =
					 * $scope.work['info-message']; var Infomessage =
					 * angular.element( document.querySelector(
					 * '#login_succ_msg' ) );
					 * 
					 * Infomessage.removeClass('hide1');
					 * Infomessage.addClass('loginBlk'); $scope.Message
					 * =$scope.Infomessage['message'];
					 * 
					 * console.log("message"+$scope.Message); } else
					 * if($scope.message=="error_message"){ alert("4");
					 * $scope.work=DataService.getData(); var err = $scope.work;
					 * alert(err); $scope.Errormessage =
					 * $scope.work['error-message']; var Errormessage =
					 * angular.element( document.querySelector( '#login_err_msg' ) );
					 * 
					 * Errormessage.removeClass('hide1');
					 * Errormessage.addClass('loginBlk');
					 * 
					 * $scope.Error =$scope.Errormessage['error'];
					 * console.log("Error"+$scope.Error);
					 * 
					 * }else{}
					 */

					/*
					 * $scope.validateLogin = function() {
					 * 
					 * var UserId = document.myForm.userid.value; var password =
					 * document.myForm.password.value;
					 *  // Regex to check for special character var pattern =
					 * new RegExp( /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
					 * 
					 * if (UserId == "") { alert(message(1) + "User ID.");
					 * document.myForm.userid.focus(); return; } else if
					 * (pattern.test(UserId)) { alert(message("4") + "User
					 * ID."); document.myForm.userid.focus();
					 * document.myForm.userid.select(); return; } else if
					 * (password == "") { alert(message(1) + "Password.");
					 * document.myForm.password.focus(); return; } else {
					 * $scope.sendLoginData(); } };
					 */

					$scope.message = MessageDisplayService.getData();

					// Added by Authis for inline message Display

					if ($scope.message != undefined && $scope.message != "") {   // Added by Authis for defect #8172
						var ststusMsg = $scope.message.split("|");
						if (ststusMsg[0] == "SUCCESS") {

							$scope.message = ststusMsg[1];

							$('[data-login-success]').removeClass('hide');
							MessageDisplayService.setData("");

						} else {

							$scope.message = ststusMsg[1];

							$('[data-login-error]').removeClass('hide');
							$scope.loginUserID = ststusMsg[2];

						}

					}else{
						$('[data-login-error]').removeClass('show');
						
					}

					$scope.validateLogin = function() {

						$('[data-login-error]').addClass('hide');

						var UserId = document.myForm.userid.value;
						var password = document.myForm.password.value;

						// Regex to check for special character
						var pattern = new RegExp(
								/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

						var isError = false;

						if (UserId == "") {
							$scope.useridError = message(1) + "User ID.";
							isError = true;

						} else if (pattern.test(UserId)) {
							$scope.useridError = message(4) + "User ID.";
							document.myForm.userid.select();
							isError = true;
						}

						if (password == "") {

							$scope.passwordError = message(1) + "Password.";
							isError = true;

						}

						if (!isError) {
							$scope.useridError = "";
							$scope.passwordError = "";
							$scope.sendLoginData();
						}

					};

					// Ended by Authis for inline message Display

					$scope.sendLoginData = function() {

						var keyStr = "ABCDEFGHIJKLMNOP" +

						"QRSTUVWXYZabcdef" + "ghijklmnopqrstuv"
								+ "wxyz0123456789+/" + "=";
						var output = "";
						var chr1, chr2, chr3 = "";
						var enc1, enc2, enc3, enc4 = "";
						var i = 0;
						var input = $scope.formData.password;
						// alert(input);

						do {
							chr1 = input.charCodeAt(i++);
							chr2 = input.charCodeAt(i++);
							chr3 = input.charCodeAt(i++);

							// PPMS_100 Starts

							if (isNaN(chr2))
								chr2 = 0;
							if (isNaN(chr3))
								chr3 = 0;
							// PPMS_100 Ends

							enc1 = chr1 >> 2;
							enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
							enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
							enc4 = chr3 & 63;

							if (isNaN(chr2)) {
								enc3 = enc4 = 64;
							} else if (isNaN(chr3)) {
								enc4 = 64;
							}

							output = output + keyStr.charAt(enc1)
									+ keyStr.charAt(enc2) + keyStr.charAt(enc3)
									+ keyStr.charAt(enc4);
							chr1 = chr2 = chr3 = "";
							enc1 = enc2 = enc3 = enc4 = "";
						} while (i < input.length);
						$scope.formData.password = output;

						// alert("userId:"+$scope.loginUserID);
						$rootScope.txtUserId = $scope.loginUserID;
						$rootScope.txtPassword = $scope.formData.password;

						$sessionStorage.sesUserName = $scope.loginUserID;
						$sessionStorage.sesPasword = $scope.formData.password;

						
						//Siva
				    	//adding data in session storage.  
				    	$sessionStorage.hPageId = $scope.formData.hPageId;
				    	$sessionStorage.actionID = $scope.formData.actionID;
				    	$sessionStorage.hCustId = $scope.formData.hCustId;
				    	
				    	//Added for contactus session management
				    	
				    	$localStorage.sesUserName = $sessionStorage.sesUserName;
				    	$localStorage.sesPasword = $sessionStorage.sesPasword;
				    	
						var data = $.param({
							"hpageId" : $scope.formData.hPageId,
							"h_CustID" : $scope.formData.hCustId,
							"txtUserId" : $scope.loginUserID,
							"txtPassword" : $scope.formData.password,
							"actionID" : $scope.formData.actionID,
							"hScreenId" : "coordinator"

						});
						// alert("user input"+data);

						var config = {
							headers : {
								'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
							}
						};
						//
						//Defect# 8068
						var serverUrl=document.URL;
		                 var res = serverUrl.split("/", 3);
		                 var serverName  = res[0]+"//"+res[2];                 
		                 $http.post(serverName+appURL+"/Login",data)
		 //Defect# 8068
								.success(
										function(data, status, headers, config) {
											// sevvanthi starts
											$scope.PostDataResponse = data;
											// alert(JSON.stringify(data));
											$log
													.log("post method is success --"
															+ $scope.PostDataResponse
															+ '--' + status);
											$scope.Work = $scope.PostDataResponse['work'];
											DataService.setData($scope.Work);
											console.log("Work" + $scope.Work);
											
											//Added for dynamic Content by madhu
								        	$sessionStorage.topbannertxt = $scope.PostDataResponse;
								        	//Added for dynamic Content by madhu end
								        	
											// alert("1");
											if (data.length == 0) {
												// alert("2");
												var url = "#login";
												$log.log(url);
												$window.location.href = url;
											}

											else if ($scope.Work
													.hasOwnProperty('error-message')) {
												// alert("3");
												// Added by Authis for inline
												// message Display
												$scope.Errormessage = $scope.Work['error-message'];
												console.log("Errormessage"
														+ $scope.Errormessage);
												$scope.Error = $scope.Errormessage['error'];
												MessageDisplayService
														.setData("FAILURE|"
																+ $scope.Error
																+ "|"
																+ $scope.loginUserID);

												console.log("Error"
														+ $scope.Error);

												var url = "#login";
												$log.log(url);
												$window.location.href = url;
												// this code will display the
												// alert message
												$('[data-login-error]')
														.removeClass('hide');
												// Ended by Authis for inline
												// message Display

												/*
												 * $scope.error_flag =
												 * "error_message";
												 * //alert($scope.error_flag);
												 * MessageDisplayService.setData($scope.error_flag);
												 * 
												 * var url="#login";
												 * $log.log(url);
												 * $window.location.href=url;
												 */
												/*
												 * $scope.Errormessage =
												 * $scope.Work['error-message'];
												 * console.log("Errormessage"+$scope.Errormessage);
												 * $scope.Error
												 * =$scope.Errormessage['error'];
												 * MessageDisplayService.setData($scope.Error);
												 * console.log("Error"+$scope.Error);
												 * var url="#login";
												 * $log.log(url);
												 * $window.location.href=url;
												 */
											} else {
												chooseProgramService
														.setData($scope.PostDataResponse.work);
												UserNameDisplayService
														.setData($scope.PostDataResponse.work);
												// alert(JSON.stringify($scope.PostDataResponse.work));
												// UserNameDisplayService.setData($scope.PostDataResponse.work);
												var url = "#selectprogram";
												$log.log(url);
												$window.location.href = url;
											}

										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});

					};

				});

app.controller("forgotPasswordController", function($scope, $http, $log,
		$window, ForgotPasswordMessageDisplayService, MessageDisplayService,
		DataService) {

	// alert("haii");

	$scope.message = ForgotPasswordMessageDisplayService.getData();
	
	 // Added by Authis for defect #8172
	 
	//alert("1"+$scope.message );
	if($scope.message != undefined){
	 var ststusMsg = $scope.message.split("|");
	// alert("2"+ststusMsg[0]);
	 //alert("3"+ststusMsg[1]);
   	 if(ststusMsg[0] == "FAILURE"){	   		 
   		 $scope.message = ststusMsg[1];
   		 $('[data-login-error]').removeClass('hide');
   	 }
   	 
   	ForgotPasswordMessageDisplayService.setData("");
	} 
	// Ended  by Authis for defect #8172
	
	/*if($scope.message=="error_message"){
		
		$scope.work=DataService.getData();
	    $scope.Errormessage = $scope.work['error-message'];
	    var Errormessage = angular.element( document.querySelector( '#forgotpwd_err_msg' ) );
	   
	    Errormessage.removeClass('hide1');
	    Errormessage.addClass('loginBlk');
	
		$scope.Error =$scope.Errormessage['error'];
    	console.log("Error"+$scope.Error);
    	
	}else{}
	 */
	
	 $scope.sendforgotpwdData = function () {
		 
		 var isError = false;
		 
		 var UserID = document.forms["myForm"]["userid"].value;
		    if (UserID == null || UserID == "") {
		       // alert("Please enter User ID");
		    	$scope.forgotError = "Please enter User ID";
		    	isError = true;
		    }
		
 if(!isError){
  var data=$.param({	   	   
	  
	  "txtUserId" :   UserID,
		"actionID" : "rwd/prg/forgotpassword"
   });
  
  
//Defect# 8068
	var serverUrl=document.URL;         
   var res = serverUrl.split("/", 3);
   var serverName  = res[0]+"//"+res[2];                 
 //  alert(serverName+appURL+"/Login");
$http.post(serverName+appURL+"/ForgotPassword",data)
//Defect# 8068
  
	.success(function (data, status, headers, config) {  
			
		$scope.forgotPasswordData=data;
		$scope.Work= $scope.forgotPasswordData['work'];
		DataService.setData($scope.Work);
		// Moidified  by Authis for defect #8172
		if($scope.Work.hasOwnProperty('error-message')){
   		//alert("Error");
   		//$scope.error_flag = "error_message"; 
   		
   		$scope.error = $scope.Work['error-message']['error'];
   		ForgotPasswordMessageDisplayService.setData("FAILURE|"+$scope.error);
   		
   		var url="#forgot-password";
        $log.log(url);
        $window.location.href=url;
        	
		}else if($scope.Work.hasOwnProperty('info-message')){
			//alert("No Error");
		//$scope.message_flag = "info_message";
			$scope.message  = 	$scope.Work['info-message']['message'];
		
		//MessageDisplayService.setData($scope.message_flag);
		 
		MessageDisplayService.setData("SUCCESS|"+$scope.message);
		// Ended  by Authis for defect #8172
		var url="#login";
        $log.log(url);
        $window.location.href=url;
		}
	
		$log.log(" ForgotPassword post method is success --");        
		
	})
   .error(function (data, status, header, config) {
   	
       $scope.ResponseDetails = "Data: " + data +
           "<hr />status: " + status +
           "<hr />headers: " + header +
           "<hr />config: " + config;
     $log.log("post method is failed");
   });
		    }
	
	 };
 
});

// Changes

// Lanching View Bakance from Top Pull Down
app
		.controller(
				"viewBalanceTopIconCtrl",
				function($scope, $http, $log, $window, chooseProgramService,
						$sessionStorage,$localStorage) {
					// alert("Tab Control From To ICON");
					// $scope.viewBalanceTopIcon = function() {

					var data = $.param({
						"txtUserId" : $sessionStorage.sesUserName,
						"txtPassword" : $sessionStorage.sesPasword,
						"actionID" : "rwd/prg/login/viewbalance",
						"hpageId" : "UNIFORMS_LOGIN_PAGE",
						"h_CustID" : "UNIFORMS_LOGIN_PAGE",
						"hScreenId" : "chooseprogram",
						"programCode" : $sessionStorage.sesprgCode,
						"hAllot" : "0"
					});

					var config = {
						headers : {
							'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
						}
					};

					//$http.post(appURL + "/ViewBalance", data)
					//Defect# 8068
					var serverUrl=document.URL;
		             var res = serverUrl.split("/", 3);
		             var serverName  = res[0]+"//"+res[2];                 
		           //  alert(serverName+appURL+"/Login");
		$http.post(serverName+appURL+"/ViewBalance",data)
		//Defect# 8068
					
							.success(
									function(data, status, headers, config) {

										$scope.PostDataResponse = data;
										$scope.Work = $scope.PostDataResponse['work'];
										$scope.ViewBalance = $scope.Work['view-balance'];
										$scope.Allowance = $scope.ViewBalance['allowance'];
										$scope.Allotment = $scope.ViewBalance['allotment'];
										$scope.progType = $scope.Work['program-type'];

										// $sessionStorage.totalBasicBalance =
										// $scope.Allowance.original.total.value;

										var fromDate = $scope.Allowance['from-date'];
										var toDate = $scope.Allowance['to-date'];

										var fromD = fromDate
												.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
										$scope.fromDate = fromD[2] + "-"
												+ fromD[3] + "-" + fromD[1];

										var toD = toDate
												.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
										$scope.toDate = toD[2] + "-" + toD[3]
												+ "-" + toD[1];

										$scope.returns = $scope.Allowance.balance['cust-credit'];

										if ($scope.Allowance.balance['emp-credit'] === ""
												|| $scope.Allowance.balance['emp-credit'] === "0") {

											$scope.employeeOriginal = "0.00";
										} else {

											$scope.employeeOriginal = $scope.Allowance.balance['emp-credit'];
										}

										if ($scope.Allowance['shopping-cart'].basic === ""
												|| $scope.Allowance['shopping-cart'].basic === "0") {

											$scope.shoppingcartBasic = "0.00";
										} else {

											$scope.shoppingcartBasic = $scope.Allowance['shopping-cart'].basic;
										}

										if ($scope.Allowance['shopping-cart']['emp-credit'] === ""
												|| $scope.Allowance['shopping-cart']['emp-credit'] === "0") {

											$scope.shoppingcartEmpCrd = "0.00";
										} else {

											$scope.shoppingcartEmpCrd = $scope.Allowance['shopping-cart']['emp-credit'];
										}

										if ($scope.Allowance.balance['emp-credit'] === ""
												|| $scope.Allowance.balance['emp-credit'] === "0") {

											$scope.employeeBalance = "0.00";
										} else {

											$scope.employeeBalance = $scope.Allowance.balance['emp-credit'];
										}

										if ($scope.Allowance['shopping-cart'].shared1.value === ""
												|| $scope.Allowance['shopping-cart'].shared1.value === "0") {

											$scope.shopingCartShared1 = "0.00";
										} else {

											$scope.shopingCartShared1 = $scope.Allowance['shopping-cart'].shared1.value;
										}

										if ($scope.Allowance['shopping-cart'].shared2.value === ""
												|| $scope.Allowance['shopping-cart'].shared2.value === "0") {

											$scope.shopingCartShared2 = "0.00";
										} else {

											$scope.shopingCartShared2 = $scope.Allowance['shopping-cart'].shared2.value;
										}

										var temp0 = $scope.Allowance.balance['cust-credit'];
										var temp1 = $scope.Allowance.original.basic;
										var temp2 = $scope.Allowance.used.basic;
										var temp3 = $scope.Allowance['shopping-cart'].basic;
										var temp4 = "0.00";
										var temp5 = "0.00";
										var temp6 = "0.00";
										var temp7 = $scope.Allowance.original.shared1.value;
										var temp8 = $scope.Allowance.used.shared1.value;
										var temp9 = $scope.Allowance['shopping-cart'].shared1.value;
										var temp10 = $scope.Allowance.original.shared2.value;
										var temp11 = $scope.Allowance.used.shared2.value;
										var temp12 = $scope.Allowance['shopping-cart'].shared2.value;

										var bal1 = parseFloat(temp1)
												- parseFloat(temp2)
												+ parseFloat(temp3);
										var bal2 = parseFloat(temp4)
												- parseFloat(temp5)
												+ parseFloat(temp6);
										var bal3 = parseFloat(temp7)
												- parseFloat(temp8)
												+ parseFloat(temp9);
										var bal4 = parseFloat(temp10)
												- parseFloat(temp11)
												+ parseFloat(temp12);

										$scope.AvailableCrdtShard1 = (parseFloat(temp7)
												- parseFloat(temp8) + parseFloat(temp9))
												.toFixed(2);
										$scope.AvailableCrdtShard2 = (parseFloat(temp10)
												- parseFloat(temp11) + parseFloat(temp12))
												.toFixed(2);
										$scope.TotalOriginal = (parseFloat(temp1)
												+ parseFloat(temp4)
												+ parseFloat(temp7) + parseFloat(temp10))
												.toFixed(2);
										$scope.TotalUsedPriv = (parseFloat(temp2)
												+ parseFloat(temp5)
												+ parseFloat(temp8) + parseFloat(temp11))
												.toFixed(2);
										$scope.TotalShopCart = (parseFloat(temp12)
												+ parseFloat(temp3)
												+ parseFloat(temp6) + parseFloat(temp9))
												.toFixed(2);
										$scope.AvailableCrdtRtn = (parseFloat(bal1)
												+ parseFloat(bal2)
												+ parseFloat(bal3) + +parseFloat(bal4))
												.toFixed(2);
										$scope.Basicbalance = (parseFloat(temp1)
												- parseFloat(temp2)
												+ parseFloat(temp3) + parseFloat(temp0))
												.toFixed(2);
										$scope.EmpCrdtbalance = (parseFloat(temp4)
												- parseFloat(temp5) + parseFloat(temp6))
												.toFixed(2);

										$sessionStorage.totalBasicBalance = $scope.Basicbalance; // To
																									// display
																									// Balance
																									// in
																									// Header
										//Added for contactus session management
										$localStorage.totalBasicBalance = $scope.Basicbalance;

										$scope.Substitutions = $scope.ViewBalance['substitutions'];
										$scope.neglotGroups = $scope.Substitutions.substitution['neglot-groups'];
										var subRev = $scope.Substitutions.substitution.reversible;

										if (subRev == "0") {
											$scope.SubRevValue = "No";
										} else if (subRev == "1") {
											$scope.SubRevValue = "Yes";
										}

									}).error(
									function(data, status, header, config) {
										$scope.ResponseDetails = "Data: "
												+ data + "<hr />status: "
												+ status + "<hr />headers: "
												+ header + "<hr />config: "
												+ config;
										$log.log("post method is failed");
									});
					// };

				});

// Lanching View Bakance from Menu
app
		.controller(
				"viewBalanceCtrl",
				function($scope, $http, $log, $window, chooseProgramService,
						$sessionStorage,$localStorage) {
					// alert("Tab Control From Left Menu");

					var data = $.param({
						"txtUserId" : $sessionStorage.sesUserName,
						"txtPassword" : $sessionStorage.sesPasword,
						"actionID" : "rwd/prg/login/viewbalance",
						"hpageId" : "UNIFORMS_LOGIN_PAGE",
						"h_CustID" : "UNIFORMS_LOGIN_PAGE",
						"hScreenId" : "chooseprogram",
						"programCode" : $sessionStorage.sesprgCode,
						"hAllot" : "0"
					});

					var config = {
						headers : {
							'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
						}
					};

					//$http.post(appURL + "/ViewBalance", data)
					//Defect# 8068
					var serverUrl=document.URL;
		             var res = serverUrl.split("/", 3);
		             var serverName  = res[0]+"//"+res[2];                 
		           //  alert(serverName+appURL+"/Login");
		$http.post(serverName+appURL+"/ViewBalance",data)
		//Defect# 8068
							.success(
									function(data, status, headers, config) {

										$scope.PostDataResponse = data;
										$scope.Work = $scope.PostDataResponse['work'];
										$scope.ViewBalance = $scope.Work['view-balance'];
										$scope.Allowance = $scope.ViewBalance['allowance'];
										$scope.Allotment = $scope.ViewBalance['allotment'];
										$scope.progType = $scope.Work['program-type'];

										// $sessionStorage.totalBasicBalance =
										// $scope.Allowance.original.total.value;

										var fromDate = $scope.Allowance['from-date'];
										var toDate = $scope.Allowance['to-date'];

										var fromD = fromDate
												.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
										$scope.fromDate = fromD[2] + "-"
												+ fromD[3] + "-" + fromD[1];

										var toD = toDate
												.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
										$scope.toDate = toD[2] + "-" + toD[3]
												+ "-" + toD[1];

										$scope.returns = $scope.Allowance.balance['cust-credit'];
										console
												.log(JSON
														.stringify($scope.Allowance.balance['emp-credit'])
														+ "-----"
														+ JSON
																.stringify($scope.Allowance['shopping-cart'].basic));
										if ($scope.Allowance.balance['emp-credit'] === ""
												|| $scope.Allowance.balance['emp-credit'] === "0") {

											$scope.employeeOriginal = "0.00";
										} else {

											$scope.employeeOriginal = $scope.Allowance.balance['emp-credit'];
										}

										if ($scope.Allowance['shopping-cart'].basic === ""
												|| $scope.Allowance['shopping-cart'].basic === "0") {

											$scope.shoppingcartBasic = "0.00";
										} else {

											$scope.shoppingcartBasic = $scope.Allowance['shopping-cart'].basic;
										}

										if ($scope.Allowance['shopping-cart']['emp-credit'] === ""
												|| $scope.Allowance['shopping-cart']['emp-credit'] === "0") {

											$scope.shoppingcartEmpCrd = "0.00";
										} else {

											$scope.shoppingcartEmpCrd = $scope.Allowance['shopping-cart']['emp-credit'];
										}

										if ($scope.Allowance.balance['emp-credit'] === ""
												|| $scope.Allowance.balance['emp-credit'] === "0") {

											$scope.employeeBalance = "0.00";
										} else {

											$scope.employeeBalance = $scope.Allowance.balance['emp-credit'];
										}

										if ($scope.Allowance['shopping-cart'].shared1.value === ""
												|| $scope.Allowance['shopping-cart'].shared1.value === "0") {

											$scope.shopingCartShared1 = "0.00";
										} else {

											$scope.shopingCartShared1 = $scope.Allowance['shopping-cart'].shared1.value;
										}

										if ($scope.Allowance['shopping-cart'].shared2.value === ""
												|| $scope.Allowance['shopping-cart'].shared2.value === "0") {

											$scope.shopingCartShared2 = "0.00";
										} else {

											$scope.shopingCartShared2 = $scope.Allowance['shopping-cart'].shared2.value;
										}

										var temp0 = $scope.Allowance.balance['cust-credit'];
										var temp1 = $scope.Allowance.original.basic;
										var temp2 = $scope.Allowance.used.basic;
										var temp3 = $scope.Allowance['shopping-cart'].basic;
										var temp4 = "0.00";
										var temp5 = "0.00";
										var temp6 = "0.00";
										var temp7 = $scope.Allowance.original.shared1.value;
										var temp8 = $scope.Allowance.used.shared1.value;
										var temp9 = $scope.Allowance['shopping-cart'].shared1.value;
										var temp10 = $scope.Allowance.original.shared2.value;
										var temp11 = $scope.Allowance.used.shared2.value;
										var temp12 = $scope.Allowance['shopping-cart'].shared2.value;

										var bal1 = parseFloat(temp1)
												- parseFloat(temp2)
												+ parseFloat(temp3);
										var bal2 = parseFloat(temp4)
												- parseFloat(temp5)
												+ parseFloat(temp6);
										var bal3 = parseFloat(temp7)
												- parseFloat(temp8)
												+ parseFloat(temp9);
										var bal4 = parseFloat(temp10)
												- parseFloat(temp11)
												+ parseFloat(temp12);
										// alert(parseInt(temp7)+"---"+parseInt(temp8)
										// +"---"+ parseInt(temp9));

										$scope.AvailableCrdtShard1 = (parseFloat(temp7)
												- parseFloat(temp8) + parseFloat(temp9))
												.toFixed(2);
										$scope.AvailableCrdtShard2 = (parseFloat(temp10)
												- parseFloat(temp11) + parseFloat(temp12))
												.toFixed(2);
										$scope.TotalOriginal = (parseFloat(temp1)
												+ parseFloat(temp4)
												+ parseFloat(temp7) + parseFloat(temp10))
												.toFixed(2);
										$scope.TotalUsedPriv = (parseFloat(temp2)
												+ parseFloat(temp5)
												+ parseFloat(temp8) + parseFloat(temp11))
												.toFixed(2);
										$scope.TotalShopCart = (parseFloat(temp12)
												+ parseFloat(temp3)
												+ parseFloat(temp6) + parseFloat(temp9))
												.toFixed(2);
										$scope.AvailableCrdtRtn = (parseFloat(bal1)
												+ parseFloat(bal2)
												+ parseFloat(bal3) + +parseFloat(bal4))
												.toFixed(2);
										$scope.Basicbalance = (parseFloat(temp1)
												- parseFloat(temp2)
												+ parseFloat(temp3) + parseFloat(temp0))
												.toFixed(2);
										$scope.EmpCrdtbalance = (parseFloat(temp4)
												- parseFloat(temp5) + parseFloat(temp6))
												.toFixed(2);

										$sessionStorage.totalBasicBalance = $scope.Basicbalance; // To
																									// display
																									// Balance
																									// in
											//Added for contactus session management														// Header
										
										$localStorage.totalBasicBalance = $scope.Basicbalance;

										$scope.Substitutions = $scope.ViewBalance['substitutions'];
										$scope.neglotGroups = $scope.Substitutions.substitution['neglot-groups'];
										// $scope.poslotGroups =
										// $scope.Substitutions.substitution['poslot-groups'];
										var subRev = $scope.Substitutions.substitution.reversible;

										if (subRev == "0") {
											$scope.SubRevValue = "No";
										} else if (subRev == "1") {
											$scope.SubRevValue = "Yes";
										}

									}).error(
									function(data, status, header, config) {
										$scope.ResponseDetails = "Data: "
												+ data + "<hr />status: "
												+ status + "<hr />headers: "
												+ header + "<hr />config: "
												+ config;
										$log.log("post method is failed");
									});

				});

// Lanching View Bakance in Choose Program tab
app
		.controller(
				"tabCtrl",
				function($scope, $http, $log, $window, chooseProgramService,
						$sessionStorage, $filter,$sce, $rootScope,$localStorage) {
					
					//Added for dynamic content by madhu
					$scope.showTopbarDynamicData = function(){
						$rootScope.$emit("CallParentMethod1", {});
					};
					$scope.showTopbarDynamicData();
					//Added for dynamic content by madhu end
					
					// $filter added by madhumathi
					$scope.data1 = chooseProgramService.getData();
					
					$scope.selectedProgram = 0;
					$scope.isSupervisor = false;


					//siva
					//DATA from service
					
					
						var sessionData = $.param({
					    	  "hpageId" :$sessionStorage.hPageId,
					            "h_CustID" : $sessionStorage.hCustId,
					            "txtUserId" : $sessionStorage.sesUserName,
								"txtPassword" : $sessionStorage.sesPasword,
								"actionID" : $sessionStorage.actionID,
								"hScreenId":"Coordinator"
					    	
					    });
					        
					    //$http.post("http://localhost:9080/MojoRestPRG/api/Login",sessionData)
						//Defect# 8068
						var serverUrl=document.URL;
		                 var res = serverUrl.split("/", 3);
		                 var serverName  = res[0]+"//"+res[2];                 
		                 $http.post(serverName+appURL+"/Login",sessionData)
		                     //Defect# 8068
					   	        .success(function (data) {
					    	       
					       
					    	if(data.length==0)
					    	{
							  	var url="#login";
							      $log.log(url);
							     // $window.location.href=url;
							  	}
							
							    	else if(data['work'].hasOwnProperty('error-message')){
							    		
							    		$scope.error_flag = "error_message"; 
							    		//alert($scope.error_flag);
							       		MessageDisplayService.setData($scope.error_flag);
							       		
							       		var url="#login";
								        $log.log(url);
								       // $window.location.href=url;
							         }     
							  else
							  	{
							  	$scope.chooseProgram = data['work']['choose-program'];
							  	$scope.firstname =$scope.chooseProgram['first-name'];
								$scope.lastname =$scope.chooseProgram['last-name'];
								$scope.validProgramsList=$scope.chooseProgram['valid-program-list']['valid-program-codes'];
								
								
								//siva
								//store user details in session
								$sessionStorage.firstName = $scope.chooseProgram['first-name'];
								$sessionStorage.lastName = $scope.chooseProgram['last-name'];
								$scope.chooseprgtxt = $sce.trustAsHtml($scope.chooseProgram['chooseprogram-content']);//Added by madhu dynamic content
								//Show hide func for dynamic content by madhu
								$scope.showHideDynamicText = function(){
									if($scope.chooseprgtxt == null || $scope.chooseprgtxt == "") {
										$scope.chooseprgtxtempty = true;
									}
									else {
										$scope.chooseprgtxtempty = false;
									}
								};
								$scope.showHideDynamicText();
								//Show hide func for dynamic content by madhu end
								 
								$scope.selected_programcode = $scope.validProgramsList[0];
								
								$sessionStorage.sesprgCode =$scope.selected_programcode['program-code']; //Set in to session Once login
								//for supervisor options show hide
								
								//Added for contact us session management
								$localStorage.sesprgCode = $sessionStorage.sesprgCode;
								$localStorage.firstName = $sessionStorage.firstName;
								$localStorage.lastName = $sessionStorage.lastName;
								
								var ispunchout = data['work']['is_punchout_flow'];
								var empPurchase = $scope.chooseProgram['employee-purchase'];
								var empAllowPurchase = $scope.validProgramsList[$scope.selectedProgram]['allow-emp-purchase'];
								var empProgramCode = $scope.validProgramsList[$scope.selectedProgram]['program-code'];
								//var empHideCustPurchase = $scope.validProgramsList[$scope.selectedProgram]['hide-cust-purchase-opt'];
								var isMarathon = $scope.chooseProgram['is-marathon'];
								var isFhp = $scope.chooseProgram['is-fhp'];
								var adminForOtheremployee =	$scope.chooseProgram['admin-for-other-employee'];		
							    var forceEmpPayment = $scope.validProgramsList[$scope.selectedProgram]['force-emp-payment'];
							    var isNyct = $scope.chooseProgram['is-nyct'];
							    var forceCredit = $scope.validProgramsList[$scope.selectedProgram]['force-credit-card-on-web'];
							    var siteID = data['work']['site-id'];
							    $sessionStorage.supervisorRole = false;
							    if(siteID = "204"){

									 if (adminForOtheremployee == "Y") {
										// added for hide allowance
										// option in punchout flow
										 $sessionStorage.supervisorRole = true;
										if (ispunchout == 'Y') {
					
										} else {
											if (empPurchase && empPurchase == "Y" && empProgramCode == 'FED FRTNTL') {
												$scope.enableAllowancePurchase = true;								
											   
											} else if (empAllowPurchase == '0') {
												$scope.enableAllowancePurchase = true;
												$scope.enableCompanyPurchase = true;							
													
											} else if (empAllowPurchase == '1') {
												$scope.enableAllowancePurchase = true;
												$scope.enableCompanyPurchase = true;
												$scope.enableMyCreditCardPurchase = true;	
											}
										}
									}else{
										  //added for hide allowance option in punchout flow
										if(ispunchout == 'Y'){
											
										}else{					
											// Performing Manipulation on the displayed Employee Purchase options
											if (isNyct != 'Y')
											{
												if(forceCredit == '1')
												{
												// When an employee, not having admin priveleges  NOT associated with NYCT program  logs in
													$scope.enableMyCreditCardPurchase = true;									
												}
												else
												{	
													$scope.enableMyCreditCardPurchase = true;	
												}
											}
											else
											{
											// When an employee, not having admin priveleges associated with NYCT program  logs in
												
											}
											
										}
									}
					
									if(adminForOtheremployee == 'Y'){
										if(!(isMarathon=='Y' || isFhp=='Y'))
						        		{
											//$scope.enableAllowancePurchase = false;
											//$scope.enableCompanyPurchase = false;
											//$scope.enableMyCreditCardPurchase = false;					        
								        }
									}
									else if(forceEmpPayment == "1"){
										$scope.enableAllowancePurchase = false;
										$scope.enableCompanyPurchase = false;
										$scope.enableMyCreditCardPurchase = false;	
									}else if(empAllowPurchase == "1"){
										if(isFhp !='Y' )
										{
											//$scope.enableAllowancePurchase = false;
											//$scope.enableCompanyPurchase = false;
											//$scope.enableMyCreditCardPurchase = false;	
						        		}
									}
									
									if(empProgramCode =='NISSAN' || empProgramCode =='PIKE ELEC')								
										{	
											//display eligibilty date				
											//var strEligDate = "<table><tr><td height='20'></td></tr><tr><td><span class='boxheader14'><strong>Eligibility Date:&#160;" + document.forms[0].eligibilityDate.value + "</strong></span></td></tr></table>";
											
										}
								
								
							    }else if(siteID == "212"){
							    	
							    }
							    else{
							    	
							    }
									
										
							} 
							  
					     	
					    }).error(function (data, status, header, config) {
					        $scope.ResponseDetails = "Data: " + data +
					            "<hr />status: " + status +
					            "<hr />headers: " + header +
					            "<hr />config: " + config;
					       $log.log("post method is failed");
					    });


					
					
					
					$scope.recordSelected = function(index){
						$scope.selectedProgram = index;
					};
					

					$scope.activeTab = 1;

					$scope.setActiveTab = function(tabToSet) {

						$scope.activeTab = tabToSet;
						$sessionStorage.sesprgCode = $scope.selected_programcode['program-code']; // Set
																									// in
																									// to
																									// session
																									// if
																									// make
																									// chnage
																									// in
																									// radio
																									// Button

						var data = $.param({
							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"actionID" : "rwd/prg/login/viewbalance",
							"hpageId" : "UNIFORMS_LOGIN_PAGE",
							"h_CustID" : "UNIFORMS_LOGIN_PAGE",
							"hScreenId" : "chooseprogram",
							"programCode" : $sessionStorage.sesprgCode,
							"hAllot" : "0"
						});

						var config = {
							headers : {
								'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
							}
						};

						//$http.post(appURL + "/ViewBalance", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			           //  alert(serverName+appURL+"/Login");
			$http.post(serverName+appURL+"/ViewBalance",data)
			//Defect# 8068
								.success(
										function(data, status, headers, config) {

											$scope.PostDataResponse = data;
											$scope.Work = $scope.PostDataResponse['work'];
											$scope.ViewBalance = $scope.Work['view-balance'];
											$scope.Allowance = $scope.ViewBalance['allowance'];
											$scope.Allotment = $scope.ViewBalance['allotment'];
											$scope.progType = $scope.Work['program-type'];
										    $scope.viewbaltxt = $sce.trustAsHtml($scope.ViewBalance['viewbalance-content']);//Added by madhu dynamic content

										  	//Show hide func for dynamic content by madhu
										  	$scope.showHideDynamicText1 = function(){
										  		if($scope.viewbaltxt == null || $scope.viewbaltxt == "") {
										  			$scope.viewbaltxtempty = true;
										  		}
										  		else {
										  			$scope.viewbaltxtempty = false;
										  		}
										  	};
										  	$scope.showHideDynamicText1();
										  	//Show hide func for dynamic content by madhu end

											// $sessionStorage.totalBasicBalance
											// =
											// $scope.Allowance.original.total.value;

											var fromDate = $scope.Allowance['from-date'];
											var toDate = $scope.Allowance['to-date'];

											var fromD = fromDate
													.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
											$scope.fromDate = fromD[2] + "/"
													+ fromD[3] + "/" + fromD[1]; // changed
																					// by
																					// madhu

											var toD = toDate
													.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
											$scope.toDate = toD[2] + "/"
													+ toD[3] + "/" + toD[1]; // replaced
																				// - to
																				// / -
																				// madhu

											$scope.returns = $scope.Allowance.balance['cust-credit'];
											console
													.log(JSON
															.stringify($scope.Allowance.balance['emp-credit'])
															+ "-----"
															+ JSON
																	.stringify($scope.Allowance['shopping-cart'].basic));
											if ($scope.Allowance.balance['emp-credit'] === ""
													|| $scope.Allowance.balance['emp-credit'] === "0") {

												$scope.employeeOriginal = "0.00";
											} else {

												$scope.employeeOriginal = $scope.Allowance.balance['emp-credit'];
											}

											if ($scope.Allowance['shopping-cart'].basic === ""
													|| $scope.Allowance['shopping-cart'].basic === "0") {

												$scope.shoppingcartBasic = "0.00";
											} else {

												$scope.shoppingcartBasic = $scope.Allowance['shopping-cart'].basic;
											}

											if ($scope.Allowance['shopping-cart']['emp-credit'] === ""
													|| $scope.Allowance['shopping-cart']['emp-credit'] === "0") {

												$scope.shoppingcartEmpCrd = "0.00";
											} else {

												$scope.shoppingcartEmpCrd = $scope.Allowance['shopping-cart']['emp-credit'];
											}

											if ($scope.Allowance.balance['emp-credit'] === ""
													|| $scope.Allowance.balance['emp-credit'] === "0") {

												$scope.employeeBalance = "0.00";
											} else {

												$scope.employeeBalance = $scope.Allowance.balance['emp-credit'];
											}

											if ($scope.Allowance['shopping-cart'].shared1.value === ""
													|| $scope.Allowance['shopping-cart'].shared1.value === "0") {

												$scope.shopingCartShared1 = "0.00";
											} else {

												$scope.shopingCartShared1 = $scope.Allowance['shopping-cart'].shared1.value;
											}

											if ($scope.Allowance['shopping-cart'].shared2.value === ""
													|| $scope.Allowance['shopping-cart'].shared2.value === "0") {

												$scope.shopingCartShared2 = "0.00";
											} else {

												$scope.shopingCartShared2 = $scope.Allowance['shopping-cart'].shared2.value;
											}

											var temp0 = $scope.Allowance.balance['cust-credit'];
											var temp1 = $scope.Allowance.original.basic;
											var temp2 = $scope.Allowance.used.basic;
											var temp3 = $scope.Allowance['shopping-cart'].basic;
											var temp4 = "0.00";
											var temp5 = "0.00";
											var temp6 = "0.00";
											var temp7 = $scope.Allowance.original.shared1.value;
											var temp8 = $scope.Allowance.used.shared1.value;
											var temp9 = $scope.Allowance['shopping-cart'].shared1.value;
											var temp10 = $scope.Allowance.original.shared2.value;
											var temp11 = $scope.Allowance.used.shared2.value;
											var temp12 = $scope.Allowance['shopping-cart'].shared2.value;

											var bal1 = parseFloat(temp1)
													- parseFloat(temp2)
													+ parseFloat(temp3);
											var bal2 = parseFloat(temp4)
													- parseFloat(temp5)
													+ parseFloat(temp6);
											var bal3 = parseFloat(temp7)
													- parseFloat(temp8)
													+ parseFloat(temp9);
											var bal4 = parseFloat(temp10)
													- parseFloat(temp11)
													+ parseFloat(temp12);
											// alert(parseInt(temp7)+"---"+parseInt(temp8)
											// +"---"+ parseInt(temp9));

											$scope.AvailableCrdtShard1 = (parseFloat(temp7)
													- parseFloat(temp8) + parseFloat(temp9))
													.toFixed(2);
											$scope.AvailableCrdtShard2 = (parseFloat(temp10)
													- parseFloat(temp11) + parseFloat(temp12))
													.toFixed(2);
											$scope.TotalOriginal = (parseFloat(temp1)
													+ parseFloat(temp4)
													+ parseFloat(temp7) + parseFloat(temp10))
													.toFixed(2);
											$scope.TotalUsedPriv = (parseFloat(temp2)
													+ parseFloat(temp5)
													+ parseFloat(temp8) + parseFloat(temp11))
													.toFixed(2);
											$scope.TotalShopCart = (parseFloat(temp12)
													+ parseFloat(temp3)
													+ parseFloat(temp6) + parseFloat(temp9))
													.toFixed(2);
											$scope.AvailableCrdtRtn = (parseFloat(bal1)
													+ parseFloat(bal2)
													+ parseFloat(bal3) + +parseFloat(bal4))
													.toFixed(2);
											$scope.Basicbalance = (parseFloat(temp1)
													- parseFloat(temp2)
													+ parseFloat(temp3) + parseFloat(temp0))
													.toFixed(2);
											$scope.EmpCrdtbalance = (parseFloat(temp4)
													- parseFloat(temp5) + parseFloat(temp6))
													.toFixed(2);

											// var basicBal =
											// $scope.Basicbalance ;
											// $scope.Basicbalance =
											// parseFloat(basicBal).toFixed(2);

											$sessionStorage.totalBasicBalance = $scope.Basicbalance; // To
																										// display
																										// Balance
																										// in
																										// Header
											
											//Added for contactus session management
											$localStorage.totalBasicBalance = $scope.Basicbalance;

											$scope.Substitutions = $scope.ViewBalance['substitutions'];
											$scope.neglotGroups = $scope.Substitutions.substitution['neglot-groups'];
											// $scope.poslotGroups =
											// $scope.Substitutions.substitution['poslot-groups'];
											var subRev = $scope.Substitutions.substitution.reversible;

											if (subRev == "0") {
												$scope.SubRevValue = "No";
											} else if (subRev == "1") {
												$scope.SubRevValue = "Yes";
											}

										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});
					};

					$scope.continuePrg = function() {
						$sessionStorage.sesprgCode = $scope.selected_programcode['program-code'];

						// Calling View Balance here to Get balance to display
						// it tin header
						var data = $.param({
							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"actionID" : "rwd/prg/login/viewbalance",
							"hpageId" : "UNIFORMS_LOGIN_PAGE",
							"h_CustID" : "UNIFORMS_LOGIN_PAGE",
							"hScreenId" : "chooseprogram",
							"programCode" : $sessionStorage.sesprgCode,
							"hAllot" : "0"
						});
						var config = {
							headers : {
								'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
							}
						};
						//$http.post(appURL + "/ViewBalance", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			           //  alert(serverName+appURL+"/Login");
			$http.post(serverName+appURL+"/ViewBalance",data)
			//Defect# 8068
								.success(
										function(data, status, headers, config) {

											$scope.PostDataResponse = data;
											$scope.Allowance = $scope.PostDataResponse['work']['view-balance']['allowance'];

											var temp0 = $scope.Allowance.balance['cust-credit'];
											var temp1 = $scope.Allowance.original.basic;
											var temp2 = $scope.Allowance.used.basic;
											var temp3 = $scope.Allowance['shopping-cart'].basic;

											$scope.Basicbalance = (parseFloat(temp1)
													- parseFloat(temp2)
													+ parseFloat(temp3) + parseFloat(temp0))
													.toFixed(2);

											$sessionStorage.totalBasicBalance = $scope.Basicbalance; // To
																										// display
																										// Balance
																										// in
																										// Header
											
											//Added for contactus session management
											$localStorage.totalBasicBalance = $scope.Basicbalance;
											// var bal =
											// $sessionStorage.totalBasicBalance;
											// alert(bal);
										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});

						var data = $.param({
							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"actionID" : "rwd/prg/login/catalog",
							"huserId" : $sessionStorage.sesUserName,
							"optProgCode" : $sessionStorage.sesprgCode,
							"prgCode" : $sessionStorage.sesprgCode,
							"hdnPrgCode" : $sessionStorage.sesprgCode,
							"hideonweb" : "0",
							"txtStyleSheet" : "vfstyle.css",
							"hpageId" : "UNIFORMS_LOGIN_PAGE",
							"h_CustID" : "UNIFORMS_LOGIN_PAGE",
							"forceemppayment" : "0",
							"allowemp" : "0",
							"hProgramCode" : "2",
							"employeePurchase" : "N",
							"eligibilityDate" : "01/01/2017",
							"allot" : "0",
							"hScreenId" : "chooseprogram",
							"fromRWDWebService" : "Y"

						});

						//$http.post(appURL + "/landingPage", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			           //  alert(serverName+appURL+"/Login");
			$http.post(serverName+appURL+"/landingPage",data)
			//Defect# 8068
								.success(
										function(data, status, headers, config) {

											$scope.PostDataResponse = data;
											// chooseProgramService.setData($scope.PostDataResponse.work);

											$log
													.log("post method is success --"
															+ JSON
																	.stringify($scope.PostDataResponse)
															+ '--' + status);

											$scope.catalogTreeNode = $scope.PostDataResponse.work;

											$sessionStorage.ShopCatalog = $scope.catalogTreeNode;

											// alert(JSON.stringify($scope.catalogTreeNode));
											$log
													.log("WelcomePageContent :  "
															+ JSON
																	.stringify($scope.catalogTreeNode));

											var url = "#uniforms";
											$log.log(url);
											$window.location.href = url;

										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});

					};

				});

app.controller("leftMenuCtrl", function($scope, $http, $log, $window,
		chooseProgramService, $sessionStorage, $sce, $rootScope) {
	
	//Added for dynamic content by madhu
	$scope.topbannerempty = true;
	 $rootScope.$on("CallParentMethod", function(){
         $scope.leftMenuFucntion();
      });
	 $rootScope.$on("CallParentMethod1", function(){
         $scope.leftMenuFucntion1();
      });
	$scope.leftMenuFucntion = function(){		 
	$scope.leftbar = $sessionStorage.ShopCatalog;
	//Side menu top text
	$scope.leftbartxt = $sce.trustAsHtml($scope.leftbar['left-bar-text']);
	//Window Title
	$scope.windowtitle = $sce.trustAsHtml($scope.leftbar['company-name']);
	//Header top Bar
	$scope.topbanner = $sce.trustAsHtml($scope.leftbar['top-bar']);
	$scope.leftbarbelowtxt = $sce.trustAsHtml($scope.leftbar['below-catalog-text']);
	//Show hide func for dynamic content by madhu
  	$scope.showHideDynamicLeftbartxt = function(){
  		if($scope.leftbartxt == null || $scope.leftbartxt == "") {
  			$scope.leftbartxtempty = true;
  		}
  		else {
  			$scope.leftbartxtempty = false;
  		}
  	};
  	$scope.showHideDynamicLeftbartxt();
  	
  	$scope.showHideDynamicLeftbarbelowtxt = function(){
  		if($scope.leftbarbelowtxt == null || $scope.leftbarbelowtxt == "") {
  			$scope.leftbarbelowtxtempty = true;
  		}
  		else {
  			$scope.leftbarbelowtxtempty = false;
  		}
  	};
  	$scope.showHideDynamicLeftbarbelowtxt();

  	$scope.showHideDynamicTopbanner = function(){
  		if($scope.topbanner == null || $scope.topbanner == "") {
  			$scope.topbannerempty = true;
  		}
  		else {
  			$scope.topbannerempty = false;
  		}
  	};
  	$scope.showHideDynamicTopbanner();
  	//Show hide func for dynamic content by madhu end
	};

	$scope.leftMenuFucntion1 = function(){		 
		$scope.leftbar = $sessionStorage.topbannertxt;
		$scope.leftbart = $scope.leftbar['work'];
	 	//Header top Bar
		$scope.topbanner = $sce.trustAsHtml($scope.leftbart['top-bar']);
	  	//Show hide func for dynamic content by madhu
	  	$scope.showHideDynamicTopbanner = function(){
	  		if($scope.topbanner == null || $scope.topbanner == "") {
	  			$scope.topbannerempty = true;
	  		}
	  		else {
	  			$scope.topbannerempty = false;
	  		}
	  	};
	  	$scope.showHideDynamicTopbanner();
	  	//Show hide func for dynamic content by madhu end
		//$scope.hidetopbar = false;
	};
	//Added for dynamic content by madhu end
	
	
	$scope.dropMenu = function() {

		$scope.LeftMenu = $sessionStorage.ShopCatalog;
		$log.log("WelcomePageContent :  " + JSON.stringify($scope.LeftMenu));
		$scope.LeftMenuShopUniform = $scope.LeftMenu['catalog-tree'].tree.node;
		// alert("WelcomePageContent : "+
		// JSON.stringify($scope.LeftMenuShopUniform));
		// alert("in menu"+JSON.stringify($scope.LeftMenuShopUniform));
	};

	$scope.shopShirtsFromMenu = function(url) {

		var urlValue = url;

		var splUrl = urlValue.split("indexNo");
		var splSubUrl = splUrl[1].split("&");
		var indexNo = splSubUrl[0].replace("=", "");

		var splUrl = urlValue.split("txtSeqNo");
		var splSubUrl = splUrl[1].split("&");
		var seqNo = splSubUrl[0].replace("=", "");

		var data = $.param({

			"txtUserId" : $sessionStorage.sesUserName,
			"txtPassword" : $sessionStorage.sesPasword,
			"optProgCode" : $sessionStorage.sesprgCode,
			"prgCode" : $sessionStorage.sesprgCode,
			"hdnPrgCode" : $sessionStorage.sesprgCode,
			"txtCartEmpty" : "Y",
			"actionID" : "rwd/prg/garmentsdisplay",
			"huserId" : $sessionStorage.sesUserName,
			"hCommentCard" : "NULL",

			// ChooseProgram
			"hideonweb" : "0",
			"hpageId" : "UNIFORMS_LOGIN_PAGE",
			"h_CustID" : "UNIFORMS_LOGIN_PAGE",
			"forceemppayment" : "0",
			"allowemp" : "0",
			"hProgramCode" : "2",
			"employeePurchase" : "N",
			"eligibilityDate" : "01/01/2017",
			"allot" : "0",
			"hScreenId" : "chooseprogram",
			"fromRWDWebService" : "Y",

			// hidden
			"txtStyleSheet" : "vfstyle.css",
			"txtSeqNo" : seqNo,
			"levelid" : "0",
			"hStyleId" : seqNo,
			"indexNo" : indexNo,
			"nextPreviousFlag" : "First",
			"lastSeq" : "0",

		});
		//$http.post(appURL + "/GarmentsDisplay", data)
		//Defect# 8068
		var serverUrl=document.URL;
         var res = serverUrl.split("/", 3);
         var serverName  = res[0]+"//"+res[2];                 
       //  alert(serverName+appURL+"/Login");
$http.post(serverName+appURL+"/GarmentsDisplay",data)
//Defect# 8068

		.success(function(data, status, headers, config) {

			$scope.GarmentsDisplayData = data;
			// alert( JSON.stringify($scope.GarmentsDisplayData));
			// chooseProgramService.setData($scope.GarmentsDisplayData);
			$sessionStorage.sesGarmentsDisplay = $scope.GarmentsDisplayData;
			var url = "#shop_shirts";
			$log.log(url);
			$window.location.href = url;

		}).error(
				function(data, status, header, config) {
					$scope.ResponseDetails = "Data: " + data + "<hr />status: "
							+ status + "<hr />headers: " + header
							+ "<hr />config: " + config;
					$log.log("post method is failed");
				});
	};

});

/*
 * app .controller( "tabCtrl", function($scope, $http, $log, $window,
 * chooseProgramService, $sessionStorage) {
 * 
 * $scope.data1 = chooseProgramService.getData();
 * 
 * $scope.chooseProgram = $scope.data1['choose-program']; $scope.firstname =
 * $scope.chooseProgram['first-name']; $scope.lastname =
 * $scope.chooseProgram['last-name']; $scope.validProgramsList =
 * $scope.chooseProgram['valid-program-list']['valid-program-codes'];
 * 
 * $log.log("validPrgramCode:>>>>>" + JSON.stringify($scope.validProgramsList));
 * 
 * $scope.selected_programcode = $scope.validProgramsList[0];
 * 
 * $sessionStorage.sesprgCode = $scope.selected_programcode['program-code']; //
 * Set // in // to // session // Once // login
 *  // To get View Balance Detail while login var data = $.param({ "txtUserId" :
 * $sessionStorage.sesUserName, "txtPassword" : $sessionStorage.sesPasword,
 * "actionID" : "rwd/prg/login/viewbalance", "hpageId" : "UNIFORMS_LOGIN_PAGE",
 * "h_CustID" : "UNIFORMS_LOGIN_PAGE", "hScreenId" : "chooseprogram",
 * "programCode" : $sessionStorage.sesprgCode, "hAllot" : "0" });
 * 
 * var config = { headers : { 'Content-Type' :
 * 'application/x-www-form-urlencoded;charset=utf-8;' } };
 * 
 * $http .post( appURL+"/ViewBalance", data) .success( function(data, status,
 * headers, config) { $scope.PostDataResponse = data; $scope.Work =
 * $scope.PostDataResponse['work']; $scope.totalBasicBalance =
 * $scope.Work['view-balance'].allowance.original.total.value;
 * $sessionStorage.totalBasicBalance = $scope.totalBasicBalance;
 * $scope.totalBasicsbalance = $sessionStorage.totalBasicBalance;
 * 
 * }).error( function(data, status, header, config) { $scope.ResponseDetails =
 * "Data: " + data + "<hr />status: " + status + "<hr />headers: " + header + "<hr />config: " +
 * config; $log.log("post method is failed"); });
 * 
 * $scope.activeTab = 1; $scope.setActiveTab = function(tabToSet) {
 * $scope.activeTab = tabToSet; $sessionStorage.sesprgCode =
 * $scope.selected_programcode['program-code']; // Set // in // to // session //
 * if // make // chnage // in // radio // Button
 * 
 * 
 * var data = $.param({ "txtUserId" : $sessionStorage.sesUserName, "txtPassword" :
 * $sessionStorage.sesPasword, "actionID" : "rwd/prg/login/viewbalance",
 * "hpageId" : "UNIFORMS_LOGIN_PAGE", "h_CustID" : "UNIFORMS_LOGIN_PAGE",
 * "hScreenId" : "chooseprogram", "programCode" : $sessionStorage.sesprgCode, //
 * "NUSTAR", // //"BULWARK" "hAllot" : "0" });
 * 
 * var config = { headers : { 'Content-Type' :
 * 'application/x-www-form-urlencoded;charset=utf-8;' } };
 * 
 * $http .post( appURL+"/ViewBalance", data) .success( function(data, status,
 * headers, config) {
 * 
 * $scope.PostDataResponse = data; $log .log("post method is suViewBalanceccess
 * --" + $scope.PostDataResponse + '--' + status); $scope.Work =
 * $scope.PostDataResponse['work']; $scope.ViewBalance =
 * $scope.Work['view-balance'];
 * 
 * $scope.Allowance = $scope.ViewBalance['allowance']; $scope.Allotment =
 * $scope.ViewBalance['allotment'];
 * 
 * $sessionStorage.totalBasicBalance = $scope.Allowance.original.total.value;
 * 
 * $scope.fromDate = $scope.Allowance['from-date']; $scope.toDate =
 * $scope.Allowance['to-date']; $scope.returns =
 * $scope.Allowance.balance['cust-credit'];
 * 
 * if (JSON .stringify($scope.Allowance.balance['emp-credit']) == "" ||
 * $scope.Allowance.balance['emp-credit'] == "0") {
 * 
 * $scope.employeeOriginal = "0.00"; } else {
 * 
 * $scope.employeeOriginal = $scope.Allowance.balance['emp-credit']; }
 * 
 * $scope.employeeBalance = $scope.Allowance.balance['emp-credit'];
 * 
 * console .log("Allowance 1 " + JSON .stringify($scope.Allowance)); console
 * .log("-==============================================================-");
 * console .log(JSON .stringify($scope.fromDate) + "-----" + JSON
 * .stringify($scope.toDate));
 * 
 * }).error( function(data, status, header, config) { $scope.ResponseDetails =
 * "Data: " + data + "<hr />status: " + status + "<hr />headers: " + header + "<hr />config: " +
 * config; $log.log("post method is failed"); }); };
 * 
 * $scope.continuePrg = function() {
 * 
 * 
 * $sessionStorage.sesprgCode = $scope.selected_programcode['program-code']; var
 * data = $.param({ "txtUserId" : $sessionStorage.sesUserName, "txtPassword" :
 * $sessionStorage.sesPasword, "actionID" : "rwd/prg/login/catalog", "huserId" :
 * $sessionStorage.sesUserName, "optProgCode" : $sessionStorage.sesprgCode,
 * "prgCode" : $sessionStorage.sesprgCode, "hdnPrgCode" :
 * $sessionStorage.sesprgCode, "hideonweb" : "0", "txtStyleSheet" :
 * "vfstyle.css", "hpageId" : "UNIFORMS_LOGIN_PAGE", "h_CustID" :
 * "UNIFORMS_LOGIN_PAGE", "forceemppayment" : "0", "allowemp" : "0",
 * "hProgramCode" : "2", "employeePurchase" : "N", "eligibilityDate" :
 * "01/01/2017", "allot" : "0", "hScreenId" : "chooseprogram",
 * "fromRWDWebService" : "Y"
 * 
 * });
 * 
 * $http .post( appURL+"/landingPage", data) .success( function(data, status,
 * headers, config) { $scope.PostDataResponse = data; chooseProgramService
 * .setData($scope.PostDataResponse.work); +$log .log("post method is success
 * --" + $scope.PostDataResponse + '--' + status);
 * 
 * var url = "#uniforms"; $log.log(url); $window.location.href = url;
 * 
 * }).error( function(data, status, header, config) { $scope.ResponseDetails =
 * "Data: " + data + "<hr />status: " + status + "<hr />headers: " + header + "<hr />config: " +
 * config; $log.log("post method is failed"); });
 *  };
 * 
 * });
 */

app.controller("logOffController", function($scope, $http, $log, $window,
		MessageDisplayService, $sessionStorage) {

	var data = $.param({
		"txtUserId" : $sessionStorage.sesUserName,
		"txtPassword" : $sessionStorage.sesPasword,
		"actionID" : "rwd/prg/login/logoff",
		"h_CustID" : "UNIFORMS_LOGIN_PAGE",
		"hpageId" : "chooseprogram",
		"txtStyleSheet" : "vfstyle.css",
		"txtCartEmpty" : "Y",
		"hCommentCard" : "NULL",
		"hScreenId" : "PRG_Welcome"
	});
	//$http.post(appURL + "/LogOff", data)
	//Defect# 8068
	var serverUrl=document.URL;
     var res = serverUrl.split("/", 3);
     var serverName  = res[0]+"//"+res[2];                 
$http.post(serverName+appURL+"/LogOff",data)
//Defect# 8068

	.success(function(data, status, headers, config) {

		$scope.orderOffData = data;

		var dataval = JSON.stringify($scope.orderOffData);
		console.log("Data  in logoff page===>>>" + dataval);
		$sessionStorage.sesUserName = "";
		$sessionStorage.sesPasword = "";
		$sessionStorage.sesprgCode = "";
		$sessionStorage.totalBasicBalance = "";
		$sessionStorage.firstname = "";
		$sessionStorage.lastname = "";

		/*
		 * $scope.logOffMessage = "Thank you For Shopping with us";
		 * MessageDisplayService.setData($scope.logOffMessage);
		 */
		$scope.logOffMessage = "Thank you For Shopping with us";
		MessageDisplayService.setData("SUCCESS|" + $scope.logOffMessage);

		var url = "#login";
		$log.log(url);
		$window.location.href = url;
		$log.log("Logoff post method is success");

	}).error(
			function(data, status, header, config) {

				$scope.ResponseDetails = "Data: " + data + "<hr />status: "
						+ status + "<hr />headers: " + header
						+ "<hr />config: " + config;
				$log.log("post method is failed");
			});

});

app
		.controller(
				"changePasswordController",
				function($scope, $http, $log, $window, MessageDisplayService,
						$sessionStorage) {

					// $scope.changePasswordMsg =
					// MessageDisplayService.getData();

					$scope.validateChangePassword = function(user) {

						var npassword = document.passwordChangeForm.newpwd.value;
		var cpassword = document.passwordChangeForm.cnewpwd.value;
		var opassword = document.passwordChangeForm.oldpwd.value;
		var isError = false;
		/*if (opassword == "") {
			alert(message(1) + "Old Password.");
			document.passwordChangeForm.oldpwd.focus();
			return;
		} else if (npassword == "") {
			alert(message(1) + "New Password.");
			document.passwordChangeForm.newpwd.focus();
			return;
		} else if (opassword == npassword) {
			alert(message(15));
			document.passwordChangeForm.newpwd.value = "";
			document.passwordChangeForm.newpwd.focus();
			return;
		} else if (cpassword == "") {
			alert(message(1) + "Confirm Password.");
			document.passwordChangeForm.cnewpwd.focus();
			return;
		} else if (npassword != cpassword) {
			alert(message(18));
			document.passwordChangeForm.cnewpwd.value = "";
			document.passwordChangeForm.cnewpwd.focus();
			return;
		} else {
			$scope.sendChangepwdData(user);

		}*/
		
		// Added by Authis for Inline validation
		if (opassword == "") {			 
			$scope.oldpasswordError = message(1) + "Old Password.";		 
			isError = true;
		}else{
			$scope.oldpasswordError = "";
		}
		
		if (npassword == "") {			 
			$scope.newpasswordError = message(1) + "New Password.";			 
			isError = true;
		} else{
			$scope.newpasswordError = "";
		}
		if (cpassword == "") {			 
			$scope.confpasswordError = message(1) + "Confirm Password.";		 
			isError = true;
		} else{
			$scope.confpasswordError = "";
		}
		
		 if(opassword != "" && npassword!=""){
			 if (opassword == npassword) {			 
					$scope.newpasswordError = message(15);
					document.passwordChangeForm.newpwd.value = "";					 
					isError = true;
					 
					 
				} 
			 
		 }
		 
			
		 if(npassword != "" && cpassword!=""){
			 if (npassword != cpassword) {		
				 
				 $scope.confpasswordError = message(18);
					document.passwordChangeForm.cnewpwd.value = "";			
					isError = true;	
					 
			 }
			 
		 }
 
		
		if(!isError) {
			$scope.sendChangepwdData(user);

		}
		
		// Ended by Authis for Inline validation
		
		
	};

					$scope.sendChangepwdData = function(user) {

						$scope.userData = angular.copy(user);

						// alert($scope.actionId);
						var data = $
								.param({

									"hPageId" : "chooseprogram",
									"txtStyleSheet" : "vfstyle.css",
									"txtConfirmpassword" : $scope.userData.cNewPassword,
									"txtCartEmpty" : "Y",
									"txtOldPassword" : $scope.userData.oldPassword,
									"hCommentCard" : "NULL",
									"txtNewPassword" : $scope.userData.newPassword,
									"hScreenId" : "PRG_ChangePassword",
									"actionID" : "rwd/prg/login/changepassword",
									"txtUserId" : $sessionStorage.sesUserName,
									"txtPassword" : $sessionStorage.sesPasword

								});
						//$http.post(appURL + "/ChangePassword", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/ChangePassword",data)
			//Defect# 8068
								.success(
										function(data, status, headers, config) {

											$scope.changePasswordData = data;
											$scope.Work = $scope.changePasswordData['work'];

											var dataval = JSON
													.stringify($scope.changePasswordData);
											console
													.log("Data  in changepassword page===>>>"
															+ dataval);

											document.forms["passwordChangeForm"]
													.reset();

											// ChangePwdDataService.setData($scope.Work);
											
											
											
											//Added for defect #8076
											if ($scope.Work
													.hasOwnProperty('info-message')) {

												var message = data['work']['info-message']['message'];
												var message1="According to our records, you have entered an invalid password. Please try again.";
												if(message == message1 ){
													var Infomessage = angular
													.element(document
															.querySelector('#changepwd_succ_msg'));

													Infomessage
															.removeClass('loginBlk');
													Infomessage
															.addClass('hide1');
											
													var Errormessage = angular
															.element(document
																	.querySelector('#changepwd_err_msg'));

													Errormessage
															.removeClass('hide1');
													Errormessage
															.addClass('loginBlk');
													
													document
															.getElementById('passwordchg_msg_error').innerHTML = message;
												
													return;
													
												}else{
											
												$scope.Infomessage = $scope.Work['info-message'];
												var Errormessage = angular
												.element(document
														.querySelector('#changepwd_err_msg'));

												Errormessage
														.removeClass('loginBlk');
												Errormessage
														.addClass('hide1');
										
												var Infomessage = angular
														.element(document
																.querySelector('#changepwd_succ_msg'));

												Infomessage
														.removeClass('hide1');
												Infomessage
														.addClass('loginBlk');

												/*
												 * $sessionStorage.pwdMessage
												 * =$scope.Infomessage['message'];
												 * $scope.passwordMessage =
												 * $sessionStorage.pwdMessage;
												 */
												document
														.getElementById('passwordchg_msg_sucess').innerHTML = $scope.Infomessage['message'];

												var keyStr = "ABCDEFGHIJKLMNOP"
														+

														"QRSTUVWXYZabcdef"
														+ "ghijklmnopqrstuv"
														+ "wxyz0123456789+/"
														+ "=";
												var output = "";
												var chr1, chr2, chr3 = "";
												var enc1, enc2, enc3, enc4 = "";
												var i = 0;
												var input = $scope.userData.newPassword;
												// alert(input);

												do {
													chr1 = input
															.charCodeAt(i++);
													chr2 = input
															.charCodeAt(i++);
													chr3 = input
															.charCodeAt(i++);

													// PPMS_100 Starts

													if (isNaN(chr2))
														chr2 = 0;
													if (isNaN(chr3))
														chr3 = 0;
													// PPMS_100 Ends

													enc1 = chr1 >> 2;
													enc2 = ((chr1 & 3) << 4)
															| (chr2 >> 4);
													enc3 = ((chr2 & 15) << 2)
															| (chr3 >> 6);
													enc4 = chr3 & 63;

													if (isNaN(chr2)) {
														enc3 = enc4 = 64;
													} else if (isNaN(chr3)) {
														enc4 = 64;
													}

													output = output
															+ keyStr
																	.charAt(enc1)
															+ keyStr
																	.charAt(enc2)
															+ keyStr
																	.charAt(enc3)
															+ keyStr
																	.charAt(enc4);
													chr1 = chr2 = chr3 = "";
													enc1 = enc2 = enc3 = enc4 = "";
												} while (i < input.length);
												$sessionStorage.sesPasword = output;

												// alert($sessionStorage.sesPasword
												// +"--------->>>>>"+output);
												console.log("message"
														+ $scope.Message);
											}
												//End for defect #8076
									}

											else if ($scope.Work
													.hasOwnProperty('error-message')) {

												$scope.Errormessage = $scope.Work['error-message'];
												var Errormessage = angular
														.element(document
																.querySelector('#changepwd_err_msg'));

												Errormessage
														.removeClass('hide1');
												Errormessage
														.addClass('loginBlk');
												/*
												 * $sessionStorage.pwdError
												 * =$scope.Errormessage['error'];
												 * $scope.passwordError =
												 * $sessionStorage.pwdError;
												 */
												document
														.getElementById('passwordchg_msg_error').innerHTML = $scope.Errormessage['error'];
												console.log("Error"
														+ $scope.Error);
											}

											$log
													.log("change password post method is success --");
										})

								.error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});

					};

				});

app.controller('messagedisplayController', function($scope,
		MessageDisplayService) {

	$scope.changePasswordorEmailMsg = MessageDisplayService.getData();
});

app.controller("customerSupportController", function($scope, $http, $log,
		$window, $sessionStorage, $sce) {
	// alert("Support");
	var data = $.param({
		"txtUserId" : $sessionStorage.sesUserName,
		"txtPassword" : $sessionStorage.sesPasword,
		// "beforeLogin" : "Y",
		// "hPageId" : "chooseprogram",
		"txtStyleSheet" : "vfstyle.css",
		"actionID" : "rwd/prg/login/customersupport",
		"txtCartEmpty" : "Y",
		// "siteType" : "P",
		// "_siteID" : "204",
		"optProgCode" : $sessionStorage.sesprgCode,
		"prgCode" : $sessionStorage.sesprgCode,
		"hdnPrgCode" : $sessionStorage.sesprgCode,
		"hHomeFlag" : "1",
		// "hMarketId": "204",
		// "hScreenId" : "PRG_Welcome",
		// "site-id":"204",
		"hCommentCard" : "NULL",

		"hideonweb" : "0",
		"hpageId" : "chooseprogram",
		"h_CustID" : "UNIFORMS_LOGIN_PAGE",
		"forceemppayment" : "0",
		"allowemp" : "0",
		"hProgramCode" : "2",
		"employeePurchase" : "N",
		"eligibilityDate" : "01/01/2017",
		"allot" : "0",
		"hScreenId" : "chooseprogram",
		"fromRWDWebService" : "Y",
		"huserId" : $sessionStorage.sesUserName

	});
	//$http.post(appURL + "/CustomerSupport", data)
	//Defect# 8068
	var serverUrl=document.URL;
     var res = serverUrl.split("/", 3);
     var serverName  = res[0]+"//"+res[2];                 
	$http.post(serverName+appURL+"/CustomerSupport",data)
//Defect# 8068

	.success(function(data, status, headers, config) {
		$scope.customerSupportData = data;
		var dataval = JSON.stringify($scope.customerSupportData);

		console.log("Data  in customersupport page===>>>" + dataval);
		$scope.work = $scope.customerSupportData['work'];
		$scope.news = $scope.work['new'];
		$scope.contentDesc = $scope.news['content-desc'];
		$scope.bindContentDesc = $sce.trustAsHtml($scope.contentDesc);

		// console.log("Data in customersupport page===>>>"
		// +$scope.bindContentDesc);
		// alert(dataval);
		// changeEmailData.setData($scope.changeEmailData);
		// $scope.changeEmailData = changeEmailService.getData();
		$log.log("customer support post method is success --");
	}).error(
			function(data, status, header, config) {
				$scope.ResponseDetails = "Data: " + data + "<hr />status: "
						+ status + "<hr />headers: " + header
						+ "<hr />config: " + config;
				$log.log("post method is failed");
			});

});

app.controller("newsController", function($scope, $http, $log, $window, $sce,
		$sessionStorage) {

	// alert($scope.actionId);
	var data = $.param({

		"txtUserId" : $sessionStorage.sesUserName,
		"txtPassword" : $sessionStorage.sesPasword,
		"huserId" : $sessionStorage.sesUserName,
		"txtStyleSheet" : "vfstyle.css",
		"txtCartEmpty" : "Y",
		"hScreenId" : "PRG_Welcome",
		"optProgCode" : $sessionStorage.sesprgCode,
		"prgCode" : $sessionStorage.sesprgCode,
		"hdnPrgCode" : $sessionStorage.sesprgCode,
		"hpageId" : "chooseprogram",
		"actionID" : "rwd/prg/login/news",
		"hCommentCard" : "NULL",
		"hideonweb" : "0",
		"hpageId" : "UNIFORMS_LOGIN_PAGE",
		"h_CustID" : "UNIFORMS_LOGIN_PAGE",
		"forceemppayment" : "0",
		"allowemp" : "0",
		"hProgramCode" : "2",
		"employeePurchase" : "N",
		"eligibilityDate" : "01/01/2017",
		"allot" : "0",
		"hScreenId" : "chooseprogram",
		"fromRWDWebService" : "Y"

	});
	//$http.post(appURL + "/News", data)
		//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/News",data)
			//Defect# 8068

	.success(function(data, status, headers, config) {

		$scope.newsData = data;

		$scope.newsData = $scope.newsData.work['new'];
		$scope.newsContent = $scope.newsData['content-desc'];
		// Condition to display News content if news content is undefined
		if ($scope.newsContent !== undefined) {
			$scope.bindNewsContent = $sce.trustAsHtml($scope.newsContent);
		} else {
			$scope.emptyNews = "No News & Discounts Available"
			$scope.bindNewsContent = $sce.trustAsHtml($scope.emptyNews);
		}

		console.log("Data  in news page===>>>" + $scope.bindNewsContent);

	}).error(
			function(data, status, header, config) {

				$scope.ResponseDetails = "Data: " + data + "<hr />status: "
						+ status + "<hr />headers: " + header
						+ "<hr />config: " + config;
				$log.log("post method is failed");
			});

});

app
		.controller(
				"tabCtrl1",
				function($scope, $http, $log, $sessionStorage) {

					$scope.activeTab = 1;

					$scope.setActiveTab = function(tabToSet) {
						//alert(tabToSet);
						$scope.activeTab = tabToSet;

						var data = $.param({
							"hPageId" : "chooseprogram",
							"txtStyleSheet" : "vfstyle.css",
							"txtCartEmpty" : "Y",
							"hScreenId" : "PRG_MyAccount",
							"actionID" : "rwd/prg/login/email",
							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"optProgCode" : $sessionStorage.sesprgCode,
							"prgCode" : $sessionStorage.sesprgCode,
							"hdnPrgCode" : $sessionStorage.sesprgCode,
							"hCommentCard" : "NULL",
							"hPageId" : "UNIFORMS_LOGIN_PAGE",
							"h_CustID" : "UNIFORMS_LOGIN_PAGE",

						});

						//$http.post(appURL + "/PreChangeEmail", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/PreChangeEmail",data)
			//Defect# 8068
								.success(
										function(data, status, headers, config) {
											$scope.prechangeEmailData = data;

											$scope.Work = $scope.prechangeEmailData['work'];
											$scope.emailid = $scope.Work['emailID'];

											// Added for Change Email
											document
													.getElementById('changeemail_succ_msg').className = "hide1";
											document
													.getElementById('email_msg_sucess').innerHTML = "";
											// Change Email ended
											// Added for ChangePassword Success
											document
													.getElementById('changepwd_succ_msg').className = "hide1";
											document
													.getElementById('passwordchg_msg_sucess').innerHTML = "";
											// Added for ChangePassword Error
											document
													.getElementById('changepwd_err_msg').className = "hide1";
											document
													.getElementById('passwordchg_msg_error').innerHTML = "";

											// alert($sessionStorage.emailMsg);
											$log
													.log("pre change email post method is success --");
										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});
					};

					// Code added by Authis to fix bug #8083

					var tab = $sessionStorage.actTab;
					$scope.changePwdTab = function(val) {

						$scope.activeTab = val;
						$sessionStorage.actTab = 2;
					};

					if ($sessionStorage.actTab == 2) {
						$scope.activeTab = 2;
						$scope.setActiveTab(2);
						$sessionStorage.actTab = 1;
					} else {
						$scope.activeTab = 1;
					}

					// Code ended by Authis to fix bug #8083

				});

app
		.controller(
				"emailChangeCtrl",
				function($scope, $http, $log, $window, MessageDisplayService,
						$sessionStorage) {

					$scope.changeEmail = function() {
						
						// Added by Authis for the Defect #8173
						var Infomessage = angular
								.element(document
										.querySelector('#changeemail_succ_msg'));
						Infomessage
								.removeClass('loginBlk');
						Infomessage
								.addClass('hide1');
						// End by Authis for the Defect #8173

						var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

						var email = document.emailChangeForm.email.value;
						// validate the user typed in email is in correct format
						var isError = false;
			
			// Code added by Authis to fix bug  #8083
			/*var domVal = email.indexOf("@vfc.com");   
		 
			
			
			 if(domVal > 0){
			    var domDesc= email.split("@");
			    var domlen = domDesc[1].length;
					if(domlen > 7){
						 alert("email length:" +domlen);
						$scope.emailError = message(1)+"valid Email ID";
						isError = true;
					}
			 }else{				 
				 alert("email length:" +domlen);
				 $scope.emailError ="Please enter valid Domain Name";
					isError = true;
			 } */
				 
			  if(email == ""){				 
				 $scope.emailError =message(1)+"Email ID";
					isError = true;
			}else if (!re.test(email) ) {		
				$scope.emailError ="Please enter valid E-mail Name";
				isError = true;   
				  
			}
			
			if(!isError) {
				$scope.emailError = "";

							var data = $.param({
								"optProgCode" : $sessionStorage.sesprgCode,
								"prgCode" : $sessionStorage.sesprgCode,
								"hdnPrgCode" : $sessionStorage.sesprgCode,
								"txtEmail" : $scope.emailID,
								"hPageId" : "chooseprogram",
								"txtStyleSheet" : "vfstyle.css",
								"txtCartEmpty" : "Y",
								"hCommentCard" : "NULL",
								"hScreenId" : "PRG_EmailID",
								"actionID" : "rwd/prg/login/changeemail",
								"txtUserId" : $sessionStorage.sesUserName,
								"txtPassword" : $sessionStorage.sesPasword,
								"domain" : "vfc.com",
								"hCommentCard" : "NULL"
							});
							//$http.post(appURL + "/ChangeEmail", data)
							//Defect# 8068
							var serverUrl=document.URL;
				             var res = serverUrl.split("/", 3);
				             var serverName  = res[0]+"//"+res[2];                 
				        	$http.post(serverName+appURL+"/ChangeEmail",data)
				//Defect# 8068
									.success(
											function(data, status, headers,
													config) {
												$scope.changeEmailData = data;

												$scope.Work = $scope.changeEmailData['work'];

												var dataval = JSON
														.stringify($scope.changeEmailData);
												console
														.log("Data  in changeemail page===>>>"
																+ dataval);

												// ChangePwdDataService.setData($scope.Work);
												if ($scope.Work
														.hasOwnProperty('info-message')) {

													/*
													 * $scope.info_flag =
													 * "info_message";
													 * MessageDisplayService.setData($scope.info_flag);
													 */

													// $scope.work=ChangePwdDataService.getData();
													$scope.Infomessage = $scope.Work['info-message'];
													var Infomessage = angular
															.element(document
																	.querySelector('#changeemail_succ_msg'));

													Infomessage
															.removeClass('hide1');
													Infomessage
															.addClass('loginBlk');
													/*
													 * $sessionStorage.emailMsg
													 * =$scope.Infomessage['message'];
													 * $scope.emailMessage =
													 * $sessionStorage.emailMsg;
													 */
													document
															.getElementById('email_msg_sucess').innerHTML = $scope.Infomessage['message'];

												}

												$log
														.log("change email post method is success --");
											})
									.error(
											function(data, status, header,
													config) {
												$scope.ResponseDetails = "Data: "
														+ data
														+ "<hr />status: "
														+ status
														+ "<hr />headers: "
														+ header
														+ "<hr />config: "
														+ config;
												$log
														.log("post method is failed");
											});
						}
					};
				});

// se327908 for only numbers sev 3_9 starts
app.directive('numbersOnly', function() {
	return {
		require : 'ngModel',
		link : function(scope, element, attr, ngModelCtrl) {
			function fromUser(text) {
				if (text) {
					var transformedInput = text.replace(/[^0-9]/g, '');

					if (transformedInput !== text) {
						alert("Please enter valid no:");
						ngModelCtrl.$setViewValue(transformedInput);
						ngModelCtrl.$render();
					}
					return transformedInput;
				}
				return undefined;
			}
			ngModelCtrl.$parsers.push(fromUser);
		}
	};
});

app.directive('myMaxlength', function() {
	return {
		require : 'ngModel',
		link : function(scope, element, attrs, ngModelCtrl) {
			var maxlength = Number(attrs.myMaxlength);
			function fromUser(text) {
				if (text.length > maxlength) {
					var transformedInput = text.substring(0, maxlength);
					ngModelCtrl.$setViewValue(transformedInput);
					ngModelCtrl.$render();
					return transformedInput;
				}
				return text;
			}
			ngModelCtrl.$parsers.push(fromUser);
		}
	};
});
// sev 3_9 ends
// sev 3_9 strats
app
		.controller(
				'orderController',
				function($scope, $rootScope, $http, $log, $uibModal, $window,
						chooseProgramService, InvoiceOrderDisplayService,
						orderHistoryService, OrderDisplayService,
						$sessionStorage, $filter) {
					// $scope.format=$scope.fromod;
					/*
					 * $scope.dt=$scope.fromod; $scope.dt2=$scope.to
					 */
					$scope.Currentdate = new Date();

					// alert( $scope.Currentdate);
					$scope.title = "Order History";
					$scope.product = {

					};

					$scope.toggleActive = true;

					$scope.activateToggle = function() {
						$scope.toggleActive = !$scope.toggleActive;
					};

					$scope.search = function(params) {
						// Search Function
					};

					// Detail Function
					$scope.details = function(order1) {
						$log.log("order1" + JSON.stringify(order1));
						chooseProgramService.setData(order1);
						$scope.orderStatus = order1['order-status'];
						$log.log("$Scope.orderStatus" + $scope.orderStatus);
						$scope.OrderNo = order1['order-no'];
						$scope.OrderInv = order1['order-inv'];
						$scope.OrderDate = order1['order-date'];

						if ($scope.orderNumber == $scope.OrderNo) {
							$scope.hOrderSerch = 'Y';
						}
						// document.frmOrderHist.hNextPreviousFlag.value
						// =total1;

						if ($scope.orderStatus == 'Awaiting Approval'
								|| $scope.orderStatus == 'Rejected'
								|| $scope.orderStatus == 'Deleted'
								|| $scope.orderStatus == 'Approved') {
							$scope.actionId = "prg/ordertrack/awaitingApproval/modifyOrder";
						}
						// PPMS_1892:End

						if (($scope.OrderInv == '1')
								|| ($scope.OrderInv == '2')
								|| ($scope.OrderInv == '7'))// PPMS_2453 added
															// if
						{
							if ($scope.OrderInv == '2'
									|| ($scope.OrderInv == '7')) {

								$scope.InvoiceOrderDate = $scope.OrderDate;
								InvoiceOrderDisplayService
										.setData($scope.InvoiceOrderDate);
							} else {
								$scope.InvoiceOrderDate = "";
								InvoiceOrderDisplayService
										.setData($scope.InvoiceOrderDate);
							}
							// document.frmOrderHist.hLastOrderTS.value = res;
							var modalInstance = $uibModal.open({
								animation : true,
								backdrop : true,
								ariaLabelledBy : 'modal-title',
								ariaDescribedBy : 'modal-body',
								templateUrl : 'order_detail.html',
								controller : 'orderDetailCtrl',
								size : "size",
								resolve : {
									items : function() {
										return {};
									}
								}
							});

						}
						// PPMS_571:begin,PT_625:Added if Condition
						else if (($scope.OrderInv == '3')
								|| ($scope.OrderInv == '4')) {
							// PT_625:begin
							if ($scope.OrderInv == '4') {
								$scope.InvoiceOrderDate = $scope.OrderDate;
								InvoiceOrderDisplayService
										.setData($scope.InvoiceOrderDate);
							} else {
								$scope.InvoiceOrderDate = "";
								InvoiceOrderDisplayService
										.setData($scope.InvoiceOrderDate);
							}

							var modalInstance = $uibModal.open({
								animation : true,
								backdrop : true,
								ariaLabelledBy : 'modal-title',
								ariaDescribedBy : 'modal-body',
								templateUrl : 'return_detail.html',
								controller : 'returnDetailController',
								size : "size",
								resolve : {
									items : function() {
										return {};
									}
								}
							});
						}

						// alert("id"+JSON.stringify(order1));

						/*
						 * if($scope.orderStatus=="Return In
						 * Process"||$scope.orderStatus=="Return Complete") {
						 * var modalInstance = $uibModal.open({ animation :
						 * true, backdrop : true, ariaLabelledBy :
						 * 'modal-title', ariaDescribedBy : 'modal-body',
						 * templateUrl : 'return_detail.html', controller:
						 * 'returnDetailController', size : "size", resolve : {
						 * items : function() { return {}; } } }); } else { var
						 * modalInstance = $uibModal.open({ animation : true,
						 * backdrop : true, ariaLabelledBy : 'modal-title',
						 * ariaDescribedBy : 'modal-body', templateUrl :
						 * 'order_detail.html', controller: 'orderDetailCtrl',
						 * size : "size", resolve : { items : function() {
						 * return {}; } } }); }
						 */
						modalInstance.result.then(function(selectedItem) {
							$scope.selected = selectedItem;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					// This LIne For DatePicker

					$scope.today = function(dates) {
						alert("In Today " + dates);
						if (dates == 1) {
							$scope.idFromDate = new Date();
						} else {
							$scope.idToDate = new Date();
						}
						;
					};
					// $scope.today();

					$scope.clear = function(dates) {

						if (dates == 1) {
							$scope.idFromDate = null;

						} else {
							$scope.idToDate = null;

						}
						;

					};

					$scope.inlineOptions = {
						customClass : getDayClass,
						minDate : new Date(),
						showWeeks : true
					};

					$scope.dateOptions = {
						dateDisabled : disabled,
						formatYear : 'yy',
						maxDate : new Date(2020, 5, 22),
						minDate : new Date(),
						startingDay : 1
					};

					// Disable weekend selection
					function disabled(data) {
						var date = data.date, mode = data.mode;
						return mode === 'day'
								&& (date.getDay() === -1 || date.getDay() === 7);
					}

					$scope.toggleMin = function() {
						$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null
								: new Date();
						$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
					};

					$scope.toggleMin();

					$scope.open1 = function() {
						// alert("hih");
						$scope.popup1.opened = true;
					};

					$scope.open2 = function() {
						$scope.popup2.opened = true;
					};

					$scope.setDate = function(year, month, day) {
						$scope.idFromDate = new Date(year, month, day);
						$scope.idToDate = new Date(year, month, day);

					};

					// $scope.altInputFormats = ['M!/d!/yyyy'];
					// $scope.formats = ['MM/dd/yyyy', 'dd-MMMM-yyyy',
					// 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
					$scope.format = "MM/dd/yyyy";
					// $scope.format = $scope.formats[0];

					$scope.popup1 = {
						opened : false
					};

					$scope.popup2 = {
						opened : false
					};

					var tomorrow = new Date();
					tomorrow.setDate(tomorrow.getDate() + 1);
					var afterTomorrow = new Date();
					afterTomorrow.setDate(tomorrow.getDate() + 1);
					$scope.events = [ {
						date : tomorrow,
						status : 'full'
					}, {
						date : afterTomorrow,
						status : 'partially'
					} ];

					function getDayClass(data) {
						var date = data.date, mode = data.mode;
						if (mode === 'day') {
							var dayToCheck = new Date(date)
									.setHours(0, 0, 0, 0);

							for (var i = 0; i < $scope.events.length; i++) {
								var currentDay = new Date($scope.events[i].date)
										.setHours(0, 0, 0, 0);

								if (dayToCheck === currentDay) {
									return $scope.events[i].status;
								}
							}
						}

						return '';
					}

					// alert($scope.actionId);

					var data = $.param({

						/*
						 * "hSelectedSeqNo": $scope.loginUserID, "hNewOrder":
						 * $scope.formData.password,
						 */
						"txtUserId" : $sessionStorage.sesUserName,
						"txtPassword" : $sessionStorage.sesPasword,
						// "site-id":"204",
						// "hMarketId": "204",
						// "_siteID":"204",
						"actionID" : "rwd/prg/login/ordertrack/orderhistory",
						// //"siteType":"P",
						// "beforeLogin": "Y",
						// "hHomeFlag" : "1",
						"hpageId" : "chooseprogram",
						"h_CustID" : "UNIFORMS_LOGIN_PAGE",
						"optProgCode" : $sessionStorage.sesprgCode,
						"prgCode" : $sessionStorage.sesprgCode,
						"hdnPrgCode" : $sessionStorage.sesprgCode,
						// "hNewOrder":"Y",
						"txtStyleSheet" : "vfstyle.css",
						"hScreenId" : "PRG_Welcome",
						"hHomeFlag" : "1",
						"txtCartEmpty" : "Y",

					});

					//$http.post(appURL + "/OrderHistory", data)
					//Defect# 8068
					var serverUrl=document.URL;
		            var res = serverUrl.split("/", 3);
		             var serverName  = res[0]+"//"+res[2];                 
		        	$http.post(serverName+appURL+"/OrderHistory",data)
		//Defect# 8068
							// se327908
							.success(
									function(data, status, headers, config) {
										$scope.resultDisplay = false;
										$scope.PostDataResponse = data;
										$scope.Work = $scope.PostDataResponse.work;
										$log.log("data-orderHistory123::"
												+ JSON.stringify($scope.Work));
										$scope.orderHistory = $scope.Work['order-history'];
										$scope.searchorder = $scope.orderHistory['search-order'];
										$scope.searchresult = $scope.orderHistory['search-result'];
										/*
										 * $scope.idFromDate=$scope.searchorder['from-od'] ;
										 * $scope.idToDate=$scope.searchorder['to-od'];
										 */$scope.idToDate = new Date(
												$scope.searchorder['to-od']);
										$scope.idFromDate = new Date(
												$scope.searchorder['from-od']);

										// alert("FromDate:" +
										// $scope.idFromDate+ " tOdate:" +
										// $scope.idToDate);
										if ($scope.orderHistory
												.hasOwnProperty('return-message')) {
											$scope.data = "No Records Found";
											$scope.resultDisplay = true;
										} else {
											$scope.resultDisplay = false;
											OrderDisplayService
													.setData($scope.orderHistory);
											/*
											 * $log .log("data-orderHistory::" +
											 * JSON
											 * .stringify($scope.orderHistory));
											 */
											// for(var i in
											// $scope.orderHistory){
											var serachResultLength = $scope.orderHistory['search-result'].length;

											if (serachResultLength > 0) {
												if ($scope.orderHistory['search-result'][serachResultLength - 1] != undefined
														&& $scope.orderHistory['search-result'][serachResultLength - 1]['order1'] != undefined
														&& $scope.orderHistory['search-result'][serachResultLength - 1]['order1'].length > 0) {
													var order1Length1 = $scope.orderHistory['search-result'][serachResultLength - 1]['order1'].length;

													$scope.lastOrderdetail = $scope.orderHistory['search-result'][serachResultLength - 1]['order1'][order1Length1 - 1];
													orderHistoryService
															.setData($scope.lastOrderdetail);

													/*
													 * $scope.nextOrderNo=$scope.order1Length['order-no'];
													 * $scope.nextOrderTs=$scope.order1Length['order-ts'];
													 */
												}
											}
											// };

											// To display list of order
											$scope.data1 = [];
											angular
													.forEach(
															$scope.searchresult,
															function(
																	searchresult,
																	index) {
																angular
																		.forEach(
																				searchresult.order1,
																				function(
																						order,
																						index) {

																					$scope.data1
																							.push(order);

																				});
															});

											$log
													.log("data-order::"
															+ JSON
																	.stringify($scope.data1));

											$log
													.log("data-orderHistory::"
															+ JSON
																	.stringify($scope.orderHistory));
										}

									}).error(
									function(data, status, header, config) {

										$scope.ResponseDetails = "Data: "
												+ data + "<hr />status: "
												+ status + "<hr />headers: "
												+ header + "<hr />config: "
												+ config;
										$log.log("post method is failed");
									});

					// To display search data

					// se327908
					$scope.searchData = function() {

						var strFromDt = $scope.idFromDate; /* dt; */
						var strToDt = $scope.idToDate; /* dt2; */
						var strON = $scope.orderNumber;

						// Modified by Authis for Inline validation 
	 
		var isError = false;
		if (strFromDt == null || strFromDt == undefined ) {
			//alert("hiiii");
			//$scope.fromError  = "From Date cannot be empty";
			//alert("From Date cannot be empty");
			//return;
			document.getElementById('error_message_from').innerHTML = "From Date cannot be empty"; // Modifed for #8167
			isError = true;
		} else{
			//$scope.fromError == "";
			document.getElementById('error_message_from').innerHTML = ""; // Modifed for #8167
		}
		if (strToDt == null || strToDt == undefined) {
			//$scope.toError = "To Date cannot be empty";
			document.getElementById('error_message_to').innerHTML = "To Date cannot be empty"; // Modifed for #8167
		//alert("To Date cannot be empty");
			//return;
			isError = true;
		} else{
			//$scope.toError = "";
			document.getElementById('error_message_to').innerHTML = ""; // Modifed for #8167
		}
		if (strFromDt > strToDt) {
			$scope.fromError = "From date" + message(53) + "To Date";
			//alert("From date" + message(53) + "To Date");
			//return;
			isError = true;
		} else{
			$scope.fromError = "";
		}
		if (strFromDt > $scope.Currentdate) {
			$scope.fromError = "From date" + message(53) + "Current Date";
			//alert("From date" + message(53) + "Current Date");
			//return;
			isError = true;

		} else{
			$scope.fromError = "";
		} 
		if (strToDt > $scope.Currentdate) {
			$scope.toError = "To date" + message(53) + "Current Date";
			//alert("To date" + message(53) + "Current Date");
			//return;
			isError = true;
		}else{
			$scope.toError = "";
		}
			/*
			 * }else if(strON==valid){ alert("Order No should be
			 * 8 character."); $scope.setFocus = function() {
			 * var
			 * element=$window.document.getElementById("idOrderNumber");
			 * element.focus(); };
			 */
		 /*else if (strON && strON != "" && strON.length < 8) {
			alert("Order No" + message(9) + "8" + message(10));
			document.orderhistory.ordernumber.focus();
			document.orderhistory.ordernumber.select();
			return;
		}*/ 
		
		if(!isError){
		if (strON != null) {

			if ((strON.length >= 1) && (strON.length <= 7)) {
				//alert("Order No" + message(9) + "8" + message(10));
				document.orderhistory.ordernumber.focus();
				document.orderhistory.ordernumber.select();
				return;
			} 
		 
			
								var data = $
										.param({

											"hNextPreviousFlag" : "",
											"txtUserId" : $sessionStorage.sesUserName,
											"txtPassword" : $sessionStorage.sesPasword,

											"actionID" : "rwd/prg/login/ordertrack/orderhistory",

											"optProgCode" : $sessionStorage.sesprgCode,
											"prgCode" : $sessionStorage.sesprgCode,
											"hdnPrgCode" : $sessionStorage.sesprgCode,
											// "hNewOrder":"Y",
											"txtStyleSheet" : "vfstyle.css",
											"hScreenId" : "PRG_OrderHistory",

											"hPageNoOrderDetail" : "1",
											"hDontShowPO" : "0",
											"txtCartEmpty" : "Y",
											"hCboSelect" : "DT",
											"hCommentCard" : "NULL",
											"txtOrderNumber" : $scope.orderNumber,
											"txtToDate" : $filter('date')(
													$scope.idToDate,
													'MM/dd/yyyy')/* $scope.idToDate */,
											"txtFromDate" : $filter('date')(
													$scope.idFromDate,
													'MM/dd/yyyy')/* $scope.idFromDate */,
											"cboOrderBy" : $scope.chooseBy

										});
								//$http.post(appURL + "/OrderHistory", data)
								//Defect# 8068
								var serverUrl=document.URL;
					             var res = serverUrl.split("/", 3);
					             var serverName  = res[0]+"//"+res[2];                 
					        	$http.post(serverName+appURL+"/OrderHistory",data)
					//Defect# 8068
										// se327908
										.success(
												function(data, status, headers,
														config) {

													// alert("order His");
													$scope.PostDataResponse = data;
													$scope.Work = $scope.PostDataResponse.work;
													$scope.orderHistory = $scope.Work['order-history'];
													$log
															.log("data-orderHistory::"
																	+ JSON
																			.stringify($scope.orderHistory));
													$scope.searchorder = $scope.orderHistory['search-order'];
													$scope.searchresult = $scope.orderHistory['search-result'];
													$scope.returncode = $scope.orderHistory['return-code'];
													/*
													 * $scope.dt=$scope.searchorder['from-od'];
													 * $scope.dt2=$scope.searchorder['to-od'];
													 */
													// se327908 6_9
													if ($scope.returncode == 1) {
														// Akshaya added for
														// defect #8073
														var Infomessage = angular
																.element(document
																		.querySelector('#order_succ_msg'));

														Infomessage
																.removeClass('hide1');
														Infomessage
																.addClass('loginBlk');
														/*
														 * $sessionStorage.emailMsg
														 * =$scope.Infomessage['message'];
														 * $scope.emailMessage =
														 * $sessionStorage.emailMsg;
														 */
														document
																.getElementById('norecord_msg_sucess').innerHTML = "No orders found for the search criteria you entered";
														// Akshaya ended for
														// defect #8073
													} else {
														// To display list of
														// order
														// Akshaya added for
														// defect #8073
														var Infomessage = angular
																.element(document
																		.querySelector('#order_succ_msg'));
														Infomessage
																.removeClass('loginBlk');
														Infomessage
																.addClass('hide1');
														// document.getElementById('changeemail_succ_msg').className
														// ="hide1";
														document
																.getElementById('norecord_msg_sucess').innerHTML = "";
														// Akshaya ended for
														// defect #8073
														$scope.data1 = [];
														angular
																.forEach(
																		$scope.searchresult,
																		function(
																				searchresult,
																				index) {
																			angular
																					.forEach(
																							searchresult.order1,
																							function(
																									order,
																									index) {
																								$scope.data1
																										.push(order);

																							});
																		});
													}
													$log
															.log("returnmessager::"
																	+ $scope.returncode);
													$log
															.log("data-order::"
																	+ JSON
																			.stringify($scope.data1));

												})
										.error(
												function(data, status, header,
														config) {

													$scope.ResponseDetails = "Data: "
															+ data
															+ "<hr />status: "
															+ status
															+ "<hr />headers: "
															+ header
															+ "<hr />config: "
															+ config;
													$log
															.log("post method is failed");
												});

							}
						 else {
							var data = $
									.param({

										"hNextPreviousFlag" : "",
										"txtUserId" : $sessionStorage.sesUserName,
										"txtPassword" : $sessionStorage.sesPasword,

										"actionID" : "rwd/prg/login/ordertrack/orderhistory",

										"hpageId" : "chooseprogram",
										"h_CustID" : "UNIFORMS_LOGIN_PAGE",
										"optProgCode" : $sessionStorage.sesprgCode,
										"prgCode" : $sessionStorage.sesprgCode,
										"hdnPrgCode" : $sessionStorage.sesprgCode,

										"txtStyleSheet" : "vfstyle.css",
										"hScreenId" : "PRG_OrderHistory",

										"hPageNoOrderDetail" : "1",
										"hDontShowPO" : "0",
										"txtCartEmpty" : "Y",
										"hCboSelect" : "DT",
										"hCommentCard" : "NULL",
										"txtOrderNumber" : "",
										"txtToDate" : $filter('date')(
												$scope.idToDate, 'MM/dd/yyyy'),
										"txtFromDate" : $filter('date')
												($scope.idFromDate,
														'MM/dd/yyyy'),

										"cboOrderBy" : $scope.chooseBy

									});
							//$http.post(appURL + "/OrderHistory", data)
							//Defect# 8068
							var serverUrl=document.URL;
				             var res = serverUrl.split("/", 3);
				             var serverName  = res[0]+"//"+res[2];                 
				        	$http.post(serverName+appURL+"/OrderHistory",data)
				//Defect# 8068
									// se327908
									.success(
											function(data, status, headers,
													config) {

												$scope.PostDataResponse = data;
												$scope.Work = $scope.PostDataResponse.work;
												$scope.orderHistory = $scope.Work['order-history'];
												$log
														.log("data-orderHistory::"
																+ JSON
																		.stringify($scope.orderHistory));
												$scope.searchorder = $scope.orderHistory['search-order'];
												$scope.searchresult = $scope.orderHistory['search-result'];

												/*
												 * $scope.dt=$scope.searchorder['from-od'];
												 * $scope.dt2=$scope.searchorder['to-od'];
												 */

												// To display list of order
												$scope.data1 = [];
												angular
														.forEach(
																$scope.searchresult,
																function(
																		searchresult,
																		index) {
																	angular
																			.forEach(
																					searchresult.order1,
																					function(
																							order,
																							index) {
																						$scope.data1
																								.push(order);

																					});
																});

												$log
														.log("data-order::"
																+ JSON
																		.stringify($scope.data1));

											})
									.error(
											function(data, status, header,
													config) {

												$scope.ResponseDetails = "Data: "
														+ data
														+ "<hr />status: "
														+ status
														+ "<hr />headers: "
														+ header
														+ "<hr />config: "
														+ config;
												$log
														.log("post method is failed");
											});

						}
		}
					};

				});
app
		.controller(
				"orderDetailCtrl",
				function($scope, $rootScope, $location, $http, $log, $window,
						chooseProgramService, returnItemService,
						OrderDisplayService, orderHistoryService,
						InvoiceOrderDisplayService, ViewCustService,
						$sessionStorage, $uibModalInstance) {
					// alert("orderdetail :::::::");
					$scope.copyOrder1 = false;
					// $scope.printInfo=false;
					$scope.modifyOrder1 = false;
					$scope.cancelOrder = false;
					$scope.returnOrder = false;

					$scope.ok = function() {

						$uibModalInstance.close($scope.selected.item);
					};

					$scope.goToDetail = function(id) {

					};

					$scope.cancel = function() {
						// alert("hi");
						$uibModalInstance.dismiss('cancel');// madhu
					};
//Added by Akshaya for Cancel Order
					$scope.cancelOrder1 = function() {

						var isCancel = confirm("Are you sure to Cancel the order?");
						if (isCancel == true) {
						
						alert("cancelorder");
						
						$scope.cancelOrderData = returnItemService.getData();
						$scope.cancelwork = $scope.cancelOrderData['work'];

						$scope.orderDetail = $scope.cancelwork['order-detail'];
						//$scope.InvoiceOrderDate = $scope.orderDetail['InvoiceOrderDate'];
						$scope.searchOrder = $scope.orderDetail['search-order'];
						$scope.toOd = $scope.searchOrder['to-od'];
						$scope.fromOd = $scope.searchOrder['from-od'];
						$scope.orderBy = $scope.cancelwork['order-by'];
						$scope.mainHeader = $scope.orderDetail['main-header'];
						$scope.orderstatus = $scope.mainHeader['order-status'];
						$scope.invoiceNo = $scope.mainHeader['invoice-no'];
						$scope.orderNo = $scope.mainHeader['order-no'];
						/*$scope.searchOrder = $scope.orderDetail['search-order'];
						$scope.search_OrderNo = $scope.searchOrder['order-no'];
						$scope.purchaseOrderNo = $scope.searchOrder['purchase-order-no'];*/
						$scope.orderNoSearch = $scope.cancelwork['order-no-serch'];
						
						$scope.detail = $scope.orderDetail['detail'];
						$scope.lineData = $scope.detail['line-data'];
						$log.log("lineData" + JSON.stringify($scope.lineData));
						//$scope.orderstatus1 = $scope.orderDetail['order-status-short-value'];
						
						
						if ($scope.lineData[0].hasOwnProperty('lot-id')) {
						$scope.lotId=$scope.lineData[0]['lot-id'];
						}
						else
						    $scope.lotId="";
						$scope.dim1=$scope.lineData[0]['dim1'];
						$log.log("dim1"+JSON.stringify($scope.dim1));
						$scope.dim2=$scope.lineData[0]['dim2'];
						$scope.orderQuantity=$scope.lineData[0]['order-quantity'];
						if ($scope.lineData[0].hasOwnProperty('line-seq-no')) {
						    $scope.lineSeqNo=$scope.lineData[0]['line-seq-no'];
						}
						    else
						        $scope.lineSeqNo="";
						$scope.orderInv=$scope.orderDetail['order-inv'];
						$scope.hOrderDetailData1=$scope.lotId+"*"+$scope.dim1+"*"+$scope.dim2+"*"+$scope.orderQuantity+"*"+$scope.lineSeqNo;
						$log.log("append"+$scope.hOrderDetailData1);

						
					//alert($scope.actionId);
					   var data=$.param({
							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"optProgCode" : $sessionStorage.sesprgCode,
							"prgCode" : $sessionStorage.sesprgCode,
							"hdnPrgCode" : $sessionStorage.sesprgCode,
							"hMojoID" : $sessionStorage.sesUserName,
						   "h_CustID" : "UNIFORMS_LOGIN_PAGE",
						   "cboOrderBy":$scope.orderBy,
						   "txtCartEmpty":"Y",
//						   	   Hidden
						   "txtOrderInv":$scope.orderInv,
						   "hDontShowPO":"1",
						   "hPageNoOrderDetail":"1",
						   "actionID": "rwd/prg/orderhistory/orderdetail/cancelorder",
						   "txtStyleSheet":"vfstyle.css",
						   "hpageId" :"chooseprogram",
						   "txtOrderStatus":$scope.orderstatus,
						   "customer-type":"Programmed",
							"hScreenId":"PRG_OrderDetail",
							"stage":"Authorized To Return",
							"hCommentCard":"NULL",
							"hOrderSeqNo":$scope.orderNo,
							"hOrderNo":$scope.orderNo,
							"hNextPreviousFlag":"next",
							"txtOrderNo":$scope.orderNo,
							"hOrderNoSerch":$scope.orderNoSearch,
							"hOrderDetailData":$scope.hOrderDetailData1,
							"txtOrderNumber":$scope.orderNo,
							"txtToDate":$scope.toOd,
							"txtFromDate":$scope.fromOd,
							"hideonweb" : "0",
							"forceemppayment" : "0",
							"allowemp" : "0",
							"hProgramCode" : "2",
							"employeePurchase" : "N",
							"eligibilityDate" : "01/01/2017",
							"allot" : "0",
							"fromRWDWebService" : "Y"
								
							
					    
					   });
					   var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/CancelOrder",data)
					   
					    .success(function (data, status, headers, config) {    
					    	$scope.CancelOrderData=data;
					    	
					    	$scope.successWork = $scope.CancelOrderData['work'];
					    	$scope.cancelInfoMessage = $scope.successWork['info-message'];
					    	$scope.cancelMessage = $scope.cancelInfoMessage['message'];
					    	alert($scope.cancelMessage);
					    	if($scope.cancelMessage!=null){
					    	
					    	var Infomessage = angular.element(document.querySelector('#order_succ_msg'));
					    	Infomessage.removeClass('hide1');
					    	Infomessage.addClass('loginBlk');
					    	document.getElementById('norecord_msg_sucess').innerHTML = $scope.cancelMessage;
					    	
					    	}else
					    		
					    	{
					    		var Infomessage = angular.element(document.querySelector('#order_succ_msg'));
					    		Infomessage.removeClass('loginBlk');
					    		Infomessage.addClass('hide1');
					    		document.getElementById('norecord_msg_sucess').innerHTML = "";
					    	}
					    	var dataval =JSON.stringify($scope.CancelOrderData);
					    	console.log("Data  in CancelOrder page===>>>" +dataval);
					    	alert(dataval);
					    	
					    })
					    .error(function (data, status, header, config) {
					    	
					        $scope.ResponseDetails = "Data: " + data +
					            "<hr />status: " + status +
					            "<hr />headers: " + header +
					            "<hr />config: " + config;
					      $log.log("post method is failed");
					    });
					  
						}else{
							alert("Inside Else part");
						}

					};
					//Ended by Akshaya for Cancel Order

					$scope.goToReturnItems = function() {
						$log.log("custRetPolicyOUTSIDE"
								+ $scope.custRetPolicy
								+ "stdRetPolicyOUTSIDE"
								+ $scope.stdRetPolicy+"ContactNo::"+$scope.contactNo);
					
						if($scope.allwRet != '' && $scope.allwRet == 'N' && $scope.stdRetPolicy!='' && $scope.stdRetPolicy=='1')
						{
							if(($scope.contactNo !=''||$scope.contactNo !=undefined) && $scope.contactNo!=null)
							{
							  alert("Order does not meet the online returns policy. Please contact customer service at "+$scope.contactNo+".");						
							}
							else{
								alert("Order does not meet the online returns policy. Please contact customer service at 1-888-372-4653.");						
							}
						}

						else if($scope.custRetPolicy!='' && $scope.custRetPolicy=='1' && $scope.allwRet != '' && $scope.allwRet == 'N'){
						
						if(($scope.contactNo !=''||$scope.contactNo !=undefined )&& $scope.contactNo!=null)
							{
							  alert("Order does not meet the online returns policy. Please contact customer service at "+$scope.contactNo+".");						
							}
						else{
							alert("Order does not meet the online returns policy. Please contact customer service at 1-888-372-4653.");						
							}
						}

						else if($scope.custRetPolicy!='' && $scope.custRetPolicy=='1' && $scope.lineAllwRet != '' && $scope.lineAllwRet == 'N'){
						if(($scope.contactNo !=''||$scope.contactNo !=undefined) && $scope.contactNo!=null)
							{
							alert("None of the line items meet the online returns policy. Please contact customer service at "+$scope.contactNo+".");						
						}
						else{
							alert("None of the line items meet the online returns policy. Please contact customer service at 1-888-372-4653.");						
							}
						}
						
						else if($scope.stdRetPolicy!='' && $scope.stdRetPolicy=='1' && $scope.lineAllwRet != '' && $scope.lineAllwRet == 'N'){
						if(($scope.contactNo !=''||$scope.contactNo !=undefined) && $scope.contactNo!=null)
							{
							alert("None of the line items meet the online returns policy. Please contact customer service at "+$scope.contactNo+".");						
						}
						else{
							alert("None of the line items meet the online returns policy. Please contact customer service at 1-888-372-4653.");						
							}
						}
						
						else{
								if($scope.custRetPolicy!='' && $scope.custRetPolicy=='1' && $scope.allwFewItem != '' && $scope.allwFewItem == 'N')
								{
								if(($scope.contactNo !='' ||$scope.contactNo !=undefined)&& $scope.contactNo!=null)
								{
									if ($window.confirm("All items do not meet the online returns policy. You may contact customer service at "+$scope.contactNo+" or proceed with returns for those items which meet the online returns policy. Do you want to proceed?"))
									{
										$uibModalInstance.dismiss('cancel');
										$location.path("/return_items");
									}
									else
										{}
									
								//	alert("All items do not meet the online returns policy. You may contact customer service at "+$scope.contactNo+" or proceed with returns for those items which meet the online returns policy. Do you want to proceed?","RetItems","Yes", "No");
								}
							else{
								
								
								
								if ($window.confirm("All items do not meet the online returns policy. You may contact customer service at 1-888-372-4653 or proceed with returns for those items which meet the online returns policy. Do you want to proceed?"))
								{
									$uibModalInstance.dismiss('cancel');
									$location.path("/return_items");
								}		
								else
								{}
								//alert("All items do not meet the online returns policy. You may contact customer service at 1-888-372-4653 or proceed with returns for those items which meet the online returns policy. Do you want to proceed?","RetItems","Yes", "No");
									}
								}
								else if($scope.stdRetPolicy!='' && $scope.stdRetPolicy=='1' && $scope.allwFewItem != '' && $scope.allwFewItem == 'N')
								{
									if(($scope.contactNo !=''||$scope.contactNo !=undefined) && $scope.contactNo!=null)
									{
										
										
										if ($window.confirm("All items do not meet the online returns policy. You may contact customer service at "+$scope.contactNo+" or proceed with returns for those items which meet the online returns policy. Do you want to proceed?"))
										{
											$uibModalInstance.dismiss('cancel');
											$location.path("/return_items");
										}
										else
										{}
										//alert("All items do not meet the online returns policy. You may contact customer service at "+$scope.contactNo+" or proceed with returns for those items which meet the online returns policy. Do you want to proceed?","RetItems","Yes", "No");
									}
									else{
										
										
										if ($window.confirm("All items do not meet the online returns policy. You may contact customer service at 1-888-372-4653 or proceed with returns for those items which meet the online returns policy. Do you want to proceed?"))
										{
											$uibModalInstance.dismiss('cancel');
										    $location.path("/return_items");
										}
										else
										{}
										//alert("All items do not meet the online returns policy. You may contact customer service at 1-888-372-4653 or proceed with returns for those items which meet the online returns policy. Do you want to proceed?","RetItems","Yes", "No");
									}
								}
								
								else{
									$uibModalInstance.dismiss('cancel');
									$location.path("/return_items");
								}		
							}
						
						
						
					};

					$scope.copyOrder = function() {
						// var item = $scope.selectedData;
						// $location.path("/return_items/"+item.id);
						$uibModalInstance.dismiss('cancel');
						$location.path("/shopping_cart_emp");
					};

					$scope.modifyOrder = function() {
						// var item = $scope.selectedData;
						// $location.path("/return_items/"+item.id);
						$uibModalInstance.dismiss('cancel');
						$location.path("/shopping_cart_emp");
					};

					$scope.viewCustomization = function(activityData) {
						$log
								.log("activity-info"
										+ JSON.stringify(activityData));
						ViewCustService.setData(activityData);
						// var item = $scope.selectedData;
						// $location.path("/return_items/"+item.id);
						$uibModalInstance.dismiss('cancel');
						$location.path("/order_customization");
					};

					$scope.print_order = function(printSectionId) {

						var viewBtn = angular.element(document.getElementsByClassName('viewbtn'));
						viewBtn.addClass('hide');

						var innerContents = document
								.getElementById(printSectionId).innerHTML;
						viewBtn.removeClass('hide');
						var popupWinindow = window
								.open(
										'',
										'_blank',
										'width=600,height=700,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
						popupWinindow.document.open();
						popupWinindow.document
								.write('<html><head><link rel="stylesheet" type="text/css" href="css/vfistyle.css" /><link rel="stylesheet" type="text/css" href="css/angular-responsive-tables.css" /><link rel="stylesheet" type="text/css" href="css/table.css" /><link rel="stylesheet" type="text/css" href="css/vfi-mediaqueries.css" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></head><body onload="window.print()">'
										+ innerContents +'<div class="row"><div class=" padd20Top padd20Bottom"><div class="col col-xs-12 col-sm-5 col-md-3 col-lg-2" style="padding:0px 0px 0px 15px;padding-top:10px;" onclick="window.close();"><input class="btn btn-default cancel-btn btn-block" type="button"  value="Close"></div> </div>	</div>' + '</html>');
						popupWinindow.document.close();
					};

					$scope.lastOrderdetail = orderHistoryService.getData();
					$scope.InvoiceOrderDate = InvoiceOrderDisplayService
							.getData();
					$log.log("InvoiceOrderDate" + $scope.InvoiceOrderDate);

					$scope.nextOrderNo = $scope.lastOrderdetail['order-no'];
					$scope.nextOrderTs = $scope.lastOrderdetail['order-ts'];

					$scope.orderDisplay = OrderDisplayService.getData();
					$log.log("orderDisplay::"
							+ JSON.stringify($scope.orderDisplay));
					$scope.orderDetail = chooseProgramService.getData();
					$log.log("orderDetail12345"
							+ JSON.stringify($scope.orderDetail));
					$scope.searchorder = $scope.orderDisplay['search-order'];
					$log
							.log("searchorder"
									+ JSON.stringify($scope.searchorder));
					$scope.fromod = $scope.searchorder['from-od'];
					$log.log("fromod" + $scope.fromod);
					$scope.tood = $scope.searchorder['to-od'];
					$scope.orderno = $scope.orderDetail['order-no'];
					$scope.cboselect = $scope.orderDisplay['cbo-select'];
					$scope.orderstatus = $scope.orderDetail['order-status-short-value'];
					// defect #8080 starts
					$scope.orderstatusfull = $scope.orderDetail['order-status'];
					// defect #8080 ended
					$scope.orderDate = $scope.orderDetail['order-date'];
					$scope.orderInv = $scope.orderDetail['order-inv'];
					// alert("orderno::"+$scope.orderno);
					// alert($scope.actionId);
					var data = $
							.param({
								"txtOrderInv" : $scope.orderInv,
								"txtToDate" : $scope.tood,
								"hDontShowPO" : "1",
								"txtFromDate" : $scope.fromod,
								"hCboSelect" : $scope.cboselect,
								"hPageNoOrderDetail" : "1",
								"txtOrderStatus" : $scope.orderstatus,
								"hOrderNo" : $scope.orderno,
								"txtOrderNo" : $scope.orderno,
								"txtUserId" : $sessionStorage.sesUserName,
								"InvoiceOrderDate" : $scope.InvoiceOrderDate,
								"txtPassword" : $sessionStorage.sesPasword,
								"actionID" : "rwd/prg/login/ordertrack/orderhistory/orderdetail",
								"optProgCode" : $sessionStorage.sesprgCode,
								"prgCode" : $sessionStorage.sesprgCode,
								"hdnPrgCode" : $sessionStorage.sesprgCode,
								"hpageId" : "chooseprogram",
								"txtStyleSheet" : "vfstyle.css",
								"hScreenId" : "PRG_Welcome",
								"h_CustID" : "UNIFORMS_LOGIN_PAGE",
								"cboOrderBy" : $scope.cboselect,
								"txtCartEmpty" : "Y",
								"hPageNo" : "1",
								"hNextOrderNo" : $scope.nextOrderNo,
								"hNextOrderTS" : $scope.nextOrderTs,
								"hCommentCard " : "NULL",
								"fromRWDWebService" : "Y"

							});

					//$http.post(appURL + "/OrderDetail", data)
					//Defect# 8068
					var serverUrl=document.URL;
		             var res = serverUrl.split("/", 3);
		             var serverName  = res[0]+"//"+res[2];                 
		        	$http.post(serverName+appURL+"/OrderDetail",data)
		//Defect# 8068

							.success(
									function(data, status, headers, config) {

										$scope.orderHistoryData = data;
										returnItemService
												.setData($scope.orderHistoryData);
										var dataval = JSON
												.stringify($scope.orderHistoryData);
										console
												.log("Data  in orderDetail page===>>>"
														+ dataval);
										$sessionStorage.OrderDetailCopy = $scope.orderHistoryData; // Added
																									// by
																									// Authis
																									// for
																									// to
																									// get
																									// Value
																									// for
																									// Copy
																									// order

										$scope.work = $scope.orderHistoryData['work'];
										$scope.siteId = $scope.work['site-id'];
										$scope.hideAddToCart = $scope.work['hide-add-to-cart-program'];

										$scope.orderdetail1 = $scope.work['order-detail'];
										$scope.hideActOnWeb = $scope.work['hide-act-on-web'];
										// console.log("----===>>>"
										// +JSON.stringify($scope.orderdetail));

										$scope.mainheader = $scope.orderdetail1['main-header'];
										$scope.edpNumber = $scope.mainheader['edp-no'];
										$scope.customerpono = $scope.mainheader['customer-po-no'];
										$scope.customerContact = $scope.mainheader['customer-contact'];
										$scope.shipLocationId = $scope.mainheader['ship-location-id'];
										$scope.merchandiseValue = $scope.mainheader['merchandise-value'];
										$scope.actFreightAmt = $scope.mainheader['act-freight-amt'];
										$scope.orderNetTax = $scope.mainheader['order-net-tax'];
										$scope.totalOrderValue = $scope.mainheader['total-order-value'];
										$scope.custName = $scope.mainheader['cust-name'];
										$scope.shipToAddress1 = $scope.mainheader['ship-to-address1'];
										$scope.shipToAddress2 = $scope.mainheader['ship-to-address2'];
										$scope.shipToCity = $scope.mainheader['ship-to-city'];
										$scope.shipToState = $scope.mainheader['ship-to-state'];
										$scope.shipToZip = $scope.mainheader['ship-to-zip'];
										$scope.shipToCountry = $scope.mainheader['ship-to-country'];
										$scope.carrierCode = $scope.mainheader['carrier-code'];
										$scope.shipTrackNo = $scope.mainheader['ship-track-no'];
										$scope.orderStatus = $scope.mainheader[' order-status'];
										$scope.shiptrackNos = $scope.shipTrackNo['shiptrack-nos'];
										if ($scope.shiptrackNos != null) {
											$scope.data = $scope.shiptrackNos['data'];
										} else {
											$scope.data = "N/A";
										}
										$scope.orderDate = $scope.mainheader['order-date'];
										$scope.shippingDate1 = $scope.mainheader['shipping-date'].length;
										// alert($scope.shippingDate1);
										if ($scope.shippingDate1 != 0) {
											$scope.shippingDate = $scope.mainheader['shipping-date'];
										} else {
											$scope.shippingDate = "N/A";
										}
										// $log.log("orderDetail678"+JSON.stringify($scope.orderDetail));
										$scope.custPayAmt = $scope.mainheader['cust-pay-amt'];
										$scope.empPayAmt = $scope.mainheader['emp-pay-amt'];
										$scope.orderStatus = $scope.mainheader['order-status'];
										$scope.detail = $scope.orderdetail1['detail'];

										$scope.programInfo = $scope.work['program-info'];
										$scope.curdatebefbuyfromDate = $scope.programInfo['cur-date-before-buying-from-date'];
										$scope.archivalOrderFlag = $scope.work['archival-order-flag'];
										$scope.reshipStatus = $scope.work['reshipStatus'];
										$scope.isCancelOrderEnable = $scope.work['isCancelOrderEnable'];

										$scope.onlineRetProEle = $scope.mainheader['online-return-process-elements'];
										$scope.custRetPolicy = $scope.onlineRetProEle['cust-ret-policy'];
										$scope.stdRetPolicy = $scope.onlineRetProEle['std-ret-policy'];
										$scope.allwRet = $scope.onlineRetProEle['allow-return'];
										$scope.allwFewItem = $scope.onlineRetProEle['allow-few'];
										$scope.allwNone = $scope.onlineRetProEle['allow-none'];
										$log.log("custRetPolicy"
												+ $scope.custRetPolicy
												+ "stdRetPolicy"
												+ $scope.stdRetPolicy);

										if ($scope.work.hasOwnProperty('contactPhoneNo'))
										{
										$scope.contactNo = $scope.work['contactPhoneNo'];
										

										}

										else
										{
										$scope.contactNo = null;
										
										}

										// alert("status"+$scope.orderStatus);
										if ($scope.orderStatus == "B"
												&& (($scope.stdRetPolicy == 1) || ($scope.custRetPolicy == 1))) {

											// alert("returnOrder");
											$scope.returnOrder = true;

										}

										if ($scope.siteId != 204
												|| ($scope.siteId == 204 && $scope.hideAddToCart == "N")) {
											// alert("true");
											if ($scope.orderStatus == "A"
													|| $scope.orderStatus == "D"
													|| $scope.orderStatus == "X") {
											} else if ($scope.curdatebefbuyfromDate == "N") {
												if ($scope.orderStatus != "W") {
													if ($scope.archivalOrderFlag != "7") {
														if ($scope.reshipStatus != "1") {
															// alert("copy
															// order");
															$scope.copyOrder1 = true;
														}

													}

												} else {
													// alert("modify order");
													$scope.modifyOrder1 = true;
												}
											}

										}

										if ($scope.isCancelOrderEnable == 1) {
											// alert("cancel order
											// true"+$scope.orderStatus);
											$scope.cancelOrder = true;

											if ($scope.orderStatus != "E"
													&& $scope.orderStatus != "R") {
												$scope.cancelDisable = "disEnabled";
											}

										}

									}).error(
									function(data, status, header, config) {

										$scope.ResponseDetails = "Data: "
												+ data + "<hr />status: "
												+ status + "<hr />headers: "
												+ header + "<hr />config: "
												+ config;
										$log.log("post method is failed");
									});

				});

app
		.controller(
				"copyOrderController",
				function($scope, $http, $log, $window, $sessionStorage) {

					$scope.OrderDetail = $sessionStorage.OrderDetailCopy;

					$scope.scene7ImagePath = $sessionStorage.sesscene7ImagePath; // Getting
																					// this
																					// variable
																					// from
																					// Uniform.html
																					// page

					console.log("--------------------DSDSDSDDS------>>>>"
							+ JSON.stringify($scope.OrderDetail));
					// alert("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
					$scope.emptydiv = function() {
						console.log("empty call");
						$window.localStorage.removeItem('myItems');
						$scope.myItems = [];
						$sessionStorage.OrderDetailCopy = undefined;
						$scope.OrderDetail = undefined;
						$scope.totalProductPrice = "";
					};
					$scope.removeSingleItem = function(index) {

						console.log(index);

						$scope.myItems.splice(index, 1);
						$window.localStorage.setItem('myItems', JSON
								.stringify($scope.myItems));
						$scope.$watch("myItems", function(newVal, oldVal) {
							$scope.myItems = newVal;
						}, true);
						$scope.$watch('cartCount', function() {

							$scope.cartCount = $scope.myItems.length;
						}, true);
					};

					$scope.loadWithValue = function(orderLots) {
						$sessionStorage.selectedOrder = orderLots;

						// alert(JSON.stringify(orderLots));
					};

					$scope.editProductDetail = function(seqNo) {
						// alert("Edit Product : "+seqNo);
						var data = $.param({

							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"optProgCode" : $sessionStorage.sesprgCode,
							"prgCode" : $sessionStorage.sesprgCode,
							"hdnPrgCode" : $sessionStorage.sesprgCode,
							"txtCartEmpty" : "Y",
							"actionID" : "rwd/prg/order/welcome/prgFrmLoad",
							"huserId" : $sessionStorage.sesUserName,
							"hCommentCard" : "NULL",

							"txtSeqNo" : seqNo,
							"hStyleId" : seqNo,
							"nextPreviousFlag" : "First",
							"lastSeq" : "0",
							"hScreenId" : "ProductDisplay",

							// ChooseProgram
							"hideonweb" : "0",
							"h_CustID" : "UNIFORMS_LOGIN_PAGE",
							"forceemppayment" : "0",
							"allowemp" : "0",
							"hProgramCode" : "2",
							"employeePurchase" : "N",
							"eligibilityDate" : "01/01/2017",
							"allot" : "0",
							"fromRWDWebService" : "Y",

							// hidden
							"txtStyleSheet" : "vfstyle.css",
							"indexNo" : "3",
							"hPageCounter" : "3",
							"hCallType" : "0",
							"levelid" : "2",

							"siteType" : "P",
							"_siteID" : "204",
							"hHomeFlag" : "1",
							"site-id" : "204",
							"hNewOrder" : "Y",
							"hMarketId" : "204",
							"beforeLogin" : "Y"

						});

						//$http.post(appURL + "/PrgFrmLoad", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/PrgFrmLoad",data)
			//Defect# 8068

								.success(
										function(data, status, headers, config) {

											$scope.ProductDetail = data;

											$sessionStorage.sesProductDetailWork = $scope.ProductDetail;
											console
													.log("Product Detail Page ::::::::::::$$$$$$$$$$$$$$$$$$$$:::===>>>"
															+ JSON
																	.stringify($scope.ProductDetail));
											var url = "#product_details";
											$window.location.href = url;

											$log
													.log("PrgFrmLoad post method is success --");
										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});

					};

					// alert("-------------------------->>>>"+JSON.stringify($scope.OrderDetail));
					// alert("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
					if ($scope.OrderDetail == undefined) {

						$scope.totalProductPrice = 0;
						if ($window.localStorage.getItem('myItems')) {
							// alert("1");
							$scope.myItems = JSON.parse($window.localStorage
									.getItem('myItems'));
							console.log("-------------------------->>>>"
									+ JSON.stringify($scope.myItems));
							$scope.cartCount = $scope.myItems.length;
						} else {
							// alert("2");
							$scope.myItems = [];

						}

						// alert($scope.myItems.length);
						var totAmt = 0;
						for (var i = 0; i < $scope.myItems.length; i++) {
							// alert(parseInt($scope.myItems[i].quantity) +" :
							// "+parseInt($scope.myItems[i]['unit-price']));
							totAmt += (parseInt($scope.myItems[i].quantity) * parseInt($scope.myItems[i]['unit-price']));
						}

						$scope.totalProductPrice = totAmt;
						// alert(JSON.stringify($scope.totalProductPrice));

					} else if ($scope.OrderDetail != undefined
							|| $window.localStorage.getItem('myItems')) {

						var fromDate = $scope.OrderDetail.work['order-detail']['search-order']['from-od'];
						var toDate = $scope.OrderDetail.work['order-detail']['search-order']['from-od'];
						var orderNO = $scope.OrderDetail.work['order-detail']['main-header']['order-no'];
						var inVoiceDateOrder = $scope.OrderDetail.work['order-detail']['main-header'].InvoiceOrderDate;
						var orderStatus = $scope.OrderDetail.work['order-detail']['main-header']['order-status'];

						var data = $
								.param({

									"txtUserId" : $sessionStorage.sesUserName,
									"txtPassword" : $sessionStorage.sesPasword,
									"huserId" : $sessionStorage.sesUserName,
									// "site-id" : "204",
									// "hMarketId" : "204",
									// "_siteID" : "204",
									// "beforeLogin" : "Y",
									"optProgCode" : $sessionStorage.sesprgCode,
									"prgCode" : $sessionStorage.sesprgCode,
									"hdnPrgCode" : $sessionStorage.sesprgCode,
									"h_CustID" : "UNIFORMS_LOGIN_PAGE",
									// "hNewOrder" : "Y",
									"hCboSelect" : "DT",
									"txtToDate" : fromDate,
									"txtFromDate" : toDate,
									"cboOrderBy" : "DT",
									"stage" : "Authorized To Return",
									"copyallactivity" : "Y",
									// "hHomeFlag" : "1",

									"customer-type" : "Programmed",
									"InvoiceOrderDate" : inVoiceDateOrder,
									"hOrderSeqNo" : orderNO,
									"hOrderNo" : orderNO,
									"txtOrderNo" : orderNO,
									"txtOrderNumber" : orderNO,

									"hOrderNoSerch" : "N",
									"hCommentCard" : "NULL",
									"hOrderDetailData" : "*RG*M*1*",

									// Hidden
									"txtOrderInv" : "2",
									// "hDontShowPO":"0",
									// "hPageNoOrderDetail":"1",
									"actionID" : "rwd/ordertrack/orderdetail/copyorderactivityno",
									"txtStyleSheet" : "vfstyle.css",
									// "hHomeFlag" : "1",
									"hpageId" : "chooseprogram",
									"txtOrderStatus" : orderStatus,
									// "siteType" : "P",
									"hScreenId" : "PRG_OrderDetail",

									// #############****####
									"hideonweb" : "0",
									"hpageId" : "UNIFORMS_LOGIN_PAGE",
									"h_CustID" : "UNIFORMS_LOGIN_PAGE",
									"forceemppayment" : "0",
									"allowemp" : "0",
									"hProgramCode" : "2",
									"employeePurchase" : "N",
									"eligibilityDate" : "01/01/2017",
									"allot" : "0",
									"hScreenId" : "chooseprogram",
									"fromRWDWebService" : "Y",

								});
						//$http.post(appURL + "/CopyOrder", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/CopyOrder",data)
			//Defect# 8068

								.success(
										function(data, status, headers, config) {

											$scope.copyOrderData = data;

											console
													.log("Data  in copyOrderData page===>>>>&&&&&&&&&&&&&>>>>>>>>>>>>>"
															+ JSON
																	.stringify($scope.copyOrderData));
											// $scope.scene7ImagePath =
											// $scope.copyOrderData.work['scene7-image-path'];

											$scope.myItems = $scope.copyOrderData.work['shopping-cart']['lot-list'];
											// console.log("Data in copyorder
											// page===>>>>&&&&&&&&&&&&&>>>>>>>>>>>>>"
											// +
											// JSON.stringify($scope.shopingCart));

											if ($window.localStorage
													.getItem('myItems')) {
												$scope.scene7ImagePath = $sessionStorage.sesscene7ImagePath; // Getting
																												// this
																												// variable
																												// from
																												// Uniform.html
																												// page
												$scope.totalProductPrice = 0;
												if ($window.localStorage
														.getItem('myItems')) {
													// alert("1");
													$scope.myItems1 = JSON
															.parse($window.localStorage
																	.getItem('myItems'));
													// console.log("-------------------------->>>>"+JSON.stringify($scope.myItems1['lot-id']));
													$scope.cartCount = $scope.myItems1.length;
												} else {
													// alert("2");
													$scope.myItems1 = [];

												}

												var myItem1 = $scope.myItems1;
												var myItem = $scope.myItems;

												$scope.myItems = myItem
														.concat(myItem1);

												// alert($scope.myItems.length);
												var totAmt = 0;
												for (var i = 0; i < $scope.myItems.length; i++) {
													// alert(parseInt($scope.myItems[i].quantity)
													// +" :
													// "+parseInt($scope.myItems[i]['unit-price']));
													totAmt += (parseInt($scope.myItems[i].quantity) * parseInt($scope.myItems[i]['unit-price']));
												}

												$scope.totalProductPrice = totAmt;
												alert(JSON
														.stringify($scope.totalProductPrice));
											}
										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});
					}
					;

				});

app
		.controller(
				"feedbackController",
				function($scope, $http, $log, $window, $sessionStorage) {

					$scope.openWindow = function() {

						var popUpWindowFeedBack = null;
						var URL = "https://secure.sitemason.com/form/jPWfCg";
						var windowFeatures = "scrollbars=yes,resizable=yes,width=930,height=450,top=25,left=2";

						popUpWindowFeedBack = window.open(URL, "_blank",
								windowFeatures);
					};
				});

app.controller("contactUsController", function($scope, $http, $log, $window,$localStorage,
		$sessionStorage, ContactUsService) {
	// alert("contactus");
	// alert($scope.actionId);
	
	//Added for contactus session management
	if(!$sessionStorage.sesUserName){
		$sessionStorage.sesUserName = $localStorage.sesUserName;
	}
	
	if(!$sessionStorage.sesPasword){
		$sessionStorage.sesPasword = $localStorage.sesPasword;
	}
	
	if(!$sessionStorage.sesprgCode){
		$sessionStorage.sesprgCode = $localStorage.sesprgCode;
	}
	
	//End contactus session management
	
	var data = $.param({
		"h_CustID" : "UNIFORMS_LOGIN_PAGE",
		"txtUserId" : $sessionStorage.sesUserName,
		"txtPassword" : $sessionStorage.sesPasword,
		"optProgCode" : $sessionStorage.sesprgCode,
		"prgCode" : $sessionStorage.sesprgCode,
		"hdnPrgCode" : $sessionStorage.sesprgCode,
		"hScreenId" : "PRG_Welcome",
		"hPageId" : "chooseprogram",
		"txtCartEmpty" : "Y",
		"actionID" : "rwd/prg/login/contactus",
		"hCommentCard" : "NULL",
		"txtStyleSheet" : "vfstyle.css"

	});
	//$http.post(appURL + "/ContactUs", data)
	//Defect# 8068
	var serverUrl=document.URL;
     var res = serverUrl.split("/", 3);
     var serverName  = res[0]+"//"+res[2];                 
	$http.post(serverName+appURL+"/ContactUs",data)
//Defect# 8068

	.success(function(data, status, headers, config) {

		$scope.contactData = data;

		$scope.work = $scope.contactData['work'];
		$scope.contactUs = $scope.work['contact-us'];

		ContactUsService.setData($scope.work);

		var dataval = JSON.stringify($scope.contactData);
		console.log("Data  in Contact page===>>>" + dataval);
		// alert(dataval);

	})

	.error(
			function(data, status, header, config) {

				$scope.ResponseDetails = "Data: " + data + "<hr />status: "
						+ status + "<hr />headers: " + header
						+ "<hr />config: " + config;
				$log.log("post method is failed");
			});

});

app.controller('headerController', function($scope, UserNameDisplayService,
		$sessionStorage,$localStorage) {
	
	if(!$sessionStorage.firstName){
		$sessionStorage.firstName = $localStorage.firstName;
	}
	
	if(!$sessionStorage.lastName){
		$sessionStorage.lastName = $localStorage.lastName;
	}
	if(!$sessionStorage.totalBasicBalance){
		$sessionStorage.totalBasicBalance = $localStorage.totalBasicBalance;
	}
	
	if ($sessionStorage.firstName) {
		$scope.firstname = $sessionStorage.firstName;
	}
	if ($sessionStorage.lastName) {
		$scope.lastname = $sessionStorage.lastName;
	}

	$scope.data1 = UserNameDisplayService.getData();
	if ($scope.data1) {
		$scope.chooseProgram = $scope.data1['choose-program'];
		$scope.firstname = $scope.chooseProgram['first-name'];
		$scope.lastname = $scope.chooseProgram['last-name'];
	}
	$scope.totalBasicsbalance = $sessionStorage.totalBasicBalance;
});

app
		.controller(
				"userDetailController",
				function($scope, $http, $log, $window, $sessionStorage,
						ContactUsService) {
					// alert("userdetailController");

					var subject = document.getElementById("subject");
					subject.onchange = function() {
						if (subject.value == 'Other') {
							document.getElementById("subjectTxt").className = "form-control padd-top";
						} else {
							document.getElementById("subjectTxt").className = "hide";
						}
					};

					$scope.sendUserDetail = function(UserDetail) {

						var fname = document.forms["myform"]["fname"].value;
						var lname = document.forms["myform"]["lname"].value;
						var empNO = document.forms["myform"]["empNO"].value;
						var email = document.forms["myform"]["email"].value;
						var callback = document.forms["myform"]["callback"].value;
						var order = document.forms["myform"]["order"].value;
						// var subject =
						// document.forms["myform"]["subject"].value;
						var comment = document.forms["myform"]["comment"].value;

						var re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

						// adding for validation sep-22

						 // Modified by Authis for inline validation
		 var isError = false;
		   if(fname =="")
			{
			   $scope.firstNameError = message("1")+"First Name";
				//alert(message("1")+"First Name");
				document.forms["myform"]["fname"].select();
				//return false;
				isError = true;
			}else{
				$scope.firstNameError = "";
			}
		     if(lname =="")
			{
		    	 $scope.lastNameError =message("1")+"Last Name"; 
				//alert(message("1")+"Last Name"); 
				document.forms["myform"]["lname"].select();
				//return false;
				isError = true;
			}else{
				 $scope.lastNameError = "";
			}
		     if(empNO=="")
			{
		    	 $scope.empNumberError = message("1")+"Employee/Account Number"
				//alert(message("1")+"Employee/Account Number");
				document.forms["myform"]["empNO"].select();
				//return false;
		    	 isError = true;
			}else{
				 $scope.empNumberError = "";
			}
		     if(email ==""){
		    	 $scope.emailError = message("1")+"Email";
				//alert(message("1")+"Email");
				document.forms["myform"]["email"].select();
				//return false;
				isError = true;
			} else if(!re_email.test(email)) 
		    {
		    	 $scope.emailError = message("1")+"Valid Email";
			   //alert(message("1")+"Valid Email");
			   document.forms["myform"]["email"].select();
			 //  return false;
			   isError = true;			   
			}	 else{
				$scope.emailError = "";
				
			} 			
		     if(callback=="") 
			{
		    	 $scope.cbNoError = message("1")+"Call Back"
				//alert(message("1")+"Call Back");
				document.forms["myform"]["callback"].select();
				//return false;
		    	 isError = true;
			}else{
				$scope.cbNoError = "";
				
			}
		     
		     if(comment=="")
				{
		    	 $scope.cmtError = message("1")+"Comments";
					//alert(message("1")+"Comments");
					document.forms["myform"]["comment"].focus();
					//return false;
					isError = true;
				}else{
					$scope.cmtError = "";
					
				}

		   if(document.forms["myform"]["subject"].selectedIndex==0)
			{
			   $scope.subError = "Please select a subject from the given list";
				//alert("Please select a subject from the given list");
				//document.forms["myform"]["subject"].select();
				//return false;
				isError = true;
			}else{
				$scope.subError = "";
			}
		    if((callback.length>= 1) && (callback.length <= 7)) {
			   $scope.cbNoError = message("1")+"valid 9 digit Callback No";
				//alert(message("1")+"valid 9 digit Callback No");
				//return false;
				isError = true;
		   }else{
			   $scope.cbNoError = "";
		   }
		    if((order.length>= 1) && (order.length <= 7)) {
		    	$scope.orderError = message("1")+"valid 8 digit Order No";
				//alert(message("1")+"valid 8 digit Order No");
				//return false;
				isError = true;
		   }else{
			   $scope.orderError = "";
		   }

		      

		  if(!isError){ 
			  
			  $scope.userDetailData = angular.copy(UserDetail);

				$scope.Work = ContactUsService.getData();
				$scope.company = $scope.Work['contact-submit'];
							var data = $
									.param({
										"h_CustID" : "UNIFORMS_LOGIN_PAGE",
										"optProgCode" : $sessionStorage.sesprgCode,
										"prgCode" : $sessionStorage.sesprgCode,
										"hdnPrgCode" : $sessionStorage.sesprgCode,
										"txtUserId" : $sessionStorage.sesUserName,
										"txtPassword" : $sessionStorage.sesPasword,
										"txtCartEmpty" : "Y",
										"hScreenId" : "ContactUs",
										"subject" : $scope.userDetailData.contactUs,
										"orgid" : "00D3000000002sg",
										"txtStyleSheet" : "vfstyle.css",
										"actionID" : "rwd/prg/login/sendboldsoftcontactusemail",
										"company" : $scope.company,
										"fname" : $scope.userDetailData.firstName,
										"retURL" : "1",
										"email" : $scope.userDetailData.email,
										"hCommentCard" : "NULL",
										"external" : "1",
										"callback" : $scope.userDetailData.callBackNo,
										"hPageId" : "chooseprogram",
										"lname" : $scope.userDetailData.lastName,
										"qustn" : $scope.userDetailData.comments,
										"empacctno" : $scope.userDetailData.empNo

									});
							//$http.post(appURL + "/BoldSoftContactUsEmail",data)
							//Defect# 8068
							var serverUrl=document.URL;
   			             var res = serverUrl.split("/", 3);
				             var serverName  = res[0]+"//"+res[2];                 
				        	$http.post(serverName+appURL+"/BoldSoftContactUsEmail",data)
				//Defect# 8068

									.success(
											function(data, status, headers,
													config) {

												$scope.contactData = data;

												var dataval = JSON
														.stringify($scope.contactData);
												console
														.log("Data  in emailContact page===>>>"
																+ dataval);
												// alert(dataval);

												var url = "#Contact_Us";
												$log.log(url);
												$window.location.href = url;

											})

									.error(
											function(data, status, header,
													config) {

												$scope.ResponseDetails = "Data: "
														+ data
														+ "<hr />status: "
														+ status
														+ "<hr />headers: "
														+ header
														+ "<hr />config: "
														+ config;
												$log
														.log("post method is failed");
											});
						}
					};
				});

app
		.controller(
				"shopUniformCtrl",
				function($scope, $http, $log, $window, chooseProgramService,
						$sessionStorage, $sce, $rootScope) {
					//Added by madhu for dynamic content
					$scope.showTopDynamicContent = function(){
						$rootScope.$emit("CallParentMethod", {});
					};
					$scope.showTopDynamicContent();
					//Added by madhu for dynamic content end

					
					$scope.WelcomePageContent = $sessionStorage.ShopCatalog;
					$scope.catalogTreeNode = $scope.WelcomePageContent['catalog-tree'].tree;
					$scope.sceanImagePath = $scope.WelcomePageContent['scene7-image-path'];
					$sessionStorage.sesscene7ImagePath = $scope.WelcomePageContent['scene7-image-path']; // Seeting
																											// here
																											// to
																											// get
																											// the
																											// value
																											// from
																											// Shopping
																											// Cart
																											// Page
					
					//Dynamic cotent added by madhu
					$scope.emergencytxt = $sce.trustAsHtml($scope.WelcomePageContent['emergency-content']); 
					$scope.welcomenw = $scope.WelcomePageContent['new']; 
					$scope.welcometxt = $sce.trustAsHtml($scope.welcomenw['content-desc']); 
					
					//Dynamic cotent added by madhu end
					//Show hide func for dynamic content by madhu
				  	$scope.showHideDynamicText2 = function(){
				  		if($scope.emergencytxt == null || $scope.emergencytxt == "") {
				  			$scope.emergencytxtempty = true;
				  		}
				  		else {
				  			$scope.emergencytxtempty = false;
				  		}
				  	};
				  	$scope.showHideDynamicText2();

				  	$scope.showHideDynamicWelcometxt = function(){
				  		if($scope.welcometxt == null || $scope.welcometxt == "") {
				  			$scope.welcometxtempty = true;
				  		}
				  		else {
				  			$scope.welcometxtempty = false;
				  		}
				  	};
				  	$scope.showHideDynamicWelcometxt();
				  	//Show hide func for dynamic content by madhu end

					$log
							.log("Session----------------- :---------  "
									+ JSON
											.stringify($sessionStorage.sesscene7ImagePath));

					$scope.catalogTreeNode = $scope.WelcomePageContent['catalog-tree'].tree;
					$log.log("WelcomePageContent :---------  "
							+ JSON.stringify($scope.catalogTreeNode));

					$scope.setNavi = function(pageName) {
						// alert(pageName);
						$sessionStorage.sesShopUniformPageNm = pageName;

					};

					$scope.shopShirts = function(url) {

						var urlValue = url;

						var splUrl = urlValue.split("indexNo");
						var splSubUrl = splUrl[1].split("&");
						var indexNo = splSubUrl[0].replace("=", "");

						var splUrl = urlValue.split("txtSeqNo");
						var splSubUrl = splUrl[1].split("&");
						var seqNo = splSubUrl[0].replace("=", "");

						var data = $.param({

							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"optProgCode" : $sessionStorage.sesprgCode,
							"prgCode" : $sessionStorage.sesprgCode,
							"hdnPrgCode" : $sessionStorage.sesprgCode,
							"txtCartEmpty" : "Y",
							"actionID" : "rwd/prg/garmentsdisplay",
							"huserId" : $sessionStorage.sesUserName,
							"hCommentCard" : "NULL",

							// ChooseProgram
							"hideonweb" : "0",
							"hpageId" : "UNIFORMS_LOGIN_PAGE",
							"h_CustID" : "UNIFORMS_LOGIN_PAGE",
							"forceemppayment" : "0",
							"allowemp" : "0",
							"hProgramCode" : "2",
							"employeePurchase" : "N",
							"eligibilityDate" : "01/01/2017",
							"allot" : "0",
							"hScreenId" : "chooseprogram",
							"fromRWDWebService" : "Y",

							// hidden
							"txtStyleSheet" : "vfstyle.css",
							"txtSeqNo" : seqNo,
							"levelid" : "0",
							"hStyleId" : seqNo,
							"indexNo" : indexNo,
							"nextPreviousFlag" : "First",
							"lastSeq" : "0",

						});
						//$http.post(appURL + "/GarmentsDisplay", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/GarmentsDisplay",data)
			//Defect# 8068

								.success(
										function(data, status, headers, config) {

											$scope.GarmentsDisplayData = data;
											// alert(
											// JSON.stringify($scope.GarmentsDisplayData));
											// chooseProgramService.setData($scope.GarmentsDisplayData);
											$sessionStorage.sesGarmentsDisplay = $scope.GarmentsDisplayData;
											var url = "#shop_shirts";
											$log.log(url);
											$window.location.href = url;

										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});
					};

				});

app
		.controller(
				"garmentsDisplayController",
				function($scope, $http, $log, $window, $sessionStorage,
						chooseProgramService) {

					// $scope.GarmentsDisplayData =
					// chooseProgramService.getData();

					$scope.GarmentsDisplayData = $sessionStorage.sesGarmentsDisplay;

					$scope.Products = $scope.GarmentsDisplayData.work.products['garment-type'];

					console.log("Data  in GarmentsDisplay Products===>>>"
							+ JSON.stringify($scope.Products));
					$scope.scean7ImagePath = $scope.GarmentsDisplayData.work['scene7-image-path'];
					// console.log("Data in GarmentsDisplay Products===>>>" +
					// JSON.stringify($scope.Products));
					$scope.ShopUniformPageNm = $sessionStorage.sesShopUniformPageNm;

					$scope.setNavi = function(pageName) {
						// alert(pageName);
						$sessionStorage.sesDressUniformPageNm = pageName;

					};

					$scope.shopShirtProduct = function(url) {
						var urlValue = url;

						var splUrl = urlValue.split("indexNo");
						var splSubUrl = splUrl[1].split("&");
						var indexNo = splSubUrl[0].replace("=", "");

						var splUrl = urlValue.split("txtSeqNo");
						var splSubUrl = splUrl[1].split("&");
						var seqNo = splSubUrl[0].replace("=", "");

						var data = $.param({

							// dynamic
							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"optProgCode" : $sessionStorage.sesprgCode,
							"prgCode" : $sessionStorage.sesprgCode,
							"hdnPrgCode" : $sessionStorage.sesprgCode,
							"txtCartEmpty" : "Y",
							"actionID" : "rwd/prg/catalog/productdisplay",
							"huserId" : $sessionStorage.sesUserName,
							"hCommentCard" : "NULL",

							// ChooseProgram
							"hideonweb" : "0",
							"hpageId" : "UNIFORMS_LOGIN_PAGE",
							"h_CustID" : "UNIFORMS_LOGIN_PAGE",
							"forceemppayment" : "0",
							"allowemp" : "0",
							"hProgramCode" : "2",
							"employeePurchase" : "N",
							"eligibilityDate" : "01/01/2017",
							"allot" : "0",
							"hScreenId" : "chooseprogram",
							"fromRWDWebService" : "Y",

							// hidden
							"txtStyleSheet" : "vfstyle.css",
							"txtSeqNo" : seqNo,
							"levelid" : "1",
							"hStyleId" : seqNo,
							"indexNo" : indexNo,
							"nextPreviousFlag" : "First",
							"lastSeq" : "0"

						});
						//$http.post(appURL + "/ProductDisplay", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/ProductDisplay",data)
			//Defect# 8068

						.success(
								function(data, status, headers, config) {
									$scope.ProductDisplayCtl = data;
									chooseProgramService
											.setData($scope.ProductDisplayCtl);

									var url = "#dress_uniforms";
									$window.location.href = url;

								}).error(
								function(data, status, header, config) {
									$scope.ResponseDetails = "Data: " + data
											+ "<hr />status: " + status
											+ "<hr />headers: " + header
											+ "<hr />config: " + config;
									$log.log("post method is failed");
								});

					};

				});

app
		.controller(
				"productDisplayController",
				function($scope, $http, $log, $window, chooseProgramService,
						$sessionStorage) {

					$scope.ProductDisplayCtl = chooseProgramService.getData();
					console
							.log("Data  in GarmentsDisplay Wo===========================rk===>>>"
									+ JSON.stringify($scope.ProductDisplayCtl));

					$scope.Products = $scope.ProductDisplayCtl.work.products['garment-type'][0];
					$scope.scean7ImagePath = $scope.ProductDisplayCtl.work['scene7-image-path'];

					$scope.ShopUniformPageNm = $sessionStorage.sesShopUniformPageNm;
					$scope.DressUniformPageNm = $sessionStorage.sesDressUniformPageNm;

					$scope.setNavi = function(pageName) {
						// alert(pageName);
						$sessionStorage.sesProdutName = pageName;

					};

					$scope.productDetail = function(seqNo) {
						//alert(seqNo);
						var data = $.param({

							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"optProgCode" : $sessionStorage.sesprgCode,
							"prgCode" : $sessionStorage.sesprgCode,
							"hdnPrgCode" : $sessionStorage.sesprgCode,
							"txtCartEmpty" : "Y",
							"actionID" : "rwd/prg/order/welcome/prgFrmLoad",
							"huserId" : $sessionStorage.sesUserName,
							"hCommentCard" : "NULL",

							"txtSeqNo" : seqNo,
							"hStyleId" : seqNo,
							"nextPreviousFlag" : "First",
							"lastSeq" : "0",
							"hScreenId" : "ProductDisplay",

							// ChooseProgram
							"hideonweb" : "0",
							"h_CustID" : "UNIFORMS_LOGIN_PAGE",
							"forceemppayment" : "0",
							"allowemp" : "0",
							"hProgramCode" : "2",
							"employeePurchase" : "N",
							"eligibilityDate" : "01/01/2017",
							"allot" : "0",
							"fromRWDWebService" : "Y",

							// hidden
							"txtStyleSheet" : "vfstyle.css",
							"indexNo" : "3",
							"hPageCounter" : "3",
							"hCallType" : "0",
							"levelid" : "2",

							"siteType" : "P",
							"_siteID" : "204",
							"hHomeFlag" : "1",
							"site-id" : "204",
							"hNewOrder" : "Y",
							"hMarketId" : "204",
							"beforeLogin" : "Y"

						});

						//$http.post(appURL + "/PrgFrmLoad", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/PrgFrmLoad",data)
			//Defect# 8068

								.success(
										function(data, status, headers, config) {

											$scope.ProductDetail = data;

											$sessionStorage.sesProductDetailWork = $scope.ProductDetail;
											console
													.log("Product Detail Page ::::::::::::$$$$$$$$$$$$$$$$$$$$:::===>>>"
															+ JSON
																	.stringify($scope.ProductDetail));
											var url = "#product_details";
											$window.location.href = url;

											$log
													.log("PrgFrmLoad post method is success --");
										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});

					};

				});

app
		.controller(
				"productDetailController",
				function($scope, $http, $log, $window, chooseProgramService,
						$sessionStorage, $rootScope, $timeout) {

					$(document).on("click", ".confirmCheckout",
							function(event) {
								$("body").addClass("modal-opened");
								setTimeout(function() {
									$("body").removeClass("modal-opened");
								}, 10);
								setTimeout(function() {
									$("body").removeClass("modal-open");
								}, 10);
							});

					$scope.ProductDetail = $sessionStorage.sesProductDetailWork;
					console.log("22222222211111111111111111111112222----------"
							+ JSON.stringify($scope.ProductDetail));
					$scope.ProductDetailLot = $scope.ProductDetail.work['orderlot'];
					$scope.dressLot = $scope.ProductDetailLot['orderlot-header']['style']['lot-list'].lot;
					$scope.scene7ImagePath = $scope.ProductDetail.work['scene7-image-path'];

					var imagePath = $scope.ProductDetail.work['scene7-image-path'];
					var lotID = $scope.ProductDetailLot['orderlot-header']['style']['lot-list'].lot[0].id;
					// alert(imagePath +lotID );
					// $scope.currentImage =
					// $scope.ProductDetailLot['orderlot-header']['style']['s7-is-image-id']['ImageUrl300'];
					$scope.currentImage = imagePath + lotID;

					// console.log("2222222222222----------"+JSON.stringify($scope.ProductDetailLot['orderlot-header']));

					$scope.styleID = $scope.ProductDetailLot['orderlot-header']['style']['style-id'];
					$scope.CurrentBalance = $scope.ProductDetail.work['view-bal']['remaining-allowance'];
					$scope.StyleID = $scope.ProductDetailLot['orderlot-details']['shop-more'].hStyleId;
					$scope.swichImage = function(img) {
						$scope.currentImage = $scope.scene7ImagePath + img;
						// $scope.imgIndex = $scope.items2.indexOf(img);
						// $scope.colorvalue =
						// $scope.colorVariation[$scope.imgIndex];
					};

					$scope.productName = $sessionStorage.sesProdutName; // Code
																		// for
																		// Set
																		// Product
																		// Name
																		// Dynamically

					// console.log("First
					// XML--------------------->"+angular.toJson($scope.ProductDetailLot,true));
					// console.log("----------"+JSON.stringify($sessionStorage.selectedOrder));
					if ($sessionStorage.selectedOrder != undefined) {
						// alert("hihhhi");
						$scope.selOrder = $sessionStorage.selectedOrder;
						console.log($scope.selOrder['StyleID']);
						console.log($scope.selOrder['CYPDesc']);
						console.log($scope.selOrder['CYPPrice']);
						console.log($scope.selOrder['OPDesc']);
						console.log($scope.selOrder['OPPrice']);
						console.log($scope.selOrder['lot-id']);
						console.log($scope.selOrder['ItemImg']);
						console.log($scope.selOrder['lot-description']);
						console.log($scope.selOrder['dim2-desc']);
						console.log($scope.selOrder['dim1-desc']);
						console.log($scope.selOrder['unit-price']);
						console.log($scope.selOrder['quantity']);

						// Below variables set before calling OrderLotPageOne
						$scope.selectedColor = $scope.selOrder['lot-id'];
						$scope.itemQty = $scope.selOrder['quantity'];

						/**
						 * Calling OrderLotPageOne service again here to load
						 * page with edit details for Dim1 and Dime 2*
						 */
						$scope.currentImage = $scope.scene7ImagePath
								+ $scope.selectedColor;

						var data = $
								.param({
									"txtUserId" : $sessionStorage.sesUserName,
									"txtPassword" : $sessionStorage.sesPasword,
									"optProgCode" : $sessionStorage.sesprgCode,
									"prgCode" : $sessionStorage.sesprgCode,
									"hdnPrgCode" : $sessionStorage.sesprgCode,
									"hpageId" : "chooseprogram",
									"actionID" : "rwd/prg/order/orderLot/orderLotPageOne",
									"huserId" : $sessionStorage.sesUserName,
									"hCommentCard" : "NULL",
									"siteType" : "P",
									"_siteID" : "204",
									"hHomeFlag" : "1",
									"site-id" : "204",
									"hNewOrder" : "Y",
									"hMarketId" : "204",
									"beforeLogin" : "Y",
									"hideonweb" : "0",
									"h_CustID" : "UNIFORMS_LOGIN_PAGE",
									"forceemppayment" : "0",
									"allowemp" : "0",
									"hProgramCode" : "2",
									"employeePurchase" : "N",
									"eligibilityDate" : "01/01/2017",
									"allot" : "0",
									"fromRWDWebService" : "Y",
									"txtStyleSheet" : "vfstyle.css",
									"hStyleId" : $scope.selOrder['StyleID'],
									"txtSeqNo" : $scope.selOrder['StyleID'],
									"indexNo" : "3",
									"nextPreviousFlag" : "First",
									"lastSeq" : "0",
									"hScreenId" : "PRG_ReqMinimum", // "ProductDisplay",
									"hPageCounter" : "3",
									"hCallType" : "0",
									"levelid" : "2",
									"isPricingCalReq" : "0",
									"hIsActNotDisplayed" : "0",
									"hShowDetail" : "0",
									"hShowAllLots" : "Y",
									"hListPrice" : "0.00",
									"hLastOrderSizeComing" : "0",
									"hReqMinEdit" : "N",
									"hActualUnitPricing" : "N",
									"hPrevScreenId" : "PRG_OrderLot1",
									"shopMoretxtSeqNo" : $scope.selOrder['StyleID'],
									"txtTotalPrice" : "00.00",
									"fromTree" : "true",
									"hPageCounter" : "8",
									"hLotId" : $scope.selOrder['lot-id'],
									"txtCartEmpty" : "Y",
									"hUnitPriceComing" : "0",
									"shopMorehStyleId" : $scope.selOrder['StyleID'],
									"hSizeChartPath" : "MFC-10.html",
									"hCallType" : "0",

								});
						//$http.post(appURL + "/OrderLotPageOne", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/OrderLotPageOne",data)
			//Defect# 8068
								.success(
										function(data, status, headers, config) {
											$scope.customerSupportData = data;
											$scope.DimensionData = $scope.customerSupportData.work.orderlot['other-details']['lot-list']['dim1-list'];
											$scope.activityData = $scope.customerSupportData.work.orderlot['orderlot-details']['activities']['activity-data'];

											// Below variables set After calling
											// OrderLotPageOne
											// alert("----------"+JSON.stringify($scope.selOrder['dim1-desc']));
											$scope.selectedLength = $scope.selOrder['dim1-desc'];
											$scope.selectedSize = $scope.selOrder['dim2-desc'];

											// Below code will set Size value
											// while Edit load page

											var selLength = $scope.selOrder['dim1-desc'];
											$scope.dim2Val = [];
											var len = $scope.DimensionData.dim1.length;
											for (var i = 0; i < len; i++) {
												console
														.log(i
																+ "---------------------"
																+ $scope.DimensionData['dim1'][i].value);

												if ($scope.DimensionData['dim1'][i].value == selLength) {
													var dim2list = $scope.DimensionData['dim1'][i]['dim2-list']['dim2'];
													console.log(dim2list);
													for ( var j in dim2list) {
														console
																.log(dim2list[j].value);
														$scope.dim2Val
																.push(dim2list[j].value);
													}
													break;
												}
											}

										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});

						$sessionStorage.selectedOrder = ""; // To make Session
															// Null once Edit
															// product Loaded

					}
					;

					if ($window.localStorage.getItem('myItems')) {
						$scope.myItems = JSON.parse($window.localStorage
								.getItem('myItems'));
						console.log($scope.myItems);
						$scope.cartCount = $scope.myItems.length;
					} else {
						$scope.myItems = [];

					}

					$scope.getValueCYP = function(val) {

						var arrCYP = [];
						arrCYP = val.split("|");
						$scope.CYPDesc = arrCYP[0];
						$scope.CYPPrice = arrCYP[1];
						// alert(arrCYP[0]+" CYP "+arrCYP[1]);

					};

					$scope.getValueOP = function(val) {

						var arrOP = [];
						arrOP = val.split("|");
						$scope.OPDesc = arrOP[0];
						$scope.OPPrice = arrOP[1];

						// alert(arrOP[0]+" OP "+arrOP[1]);

					};

					$scope.addToCart = function() {

						if (angular.isUndefined($scope.selectedColor)
								|| angular.isUndefined($scope.currentImage)
								|| angular.isUndefined($scope.itemQty)
								|| angular.isUndefined($scope.selectedSize)) {
							console.log("return from here");
							$scope.noQty = "Please select Quantity.";
							return false;
						}
						/*
						 * var availableItem = $.grep($scope.myItems, function
						 * (option) { return option.itemId ==
						 * $scope.selectedColor; })[0];
						 */
						/*
						 * if (availableItem) {
						 * //$firstId.find(".ac-select").text(fruitName.title);
						 * availableItem.Qty += $scope.itemQty; } else {
						 */
						// var ccc = $scope.selectedLength;
						// alert(ccc);total-price
						var total_price = parseInt($scope.itemQty)
								* parseInt(50);
						$scope.myItems
								.push({
									"CYPDesc" : $scope.CYPDesc,
									"CYPPrice" : $scope.CYPPrice,
									"OPDesc" : $scope.OPDesc,
									"OPPrice" : $scope.OPPrice,
									"StyleID" : $scope.StyleID,
									"lot-id" : $scope.selectedColor,
									"ItemImg" : $scope.currentImage,
									"lot-description" : $scope.ProductDetailLot['orderlot-header']['style']['category-shortdesc'],
									"dim1-desc" : $scope.selectedLength,
									"dim2-desc" : $scope.selectedSize,
									"unit-price" : "50.00",
									"quantity" : $scope.itemQty,
									"total-price" : total_price
								});
						// }
						$scope.cartCount = $scope.myItems.length;
						$window.localStorage.setItem("myItems", JSON
								.stringify($scope.myItems)); // product name
						$scope.proIndex = $scope.myItems.length - 1;
						$scope.myTest = $scope.myItems[$scope.proIndex]['lot-description'];

						$scope.itemLength = $scope.myItems[$scope.proIndex]['dim1-desc'];
						$scope.itemSize = $scope.myItems[$scope.proIndex]['dim2-desc'];
						$scope.unitprice = $scope.myItems[$scope.proIndex]['unit-price'];
						$scope.qty = $scope.myItems[$scope.proIndex].quantity;
						$scope.imgs = $scope.myItems[$scope.proIndex].ItemImg;
						$scope.stylID = $scope.myItems[$scope.proIndex].StyleID;

						$scope.CYPDesc = $scope.myItems[$scope.proIndex].CYPDesc;
						$scope.CYPPrice = $scope.myItems[$scope.proIndex].CYPPrice;
						$scope.OPDesc = $scope.myItems[$scope.proIndex].OPDesc;
						$scope.OPPrice = $scope.myItems[$scope.proIndex].OPPrice;

						$rootScope.cartCount = $scope.myItems.length;
						$("#addToCartModal").modal('show');
					};

					$scope.firstName = $sessionStorage.firstName;

					$scope.selectedColorItem = function() {

						$scope.selectedLength = ""; // To make Length Field
													// Empty
						$scope.selectedSize = ""; // To make Size Field Empty

						$scope.currentImage = $scope.scene7ImagePath
								+ $scope.selectedColor;

						var data = $
								.param({
									"txtUserId" : $sessionStorage.sesUserName,
									"txtPassword" : $sessionStorage.sesPasword,
									"optProgCode" : $sessionStorage.sesprgCode,
									"prgCode" : $sessionStorage.sesprgCode,
									"hdnPrgCode" : $sessionStorage.sesprgCode,
									"hpageId" : "chooseprogram",
									"actionID" : "rwd/prg/order/orderLot/orderLotPageOne",
									"huserId" : $sessionStorage.sesUserName,
									"hCommentCard" : "NULL",
									"siteType" : "P",
									"_siteID" : "204",
									"hHomeFlag" : "1",
									"site-id" : "204",
									"hNewOrder" : "Y",
									"hMarketId" : "204",
									"beforeLogin" : "Y",
									"hideonweb" : "0",
									"h_CustID" : "UNIFORMS_LOGIN_PAGE",
									"forceemppayment" : "0",
									"allowemp" : "0",
									"hProgramCode" : "2",
									"employeePurchase" : "N",
									"eligibilityDate" : "01/01/2017",
									"allot" : "0",
									"fromRWDWebService" : "Y",
									"txtStyleSheet" : "vfstyle.css",
									"hStyleId" : $scope.styleID,
									"txtSeqNo" : $scope.styleID,
									"indexNo" : "3",
									"nextPreviousFlag" : "First",
									"lastSeq" : "0",
									"hScreenId" : "PRG_ReqMinimum", // "ProductDisplay",
									"hPageCounter" : "3",
									"hCallType" : "0",
									"levelid" : "2",
									"isPricingCalReq" : "0",
									"hIsActNotDisplayed" : "0",
									"hShowDetail" : "0",
									"hShowAllLots" : "Y",
									"hListPrice" : "0.00",
									"hLastOrderSizeComing" : "0",
									"hReqMinEdit" : "N",
									"hActualUnitPricing" : "N",
									"hPrevScreenId" : "PRG_OrderLot1",
									"shopMoretxtSeqNo" : $scope.styleID,
									"txtTotalPrice" : "00.00",
									"fromTree" : "true",
									"hPageCounter" : "8",
									"hLotId" : $scope.selectedColor,
									"txtCartEmpty" : "Y",
									"hUnitPriceComing" : "0",
									"shopMorehStyleId" : $scope.styleID,
									"hSizeChartPath" : "MFC-10.html",
									"hCallType" : "0",

								});
						//$http.post(appURL + "/OrderLotPageOne", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/OrderLotPageOne",data)
			//Defect# 8068
								.success(
										function(data, status, headers, config) {
											$scope.customerSupportData = data;
											$scope.DimensionData = $scope.customerSupportData.work.orderlot['other-details']['lot-list']['dim1-list'];
											$scope.activityData = $scope.customerSupportData.work.orderlot['orderlot-details']['activities']['activity-data'];
											console
													.log("---------------------"
															+ JSON
																	.stringify($scope.activityData));
										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});

					};

					$scope.selectLength = function() {
						$scope.selectedSize = ""; // To make Size Field Empty
						var selLength = $scope.selectedLength;
						$scope.dim2Val = [];
						var len = $scope.DimensionData.dim1.length;
						for (var i = 0; i < len; i++) {
							// console.log(i+"---------------------"+$scope.DimensionData['dim1'][i].value);

							if ($scope.DimensionData['dim1'][i].value == selLength) {
								var dim2list = $scope.DimensionData['dim1'][i]['dim2-list']['dim2'];
								console.log(dim2list);
								for ( var j in dim2list) {
									console.log(dim2list[j].value);
									$scope.dim2Val.push(dim2list[j].value);
								}
								break;
							}
						}

					};

				});

app.controller("returnDetailController", function ($scope,$http,$log, $window,$sessionStorage,$uibModalInstance,orderHistoryService,OrderDisplayService,InvoiceOrderDisplayService,chooseProgramService) {
	//alert("returndetail");
	$scope.orderDisplay = OrderDisplayService.getData();
	$log.log("ReturnDisplay::"
			+ JSON.stringify($scope.orderDisplay));
	$scope.orderDetail = chooseProgramService.getData();
	$log.log("ReturnDetail12345"
			+ JSON.stringify($scope.orderDetail));
	$scope.ok = function() {
		
		$uibModalInstance.close($scope.selected.item);
	};

	

	$scope.cancel = function() {
		
		$uibModalInstance.dismiss('cancel');//madhu
	};

//alert($scope.actionId);
	$scope.InvoiceOrderDate=InvoiceOrderDisplayService.getData();
	$log.log("InvoiceOrderDate"+$scope.InvoiceOrderDate);
	$scope.searchorder = $scope.orderDisplay['search-order'];
	$log.log("searchorder"+ JSON.stringify($scope.searchorder));
	$scope.fromod = $scope.searchorder['from-od'];
	$log.log("fromod" + $scope.fromod);
	$scope.tood = $scope.searchorder['to-od'];
	$scope.orderno = $scope.orderDetail['order-no'];
	$scope.cboselect = $scope.orderDisplay['cbo-select'];
	$scope.orderstatus = $scope.orderDetail['order-status-short-value'];
	$scope.orderDate = $scope.orderDetail['order-date'];
	$scope.orderInv=$scope.orderDetail['order-inv'];
	
	$scope.lastOrderdetail=orderHistoryService.getData();
	$log.log("lastOrderdetail"+JSON.stringify($scope.lastOrderdetail));
	$scope.nextOrderNo=$scope.lastOrderdetail['order-no'];
	$scope.nextOrderTs=$scope.lastOrderdetail['order-ts'];	
			$log.log("value"+$sessionStorage.sesprgCode);
var data=$.param({

	   "txtToDate" : $scope.tood,
	   "txtFromDate" : $scope.fromod,
	   "hCboSelect" : $scope.cboselect,
	   "hOrderNo" : $scope.orderno,
	   "txtOrderNo": $scope.orderno,
	   "txtUserId" : $sessionStorage.sesUserName,
	   "InvoiceOrderDate":$scope.InvoiceOrderDate,
	   "txtPassword" : $sessionStorage.sesPasword,
	               
	  
	   "optProgCode":$sessionStorage.sesprgCode,
	   "prgCode":$sessionStorage.sesprgCode,
	   "hdnPrgCode":$sessionStorage.sesprgCode,
	   "h_CustID" : "UNIFORMS_LOGIN_PAGE",
	   //"hNewOrder":"Y",
	   "hPageNo":"1",
	   "cboOrderBy" : $scope.cboselect,
//	   	   	   Hidden
	  "txtOrderInv":$scope.orderInv,
	   "hDontShowPO":"1",
	   "hPageNoOrderDetail":"1",
	   "actionID": "rwd/prg/ordertrack/orderdetail/returnsdetail",
	   "txtStyleSheet":"vfstyle.css",
	  
	   "hpageId" :"chooseprogram",
	   //"txtOrderStatus":$scope.orderstatus,
	  
	   "txtCartEmpty":"Y",
	   "hNextOrderNo":$scope.nextOrderNo,
		"hNextOrderTS":$scope.nextOrderTs
 });
var serverUrl=document.URL;
var res = serverUrl.split("/", 3);
var serverName  = res[0]+"//"+res[2];  
 $http.post(serverName+appURL+"/ReturnDetail",data)  

 .success(function (data, status, headers, config) {    
 		
 	$scope.orderHistoryData=data;
 	
 	var dataval =JSON.stringify($scope.orderHistoryData);
 console.log("Data  in returnDetail page===>>>" +dataval);
 $scope.work = $scope.orderHistoryData['work'];
	//$scope.siteId = $scope.work['site-id'];
	//$scope.hideAddToCart = $scope.work['hide-add-to-cart-program'];

	$scope.returnDetail1 = $scope.work['return-detail'];
	$scope.viewBal= $scope.work['view-bal'];
	$scope.programType=$scope.viewBal['program-type'];
	//$scope.hideActOnWeb = $scope.work['hide-act-on-web'];
	// console.log("----===>>>"
	// +JSON.stringify($scope.orderdetail));

	$scope.mainheader = $scope.returnDetail1['main-header'];
	$scope.referenceOrderNo = $scope.mainheader['reference-order-no'];
	$scope.returnReceived = $scope.mainheader['return-received'];
	$scope.returnStatus = $scope.mainheader['return-status'];
	$scope.totalLotsPrice = $scope.mainheader['total-lots-price'];
	$scope.actFreightAmt1 = $scope.mainheader['act-freight-amt'];
	$scope.totalSalesTax1= $scope.mainheader['total-sales-tax'];
	$scope.returNetAmt1=$scope.mainheader['return-net-amt'];
	$scope.custPayAmt1=$scope.mainheader['cust-pay-amt'];
	$scope.empPayAmt1=$scope.mainheader['emp-pay-amt'];
	if($scope.returnStatus=='7'||$scope.returnStatus=='9')
		{
		if($scope.totalLotsPrice!=''){
			$scope.merchandiseValue=$scope.totalLotsPrice;
		}
		else
			{
			$scope.merchandiseValue="0.00";
			}
		
	if($scope.actFreightAmt1!=''){
		$scope.actFreightAmt=$scope.actFreightAmt1;
	}
	else
		{
		$scope.actFreightAmt="0.00";
		}
	if($scope.totalSalesTax1!=''){
		$scope.totalSalesTax=$scope.totalSalesTax1;
	}
	else
		{
		$scope.totalSalesTax="0.00";
		}
	if($scope.returNetAmt1!=''){
		$scope.returNetAmt=$scope.returNetAmt1;
	}
	else
		{
		$scope.returNetAmt="0.00";
		}
	if($scope.programType!='2'||$scope.programType!='7')
	{
	if($scope.custPayAmt1=='')
		{
		$scope.custPayAmt=$scope.custPayAmt1;
		}
	else{
		$scope.custPayAmt="0.00";
	}
	}
	else if($scope.custPayAmt1=='')
		{
		$scope.custPayAmt=$scope.custPayAmt1;
		}
		else
		{
			$scope.custPayAmt="0pts";
		}
	if($scope.empPayAmt1=='')
		{
		$scope.empPayAmt=$scope.empPayAmt1;
		}
	else{
		$scope.empPayAmt="0.00";
	}
 }
	else{
		$scope.merchandiseValue="Not Available";
		$scope.actFreightAmt="Not Available";
		$scope.totalSalesTax="Not Available";
		$scope.returNetAmt="Not Available";
		$scope.custPayAmt="Not Available";
		$scope.empPayAmt="Not Available";
	}
	
	
	$scope.shipToName = $scope.mainheader['ship-to-name'];
	$scope.shipToAddress1 = $scope.mainheader['ship-to-address1'];
	$scope.shipToAddress2 = $scope.mainheader['ship-to-address2'];
	$scope.shipToCity = $scope.mainheader['ship-to-city'];
	$scope.shipToState = $scope.mainheader['ship-to-state'];
	$scope.shipToZip = $scope.mainheader['ship-to-zip'];
	$scope.shipToCountry = $scope.mainheader['ship-to-country'];    
	$scope.DetailShow=false;
	if($scope.returnStatus=='7'||$scope.returnStatus=='9')
		{
	
		if ($scope.returnDetail1.hasOwnProperty('detail'))
			{
			$scope.detail = $scope.returnDetail1['detail'];
			$scope.DetailShow=true;
			

			}
		}
 
 })
 .error(function (data, status, header, config) {
 	
     $scope.ResponseDetails = "Data: " + data +
         "<hr />status: " + status +
         "<hr />headers: " + header +
         "<hr />config: " + config;
   $log.log("post method is failed");
 });

});



app.controller("orderCustomizationCtrl", function($scope, $http, $log, $window,
		$sessionStorage, ViewCustService) {
	// alert("orderCust");
	$scope.orderCustom = ViewCustService.getData();
	$log.log("orderCustom::" + JSON.stringify($scope.orderCustom));
	
});

app
		.controller(
				"myAccountCtrl",
				function($scope, $http, $log, $window, $sessionStorage,$localStorage) {

					// alert("Lanching My account");

					var data = $.param({
						"txtUserId" : $sessionStorage.sesUserName,
						"txtPassword" : $sessionStorage.sesPasword,
						"actionID" : "rwd/prg/login/viewbalance",
						"hpageId" : "UNIFORMS_LOGIN_PAGE",
						"h_CustID" : "UNIFORMS_LOGIN_PAGE",
						"hScreenId" : "chooseprogram",
						"programCode" : $sessionStorage.sesprgCode,
						"hAllot" : "0"
					});

					var config = {
						headers : {
							'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
						}
					};

					//$http.post(appURL + "/ViewBalance", data)
					//Defect# 8068
					var serverUrl=document.URL;
		             var res = serverUrl.split("/", 3);
		             var serverName  = res[0]+"//"+res[2];                 
		        	$http.post(serverName+appURL+"/ViewBalance",data)
		//Defect# 8068
							.success(
									function(data, status, headers, config) {

										$scope.PostDataResponse = data;
										$scope.Work = $scope.PostDataResponse['work'];
										$scope.ViewBalance = $scope.Work['view-balance'];
										$scope.Allowance = $scope.ViewBalance['allowance'];
										$scope.Allotment = $scope.ViewBalance['allotment'];
										$scope.progType = $scope.Work['program-type'];

										// $sessionStorage.totalBasicBalance =
										// $scope.Allowance.original.total.value;

										var fromDate = $scope.Allowance['from-date'];
										var toDate = $scope.Allowance['to-date'];

										var fromD = fromDate
												.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
										$scope.fromDate = fromD[2] + "/"
												+ fromD[3] + "/" + fromD[1];

										var toD = toDate
												.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
										$scope.toDate = toD[2] + "/" + toD[3]
												+ "/" + toD[1];

										$scope.returns = $scope.Allowance.balance['cust-credit'];

										if ($scope.Allowance.balance['emp-credit'] === ""
												|| $scope.Allowance.balance['emp-credit'] === "0") {

											$scope.employeeOriginal = "0.00";
										} else {

											$scope.employeeOriginal = $scope.Allowance.balance['emp-credit'];
										}

										if ($scope.Allowance['shopping-cart'].basic === ""
												|| $scope.Allowance['shopping-cart'].basic === "0") {

											$scope.shoppingcartBasic = "0.00";
										} else {

											$scope.shoppingcartBasic = $scope.Allowance['shopping-cart'].basic;
										}

										if ($scope.Allowance['shopping-cart']['emp-credit'] === ""
												|| $scope.Allowance['shopping-cart']['emp-credit'] === "0") {

											$scope.shoppingcartEmpCrd = "0.00";
										} else {

											$scope.shoppingcartEmpCrd = $scope.Allowance['shopping-cart']['emp-credit'];
										}

										if ($scope.Allowance.balance['emp-credit'] === ""
												|| $scope.Allowance.balance['emp-credit'] === "0") {

											$scope.employeeBalance = "0.00";
										} else {

											$scope.employeeBalance = $scope.Allowance.balance['emp-credit'];
										}

										if ($scope.Allowance['shopping-cart'].shared1.value === ""
												|| $scope.Allowance['shopping-cart'].shared1.value === "0") {

											$scope.shopingCartShared1 = "0.00";
										} else {

											$scope.shopingCartShared1 = $scope.Allowance['shopping-cart'].shared1.value;
										}

										if ($scope.Allowance['shopping-cart'].shared2.value === ""
												|| $scope.Allowance['shopping-cart'].shared2.value === "0") {

											$scope.shopingCartShared2 = "0.00";
										} else {

											$scope.shopingCartShared2 = $scope.Allowance['shopping-cart'].shared2.value;
										}

										var temp0 = $scope.Allowance.balance['cust-credit'];
										var temp1 = $scope.Allowance.original.basic;
										var temp2 = $scope.Allowance.used.basic;
										var temp3 = $scope.Allowance['shopping-cart'].basic;
										var temp4 = "0.00";
										var temp5 = "0.00";
										var temp6 = "0.00";
										var temp7 = $scope.Allowance.original.shared1.value;
										var temp8 = $scope.Allowance.used.shared1.value;
										var temp9 = $scope.Allowance['shopping-cart'].shared1.value;
										var temp10 = $scope.Allowance.original.shared2.value;
										var temp11 = $scope.Allowance.used.shared2.value;
										var temp12 = $scope.Allowance['shopping-cart'].shared2.value;

										var bal1 = parseFloat(temp1)
												- parseFloat(temp2)
												+ parseFloat(temp3);
										var bal2 = parseFloat(temp4)
												- parseFloat(temp5)
												+ parseFloat(temp6);
										var bal3 = parseFloat(temp7)
												- parseFloat(temp8)
												+ parseFloat(temp9);
										var bal4 = parseFloat(temp10)
												- parseFloat(temp11)
												+ parseFloat(temp12);

										$scope.AvailableCrdtShard1 = (parseFloat(temp7)
												- parseFloat(temp8) + parseFloat(temp9))
												.toFixed(2);
										$scope.AvailableCrdtShard2 = (parseFloat(temp10)
												- parseFloat(temp11) + parseFloat(temp12))
												.toFixed(2);
										$scope.TotalOriginal = (parseFloat(temp1)
												+ parseFloat(temp4)
												+ parseFloat(temp7) + parseFloat(temp10))
												.toFixed(2);
										$scope.TotalUsedPriv = (parseFloat(temp2)
												+ parseFloat(temp5)
												+ parseFloat(temp8) + parseFloat(temp11))
												.toFixed(2);
										$scope.TotalShopCart = (parseFloat(temp12)
												+ parseFloat(temp3)
												+ parseFloat(temp6) + parseFloat(temp9))
												.toFixed(2);
										$scope.AvailableCrdtRtn = (parseFloat(bal1)
												+ parseFloat(bal2)
												+ parseFloat(bal3) + +parseFloat(bal4))
												.toFixed(2);
										$scope.Basicbalance = (parseFloat(temp1)
												- parseFloat(temp2)
												+ parseFloat(temp3) + parseFloat(temp0))
												.toFixed(2);
										$scope.EmpCrdtbalance = (parseFloat(temp4)
												- parseFloat(temp5) + parseFloat(temp6))
												.toFixed(2);

										$sessionStorage.totalBasicBalance = $scope.Basicbalance; // To
																									// display
																									// Balance
																									// in
										//added for contactus session management															// Header
										$localStorage.totalBasicBalance = $scope.Basicbalance;

									}).error(
									function(data, status, header, config) {
										$scope.ResponseDetails = "Data: "
												+ data + "<hr />status: "
												+ status + "<hr />headers: "
												+ header + "<hr />config: "
												+ config;
										$log.log("post method is failed");
									});

					var data = $.param({

						"txtUserId" : $sessionStorage.sesUserName,
						"txtPassword" : $sessionStorage.sesPasword,
						"actionID" : "rwd/prg/login/ordertrack/orderhistory",
						"hpageId" : "chooseprogram",
						"h_CustID" : "UNIFORMS_LOGIN_PAGE",
						"optProgCode" : $sessionStorage.sesprgCode,
						"prgCode" : $sessionStorage.sesprgCode,
						"hdnPrgCode" : $sessionStorage.sesprgCode,
						"txtStyleSheet" : "vfstyle.css",
						"hScreenId" : "PRG_Welcome",
						"hHomeFlag" : "1",
						"txtCartEmpty" : "Y",

					});

					//$http.post(appURL + "/OrderHistory", data)
					//Defect# 8068
					var serverUrl=document.URL;
		             var res = serverUrl.split("/", 3);
		             var serverName  = res[0]+"//"+res[2];                 
		        	$http.post(serverName+appURL+"/OrderHistory",data)
		//Defect# 8068
							.success(
									function(data, status, headers, config) {
										$scope.resultDisplay=false;
										$scope.PostDataResponse = data;
										$scope.Work = $scope.PostDataResponse.work;
										//$log.log("data-orderHistory123::"+ JSON.stringify($scope.Work));
										$scope.orderHistory = $scope.Work['order-history'];
										$scope.searchorder = $scope.orderHistory['search-order'];
										$scope.searchresult = $scope.orderHistory['search-result'];
										$scope.idToDate = new Date($scope.searchorder['to-od']);
										$scope.idFromDate = new Date($scope.searchorder['from-od']);

								 
										if ($scope.orderHistory.hasOwnProperty('return-message')){
											$scope.data="You have no Order to display";
											$scope.resultDisplay=true;
										}
										else{
											$scope.resultDisplay=false;
									 
									 
										
										
										
										 
										// To display list of order
										$scope.data1 = [];
										angular.forEach($scope.searchresult,function(searchresult,index) {
										angular.forEach(searchresult.order1,function(order,index) {
											$scope.data1.push(order);
										    });
										});
										
										$scope.serachResultLength = $scope.orderHistory['search-result'].length;
										
										var searchLen = $scope.data1.length;
										 
										
										
									//	if(searchLen > 0){  
											
										 //  $log.log("Last data-order::------>"+ JSON.stringify($scope.data1[searchLen-1]));		
										
										//}		
										console.log("serachResultLength His :   : " +  JSON.stringify($scope.serachResultLength));
										console.log("Order His :   : " +  searchLen);
										var i = 0;
										 for( i = 0;i<searchLen ; i++){
											 
											console.log("Out --->: " + i);
											 var status = $scope.data1[i]['order-status'];
											 if(status == "Billed" || status == "Shipped" || status == "Entered"   ){
												 console.log("Date in  --->: " + JSON.stringify($scope.data1[i]));
												 break;
											 }
											 
										 } 
										
									 
										//i = 8;

											var data = $
													.param({

														"txtOrderInv" : $scope.data1[i]['order-inv'],
														"txtToDate" : $scope.searchorder['to-od'],
														"hDontShowPO" : "0",
														"txtFromDate" : $scope.searchorder['from-od'],
														"hCboSelect" : "DT",
														"hPageNoOrderDetail" : "1",
														"txtOrderStatus" : $scope.data1[i]['order-status-short-value'],
														"hOrderNo" : $scope.data1[i]['order-no'],
														"txtOrderNo" : $scope.data1[i]['order-no'],
														"txtUserId" : $sessionStorage.sesUserName,
														"InvoiceOrderDate" : $scope.data1[i]['order-date'],
														"txtPassword" : $sessionStorage.sesPasword,
														"actionID" : "rwd/prg/login/ordertrack/orderhistory/orderdetail",
														"optProgCode" : $sessionStorage.sesprgCode,
														"prgCode" : $sessionStorage.sesprgCode,
														"hdnPrgCode" : $sessionStorage.sesprgCode,
														"hpageId" : "chooseprogram",
														"txtStyleSheet" : "vfstyle.css",
														"hScreenId" : "PRG_Welcome",
														"h_CustID" : "UNIFORMS_LOGIN_PAGE",
														"cboOrderBy" : "DT",
														"txtCartEmpty" : "Y",
														"hPageNo" : "1",
														"hNextOrderNo" : $scope.data1[searchLen - 1]['order-no'],
														"hNextOrderTS" : $scope.data1[searchLen - 1]['order-ts'],
														"hCommentCard " : "NULL",
														"fromRWDWebService" : "Y"

													});

											//$http.post(appURL + "/OrderDetail",data)
											//Defect# 8068
											var serverUrl=document.URL;
								             var res = serverUrl.split("/", 3);
								             var serverName  = res[0]+"//"+res[2];                 
								        	$http.post(serverName+appURL+"/OrderDetail",data)
								//Defect# 8068
													.success(
															function(data,
																	status,
																	headers,
																	config) {
																$scope.orderHistoryData = data;
																var dataval = JSON
																		.stringify($scope.orderHistoryData);
																console
																		.log("Data  in orderDetail page===>>>"
																				+ dataval
																				+ "-----"
																				+ status);

																$scope.orderdetail = $scope.orderHistoryData['work']['order-detail'];

																$scope.scean7ImagePath = $scope.orderHistoryData['work']['scene7-image-path'];

																$scope.detail = $scope.orderdetail['detail'];

																/*
																 * $scope.programInfo =
																 * $scope.work['program-info'];
																 * $scope.curdatebefbuyfromDate =
																 * $scope.programInfo['cur-date-before-buying-from-date'];
																 * $scope.archivalOrderFlag =
																 * $scope.work['archival-order-flag'];
																 * $scope.reshipStatus =
																 * $scope.work['reshipStatus'];
																 * $scope.isCancelOrderEnable =
																 * $scope.work['isCancelOrderEnable'];
																 * $scope.onlineRetProEle =
																 * $scope.mainheader['online-return-process-elements'];
																 * $scope.custRetPolicy =
																 * $scope.onlineRetProEle['cust-ret-policy'];
																 * $scope.stdRetPolicy =
																 * $scope.onlineRetProEle['std-ret-policy'];
																 */

															})
													.error(
															function(data,
																	status,
																	header,
																	config) {
																$scope.ResponseDetails = "Data: "
																		+ data
																		+ "<hr />status: "
																		+ status
																		+ "<hr />headers: "
																		+ header
																		+ "<hr />config: "
																		+ config;
																$log
																		.log("post method is failed");
															});

										}

									}).error(
									function(data, status, header, config) {

										$scope.ResponseDetails = "Data: "
												+ data + "<hr />status: "
												+ status + "<hr />headers: "
												+ header + "<hr />config: "
												+ config;
										$log.log("post method is failed");
									});

				});

app
		.controller(
				"ProfileController",
				function($scope, $http, $log, $window, chooseProgramService,
						$sessionStorage) {
					// alert("inside checkprofile");

					delete $http.defaults.headers.post['Content-type'];

					$scope.checkProfile = function() {
						var data = $.param({

							"txtUserId" : $sessionStorage.sesUserName,
							"txtPassword" : $sessionStorage.sesPasword,
							"huserId" : $sessionStorage.sesUserName,
							"crtProfileTxn" : "0",
							"card_expirationYear" : "17",
							"Source" : "website",
							"actionID" : "rwd/ics/checkProfileData",
							"card_expirationMonth" : "11",
							"requestFlag" : "C",
							"accountNumber" : "1491433",
							"cvv-code" : "016",
							"card-type" : "VI",
							"maskedCCNo" : "4111111111",
							"line-no" : "1",
							"subscription_type" : "E",
							"arEdpNo" : "65318410004"

						});
						//$http.post(appURL + "/CheckProfile", data)
						//Defect# 8068
						var serverUrl=document.URL;
			             var res = serverUrl.split("/", 3);
			             var serverName  = res[0]+"//"+res[2];                 
			        	$http.post(serverName+appURL+"/CheckProfile",data)
			//Defect# 8068

								.success(
										function(data, status, headers, config) {

											$scope.ProfileData = data;
											var url = "#hello";
											$window.location.href = url;
											$log.log(data);

											if (data != null) {
												$scope
														.ProfileCheckResponseData($scope.ProfileData['work']);
											}

										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
											$log.log("post method is failed");
										});
					};

					// siva
					// this fucntion will validate the profile check response
					// data
					$scope.ProfileCheckResponseData = function(profileDatawork) {

						var isProfileRequired = profileDatawork['card-profile-data']['is-profile-creation-req'];
						var profilesCreateObj = profileDatawork['CC-Profiles-Create']['Profile-Creation-Request-Data'];
						$log.log(profileDatawork);
						// Profile Not Exists
						if (isProfileRequired && isProfileRequired == "Y") {
							var cardNumber = profilesCreateObj['comvfcardnumber'];
							// api call to get the subscription ID
							console.log('isProfileRequired in')

							var data = $.param({

								"txtUserId" : $sessionStorage.sesUserName,
								"txtPassword" : $sessionStorage.sesPasword,
								"huserId" : $sessionStorage.sesUserName,
								"crtProfileTxn" : "0",
								"card_expirationYear" : "17",
								"Source" : "website",
								"actionID" : "rwd/ics/createNewProfile",
								"card_expirationMonth" : "11",
								"requestFlag" : "C",
								"accountNumber" : "1491433",
								"cvv-code" : "016",
								"card-type" : "VI",
								"maskedCCNo" : "4111111111",
								"line-no" : "1",
								"subscription_type" : "E",
								"arEdpNo" : "65318410004",
								"comvfdatastore" : "",
								"subscriptionID" : "12345",
								"maskedPinNo" : "41111111"

							});

							//$http.post(appURL + "/CreateProfile", data)
							//Defect# 8068
							var serverUrl=document.URL;
				             var res = serverUrl.split("/", 3);
				             var serverName  = res[0]+"//"+res[2];                 
				        	$http.post(serverName+appURL+"/CreateProfile",data)
				//Defect# 8068

							.success(function(data, status, headers, config) {
								// alert('cresate profile');
								$log.log(data);

							}).error(
									function(data, status, header, config) {
										$scope.ResponseDetails = "Data: "
												+ data + "<hr />status: "
												+ status + "<hr />headers: "
												+ header + "<hr />config: "
												+ config;
										$log.log("post method is failed");
									});
						}
						;

					};
				});
app.directive(
		"owlCarousel",
		function() {
			return {
				restrict : 'E',
				transclude : false,
				link : function(scope) {
					scope.initCarousel = function(element) {
						// provide any default options you want
						var defaultOptions = {};
						var customOptions = scope.$eval($(element).attr(
								'data-options'));
						// combine the two options objects
						for ( var key in customOptions) {
							defaultOptions[key] = customOptions[key];
						}
						// init carousel
						var curOwl = $(element).data('owlCarousel');
						if (!angular.isDefined(curOwl)) {
							$(element).owlCarousel(defaultOptions);
						}
						scope.cnt++;
					};

					$('[data-toggle="popover"]').popover();
					$('.picZoomer').picZoomer(); // zoom picker
					$(function() {
						$(document).on("click", "#submit_btn", function(event) {
							$("#submit_btn").removeClass("modal-backdrop.in");
						});
					});

				}
			};
		}).directive('owlCarouselItem', [ function() {
	return {
		restrict : 'A',
		transclude : false,
		link : function(scope, element) {
			// wait for the last item in the ng-repeat then call init
			if (scope.$last) {
				scope.initCarousel(element.parent());
			}
		}
	};
} ]);

app.controller('ModalCtrl_spr', function($scope, $rootScope, ngDialog) {

	$('[data-toggle="popover"]').popover();
});

app.controller("returnItemsController",function($scope, $http,$location, $log, $window,$sessionStorage,returnItemService,checkboxSelectedCountService) {
	
	$scope.txtRetQty=[];
	
	//added for Return_item
$scope.retrunDetail=returnItemService.getData();
$log.log("$scope.retrunDetail"+JSON.stringify($scope.retrunDetail));

$scope.returnwork=$scope.retrunDetail['work'];

$scope.orderDetail=$scope.returnwork['order-detail'];
$scope.InvoiceOrderDate=$scope.orderDetail['InvoiceOrderDate'];
$scope.searchOrder=$scope.orderDetail['search-order'];
$scope.toOd=$scope.searchOrder['to-od'];
$scope.fromOd=$scope.searchOrder['from-od'];
$scope.orderBy=$scope.returnwork['order-by'];
$scope.mainHeader=$scope.orderDetail['main-header'];
$scope.invoiceNo=$scope.mainHeader['invoice-no'];
$scope.orderNo=$scope.mainHeader['order-no'];
$scope.searchOrder=$scope.orderDetail['search-order'];
$scope.search_OrderNo=$scope.searchOrder['order-no'];
$scope.purchaseOrderNo=$scope.searchOrder['purchase-order-no'];
$scope.orderNoSearch=$scope.returnwork['order-no-serch'];
$scope.detail=$scope.orderDetail['detail'];
$scope.lineData=$scope.detail['line-data'];
$log.log("lineData"+JSON.stringify($scope.lineData));
$scope.orderstatus = $scope.orderDetail['order-status-short-value'];

if ($scope.lineData[0].hasOwnProperty('lot-id')) {
$scope.lotId=$scope.lineData[0]['lot-id'];
}
else
	$scope.lotId="";
$scope.dim1=$scope.lineData[0]['dim1'];
$log.log("dim1"+JSON.stringify($scope.dim1));
$scope.dim2=$scope.lineData[0]['dim2'];
$scope.orderQuantity=$scope.lineData[0]['order-quantity'];
if ($scope.lineData[0].hasOwnProperty('line-seq-no')) {
	$scope.lineSeqNo=$scope.lineData[0]['line-seq-no'];
}
	else
		$scope.lineSeqNo="";
$scope.orderInv=$scope.orderDetail['order-inv'];
$scope.hOrderDetailData1=$scope.lotId+"*"+$scope.dim1+"*"+$scope.dim2+"*"+$scope.orderQuantity+"*"+$scope.lineSeqNo;
$log.log("append"+$scope.hOrderDetailData1);
var data = $

		.param({
			
			"txtCartEmpty" : "Y",
			"txtInvoiceNo" :$scope.invoiceNo,
			"hFromNonProgWeb" : "Y",
		
			 "optProgCode":$sessionStorage.sesprgCode,
			   "prgCode":$sessionStorage.sesprgCode,
			   "hdnPrgCode":$sessionStorage.sesprgCode,
			"txtToDate" : $scope.toOd,
			"txtFromDate" :$scope.fromOd,
			"cboOrderBy" :$scope.orderBy,
			"stage" : "Authorized To Return",
			"txtUserId": $sessionStorage.sesUserName,
			   "txtPassword": $sessionStorage.sesPasword,
			"customer-type" : "Programmed",
			"InvoiceOrderDate" : $scope.InvoiceOrderDate,
			"hOrderSeqNo" : $scope.orderNo,
			"hOrderNo" : $scope.orderNo,
			"txtOrderNo" : $scope.orderNo,
			"txtOrderNumber" : $scope.orderNo,
			"txtSearchOrderNumber" : $scope.search_OrderNo,
			"txtPurchaseNo" : $scope.purchaseOrderNo,
			"hOrderNoSerch" :$scope.orderNoSearch,
			"hCommentCard" : "NULL",
			"hOrderDetailData" :$scope.hOrderDetailData1,
			// Hidden
			"txtOrderInv" : $scope.orderInv,
			"actionID" : "rwd/prg/orderhistory/orderdetail/return-request/getOrders",
			"txtStyleSheet" : "vfstyle.css",
			// "hHomeFlag" : "1",
			"hpageId" : "chooseprogram",
			"txtOrderStatus" :$scope.orderstatus,
			// "siteType":"P",
			"hScreenId" : "PRG_OrderDetail",
			"hideonweb" : "0",
			"h_CustID" : "UNIFORMS_LOGIN_PAGE",
			"customer-type" :"Programmed"
			

		});
var serverUrl=document.URL;         
var res = serverUrl.split("/", 3);
var serverName  = res[0]+"//"+res[2]; 
$http.post(serverName+appURL+"/ReturnItems",data)

.success(
	function(data, status, headers, config) {

		$scope.ReturnData = data;
		
		
		var dataval = JSON
				.stringify($scope.ReturnData);
		console
				.log("Data in return items page===>>>"
						+ dataval);
		$scope.work=$scope.ReturnData['work'];
		$scope.epdno=$scope.work['orders']['order']['edpNumber'];
		$scope.orderNo=$scope.work['orders']['order']['number'];

		$scope.customerPO=$scope.work['orders']['order']['customerPO'];
		$scope.billedDate=$scope.work['orders']['order']['billedDate'];
		$scope.progCode=$scope.work['orders']['order']['progCode'];
		$scope.validReasonCode=$scope.work['orders']['reason-codes-data']['reason-code-for-web']['valid-reason-code'];
		
		 $scope.onCategoryChange = function () {
			 $scope.validReason1= $scope.validReason['reason-code-for-web-details'];
			
		       console.log("Selected Value: " + $scope.validReason['serial-no'] + "\nSelected Text: " + $scope.validReason['reason-code-for-web-details']);

		    };
		    
		   
		$log.log("validReasonCode"+JSON.stringify($scope.validReasonCode));
		
		$scope.name=$scope.work['orders']['order']['ship-to']['name'];
		$scope.attenLine1=$scope.work['orders']['order']['ship-to']['atten-line-1'];
		if($scope.attenLine1!='')
			{
			$scope.attL1=$scope.attenLine1;
			}
		$scope.attenLine2=$scope.work['orders']['order']['ship-to']['atten-line-2'];
		/*if($scope.attenLine2!='')
			{
			$scope.att2=$scope.attenLine2;
			}*/
		$scope.addrLine1=$scope.work['orders']['order']['ship-to']['addr-line-1'];
		$log.log("addrLine1"+JSON.stringify($scope.addrLine1));
		$scope.addrLine2=$scope.work['orders']['order']['ship-to']['addr-line-2'];
		$log.log("addrLine2"+JSON.stringify($scope.addrLine2));
		if($scope.addrLine1==''&&$scope.addrLine2!='')
			{
			
		$scope.address=$scope.addrLine2;
		
			}
		else{
			
			$scope.address=$scope.addrLine1;
			
		}
		
		if($scope.addrLine1!=''&&$scope.addrLine2!='')
		{
		
	$scope.address=$scope.addrLine2;
	
		}
	else if($scope.addrLine1==''&&$scope.addrLine2!=''){
		
		$scope.address=$scope.addrLine2;
		
	}
	else{
		$scope.address="";
		
		
		
	}
		$log.log("address"+JSON.stringify($scope.address));
		$scope.city=$scope.work['orders']['order']['ship-to']['city'];
		$scope.state=$scope.work['orders']['order']['ship-to']['state'];
		$scope.country=$scope.work['orders']['order']['ship-to']['country'];
		$scope.zip=$scope.work['orders']['order']['ship-to']['zip'];

		
		
		
		
		$scope.billname=$scope.work['orders']['order']['bill-to']['name'];
		$scope.billattenLine1=$scope.work['orders']['order']['bill-to']['atten-line-1'];
		if($scope.billattenLine1!='')
			{
			$scope.billattL1=$scope.billattenLine1;
			}
		
		$scope.billaddrLine1=$scope.work['orders']['order']['bill-to']['addr-line-1'];
		$scope.billaddrLine2=$scope.work['orders']['order']['bill-to']['addr-line-2'];
		if($scope.billaddrLine1==''&&$scope.billaddrLine2!='')
			{
			
		$scope.billaddress=$scope.billaddrLine2;
			}
		else{
			
			$scope.billaddress=$scope.billaddrLine1;
		}
		
		if($scope.billaddrLine1!=''&&$scope.billaddrLine2!='')
		{
		
	$scope.billaddress=$scope.billaddrLine2;
		}
	else if($scope.billaddrLine1==''&&$scope.billaddrLine2!=''){
		
		$scope.billaddress="";
	}
	else{
		$scope.billaddress=$scope.billaddrLine2;
		
	}
		$scope.billcity=$scope.work['orders']['order']['bill-to']['city'];
		$scope.billstate=$scope.work['orders']['order']['bill-to']['state'];
		$scope.billcountry=$scope.work['orders']['order']['bill-to']['country'];
		$scope.billzip=$scope.work['orders']['order']['bill-to']['zip'];
		
		
		
		
		$scope.lineItem=$scope.work['orders']['details']['lineItem'];
		$log.log("lineItem"+JSON.stringify($scope.lineItem));
		var LineItem=$scope.lineItem
		$scope.lenLineItem=LineItem.length;
		$log.log("lenLineItem"+$scope.lenLineItem);
		
		
		//added for Return_item
		
	/*********************/
		
		
	$scope.returnItemAll=function()
		{
		var email = document.forms["myForm"]["email"].value;
		 var noQty = document.forms["myForm"]["txtRetQty"].value;
		 $log.log("noQty"+noQty);
		
		var re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		 $scope.email=document.forms["myForm"]["email"].value;
		
		
		if($scope.validReason1 === undefined){
		      alert('Plese Select Valid Reason Code');
		      return false;
		    }
		else if(email ==""){
				alert(message("1")+"Email");
				document.forms["myForm"]["email"].select();
				return false;
			} 
		   else if(!re_email.test(email)) 
	    {
		   alert(message("1")+"Valid Email");
		   document.forms["myForm"]["email"].select();
		   return false;
		   
		}	
		

		
		var i;
		var notAvailOrder=0;
		for(i=1;i<=$scope.lenLineItem;i++)
		{
		$log.log("i==>>"+i);	
			
		//$log.log("=====>>>"+$scope.lineItem[i-1]['display-on-web']);
			var hqty1 = document.getElementById("hQty"+i).innerHTML;
	    	var hqty=parseInt(hqty1);
			$log.log("hqty on Change::>>"+hqty);
			var hArQty1 = document.getElementById("hArQty"+i).innerHTML;
			var hArQty=parseInt(hArQty1);
			$log.log("hArQty on Change::>>"+hArQty);
			var nRetQty1 =hqty-hArQty;
			$log.log("nRetQty1 on Change::>>"+nRetQty1);
			
			
			
			
			
			 if(nRetQty1==0){
				document.getElementById("chkSelect"+i).checked = false;
				document.getElementById('txtRetQty'+i).value =nRetQty1;
				
			}
			else{
				if($scope.lineItem[i-1]['display-on-web'] =='Y')
					{
						notAvailOrder=notAvailOrder+nRetQty1;
				document.getElementById("chkSelect"+i).checked = true;
				document.getElementById('txtRetQty'+i).value =nRetQty1;
				$scope.txtRetQty[i]=nRetQty1;
				$log.log("RETQTY VALUE BY SYS++>"+$scope.txtRetQty[i]);
			}
			
			}
		}
		
		$log.log("Final_notAvailOrder"+notAvailOrder);
		if(notAvailOrder==0)
		{
			alert("Ordered quantity and already returned quantity are equal");
			
			return false;
		}
		//alert($scope.txtRetQty);
		
		
		
		
			
		
//$scope.edpNumber=$scope.work['orders']['order']['edpNumber'];
$scope.mktCo=$scope.work['orders']['order']['mktCo'];
$scope.date=$scope.work['orders']['order']['date'];

$scope.effectiveTaxDate=$scope.work['orders']['order']['effective-tax-date'];
//$scope.zip=$scope.work['orders']['order']['bill-to']['zip'];
$scope.employeeId=$scope.work['orders']['order']['employeeId'];
//$scope.billToCounty=$scope.work['orders']['order']['bill-to']['county'];
$scope.fromDate=$scope.work['orders']['from-date'];
$scope.addPriceDocPrint1=$scope.work['orders']['customer-info-details']['results'];
$log.log("customer-info1"+JSON.stringify($scope.addPriceDocPrint1));
$scope.addPriceDocPrint=$scope.work['orders']['customer-info-details']['results']['customer-info']['default-flags']['add-price-doc-print'];
$scope.employeeNumber=$scope.work['orders']['order']['employeeNumber'];
$scope.shippedFrom=$scope.work['orders']['order']['shippedFrom'];
//$scope.geoCode=$scope.work['orders']['order']['ship-to']['geo-code'];
$scope.billedDate=$scope.work['orders']['order']['billedDate'];
$scope.toDate=$scope.work['orders']['to-date'];
$scope.customerInfoDetails=$scope.work['orders']['customer-info-details']['other-data']['reason-codes-data']['reason-code-data']['ship-error'];
$scope.billToName=$scope.work['orders']['order']['bill-to']['name'];
$scope.employeeName=$scope.work['orders']['program-header']['employee-name'];
$scope.workGroupId=$scope.work['orders']['program-header']['work-group-id'];
$scope.orderStatus=$scope.work['orders']['order']['order-status'];
$scope.shipToCountry=$scope.work['orders']['order']['ship-to']['country'];
$scope.billToCountry=$scope.work['orders']['order']['bill-to']['country'];
$scope.displayPriceType=$scope.work['orders']['customer-info-details']['results']['customer-info']['info-data']['display-price-type'];
$scope.archiveFlag=$scope.work['orders']['order']['archive-flag'];
$scope.shipToState=$scope.work['orders']['order']['ship-to']['state'];
$scope.billToState=$scope.work['orders']['order']['bill-to']['state'];
$scope.locationId=$scope.work['orders']['customer-info-details']['default-location']['location-id'];
$scope.billToCity=$scope.work['orders']['order']['bill-to']['city'];
$scope.shipToCity=$scope.work['orders']['order']['ship-to']['city'];
$scope.shipToCounty=$scope.work['orders']['order']['ship-to']['county'];
$scope.dontSendCreditMemo=$scope.work['orders']['customer-info-details']['other-data']['reason-codes-data']['reason-code-data']['dont-send-credit-memo'];
$scope.programType=$scope.work['orders']['program-header']['program-type'];
$scope.shipToAddrLine2=$scope.work['orders']['order']['ship-to']['addr-line-2'];
$scope.billToAddrLine2=$scope.work['orders']['order']['bill-to']['addr-line-2'];
$scope.billToAddrLine1=$scope.work['orders']['order']['bill-to']['addr-line-1'];
$scope.InvoiceOrderDate=$scope.work['orders']['order']['InvoiceOrderDate'];
$scope.shipToZip=$scope.work['orders']['order']['ship-to']['zip'];
$scope.cartEmpty=$scope.work['cart-empty'];
$scope.billToAttenLine1=$scope.work['orders']['order']['bill-to']['atten-line-1'];
$scope.invoiceNumber=$scope.work['orders']['order']['invoiceNumber'];
$scope.pricingDate=$scope.work['orders']['order']['pricing-date'];

$scope.customerPO=$scope.work['orders']['order']['customerPO'];
$scope.custTaxApplicable=$scope.work['orders']['order']['cust-tax-applicable'];
$scope.defective=$scope.work['orders']['customer-info-details']['other-data']['reason-codes-data']['reason-code-data']['defective'];
$scope.noCreditDue=$scope.work['orders']['customer-info-details']['other-data']['reason-codes-data']['reason-code-data']['no-credit-due'];
$scope.shipToGeoCode=$scope.work['orders']['order']['ship-to']['geo-code'];

		
		if(fnValidate())
		{
			
			var selItem = checkboxSelectedCountService.getData();
			
			var data = $

			.param({
				
				
				"txtInvoiceNo" :$scope.invoiceNo,
				"hFromNonProgWeb" : "Y",
				"cboOrderBy" :$scope.orderBy,
				"stage" : "Authorized To Return",
				"customer-type" : "Programmed",
				"hOrderSeqNo" : $scope.orderNo,
				"hOrderNo" : $scope.orderNo,
				"txtOrderNo" : $scope.orderNo,
			    "txtSearchOrderNumber" : $scope.search_OrderNo,
				"txtPurchaseNo" : $scope.purchaseOrderNo,
				"hOrderNoSerch" :$scope.orderNoSearch,
				"hCommentCard" : "NULL",
				"hOrderDetailData" :$scope.hOrderDetailData1,
				"txtOrderInv" : $scope.orderInv,
				"hideonweb" : "0",
				"h_CustID" : "UNIFORMS_LOGIN_PAGE",
				
				
	
				"optProgCode":$sessionStorage.sesprgCode,
				"prgCode":$sessionStorage.sesprgCode,
				"hdnPrgCode":$sessionStorage.sesprgCode,
				"txtUserId": $sessionStorage.sesUserName,
				"txtPassword": $sessionStorage.sesPasword,
				"actionID" : "rwd/prg/orderhistory/orderdetail/return-request/CreateReturn",
				"txtStyleSheet" : "vfstyle.css",
				"billed"  : $scope.billedDate,
				"hLoggedInEDP"    :  $scope.epdno,
				"customer-mkt-co"    :  $scope.mktCo,
				"ref-order-date"    :  $scope.date,
				"ref-order-number"    :  $scope.orderNo,
				"effective-tax-date"    :  $scope.effectiveTaxDate,
				"fax-mra"    :  "0",
				"stage"    :  "New Return Request",
				"return-status"    :  "2",
				"return-credit-freight"    :  "0",
				"return-program"    :  $sessionStorage.sesprgCode,
				"bill-to-zip"    :  $scope.billzip,
				"employee-id"    :  $scope.employeeId,
				"bill-to-county"    :  $scope.billcountry,
				"total-amount"    :  "0.00",
				"txtEmailId"   :  $scope.email,
				//"chkSelect1"   :  "1",
				"txtFromDate"    :  $scope.fromDate,
				"add-price-doc-print"    : $scope.addPriceDocPrint,
				"return-to-program"    :   $sessionStorage.sesprgCode,
				"cust-emp-id"    :  $scope.employeeNumber,
				"ship-location-id"    :  $scope.shippedFrom,
				"ship-to-geo-code"    :  $scope.shipToGeoCode,
				"geo-code"   :  $scope.geoCode,
				"bill-date"  : $scope.billedDate,
				"txtToDate"   :  $scope.toDate,
				"hSelect"   :  "Y",
				"ship-error"    : $scope.customerInfoDetails,
				"bill-to-name"   :  $scope.billToName,
				"hScreenId"    :  "NPG_ReturnItems",
				"ship-to-name"    :  $scope.employeeName,
				"allow-imp-value-required"   :  "0",
				"work-group-id"    : $scope.workGroupId,
				"txtOrderStatus"   : $scope.orderStatus,
				"ship-to-country"    :  $scope.shipToCountry,
				"edp-number"    :  $scope.epdno,
				"display-price-type"    : $scope.displayPriceType,
				"line-items"    :  $scope.geoCode,
				"total-grs-amount"    :  "0.00",
				"archive-flag"   : $scope.archiveFlag,
				"txtRetQty"    : angular.toJson($scope.txtRetQty),
				"line-empty"    :  "0",
				"ship-to-state"   : $scope.shipToState,
				"billed-date"   :  $scope.billedDate,
				"return-location"    :  $scope.locationId,
				"program-code"    :  $sessionStorage.sesprgCode,
				"bill-to-city"    : $scope.billToCity,
				"ship-to-city"    : $scope.shipToCity,
				"ship-to-county"    : $scope.shipToCounty,
				"direct-authorization"    :  "0",
				"do-not-send-credit-memo"    : $scope.dontSendCreditMemo,
				"program-customer"    :  "1",
				"hQty"    :  "4",
				"email-mra"    : "0",
				"program-type"    : $scope.programType,
				"bill-to-country"   :$scope.billToCountry,
				"ship-to-address2"   :  $scope.shipToAddrLine2,
				"hPageId"    :  "chooseprogram",
				"InvoiceOrderDate"    :  $scope.InvoiceOrderDate,
				"htxtMoreAcountsAdded"    :  "Y",
				"cboReasonCode"   :  $scope.validReason1,
				"processed"    :  "0",
				"ship-to-zip"    : $scope.shipToZip,
				"txtCartEmpty"    : $scope.cartEmpty,
				"bill-to-state"   : $scope.billToState,
				"bill-to-address2"    : $scope.billToAddrLine2,
				"bill-to-address1"    :  $scope.billToAddrLine1,
				"bill-to-atten-line1"    : $scope.billToAttenLine1,
				"hCommentCard"    :  "NULL",
				"is-from-web"    : "Y",
				"invoice-number"   :  $scope.invoiceNumber,
				"pricing-date"   : $scope.pricingDate,
				"txtOrderNumber"    :  $scope.number,
				"customer-po"    :  $scope.customerPO,
				"vertex-line"   :  "OR",
				"cust-tax-applicable"    :  $scope.custTaxApplicable,
				"defective"    : $scope.defective,
				"hArQty"   : "0",
				"no-credit-due"   : $scope.noCreditDue,
				"return-freight"    :  "0.00",
				"apply-restocking"    : "0",
				"edp-no"    :  $scope.epdno,
				"fromRWD" : "Y",
				"memo-number":"",
				"return-number":"",
				"customer-contact1":"",
				"customer-contact2":"",
				"reason-text":"",
				"authorization-reason":"",
				"ship-via":"",
				"call-tag-issued":"",
				"pick-area":"",
				"print-mra":"",
				"email-id":"",
				"ship-to-address1":"",
				"checkboxSelectedCount":selItem,
				//"line-items":$scope.shipToGeoCode,*/
				
				


				
			});
			var serverUrl=document.URL;         
            var res = serverUrl.split("/", 3);
            var serverName  = res[0]+"//"+res[2]; 
	$http.post(serverName+appURL+"/CreateReturn",data)

	.success(function(data, status, headers, config) {

				$scope.CreateReturnData = data;

				var dataval = JSON
						.stringify($scope.CreateReturnData);
				console
						.log("Data in return items page===>>>"
								+ dataval);
				$scope.Work=$scope.CreateReturnData['work'];

				if ($scope.Work
						.hasOwnProperty('info-message')) {
					$scope.infoMessage = $scope.Work['info-message'];
					console.log("infoMessage"
							+ $scope.infoMessage);
					$scope.message = $scope.infoMessage['message'];
					$scope.SuccessShow=true;
				}
				
			var myE11 = angular.element( document.querySelector( '#order_approved_msg' ) );
		myE11.addClass('loginBlk');
		myE11.removeClass('hide');

			}).error(
			function(data, status, header, config) {

				$scope.ResponseDetails = "Data: "
						+ data + "<hr />status: "
						+ status + "<hr />headers: "
						+ header + "<hr />config: "
						+ config;
				$log.log("post method is failed");
			});

		}
	

		
			
						
			
		}
	

		
		$scope.returnItem=function()
		{
			
		//	alert($scope.txtRetQty);	
			
//$scope.edpNumber=$scope.work['orders']['order']['edpNumber'];
$scope.mktCo=$scope.work['orders']['order']['mktCo'];
$scope.date=$scope.work['orders']['order']['date'];

$scope.effectiveTaxDate=$scope.work['orders']['order']['effective-tax-date'];
//$scope.zip=$scope.work['orders']['order']['bill-to']['zip'];
$scope.employeeId=$scope.work['orders']['order']['employeeId'];
//$scope.billToCounty=$scope.work['orders']['order']['bill-to']['county'];
$scope.fromDate=$scope.work['orders']['from-date'];
$scope.addPriceDocPrint1=$scope.work['orders']['customer-info-details']['results'];
$log.log("customer-info1"+JSON.stringify($scope.addPriceDocPrint1));
$scope.addPriceDocPrint=$scope.work['orders']['customer-info-details']['results']['customer-info']['default-flags']['add-price-doc-print'];
$scope.employeeNumber=$scope.work['orders']['order']['employeeNumber'];
$scope.shippedFrom=$scope.work['orders']['order']['shippedFrom'];
//$scope.geoCode=$scope.work['orders']['order']['ship-to']['geo-code'];
$scope.billedDate=$scope.work['orders']['order']['billedDate'];
$scope.toDate=$scope.work['orders']['to-date'];
$scope.customerInfoDetails=$scope.work['orders']['customer-info-details']['other-data']['reason-codes-data']['reason-code-data']['ship-error'];
$scope.billToName=$scope.work['orders']['order']['bill-to']['name'];
$scope.employeeName=$scope.work['orders']['program-header']['employee-name'];
$scope.workGroupId=$scope.work['orders']['program-header']['work-group-id'];
$scope.orderStatus=$scope.work['orders']['order']['order-status'];
$scope.shipToCountry=$scope.work['orders']['order']['ship-to']['country'];
$scope.billToCountry=$scope.work['orders']['order']['bill-to']['country'];
$scope.displayPriceType=$scope.work['orders']['customer-info-details']['results']['customer-info']['info-data']['display-price-type'];
$scope.archiveFlag=$scope.work['orders']['order']['archive-flag'];
$scope.shipToState=$scope.work['orders']['order']['ship-to']['state'];
$scope.billToState=$scope.work['orders']['order']['bill-to']['state'];
$scope.locationId=$scope.work['orders']['customer-info-details']['default-location']['location-id'];
$scope.billToCity=$scope.work['orders']['order']['bill-to']['city'];
$scope.shipToCity=$scope.work['orders']['order']['ship-to']['city'];
$scope.shipToCounty=$scope.work['orders']['order']['ship-to']['county'];
$scope.dontSendCreditMemo=$scope.work['orders']['customer-info-details']['other-data']['reason-codes-data']['reason-code-data']['dont-send-credit-memo'];
$scope.programType=$scope.work['orders']['program-header']['program-type'];
$scope.shipToAddrLine2=$scope.work['orders']['order']['ship-to']['addr-line-2'];
$scope.billToAddrLine2=$scope.work['orders']['order']['bill-to']['addr-line-2'];
$scope.billToAddrLine1=$scope.work['orders']['order']['bill-to']['addr-line-1'];
$scope.InvoiceOrderDate=$scope.work['orders']['order']['InvoiceOrderDate'];
$scope.shipToZip=$scope.work['orders']['order']['ship-to']['zip'];
$scope.cartEmpty=$scope.work['cart-empty'];
$scope.billToAttenLine1=$scope.work['orders']['order']['bill-to']['atten-line-1'];
$scope.invoiceNumber=$scope.work['orders']['order']['invoiceNumber'];
$scope.pricingDate=$scope.work['orders']['order']['pricing-date'];

$scope.customerPO=$scope.work['orders']['order']['customerPO'];
$scope.custTaxApplicable=$scope.work['orders']['order']['cust-tax-applicable'];
$scope.defective=$scope.work['orders']['customer-info-details']['other-data']['reason-codes-data']['reason-code-data']['defective'];
$scope.noCreditDue=$scope.work['orders']['customer-info-details']['other-data']['reason-codes-data']['reason-code-data']['no-credit-due'];
$scope.shipToGeoCode=$scope.work['orders']['order']['ship-to']['geo-code'];

			
			if(fnValidate())
			{
				
				var selItem = checkboxSelectedCountService.getData();
				
				var data = $

				.param({
					
					
					"txtInvoiceNo" :$scope.invoiceNo,
					"hFromNonProgWeb" : "Y",
					"cboOrderBy" :$scope.orderBy,
					"stage" : "Authorized To Return",
					"customer-type" : "Programmed",
					"hOrderSeqNo" : $scope.orderNo,
					"hOrderNo" : $scope.orderNo,
					"txtOrderNo" : $scope.orderNo,
				    "txtSearchOrderNumber" : $scope.search_OrderNo,
					"txtPurchaseNo" : $scope.purchaseOrderNo,
					"hOrderNoSerch" :$scope.orderNoSearch,
					"hCommentCard" : "NULL",
					"hOrderDetailData" :$scope.hOrderDetailData1,
					"txtOrderInv" : $scope.orderInv,
					"hideonweb" : "0",
					"h_CustID" : "UNIFORMS_LOGIN_PAGE",
					
					
		
					"optProgCode":$sessionStorage.sesprgCode,
					"prgCode":$sessionStorage.sesprgCode,
					"hdnPrgCode":$sessionStorage.sesprgCode,
					"txtUserId": $sessionStorage.sesUserName,
					"txtPassword": $sessionStorage.sesPasword,
					"actionID" : "rwd/prg/orderhistory/orderdetail/return-request/CreateReturn",
					"txtStyleSheet" : "vfstyle.css",
					"billed"  : $scope.billedDate,
					"hLoggedInEDP"    :  $scope.epdno,
					"customer-mkt-co"    :  $scope.mktCo,
					"ref-order-date"    :  $scope.date,
					"ref-order-number"    :  $scope.orderNo,
					"effective-tax-date"    :  $scope.effectiveTaxDate,
					"fax-mra"    :  "0",
					"stage"    :  "New Return Request",
					"return-status"    :  "2",
					"return-credit-freight"    :  "0",
					"return-program"    :  $sessionStorage.sesprgCode,
					"bill-to-zip"    :  $scope.billzip,
					"employee-id"    :  $scope.employeeId,
					"bill-to-county"    :  $scope.billcountry,
					"total-amount"    :  "0.00",
					"txtEmailId"   :  $scope.email,
					//"chkSelect1"   :  "1",
					"txtFromDate"    :  $scope.fromDate,
					"add-price-doc-print"    : $scope.addPriceDocPrint,
					"return-to-program"    :   $sessionStorage.sesprgCode,
					"cust-emp-id"    :  $scope.employeeNumber,
					"ship-location-id"    :  $scope.shippedFrom,
					"ship-to-geo-code"    :  $scope.shipToGeoCode,
					"geo-code"   :  $scope.geoCode,
					"bill-date"  : $scope.billedDate,
					"txtToDate"   :  $scope.toDate,
					"hSelect"   :  "Y",
					"ship-error"    : $scope.customerInfoDetails,
					"bill-to-name"   :  $scope.billToName,
					"hScreenId"    :  "NPG_ReturnItems",
					"ship-to-name"    :  $scope.employeeName,
					"allow-imp-value-required"   :  "0",
					"work-group-id"    : $scope.workGroupId,
					"txtOrderStatus"   : $scope.orderStatus,
					"ship-to-country"    :  $scope.shipToCountry,
					"edp-number"    :  $scope.epdno,
					"display-price-type"    : $scope.displayPriceType,
					"line-items"    :  $scope.geoCode,
					"total-grs-amount"    :  "0.00",
					"archive-flag"   : $scope.archiveFlag,
					"txtRetQty"    : angular.toJson($scope.txtRetQty),
					"line-empty"    :  "0",
					"ship-to-state"   : $scope.shipToState,
					"billed-date"   :  $scope.billedDate,
					"return-location"    :  $scope.locationId,
					"program-code"    :  $sessionStorage.sesprgCode,
					"bill-to-city"    : $scope.billToCity,
					"ship-to-city"    : $scope.shipToCity,
					"ship-to-county"    : $scope.shipToCounty,
					"direct-authorization"    :  "0",
					"do-not-send-credit-memo"    : $scope.dontSendCreditMemo,
					"program-customer"    :  "1",
					"hQty"    :  "4",
					"email-mra"    : "0",
					"program-type"    : $scope.programType,
					"bill-to-country"   :$scope.billToCountry,
					"ship-to-address2"   :  $scope.shipToAddrLine2,
					"hPageId"    :  "chooseprogram",
					"InvoiceOrderDate"    :  $scope.InvoiceOrderDate,
					"htxtMoreAcountsAdded"    :  "Y",
					"cboReasonCode"   :  $scope.validReason1,
					"processed"    :  "0",
					"ship-to-zip"    : $scope.shipToZip,
					"txtCartEmpty"    : $scope.cartEmpty,
					"bill-to-state"   : $scope.billToState,
					"bill-to-address2"    : $scope.billToAddrLine2,
					"bill-to-address1"    :  $scope.billToAddrLine1,
					"bill-to-atten-line1"    : $scope.billToAttenLine1,
					"hCommentCard"    :  "NULL",
					"is-from-web"    : "Y",
					"invoice-number"   :  $scope.invoiceNumber,
					"pricing-date"   : $scope.pricingDate,
					"txtOrderNumber"    :  $scope.number,
					"customer-po"    :  $scope.customerPO,
					"vertex-line"   :  "OR",
					"cust-tax-applicable"    :  $scope.custTaxApplicable,
					"defective"    : $scope.defective,
					"hArQty"   : "0",
					"no-credit-due"   : $scope.noCreditDue,
					"return-freight"    :  "0.00",
					"apply-restocking"    : "0",
					"edp-no"    :  $scope.epdno,
					"fromRWD" : "Y",
					"memo-number":"",
					"return-number":"",
					"customer-contact1":"",
					"customer-contact2":"",
					"reason-text":"",
					"authorization-reason":"",
					"ship-via":"",
					"call-tag-issued":"",
					"pick-area":"",
					"print-mra":"",
					"email-id":"",
					"ship-to-address1":"",
					"checkboxSelectedCount":selItem,
					//"line-items":$scope.shipToGeoCode,*/
					
					


					
				});
				var serverUrl=document.URL;         
	             var res = serverUrl.split("/", 3);
	             var serverName  = res[0]+"//"+res[2]; 
		$http.post(serverName+appURL+"/CreateReturn",data)

		.success(function(data, status, headers, config) {

					$scope.CreateReturnData = data;

					var dataval = JSON
							.stringify($scope.CreateReturnData);
					console
							.log("Data in return items page===>>>"
									+ dataval);
					$scope.Work=$scope.CreateReturnData['work'];

					if ($scope.Work
							.hasOwnProperty('info-message')) {
						$scope.infoMessage = $scope.Work['info-message'];
						console.log("infoMessage"
								+ $scope.infoMessage);
						$scope.message = $scope.infoMessage['message'];
						$scope.SuccessShow=true;
					}
					
				var myE11 = angular.element( document.querySelector( '#order_approved_msg' ) );
			myE11.addClass('loginBlk');
			myE11.removeClass('hide');

				}).error(
				function(data, status, header, config) {

					$scope.ResponseDetails = "Data: "
							+ data + "<hr />status: "
							+ status + "<hr />headers: "
							+ header + "<hr />config: "
							+ config;
					$log.log("post method is failed");
				});

			}
		}
		
		
		function fnValidate()
		{
			
			
			var email = document.forms["myForm"]["email"].value;
			 var noQty = document.forms["myForm"]["txtRetQty"].value;
			 $log.log("noQty"+noQty);
			
			var re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			 $scope.email=document.forms["myForm"]["email"].value;
			
			
			if($scope.validReason1 === undefined){
			      alert('Plese Select Valid Reason Code');
			      return false;
			    }
			else if(email ==""){
					alert(message("1")+"Email");
					document.forms["myForm"]["email"].select();
					return false;
				} 
			   else if(!re_email.test(email)) 
		    {
			   alert(message("1")+"Valid Email");
			   document.forms["myForm"]["email"].select();
			   return false;
			   
			}	 
			
			
			
			
			//alert("checkAll:"+checkAll);
			var i;
			var select = "N";
			//$scope.checkboxId=[];
			//var lineChecked=$scope.lineItemCheck1;
			var checkVal = "";
			var nQty2="";
			for(i=1;i<=$scope.lenLineItem;i++)
				{
				$log.log("i===>>"+i);
				
				
					
				var data1=document.getElementById("chkSelect"+i);
				var SelectedCheckBox=document.getElementById("chkSelect"+i).id;
				
					
				
					$log.log("data1"+data1.checked);
					var qty = document.getElementById("txtRetQty"+i);
					
					//$log.log("qty1"+qty.value);
					if(data1 !=null)
					{
					
					var hqty = document.getElementById("hQty"+i).innerHTML;
					$log.log("hqty"+hqty);
					var arQty =document.getElementById("hArQty"+i).innerHTML;		
					$log.log("arQty"+arQty);
			    	 nQty2 = parseInt(qty.value);
			    	$log.log("nQty===>"+nQty2);
			    	
			    	
			    	
			    	if(isNaN(nQty2)==false)
			    		{
			    	$scope.txtRet=nQty2;
			    	$log.log("nQty===>"+$scope.txtRet);
			    	
					}
			    	var nHqty2 = parseInt(hqty);
					var nArqty2 = parseInt(arQty);
					
					if(data1.checked)
			    	{
		    			select = "Y";
		    			//$scope.checkboxId.push(SelectedCheckBox);
		    			checkVal += SelectedCheckBox +"|";
		    			//alert(checkVal);
		    			
		    		} 	
				

					if( data1.checked &&(qty.value==undefined || qty.value=='' || qty.value == null))
					{
						alert("Please enter quantity to return items");	
						
						return false;
					}
				
					else if(data1.checked && !isInteger(qty.value))
					{
						alert(message(5)+"Quantity.");
						//document.frmReturnItems.txtRetQty.focus();		
						return false;
					}
					else if(data1.checked && !isIntegerInRange(qty.value,1,9999))
					{
						alert(message(22));
						qty.focus();		
						return false;
					}
					
					else if(data1.checked && hqty != null && nQty2 > nHqty2)
					{
						alert("Return quantity is greater than the ordered quantity");
						qty.focus();
						return false;
					}
					
					else if(data1.checked && hqty != null && nArqty2 == nHqty2)
					{
						alert("Ordered quantity and already returned quantity are equal");
						qty.focus();
						return false;
					}
					
					else if(data1.checked && nArqty2 > nHqty2)
					{
						alert("Return Qty is greater than the difference between Ordered Qty and Already Ret Qty.");
						qty.focus();
						return false;
					}		
				
				
				}
			}
			
			//alert("full : "+checkVal);
			
			$log.log("PUSHED ITEM===>>>"+(checkVal));
			//checkboxSelectedCountService.setData($scope.checkboxId);
			
			checkboxSelectedCountService.setData(checkVal);
					if(select=="N")
					{
						alert("Please select the line items to return the order.");
						return false;
					}
					
					return true;
		}

		
		
		
		$scope.onChange = function(lineItemChecked,idx,qty) {
			
			
			console.log(lineItemChecked,idx,qty);
			$scope.lineItemCheck1=lineItemChecked;
			console.log("lineItemChecked123"+$scope.lineItemCheck1);
			 
		    if (lineItemChecked) {
		    	//alert("check");
		    	
		    	
		    	var data = document.getElementById("chkSelect"+idx);
		    	
				$log.log("data on change"+data);
				var retQty=document.getElementById("txtRetQty"+idx).value;
				
				$log.log("retQty on change"+retQty);
				
		    	var hqty1 = document.getElementById("hQty"+idx).innerHTML;
		    	var hqty=parseInt(hqty1);
				$log.log("hqty on Change::>>"+hqty);
				var hArQty1 = document.getElementById("hArQty"+idx).innerHTML;
				var hArQty=parseInt(hArQty1);
				$log.log("hArQty on Change::>>"+hArQty);
				var nRetQty1 =hqty-hArQty;
				$log.log("nRetQty1 on Change::>>"+nRetQty1);
				var nRetQty=parseInt(nRetQty1);
				$log.log("nRetQty on Change::>>"+nRetQty);
				var quantity = retQty;
				$log.log("quantity on Change::>>"+quantity);
				
				if((hArQty<hqty)&&( nRetQty!=0 )&&(nRetQty >0))
				{
					//alert("retQty");
					if(retQty!="")
					{	
						//alert("retQty is not empty");	
						
					}
					else{
						//alert("retQty is  empty");	
						document.getElementById('txtRetQty'+idx).value =nRetQty;
						retQty=document.getElementById("txtRetQty"+idx).value;
						$log.log("RETQTY VALUE BY SYS++>"+retQty);
						$scope.txtRetQty[idx]=retQty;
						$log.log("RETQTY VALUE BY SYS++>"+$scope.txtRetQty[idx]);
					}
					document.getElementById("txtRetQty"+idx).focus();
				}
				else if( nRetQty!=0)
				{
					alert("Return Qty is greater than the difference between Ordered Qty and Already Ret Qty.");
					document.getElementById("txtRetQty"+idx).focus();
				}

				else if( nRetQty==0)
				{
					alert("Ordered quantity and already returned quantity are equal");
					document.getElementById("txtRetQty"+idx).focus();
				}

				else if( quantity != '' && quantity != undefined && quantity !=null && quantity > nRetQty)
				{
					alert("Return quantity is greater than the ordered quantity");
					document.getElementById("txtRetQty"+idx).focus();
				}

				else
				{		
					retQty = "";
					document.getElementById("txtRetQty"+idx).focus();
				}
		    	
            } 
			else if(!lineItemChecked) {
            	
            	
            	document.getElementById('txtRetQty'+idx).value =null;
            	$scope.txtRetQty[idx]="";
				$log.log("RETQTY VALUE BY uncheck++>"+$scope.txtRetQty[idx]);
            	//alert("uncheck");
            }
		   
			
							
		  };
		  

	}).error(function(data, status, header, config) {

		$scope.ResponseDetails = "Data: "
				+ data + "<hr />status: "
				+ status + "<hr />headers: "
				+ header + "<hr />config: "
				+ config;
		$log.log("post method is failed");
	});

});



$(document).on('hidden.bs.modal', '.modal', function() {
	$('.modal:visible').length && $(document.body).addClass('modal-open');
});





