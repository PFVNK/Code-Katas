function toCamelCase(str){
    str = str.replace(/[^0-9a-z]/gi, ' ')
    str = str.split(' ')

    for(let i = 0; i < str.length; i++) {
        str = str[i].charAt(0).toUpperCase() + str[i].substring(1)
    }

    return str.join(' ')
}


console.log(toCamelCase(''), '')
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")
console.log(toCamelCase("A-B-C"), "ABC")