//gives me the times table of the number Seven
function showMultiplicationTable(num) {

    for (i =1; i <=10; i++){

        console.log(num + " X " + i +" = "+num*i);
    }}
showMultiplicationTable(7);

// This is how you get a random number between 50 and 100
//var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
//Math.floor(Math.random() * 5) + 1;


for (var i=1; i<=10; i++){
    var j= Math.floor(Math.random()* 180 )+20;
    if (j % 2 == 0) {
       console.log('This number is even '+ j);
    } else {
        console.log("This number is odd " + j);
    }}



for (var i=1; i<=9; i++){
    var x = i.toString()
    var z = x;
    for (var b=1;  b<i; b++){
        z = z+x;
    }
    console.log (z);
}


for(var h= 1; h<=9; h+=1){
    var str= "";
    for(var g = 1; g<=h; g+=1){
        str += h;
    }

    console.log(str)
}

for (var p=100; p>0; p-=5){
    console.log(p);
}
