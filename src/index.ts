type Params = {
  name: string;
  age?: number;
};

const helloWorld = ({ name, age }: Params) => {
  console.log(name, age?.toString());
};

helloWorld({ name: 'hojjat' });

var topLevel = 'top level';

console.log(topLevel);
console.log('window', window.topLevel);
function topFn() {
  console.log('top level fn');
}
console.log('window', window.topFn);
