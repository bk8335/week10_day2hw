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
    this.years = 1;
    var dinoCounter = 0;
    for(var dinosaur of this.enclosure){
        dinoCounter += (dinosaur.offspringPerYear ** this.years);
        dinoCounter += 1;
      }
    return dinoCounter;
  },
  
  dinosaursAfterTwoYears: function(){
    this.years = 2;
    var dinoCounter = 0;
    for(var dinosaur of this.enclosure){
        dinoCounter += (dinosaur.offspringPerYear ** this.years);
        dinoCounter += (dinosaur.offspringPerYear ** (this.years - 1));
        dinoCounter += 1;
      }
    return dinoCounter;
  }

};

module.exports = Park;
