(function(){var _F=function(){try{
    var d = 'http://dns.test'+'.b0.'+'upaiyun.com:1827';
    var D='http://cdn-node-status.upyun.com:19827/cdn-node-status';
    
    function _s(c,d,b){var a=new Date;a.setTime(a.getTime()+1E3*b);b="expires="+a.toGMTString();document.cookie=c+"="+d+"; "+b}function _g(c){c+="=";for(var d=document.cookie.split(";"),b=0;b<d.length;b++){for(var a=d[b];" "==a.charAt(0);)a=a.substring(1);if(-1!=a.indexOf(c))return a.substring(c.length,a.length)}return!1};
    if(_g('__UPNS__'))return;_s('__UPNS__','true',100);

    //if(Math.random()*100>20)return;

    var _L=function(o){var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(o, s);}

    var _l=[],_f = function(S,k,c,t){
        try{var s = document.createElement('script');
        s.async=1;
        var t1 = new Date();
        s.onerror=s.onload=s.onreadystatechange = function(){"undefined"!=typeof _l[t]||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(_l[t]=!0,c(new Date-t1));_r(this);};
        s.src=d+'/?s='+S+'&k='+k+'&t='+((new Date()).getTime()+Math.random());
        _L(s);}catch(e){}
    }
    var ds = document.getElementsByTagName('script');for(var i=0;i<ds.length;i++){if(ds[i].src.indexOf('.test.b0.')>-1||ds[i].src.indexOf('status.upyun')>-1||ds[i].src.indexOf('chinanetcenter')>-1)_r(ds[i]);}
    var _e=function(i1,i2,t1,t2,t3,isc){
        try{var s = document.createElement('script');s.async=1;
        s.onerror=s.onload=s.onreadystatechange=function(){_r(this);};
        s.src=D+'/?s='+i1+'&c='+i2+'&t1='+t1+'&t2='+t2+'&t3='+t3+(isc==1?'&n=1':'')+'&t='+((new Date()).getTime()+Math.random());
        _L(s);clearTimeout(_t);
        }catch(e){}
    }
    var _r=function(e) {e.parentNode.removeChild(e);}
    var _t=setTimeout(function(){if(!_l[4])_e('NULL','NULL','0','0','0')},3000);
    _f(1,0,function(t1){
        _f(1,1,function(t2){
            _f(1,1,function(t3){
                _f(12800,1,function(t4){
                    if(t1-t2 > 0 && t1-t2 < 3000 && t2-t3 > 0 && t4-t3 > 0 && t4-t3 < 3000){
                        _e(UPNS[0],UPNS[1],t1-t2,t2-t3,t4-t3);
                    }
                    try{var s = document.createElement('script');s.async=1;
                    s.onerror=s.onload=s.onreadystatechange=function(){_r(this);};
                    s.src=d+'/?tc=1&t='+((new Date()).getTime()+Math.random());
                    _L(s);
                    }catch(e){}
                    d = 'http://makeatest.chinanetcenter.com';
                    _l=[];
                    _f(1,0,function(t1){
                        _f(1,0,function(t2){
                            if(t1-t2 > 0 && t1-t2 < 3000){
                                _e(UPNS[0],UPNS[1],t1-t2,1,1,1);
                            }
                        },2);
                    },1);
                },4);
            },3);
        },2);
    },1);
}catch(e){}};setInterval(_F,12E4);setTimeout(_F,1000);})();
