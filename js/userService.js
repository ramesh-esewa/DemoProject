app.service('userService', function(){
	this.getUsers = function(){
		return users;
	};
	
	this.insertUser = function(firstName, lastName, 
			email, dob, genderSelected, zoneSelected, districtSelected,
			 tempZoneSelected, tempDistrictSelected){
		var topId = users.length + 1;

		users.push({
			id: topId,
			firstName: firstName,
			lastName: lastName,
			email: email,
			dob: dob,
			genderSelected: genderSelected,
			zoneSelected: zoneSelected,
			districtSelected: districtSelected,
			tempZoneSelected: tempZoneSelected,
			tempDistrictSelected : tempDistrictSelected
		});
	};

	this.deleteUser = function(id){
		for(var i = users.length-1; i>=0; i--){
			if(users[i].id === id){
				users.splice(i, 1);		//splice(start, deletecount) 
										//actually removes the element starting from the start index.
				break;
			}
		}
	};

	this.getUser = function(id){
		for(var i = 0; i< user.length; i++){
			if(users[i].id === id){
				return user[i];
			}

		}
		return null;
	};
	var users = [];

	// var users = [
	// 			{id: 1, firstName:"Ramesh Khanal", lastName: "Apr 1, 2017" , 
	// 			projectName : "Project Management", 
	// 			deadline : "Apr 10 1017", status : "Progressing",
	// 			taskDetails : "Handle Frontend",assignedBy:"Prajin Sir" },

	// 			{id: 2, firstName:"Aslam Ali", lastName: "Apr 1, 2017" ,
	// 			 projectName : "Project Management", 
	// 			deadline : "Apr 10, 1017", status : "Progressing",
	// 			taskDetails : "Handle Backend", assignedBy:"Prajin Sir"},

	//             {id: 3, firstName:"Suraj Gautam",  lastName: "Fab 1, 2017" , 
	//             projectName : "eSewa GPRS", 
	// 			deadline : "Apr 10, 1017", status : "Progressing",
	// 			taskDetails : "Handle Top-up Service", assignedBy:"Prajin Sir"}

	// ]


});