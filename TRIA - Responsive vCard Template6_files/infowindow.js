google.maps.__gjsload__('infowindow', function(_){'use strict';var rU=function(a){a=a.__gm.get("panes");if(!_.Bk())return{ri:null,view:new _.eG(a,new _.WF,_.sw.b)};var b=_.Y("div");b.style.borderTop="1px solid #ccc";b.style.marginTop="9px";b.style.paddingTop="6px";var c=new _.Og(b),d=new _.eG(a,new _.WF,_.sw.b,b);_.E.addListener(c,"place_changed",function(){var a=c.get("place");d.set("apiContentSize",a?_.bK:_.fh);_.KA(b,!!a)});return{ri:c,view:d}},sU=function(){this.b=new _.AA},tU=function(a,b,c){this.m=!0;var d=b.__gm;this.da=c;c.bindTo("center",
d,"projectionCenterQ");c.bindTo("zoom",d);c.bindTo("offset",d);c.bindTo("projection",b);c.bindTo("focus",b,"position");c.bindTo("latLngPosition",a,"position");this.b=b instanceof _.Vd?a.b.get("logAsInternal")?"Ia":"Id":null;this.f=[];var e=new _.mu(["scale"],"visible",function(a){return null==a||.3<=a});e.bindTo("scale",c);var f=rU(b);this.C=f.ri;this.l=f.view;var f=this.C,g=this.l;f&&(f.bindTo("place",a),f.bindTo("attribution",a));g.set("logAsInternal",!!a.b.get("logAsInternal"));g.bindTo("zIndex",
a);g.bindTo("layoutPixelBounds",d);g.bindTo("maxWidth",a);g.bindTo("content",a);g.bindTo("pixelOffset",a);g.bindTo("visible",e);g.bindTo("position",c,"pixelPosition");g.set("open",!0);this.f.push(_.E.forward(b,"forceredraw",g),_.E.addListener(g,"domready",function(){a.trigger("domready")}));this.j=new _.lt(function(){var a=g.get("pixelBounds");a?_.E.trigger(d,"pantobounds",a):this.j.Ya()},150,this);a.get("disableAutoPan")||this.j.Ya();var h=this;this.f.push(_.E.addListener(g,"closeclick",function(){a.close();
a.trigger("closeclick");h.b&&_.cn(h.b,"-i",h,!!b.b)}));if(this.b){var l=this.b;_.an(b,this.b);_.cn(l,"-p",this,!!b.b);c=function(){var c=a.get("position"),d=b.getBounds();c&&d&&d.contains(c)?_.cn(l,"-v",h,!!b.b):_.dn(l,"-v",h)};this.f.push(_.E.addListener(b,"idle",c));c()}};tU.prototype.close=function(){if(this.m){this.m=!1;this.b&&(_.dn(this.b,"-p",this),_.dn(this.b,"-v",this));_.y(this.f,_.E.removeListener);this.f.length=0;this.j.stop();var a=this.C;a&&(a.unbindAll(),a.setPlace(null),a.setAttribution(null));a=this.l;a.unbindAll();a.set("open",!1);a.Ma();this.da.unbindAll()}};_.mc("infowindow",{Kk:function(a){var b=null;_.Wk(a,"map_changed",function d(){var e=a.get("map");b&&(b.Wg.b.remove(a),b.Pn.close(),b=null);if(e){var f=e.__gm;f.get("panes")?(f=new tU(a,e,new _.gG),e=e.__gm,e=e.IW_AUTO_CLOSER=e.IW_AUTO_CLOSER||new sU,b={Pn:f,Wg:e},f=b.Wg,1==f.b.mb()&&(e=f.b.va()[0],e.jd!=a.jd&&(e.set("map",null),f.b.remove(e))),f.b.add(a)):_.E.addListenerOnce(f,"panes_changed",d)}})}});});
