function createcustomer() {
    let customer = {};
    let _id, _name;
    customer.setId = function (id) {
        _id = id;
    }
    customer.setName = function (name) {
        _name = name;
    }
    customer.getDetails = function () {
        return "id: " + _id + " name: " + _name;
    }
    return customer;
}

let customer = createcustomer();
customer.setId(10);
customer.setName("ramesh");
console.log(customer);
console.log(customer.getDetails());