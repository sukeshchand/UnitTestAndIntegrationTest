class customer {
    constructor(name, age, address, phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
}

createCustomer = (customers, name, age, address, phone) => {    
    customers.push(new customer(name, age, address, phone));
    return "Customer created successfully";
}

validateEmpty = (name, age, address, phone) => { 
    if(name == "" || age == "" || address == "" || phone == "") {
        throw new Error("All fields must be filled");
    }
}

validateAge = (age) => {
    if(age < 18) {
        throw new Error("Age should be greater than 18");
    }
    if(age>100){
        throw new Error("Age should be less than 100");
    }
}

getCustomerByName = (customers, name) => {
    let customer = customers.find(c => c.name == name);
    if(customer) {
        return customer;
    } else {
        throw new Error("Customer not found");
    }   
}

displayCustomer = (customer) => {
    console.log(customer.name);
    console.log(customer.age);
    console.log(customer.address);
    console.log(customer.phone);
}
