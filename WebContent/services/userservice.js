/**
 * 
 */
app.factory('UserService', function($http){
	var userService={}
	
	userService.registerUser=function(user){
		
		console.log('in userservice ' + user)
		return $http.post("http://localhost:8878/webprojectmiddleware2/registeruser",user)
	}
	
	userService.login=function(user){
		console.log('Userservice login function')
		console.log(user)
		return $http.post("http://localhost:8878/webprojectmiddleware2/login",user)
	}
	
	userService.logout=function(){
		return $http.put("http://localhost:8878/webprojectmiddleware2/logout")
	}
	
	userService.getUser=function(){
		return $http.get("http://localhost:8878/webprojectmiddleware2/getuser")
	}
	
	userService.updateUser=function(user){
		return $http.put("http://localhost:8878/webprojectmiddleware2/updateuser",user)
	}
	
	return userService;
})