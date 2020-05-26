//Welcome!  https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

//Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.



function greet(language) {
  let greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }

  for (let [key, value] of Object.entries(greetings)) {
    if (language === key) {
      return value
    }
  }

  return 'Welcome'
}



console.log(greet('english'), 'Welcome');
console.log(greet('dutch'), 'Welkom');
console.log(greet('IP_ADDRESS_INVALID'), 'Welcome');