//1)Number pattern
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

let i = 10;

 document.write('<h3>1.Number pattern : </h3>');
for(let i=1; i<=5; i++){
    let src = " ";
    for(let j =1; j<=i; j++){
        src += j + " ";
    }
    console.log(src);
    document.write(src, '<br>');
}

//2)
//1 
//2 1
//3 2 1
//4 3 2 1
//5 4 3 2 1 

let b = 5;
 document.write('<h3>2.Number pattern : </h3>');
for(let i = 1; i<=b; i++){
    let src1 = " ";
    for(let j = i; j>=1; j--){
        src1 += j + " ";
    }

    console.log(src1);
    document.write(src1, '<br>')
}

//3)
//1
//2 2
//3 3 3 
//4 4 4 4 
//5 5 5 5 5

let a = 5;
 document.write('<h3>3.Number pattern : </h3>');
for(let i=1; i<=a; i++){
    let src2 = " ";
    for(let j =1; j<=i; j++){
        src2 += i + " ";
    }
    console.log(src2);
    document.write(src2, '<br>')
}

//4)
// 1 0 1 0 1
// 0 1 0 1 
// 1 0 1
// 0 1
// 1

let c = 5;
 document.write('<h3>4.Number pattern : </h3>'); 
for(let i=1; i<=c; i++){
    let src3 = " ";
    for(let j=1; j<=6-i; j++){
        if((i+j)% 2 == 0){
            src3 += "1 ";
        }else{
            src3 += "0 ";
        }
    }
    console.log(src3);
    document.write(src3, '<br>')
}

//5)
//1
//0 1
//1 0 1
//0 1 0 1
//1 0 1 0 1

let d = 5;
 document.write('<h3>5.Number pattern : </h3>'); 
for(let i=1; i<=c; i++){
    let src3 = " ";
    for(let j=1; j<=i; j++){
        if((i+j)% 2 == 0){
            src3 += "1 ";
        }else{
            src3 += "0 ";
        }
    }
    console.log(src3);
    document.write(src3, '<br>')
}

//6) 
// - 
// | -
// - | -
// | - | - 
// - | - | -

let e = 5;
 document.write('<h3>6.Number pattern : </h3>'); 
for(let i = 1; i<=e; i++){
    let src4 = " ";
    for(let j= 1; j<=i; j++){
        if((i+j)%2 == 0){
            src4 += "- ";
        }else{
            src4 += "| ";
        }
    }
     console.log(src4);
    document.write(src4, '<br>')
}


//7)
//1
//2 3
//4 5 6
//7 8 9 10
//11 12 13 14 15

let g = 1;
 document.write('<h3>7.Number pattern : </h3>'); 

for(let i = 1; i<=5; i++){
    let src6 = " ";
    for(let j=1; j<=i; j++){
        src6 += g + " ";
        g++;
    }

    console.log(src6);
    document.write(src6, '<br>');
}

//8)
//        1
//      1 2
//    1 2 3
//  1 2 3 4
//1 2 3 4 5

document.write('<h3>8.Number pattern : </h3>'); 
 
const h = 5;
  document.getElementById('output').textContent = ''; // textContent : It retrieves (or sets) the text inside a given HTML or DOM node, including its children, but excluding any HTML tags.
  for (let i = 1; i <= h; i++) {
    let line = '  '.repeat(h - i); // repeat : powerful way in JavaScript to generate leading spaces for formatting output
    for (let k = 1; k <= i; k++) {
      line += k + ' ';
    }
    console.log(line);
    document.getElementById('output').textContent += line + '\n';
  }


// 9)
//5 4 3 2 1
//4 3 2 1
//3 2 1
//2 1
//1

const j = 5;
document.write('<h3>9.Number pattern : </h3>'); 
for(let i=5; i>= 1; i--){
    let src8 = " ";
    for(let j=i; j>=1;j--){
        src8 += j + " ";
    }
    console.log(src8);
    document.write(src8, '<br>');
}

//looping with pattern
//custom pattern

//10)
//1 2 3 4 5
//1 2 3 4 
//1 2 3
//1 2
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5 

const max = 5;
for (let i = max; i >= 1; i--) {
      let src9 = '';
      for (let j = 1; j <= i; j++) {
        src9 += j + ' ';
      }      
      console.log(src9);
}
for (let i = 2; i <= max; i++) {
      let src9 = '';
      for (let j = 1; j <= i; j++) {
        src9 += j + ' ';
      }      
      console.log(src9);
}

//11)
//1 
//1 2 
//1 2 3
//1 2 3 4 
//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2 
//1 

const l = 5;

for(let i=1; i<=5; i++){
    let src10 = " ";
    for(let j=1; j<=i; j++){
        src10 += j + " ";
    }

    console.log(src10);
}
for(let i = l; i>=1; i--){
    let src10 = " ";
    for(let j = 1; j<=i; j++){
        src10 += j + " ";
    }

    console.log(src10);
}

