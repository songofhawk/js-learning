/**
 * 从1..m个数中，取n个数，互不重复，且按照顺序排列
 */
let m = 9, n = 5

//存放组合数的数组
let numbers = Array.from(new Array(n), (x,i) => i + 1)
console.log(...numbers)
// [1,2,3,4,5]

//存放每个数字位可以存放的最大值
let max_num = Array.from(new Array(n), (x,i) => m - n + i + 1) 
console.log(...max_num)
// [5,6,7,8,9]

//大致的算法是个不断翻页的记分牌，每次翻到最大值就进一位
let times = 0
while(true){
    times++
    console.log(...numbers, `times:${times}`)
    let i   //当前位
    for (i=n; i>=0; i--){
        if (numbers[i]<max_num[i]){
            // 正常情况下末位+1，否则进位，那么后面的位数全部重置为比前一位大1
            numbers[i]++
            for (let k=i+1; k<numbers.length; k++){
                numbers[k]= numbers[k-1]+1
            }
            break
        }
    }
    if (i<0){
        break
    }
}
