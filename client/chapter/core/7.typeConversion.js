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

// null

// boolean

// string

// numeric string


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 