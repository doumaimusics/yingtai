

/*第一个选项卡*/
//引入的function解决了js的代码的覆盖的问题这样可以直接用js写代码了
addEvent(window,"load",function(){
       var temaiya=$(".temaiya");
       var tudebox=$(".tudebox");
    for (var i = 0; i < temaiya.length; i++) {
    	temaiya[i].index=i;

    	temaiya[i].onmouseover=function(){
    		for (var j = 0; j < temaiya.length; j++) {
    			tudebox[j].style.display="none";
         
    		};
    		tudebox[this.index].style.display="block";
        


    	}
    // temaiya[i].onmouseout=function(){
    // 	tudebox[this.index].style.display="none";
    // }

    };
})

/*第二个选项卡*/
addEvent(window,"load",function(){
    var zizi=$(".zizi");
    var rebox=$(".rebox");
for (var i = 0; i < zizi.length; i++) {
    zizi[i].index=i;
    zizi[i].onmouseover=function(){
        for (var j = 0; j < zizi.length; j++) {
            rebox[j].style.display="none";
        };
    rebox[this.index].style.display="block";

    }
};
})

//购物袋的下拉菜单
addEvent(window,"load",function(){
    var gouwudai=$(".gouwudai");
    var erjia=$(".erjia");
    for (var i = 0; i < gouwudai.length; i++) {
        gouwudai[i].index=i;
   
gouwudai[i].onmouseover=function(){
    erjia[this.index].style.display="block";
}
gouwudai[i].onmouseout=function(){
    erjia[this.index].style.display="none";
}
 }

})
//微信的图片切换
addEvent(window,"load",function(){
    var weixins=$(".weixin");
    var ejis=$(".eji");
   var w=document.getElementsByClassName('dingtu-a')[0];
   var b=w.getElementsByTagName('img')[0];
   w.onmouseover=function(){
    b.src="imges/02.jpg";
   b.style.zIndex=5;

   }
   w.onmouseout=function(){
    b.src="imges/02.png"
   }
})


//顶部微信的没有实现，，，没做完
addEvent(window,"load",function(){
   var weixins=$(".weixin")[0];
    var ejis=$(".eji")[0];
    
    weixins.onmouseover=function(){
        ejis.style.display="block";
         
    }
    weixins.onmouseout=function(){
      ejis.style.display="none";
    }



})


//我的银泰卡的下拉菜单
addEvent(window,"load",function(){
  var tai=$(".wodeyintai")[0];
  var zheerji=$(".zheerji")[0];
  tai.onmouseover=function(){
    zheerji.style.display="block";
  }
  tai.onmouseout=function(){
    zheerji.style.display="none";
  }
})

/*手机银泰的下拉菜单*/
addEvent(window,"load",function(){
  var shouji=$(".shouji")[0];
  var lingyi=$(".lingyi")[0];
  shouji.onmouseover=function(){
    lingyi.style.display="block";
  }
  shouji.onmouseout=function(){
     lingyi.style.display="none";
  }
})




//banner
$(".bimg").fadeOut(0).eq(0).fadeIn(0);
$(".btn").css("background","#211616").eq(0).css("background","#e5004f");
var num=0 
function move(){
  num++;
  if(num>=$(".bimg").length){
    num=0;
  }
  $(".bimg").fadeOut(200).eq(num).fadeIn(300)
  $(".btn").css("background","#211616").eq(num).css("background","#e5004f");
  $(".banner").css("background","url(./images/"+num+".jpg)");
  $(".banner").css("backgroundPosition"," -285px 0");
}
var t=setInterval(move,1000);0
$(".banner").hover(function(){
  $(".bannerleft").css("display","block");
  $(".bannerright").css("display","block");
  clearInterval(t);
},function(){
  $(".bannerleft").css("display","none");
  $(".bannerright").css("display","none");
  t=setInterval(move,1000);
})
$(".btn").mouseover(function(){ 
  $(this).each(function(index,obj){
    $(".bimg").stop(true,true);
    var index=$(this).index();
    $(".btn").css("background","#211616").eq(index).css("background","#e5004f");
    $(".bimg").fadeOut(200).eq(index).fadeIn(300);
    $(".banner").css("background","url(./images/"+index+".jpg)");
    $(".banner").css("backgroundPosition"," -285px 0");
    num=index;
  })
})
$(".bannerleft").click(function(){
  move();
})
$(".bannerright").click(function(){
  num--;
  if(num<0){
    num=$(".bimg").length-1;
  }
  $(".bimg").fadeOut(200).eq(num).fadeIn(300)
  $(".btn").css("background","#211616").eq(num).css("background","#e5004f");
  $(".banner").css("background","url(./images/"+num+".jpg)");
  $(".banner").css("backgroundPosition"," -285px 0");
})




