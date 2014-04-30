function tenant($scope, $http, $templateCache) {
	
	    $scope.name = '';
	    $scope.dba = '';
	    $scope.active = true;
	    $scope.contacts = [ { name : '', email : '', phone : '', mobile : '' } ];
	    
	    $scope.newContact = function(){
	        $scope.contacts.push( { name : '', email : '', phone : '', mobile : '' } );
	        console.log ($scope.contacts);
	    }
	    
	    $scope.addresses = [{
	        type : '',
	        street : '',
	        locationCodes : { countryCode: 1, country: 'United States', cityCode: 1, city: 'New York' },
	        zipCode : '',
	        geo : { alt : 0, lat : 0 }
	    }];
	    
	    $scope.newAddress = function(){
	        this.addresses.push({
	            type : '',
	            street : '',
	            location : { countryCode: 1, country: 'United States', cityCode: 1, city: 'New York' },
	            zipCode : '',
	            geo : { alt : 0, lat : 0 }
	        });
	    }
	    
	    $scope.types = [ {name: 'Home'}, {name: 'Work'}, {name: 'Other'} ];
	    
	    $scope.locations = [
	                        { countryCode: 1, country: 'United States', cityCode: 1, city: 'New York' },
	                        { countryCode: 1, country: 'United States', cityCode: 2, city: 'Chicago' },
	                        { countryCode: 1, country: 'United States', cityCode: 3, city: 'Atlanta' },
	                        { countryCode: 57, country: 'Colombia', cityCode: 1, city: 'Bogota' },
	                        { countryCode: 57, country: 'Colombia', cityCode: 2, city: 'Cali' }
	                        ];
	    
	    $scope.loadLocations = function(){} /* load locations.. later */
}

