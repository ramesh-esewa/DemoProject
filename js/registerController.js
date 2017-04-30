app.controller('registerController', function($scope, userService){
// console.log("sdjhgagsdagsdjagsd");
	$scope.gender = ["Male","Female","N/A"];

	$scope.zones = [
	{"id":"1",
	"data":[
		{
			"zone_id":"1", "name":"Kathmandu","id":"1"
		},
		{
			"zone_id":"1", "name":"Lalitpur", "id":"2"
		},
		{
			"zone_id":"1", "name":"Bhaktapur", "id":"3"
		},
		{
			"zone_id":"1", "name":"Kabhrepalanchowk", "id":"4"
		},
		{
			"zone_id":"1", "name":"Sindhupalchowk", "id":"5"
		},
		{
			"zone_id":"1", "name":"Dhading", "id":"6"
		},
		{
			"zone_id":"1", "name":"Rasuwa", "id":"7"
		},
		{
			"zone_id":"1", "name":"Nuwakot", "id":"8"
		}
		],
	
	"display":"Bagmati"},
	{"id":"2",
	"data":[
		{
			"zone_id":"2", "name":"Rupandehi", "id":"9"
		},
		{
			"zone_id":"2", "name":"Nawalparasi", "id":"10"
		},
		{
			"zone_id":"2", "name":"Gulmi", "id":"11"
		},
		{
			"zone_id":"2", "name":"Kapilvastu", "id":"12"
		},
		{
			"zone_id":"2", "name":"Palpa", "id":"13"
		},
		{
			"zone_id":"2", "name":"Arghakhachi", "id":"14"
		}
		],
	
	"display":"Lumbini"
	}

	];

	init();

	function init(){
		$scope.users = userService.getUsers();
		
	}
	$scope.showForm = true;
	$scope.tableShow = false;
	$scope.insertUser = function(){
		$scope.tableShow = true;
		$scope.showForm = false;
		$scope.editForm = false;
		
		var firstName = $scope.newUser.firstName;
		var lastName = $scope.newUser.lastName;
		var email = $scope.newUser.email;
		var dob = $scope.newUser.dob;
		var genderSelected = $scope.newUser.genderSelected;
		var zoneSelected = $scope.newUser.zoneSelected;
		var districtSelected = $scope.newUser.districtSelected;
		var tempZoneSelected = $scope.newUser.tempZoneSelected;
		var tempDistrictSelected = $scope.newUser.tempDistrictSelected;
		

		userService.insertUser( firstName, lastName, 
			email, dob, genderSelected, zoneSelected, districtSelected,
			 tempZoneSelected, tempDistrictSelected );

		userService.getUsers();
			//console.log($scope.newUser);
			$scope.newUser = '';
			// $scope.newUser.firstName = '';
			// $scope.newUser.lastName = '';
			// $scope.newUser.email = '';
			// $scope.newUser.dob = '';
			// $scope.newUser.genderSelected = '';
			// $scope.newUser.zoneSelected = '';
			// $scope.newUser.districtSelected = '';
			// $scope.newUser.tempZoneSelected = '';
			// $scope.newUser.tempDistrictSelected = '';

	}

		$scope.editUser = function(user){
			$scope.newUser =  user;
			$scope.showForm = true;
			$scope.editForm = true;
			$scope.tableShow =false;
			//console.log(user);
		}

		$scope.confirmUpdate = function(){
			$scope.showForm = false;
			$scope.tableShow = true;
			
			

			// if($scope.newUser.id!=undefined){
			// 	$scope.users[$scope.newUser.id] = $scope.newUser;

			// 	//$scope.newUser.id = undefined;
			// 	$scope.showForm = false;
			// 	$scope.tableShow = true;
			// }
			// $scope.newUser = "";
		}

		$scope.backToRegisterForm = function(){
			$scope.tableShow = false;
			$scope.showForm = true;
			$scope.editForm = false;
		}

		$scope.deleteUser = function(id){
		
			userService.deleteUser(id);
		}
});
