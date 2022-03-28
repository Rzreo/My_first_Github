/*function add(a,b){
    return a+b;
}

exports.plus=add;//모듈 내부의 함수를 외부에 공개해야 공유 가능 plus(외부에 공개할 이름) add(공개할 함수명)
*/
let calculater = {
    PI: 3.14,
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b,
};

module.exports = calculater;//공개하고싶은 객체를 공유할 때는 module.exports를 사용해야함