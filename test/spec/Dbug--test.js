/* global describe, it */
// jshint ignore: start

(function () {

  'use strict';
  
  describe("creating an instance of Dbug", function(){
    it('should be an instance of Dbug', function(){
      var dbug = new Dbug();
      expect(dbug).to.be.instanceof(Dbug);
    });

    // it('should have the "names" property', function(){
    //   var dbug = new Dbug();
    //   expect(dbug).to.have.property('names');
    //   expect(dbug).to.have.ownProperty('names');
    // });

    // it('should inherit the "MakeQueueItem" method via prototype', function(){
    //   var q = new QueueRunner();
    //   expect(q).to.have.property('MakeQueueItem');
    //   expect(q).to.not.have.ownProperty('MakeQueueItem');
    // });

    // it('should inherit the "run" method via prototype', function(){
    //   var q = new QueueRunner();
    //   expect(q).to.have.property('run');
    //   expect(q).to.not.have.ownProperty('run');
    // });

    // it('should inherit the "continueQueue" method via prototype', function(){
    //   var q = new QueueRunner();
    //   expect(q).to.have.property('continueQueue');
    //   expect(q).to.not.have.ownProperty('continueQueue');
    // });

    // it('should inherit the "delay" method via prototype', function(){
    //   var q = new QueueRunner();
    //   expect(q).to.have.property('delay');
    //   expect(q).to.not.have.ownProperty('delay');
    // });

    // it('should inherit the "generateId" method via prototype', function(){
    //   var q = new QueueRunner();
    //   expect(q).to.have.property('generateId');
    //   expect(q).to.not.have.ownProperty('generateId');
    // });
  });

  describe("using Dbug.js", function(){

    it('should not run Dbug.time()', function(){
      var dbug = new Dbug({cancel:true});
      expect(dbug.time()).to.equal('canceled');
    });

    it('should not run Dbug.time()', function(){
      var Dbug = window.Dbug.noConflict();
      var dbug = new Dbug();
      Dbug.prototype.options = {
        cancel: true
      };
      // debugger;
      expect(dbug.time()).to.equal('canceled');
    });

  });

  // describe("making a queue item with MakeQueueItem()", function(){
  //   it('should return an object', function(){
  //     var q = new QueueRunner();
  //     var queueItem = q.MakeQueueItem({});
  //     expect(queueItem).to.be.a('object');
  //   });

  //   it('should have a property fn', function(){
  //     var q = new QueueRunner();
  //     var queueItem = q.MakeQueueItem({});
  //     expect(q).to.have.property('fn');
  //     expect(q.fn).to.be.a('function');
  //   });

  //   it('should have a property args', function(){
  //     var q = new QueueRunner();
  //     var queueItem = q.MakeQueueItem({});
  //     expect(q).to.have.property('args');
  //     expect(q.args).to.be.a('array');
  //   });

  //   it('should have a property runOnComplete', function(){
  //     var q = new QueueRunner();
  //     var queueItem = q.MakeQueueItem({});
  //     expect(q).to.have.property('runOnComplete');
  //     expect(q.runOnComplete).to.be.a('boolean');
  //   });

  //   it('should have a property waitForEndOfStack', function(){
  //     var q = new QueueRunner();
  //     var queueItem = q.MakeQueueItem({});
  //     expect(q).to.have.property('waitForEndOfStack');
  //     expect(q.waitForEndOfStack).to.be.a('boolean');
  //   });

  //   it('should have a property timeDelay', function(){
  //     var q = new QueueRunner();
  //     var queueItem = q.MakeQueueItem({});
  //     expect(q).to.have.property('timeDelay');
  //     expect(q.timeDelay).to.satisfy(function(val) { 
  //       return ( typeof val === 'number' || typeof val === 'undefined' ); 
  //     });
  //   });

  //   it('should have a property _id', function(){
  //     var q = new QueueRunner();
  //     var queueItem = q.MakeQueueItem({});
  //     expect(q).to.have.property('_id');
  //     expect(q._id).to.be.a('number');
  //   });
  // });

  // describe("blah", function(){

  //   it("foobar", function(){
  //     expect(true).to.equal(true);
  //   });

  //   /*
  //     it("apples", function(){

  //       var q = new QueueRunner();
  //       var queueItemOptions = {
  //         fn: function(){},
  //         args: [ q ],
  //         runOnComplete: false,
  //         waitForEndOfStack: false,
  //         timeDelay: 1
  //       };

  //       var queueItem = new q.MakeQueueItem( queueItemOptions );
  //       q.queue.push( queueItem );
  //       q.run();

  //       expect(q.queue.length).to.equal(0);
  //     });
  //   //*/

  // });
})();
