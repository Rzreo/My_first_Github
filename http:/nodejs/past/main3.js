const fs = require('fs');

/*//동기실행
console.log('Start');

let content = fs.readFileSync('./new','utf8');//readFileSync:동기실행->이 작업 끝나기 전까진 다음 작업으로 넘어가지 않음
console.log(content);

console.log('Finish');
*/
//비동기실행
console.log('Start');

fs.readFile('./new','utf8',(error,data)=>{
    console.log(data);//파일을 읽었을 때 실행할 함수(콜백등록)
})//readFile:비동기실행 특정 작업이 완료되었을 때 실행할 콜백을 등록해 두고 바로 다음 코드로 실행을 넘기는 것(nodejs는 비동기함수 사용을 권장함)

console.log('Finish');
