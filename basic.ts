//class property
class customer {
    name: string;
//constuctor- special function that creates and intializes an object instances
//of a class
    constructor(name: string){
        this.name= name;
    }

    // function to call that class
    announce(){
        return "hello, my name is" + this.name
    }  

}

//create a new instance
let firstCustomer = new customer("Alice")
let newMessage: string = firstCustomer.announce()

//change the text on the page
let webHeading= document.querySelector('h1')
webHeading!.textContent= newMessage;