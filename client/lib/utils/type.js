


const typeOf = d => Object.prototype.toString.call(d).slice(8,-1).toLowerCase()



const isObject = d => typeOf(d) === 'object';
const isArray = d => typeOf(d) === 'array';
const isBoolean = d => typeOf(d) === 'boolean';
const isString = d => typeOf(d) === 'string';
const isNumber = d => typeOf(d) === 'number';
const isBigInt = d => typeOf(d) === 'bigint';
const isNull = d => typeOf(d) === 'null';
const isUndefined = d => typeOf(d) === 'undefined';
const isFunction = d => typeOf(d) === 'function';
const isMath = d => typeOf(d) === 'math';
 

