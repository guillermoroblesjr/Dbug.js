// https://github.com/guillermoroblesjr/Dbug.js
(function(window, undefined){
  'use strict';
  var Dbug = function(){
      this.names = {};
  };

  // subclass extends superclass
  Dbug.prototype = Object.create( Object.prototype );
  // set the constructor back to Dbug
  Dbug.prototype.constructor = Dbug;

  Dbug.VERSION = 'v0.3.0-alpha';

  // http://www.jacklmoore.com/notes/rounding-in-javascript/
  Dbug.prototype.round = function( value, decimals ) {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  };
  Dbug.prototype.performance = {
      now: function(){
          if ( window.performance !== undefined ) {
              return window.performance.now();
          }
          else {
              return new Date();
          }
      }
  };
  Dbug.prototype.time = function( name, options ){

      // set defaults
      options = options || {};
      var print = options.print || (name + ':');

      // if the name object does not exist...
      if ( this.names[name] === undefined ) {
          // set the defaults
          this.names[name] = {
              start: null,
              occurrence: []
          };
          this.names[name].options = options;
          this.names[name].options.style = this.names[name].options.style || '';
          // "background-color: rgb(22, 147, 236); color: #fff; text-shadow: 1px 1px 3px #000; padding: 2px;"
          // create a new start time
          this.names[name].start = this.performance.now();
          return;
      };

      var timeDiff = this.performance.now() - this.names[name].start;

      // round if using window.performance
      if ( window.performance !== undefined ) {
          timeDiff = this.round( timeDiff, 2 );
      };

      // save the time in case we want it later
      this.names[name].occurrence.push(timeDiff);

      // if no options are used using the options
      if ( this.names[name].options.style === undefined
           || this.names[name].options.style.length < 6 ) {
          // display the time difference
          console.log( print, timeDiff, 'ms' );
          return;
      };
      // if options are used
      if ( this.names[name].options.style !== undefined
           && typeof this.names[name].options.style === 'string' ) {
          console.log( "%c" + print, 
                       this.names[name].options.style, 
                       timeDiff, 
                       'ms'
          );
      };
  };

  // attach to the window
  window.Dbug = Dbug;
  return Dbug;

})(window || {});
