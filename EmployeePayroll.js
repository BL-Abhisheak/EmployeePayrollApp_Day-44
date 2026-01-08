class EmployeePayroll {

    constructor() {
        this._name = "";
        this._salary = 0;
        this._gender = "";
        this._department = [];
        this._notes = "";
        this._profilePic = "";
        this._startDate = "";
    }

    get name() { return this._name; }
    set name(name) {
        const regex = /^[A-Z][a-z]{2,}( [A-Z][a-z]{2,})?$/;
        if (!regex.test(name)) {
            throw new Error("Name is Incorrect");
        }
        this._name = name;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(deptArray) {
        this._department = deptArray;
    }

    get notes() { return this._notes; }
    set notes(notes) {
        this._notes = notes;
    }

    get profilePic() { return this._profilePic; }
    set profilePic(pic) {
        this._profilePic = pic;
    }

    get startDate() { return this._startDate; }
    set startDate(date) {
        const inputDate = new Date(date);
        const today = new Date();
        if (inputDate > today) {
            throw new Error("Start Date cannot be future date");
        }
        this._startDate = date;
    }
}
