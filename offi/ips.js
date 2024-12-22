// Sample xDef and yDef objects
const xDef = { aggregate: true };
const yDef = { aggregate: false };

// Conditional statement
if (xDef.aggregate && !yDef.aggregate) {
  // Execute this block if xDef.aggregate is truthy and yDef.aggregate is falsy
  console.log('Condition met: xDef.aggregate is truthy and yDef.aggregate is falsy');
} else {
  // Execute this block if the condition is not met
  console.log('Condition not met');
}
