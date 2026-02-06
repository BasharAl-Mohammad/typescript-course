const stringEcho = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(checkBoolValue(false));
console.log(checkBoolValue(0));
console.log(checkBoolValue(true));
console.log(checkBoolValue(1));
console.log(checkBoolValue('Dave'));
console.log(checkBoolValue(''));
console.log(checkBoolValue(null));
console.log(checkBoolValue(undefined));
console.log(checkBoolValue({}));
console.log(checkBoolValue({ name: 'Dave' }));
console.log(checkBoolValue([]));
console.log(checkBoolValue([1, 2, 3]));
console.log(checkBoolValue(NaN));
console.log(checkBoolValue(-0));
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'John' }));
// console.log(processUser({ name: 'John' }));
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
//////////////////////////////////////////////////////////////////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
store.state = 'Dave';
// store.state = 12;
const myState = new StateObject(23);
myState.state = 'John';
myState.state = 12;
myState.state = true;
export {};
//# sourceMappingURL=main.js.map