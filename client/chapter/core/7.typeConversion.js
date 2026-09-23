/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2026;

// 명시적 
console.log( String(YEAR) );


// 암시적

console.log( YEAR + '' );


// undefined, null
const days = null;
let undef;

console.log( String(days) );
console.log( String(undef) );



// boolean

const isClicked = false;

console.log( String(isClicked) );



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

const friend = {
  name:'tiger',
  age:30
};

// console.log(Number(friend));

// null
const money = null;

console.log(money * 1);
console.log(money / 1);
console.log(+money);

// boolean
let isActive = false;

console.log( isActive / 1 );

// string
let num = '100';

console.log(num * 1);


// numeric string

const width = '120.5px';


console.log( parseInt(width) );
console.log( parseFloat(width) + 10 + 'px' );



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''


console.clear();

console.log( Boolean(null) );
console.log( Boolean(undefined) );
console.log( Boolean(0) );
console.log( Boolean(NaN) );
console.log( Boolean('') );

// 위에 나열한 것 이외의 것들 

console.log( Boolean('0') );
console.log( Boolean(' ') );
console.log( !!(-1) );
console.log( !!({}) );
console.log( !!([false]) );
console.log( !!(()=>false) );


