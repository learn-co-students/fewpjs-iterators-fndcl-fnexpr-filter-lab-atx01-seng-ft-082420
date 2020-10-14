// Code your solution here
let findMatching = (arr, name ) => arr.filter(n =>{
    return n.toLowerCase() == name.toLowerCase()
})

let fuzzyMatch = (arr, partial) => arr.filter(name =>{
    return name.toLowerCase().indexOf(partial.toLowerCase()) == 0
})

let matchName = (arr, name) => arr.filter(n => n.name == name)