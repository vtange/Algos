String.prototype.commafy = function(){
    return this.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}