var Park = function() {
  this.enclosure = [];
}

Park.prototype = {
  add: function(dinosaur) {
    this.enclosure.push(dinosaur);
  },

  // removeByType: function(dinosaurType){
  //   for(var dinosaur of this.enclosure){
  //     if(dinosaur.type === dinosaurType){
  //       var index = this.enclosure.indexOf(dinosaur);
  //       this.enclosure.splice(index, 1);
  //     }
  //   }
  // },

  removeByType: function(dinosaurType){
    for (index = this.enclosure.length - 1; index>=0; index --){
      if(this.enclosure[index].type === dinosaurType){
        this.enclosure.splice(index,1);
      }
    }
  },

  returnDinosaursWithTwoKids: function(){

  }

};

module.exports = Park;
