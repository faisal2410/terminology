/*
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is commonly used in web applications for exchanging data between the client and server.

JSON Syntax:
JSON uses a simple syntax that consists of key-value pairs and arrays. Here is an example of a JSON object:


{
  "name": "John Doe",
  "age": 35,
  "email": "johndoe@example.com"
}
In this example, the object has three key-value pairs: "name", "age", and "email". The key is a string that identifies the value, and the value can be a string, number, boolean, object, or array.

JSON Arrays:
JSON also supports arrays, which are ordered lists of values. Here is an example of a JSON array:


[
  {
    "name": "John Doe",
    "age": 35,
    "email": "johndoe@example.com"
  },
  {
    "name": "Jane Doe",
    "age": 28,
    "email": "janedoe@example.com"
  },
  {
    "name": "Bob Smith",
    "age": 42,
    "email": "bobsmith@example.com"
  }
]
In this example, the array contains three objects, each with the same key-value pairs as the previous example.

JSON Parsing:
To parse a JSON string in JavaScript, you can use the built-in JSON.parse() method. Here is an example:


const jsonString = '{"name": "John Doe", "age": 35, "email": "johndoe@example.com"}';
const jsonParsed = JSON.parse(jsonString);
console.log(jsonParsed.name); // Output: "John Doe"
console.log(jsonParsed.age); // Output: 35
console.log(jsonParsed.email); // Output: "johndoe@example.com"
In this example, we first define a JSON string and then use the JSON.parse() method to parse it into a JavaScript object. We can then access the values using dot notation.

JSON Stringify:
To convert a JavaScript object to a JSON string, you can use the built-in JSON.stringify() method. Here is an example:


const jsonObject = {
  name: "John Doe",
  age: 35,
  email: "johndoe@example.com"
};
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString); // Output: '{"name":"John Doe","age":35,"email":"johndoe@example.com"}'
In this example, we define a JavaScript object and then use the JSON.stringify() method to convert it to a JSON string.


*/ 