/*超值特卖的图片框*/
$(".tuxiaobox").hover(function(){
  $(".left",$(this)).stop(false,false);
  $(".top",$(this)).stop(false,false);
  $(".right",$(this)).stop(false,false);
  $(".bottom",$(this)).stop(false,false);
  $(".left",$(this)).animate({"height":"260px"},400);
  $(".top",$(this)).animate({"width":"220px"},400);
  $(".right",$(this)).animate({"height":"260px"},400);
  $(".bottom",$(this)).animate({"width":"220px"},400);
},function(){
    $(".left",$(this)).stop(false,false);
  $(".top",$(this)).stop(false,false);
  $(".right",$(this)).stop(false,false);
  $(".bottom",$(this)).stop(false,false);
    $(".left",$(this)).animate({"height":"0px"},400);
  $(".top",$(this)).animate({"width":"0px"},400);
  $(".right",$(this)).animate({"height":"0px"},400);
  $(".bottom",$(this)).animate({"width":"0px"},400);
})


/*爆款好货的图片框*/
$(".ertu").hover(function(){
  $(".left",$(this)).stop(false,false);
  $(".top",$(this)).stop(false,false);
  $(".right",$(this)).stop(false,false);
  $(".bottom",$(this)).stop(false,false);
  $(".left",$(this)).animate({"height":"218px"},400);
  $(".top",$(this)).animate({"width":"218px"},400);
  $(".right",$(this)).animate({"height":"218px"},400);
  $(".bottom",$(this)).animate({"width":"218px"},400);
},function(){
    $(".left",$(this)).stop(false,false);
  $(".top",$(this)).stop(false,false);
  $(".right",$(this)).stop(false,false);
  $(".bottom",$(this)).stop(false,false);
    $(".left",$(this)).animate({"height":"0px"},400);
  $(".top",$(this)).animate({"width":"0px"},400);
  $(".right",$(this)).animate({"height":"0px"},400);
  $(".bottom",$(this)).animate({"width":"0px"},400);
})


/*手机专享的遮罩*/
addEvent(window,"load",function(){
  var santu=$(".santu");
  var zhezhao1=$(".zhezhao1");
  for (var i = 0; i < santu.length; i++) {
    santu[i].index=i;
    santu[i].onmouseover=function(){
      zhezhao1[this.index].style.display="block";
    }
    santu[i].onmouseout=function(){

      zhezhao1[this.index].style.display="none";
    }
  }


})


/*热门品牌的的遮罩*/
addEvent(window,"load",function(){
  var zheli=$(".zheli");
  var zhezhao2=$(".zhezhao2");
  for (var i = 0; i < zheli.length; i++) {
    zheli[i].index=i;
    zheli[i].onmouseover=function(){
      zhezhao2[this.index].style.display="block";
    }
    zheli[i].onmouseout=function(){
      zhezhao2[this.index].style.display="none";
    }
  }
})

