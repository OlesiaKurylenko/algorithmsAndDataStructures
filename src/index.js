let Stack = require('./Data/Stacks/Stack.class');
function main() {
    let stack = new Stack();
    stack.push('first');
    stack.push('seconsd');
    stack.push('true');
    stack.push('for');
    console.log(JSON.stringify(stack))
    stack.pop()
    console.log(stack)
    stack.pop()
    console.log(stack)
    stack.pop()
    console.log(stack)
    stack.pop()
    console.log(stack)
}
main();