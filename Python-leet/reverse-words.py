def reversed_words(str):
  words = str.split(' ')
  reversed_sentence = ' '.join(reversed(words))
  return reversed_sentence

print(reversed_words("Today is a beautiful day"))
print(reversed_words("Monkeys eat bananas"))