addEvent(window,"load",function(){
  var zhelier=$(".zhelier");
  var zhezhao3=$(".zhezhao3");
  for (var i = 0; i < zhelier.length; i++) {
    zhelier[i].index=i;
    zhelier[i].onmouseover=function(){
      zhezhao3[this.index].style.display="block";
    }
    zhelier[i].onmouseout=function(){
      zhezhao3[this.index].style.display="none";
    }
  };
})



addEvent(window,"load",function(){
  var zhelisan=$(".zhelisan");
  var zhezhao4=$(".zhezhao4");
  for (var i = 0; i < zhelisan.length; i++) {
    zhelisan[i].index=i;
    zhelisan[i].onmouseover=function(){
      zhezhao4[this.index].style.display="block";
    }
    zhelisan[i].onmouseout=function(){
      zhezhao4[this.index].style.display="none";
    }
  }
})



addEvent(window,"load",function(){
  var zhelisi=$(".zhelisi");
  var zhezhao5=$(".zhezhao5");
  for (var i = 0; i < zhelisi.length; i++) {
    zhelisi[i].index=i;
    zhelisi[i].onmouseover=function(){
      zhezhao5[this.index].style.display="block";
    }
    zhelisi[i].onmouseout=function(){
      zhezhao5[this.index].style.display="none";
    }
  }
})



addEvent(window,"load",function(){
  var zheliwu=$(".zheliwu");
  var zhezhao6=$(".zhezhao6");
  for (var i = 0; i < zheliwu.length; i++) {
    zheliwu[i].index=i;
    zheliwu[i].onmouseover=function(){
      zhezhao6[this.index].style.display="block";
    }
    zheliwu[i].onmouseout=function(){
      zhezhao6[this.index].style.display="none";
    }
  }
})




addEvent(window,"load",function(){
  var zheliliu=$(".zheliliu");
  var zhezhao7=$(".zhezhao7");
  for (var i = 0; i < zheliliu.length; i++) {
    zheliliu[i].index=i;
    zheliliu[i].onmouseover=function(){
      zhezhao7[this.index].style.display="block";
    }
    zheliliu[i].onmouseout=function(){
      zhezhao7[this.index].style.display="none";
    }
  }
})

/*本周推存的图框*/

$(".benyi").hover(function(){
  $(".left",$(this)).stop(false,false);
  $(".top",$(this)).stop(false,false);
  $(".right",$(this)).stop(false,false);
  $(".bottom",$(this)).stop(false,false);
  $(".left",$(this)).animate({"height":"250px"},400);
  $(".top",$(this)).animate({"width":"196px"},400);
  $(".right",$(this)).animate({"height":"250px"},400);
  $(".bottom",$(this)).animate({"width":"196px"},400);
},function(){
    $(".left",$(this)).stop(false,false);
  $(".top",$(this)).stop(false,false);
  $(".right",$(this)).stop(false,false);
  $(".bottom",$(this)).stop(false,false);
    $(".left",$(this)).animate({"height":"0px"},400);
  $(".top",$(this)).animate({"width":"0px"},400);
  $(".right",$(this)).animate({"height":"0px"},400);
  $(".bottom",$(this)).animate({"width":"0px"},400);
})


/*时尚名品的图框*//*潮流女装的图框    婴儿家居最后的结尾等*/
$(".rightli-tu").hover(function(){
  $(".left",$(this)).stop(false,false);
  $(".top",$(this)).stop(false,false);
  $(".right",$(this)).stop(false,false);
  $(".bottom",$(this)).stop(false,false);
  $(".left",$(this)).animate({"height":"180px"},400);
  $(".top",$(this)).animate({"width":"270px"},400);
  $(".right",$(this)).animate({"height":"180px"},400);
  $(".bottom",$(this)).animate({"width":"270px"},400);
},function(){
    $(".left",$(this)).stop(false,false);
  $(".top",$(this)).stop(false,false);
  $(".right",$(this)).stop(false,false);
  $(".bottom",$(this)).stop(false,false);
    $(".left",$(this)).animate({"height":"0px"},400);
  $(".top",$(this)).animate({"width":"0px"},400);
  $(".right",$(this)).animate({"height":"0px"},400);
  $(".bottom",$(this)).animate({"width":"0px"},400);
})

