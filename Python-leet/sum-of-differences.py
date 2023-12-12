def sum_of_differences(arr):
    if len(arr) <= 1:
        return 0

    new_arr = sorted(arr, reverse=True)

    result = sum(new_arr[i] - new_arr[i + 1] for i in range(len(new_arr) - 1))
    return result