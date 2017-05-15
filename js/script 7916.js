

"use strict";
// Create AngularJS application


// routes configuration


var app = angular.module('demoLearningTurn', ['ngRoute','angular.backtop','me.mnmlst.ng-dummy','ngPopover','ngDialog','wt.responsive','ui.bootstrap']);
//var myApp = angular.module('demoLearningTurn', []);

	var myapp=angular.module('myapp',[]);
	
	
	
	
	app.controller('mainCtrl', ['$scope', function($scope) {

}]);

app.config(function($routeProvider){

	$routeProvider
	
	.when('/', {
			templateUrl : 'login.html',
			controller: 'mainCtrl' 
		})


		.when('/login', {
			templateUrl : 'login.html',
			controller: 'mainCtrl' 
		})

		   .when('/reports', {
            templateUrl: 'reports.html',
            controller: 'contactCtrl'
        })
                .when('/order_approval', {
            templateUrl: 'order_approval.html',
            controller: 'contactCtrl'
        })
		
	
		.when('/uniforms',{
			templateUrl: 'uniforms.html',
			controller: 'aboutCtrl'
		})
		
        .when('/contactus',{
			templateUrl: 'contactus.html',
			controller: 'aboutCtrl'
		})
				

                .when('/notifications',{
			templateUrl: 'notifications.html',
			controller: 'aboutCtrl'
		})

		
		.when('/myaccount',{
			templateUrl: 'myaccount.html',
			controller: 'aboutCtrl'
		})

.when('/selectprogram',{
			templateUrl: 'selectprogram.html',
			controller: 'aboutCtrl'
		})
.when('/change_password',{
			templateUrl: 'change_password.html',
			controller: 'aboutCtrl'
		})
		.when('/news',{
			templateUrl: 'news.html',
			controller: 'aboutCtrl'
		})
		.when('/shop_shirts',{
			templateUrl: 'shop_shirts.html',
			controller: 'aboutCtrl'
		})
				.when('/dress_uniforms',{
			templateUrl: 'dress_uniforms.html',
			controller: 'aboutCtrl'
		})
		.when('/makepayment', {
			templateUrl: 'makepayment.html',
			controller: 'contactCtrl'
		})

		
		.when('/confirmation_emp', {
			templateUrl : 'confirmation_emp.html',
			controller: 'mainCtrl' 
		})

		
.when('/customersupport',{
			templateUrl: 'customersupport.html',
			controller: 'aboutCtrl'
		})
				.when('/shippingaddress', {
			templateUrl: 'shippingaddress.html',
			controller: 'contactCtrl'
		})
.when('/viewbalance',{
			templateUrl: 'viewbalance.html',
			controller: 'aboutCtrl'
		})

   .when('/order_history',{
      templateUrl: 'order_history.html',
      controller: 'orderHistoryCtrl'
    })

    .when('/order_detail',{
      templateUrl: 'order_detail.html',
      controller: 'orderDetailCtrl'
    })
	    .when('/shopping_cart_emp',{
      templateUrl: 'shopping_cart_emp.html',
      controller: 'aboutCtrl'
    })

    .when('/return_items',{
      templateUrl: 'return_items.html',
      controller: 'returnItemsCtrl'
    })
	.when('/product_details', {
                templateUrl: 'product_details.html',
                controller: 'productDetailCtrl'
            })


		.when('/forgot-password', {
			templateUrl: 'forgot-password.html',
			controller: 'contactCtrl'
		});
});

// Create Controller with name mainCtrl

app.controller('mainCtrl', function($scope){

	$scope.msg = 'Wellcome to AngularJS Application Main Page';
});

/*
function MyCtrl ($scope) {
			alert("hi");
				$scope.toggleClass = function(){
alert();
	
    angular.element('#wrapper').toggleClass('toggled');
	    angular.element('#overlay').toggleClass('toggled');
	};
	
	
			}
			
*/

app.controller("masterController",["$scope","ngPopoverFactory",function(o,e){o.message="Click on any of the above buttons to see the popovers in action",o.openCallback=function(e){o.message="You just opened "+e},o.closeCallback=function(e){o.message="You just closed "+e},o.closePopover=function(o){e.closePopover(o)}}]);

	
			
// Create Controller with name aboutCtrl

app.controller('aboutCtrl', function($scope){
	$scope.msg = 'You are now at about us page';
});

// Create Controller with name contactCtrl

app.controller('contactCtrl', function($scope){
	$scope.msg = 'Cotact us! Jammy. its contact us demo page';
});
/*header*/
app.controller("expressionController", function($scope, $window) {
	 $scope.re = /^[0-9]{1,6}$/; /*for zipcode validation*/
// Show Div


$scope.showDiv = function() {
	$scope.showhideprop = true;
 var element = $window.document.getElementById("submit_button");
 element.focus();
};
 
// Hide Div
$scope.hideDiv = function () {
$scope.showhideprop = false;



}


});



/*end header*/




/*  var app = angular.module("app", []);*/
    app.controller("HttpGetController", function ($scope, $http) {

        $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                fName: $scope.formData.userid,
                pwd: $scope.formData.password
            });
        console.log("user input",data);
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/ServerRequest/PostDataResponse', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
				
            console.log("post method is success");
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
               console.log("post method is failed");
            });
        };
		
		

    });
/*var app = angular.module('urlApp', []); */
app.controller('urlCtrl_log', function ($scope, $log, $window) {
    $scope.ClickMeToRedirect_alert = function () {
		
        var url = "#selectprogram";
        $log.log(url);
        $window.location.href = url;
    };
});  
	
	 app.controller('TestController', function ($scope) {
function TestController() {

}

	}); 

 app.controller('urlCtrl', function ($scope) {
	 $scope.toggle = true;
	$scope.toggleClass = function() {
     var myEl = angular.element( document.querySelector( '#wrapper' ) );
     myEl.toggleClass('toggled');  
	$scope.toggle = $scope.toggle === false ? true : false;
   };

	}); 
	

