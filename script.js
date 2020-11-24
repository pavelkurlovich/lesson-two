'use strict';

// задание 1
// true(1) + false(0)=1 
// 12 / "6"=2 (после арифметического действия,строка преобразуется в число)
// "number" + 15 + 3=number153 (все значения станут строчными, number стоит перед числами)
// 15 + 3 + "number"=18number (сначала складываются числа затем преобразуется в строку)
// [1] > null=true (число массива 1 больше пустого значения)
// "foo" + + "bar"=fooNaN (второй плюс преобразовывает строку в число, вместо bar будет NaN)
// 'true' == true=false ('string' != boolean)
// false == 'false'=false (boolean != 'string')
// null == ''=false (boolean != 'string')
// !!"false" == !!"true"=true (двойной восклицательный знак вернет true)
// [‘x’] == ‘x’=true (строка в массиве равна обычной строке)
// [] + null + 1=null1
// 0 || "0" && {}=Object {}
// [1,2,3] == [1,2,3]=false

// задание 2
let i = 3;
while (i) { 
  console.log( i-- );
}
// цикл остановится когда i будет равно 0, условие станет false

// задание 3
let num = 30;
while (num<=61) { 
  console.log( num++ );
}

// задание 4
let num2 = 12;
while (num2 <= 670) {
    if (num2%10 == 0){
        console.log(num2);
    }
num2++;
}

// задание 5
for (let i=10; i<=100; i++) {
    console.log(i);
}

// задание 6
let arr = [1,6,8,14,0,4];
for (let i = 0; i <=arr.length; i++) {
    if((arr[i]>= 3) && (arr[i]<=10 )){
        console.log(arr[i]);
    }
}

//7 задание 
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str2 = '-';
    for (let i2 = 0; i2 < arr2.length; i2++) {
        str2+= arr2[i2] + '-';   
}
    console.log(str2);

//8 задание 
const arr3 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i3 = 0; i3 < arr3.length; i3++) {
    if (arr3[i3] == 'Sunday' || arr3[i3] == 'Saturday') {
        console.log('%c%s','font-weight: bold;', arr3[i3]);
    } else {
        console.log(arr3[i3]);
    }
 }

//9 задание 
const arr4 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = 'Saturday';
for (let i4 = 0; i4 < arr4.length; i4++) {
    if (arr4[i4] == day) {
        console.log('%c%s','font-style: italic;', arr4[i4]);
    } else {
        console.log(arr4[i4]);
    }
}

//10 задание 




