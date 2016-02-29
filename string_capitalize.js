String.prototype.capitalize = function(){
  if(this.charCodeAt(0)<97)
      return this.toString();
  else
    return String.fromCharCode(this.charCodeAt(0)-32) + this.slice(1);
};



/* best practice */

String.prototype.capitalize = function () {
  let c = this.charCodeAt(0)
  if (97 <= c && c <= 122) c -= 32
  
  return String.fromCharCode(c) + this.slice(1)
}