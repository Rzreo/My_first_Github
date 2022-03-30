
const http = require('http');
users = ['Tom','Andy','Jessica','Paul'];
const server = http.createServer((request,response) => {//arrow function
   if(request.url === '/'){//url에 /를 안적어도 자동으로 /이 붙어서 들어옴
       response.end('<h1>Welcome!</h1>');
   }else if(request.url === '/users'){
       response.end('<h1>' + users + '</h1>');
   }else if(request.url.split('/')[1] === 'users'){//split메소드: '/'을 기점으로 나눔
       const userIdx = request.url.split('/')[2];
       const userName = users[userIdx-1];

       response.end(`<h1>${userName}</h1>`);//'가 아닌 `로 감싸고 변수는 ${}로 감싸기
   }else{
       response.end('<h1>Page Not Available</h1>');
   }
});//url에 따라 다른걸 하는 것을 라우팅이라 함
server.listen(3000);
//변수는 가능한 상수로 선언하기
