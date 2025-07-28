console.log("Starting Browser Console Speed Test...");

const iterations = 1000000;
let start, end;

// Test 1: Simple arithmetic
start = performance.now();
let sum = 0;
for (let i = 0; i < iterations; i++) {
  sum += i;
}
end = performance.now();
console.log(`Arithmetic (${iterations} iterations): ${(end - start).toFixed(2)} ms`);

// Test 2: Array push
start = performance.now();
let arr = [];
for (let i = 0; i < iterations; i++) {
  arr.push(i);
}
end = performance.now();
console.log(`Array push (${iterations} iterations): ${(end - start).toFixed(2)} ms`);

// Test 3: Array pop
start = performance.now();
for (let i = 0; i < iterations; i++) {
  arr.pop();
}
end = performance.now();
console.log(`Array pop (${iterations} iterations): ${(end - start).toFixed(2)} ms`);

// Test 4: Object property assignment
start = performance.now();
let obj = {};
for (let i = 0; i < iterations; i++) {
  obj['prop' + i] = i;
}
end = performance.now();
console.log(`Object property assignment (${iterations} iterations): ${(end - start).toFixed(2)} ms`);

console.log("Speed Test Complete.");
