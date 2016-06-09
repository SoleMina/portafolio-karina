if (self.CavalryLogger) { CavalryLogger.start_js(["KQdP9"]); }

__d("XComposerActorChangeController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/composer\/actor\/change\/",{composer_id:{type:"String",required:true},entry_point:{type:"Enum",required:true,enumType:1},from_actor_id:{type:"Int",required:true},target_id:{type:"Int",required:true}});},null);
__d('ComposerXActorSelector.react',['fbt','ActorSelector.react','ActorSelectorNuxTypes','ActorURI','Arbiter','AsyncRequest','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerStore','React','emptyFunction','XActorSelectorNuxSeenWriteController','XComposerActorChangeController'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'ComposerXActorSelector',mixins:[c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerStore'))],propTypes:{actorIDs:i.array.isRequired,composerID:i.string.isRequired,entryPoint:i.string.isRequired,loading:i.bool,nuxEnabled:i.bool,nuxHoverContext:i.object,nuxShowWithoutHover:i.bool,onChange:i.func,selectedActorID:i.string.isRequired,settingsURI:i.string,targetID:i.string.isRequired},statics:{calculateState:function(k){return {disabled:c('ReactComposerStore').isPosting(k)};}},getInitialState:function(){return {loading:false};},componentWillMount:function(){this._arbiterToken=c('Arbiter').subscribe('ComposerXPages/composePostWithActor',function(k,l){if(l.actorID){if(this.props.onChange){this.props.onChange(l.actorID);return;}this._updateCurrentActor(l.actorID,function(){if(l.callback)l.callback();});}}.bind(this));},componentWillUnmount:function(){c('Arbiter').unsubscribe(this._arbiterToken);},render:function(){return (c('React').createElement(c('ActorSelector.react'),{actorIDs:this.props.actorIDs,className:this.props.className,loading:this.props.loading||this.state.loading,nuxBody:this._getNUXBody(),nuxEnabled:this.props.nuxEnabled,nuxHoverContext:this.props.nuxHoverContext,nuxShowWithoutHover:this.props.nuxShowWithoutHover,onChange:this._onChange,onCompleteNux:this._onCompleteNux,disabled:this.state.disabled,ref:'selector',selectedActorID:this.props.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this._getTooltipForActorName}));},_getNUXBody:function(){return h._("Publica en tu nombre o como una de las p\u00e1ginas que administras.");},_getTooltipForActorName:function(k){return h._("Publicas como {actorName}",[h.param('actorName',k)]);},_onChange:function(k){if(this.props.onChange){this.props.onChange(k.value);}else this._updateCurrentActor(k.value);},_updateCurrentActor:function(k,l){l=l||c('emptyFunction');if(this.props.selectedActorID===k){l();return;}this.setState({loading:true});var m=c('ActorURI').create(c('XComposerActorChangeController').getURIBuilder().setString('composer_id',this.props.composerID).setEnum('entry_point',this.props.entryPoint).setInt('from_actor_id',this.props.selectedActorID).setInt('target_id',this.props.targetID).getURI(),k),n=function(){this.setState({loading:false});}.bind(this);new (c('AsyncRequest'))().setURI(m).setErrorHandler(n).setServerDialogCancelHandler(n).setFinallyHandler(l).send();},_onCompleteNux:function(){var k=c('XActorSelectorNuxSeenWriteController').getURIBuilder().setEnum('nux_type',c('ActorSelectorNuxTypes').COMPOSER).getURI();new (c('AsyncRequest'))().setURI(k).send();}});f.exports=j;},null);
__d("XReactComposerActorChangeController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/actor\/change\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true},group_sell_composer_sell_availability:{type:"Enum",enumType:1}});},null);
__d('ReactComposerActorSelectorContainer.react',['cx','ReactComposerContextMixin','ComposerXActorSelector.react','ActorURI','AsyncRequest','React','XReactComposerActorChangeController'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'ReactComposerActorSelectorContainer',mixins:[c('ReactComposerContextMixin')],getInitialState:function(){return {showSpinner:false};},render:function(){var j=babelHelpers['extends']({},this.props,{composerID:this.context.composerID});return (c('React').createElement(c('ComposerXActorSelector.react'),babelHelpers['extends']({},j,{className:"_4w4v",loading:this.state.showSpinner,onChange:this._onActorChange})));},_onActorChange:function(j){this.setState({showSpinner:true});var k=c('ActorURI').create(c('XReactComposerActorChangeController').getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setString('target_id',this.context.targetID).getURI(),j);new (c('AsyncRequest'))().setURI(k).send();}});f.exports=i;},null);