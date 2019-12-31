//printer-errors   https://www.codewars.com/kata/printer-errors/train/javascript

//description: You have to write a function printer_error which given a string will output the error rate of the printer



function printerError(s) {
  let length = s.length
  let error = 0

  for (i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 109) {
      error += 1
    }
  }

  return `${error}/${length}`
}




var s = "mkcchkhbeilacijjehkidbfgbbjheglecemkgkiaccbeefikheaahkaahchljmdfldcmeikdibcdkmgkbmhafcimkdlcldeeieibgekajcejefdllidbhlfilmhfacgehffmlagjadlhkfalkeeabimlgfjkkhiiecgfemfdbabmjilacfajhhgjgmafbkjfijhmaemfbecekkkjambfljbdmfcgmjgabeegmfimgfhdcaicchlmfkeiaaidbleamibbakacjgeddabmbihlemdjaahcehcaaladhifdgfajbgbbcejahmllglkfjemffdlihkhbmadhgbajkeehaabiaiaemjabgifhfcdihegciaecehgblbicajjmcegmbahfgbgglefddhcabgijhmdjldfelmlakjaaimmchcmcadgfcmjjccldkefflhlkgjgdbalhfbadhmcjfdejblhmdbbehbejiigddhbamajjckfhfhkdhcfdkjmgjbcahmeigkeghjcijgkiekaegedmkajbjcjigmifbebmbjckfakjmafbjceabfcajdclfmvdghhfhkgedibdhkenfbajhcfmjlefkkcatliadjkcgcfjakdlepkkldaaljiaheikhdzjfdkdjjfmmibehhctiicikilcbbakfihetjfjcbfdahbimgikmsaejmbekmaigebbhfqhgegkdjhdlbhgddenldabeamiadllccgercljaelmekha"
console.log(printerError(s), "11/760")