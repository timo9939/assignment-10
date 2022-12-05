const Engineer=require('../lib/engineer')

test('test the engineer',()=>{
    const engineer2=new Engineer('Peter','20','peter@gmail.com','timo9939')
expect(engineer2.GitHub).toEqual(expect.any(String))
})


test('test gitHub ',()=>{
    const engineer2 = new Employee('Peter', 20, 'peter.@gmail.com','timo9939');

    expect(engineer2.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});




test('test role of employee', () => {
    const engineer2 = new Employee('Peter', 20, 'peter.@gmail.com','timo9939');

    expect(engineer2.getRole()).toEqual("Employee");
}); 