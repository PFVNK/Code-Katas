//Javascript filter - 1



function searchNames(logins) {
  let final = []
  for (let i = 0; i < logins.length; i++) {
    let arr = logins[i]

    if (arr[0][arr[0].length - 1] === '_') {
      final.push(arr)
    }
  }

  return final
}

function searchNames(logins) {
  return logins.filter(arr => arr[0][arr[0].length - 1].includes('_'))
}

const searchNames = (logins) => logins.filter(arr => arr[0][arr[0].length - 1].includes('_'))


console.log(
  searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]]), [["bar_", "bar@bar.com"]])
