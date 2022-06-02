const employee = require("./Employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return 'manager'
    }

    getSchool() {
        return this.officeNumber
    }
}

module.exports = Manager;