//pluralsight angularjs scripts
var pl_ap = angular.module('pl_app', []);
pl_ap.controller('MainController', function($scope, $http) {
    var onUserComplete = function(response) {
        $scope.user = response.data;
    };

    $http.get("https://api.github.com/users/now0pen")
        .then(onUserComplete);

    var person = {
        firstName: "hot",
        lastName: "babe",
        imageSrc: "http://i.imgur.com/fNKAE4l.jpg"
    };

    $scope.message = "hola mainController";
    $scope.person = person;
});

//script for angulair (lynda tutorial)
var app = angular.module('myApp', []);
app.controller('AppCtrl', function($scope) {
  $scope.airports = {
    "PDX": {
      "code": "PDX",
      "name": "Portland International Airport",
      "city": "Portland",
      "destinations": [
        "LAX",
        "SFO"
      ]
    },
    "STL": {
      "code": "STL",
      "name": "Lambert-St. Louis International Airport",
      "city": "St. Louis",
      "destinations": [
        "LAX",
        "MKE"
      ]
    },
    "MCI": {
      "code": "MCI",
      "name": "Kansas City International Airport",
      "city": "Kansas City",
      "destinations": [
        "LAX",
        "DFW"
      ]
    }
  };
});

//javascripts go here
/*
//this here is bootstrap script
var pixGrid = function() {
    function centerImage(theImage) {
        var myDifX = (window.innerWidth - theImage.width) / 2, myDifY = (window.innerHeight - theImage.height) / 2;
        return theImage.style.top = myDifY + "px", theImage.style.left = myDifX + "px", 
        theImage;
    }
    var myNode = document.querySelector(".pixgrid");
    myNode.addEventListener("click", function(e) {
        if ("IMG" === e.target.tagName) {
            var myOverlay = document.createElement("div");
            myOverlay.id = "overlay", document.body.appendChild(myOverlay), myOverlay.style.position = "absolute", 
            myOverlay.style.top = 0, myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)", myOverlay.style.cursor = "pointer", 
            myOverlay.style.width = window.innerWidth + "px", myOverlay.style.height = window.innerHeight + "px", 
            myOverlay.style.top = window.pageYOffset + "px", myOverlay.style.left = window.pageXOffset + "px";
            var imageSrc = e.target.src, largeImage = document.createElement("img");
            largeImage.id = "largeImage", largeImage.src = imageSrc.substr(0, imageSrc.length - 7) + ".jpg", 
            largeImage.style.display = "block", largeImage.style.position = "absolute", largeImage.addEventListener("load", function() {
                this.height > window.innerHeight && (this.ratio = window.innerHeight / this.height, 
                this.height = this.height * this.ratio, this.width = this.width * this.ratio), this.width > window.innerWidth && (this.ratio = window.innerWidth / this.width, 
                this.height = this.height * this.ratio, this.width = this.width * this.ratio), centerImage(this), 
                myOverlay.appendChild(largeImage);
            }), largeImage.addEventListener("click", function() {
                myOverlay && (window.removeEventListener("resize", window, !1), window.removeEventListener("scroll", window, !1), 
                myOverlay.parentNode.removeChild(myOverlay));
            }, !1), window.addEventListener("scroll", function() {
                myOverlay && (myOverlay.style.top = window.pageYOffset + "px", myOverlay.style.left = window.pageXOffset + "px");
            }, !1), window.addEventListener("resize", function() {
                myOverlay && (myOverlay.style.width = window.innerWidth + "px", myOverlay.style.height = window.innerHeight + "px", 
                myOverlay.style.top = window.pageYOffset + "px", myOverlay.style.left = window.pageXOffset + "px", 
                centerImage(largeImage));
            }, !1);
        }
    }, !1);
}();
*/
console.log("hola jim");
