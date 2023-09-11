var skyutil = {};
skyutil.server = {
    "server": "weixin.skyworthbox.com",
    "debugserver": "http://172.28.21.89:8899"
};
skyutil.getParamOfappid = function () {
    return skyutil.getQueryString('appid');
};
skyutil.getParamOfopenid = function () {
    return skyutil.getQueryString('openid');
};
skyutil.getParamOfmenu = function () {
    return skyutil.getQueryString('menu');
};
skyutil.getParamOfdebug = function () {
    var debug = skyutil.getQueryString('debug');
    return debug;
};

skyutil.getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2];
    return null;
};

skyutil.doget = function (url, params, callsuccess, callfail) {
    var str = skyutil.convertJsonToUrlParam(params);
    $.ajax({
        url: url,
        type: "GET",
        dataType: 'jsonp',
        jsonp: "callback",
        data: params,
        timeout: 5000,
        //返回Json类型
        contentType: "application/json;utf-8",
        //服务器段返回的对象包含name,data属性.
        success: function (result) {
            if (callsuccess) {
                callsuccess(result);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (callfail) {
                callfail(errorThrown);
            }
        }
    });
};


skyutil.printlnObj = function (obj) {
    var str = JSON.stringify(obj, null, 4);
};

skyutil.convertJsonToUrlParam = function (json) {
    var result = "";
    for (var p in json) {
        if (typeof (json[p]) != " function ") {
            result += (p + "=" + json[p] + "&");
        }
    }
    return result;
};
skyutil.getmenuurl = function () {
    var result;
    result = skyutil.getserver() + this.path;
    return result;
};
skyutil.getserver = function () {
    return "https://account.skyworthbox.com"
};

skyutil.getBoxUrlHeader = function () {
    return "http://" + skyutil.data.box.ip + ":" + skyutil.data.box.port + "/";
};

skyutil.isconnectedToBox = false;
skyutil.connect = function (callback, callfail) {
    var url = skyutil.getBoxUrlHeader() + "connect";
    skyutil.doget(url, "", function (result) {
        skyutil.isconnectedToBox = true;
    }, function () {
    });
};

skyutil.callback = null;
skyutil.connect2 = function () {
    console.log("connect skyutil.data.box.ip : " + skyutil.data.box.ip);
    var url = skyutil.getBoxUrlHeader() + "connect";
    skyutil.doget(url, "", function (result) {
        //console.log("result : " + result);
        skyutil.printlnObj(result);
        skyutil.isconnectedToBox = true;
        if (skyutil.callback) {
            skyutil.callback();
        }
    });
};
skyutil.keepConnect = function () {
    setInterval("skyutil.connect2()", 20000);//1000为1秒钟
};

skyutil.sendKey = function (key) {
    if (skyutil.isconnectedToBox) {
        var url = skyutil.getBoxUrlHeader() + "control_op";
        var params = {
            op: key
        };
        skyutil.doget(url, params, function (result) {
            skyutil.printlnObj(result);
        });
    } else {
        skyutil.connect();
    }
};

skyutil.abs = function (num) {
    var result = num;
    if (result < 0) {
        result = -result;
    }
    return result;
};

// Changes XML to JSON
skyutil.xmlToJson = function (xml) {

    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = skyutil.xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].length) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(skyutil.xmlToJson(item));
            }
        }
    }
    return obj;
};

//解析xml字符串变量为IXMLDOMDocument2
skyutil.parseXmlStrToObj = function (data) {
    var xml, tmp;
    if (window.DOMParser) {
        //Standard
        tmp = new DOMParser();
        xml = tmp.parseFromString(data, "text/xml");
    } else {
        // IE
        xml = new ActiveXObject("Microsoft.XMLDOM");
        xml.async = "false";
        xml.loadXML(data);
    }
    tmp = xml.documentElement;
    if (!tmp || !tmp.nodeName || tmp.nodeName === "parsererror") {
        return null;
    }
    return xml;
};

skyutil.hintmsg = function (msg) {
    var debug = skyutil.getParamOfdebug();
    if (debug == "true") {
        alert(msg);
    }
};


//get local ip

function findIP(onNewIP) { //  onNewIp - your listener function for new IPs
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; //compatibility for firefox and chrome
    var pc = new myPeerConnection({iceServers: []}), // 空的ICE服务器（STUN或者TURN）
        noop = function () {
        },
        localIPs = {}, //记录有没有被调用到onNewIP这个listener上
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function ipIterate(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

    pc.createDataChannel(""); //create a bogus data channel
    pc.createOffer().then(function (sdp) {
        sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(ipIterate);
        });
        pc.setLocalDescription(sdp, noop, noop);
    }); // create offer and set local description
    pc.onicecandidate = function (ice) { //listen for candidate events
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
    };
}

skyutil.getlocalurl = function (callbackFunction) {
    findIP(callbackFunction);
}


function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    else {
        return null;
    }
}
