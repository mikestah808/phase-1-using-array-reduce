const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const reducer = (accumulator, item) => {
//     let total = 0;
//     const batteries = () => {
//         let totalBatteries = 0;
//         totalBatteries = item
//         console.log(totalBatteries)
//         return total += totalBatteries
//     }
//     return accumulator +=total
// }


// let totalBatteries = batteryBatches.reduce(reducer, 0);



const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(totalBatteries);