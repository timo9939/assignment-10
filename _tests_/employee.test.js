const Employee= require('../lib/employee')

test('test the employee',()=>{
    const employee2=new Employee('Peter','20','peter@gmail.com')
    expect(employee2.name).toEqual(expect.any(String))
    expect(employee2.id).toEqual(expect.any(Number))
    expect(employee2.email).toEqual(expect.any(String))
})

test('get employee name',()=>{
    const employee2 = new Employee('Peter', 20, 'peter.@gmail.com');

    expect(employee2.getName()).toEqual(expect.any(String));
});


test('gets employee ID', () => {
    const employee2 = new Employee('Peter', 20, 'peter.@gmail.com');

    expect(employee2.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee2 = new Employee('Peter', 20, 'peter.@gmail.com');

    expect(employee2.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


test('gets role of employee', () => {
    const employee2 = new Employee('Peter', 20, 'peter.@gmail.com');

    expect(employee2.getRole()).toEqual("Employee");
}); 
