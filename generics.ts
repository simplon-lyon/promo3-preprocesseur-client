
function printNumber(num: number) {
    console.log(num);
}

function printString(str: string) {
    console.log(str);
}

function printBool(b: boolean) {
    console.log(b);
}

function printAny(a: any) {
    if (typeof a === 'boolean') {
        console.log(a);    
    }
    if (typeof a === 'string') {
        console.log(a);    
    }
    if (typeof a === 'number') {
        console.log(a);    
    }
}

function print<T>(t: T) {
    console.log(t);
}

print<boolean>(true);

function identity<T>(arg: T): T {
    return arg;
}

let i = identity<string>("toto");