const m = require('./math-tools.js');//모듈을 로드해주는 함수,주소가인자, ./ :현재디랙토리, 객체 하나를 리턴
//객체를 공유하면 m에는 공유한 객체가 리턴됨
console.log(m.PI);
console.log(m.add(1,2));
console.log(m.multiply(1,2));

const fs = require('fs');//코어모튤(node 내장, 경로필요없음) 파일시스템 모듈

let fileList = fs.readdirSync('.');//특정 경로에 있는 파일 이름들을 배열의 형태로 리턴함
console.log(fileList);

fs.writeFileSync('new','Hello Node.js!');//new라는 파일에 Hello Node.js!라는 내용을 쓰는 함수, new라는파일이 없으면 생성

const os = require('os');//os모듈

console.log(os.cpus());//현재 cpu정보 리턴
