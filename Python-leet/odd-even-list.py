def odd_and_even(arr):
  arr1 =[]
  arr2 = []

  for i in arr:
    if i % 2 == 0:
      arr1.append(i)
    else:
      arr2.append(i)

  return arr2+arr1

print(odd_and_even([1,2,3,4,5]))
