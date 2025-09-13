function test() {
  console.log(a); // undefined (hoisted)
  var a = 10;
  console.log(a); // 10

  console.log("next test");
  let b = 20;
  console.log(b);
    b = 30; // ✅ Allowed
  console.log(b);
   // let b = 40; ❌ SyntaxError: already declared
console.log(b);

 console.log("next test");

 const c = 50;
// c = 60; ❌ TypeError

const obj = { name: "Anish" };
obj.name = "Qureshi"; // ✅ Allowed (modifying property)
console.log(obj.name);
}

test();