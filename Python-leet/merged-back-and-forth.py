
def combine(arr1, arr2):
  final_arr = [];
  max_length = max(len(arr1), len(arr2));

  for i in range(max_length):
    if i < len(arr1):
      final_arr.append(arr1[i]);
    if i < len(arr2):
      final_arr.append(arr2[i]);
    
  return final_arr;


print(combine(["a", "b", "c", "d", "e", "f", "g"], [1, 2, 3, 4, 5]));
