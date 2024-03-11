export default function getListStudents() {
    let res = [];
    function student(id, firstName, location) {
        this.id = id;
        this.firstName = firstName;
        this.location = location;
    }

    let guillame = new student(1, 'Guillaume', 'San Francisco');
    let james = new student(2, 'James', 'Columbia');
    let serena = new student(5, 'Serena', 'San Francisco');

    res.push(guillame);
    res.push(james);
    res.push(serena);

    return res;
}