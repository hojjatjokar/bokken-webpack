const hello = ({ a, b, ...rest }) => {
  console.log(a?.name);
};

hello();
