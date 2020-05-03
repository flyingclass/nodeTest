var memberO ={
    manager:'rchcom',
    developer: 'hippocamp',
    designer:'lily'
}

console.log('memberO.designer', memberO.designer);
console.log("memberO['designer']", memberO['designer']);

memberO.designer = 'lilyKim' //수정

console.log('memberO.designer', memberO.designer);
console.log("memberO['designer']", memberO['designer']);

delete memberO.designer;  //삭제
console.log('memberO.designer', memberO.designer);