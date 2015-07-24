/* global describe, it */
// jshint ignore: start

(function () {

  'use strict';
  
  describe("blah", function(){

    it("foobar", function(){
      expect(true).to.equal(true);
    });

    /*
      it("apples", function(){

        var q = new QueueRunner();
        var queueItemOptions = {
          fn: function(){},
          args: [ q ],
          runOnComplete: false,
          waitForEndOfStack: false,
          timeDelay: 1
        };

        var queueItem = new q.MakeQueueItem( queueItemOptions );
        q.queue.push( queueItem );
        q.run();

        expect(q.queue.length).to.equal(0);
      });
    //*/

  });
})();
