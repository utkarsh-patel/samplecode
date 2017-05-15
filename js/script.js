


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
		   .when('/reports-new', {
            templateUrl: 'reports-new.html',
            controller: 'contactCtrl'
        })
                .when('/order_approval', {
            templateUrl: 'order_approval.html',
            controller: 'orderHistoryCtrl'
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
			controller: 'aboutCtrl',
			
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

		
	.when('/employee_maintenance', {
                templateUrl: 'employee_maintenance.html',
                controller: 'orderApproveCtrl'
            })
			
   .when('/order_history',{
      templateUrl: 'order_history.html',
      controller: 'orderHistoryCtrl'
    })
	
	.when('/save_order',{
			templateUrl: 'save_order.html',
			controller: 'aboutCtrl'
		})
    .when('/unsent_orders',{
			templateUrl: 'unsent_orders.html',
			controller: 'aboutCtrl'
		}) 
		
    .when('/order_detail',{
      templateUrl: 'order_detail.html',
      controller: 'orderDetailCtrl'
    })
	.when('/add_unsent_order',{
      templateUrl: 'add_unsent_order.html',
      controller: 'aboutCtrl'
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
     .when('/order_customization',{
      templateUrl: 'order_customization.html',
      controller: 'aboutCtrl'
    })

		.when('/forgot-password', {
			templateUrl: 'forgot-password.html',
			controller: 'contactCtrl'
		})
		 .when('/order_approval_detail',{
      templateUrl: 'order_approval_detail.html',
      controller: 'orderapprovaldetailCtrl'
    })
	 .when('/see_location',{
      templateUrl: 'see_location.html',
      controller: 'seelocationCtrl'
    })
	 .when('/report_detail',{
      templateUrl: 'report_detail.html',
      controller: 'report_detailCtrl'
    })
	.when('/see_details',{
      templateUrl: 'see_details.html',
      controller: 'seedetailsCtrl'
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
	
	 app.controller('shippingaddressCtrl', function ($scope, $rootScope, $uibModal) {
		   $scope.cancel = function () {
alert('123');
    $uibModal.dismiss('cancel');
  };
  
  $scope.choose_city_state = function (id) {
		alert();
      var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'choose_city_state.html',
        controller: 'report_detailCtrl',
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

	app.controller("tabCtrl", function($scope,$log,$window) {
		
				$scope.activeTab = 1;
			
				$scope.setActiveTab = function(tabToSet) {
					$scope.activeTab = tabToSet;
				};
				
				
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
	app.controller('reportCtrl', function ($scope, $rootScope, $uibModal) {	
	  $scope.title = "Order History";
	          alert('alert');
			  //Detail Function
    $scope.report_details = function (id) {
		alert();
      var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'report_detail.html',
        controller: 'report_detailCtrl',
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
	    $scope.report_details_1 = function (id) {
		alert();
      var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'report_detail_1.html',
        controller: 'report_detailCtrl',
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


		 });
		 app.controller('report_detailCtrl', function ($scope, $rootScope, $location, $uibModalInstance) {


  $scope.cancel = function () {
	 
    $uibModalInstance.dismiss('cancel');
  };
  
$scope.hideclass_reportapproval = function() { 
   alert('hi');
	 	  $uibModalInstance.dismiss('cancel');
    $location.path("/reports-new");
	
	
	   var myEorder = angular.element( document.querySelector( '#rprt_approved_msg' ) );
myEorder.addClass('loginBlk');
myEorder.removeClass('hide');
    };
  





  
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
  $scope.cancel = function () {
alert('123');
    $uibModal.dismiss('cancel');
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



    


    
  $scope.approval_details = function (id) {

      var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'order_approval_detail.html',
        controller: 'orderapprovaldetailCtrl',
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
  $scope.see_details = function (id) {
alert();
      var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'see_details.html',
        controller: 'orderapprovaldetailCtrl',
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
	 $scope.see_location = function (id) {
alert();
      var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'see_location.html',
        controller: 'orderapprovaldetailCtrl',
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
	
	
	
	$scope.order_customization = function (id) {
alert();
      var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'order_customization.html',
        controller: 'orderapprovaldetailCtrl',
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
	   $scope.hideclass_orderapproval = function() { 
	 
	
	   
	   var myE41 = angular.element( document.querySelector( '#order_approved_msg' ) );
myE41.addClass('loginBlk');
myE41.removeClass('hide');
    };

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
  
   $scope.copyOrder = function(){
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/shopping_cart_emp");
  };
  
   $scope.modifyOrder = function(){
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/shopping_cart_emp");
  };

  $scope.goToReturnItems = function(){
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/return_items");
  };
  
    $scope.cancel_viewCustomization = function(){
	 
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/order_customization");
  };

  $scope.print_order = function(printSectionId) {
alert("print");

      

        var innerContents = document.getElementById(printSectionId).innerHTML;
		//var innerCloseButton = document.getElementByClass(closeBtn).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/vfistyle.css" /><link rel="stylesheet" type="text/css" href="css/angular-responsive-tables.css" /><link rel="stylesheet" type="text/css" href="css/table.css" /><link rel="stylesheet" type="text/css" href="css/vfi-mediaqueries.css" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></head><body onload="window.print()">' + innerContents + '<div class="col col-xs-12 col-sm-12 col-md-3 col-lg-2" style="padding:0px 0px 0px 15px;padding-top:10px;" onclick="window.close();"><input class="btn login-btn btn-lg btn-block" type="button" value="Print_Close"></div>' + '</html>');
        popupWinindow.document.close();
      };
  
});

app.controller('orderapprovaldetailCtrl', function ($scope, $rootScope, $location, $uibModalInstance) {
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
  
   $scope.copyOrder = function(){
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/shopping_cart_emp");
  };
  
   $scope.modifyOrder = function(){
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/shopping_cart_emp");
  };
  
  $scope.cancelOrder = function(){
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/order_history");
  };
  
 $scope.viewCustomization = function(){
	 
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/order_customization");
  };

  $scope.goToReturnItems = function(){
    // var item = $scope.selectedData;
    // $location.path("/return_items/"+item.id);
    $uibModalInstance.dismiss('cancel');
    $location.path("/return_items");
  };
  	   $scope.hideclass_orderapproval = function() { 
	  
	  $uibModalInstance.dismiss('cancel');
    $location.path("/order_approval");
	
	   var myE51 = angular.element( document.querySelector( '#order_approved_msg' ) );
	    
myE51.addClass('loginBlk');
myE51.removeClass('hide');
    };
	  	   $scope.reject_order = function() { 

	  $uibModalInstance.dismiss('cancel');
    $location.path("/order_approval");
	
	   var myE61 = angular.element( document.querySelector( '#reject_msg' ) );
	    
myE61.addClass('loginBlk');
myE61.removeClass('hide');
    };
  $scope.print_order = function(printSectionId) {

        var innerContents = document.getElementById(printSectionId).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/vfistyle.css" /><link rel="stylesheet" type="text/css" href="css/angular-responsive-tables.css" /><link rel="stylesheet" type="text/css" href="css/table.css" /><link rel="stylesheet" type="text/css" href="css/vfi-mediaqueries.css" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></head><body onload="window.print()">' + innerContents + '<div class="row"><div class="col col-xs-12 col-sm-12 col-md-3 col-lg-2 hide hide_in_print" style="padding:0px 0px 0px 15px;padding-top:10px;"><input class="btn login-btn btn-lg btn-block" type="button"  value="Close"> </div></div> ' + '</html>');
        popupWinindow.document.close();
      };
  
});
app.controller('printctrl', function ($scope) {

     $scope.print_order_conf = function(printSectionId_1) {
	
        var innerContents = document.getElementById(printSectionId_1).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/angular-responsive-tables.css" /><link rel="stylesheet" type="text/css" href="css/table.css" /><link rel="stylesheet" type="text/css" href="css/vfi-mediaqueries.css" /><link rel="stylesheet" type="text/css" href="css/custom.css" /><link rel="stylesheet" type="text/css" href="css/style.css" /><link rel="stylesheet" type="text/css" href="css/bootstrap.css" /><link rel="stylesheet" type="text/css" href="css/ngpopover.css" /><link rel="stylesheet" type="text/css" href="css/progressbar.css" /><link rel="stylesheet" href="css/font-awesome.min.css"></head><body onload="window.print()"><link rel="stylesheet" type="text/css" href="css/vfistyle.css" />' + innerContents + '</html>');
        popupWinindow.document.close();
      };

    });


app.controller('returnItemsCtrl', function ($scope) {

  $scope.returnItem = function () {

	  alert('Please select a Valid Reason Code');
	  var myE11 = angular.element( document.querySelector( '#order_approved_msg' ) );
myE11.addClass('loginBlk');
myE11.removeClass('hide');

  };


  $scope.returnItemAll = function () {
 
  };
      $(function () {
        $(document).on("click", "#submit_btn", function (event) {
            $("#submit_btn").removeClass("modal-backdrop.in");

        });
    });
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
	 var iE6 = angular.element( document.querySelector( '#showcontent' ) );
	iE6.addClass('loginBlk');
iE6.removeClass('hide');
	    var iE7 = angular.element( document.querySelector( '#showtotal' ) );

iE7.addClass('hide');
		iE7.removeClass('loginBlk');
    }

    }); 
 

 
app.controller('orderApproveCtrl', function ($scope, $rootScope, $timeout, $location, $anchorScroll) {

    $scope.pNo = 0;
    $scope.step = [];
    $scope.step[0] = true;
    $scope.step[1] = false;
    $scope.step[2] = false;
    $scope.nextFunction = function (val) {
        $scope.showLoader = true;
        console.log(val);
        $scope.step[0] = false;
        $scope.step[1] = false;
        $scope.step[2] = false;
        $scope.step[val] = true;
        $scope.pNo = val;
        $timeout(function () {
            $scope.showLoader = false;
        }, 1000);
    }
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
    $(".switch-state").bootstrapSwitch();
});


app.controller('productDetailCtrl', function ($scope, $location, $rootScope, ngDialog) {
    $scope.test = "test";
    $(function () {
        $('.picZoomer').picZoomer(); // zoom picker
        $('.piclist').on('click', function (event) {
            var $pic = $(this).find('img');
            $('.picZoomer-pic').attr('src', $pic.attr('src'));
        });
		$('#Blue').on('click', function (event) {
			$('#picDD option').eq(0).prop('selected', true);
		});
		$('#Khaki').on('click', function (event) {
			$('#picDD option').eq(1).prop('selected', true);
		});
		$('#Gray').on('click', function (event) {
			$('#picDD option').eq(2).prop('selected', true);
		});
		$('#Green').on('click', function (event) {
			$('#picDD option').eq(3).prop('selected', true);
		});
			$('#picDD').change(function () {
				var val =$('#picDD').val();
				$('.myimage').attr("src", pictureList[val]);
			});
    });
    var pictureList = [
        "images/shirts/WorkShirts-lg.jpg",
        "images/shirts/WorkShirts-lg-1.jpg",
        "images/shirts/WorkShirts-lg-2.jpg",
        "images/shirts/WorkShirts-lg-4.jpg"];


    
    $('#owl-single-product-thumbnails').owlCarousel({
        items: 3,
        pagination: true,
        rewindNav: true,
        itemsTablet: [768, 4],
        itemsDesktop: [1199, 3],
        itemsMobile: [1199, 3],
        navigation: true,
        navigationText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"]
    });   
    $('[data-toggle="popover"]').popover();
    $(function () {
        $(document).on("click", "#submit_btn", function (event) {
            $("#submit_btn").removeClass("modal-backdrop.in");
        });
    });
});


 app.controller('open_url', function ($scope, $log, $window) {

    $scope.openurl = function() {

		 var url = "#uniforms";
        $log.log(url);
        $window.location.href = url;
		
    }

    });
	
 app.controller('title_ctrl', function ($scope) {

    $scope.hideclass2 = function() {

 var myE2 = angular.element( document.querySelector( '#program_user1' ) );
myE2.addClass('hide');
myE2.removeClass('loginBlk');
 var myE1 = angular.element( document.querySelector( '#program_user' ) );
myE1.addClass('loginBlk');
myE1.removeClass('hide');
    }


    }); 
 app.controller('title_ctrl_1', function ($scope) {


	    $scope.hideclass1 = function() {


 var myE21 = angular.element( document.querySelector( '#program_user' ) );
myE21.addClass('hide');
myE21.removeClass('loginBlk');
 var myE11 = angular.element( document.querySelector( '#program_user1' ) );
myE11.addClass('loginBlk');
myE11.removeClass('hide');
    }

    }); 

