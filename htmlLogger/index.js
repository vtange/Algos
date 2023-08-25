var arr = Object.create(null);
arr.apples = {
    a: arr
}
for(var i=0; i<5; i++){
    console.error("%c"+"aaa","color:lime", "%c"+"aaba","color:black");
    console.log([[1,[3],[[4]]],[2]]);
    console.log(new Error());
    console.log(arr);
}