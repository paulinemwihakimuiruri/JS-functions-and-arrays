function stringReturn(str){
    return str.map(word =>
        word.length
    )
}

console.log(stringReturn(["ben","Jane"]));

function EvenNums(arr){
    return arr.filter(num =>{
        if(num%2 === 0){
            console.log(num);
        }
    })
}

EvenNums([2,3,1,5,6,7])

function studentNames( studentArr){
    return studentArr.filter(student=>{
        if(student.score >75){
            console.log(student);
        }
    })
}
studentNames([{name: 'Line', score: 40}, {name: "Ben", score: 80}, {name: "Betty", score: 85}, {name: "teddy", score: 70}]);

function squaredNum(nums){
    return nums.map(num=>{
        console.log(num*num);
    })
}

squaredNum([6, 4, 12]);

function stringTypeReturn(arr){

    let newArray = arr.filter(item => typeof item === "string")
    return newArray.map(element=>element.toUpperCase());
}
let array2=[1, "Four", 2, "Ben", true, 2.5]

console.log(stringTypeReturn(array2));
