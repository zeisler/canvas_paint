"use strict";angular.module("canvasPaintApp",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("canvasPaintApp").controller("MainCtrl",["$scope",function(a){function b(a,b){var c=a.getBoundingClientRect();return{x:b.clientX-c.left,y:b.clientY-c.top}}var c=document.getElementById("canvas"),d=c.getContext("2d");d.clearRect(0,0,c.width,c.height),c.width/2,c.height/2,a.thickness=10,$("#canvas").on("mousemove",function(e){var f=b(c,e);d.beginPath(),d.arc(f.x,f.y,a.thickness,0,2*Math.PI,!0),d.closePath(),d.fillStyle="green",d.fill()}),a.clear=function(){var a=document.getElementById("canvas"),b=a.getContext("2d");b.clearRect(0,0,a.width,a.height)}}]);