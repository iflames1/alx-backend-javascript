interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  contract: boolean;
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: false,
  contract: false,
};

console.log(teacher3);
