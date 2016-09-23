'use strict';

module.exports = {
    readfile:function(fs){
        var rs = fs.createReadStream('sample.txt','utf-8');
        rs.on('data',function(chunk){
            console.log('DATA');
            console.log(chunk);
        });
        rs.on('end',function(){
            console.log('END');
        });
        rs.on('err',function(err){
            console.log('ERROR'+err);
        });
        return rs;
    }
}