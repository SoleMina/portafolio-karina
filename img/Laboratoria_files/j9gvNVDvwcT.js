if (self.CavalryLogger) { CavalryLogger.start_js(["etaO\/"]); }

__d('EntityInteractionLogger',['BanzaiLogger','Event','ScriptPath','collectDataAttributes','pageID'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h='EntityInteractionLoggerConfig';function i(event){var l=event.target||event.srcElement,m=j(l);if(m!==false){var n={client_time:Date.now(),event:'generic',session_id:c('pageID'),surface_tag:c('ScriptPath').getScriptPath()};Object.assign(n,m);c('BanzaiLogger').log(h,n);}}function j(l){var m=c('collectDataAttributes')(l,['et'],['href']),n=m.normal.href;if((!n||n==='#')&&(!m.et||!m.et.click_point))return false;return m.et;}var k={setup:function(l){c('Event').listen(l,{click:i});},handleEvent:i};f.exports=k;},null);
__d("XPlaceClaimLogEntryPointController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/place_claim\/log_entry_point\/",{});},null);
__d('PlaceClaimLogEntryPoint',['AsyncRequest','Event','XPlaceClaimLogEntryPointController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j,k){c('Event').listen(i,'click',function(){this.sendLoggingRequest(j,k);}.bind(this));},initMenu:function(i,j,k,l){i.subscribe('itemclick',function(m,n){if(n.item.getValue()==j)this.sendLoggingRequest(k,l);}.bind(this));},sendLoggingRequest:function(i,j){var k=c('XPlaceClaimLogEntryPointController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(k).setData({pageid:i,pageevent:j}).setMethod('POST').send();}};f.exports=h;},null);
__d('SavedForLaterNUX',['csx','DOM','Event','Tooltip'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i="._t6k",j={init:function(k,l){var m=c('DOM').scry(l,i);this.suppress(m,true);c('Event').listen(k,'click',function(){this.suppress(m,false);}.bind(this));},suppress:function(k,l){for(var m=0;m<k.length;m++){var n=k[m];c('Tooltip').suppress(n,l);}}};f.exports=j;},null);
__d('VertexScaledImageWithFallback',['CSS','DOMQuery'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={handleFallback:function(h,i){var j=c('DOMQuery').find(h,'img'),k=new Image(),l=function(m){if(k.width<=1||k.height<=1){c('CSS').hide(h);c('CSS').show(i);}}.bind(this);k.onload=l;k.onerror=l;k.src=j.src;}};},null);