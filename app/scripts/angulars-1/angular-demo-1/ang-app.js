
var uid = 1;


function ContactController($scope) {

    $scope.contacts = [
        {id:0, 'name': 'Viral', 'email':'hello@gmail.com', 'phone': '123-2343-44'},
        {id:1, 'name': 'Gonzales', 'email':'gonzo@gmail.com', 'phone': '123-1239-44'},
        {id:1, 'name': 'Dino', 'email':'dinao@gmail.com', 'phone': '123-1129-44'}
    ];

    $scope.saveContact = function() {

        if($scope.newcontact.id == null) {
             $scope.newcontact.id = uid++;
             $scope.contacts.push($scope.newcontact);
        } else {

             for(i in $scope.contacts) {
                    if($scope.contacts[i].id == $scope.newcontact.id) {
                        $scope.contacts[i] = $scope.newcontact;
                    }
             }
        }
        $scope.newcontact = {};
    }


    $scope.delete = function(id) {

        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.contacts.splice(i,1);
                $scope.newcontact = {};
            }
        }

    }


    $scope.edit = function(id) {
        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.newcontact = angular.copy($scope.contacts[i]);
            }
        }
    }
}
