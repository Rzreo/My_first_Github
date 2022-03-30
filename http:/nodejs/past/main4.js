
const EventEmitter = require('events');//EventEmitter라는 클래스를 반환함

const myEmitter = new EventEmitter();//객체생성(클래스이기때문)
const myEmitter2 = new EventEmitter();

myEmitter.on('test',()=>{
    console.log('Success!');
});//on메소드: 이벤트가 발생했을 때 실행할 콜백을 등록함(test라는 이벤트가 일어나면 콜백을 등록함)

myEmitter.emit('test');//emit메소드: 이벤트를 직접 발생시킴 ('test'이벤트 발생)
//on과 emit의 순서가 바뀌면 안됨(콜백 등록이 안되기 때문)

myEmitter.on('test',()=>{
    console.log('1');
});

myEmitter.on('test',()=>{
    console.log('2');
});

myEmitter2.on('test',()=>{
    console.log('3');
});

myEmitter.once('test',()=>{
    console.log('once');
});//이벤트가 여러번 발생해도 한번만 실행함

myEmitter.emit('test');//하나의 이벤트에 다수의 콜백을 등록할 수 있고 순서는 등록한 순서대로 나옴
//myEmitter2객체와 myEmitter객체는 다름, 이벤트 발생은 발생한 객체만 반응함

console.log(myEmitter2.listeners('test'));//리스너들을 출력

const callback = ()=>{
    console.log('OFF');
};
myEmitter.on('test',callback);
myEmitter.off('test',callback);//콜백취소 여러개 취소하려면 콜백함수를 배열에 넣고 여러번 취소해야함

myEmitter.on('test',(arg1,arg2)=>{//인자가 적으면 적은만큼 받아오고 많으면 나머지는 undefined가 됨
    console.log(arg1);
    console.log(arg2);
});

myEmitter.emit('test', 'apple','banana','pear');//콜백함수에 인자전달

const obj = {type:'text',data:'Hello CodeIt',date:'2020-09-01'};

myEmitter2.on('test',(info)=>{
    console.log(info);
});

myEmitter2.emit('test',obj);//객체 하나를 전달하는 것이 더 깔끔함
