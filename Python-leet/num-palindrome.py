def is_palindrome(num):
    num_list = list(str(num))
    return num_list == num_list[::-1]

print(is_palindrome(123454321), "True")
print(is_palindrome(2913723), "False")
print(is_palindrome(76567), "True")