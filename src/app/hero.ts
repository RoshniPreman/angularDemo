// Typescript class - created and exported  a class and can be imported in other files
// 2 types exports : default export and named export
// only one default member
// Typescript is the ES6 version of javascript
// Browsers don’t support TypeScript. Browsers barely support ES6 JavaScript. we are going to transpile our TypeScript into ES5.
//  When you compile TypeScript, it is transformed by the compiler into JavaScript. These are very similar levels of abstraction, so you could call this transpiling.
// default export


// Class is a new feature of ES6

export default class HERO {
    id : number;
    name : string;
}

export const Heroes : HERO[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];