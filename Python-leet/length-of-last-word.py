def wordLength(str):
  words = str.split(' ')

  return len(words[len(words) - 1]);


print(wordLength("what is the length of the last words"))