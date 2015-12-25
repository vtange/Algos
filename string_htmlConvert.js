//________________________________________________________________________________________________



function convert(str) {

  var andsign = new RegExp("[&]","g");
  var gtrthan = new RegExp("[>]","g");
  var lssthan = new RegExp("[<]","g");
  var dblquot = new RegExp('["]',"g");
  var apostrp = new RegExp("[']","g");

  str = str.replace(andsign, "&amp;");
  str = str.replace(gtrthan, "&gt;");
  str = str.replace(lssthan, "&lt;");
  str = str.replace(dblquot, "&quot;");
  str = str.replace(apostrp, "&apos;");

  return str;
}

convert('Dolce & Gabbana');
