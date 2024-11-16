// what is string in javascript?

    //"STRING" IN JAVASCRIPT IS THE SEQUENCE OF CHARACTERS .
    //"STRINGS" IS TEXT BASED "PRIMITIVE" DATA WITH IMMUTABLE FEATURES
    // STRNGS ARE EMBEDDED INSIDE  'string' single quote  "double qoute"
//string have "TEMPLATE LITERAL" ES6 Features with `bacticks` string interpolation ${}
// string interpolation give features to embedded   ${variables}  inside  and complex expression inside it ${(5+2)*(2+2)};
//JS STRING USE  UTF-16  2-BYTES  UNICODE ...
//JS HAS  .length properties  and can be accessed by index[0]  
//js has different length properties than array in emojis(characters) and white invisible spaces .... Array count the only elements..   Strings count every characters even spaces.

//Strings : TYPE CONVERSION CAN BE DONE BY METHOD:  toString()    .String()

// NOTE: IN js string escape characters  \n will be count as single characters

// STRING PRIMITIVE    /VS/       STRING OBJECT

//   HOW    STRING  IS  OBJECT IN JAVASCRIPT ....?

/*    What is the "String prototype"?
In JavaScript, every string is an object, and objects can have methods and properties. These methods and properties are defined by prototypes. A prototype is like a blueprint or template that allows objects to inherit methods and properties.

When we say String prototype, we are referring to the set of methods (like .toUpperCase(), .slice(), .concat(), etc.) that all string objects have access to. These methods are not directly on the string itself but are inherited from the String prototype.

toUpperCase() is a method, not a global function. It is not a function that you can call directly without using it on a string object. You need to call it on a string.

String methods (like .toUpperCase()) are not standalone functions. They are part of the string object's prototype. So, you can only call them on actual string objects.


Great question! Let me break down that statement in a simpler way and explain what the String prototype means in JavaScript, using easy examples.

What is the "String prototype"?
In JavaScript, every string is an object, and objects can have methods and properties. These methods and properties are defined by prototypes. A prototype is like a blueprint or template that allows objects to inherit methods and properties.

When we say String prototype, we are referring to the set of methods (like .toUpperCase(), .slice(), .concat(), etc.) that all string objects have access to. These methods are not directly on the string itself but are inherited from the String prototype.

Let's explain this with an example:
In JavaScript, you can work with strings like this:

javascript
Copy code
let myString = "hello";
Even though myString is just a plain string, JavaScript gives it some extra functionality through its prototype. This is how it works:

String prototype methods like .toUpperCase(), .concat(), and .slice() are not part of the string itself (the value "hello"), but they are inherited from the String prototype.

You can use these methods on any string object (including string literals like "hello"), but you must call them as methods on the string itself.

Example:
javascript
Copy code
let myString = "hello";
let result = myString.toUpperCase();  // "HELLO"
console.log(result);
In this case, .toUpperCase() is a method that belongs to the String prototype, and myString (which is a string) inherits this method. So, we can call it using:

javascript
Copy code
myString.toUpperCase()
This works because myString is a string object, and it has access to the methods from the String prototype.

Why Can't You Call toUpperCase() Directly on a String Literal?
In your example, you were trying to do something like this:

javascript
Copy code
console.log(toUpperCase("suman thapa"));
But this doesn't work. Here's why:

toUpperCase() is a method, not a global function. It is not a function that you can call directly without using it on a string object. You need to call it on a string.

String methods (like .toUpperCase()) are not standalone functions. They are part of the string object's prototype. So, you can only call them on actual string objects.

In other words, you cannot use toUpperCase() like this:

javascript
Copy code
toUpperCase("suman thapa");  // Error: toUpperCase is not defined
Instead, you need to call it on a string, like this:

javascript
Copy code
console.log("suman thapa".toUpperCase());  // Output: "SUMAN THAPA"
Here, "suman thapa" is a string literal, and we are calling .toUpperCase() on it directly. This works because JavaScript knows that "suman thapa" is a string, and it has access to all the methods from the String prototype.

Example with Multiple String Methods:
To make things clearer, let’s look at a few more examples showing how string prototypes work:

Calling .toUpperCase() on a string:
javascript
Copy code
let name = "john doe";
console.log(name.toUpperCase());  // Output: "JOHN DOE"
Here, toUpperCase() is called on the name string object, and it returns the string in uppercase.

Using .concat() to join strings:
javascript
Copy code
let greeting = "Hello, ";
let name = "Alice";
let message = greeting.concat(name);  // Joins "Hello, " and "Alice"
console.log(message);  // Output: "Hello, Alice"
Here, .concat() is used to combine two strings. This method is available because of the String prototype.

Using .slice() to extract a part of a string:
javascript
Copy code
let text = "I am learning JavaScript";
let part = text.slice(5, 12);  // Extracts the string from index 5 to 12
console.log(part);  // Output: "learning"
.slice() is another method available from the String prototype, and it allows you to extract a part of a string.

What is a Prototype in Simple Terms?
Think of the prototype as a template or blueprint that defines the properties and methods that can be shared by all instances of an object.

For example:

The Array prototype defines methods like .push(), .pop(), and .map() that all arrays can use.
The String prototype defines methods like .toUpperCase(), .slice(), and .concat() that all string objects can use.
These methods are not directly part of the string "hello", but they are available because "hello" is an instance of a string, and it inherits these methods from the String prototype.                                                                          

//  STRING OBJECTS : WHILE ACCESSING "STRING" METHODS STRINGS BEHAVES LIKE OBJECTS  ?

String methods (like .toUpperCase(), .slice(), etc.) are available because JavaScript temporarily wraps the string in a String object behind the scenes to access those methods.

Strings don't have a .prototype property because they are primitive data types, but JavaScript provides object-like behavior for them when needed (e.g., calling string methods).                                                                           */