/*底部的三张小的图的遮罩*/
addEvent(window,"load",function(){
  var ditu=$(".ditu")[0];
  var zhezhaoa=$(".zhezhaoa")[0];
  ditu.onmouseover=function(){
    zhezhaoa.style.display="block";
  }
  ditu.onmouseout=function(){
    zhezhaoa.style.display="none";
  }

})


addEvent(window,"load",function(){
     var ditutu=$(".ditutu")[0];
     var zhezhaob=$(".zhezhaob")[0];
     ditutu.onmouseover=function(){
      zhezhaob.style.display="block";
     }
   ditutu.onmouseout=function(){
    zhezhaob.style.display="none";
   }

})


addEvent(window,"load",function(){
     var ditusan=$(".ditusan")[0];
     var zhezhaoc=$(".zhezhaoc")[0];
     ditusan.onmouseover=function(){
      zhezhaoc.style.display="block";
     }
   ditusan.onmouseout=function(){
    zhezhaoc.style.display="none";
   }

})

/*时尚名品里的轮播kuang的*/
addEvent(window,"load",function(){
var kuang=$(".kuang")[0];
var imgs=$("img",kuang);
var leftab=$(".leftab",kuang)[0];
var rightab=$(".rightab",kuang)[0];
var as=$("a",kuang);
var abtns=$(".abtn",kuang);

for (var i = 1; i < as.length; i++) {
  as[i].style.left="390px"
};
var num=0;
var next=0;
var flag=true;
kuang.onmouseover=function(){
  
  leftab.style.display="block";
  rightab.style.display="block";
}
kuang.onmouseout=function(){
  leftab.style.display="none";
  rightab.style.display="none";
}
leftab.onclick=function(){
  if(flag){flag=false;
   next++;
   
  if(next>=2){
    next=0;
   }
    as[next].style.left="390px";
  animate(as[num],{left:-390});
  animate(as[next],{left:0},function(){
    flag=false;
  });
  num=next;
}
}
rightab.onclick=function(){
  if(flag){flag=false};
num--;

  if(num<=-1){
    num=as.length-1;
}
  as[num].style.left="-390px";
  animate(as[next],{left:390});
  animate(as[num],{left:0},function(){
    flag=true;
  })
  for (var i = 0; i < abtns.length; i++) {
    abtns[i].style.background="#ccc";
    as[i].style.zIndex=0;
  };
abtns[next].style.background="red";
as[next].style.zIndex=1;
     next=num;
}

})


/*时尚鞋业的轮播*/

addEvent(window,"load",function(){
var kuanga=$(".kuanga")[0];
var imgs=$("img",kuanga);
var leftab=$(".leftab",kuanga)[0];
var rightab=$(".rightab",kuanga)[0];
var as=$("a",kuanga);
var abtns=$(".abtn",kuanga);

for (var i = 1; i < as.length; i++) {
  as[i].style.left="390px"
};
var num=0;
var next=0;
var flag=true;
kuanga.onmouseover=function(){
  
  leftab.style.display="block";
  rightab.style.display="block";
}
kuanga.onmouseout=function(){
  leftab.style.display="none";
  rightab.style.display="none";
}
leftab.onclick=function(){
  if(flag){flag=false;
   next++;
   
  if(next>=2){
    next=0;
   }
    as[next].style.left="390px";
  animate(as[num],{left:-390});
  animate(as[next],{left:0},function(){
    flag=false;
  });
  num=next;
}
}
rightab.onclick=function(){
  if(flag){flag=false};
num--;

  if(num<=-1){
    num=as.length-1;
}
  as[num].style.left="-390px";
  animate(as[next],{left:390});
  animate(as[num],{left:0},function(){
    flag=true;
  })
  for (var i = 0; i < abtns.length; i++) {
    abtns[i].style.background="#ccc";
    as[i].style.zIndex=0;
  };
abtns[next].style.background="red";
as[next].style.zIndex=1;
     next=num;
}

})




