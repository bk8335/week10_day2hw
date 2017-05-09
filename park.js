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
    var multipleKidsArray = []
    for(var dinosaur of this.enclosure){
      if(dinosaur.offspringPerYear > 2){
        multipleKidsArray.push(dinosaur);
      }
    }
    return multipleKidsArray;
  },

  dinosaursAfterOneYear: function(){
    var dinoCounter = 0;
    for(var dinosaur of this.enclosure){
      dinoCounter += 1;
      dinoCounter += dinosaur.offspringPerYear;
      }
    return dinoCounter;
  },

  dinosaursAfterTwoYears: function(dinosaursAfterOneYear){
    
  }

};

module.exports = Park;
