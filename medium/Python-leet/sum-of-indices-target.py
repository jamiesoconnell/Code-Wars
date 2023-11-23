def sum_of_indices(list, target):
  for i in range(len(list)):
    for j in range(i+1, len(list)):
      if list[i]+list[j] == target:
        return [i, j]

print(sum_of_indices([2,7,11,15], 9))
print(sum_of_indices([3,2,4], 6))
print(sum_of_indices([3,3], 6))