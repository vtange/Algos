function friendly(str) {
    var years = [];
    var months = [];
    var days = [];
    var EQyears = false;
    var EQmonths = false;
    var EQdays = false;
    for (var i=0;i<str.length;i++){
        years.push(parseInt(str[i].split("-")[0]));
        months.push(parseInt(str[i].split("-")[1]));
        days.push(parseInt(str[i].split("-")[2]));
    }
    if (years[0] == years[1]){
        EQyears = true;
        console.log("eqyears");
    }
    if (months[0] == months[1]){
        EQmonths = true;
        console.log("eqmonths");
    }
    if (days[0] == days[1]){
        EQdays = true;
        console.log("eqdays");
    }    
    var monthConverter = function(num){
        switch (num){
            case 01: return "January";
            case 02: return "February";
            case 03: return "March";
            case 04: return "April";
            case 05: return "May";
            case 06: return "June";
            case 07: return "July";
            case 08: return "August";
            case 09: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    };
    var dayConverter = function(num){
        switch (num){
            case 01: return num + "st";
            case 21: return num + "st";
            case 31: return num + "st";
            case 02: return num + "nd";
            case 22: return num + "nd";
            case 03: return num + "rd";
            case 23: return num + "rd";
            default: return num + "th";
        }
    };
    if (EQyears){
        if (EQmonths){
            if(EQdays){
                return [monthConverter(months[0]) +" "+ dayConverter(days[0]) + ", " + years[0]];
            }
            return [monthConverter(months[0]) +" "+ dayConverter(days[0]), dayConverter(days[1])];
        }
        return [monthConverter(months[0]) +" "+ dayConverter(days[0]), monthConverter(months[1]) +" "+ dayConverter(days[1])];
    }
    if (years[0] == years[1]-1 && days[1] > days[0]){
        return [monthConverter(months[0]) +" "+ dayConverter(days[0]), monthConverter(months[1]) +" "+ dayConverter(days[1])];
    }
  return [monthConverter(months[0]) +" "+ dayConverter(days[0]) + ", " + years[0], monthConverter(months[1]) +" "+ dayConverter(days[1]) + ", " + years[1]];
}

friendly(["2015-12-01", "2016-02-03"])