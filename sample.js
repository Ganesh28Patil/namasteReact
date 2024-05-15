var threeSum = function(nums) {
    let sortedArr = nums.sort((a,b)=>a-b);
    let solution = [];
    // console.log(sortedArr);
    for(let i = 0; i < sortedArr.length-2; i++){
        let firstNum = sortedArr[i];
        let secondNum = sortedArr[i+1];        
        for(let j = i + 2; j < sortedArr.length; j++){
            let thirdNum = sortedArr[j];
            console.log(firstNum,secondNum,thirdNum);
            if(firstNum + secondNum + thirdNum === 0){
                solution.push([firstNum,secondNum,thirdNum]);
            }
        }
    }
    // console.log('solution:', solution)

    for(let i = solution.length - 1; i > 0; i--){
        let count = 0;
        let arr = solution[i].sort((a,b)=>(a-b));
        let nextArr = solution[i-1].sort((a,b)=> (a-b));
        for(let ele of arr){
            if(arr[ele] === nextArr[ele]){
                count++;
            }else{
                count = 0;
            }
        }      
        if(count === arr.length){
            solution.pop();
        }

    }
    // console.log(solution);
};

threeSum([0,0,0,0]);