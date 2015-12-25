function drawer(price, cash, cid) {
var change = cash - price;
var handover = [];
var amount = 0;
var getCashLeft = function(register){
    var arr = [];
    for (var i=0;i<register.length;i++){
        arr.push(register[i][1]);
    }
    return arr;
};
var cashLeft = getCashLeft(cid).reduce(function(a,b){return a+b;});
    for (var i=cid.length-1;i>-1;i--){
        if (cid[i][0] === "ONE HUNDRED" && change - 100 >=0  && cid[i][1] - 100 >=0){
            console.log("on 100s");
            while (change - 100 >=0  && cid[i][1] - 100 >=0){
                change = (change-100).toFixed(2);
                cid[i][1] = (cid[i][1]-100).toFixed(2);
                amount += 100;
                if (cid[i][1] === 0){
                    break;
                }
            }
            amount = parseFloat(parseFloat(amount).toFixed(2),10);
            handover.push([cid[i][0],amount]);
            amount = 0;
        }
        if (cid[i][0] === "TWENTY" && change - 20 >=0  && cid[i][1] - 20 >=0){
            console.log("on 20s");
            while (change - 20 >=0  && cid[i][1] - 20 >=0){
                change = (change-20).toFixed(2);
                cid[i][1] = (cid[i][1]-20).toFixed(2);
                amount += 20;
                if (cid[i][1] === 0){
                    break;
                }
            }
            amount = parseFloat(parseFloat(amount).toFixed(2),10);
            handover.push([cid[i][0],amount]);
            amount = 0;
        }
        if (cid[i][0] === "TEN" && change - 10 >=0  && cid[i][1] - 10 >=0){
            console.log("on 10s");
            while (change - 10 >=0  && cid[i][1] - 10 >=0){
                change = (change-10).toFixed(2);
                cid[i][1] = (cid[i][1]-10).toFixed(2);
                amount += 10;
                if (cid[i][1] === 0){
                    break;
                }
            }
            amount = parseFloat(parseFloat(amount).toFixed(2),10);
            handover.push([cid[i][0],amount]);
            amount = 0;
        }
        if (cid[i][0] === "FIVE" && change - 5 >=0  && cid[i][1] - 5 >=0){
            console.log("on 5s");
            while (change - 5 >=0  && cid[i][1] - 5 >=0){
                change = (change-5).toFixed(2);
                cid[i][1] = (cid[i][1]-5).toFixed(2);
                amount += 5;
                if (cid[i][1] === 0){
                    break;
                }
            }
            amount = parseFloat(parseFloat(amount).toFixed(2),10);
            handover.push([cid[i][0],amount]);
            amount = 0;
        }
        if (cid[i][0] === "ONE" && change - 1 >=0  && cid[i][1] - 1 >=0){
            console.log("on 1s");
            while (change - 1 >=0  && cid[i][1] - 1 >=0){
                change = (change-1).toFixed(2);
                cid[i][1] = (cid[i][1]-1).toFixed(2);
                amount += 1;
                if (cid[i][1] === 0){
                    break;
                }
            }
            amount = parseFloat(parseFloat(amount).toFixed(2),10);
            handover.push([cid[i][0],amount]);
            amount = 0;
        }
        if (cid[i][0] === "QUARTER" && change - 0.25 >=0 && cid[i][1] - 0.25 >=0){
            console.log("on 0.25s");
            while (change - 0.25 >=0 && cid[i][1] - 0.25 >=0){
                change = (change-0.25).toFixed(2);
                cid[i][1] = (cid[i][1]-0.25).toFixed(2);
                amount += 0.25;
                if (cid[i][1] === 0){
                    break;
                }
            }
            amount = parseFloat(parseFloat(amount).toFixed(2),10);
            handover.push([cid[i][0],amount]);
            amount = 0;
        }
        if (cid[i][0] === "DIME" && change - 0.1 >=0  && cid[i][1] - 0.1 >=0){
            console.log("on 0.10s");
            while (change - 0.1 >=0  && cid[i][1] - 0.1 >=0){
                change = (change-0.1).toFixed(2);
                cid[i][1] = (cid[i][1]-0.1).toFixed(2);
                amount += 0.1;
                if (cid[i][1] === 0){
                    break;
                }
            }
            amount = parseFloat(parseFloat(amount).toFixed(2),10);
            handover.push([cid[i][0],amount]);
            amount = 0;
        }
        if (cid[i][0] === "NICKEL" && change - 0.05 >=0  && cid[i][1] - 0.05 >=0){
            console.log("on 0.05s");
            while (change - 0.05 >=0  && cid[i][1] - 0.05 >=0){
                change = (change-0.05).toFixed(2);
                cid[i][1] = (cid[i][1]-0.05).toFixed(2);
                amount += 0.05;
                if (cid[i][1] === 0){
                    break;
                }
            }
            amount = parseFloat(parseFloat(amount).toFixed(2),10);
            handover.push([cid[i][0],amount]);
            amount = 0;
        }
        if (cid[i][0] === "PENNY" && change - 0.01 >=0  && cid[i][1] - 0.01 >=0){
            console.log("on 0.01s");
            while (change - 0.01 >=0  && cid[i][1] - 0.01 >=0){
                change = (change-0.01).toFixed(2);
                cid[i][1] = (cid[i][1]-0.01).toFixed(2);
                amount += 0.01;
                if (cid[i][1] === 0){
                    break;
                }
            }
            amount = parseFloat(parseFloat(amount).toFixed(2),10);
            handover.push([cid[i][0],amount]);
            amount = 0;
        }
    }
    cashLeft = getCashLeft(cid).reduce(function(a,b){return parseFloat(a+b).toFixed(2);});
    console.log(cashLeft);
    if (change > 0){
        return "Insufficient Funds";
    }
    else if (cashLeft == 0){
        return "Closed";
    }
    else{
        return handover;
    }
}
drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])