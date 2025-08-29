app.controller("BodyController", function() {
  var vm = this;

  vm.title = "Welcome to My Single Page Website!";
  vm.description = "This is the main content area. You can add hero sections, cards, or anything here.";

  vm.showAlert = function() {
    alert("You clicked the body button!");
  };
});
