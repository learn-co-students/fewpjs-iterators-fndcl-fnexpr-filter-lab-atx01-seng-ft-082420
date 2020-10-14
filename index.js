const findMatching = (array, name) => {
    return array.filter( driver => driver.toLowerCase() === name.toLowerCase() );
}

const fuzzyMatch = (drivers, name) => {
    // let num = name.split(' ').count
    return drivers.filter( driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0 );
}

const matchName = (drivers, name) => {
    return drivers.filter( driver => driver.name ===  name );
}