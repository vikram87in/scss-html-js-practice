# this

<details>
<summary> -> </summary>
<br>

`BASIC` **Q: What does the this keyword refer to in JavaScript?**
<details>
<summary>Click to see Answer</summary>
'this' refers to the object that is the current execution context, and its value depends on how the function is called.

<br>

**Rules:**

- Default (global)

  - Non-strict: this = global object (window / global)

  - Strict: this = undefined

- Implicit binding (obj.method())

  - this = object before the dot

- Explicit binding (call, apply, bind)

  - this = explicitly provided object

- Constructor / class (new keyword)

  - this = newly created object

- Arrow functions

  - this = lexical scope (inherited from surrounding code)

- Event listeners

  - Normal function: this = element

  - Arrow function: this = outer scope

👉 In short: this is determined at call-time (except arrow functions, which capture it lexically).
</details>
<br>

---
<br>

`BASIC` **Q: What is the difference between arrow functions and normal functions with respect to 'this'**
<details>
<summary>Click to see Answer</summary>

* Normal functions: 'this' is dynamic — set by call site (method call, plain call, call/apply/bind, new).

* Arrow functions: 'this' is lexical — inherited from the surrounding (defining) scope and cannot be changed with call, apply, or bind.

**Implication:** Arrow functions are great for callbacks when you want the outer this, but not for object methods that require their own this.
</details>
<br>

---
<br>

`BASIC` **Q: Difference between call, apply, and bind?**
<details>
<summary>Click to see Answer</summary>

All three set 'this' explicitly:

- func.call(thisArg, arg1, arg2, ...) — invoke immediately with arguments listed.

- func.apply(thisArg, [argsArray]) — invoke immediately with arguments as an array.

- func.bind(thisArg, arg1, ...) — returns a new function permanently bound to thisArg (can be called later).
</details>
<br>

---
<br>

`BASIC` **Q: What will be the output?**
```js
const person = { 
  name: "Alice", 
  sayName() { console.log(this.name); } 
};
const fn = person.sayName;
fn(); 
```
<details>
<summary>Click to see Answer</summary>
 TypeError: "Cannot read properties of undefined" as 'this' is undefined. Since the function is called standalone (without any object on left side of .), 'this' becomes either the global object (non-strict) or undefined (strict). For browser APIs like setTimeOut, 'this' becomes window object even in the strict mode
 
 **Fixes:** person.sayName.bind(person), fn.call(person), etc
</details>
<br>

---
<br>

`BASIC` **Q: What does 'this' refer to inside a DOM event handler?**
```js
const btn = document.querySelector("button");
btn.addEventListener("click", function() {
  console.log(this); // ?
});

```
<details>
<summary>Click to see Answer</summary>
 Inside a normal (not arrow) function used as an event handler, 'this' refers to the element that received the event (here, the button).
</details>
<br>

---
<br>

`INTERMEDIATE`
What will be the output?
```js
const obj = { 
  name: "Bob", 
  greet: () => console.log(this.name) 
}; 
obj.greet();
```
<details>
<summary>Click to see Answer</summary>
Arrow functions don’t have their own this; they use this from the surrounding lexical scope (likely the module/global scope). So this inside the arrow is not the object obj. It will be undefined in strict mode and hence throw an error: "TypeError: Cannot read properties of undefined (reading 'name')"
</details>

<br>

---
<br>

`INTERMEDIATE`   `ADVANCED`

What is the difference between currying and partial application?
<details>
<summary>Click to see Answer</summary>

Currying → transforms a function so it takes one argument at a time.

`f(a, b, c) → f(a)(b)(c)`


Partial Application → fixes some arguments, returns a function with remaining args.

`f(a, b, c) → f(a)(b, c)`


Example:

```js 
// Currying
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3)); // 6

// Partial Application
function add(a, b, c) {
  return a + b + c;
}
const addOne = add.bind(null, 1);
console.log(addOne(2, 3)); // 6
```

</details>

</details>