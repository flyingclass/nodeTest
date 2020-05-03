var AObj = { AVal: 'AAA'};
// var BObj = { BVal: 'BBB'};
// BObj.__proto__ = AObj;

var BObj = Object.create(AObj);
BObj.BVal = 'BBB';
debugger; // 개발자 도구로 객체 내부 분석

console.log('BObj.BVal => ', BObj.BVal);
console.log('BObj.AVal => ', BObj.AVal);
console.log()

BObj.AVal = 'CCC';
console.log('AObj.AVal => ', AObj.AVal);
console.log('BObj.AVal => ', BObj.AVal);