let str = "hello";
let upperStr = str.toUpperCase();  // JavaScript temporarily wraps the string in a String object
console.log(upperStr);  // Output: "HELLO"

/* In this example, you call .toUpperCase() on the string str. Even though str is a primitive, JavaScript internally wraps it in a String object to call the method, and then the method returns a new string.

Temporary wrapping: JavaScript temporarily wraps the string in an object to access the .toUpperCase() method, and then gives you the result back as a primitive string.
After that, str remains unchanged, and the wrapped string object is discarded.   */


let string = "s,u,m,nan" ;
console.log(string,string.length);

let arr = String([1,4]);
console.log(arr.length)

// . period notation object  property accessor

let property = { name:"suman" , age:30};
   property.name = "thapa";
console.log(property);
property["location"]= "abudhabi";
console.log(property);
property.location = "usa";
console.log(property);

let obj = {"first name" : "suman"};
console.log(obj["first name"])
  let reassign = "job";
   obj[reassign] = "enginner";
console.log(obj);

let str = "suman";
console.log(str[0]);


// JAVASCRIPT STRINGS AND STRINGS METHODS FOR DATA MANIPULATION

// escape character in string   /n
let escape = "suman \n Thapa";
console.log(escape);

//
let esc = "hello \n world";
console.log(esc);

// length property 
let size = "string";
console.log(size.length);

// template literal (ES6 FEATURES) with bacticks using ${} string interpolation which gives us features to embedded variables and other complex expression inside it.

let literal  = "hello";
let interpolation = `${literal} , thapa`;
console.log(interpolation);

let add = "now we are adding";
console.log(`${add} ${2+3*(2+2)}`);

//${add} ->we are embedded variables in this string interpolation
//${2+3*(2+2)} -> we can add complex expression inside string interpolation

// to add or combine two striings

let combine = "java" + "script";
console.log(combine);

let unite = "react";
console.log(unite.concat("js"))  // ASI :AUTOMATIC SEMICOLON INSERTION

let movie = "crows";
let movieConcat = movie.concat("Zero");
console.log(movieConcat);

// escape characters in string \n  to change line..  
//      \-> backslash is the escape character

let changeLine  = "I\nam\na\nsoftware\nenginner";
console.log(changeLine);

 console.log("my\nname\nis\nsuman\nthapa");

// toUpperCase()
console.log("hello\ngoodmorning\nhow are you".toUpperCase());
console.log("THAPA\nSUMAN\nFULL STACK DEVELOPER".toLowerCase());

// \t tab escape characters 

 console.log("my\tname\tis\tsuman\tthapa\ti\tam");