/*潮流箱包轮播*/
addEvent(window,"load",function(){
var kuangb=$(".kuangb")[0];
var imgs=$("img",kuangb);
var leftab=$(".leftab",kuangb)[0];
var rightab=$(".rightab",kuangb)[0];
var as=$("a",kuangb);
var abtns=$(".abtn",kuangb);

for (var i = 1; i < as.length; i++) {
  as[i].style.left="390px"
};
var num=0;
var next=0;
var flag=true;
kuangb.onmouseover=function(){
  
  leftab.style.display="block";
  rightab.style.display="block";
}
kuangb.onmouseout=function(){
  leftab.style.display="none";
  rightab.style.display="none";
}
leftab.onclick=function(){
  if(flag){flag=false;
   next++;
   
  if(next>=2){
    next=0;
   }
    as[next].style.left="390px";
  animate(as[num],{left:-390});
  animate(as[next],{left:0},function(){
    flag=false;
  });
  num=next;
}
}
rightab.onclick=function(){
  if(flag){flag=false};
num--;

  if(num<=-1){
    num=as.length-1;
}
  as[num].style.left="-390px";
  animate(as[next],{left:390});
  animate(as[num],{left:0},function(){
    flag=true;
  })
  for (var i = 0; i < abtns.length; i++) {
    abtns[i].style.background="#ccc";
    as[i].style.zIndex=0;
  };
abtns[next].style.background="red";
as[next].style.zIndex=1;
     next=num;
}

})
/*美容护肤轮播*/
addEvent(window,"load",function(){
var kuangc=$(".kuangc")[0];
var imgs=$("img",kuangc);
var leftab=$(".leftab",kuangc)[0];
var rightab=$(".rightab",kuangc)[0];
var as=$("a",kuangc);
var abtns=$(".abtn",kuangc);

for (var i = 1; i < as.length; i++) {
  as[i].style.left="390px"
};
var num=0;
var next=0;
var flag=true;
kuangc.onmouseover=function(){
  
  leftab.style.display="block";
  rightab.style.display="block";
}
kuangc.onmouseout=function(){
  leftab.style.display="none";
  rightab.style.display="none";
}
leftab.onclick=function(){
  if(flag){flag=false;
   next++;
   
  if(next>=2){
    next=0;
   }
    as[next].style.left="390px";
  animate(as[num],{left:-390});
  animate(as[next],{left:0},function(){
    flag=false;
  });
  num=next;
}
}
rightab.onclick=function(){
  if(flag){flag=false};
num--;

  if(num<=-1){
    num=as.length-1;
}
  as[num].style.left="-390px";
  animate(as[next],{left:390});
  animate(as[num],{left:0},function(){
    flag=true;
  })
  for (var i = 0; i < abtns.length; i++) {
    abtns[i].style.background="#ccc";
    as[i].style.zIndex=0;
  };
abtns[next].style.background="red";
as[next].style.zIndex=1;
     next=num;
}

})


