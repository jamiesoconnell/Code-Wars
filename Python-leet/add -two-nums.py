# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.

# Input: l1 = [0], l2 = [0]
# Output: [0]


# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]


def add_two_number(l1,l2):
    l1 = l1[::-1]
    l2 = l2[::-1]
    num1 = int(''.join(map(str, l1)))
    num2 = int(''.join(map(str, l2)))

    result1 = num1 + num2
    result2 = [int(nums) for nums in str(result1)]
    
  
    return result2[::-1]
  


print(add_two_number([2,4,3],[5,6,4])) #708
print(add_two_number([0],[0]))#0
print(add_two_number([9,9,9,9,9,9,9],[9,9,9,9])) #[8,9,9,9,0,0,0,1]