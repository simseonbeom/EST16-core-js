


export const typeOf = d => Object.prototype.toString.call(d).slice(8,-1).toLowerCase()



export const isObject = d => typeOf(d) === 'object';
export const isArray = d => typeOf(d) === 'array';
export const isBoolean = d => typeOf(d) === 'boolean';
export const isString = d => typeOf(d) === 'string';
export const isNumber = d => typeOf(d) === 'number';
export const isBigInt = d => typeOf(d) === 'bigint';
export const isNull = d => typeOf(d) === 'null';
export const isUndefined = d => typeOf(d) === 'undefined';
export const isFunction = d => typeOf(d) === 'function';
export const isMath = d => typeOf(d) === 'math';
 

