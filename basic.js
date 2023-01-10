//class property
var customer = /** @class */ (function () {
    //constuctor- special function that creates and intializes an object instances
    //of a class
    function customer(name) {
        this.name = name;
    }
    // function to call that class
    customer.prototype.announce = function () {
        return "hello, my name is" + this.name;
    };
    return customer;
}());
//create a new instance
var firstCustomer = new customer("Alice");
var newMessage = firstCustomer.announce();
//change the text on the page
var webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