addEvent(window,"load",function(){
var kuangd=$(".kuangd")[0];
var imgs=$("img",kuangd);
var leftab=$(".leftab",kuangd)[0];
var rightab=$(".rightab",kuangd)[0];
var as=$("a",kuangd);
var abtns=$(".abtn",kuangd);

for (var i = 1; i < as.length; i++) {
  as[i].style.left="390px"
};
var num=0;
var next=0;
var flag=true;
kuangd.onmouseover=function(){
  
  leftab.style.display="block";
  rightab.style.display="block";
}
kuangd.onmouseout=function(){
  leftab.style.display="none";
  rightab.style.display="none";
}
leftab.onclick=function(){
  if(flag){flag=false;
   next++;
   
  if(next>=2){
    next=0;
   }
    as[next].style.left="390px";
  animate(as[num],{left:-390});
  animate(as[next],{left:0},function(){
    flag=false;
  });
  num=next;
}
}
rightab.onclick=function(){
  if(flag){flag=false};
num--;

  if(num<=-1){
    num=as.length-1;
}
  as[num].style.left="-390px";
  animate(as[next],{left:390});
  animate(as[num],{left:0},function(){
    flag=true;
  })
  for (var i = 0; i < abtns.length; i++) {
    abtns[i].style.background="#ccc";
    as[i].style.zIndex=0;
  };
abtns[next].style.background="red";
as[next].style.zIndex=1;
     next=num;
}

})

addEvent(window,"load",function(){
var kuange=$(".kuange")[0];
var imgs=$("img",kuange);
var leftab=$(".leftab",kuange)[0];
var rightab=$(".rightab",kuange)[0];
var as=$("a",kuange);
var abtns=$(".abtn",kuange);

for (var i = 1; i < as.length; i++) {
  as[i].style.left="390px"

};
var num=0;
var next=0;
var flag=true;
kuange.onmouseover=function(){
  
  leftab.style.display="block";
  rightab.style.display="block";
}
kuange.onmouseout=function(){
  leftab.style.display="none";
  rightab.style.display="none";
}
leftab.onclick=function(){
  if(flag){flag=false;
   next++;
   
  if(next>=2){
    next=0;
   }
    as[next].style.left="390px";
  animate(as[num],{left:-390});
  animate(as[next],{left:0},function(){
    flag=false;
  });
  num=next;
}
}
rightab.onclick=function(){
  if(flag){flag=false};
num--;

  if(num<=-1){
    num=as.length-1;
}
  as[num].style.left="-390px";
  animate(as[next],{left:390});
  animate(as[num],{left:0},function(){
    flag=true;
  })
  for (var i = 0; i < abtns.length; i++) {
    abtns[i].style.background="#ccc";
    as[i].style.zIndex=0;
  };
abtns[next].style.background="red";
as[next].style.zIndex=1;
     next=num;
}

})


/*时尚名品的小轮播*/
addEvent(window,"load",function(){
var fena=$(".fena");
var zuo=$(".zuo")[0];
var you=$(".you")[0];
for (var i = 1; i < fena.length; i++) {
  fena[i].style.left="200px";

};
var num=0;
var next=0;

zuo.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fena[next].style.left="200px";
  animate(fena[num],{left:-200});
  animate(fena[next],{left:0});
   num=next;
}
you.onclick=function(){
  num--;
if(num<=-1){
    num=fena.length-1;
}

  fena[num].style.left="-200px";
  animate(fena[next],{left:200});
  animate(fena[num],{left:0});
  next=num;

}

})

/*潮流女装的小轮播*/
addEvent(window,"load",function(){
var fenb=$(".fenb");
var zuoa=$(".zuoa")[0];
var youa=$(".youa")[0];
for (var i = 1; i < fenb.length; i++) {
  fenb[i].style.left="0px";

};
var num=0;
var next=0;

zuoa.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fenb[next].style.left="200px";
  animate(fenb[num],{left:-200});
  animate(fenb[next],{left:0});
   num=next;
}
youa.onclick=function(){
  num--;
if(num<=-1){
    num=fenb.length-1;
}

  fenb[num].style.left="-200px";
  animate(fenb[next],{left:200});
  animate(fenb[num],{left:0});
  next=num;

}

})




