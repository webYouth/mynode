'use strict';

module.exports = {
    writefile:function(fs){
        var ws = fs.createWriteStream('sample.txt','utf-8');
        ws.write('使用Stream流写入数据\n');
        ws.write('END.')
        ws.end();
        var ws1 = fs.createWriteStream('sample.txt','utf-8');
        ws1.write(new Buffer('使用stream写入二进制数据','utf-8'));
        ws1.write(new Buffer('END.','utf-8'));
        ws1.end();
        return ws;
    }
}