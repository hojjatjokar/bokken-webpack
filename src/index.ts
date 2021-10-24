type Params = {
  name: string;
  age?: number;
};
const helloWorld = ({ name, age }: Params) => {
  console.log(name, age?.toString());
};

helloWorld({ name: 'hojjat' });
