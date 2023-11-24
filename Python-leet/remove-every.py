
def removeEvery(list, val):
  answer_list = []
  for i in list:
    if i != val:
      answer_list.append(i)
  return answer_list
  
print(removeEvery([3,2,2,3,4,6,5,3,2,4,3], 3))
print(removeEvery([1,2,31,4,5,61,7,8], 1))