/*jslint node: true */
'use strict';

module.exports = {

  goto: function(currentLevel, endLevel){
      

      var endLevelToInteger = parseInt(endLevel);

      if (typeof currentLevel !== 'number'){
        return 0;
      }
      else if(typeof endLevel !== 'string'){
        return 0;
      }
      else if(-3 > endLevelToInteger || endLevelToInteger > 3){
        return 0;
      }
      else if(0 > currentLevel || currentLevel > 3){
        return 0;
      }
      else if(endLevelToInteger < currentLevel) {
        return endLevelToInteger - currentLevel;
      }
     
      return currentLevel + endLevelToInteger;

  }



};

//we need a function that takes the current level and then adds/substracts the value of the argument
