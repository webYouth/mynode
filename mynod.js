'use strict';

function Stream(write,read){
    this.write = write;
    this.read = read;
}
Stream.prototype.pipe = function(){
    this.read.pipe(this.write);
    console.log('ok,pipe is done!');
};
var writeMo = require('./writefile');
var readMo = require('./readfile');
var fs = require('fs');
var method = new Stream(writeMo.writefile(fs),readMo.readfile(fs));
method.pipe();