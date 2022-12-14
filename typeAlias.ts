// TYPE ALIAS
type StringOrNumber = string | number;
type Student = {
  name: string;
  id: StringOrNumber;
};

const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`Student: ${studentName} has id: ${id}`);
};

studentDetails('001', 'Phantom');
studentDetails(123, 'Cruz Lee');

const greet = (user: Student) => {
  console.log(`${user.name} with id: ${user.id} says hello`);
};

greet({name: 'John', id: '123'});