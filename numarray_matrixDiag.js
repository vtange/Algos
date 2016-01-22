function main() {
    var n = parseInt(readLine());
    var a = [];
    var d1 = [];
    var d2 = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
       d1.push(a[a_i][a_i]);
       d2.push(a[a_i][a[a_i].length-(1+a_i)]);
    }
    function sumation(total,next){
        return total+next;
    }
    console.log(Math.abs(d1.reduce(sumation)-d2.reduce(sumation)));
}