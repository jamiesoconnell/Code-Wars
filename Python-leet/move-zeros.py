
def move_zeros(lst):
  zeros = []
  answer = []
  for i in lst:
      if i == 0:
        zeros.append(i)
      else:
        answer.append(i)
  
  return answer + zeros

print(move_zeros([1,2,3,4,0,5,0,6,7,0,8,0,0,9,10,0,11,0,0,]))