myinputarr = [1, 1, 2,2,3,3];
size=myinputarr.length;

console.log(myinputarr);

//setting the values
var mp = new Map();
for (var i = 0; i < size; i++) {
  mp.set(myinputarr[i], 0);
}

//making the record of how many times each number is occuring
for (var i = 0; i < size; i++) {
  var a = myinputarr[i];
  var b = mp.get(a);
  b++;
  mp.set(myinputarr[i], b);
}

var max = -1000;
var min = 1000;

//it keeps the record of the element
var max_element = 0;
var min_element = 0;

for (var i = 0; i < size; i++) {

  //equal to becasue if the its apperance is same we need to output the bigger one
  if (mp.get(i) >= max) {
    max = mp.get(i);
    max_element = i;
  }

  //no equal to sign becasue if the its apperance is same we need to output the bigger one
  if (mp.get(i) < min) {
    min = mp.get(i);
    min_element = i;
  }
}

//Answer 

console.log(max_element, min_element);
