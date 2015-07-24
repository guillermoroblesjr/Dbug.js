// Example Usage
// jshint ignore: start
(function(window, undefined){
  
  'use strict';

  var dbug = new Dbug();
  dbug.time('turtles');

  for( var i = 0; i < 1000; i++){}
  dbug.time('turtles');
  for( var i = 0; i < 1000; i++){}
  dbug.time('turtles');
  for( var i = 0; i < 2000; i++){}
  dbug.time('turtles');

})(window);