//精品男装小轮播
addEvent(window,"load",function(){
var fenc=$(".fenc");
var zuoc=$(".zuoc")[0];
var youc=$(".youc")[0];
for (var i = 1; i < fenc.length; i++) {
  fenc[i].style.left="0px";

};
var num=0;
var next=0;

zuoc.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fenc[next].style.left="200px";
  animate(fenc[num],{left:-200});
  animate(fenc[next],{left:0});
   num=next;
}
youc.onclick=function(){
  num--;
if(num<=-1){
    num=fenc.length-1;
}

  fenc[num].style.left="-200px";
  animate(fenc[next],{left:200});
  animate(fenc[num],{left:0});
  next=num;

}

})


/*时尚鞋业的小轮播*/

addEvent(window,"load",function(){
var fend=$(".fend");
var zuod=$(".zuod")[0];
var youd=$(".youd")[0];
for (var i = 0; i < fend.length; i++) {
  fend[i].style.left="0px";

};
var num=0;
var next=0;

zuod.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fend[next].style.left="200px";
  animate(fend[num],{left:-200});
  animate(fend[next],{left:0});
   num=next;
}
youd.onclick=function(){
  num--;
if(num<=-1){
    num=fend.length-1;
}

  fend[num].style.left="-200px";
  animate(fend[next],{left:200});
  animate(fend[num],{left:0});
  next=num;

}

})



//潮流箱包的小轮播

addEvent(window,"load",function(){
var fene=$(".fene");
var zuoe=$(".zuoe")[0];
var youe=$(".youe")[0];
for (var i = 0; i < fene.length; i++) {
  fene[i].style.left="0px";

};
var num=0;
var next=0;

zuoe.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fene[next].style.left="200px";
  animate(fene[num],{left:-200});
  animate(fene[next],{left:0});
   num=next;
}
youe.onclick=function(){
  num--;
if(num<=-1){
    num=fene.length-1;
}

  fene[num].style.left="-200px";
  animate(fene[next],{left:200});
  animate(fene[num],{left:0});
  next=num;

}

})



//美容美肤的小轮播
addEvent(window,"load",function(){
var fenf=$(".fenf");
var zuof=$(".zuof")[0];
var youf=$(".youf")[0];
for (var i = 0; i < fenf.length; i++) {
  fenf[i].style.left="0px";

};
var num=0;
var next=0;

zuof.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fenf[next].style.left="200px";
  animate(fenf[num],{left:-200});
  animate(fenf[next],{left:0});
   num=next;
}
youf.onclick=function(){
  num--;
if(num<=-1){
    num=fenf.length-1;
}

  fenf[num].style.left="-200px";
  animate(fenf[next],{left:200});
  animate(fenf[num],{left:0});
  next=num;

}

})



/*户外运动的小轮播*/
addEvent(window,"load",function(){
var fenl=$(".fenl");
var zuol=$(".zuol")[0];
var youl=$(".youl")[0];
for (var i = 0; i < fenl.length; i++) {
  fenl[i].style.left="0px";

};
var num=0;
var next=0;

zuol.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fenl[next].style.left="200px";
  animate(fenl[num],{left:-200});
  animate(fenl[next],{left:0});
   num=next;
}
youl.onclick=function(){
  num--;
if(num<=-1){
    num=fenl.length-1;
}

  fenl[num].style.left="-200px";
  animate(fenl[next],{left:200});
  animate(fenl[num],{left:0});
  next=num;

}

})


/*户外运动的小轮播*/
addEvent(window,"load",function(){
var fenf=$(".fenf");
var zuof=$(".zuof")[0];
var youf=$(".youf")[0];
for (var i = 0; i < fenf.length; i++) {
  fenf[i].style.left="0px";

};
var num=0;
var next=0;

zuof.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fenf[next].style.left="200px";
  animate(fenf[num],{left:-200});
  animate(fenf[next],{left:0});
   num=next;
}
youf.onclick=function(){
  num--;
if(num<=-1){
    num=fenf.length-1;
}

  fenf[num].style.left="-200px";
  animate(fenf[next],{left:200});
  animate(fenf[num],{left:0});
  next=num;

}

})



