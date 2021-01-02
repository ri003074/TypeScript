export { };

let arr: number[] = [1, 2, 3, 3, 5]
console.log(arr)

const removeDuplicate = (arr: number[]) => {
    console.log("rm")
    return [...new Set(arr)]
}

const result = removeDuplicate(arr)
console.log(result)