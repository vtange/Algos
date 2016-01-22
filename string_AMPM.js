function main(time) {
    if(time.search(/[A]/i)!==-1){
        if(parseInt(time.substring(0,2),10) === 12){
            console.log("00"+time.substring(2,8));
        }
        else{
            console.log(time.substring(0,8));
        }
    }
    else{
        if(parseInt(time.substring(0,2),10) === 12){
            console.log("12"+time.substring(2,8));
        }
        else{
            console.log((parseInt(time.substring(0,2),10)+12)+time.substring(2,8));
        }
    }
}


main("01:00:05pm");