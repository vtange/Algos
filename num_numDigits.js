Number.prototype.length = function(){
    var str = this.toString();
    return str.indexOf('e') === -1 ? str.length : (parseInt(str.substr(str.indexOf('e') + 1)) + 1);
}