
const http = require('http');

const express = require('express'); //express 서드파티모듈

const app = express();

const users = ['Tom','Andy','Jessica','Paul'];


app.get('/', (request,response)=>{//get메소드는 특정 path에 대해서 그 요청과 응답을 가르는 함수를 하나씩 설정하기 위한 메소드
    response.end('<h1>Welcome!</h1>');
});

app.get('/users',(request,response)=>{
    response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id',(request,response)=>{//:뒤의 문자(id)는 :뒤에오는 값을 문자(id)(request.params의 속성이 됨)에 넣어라=>request.params.id에 들어감 
    const userName = users[request.params.id-1];
    response.end(`<h1>${userName}</h1>`);
});

app.get('*',(request,response)=>{//*:그 밖에 모든 path를 의미(마지막 순서이어야 함)
    response.end('<h1>Page Not Available</h1>');
});

app.listen(3000);
