// variables
var normal = "This is normal";
let table = {

    gHUser: "SpellingBee278",
    pLanguage: "Javascript"


};
var foo = "foo";
var bar = "bar";

let dir = {

    dir: "Direction",
    dim: "Dark",
    dip: "Put a little of sauce, mustard etc. on it"


};
// so this is getting to complex vars


console.count('clicks');

Math.pow(10, 20);

console.count('clicks');

// consoles
console.log(normal);
console.table(table);
// apparently i cant get assert working because its hard :/
console.log({foo, bar});
console.table({foo, bar});
console.dir(dir);
console.time();

function warn() {
    console.warn('Roses are red. Violets are blue. Unexpected { at line 42.');

    {}
}
warn();


console.error("An error has occurred");

function time() {

    console.time("Looper");
    console.timeEnd("Looper")

}

time();
// spread console.log
const tar = "Hello";
const gar = "Hi";
const par = "Howdy!";
console.log(...tar, ...gar, ...par);