/*内衣配饰的小轮播*/
addEvent(window,"load",function(){
var fenk=$(".fenk");
var zuok=$(".zuok")[0];
var youk=$(".youk")[0];
for (var i = 0; i < fenk.length; i++) {
  fenk[i].style.left="0px";

};
var num=0;
var next=0;

zuok.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fenk[next].style.left="200px";
  animate(fenk[num],{left:-200});
  animate(fenk[next],{left:0});
   num=next;
}
youk.onclick=function(){
  num--;
if(num<=-1){
    num=fenk.length-1;
}

  fenk[num].style.left="-200px";
  animate(fenk[next],{left:200});
  animate(fenk[num],{left:0});
  next=num;

}

})






/*婴童家居的小轮播*/

addEvent(window,"load",function(){
var fenh=$(".fenh");
var zuoh=$(".zuoh")[0];
var youh=$(".youh")[0];
for (var i = 0; i < fenh.length; i++) {
  fenh[i].style.left="0px";

};
var num=0;
var next=0;

zuoh.onclick=function(){
  next++;
 if(next>=2){
    next=0;
   }
    fenh[next].style.left="200px";
  animate(fenh[num],{left:-200});
  animate(fenh[next],{left:0});
   num=next;
}
youh.onclick=function(){
  num--;
if(num<=-1){
    num=fenh.length-1;
}

  fenh[num].style.left="-200px";
  animate(fenh[next],{left:200});
  animate(fenh[num],{left:0});
  next=num;

}

})

/*轮播的左边的侧导航*/
addEvent(window,"load",function(){
  var yiji=$(".yiji");
  var erji=$(".erji");
  var erer=$(".erer");
  for (var i = 0; i < yiji.length; i++) {
    yiji[i].index=i
 yiji[i].onmouseover=function(){
  erji[this.index].style.display="block";
  erer[this.index].style.display="block";
 }
 yiji[i].onmouseout=function(){
  erji[this.index].style.display="none";
  erer[this.index].style.display="none"

 }

};
})



//监测滚动位置效果事件

var fixbb;
$(window).scroll(function(){
  var tops=$(window).scrollTop();
  topss=tops;
  if($(window).scrollTop()>=600){
    $(".jump").show()
  }else{
    $(".jump").hide()
  }
$(".shishangbox").each(function(index,shobj){
  if($(".shishangbox").eq(index).offset().top<=tops+200){
    $(".fixeds").hide().eq(index).show();
    fixbb=index;
  }
})
    //鼠标点击楼层跳转效果
    $(".fixeds").click(function(){
      var fixcc=$(this).index(".fixeds");
      if(fixcc<=8){
        var fixtop={st:tops}
        $(fixtop).animate({st:$(".shishangbox").eq(fixcc).offset().top-100},{speed:1000,
              step:function(){
                $(window).scrollTop(fixtop.st);
              }
            })
      }
    })

//返回顶部
$(".fixedss").click(function(){
  var navtop={st:tops}
  $(navtop).animate({st:1},{
    speed:1000,
    step:function(){
      $(window).scrollTop(navtop.st)
    }
  })
})

})

 //右侧固定栏鼠标移入移除背景变化
$(".jump li").hover(function(){
  var fixaa=$(this).index(".jump li");
  $(".fixeds").hide().eq(fixbb).show();
  $(".fixeds").eq(fixaa).show();
},function(){
  $(".fixeds").hide().eq(fixbb).show()

})




/*楼层跳转的这部分 */
/*addEvent(window,"load",function(){
  var jump=$(".jump");
  var fixeds=$(".fixeds");
  for (var i = 0; i < jump.length; i++) {
    jump[i].index=i;
    jump[i].onmouseover=function(){
      
         fixeds[this.index].style.display="block";
     }
jump[i].onmouseout=function(){


  fixeds[this.index].style.display="none";

}   
  };
})*/















