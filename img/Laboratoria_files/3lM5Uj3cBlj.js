if (self.CavalryLogger) { CavalryLogger.start_js(["pXF7m"]); }

__d("LocaleSwitchingReferrers",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={FB4B_GLOBAL_SITES_DIALOG:"fb4b_global_sites_dialog",FB4B_GLOBAL_SITES_FOOTER:"fb4b_global_sites_footer",LOCALE_SWITCH_SCRIPT:"locale_switch_script",SITEMAP:"sitemap",QP_PROMO:"qp_promo",WWW_ACCOUNT_SETTINGS:"www_account_settings",WWW_CARD_SELECTOR:"www_card_selector",WWW_CARD_SELECTOR_MORE:"www_card_selector_more",WWW_DEV_SITE:"www_dev_site",WWW_HELP_INLINE_SELECTOR:"www_help_inline_selector",WWW_I18N_NUB:"www_i18n_nub",WWW_LANGUAGE_PAGE:"www_language_page",WWW_LINK_DIALOG_SELECTOR:"www_link_dialog_selector",WWW_LIST_SELECTOR:"www_list_selector",WWW_LIST_SELECTOR_MORE:"www_list_selector_more",WWW_TRANS_APP_INCONSISTENT:"www_trans_app_inconsistent",OTHER:"other"};},null);
__d('LoggedOutSwitchingLocaleTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig',this.$LoggedOutSwitchingLocaleTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig',this.$LoggedOutSwitchingLocaleTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$LoggedOutSwitchingLocaleTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1=babelHelpers['extends']({},this.$LoggedOutSwitchingLocaleTypedLogger1,j);return this;};h.prototype.setIndex=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.index=j;return this;};h.prototype.setNewLocale=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.new_locale=j;return this;};h.prototype.setOldLocale=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.old_locale=j;return this;};h.prototype.setReferrer=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.referrer=j;return this;};var i={index:true,new_locale:true,old_locale:true,referrer:true};f.exports=h;},null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/intl\/ajax\/save_locale\/",{});},null);
__d('IntlUtils',['AsyncRequest','Cookie','LocaleSwitchingReferrers','LoggedOutSwitchingLocaleTypedLogger','ReloadPage','XIntlAccountSetLocaleAsyncController','goURI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={setXmode:function(i){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({xmode:i}).setHandler(function(){c('ReloadPage').now();}).send();},setAmode:function(i){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({amode:i,app:false}).setHandler(function(){c('ReloadPage').now();}).send();},setRmode:function(i){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({rmode:i}).setHandler(function(){c('ReloadPage').now();}).send();},setLocale:function(i,j,k,l){if(!k)k=i.options[i.selectedIndex].value;var m=c('XIntlAccountSetLocaleAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(m).setData({loc:k,ref:j,should_redirect:false}).setHandler(function(n){c('ReloadPage').now();}).send();},setLocaleCookie:function(i,j){c('Cookie').set('locale',i,7*24*3600000);c('goURI')(j);},setCookieLocale:function(i,j,k){var l=arguments.length<=3||arguments[3]===undefined?c('LocaleSwitchingReferrers').OTHER:arguments[3],m=arguments.length<=4||arguments[4]===undefined?null:arguments[4];c('Cookie').set('locale',i,7*24*3600000);new (c('LoggedOutSwitchingLocaleTypedLogger'))().setNewLocale(i).setOldLocale(j).setIndex(m).setReferrer(l).log();c('goURI')(k);}};f.exports=h;},null);
__d('legacy:intl-base',['IntlUtils'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.intl_set_xmode=c('IntlUtils').setXmode;b.intl_set_amode=c('IntlUtils').setAmode;b.intl_set_rmode=c('IntlUtils').setRmode;b.intl_set_locale=c('IntlUtils').setLocale;},3);
__d('FormTypeABTester',['Base64','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){var j=16,k=32,l=65,m=90,n=48,o=57,p=58,q=63,r=91,s=94,t=0,u=0,v=0,w=0,x=[],y=null,z=[],aa=[],ba=[],ca=[];for(var da=0;da<10;da++){z.push(0);aa.push(0);}for(var ea=0;ea<10;ea++){aa.push(0);ba.push(0);ca.push(0);}var fa=function(ia){var ja=window.event?Date.now():ia.timeStamp,ka=window.event?window.event.keyCode:ia.which;ka%=128;if(ka>=l&&ka<=m||ka==k){t++;}else if(ka>=n&&ka<=o){u++;}else if(ka>=p&&ka<=q||ka>=r&&ka<=s){v++;}else w++;x[ka]=ja;if(y){var la=ja-y;if(la>=0&&(ka>=l&&ka<=m||ka==k))if(la<400){aa[Math.floor(la/20)]++;}else if(la<1000){ba[Math.floor((la-400)/60)]++;}else if(la<3000)ca[Math.floor((la-1000)/200)]++;}y=ja;},ga=function(ia){var ja=window.event?Date.now():ia.timeStamp,ka=window.event?window.event.keyCode:ia.which,la=ja-x[ka%128];if(la>=50&&la<250)z[Math.floor((la-50)/20)]++;},ha=function(ia){var ja=Math.max.apply(Math,ia),ka=[];ia.forEach(function(la){ka.push(Math.floor(la*63/(ja||1)));});return ka;};this.getDataVect=function(){var ia=aa.concat(ba,ca);return ha(ia).concat(ha(z),[t/2,u/2,v/2,w/2]);};this.getData=function(){return c('Base64').encodeNums(this.getDataVect());};c('Event').listen(i,{keyup:ga.bind(this),keydown:fa.bind(this)});}f.exports=h;},null);
__d("XConsentCookieController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/cookie\/consent\/",{pv:{type:"Enum",enumType:0}});},null);
__d('DeferredCookie',['AsyncRequest','Cookie','Map','XConsentCookieController'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=new (c('Map'))(),i={shouldAddDefaultListener:true,defaultHandler:null,autoFlushCookies:false,sentConsentToServer:false,addToQueue:function(j,k,l,m,n,o,p){if(this.autoFlushCookies){if(o){c('Cookie').setIfFirstPartyContext(j,k,l,m,n);}else c('Cookie').set(j,k,l,m,n);return;}if(h.has(j))return;h.set(j,{name:j,value:k,nMilliSecs:l,path:m,secure:n,firstPartyOnly:o});if(p)this.addDefaultInteractionListener();},flushAllCookies:function(){h.forEach(function(k,l){if(k.firstPartyOnly){c('Cookie').setIfFirstPartyContext(k.name,k.value,k.nMilliSecs,k.path,k.secure);}else c('Cookie').set(k.name,k.value,k.nMilliSecs,k.path,k.secure);});this.autoFlushCookies=true;h=new (c('Map'))();if(!this.sentConsentToServer){this.sentConsentToServer=true;var j=c('XConsentCookieController').getURIBuilder().setEnum('pv',this.getNoticePolicyVersion()).getURI();new (c('AsyncRequest'))().setURI(j).send();}this.removeDefaultInteractionListener();},getNoticePolicyVersion:function(){try{var k=document.getElementById('cpn-pv-link');if(!k)return '1';return k.getAttribute('data-pv');}catch(j){return '1';}},removeDefaultInteractionListener:function(){if(this.defaultHandler){if(window.removeEventListener){window.removeEventListener('click',this.defaultHandler,true);}else if(document.detachEvent)document.detachEvent('onclick',this.defaultHandler);this.defaultHandler=null;}},addDefaultInteractionListener:function(){if(this.shouldAddDefaultListener){this.shouldAddDefaultListener=false;this.defaultHandler=this.baseInteractionHandler.bind(this);if(window.addEventListener){window.addEventListener('click',this.defaultHandler,true);}else if(document.attachEvent)document.attachEvent('onclick',this.defaultHandler);}},baseInteractionHandler:function(){this.flushAllCookies();}};f.exports=i;},null);
__d('LoginFormController',['Event','ge','Button','Cookie','DeferredCookie','FormTypeABTester'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();g.init=function(h,i,j,k){if(k)var l=new (c('FormTypeABTester'))(h);c('Event').listen(h,'submit',function(){if(k&&h.ab_test_data)h.ab_test_data.value=l.getData();if(window.__cookieReload)window.clearInterval(window.__cookieReload);c('Button').setEnabled(i,false);setTimeout(c('Button').setEnabled.bind(null,i,true),15000);c('DeferredCookie').flushAllCookies();});var m=c('ge')('lgnjs');if(m){var n=Math.floor(Date.now()/1000);m.value=n;}var o=parseInt(c('Cookie').get('m_ts'),10),p=j!=null;if(o>n-60)p=false;if(p){var q,r=function(){if(c('Cookie').get('c_user')!=null){window.clearInterval(q);c('Cookie').set('m_ts',Math.floor(Date.now()/1000),null,'/',false);window.location.href=j;}};q=window.setInterval(r,1000);r();}};},null);
__d("ScreenDimensionsAutoSet",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){if(!window.btoa)return '';var j={w:screen.width,h:screen.height,aw:screen.availWidth,ah:screen.availHeight,c:screen.colorDepth};return btoa(JSON.stringify(j));}var i={setInputValue:function(j){j.value=h();}};f.exports=i;},null);
__d('TimezoneAutoset',['AsyncRequest','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;function i(l){var m=new Date(),n=m.getTimezoneOffset()/15,o=m.getTime()/1000,p=Math.round((l-o)/900),q=Math.round(n+p)%96;if(q==0){return 0;}else if(q>48){q-=Math.ceil(q/96)*96;}else if(q<-56)q+=Math.ceil(q/-96)*96;return q*15;}function j(l,m,n){if(!l||undefined==m)return;if(h)return;h=true;var o=-i(l);if(n||o!=m){var p='/ajax/timezone/update.php';new (c('AsyncRequest'))().setURI(p).setData({gmt_off:o,is_forced:n}).setErrorHandler(c('emptyFunction')).setTransportErrorHandler(c('emptyFunction')).setOption('suppressErrorAlerts',true).send();}}var k={setInputValue:function(l,m){l.value=i(m);},setTimezone:j};f.exports=k;},null);