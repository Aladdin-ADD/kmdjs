kmdjs.define("util.dom",['util.bom'] ,function(bom){
    var Dom={};

    Dom.add = function(a,b){
        //ѭ���������µ�bom undefined����������д��namespace
        return util.bom.sub(a,b);
    }

    return Dom;
});