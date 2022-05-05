// map presrves the order of insertion of key value pairs.
// map also preserves the  data type of keys  i.e it doesn't convert the keys to string by default as object does i.e so, map can stores keys of any datatype 

// how to create a map
let map = new Map();

// how dop we set values
map.set("name","Kuldeep");
map.set("age",24);
map.set("phone",9876543210);
map.set(1,"one");
map.set(true,"true");

// get
console.log(map.get("1"));
console.log(map.get("name"));
console.log(map.get(1));

// has
console.log(map.has("EMAIL"));

// delete
map.delete(1);

// clear
// map.clear()

console.log(map);
console.log(map.size);

for(let key of map.keys()){
    console.log(key);
}

for(let value of map.values()){
    console.log(value);
}

for(let entry of map.entries()){
    console.log(entry);
}

map.forEach(function(value,key){
    console.log(key,value);
})

// SET has no keys but only UNIQUE values

let set = new Set();
set.add("apple");
set.add("guava");
set.add("orange");
set.add("Mangoes");
set.add("Litchi");

console.log(set);

// get
console.log(set.add("1"));
console.log(set.add("name"));
console.log(set.add(1));

// has
console.log(set.has("EMAIL"));

// delete
map.delete(1);

// clear
// map.clear()

console.log(set);
console.log(set.size);

for(let key of set.keys()){
    console.log(key);
}

for(let value of set.values()){
    console.log(value);
}

for(let entry of set.entries()){
    console.log(entry);
}

set.forEach(function(value,key){
    console.log(key,value);
})
