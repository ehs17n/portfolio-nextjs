const Names = [
  { name: 'ehsan', age: 21 },
  { name: 'aysan', age: 27 },
  { name: 'yo', age: 21 },
  { name: 'hoy', age: 27 },
];

const Method = Names.reduce((acc, person) => {
  const key = person.age;
  const AgeValue = acc[key] || 0;
  return { ...acc, [key]: AgeValue + 1 };
}, {});


const hi = { 21: 2, 21: 3 };

console.log(hi);