// unicode escape character   \uxxxx
let uni = "\u0048\u0065\u006c\u006c\u006F";  // unicode "Hello"
console.log(`unicode escapae character ${uni}`);

// HEXADECIMAL ESCAPE CHARACTER:  \xXX 2-digit value
console.log("\x48\x65\x6C\x6C\x6F")  //"Hello"   hex-value

//TYPE CONVERSION IN STRING USING  .toString() method      String() method

let conversion = String(123);
  console.log(conversion,typeof conversion,conversion.length);

// escape character "\n" here \n count as a one single character
console.log("suman\n".length)
console.log("s\n".length)

// toString()  method

let explict = 123;
console.log(explict.toString());

//indexOf() method

let index = "suman thapa magar";
console.log(index.indexOf("thapa"))

// .slice(index1,index4)  method

let cut = "sparse array";
console.log(cut.slice(3,7))
console.log(cut.length,cut.toUpperCase());

let combine = "suman" ;
console.log(combine.concat("thapa"));

// toUpperCase()

let capital = "my name is suman" ;
console.log(capital.toUpperCase());

console.log("apple".concat("is a fruit"))
//console.log(toUpperCase("suman thapa"));   //invalid code

console.log("suman\n is \$ a \" good \t boy".toUpperCase());

//    \\ double backslash escape character in String

console.log("https:\\youtube.com");

// NOTE: IN js string escape characters  \n will be count as single characters

console.log("s\nu".length);

// standalone function; this is not a method , this is a function

function standalone(course,price){
  console.log(course,price);
};
    standalone("javascript",5000);
    
// method vs function 

let str = "make me uppercase";
  console.log(str.toUpperCase());
  
//
function instance (){
  return `i am standalone function `;
};
  console.log(instance());
    console.log(instance);
  let result = instance();
  console.log(result);


  //we have two types of "STRINGS" in the javascript

//1.  string primitive.
const str = "hello";
console.log(typeof str,str);

//2: string object can create using "new" keyword constructor 

const another = new String("hi");
console.log(typeof another,another);

const strObj = "hello world";
strObj.toUpperCase();

// Methods: allow certain opertain 
//properties : known as attribute 

// .length properties(attribute);


let attribute = "hi i  am suman";
// .length property   [0] indexing to access characters
console.log(attribute.length, attribute[13]);

//  includes()method to check the include string characters 
console.log(attribute.includes("thapa"));  // output:false
console.log(attribute.includes("suman"));  // true

// startsWith() methods to search string character
console.log(attribute.startsWith("hi"));  // true

// endsWith() method searching  ending character;
console.log(attribute.endsWith("n"));   //true

//1: to find the index of string we can use [0] bracket notation
//2: to find index using indexOf()  method;
console.log(attribute.indexOf("suman"));   // index :9

// to replace characters of string   replace() method
console.log(attribute.replace("suman","thapa")); // "hi i am thapa"

// trim() method to remove white spaces :
let spaces = "   javascript single thread, asynchronous language  ";
console.log(spaces.trim());

//trim() methods has variant :  trimRight()   trimLeft()
console.log(spaces.trimLeft());  
console.log(spaces.trimRight());

// fromCharCode()  - represent UTF-16
console.log(String.fromCharCode("12123"));

// fromCodePoint()- represent unicode code point
console.log(String.fromCodePoint("1223"));
console.log(String.fromCharCode(10234));
console.log(String.fromCodePoint(010234));

//charCodeAt()
let utf = "javascript UTF encoding";
console.log(utf.charCodeAt(3))
console.log(utf.codePointAt(10));

//codePointAt()
const emojis = "😁🙄";
console.log(emojis.codePointAt(2));
console.log(emojis.charCodeAt(2))

//at()  and [0] bracket notation  is same in string ...to access indexing

const indexing = "indexing";
console.log(indexing.at(2));
console.log(indexing[2]);
console.log(indexing.charAt(2));
// charAt() returns the character at index number
console.log(indexing.charAt(indexing.length-1));

// strings in js important concepts ESCAPE NOTATION
//Note: escape character of string count as a single character
const escape = "suman\nthapa";
console.log(escape.toUpperCase(),escape.length);

  

















