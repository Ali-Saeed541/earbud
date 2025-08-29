app.controller("HeaderController", function ($scope) {
  $scope.brand = "MyWebsite";
  $scope.menuItems = [
    { name: "Home", link: "#/" },
    { name: "Services", link: "#/services" },
    { name: "Contact", link: "#/contact" },
  ];
});
