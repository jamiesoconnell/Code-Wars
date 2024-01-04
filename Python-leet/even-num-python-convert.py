def even_numbers(array, number):
  new_list = []
  for num in array:
      if num % 2 == 0:
          new_list.append(num)

  return new_list[-number:]

# Example usage:
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = even_numbers(my_list, 3)
print(result)