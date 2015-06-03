// https://github.com/guillermoroblesjr/Dbug
(function(window){
    'use strict';
    var Dbug = function(){
        this.names = {};
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
            this.names[name].options.style = this.names[name].options.style || "background-color: rgb(22, 147, 236); color: #fff; text-shadow: 1px 1px 3px #000; padding: 2px;";
            // create a new start time
            this.names[name].start = new Date();
            // debugger;
            return;
        };

        var timeDiff = new Date() - this.names[name].start;

        // save the time in case we want it later
        this.names[name].occurrence.push(timeDiff);

        // if no options are used using the options
        if ( Object.keys(this.names[name].options).length < 1 ) {
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
    window.Dbug = Dbug;
    return Dbug;
})(window || {}, undefined);