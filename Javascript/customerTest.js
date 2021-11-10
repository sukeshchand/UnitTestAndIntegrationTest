/// <reference path="customer.js" />
// Unit tests
ValidateEmptyPassTest = () => {
    try {
        // Arrange
        let name = "sukesh"
        let age = "40";
        let address = "address1"
        let phone = "89020545545"

        // Act
        validateEmpty(name, age, address, phone);
        
        // Assert
        console.log("ValidateEmptyPassTest passed");
    } catch (error) {
        console.log("ValidateEmptyPassTest failed");
    }
}

ValidateEmptyFailTest = () => {
    try {
        // arrange
        let name = ""
        let age = "40";
        let address = "address1"
        let phone = "89020545545"
        
        // act
        validateEmpty(name, age, address, phone);

        // assert
        console.log("ValidateEmptyFailTest failed");
    } catch (error) {
        console.log("ValidateEmptyFailTest passed");
    }
}

validateAgePassTest = () => {
    try {
        // Arrange
        let age = "18";

        // Act
        validateAge(age);

        // Assert
        console.log("validateAgePassTest passed");
    } catch (error) {
        console.log("validateAgePassTest failed");
    }
}
    
validateAgeFailWhenLessThan18Test = () => {
    try {
        // Arrange
        let age = "17";

        // Act
        validateAge(age);

        // Assert
        console.log("validateAgeFailedTest failed");
    } catch (error) {
        console.log("validateAgeFailedTest passed");
    }
}

validateAgeFailWhenMoreThan100Test = () => {
    try {
        // Arrange
        let age = "101";

        // Act
        validateAge(age);

        // Assert
        console.log("validateAgeFailWhenMoreThan100Test failed");
    } catch (error) {
        console.log("validateAgeFailWhenMoreThan100Test passed");
    }
}

createCustomerPassTest = () => {   
    try {

        // Arrange
        let customers = [];
        let name = "sukesh"
        let age = "40";
        let address = "address1"
        let phone = "89020545545"

        // Act
        var resultMessage = createCustomer(customers, name, age, address, phone);

        // Assert
        if(resultMessage == "Customer created successfully") {
            console.log("createCustomerTest passed");
        } else {
            console.log("createCustomerTest failed");
        }
    } catch (error) {
        console.log("createCustomerTest failed");
    }
}

getCustomerByNamePassTest = () => {
    try {
        // Arrange
        let customers = [];
        let name = "sukesh";
        let age = "40";
        let address = "address1"
        let phone = "89020545545"
        customers.push(new customer(name, age, address, phone));

        // act
        var customerCreated = getCustomerByName(customers, name);

        // assert
        if(customerCreated.name == name && customerCreated.age == age && customerCreated.address == address && customerCreated.phone == phone) {
            console.log("getCustomerByNamePassTest passed");
        } else {
            console.log("getCustomerByNamePassTest failed");
        }
    } catch (error) {
        console.log("getCustomerByNamePassTest failed");
    }
}

getCustomerByNameFailTest = () => {
    try {
        // Arrange
        let customers = [];
        let name = "sukesh";
        let age = "40";
        let address = "address1"
        let phone = "89020545545"
        customers.push(new customer(name, age, address, phone));

        // act
        var customerCreated = getCustomerByName(customers, "sukesh1");
        
        // assert
        if(customerCreated!=null){ 
            console.log("getCustomerByNameFailTest failed");
        }
        console.log("getCustomerByNameFailTest failed");
    } catch (error) {
        console.log("getCustomerByNameFailTest passed");
    }
}

createCustomerIntegrationTest = () => { 
    try {
        // arrange
        let customers = [];
        let name = "sukesh";
        let age = "40";
        let address = "address1"
        let phone = "89020545545"

        // act

        createCustomer(customers, name, age, address, phone);
        var resultMessage = createCustomer(customers, name, age, address, phone);
        var customerCreated = getCustomerByName(customers, name);

        // assert
        if(customerCreated.name == name && customerCreated.age == age && customerCreated.address == address && customerCreated.phone == phone) {
            console.log("createCustomerIntegrationTest passed");
        } else {
            console.log("createCustomerIntegrationTest failed");
        }
    } catch (error) {
        console.log("createCustomerIntegrationTest failed");
    }
}

