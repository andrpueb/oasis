digitalData = {
    site: {
        country: "GB",
        language: "en_GB",
        currency: "GBP",
        id: "Oasis-UK"
    },
    customer: {
        id: "00655480",
        name: {
            prefix: "Mr",
            firstName: "James",
            lastName: "Langley"
        },
        email: "james.langley@oasis-stores.co.uk",
        status: "returning",
        address: {
            houseNumber: "69-77",
            address1: "Paul Street",
            address2: "Aurora Fashions Ltd",
            address3: "",
            city: "London",
            postcode: "EC2A 4PN"
        }
    }
};


function printInfo (){
  console.log( "name: " + digitalData.customer.name.firstName);
  console.log("Last Name: " + digitalData.customer.name.lastName);
  console.log("Email Address: " + digitalData.customer.email);
}


printInfo();
