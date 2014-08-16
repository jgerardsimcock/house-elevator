/*jslint node: true */
'use strict';

module.exports = {

  goto: function(currentLevel, endLevel){
      

      var endLevelToInteger = parseInt(endLevel);

      if(endLevelToInteger < currentLevel) {
        return endLevelToInteger - currentLevel;
      }
      if (-3 > endLevelToInteger > 3){
        return currentLevel;
      }
      
      return currentLevel + endLevelToInteger;



 

  }



};

//we need a function that takes the current level and then adds/substracts the value of the argument