app.controller('SearchCtrl',['$scope', function($scope){
        $scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };
}]);
	
 
 
  app.controller('urlCtrl', function ($scope) {
	 $scope.toggle = true;
	$scope.toggleClass = function() {
     var myEl = angular.element( document.querySelector( '#wrapper' ) );
     myEl.toggleClass('toggled');  
	$scope.toggle = $scope.toggle === false ? true : false;
   };

	});  

	app.controller("tabCtrl", function($scope) {
		
				$scope.activeTab = 1;
				
				$scope.setActiveTab = function(tabToSet) {
					$scope.activeTab = tabToSet;
				}
			});


app.config(['ngDialogProvider', function (ngDialogProvider) {
			
            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-default',
                plain: false,
                showClose: true,
                closeByDocument: true,
                closeByEscape: true,
                appendTo: false,
                preCloseCallback: function () {
                    console.log('default pre-close callback');
                }
            });
        }]);

        app.controller('MainCtrl1', function ($scope, $rootScope, ngDialog) {


            $scope.openInlineController1 = function () {
			
                $rootScope.theme = 'ngdialog-theme-plain';

                ngDialog.open({
					
                    template: 'withInlineController',
             
                    className: 'ngdialog-theme-plain'
                });
            };
			
			 $scope.openCart = function () {
			
                $rootScope.theme = 'ngdialog-theme-plain';

                ngDialog.open({
					
                    template: 'withOpenCart',
             
                    className: 'ngdialog-theme-plain'
                });
            };
			
        });
		
		  app.controller('ModalCtrl_spr', function ($scope, $rootScope, ngDialog) {

                  $('[data-toggle="popover"]').popover();
           
			
        });
		
		
		
app.controller('orderHistoryCtrl', function ($scope, $rootScope, $uibModal) {

    $scope.title = "Order History";
    $scope.product = {

    };

    $scope.toggleActive = true;

    $scope.activateToggle = function(){
        $scope.toggleActive = !$scope.toggleActive;
    };

    $scope.search = function(params={}){
        //Search Function
    };


        //Detail Function
    $scope.details = function (id) {
      var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'order_detail.html',
        controller: 'orderDetailCtrl',
        size: "size",
        resolve: {
          items: function () {
            return {};
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };     


    //This LIne For DatePicker
    $scope.today = function(dates) {
      if(dates==1){
        $scope.dt = new Date();
      }
      else{
        $scope.dt2 = new Date();
      };
    };
    // $scope.today();

    $scope.clear = function(dates) {
      if(dates==1){
        $scope.dt = null;
      }
      else{
        $scope.dt2 = null;
      };
    };

    $scope.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    $scope.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
      var date = data.date,
        mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
      $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
      $scope.dt2 = new Date(year, month, day);
    };

    $scope.altInputFormats = ['M!/d!/yyyy'];
    $scope.formats = ['MM dd yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    

    $scope.popup1 = {
      opened: false
    };

    $scope.popup2 = {
      opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];



    function getDayClass(data) {
      var date = data.date,
        mode = data.mode;
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i = 0; i < $scope.events.length; i++) {
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    }

});
app.controller('orderDetailCtrl', function ($scope, $rootScope, $location, $uibModalInstance) {
  // $scope.items = items;
  // $scope.selected = {
  //   item: $scope.items[0]
  // };

  $scope.ok = function() {
    // alert("Print Here");
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.goToDetail = function(id) {
  /*  alert("Go To Detail Product " + id);*/
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.goToReturnItems = function(){
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/return_items");
  };
});
app.controller('returnItemsCtrl', function ($scope) {

  $scope.returnItem = function () {

  };

  $scope.returnItemAll = function () {
 
  };
});






app.controller('mainCtrl2', function ($scope) {

    $scope.removeDIV = function() {

     var iEl = angular.element( document.querySelector( '#div2' ) );
     iEl.remove();
	 
	
    }

    }); 

 app.controller('mainCtrl_empty', function ($scope) {

    $scope.emptydiv = function() {

 
	    var iE2 = angular.element( document.querySelector( '#div_total' ) );
     iE2.remove();
    }

    }); 
 

 

app.controller('productDetailCtrl', function ($scope,  $location, $rootScope, ngDialog) {
    $scope.test = "test";
	alert();

    
/*      $(function() {
            $('.picZoomer').picZoomer(); // zoom picker
            $('.piclist').on('click',function(event){
                var $pic = $(this).find('img');
                $('.picZoomer-pic').attr('src',$pic.attr('src'));
            });
        });
		 */
		
/*
$('#redirect').click(function() {
    window.location.href = '/some/new/page';
    $("p:first").addClass("intro");
});
*/

        
 /* 
    $('#owl-single-product-thumbnails').owlCarousel({
        items: 3,
        pagination: true,
        rewindNav: true,
        itemsTablet: [768, 4],
        itemsDesktop: [1199, 3],
        itemsMobile: [1199, 3],
        navigation: true,
        navigationText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"]
    }); */

    $scope.scrollTo = function (hash) {
        console.log(hash);
        $location.hash(hash);
    };

    



});


 app.controller('open_url', function ($scope, $log, $window) {

    $scope.openurl = function() {

 
	  
		 var url = "#uniforms";
        $log.log(url);
        $window.location.href = url;
		
    }

    }); 