# Task
# Given a string, return if a given letter always appears immediately before another given letter.

# Worked Example
# ("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

def best_friend(str, a, b):
  if str.count(a)== str.count(a+b):
    return True


print(best_friend("he headed to the store", "h", "e"))