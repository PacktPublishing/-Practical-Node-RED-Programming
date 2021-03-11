var buf = msg.req.body;
var SOI = new Buffer("FFD8","hex");
var EOI = new Buffer("FFD9","hex");
var iSOI = 0;
var file = "";

for (var i=0 ; i<=buf.length ; i++) {
    if(SOI.equals(buf.slice(i,i+2))) {
        iSOI = i;
        }
    if(EOI.equals(buf.slice(i,i+2))) {
        file = buf.slice(iSOI,i+2);
        break;
        }
    }

msg.file = file;
return msg;