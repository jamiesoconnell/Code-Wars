// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a){
    let str = a.replace(/[eiou]/gi, '*')
    let str1 = str.replace(/[aA]/gi, '@')
    let finalstr = str1.split(' ')
    let answer = finalstr[0]+ '!!!! '+ finalstr[1]+ '!!!! '+ finalstr[2]+ '!!!! '+ finalstr[3]+ '!!!!'
    return answer.toUpperCase()
    }
  
    function gordon(s){
        return s.toUpperCase().replace(/\b\w+\b/g,'$&!!!!').replace(/A/g,'@').replace(/[UIOE]/g,'*')
      }  