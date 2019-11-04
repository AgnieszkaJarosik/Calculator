export const numberKeys = [
  {
    id: 'zero',
    value: 0
  },
  {
    id: 'one',
    value: 1
  }, 
  {
    id: 'two',
    value: 2
  },
  {
    id: 'three',
    value: 3
  }, 
  {
    id: 'four',
    value: 4
  }, 
  {
    id: 'five',
    value: 5
  }, 
  {
    id: 'six',
    value: 6
  }, 
  {
    id: 'seven',
    value: 7
  }, 
  {
    id: 'eight',
    value: 8
  }, 
  {
    id: 'nine',
    value: 9
  }
];

export const operationKeys = [
  {
    id: "add",
    sign: '+',
    index: 0,
    operation (a,b){
      return a+b;
    }
  },
  {
    id: "subtract",
    sign: '-',
    index: 1,
    operation (a,b) {
      return a-b;
    }
  },
  {
    id: "multiply",
    sign: '*',
    index: 2,
    operation (a,b) {
      return a*b;
    }
  },
  {
    id: "divide",
    sign: '/', 
    index: 3,
    operation (a,b) {
      return a/b;
    }
  }
];
