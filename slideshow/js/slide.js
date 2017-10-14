angular.module('myApp', ['ui.bootstrap']);

// Controller  for Carousel
function CarouselCtrl($scope) {

// initializing the time Interval
  $scope.myInterval = 5000;
  
 // Initializing  slide rray  
$scope.slides = [
		{image:'images/balaji1.jpg',text:'Balaji'},
		{image:'images/balaji2.jpg',text:'Varadaraja Perumal'},
		{image:'images/balaji3.jpg',text:'Sriranga Perumal'},
		{image:'images/balaji4.jpg',text:'Elumalaiyan'},
		{image:'images/balaji5.jpg',text:'Elumalaiyan'}
		];

  var slides = $scope.slides;

} // Controller Ends here


