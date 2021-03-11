module.exports = function(RED) {
    function Taiponrock2Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "TAIJI HAGINO";
            node.send(msg);
        });
    }
    RED.nodes.registerType("taiponrock2",Taiponrock2Node);
}
