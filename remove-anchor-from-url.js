//remove-anchor-from-url   https://www.codewars.com/kata/remove-anchor-from-url/train/javascript

//description: Complete the function/method so that it returns the url with anything after the anchor (#) removed. 



function removeUrlAnchor(url) {
  url = url.split('')

  for (i = 0; i < url.length; i++) {
    if (url[i] === '#') {
      return url.splice(0, i).join('')
    }
  }

  return url.join('')
}



console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
console.log(removeUrlAnchor('www.codewars.com?page=1'), 'www.codewars.com?page=1');