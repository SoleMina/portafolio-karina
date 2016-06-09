if (self.CavalryLogger) { CavalryLogger.start_js(["HUSi1"]); }

__d('TimelineCapsule',['csx','Arbiter','CSS','DataStore','DOM','DOMQuery','DOMScroll','Parent','TimelineConstants','TimelineLegacySections','Vector','$','queryThenMutateDOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=function(){var j={},k={};function l(n){c('DOMQuery').scry(n,"._3ram").forEach(function(o){var p=o.getAttribute('data-endmarker'),q=o.getAttribute('data-pageindex'),r=function(){if(!o.parentNode)return;c('DataStore').set(c('TimelineConstants').DS_LOADED,n.id,q);c('DOM').remove(o);c('Arbiter').inform(c('TimelineConstants').SECTION_FULLY_LOADED,{scrubberKey:p,pageIndex:q,capsuleID:n.id,childCount:n.childNodes.length});};if(c('TimelineLegacySections').get(p)){r();}else var s=c('Arbiter').subscribe(c('TimelineConstants').SECTION_REGISTERED,function(t,u){if(u.scrubberKey===p){r();s.unsubscribe();}});});c('Arbiter').inform('TimelineCapsule/balanced',{capsule:n});}function m(n,o){var p=c('Parent').byAttribute(n,'data-size');if(p)if(c('CSS').hasClass(n.parentNode,'timelineReportContent')){o(n);}else o(p);}return {removeUnit:function(n){m(n,function(o){c('DOM').remove(o);});},removeUnitWithID:function(n){i.removeUnit(c('$')(n));},hideUnit:function(n){m(n,function(o){c('CSS').addClass(o,'fbTimelineColumnHidden');});},undoHideUnit:function(n,o){c('DOM').remove(c('Parent').byClass(o,'hiddenText'));m(n,function(p){c('CSS').removeClass(p,'fbTimelineColumnHidden');});},unplacehold:function(n){var o=c('$')(n);o.style.top=null;c('CSS').removeClass(o,'visiblePlaceholder');c('CSS').removeClass(o,'placeholder');var p=c('Parent').byClass(o,'fbTimelineCapsule');delete j[p.id][n];i.balanceCapsule(p);},scrollToCapsule:function(n){if(!k.hasOwnProperty(n.id)){var o=c('Vector').getElementPosition(n.parentNode);c('DOMScroll').scrollTo(new (c('Vector'))(c('Vector').getScrollPosition().x,o.y-c('TimelineConstants').SCROLL_TO_OFFSET,'document'));k[n.id]=true;}},loadTwoColumnUnits:function(n,o,p){var q=c('$')(n);c('queryThenMutateDOM')(function(){var r=c('Parent').byClass(q,'fbTimelineSection');if(r&&!o){var s=c('DOMQuery').find(q,"._2t4u"),t=c('DOMQuery').find(q,"._2t4v"),u=t.offsetHeight-s.offsetHeight;c('DataStore').set(c('TimelineConstants').DS_COLUMN_HEIGHT_DIFFERENTIAL,p,u);}},l.bind(null,q));}};}();f.exports=i;},null);
__d('TimelineSideAds',['csx','cx','AdsMouseStateStore','Animation','Arbiter','CSS','DOM','EgoAdsObjectSet','Event','ProfileTabUtils','StickyController','TimelineAdsConfig','TimelineComponentKeys','TimelineConstants','TimelineController','UIPagelet','UITinyViewportAction','URI','Vector','debounce','ge','getOrCreateDOMID','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=75,k='data-height',l=c('AdsMouseStateStore').STATES,m=30000,n=0,o=false,p,q,r,s,t,u,v=new (c('EgoAdsObjectSet'))(),w,x,y,z=Infinity,aa=false,ba=5,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na=false,oa=[],pa;function qa(pb,qb,rb){var sb=0;if(qb)sb+=qb.getHeight();if(!va()&&!sb)return;pb-=sb;var tb=0;for(var ub=0;ub<rb;ub++)tb+=eb(ub);if(qb)if(pb<tb){pb+=qb.fold(tb-pb);}else if(pb>tb)pb-=qb.unfold(pb-tb);return pb;}function ra(){var pb=q.cloneNode(true);pb.id='';var qb=new (c('EgoAdsObjectSet'))();qb.init(c('DOM').scry(pb,'div.ego_unit'));var rb=true;qb.forEach(function(sb){if(rb){rb=false;}else c('DOM').remove(sb);});c('CSS').addClass(pb,'fixed_elem');return pb;}function sa(){u=undefined;if(!c('ProfileTabUtils').tabHasScrubber(w)){wa(ba);za();}else if(fa){xa(q,false);var pb=ga;ga&&c('DOM').remove(ga);ga=ra();if(pb)kb();wa(da);za();if(!y){var qb=c('TimelineController').getCurrentScrubber();if(qb)jb(qb.getRoot(),qb.getOffset());}y&&y.start();}else ob.adjustAdsToFit();}function ta(){if(ga){c('DOM').remove(ga);ga=null;}if(y){y.stop();y=null;}var pb=c('ProfileTabUtils').tabHasScrubber(w);c('CSS').conditionClass(q,'fixed_elem',!fa&&(va()||pb));c('CSS').conditionClass(q,"_31wm",!pb);c('CSS').conditionClass(q,"_5r9k",pb);}function ua(pb){var qb=c('Vector').getViewportDimensions().y,rb=c('TimelineController').getCurrentScrubber(),sb=rb?rb.getOffset():c('TimelineConstants').SCRUBBER_DEFAULT_OFFSET,tb=qb-sb-j;if(rb||va())return qa(tb,rb,pb);}function va(){return c('ProfileTabUtils').tabHasFixedAds(w);}function wa(pb){t=Math.min(pb,v.getCount());v.forEach(function(qb,rb){xa(qb,rb>=t);});xa(q,t===0);}function xa(pb,qb){c('CSS').conditionClass(pb,"_22r",qb);pb.setAttribute('aria-hidden',qb?'true':'false');}function ya(pb){var qb=c('DOM').find(v.getUnit(pb),"div._4u8"),rb=qb.getAttribute('data-ad');return JSON.parse(rb).adid;}function za(){bb();ab();}function ab(){var pb;if(u!==undefined){pb=v.getHoldoutAdIDsForSpace(u,fb);}else pb=v.getHoldoutAdIDsForNumAds(t);if(pb)pb.forEach(cb);}function bb(){if(!ha)return;for(var pb=t-1;pb>=0;--pb){if(y&&y.isFixed()&&(pb!==0||ga&&!c('CSS').shown(ga)))continue;var qb=ya(pb);if(!ha[qb])return;cb(qb);}}function cb(pb){if(!ha[pb])return;var qb=c('DOM').create('iframe',{src:new (c('URI'))('/ai.php').addQueryData({aed:ha[pb]}),width:0,height:0,frameborder:0,scrolling:'no',className:'fbEmuTracking'});qb.setAttribute('aria-hidden','true');c('DOM').appendContent(q,qb);delete ha[pb];}function db(pb){var qb=0;for(var rb=0;rb<ba;rb++){var sb=eb(rb);pb-=sb;if(pb>0&&sb>0)qb++;}return qb;}function eb(pb){var qb=v.getUnit(pb);if(!qb)return 0;return fb(qb);}function fb(pb){if(!pb.getAttribute(k))gb(pb);return parseInt(pb.getAttribute(k),10);}function gb(pb){pb.setAttribute(k,pb.offsetHeight);}function hb(){for(var pb=0;pb<v.getCount();pb++){var qb=v.getUnit(pb);if(!qb)continue;gb(qb);}}function ib(){var pb=c('DOM').scry(q,'div.ego_unit');v.init(pb);var qb=pb.length;if(!qb)return;c('CSS').addClass(v.getUnit(0),'ego_unit_no_top_border');sa();setTimeout(function(){pb.forEach(gb);ob.adjustAdsToFit();z=Date.now();},0);}function jb(pb,qb){y=new (c('StickyController'))(pb,qb,function(rb){if(rb){kb();}else{c('DOM').remove(ga);za();}});if(ga)y.start();}function kb(){c('DOM').insertAfter(q,ga);lb();}function lb(){c('CSS').conditionShow(ga,eb(0)<=ua(1)&&!c('UITinyViewportAction').isTiny());}function mb(){if(x){var pb=c('ge')(r);c('DOM').find(pb,'.ego_column').appendChild(x);}if(c('TimelineAdsConfig').fade)new (c('Animation'))(c('ge')(r)).from('opacity',0).to('opacity',1).duration(600).go();}function nb(pb){return !!c('DOM').scry(pb,'div.fbEmuHidePoll')[0];}var ob={init:function(pb,qb,rb){if(o)return;ba=rb.max_ads;p=rb.refresh_delay;m=rb.refresh_threshold;ca=rb.min_ads;da=rb.min_ads_short;o=true;s=qb;q=pb;c('AdsMouseStateStore').updateRhcID(c('getOrCreateDOMID')(q));ia=c('Arbiter').subscribe(['UFI/CommentAddedActive','UFI/CommentDeletedActive','UFI/LikeActive','Curation/Action','ProfileBrowser/LoadMoreContent','Ads/NewContentDisplayed'],ob.loadAdsIfEnoughTimePassed);ja=c('Arbiter').subscribe('TimelineSideAds/refresh',ob.forceReloadAds);ka=c('Arbiter').subscribe('ProfileQuestionAnswered',ob.forceReloadAdsWithCallback);la=c('Arbiter').subscribe('Ads/displayPoll',ob.displayAdsPoll);ma=c('Arbiter').subscribe('Ads/hidePoll',ob.hideAdsPoll);pa=c('debounce')(ob.loadAdsIfEnoughTimePassed,p,this,true);if(rb.mouse_move){oa.push(c('Event').listen(window,'mousemove',pa));oa.push(c('Event').listen(window,'scroll',pa));oa.push(c('Event').listen(window,'resize',pa));oa.push(c('Event').listen(q,'mouseenter',function(){aa=true;}));oa.push(c('Event').listen(q,'mouseleave',function(){aa=false;}));}c('TimelineController').register(c('TimelineComponentKeys').ADS,ob);},setShortMode:function(pb){fa=pb;},start:function(pb){ha=pb;ea=null;ib();},updateCurrentKey:function(pb){if(pb==w)return;w=pb;ta();},loadAds:function(pb){if(ea)return;z=Infinity;ea=c('UIPagelet').loadFromEndpoint('WebEgoPane',q.id,{pid:33,data:[s,'timeline_'+pb,fa?da:ba,++n,false]},{crossPage:true,bundle:false,handler:mb});},registerScrubber:function(pb){if(fa)jb(pb.getRoot(),pb.getOffset());!ea&&ob.adjustAdsToFit();},intentShown:function(){if(!c('TimelineAdsConfig').stateRefresh)return false;switch(c('AdsMouseStateStore').getState()){case l.HOVER:case l.INTENT:default:return true;case l.NO_INTENT:return false;case l.STATIONARY:return !c('TimelineAdsConfig').refreshOnStationary;}},loadAdsIfEnoughTimePassed:function(){if(m&&Date.now()-z>=m&&!c('UITinyViewportAction').isTiny()&&(!y||y.isFixed())&&(!ha||!ha[ya(0)])&&!ob.intentShown()&&!aa)ob.loadAds(w);ob.adjustAdsToFit();},forceReloadAdsWithCallback:function(pb,qb){x=qb;r=c('getOrCreateDOMID')(q);ob.loadAds(w);},forceReloadAds:function(){ob.loadAds(w);},displayAdsPoll:function(){var pb=-1;for(var qb=0;qb<v.getCount();qb++){var rb=v.getUnit(qb);if(!rb)continue;if(pb===-1&&nb(rb))pb=qb;gb(rb);}ob.adjustAdsToFit();if(pb===t&&pb>0){xa(v.getUnit(pb-1),true);xa(v.getUnit(pb),false);}},hideAdsPoll:function(){hb();ob.adjustAdsToFit();},adjustAdsToFit:function(){if(!q||na)return;na=true;if(fa){if(y&&ga){y.handleScroll();if(y.isFixed()){c('CSS').conditionShow(ga,eb(0)<=ua(1)&&!c('UITinyViewportAction').isTiny());}else wa(da);za();}na=false;return;}var pb=0;c('queryThenMutateDOM')(function(){var qb=ua(ca);if(qb!==undefined){u=qb;pb=db(qb);}},function(){if(pb>0){wa(pb);za();na=false;}});},reset:function(){y&&y.stop();ea&&ea.cancel();v=new (c('EgoAdsObjectSet'))();q=null;y=null;ea=null;n=0;fa=null;ga=null;w=null;z=Infinity;o=false;ia&&c('Arbiter').unsubscribe(ia);ia=null;ja&&c('Arbiter').unsubscribe(ja);ja=null;ka&&c('Arbiter').unsubscribe(ka);la&&c('Arbiter').unsubscribe(la);ma&&c('Arbiter').unsubscribe(ma);ka=null;aa=false;oa.forEach(function(pb){pb.remove();});oa=[];pa&&pa.reset();}};f.exports=b.TimelineSideAds||ob;},null);
__d('TimelineStickyHeader',['Animation','Arbiter','BlueBar','Bootloader','CSS','DOM','ProfileTabConst','ProfileTabUtils','ProfileTimelineUILogger','Style','TimelineComponentKeys','TimelineController','Vector','ViewportBounds','UITinyViewportAction','ge','getOrCreateDOMID','queryThenMutateDOM'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=200,i=358,j=48,k=false,l=false,m,n,o,p,q=false,r=0,s,t,u={},v={VISIBLE:'TimelineStickyHeader/visible',ADJUST_WIDTH:'TimelineStickyHeader/adjustWidth',init:function(w){if(k)return;k=true;m=w;n=c('DOM').find(w,'div.name');o=c('DOM').find(w,'div.actions');l=c('CSS').hasClass(w,'fbTimelineStickyHeaderVisible');var x,y=false,z=true;c('queryThenMutateDOM')(function(){var aa=c('BlueBar').getBar();if(aa.offsetTop&&!c('ge')('page_admin_panel')&&c('TimelineController').getCurrentKey()!==c('ProfileTabConst').TIMELINE){x=c('Vector').tElementDimensions(aa).y;y=true;}z=c('BlueBar').hasFixedBlueBar();},function(){if(y){c('Bootloader').loadModules(["StickyController"],function(aa){new aa(w,x).start();},'TimelineStickyHeader');}else c('CSS').addClass(w,'fixed_elem');if(!z)c('CSS').addClass(w,'fbTimelineStickyHeaderNonFixedBlueBar');v.updateBounds(l);c('TimelineController').register(c('TimelineComponentKeys').STICKY_HEADER,v);},'TimelineStickyHeader/init');},reset:function(){k=false;l=false;m=null;n=null;o=null;u={};p.remove();p=null;},handleTabChange:function(w){r=c('ProfileTabUtils').isTimelineTab(w)?i-j:0;if(!c('ProfileTabUtils').tabHasStickyHeader(w)){this.toggle(false,function(){return c('CSS').hide(m);});return;}c('CSS').show(m);},updateBounds:function(){c('queryThenMutateDOM')(function(){s=m.offsetTop;t=m.scrollHeight;},function(){p=c('ViewportBounds').addTop(function(){return l?s+t:0;});},'TimelineStickyHeader/init');},check:function(w){if(c('UITinyViewportAction').isTiny()){this.toggle(false);return;}var x=r===0||w>=r;this.toggle(x);},toggle:function(w,x){if(w===l){x&&x();return;}var y=w?s-t:s,z=w?s:s-t;c('Style').set(m,'top',y+'px');c('CSS').addClass(m,'fbTimelineStickyHeaderAnimating');var aa=c('getOrCreateDOMID')(m);u[aa]&&u[aa].stop();u[aa]=new (c('Animation'))(m).from('top',y).to('top',z).duration(h).ondone(function(){u[aa]=null;if(w&&!q){c('ProfileTimelineUILogger').logStickyHeaderImpression();q=true;}c('queryThenMutateDOM')(null,function(){c('CSS').conditionClass(m,'fbTimelineStickyHeaderHidden',!w);m.setAttribute('aria-hidden',w?'false':'true');c('CSS').removeClass(m,'fbTimelineStickyHeaderAnimating');c('Style').set(m,'top','');v.updateBounds();c('Arbiter').inform(v.VISIBLE,w);x&&x();});}).go();l=w;if(l)v.adjustWidth();},adjustWidth:function(){c('Arbiter').inform(v.ADJUST_WIDTH,n,c('Arbiter').BEHAVIOR_STATE);},getRoot:function(){return m;},setActions:function(w){if(k&&w){c('DOM').setContent(o,w);o=w;}}};f.exports=b.TimelineStickyHeader||v;},null);
__d('ButtonGroup',['CSS','DataStore','Parent'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='firstItem',i='lastItem';function j(o,p){var q=c('Parent').byClass(o,p);if(!q)throw new Error('invalid use case');return q;}function k(o){return c('CSS').shown(o)&&Array.from(o.childNodes).some(c('CSS').shown);}function l(o){var p,q,r;Array.from(o.childNodes).forEach(function(s){r=k(s);c('CSS').removeClass(s,h);c('CSS').removeClass(s,i);c('CSS').conditionShow(s,r);if(r){p=p||s;q=s;}});p&&c('CSS').addClass(p,h);q&&c('CSS').addClass(q,i);c('CSS').conditionShow(o,p);}function m(o,p){var q=j(p,'uiButtonGroupItem');o(q);l(q.parentNode);}function n(o){'use strict';this._root=j(o,'uiButtonGroup');c('DataStore').set(this._root,'ButtonGroup',this);l(this._root);}n.getInstance=function(o){'use strict';var p=j(o,'uiButtonGroup'),q=c('DataStore').get(p,'ButtonGroup');return q||new n(p);};Object.assign(n.prototype,{hideItem:m.bind(null,c('CSS').hide),showItem:m.bind(null,c('CSS').show),toggleItem:m.bind(null,c('CSS').toggle)});f.exports=n;},null);
__d('TimelineStickyHeaderNav',['Arbiter','BlueBar','ButtonGroup','CSS','DataStore','DateStrings','DOM','Event','Parent','ProfileTimelineUILogger','SelectorDeprecated','Style','SubscriptionsHandler','TimelineComponentKeys','TimelineConstants','TimelineController','UITinyViewportAction','URI','Vector','queryThenMutateDOM'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i,j,k,l,m,n,o,p,q,r,s,t={},u={},v=[],w=false,x=[],y=[],z,aa=80;function ba(){var na=c('SelectorDeprecated').getSelectorMenu(m);z.addSubscriptions(c('Event').listen(na,'click',ca),c('Arbiter').subscribe(c('TimelineConstants').SECTION_REGISTERED,ea));}function ca(event){var na=c('Parent').byTag(event.getTarget(),'a'),oa=na&&c('DataStore').get(na,'key');if(oa){c('TimelineController').stickyHeaderNavWasClicked(oa);c('TimelineController').navigateToSection(oa);c('ProfileTimelineUILogger').logStickyHeaderScrubberClick(oa);event.prevent();}}function da(na){if(r===na&&p[na]&&!j.custom_subsection_menu){ia(na);}else fa();c('TimelineController').adjustStickyHeaderWidth();}function ea(na,oa){var pa=oa.section,qa=pa.getParentKey();if(!qa)return;var ra=ha(qa),sa=c('TimelineController').getCurrentScrubber(),ta=pa.getScrubberKey(),ua=sa?sa.getLabelForSubnav(qa,ta):ua=ga(ta);if(ua){p[qa]=true;ja(ra,{key:ta,label:ua});da(qa);}}function fa(){if(k)k.hideItem(n);}function ga(na){var oa=na.split('_');return c('DateStrings').getMonthName(parseInt(oa.pop(),10));}function ha(na){var oa=o[na];if(!oa){oa=o[na]=n.cloneNode(true);var pa=c('DOM').scry(oa,'li.activityLog a')[0];if(pa)pa.href=new (c('URI'))(pa.href).addQueryData({key:na});z.addSubscriptions(c('Event').listen(oa,'click',ca));}return oa;}function ia(na){var oa=ha(na);c('DOM').insertAfter(n,oa);c('CSS').hide(n);for(var pa in o){var qa=o[pa];c('CSS').conditionShow(qa,qa===oa);}if(k)k.showItem(n);}function ja(na,oa){var pa=c('DOM').create('a',{href:'#',rel:'ignore',className:'itemAnchor',tabIndex:0},c('DOM').create('span',{className:'itemLabel fsm'},oa.label));pa.setAttribute('data-key',oa.key);pa.setAttribute('aria-checked',false);var qa=c('DOM').create('li',{className:'uiMenuItem uiMenuItemRadio uiSelectorOption'},pa);qa.setAttribute('data-label',oa.label);var ra=c('DOM').find(na,'ul.uiMenuInner'),sa=c('DOM').create('option',{value:oa.key},oa.label),ta=c('DOM').find(na,'select');if(oa.key==='recent'){c('DOM').prependContent(ra,qa);c('DOM').insertAfter(ta.options[0],sa);}else{c('DOM').appendContent(ra,qa);c('DOM').appendContent(ta,sa);}}function ka(na,oa){var pa=c('DOM').scry(na,'li.uiMenuItem');if(!pa)return;for(var qa=0;qa<pa.length;qa++){var ra=pa[qa];if(c('CSS').hasClass(ra,oa)||ra.firstChild.getAttribute('data-key')==oa){c('DOM').remove(ra);break;}}var sa=c('DOM').find(na,'select'),ta=c('DOM').scry(sa,'option');for(qa=0;qa<ta.length;qa++)if(ta[qa].value===oa){c('DOM').remove(ta[qa]);return;}}function la(event){var na=c('Parent').byClass(event.target,'itemAnchor');if(na){var oa=c('DataStore').get(na,'tab-key');if(oa)c('ProfileTimelineUILogger').logStickyHeaderNavItemClick(oa);}}var ma={init:function(na,oa){if(h)return;h=true;i=na;j=oa||{};l=c('DOM').find(i,'div.pageMenu');m=c('DOM').find(i,'div.sectionMenu');n=c('DOM').find(i,'div.subsectionMenu');s=c('DOM').find(l,'li.uiMenuSeparator');k=c('ButtonGroup').getInstance(l);z=new (c('SubscriptionsHandler'))();o={};p={};q={};ma.adjustMenuHeights();ba();c('TimelineController').register(c('TimelineComponentKeys').STICKY_HEADER_NAV,ma);y.forEach(function(pa){pa();});z.addSubscriptions(c('Event').listen(l,'click',la));},reset:function(){h=false;j={};v=[];t={};u={};w=false;x=[];i=null;l=null;m=null;n=null;s=null;o={};p={};q={};z.release();},addTimePeriod:function(na){var oa=c('TimelineController').getCurrentScrubber();if(!oa)return;var pa=oa.getLabelForNav(na);if(!pa)return;ja(m,{key:na,label:pa});var qa=c('DOM').find(m,'ul.uiMenuInner');if(na==='recent'||qa.children.length<2)c('SelectorDeprecated').setSelected(m,na,true);},updateSection:function(na,oa){if(oa){var pa=ha(na);c('SelectorDeprecated').setSelected(pa,oa);}else q[na]=true;r=na;c('SelectorDeprecated').setSelected(m,na,true);da(na);},adjustMenuHeights:function(){var na='';c('queryThenMutateDOM')(function(){if(!c('UITinyViewportAction').isTiny()){na=c('Vector').getViewportDimensions().y-c('Vector').getElementDimensions(c('BlueBar').getBar()).y-aa;na+='px';}},function(){[l,m].map(function(oa){if(oa)c('Style').set(c('DOM').find(oa,'ul.uiMenuInner'),'maxHeight',na);});});},initPageMenu:function(na,oa){if(!h){y.push(ma.initPageMenu.bind(null,na,oa));return;}function pa(qa,ra){qa.forEach(function(sa){var ta=u[sa]=c('DOM').create('li');c('CSS').hide(ta);ra?c('DOM').insertBefore(s,ta):c('DOM').appendContent(c('DOM').find(l,'ul.uiMenuInner'),ta);});}pa(na,true);pa(oa,false);t.info=c('DOM').scry(l,'li')[0];v=oa;w=true;if(x.length)x.forEach(function(qa){ma.registerPageMenuItem(qa.key,qa.item);});},registerPageMenuItem:function(na,oa){if(!w){x.push({key:na,item:oa});return;}if(u[na]){c('DOM').replace(u[na],oa);t[na]=oa;delete u[na];if(v.indexOf(na)>=0)c('CSS').show(s);}},removeTimePeriod:function(na){ka(m,na);},hideSectionMenu:function(){if(h)c('CSS').hide(m);}};f.exports=ma;},null);
__d('ButtonGroupMonitor',['ContextualDialog','ContextualLayer','CSS','Layer','Parent','SelectorDeprecated','DataStore'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=c('Parent').byClass(i,'bg_stat_elem')||c('Parent').byClass(i,'uiButtonGroup');if(!k&&j)k=c('DataStore').get(j,'toggleElement',null);if(k){j&&c('DataStore').set(j,'toggleElement',k);c('CSS').toggleClass(k,'uiButtonGroupActive');}}c('Layer').subscribe(['hide','show'],function(i,j){if(j instanceof c('ContextualLayer')||j instanceof c('ContextualDialog'))h(j.getCausalElement(),j);});c('SelectorDeprecated').subscribe(['close','open'],function(i,j){h(j.selector);});},null);