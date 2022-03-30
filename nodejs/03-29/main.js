//ctrl+c로 서버종료
const http = require('http');

let server = http.createServer(function (request,response){//서버에 클라이언트의 요청이 들어올 때마다 실행되는 함수//request:클라이언트의 요청,response:서버의 응답
    response.end('<h1>Hello world!</h1>');
});//서버역할을 하는 객체 생성
server.listen(3000);//클라이언트의 요청을 받아들임(port번호)
