/// <reference path="customer.js" />
/// <reference path="customerTest.js" />
// create main mathod


main = () => {
    try {
        let customers = [];

        let name = "sukesh"
        let age = "40";
        let address = "address1"
        let phone = "89020545545"

        validateEmpty(name, age, address, phone);
        validateAge(age);

        var resultMessage = createCustomer(customers, name, age, address, phone);
        console.log(resultMessage);
    } catch (error) {
        console.log(error.message);
    }
}

RunTest = () => {

    ValidateEmptyPassTest();
    
    ValidateEmptyFailTest();
    
    validateAgePassTest();

    validateAgeFailWhenLessThan18Test()

    validateAgeFailWhenMoreThan100Test();

    createCustomerPassTest();

    getCustomerByNamePassTest();

    getCustomerByNameFailTest();

    createCustomerIntegrationTest();
}

// call main mathod
// main();
RunTest();

