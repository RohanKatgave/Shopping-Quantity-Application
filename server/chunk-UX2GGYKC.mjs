import './polyfills.server.mjs';
import{$ as ge,Ba as Me,Ga as Ae,I as N,Ia as Ee,Ja as G,K as m,Ka as v,La as J,M as y,Oa as Fe,P as O,Pa as we,Q as g,Qa as Ie,R as _,U as fe,Ua as Se,V as pe,W as me,X as Q,Z as C,_ as z,aa as d,ba as l,ca as Z,e as ue,ea as P,fa as V,h as ce,ia as X,ja as k,ka as _e,la as o,m as de,ma as a,na as ve,oa as ye,pa as f,qa as Y,r as he,ra as Ce,sa as c,ta as D,ua as K,va as Ve,wa as De,xa as be,ya as T}from"./chunk-A5XICQE4.mjs";import{a as u,b as h}from"./chunk-5XUXGTUW.mjs";var Re=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(l(Z),l(z))}}static{this.\u0275dir=_({type:i})}}return i})(),je=(()=>{class i extends Re{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Q(i)))(r||i)}})()}static{this.\u0275dir=_({type:i,features:[V]})}}return i})(),re=new y("");var Ke={provide:re,useExisting:N(()=>L),multi:!0};function Je(){let i=J()?J().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var et=new y(""),L=(()=>{class i extends Re{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Je())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(l(Z),l(z),l(et,8))}}static{this.\u0275dir=_({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&f("input",function(p){return r._handleInput(p.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(p){return r._compositionEnd(p.target.value)})},features:[T([Ke]),V]})}}return i})();var tt=new y(""),it=new y("");function Be(i){return i!=null}function Ue(i){return Me(i)?ce(i):i}function He(i){let e={};return i.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function Le(i,e){return e.map(t=>t(i))}function nt(i){return!i.validate}function $e(i){return i.map(e=>nt(e)?e:t=>e.validate(t))}function rt(i){if(!i)return null;let e=i.filter(Be);return e.length==0?null:function(t){return He(Le(t,e))}}function We(i){return i!=null?rt($e(i)):null}function st(i){if(!i)return null;let e=i.filter(Be);return e.length==0?null:function(t){let n=Le(t,e).map(Ue);return he(n).pipe(de(He))}}function qe(i){return i!=null?st($e(i)):null}function xe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ot(i){return i._rawValidators}function at(i){return i._rawAsyncValidators}function ee(i){return i?Array.isArray(i)?i:[i]:[]}function j(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ne(i,e){let t=ee(e);return ee(i).forEach(r=>{j(t,r)||t.push(r)}),t}function Oe(i,e){return ee(e).filter(t=>!j(i,t))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=We(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},te=class extends B{get formDirective(){return null}get path(){return null}},x=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ie=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},lt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Jt=h(u({},lt),{"[class.ng-submitted]":"isSubmitted"}),Qe=(()=>{class i extends ie{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(l(x,2))}}static{this.\u0275dir=_({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&_e("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[V]})}}return i})();var F="VALID",R="INVALID",b="PENDING",w="DISABLED",A=class{},U=class extends A{constructor(e,t){super(),this.value=e,this.source=t}},I=class extends A{constructor(e,t){super(),this.pristine=e,this.source=t}},S=class extends A{constructor(e,t){super(),this.touched=e,this.source=t}},M=class extends A{constructor(e,t){super(),this.status=e,this.source=t}};function ut(i){return($(i)?i.validators:i)||null}function ct(i){return Array.isArray(i)?We(i):i||null}function dt(i,e){return($(e)?e.asyncValidators:i)||null}function ht(i){return Array.isArray(i)?qe(i):i||null}function $(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var ne=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=G(()=>this.statusReactive()),this.statusReactive=P(void 0),this._pristine=G(()=>this.pristineReactive()),this.pristineReactive=P(!0),this._touched=G(()=>this.touchedReactive()),this.touchedReactive=P(!1),this._events=new ue,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return v(this.statusReactive)}set status(e){v(()=>this.statusReactive.set(e))}get valid(){return this.status===F}get invalid(){return this.status===R}get pending(){return this.status==b}get disabled(){return this.status===w}get enabled(){return this.status!==w}get pristine(){return v(this.pristineReactive)}set pristine(e){v(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return v(this.touchedReactive)}set touched(e){v(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ne(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Oe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(h(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new S(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new S(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(h(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAsPending(e={}){this.status=b;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new M(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(h(u({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable(h(u({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,n)),this._events.next(new M(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(n=>{n.enable(h(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===b)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,t)),this._events.next(new M(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(h(u({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Ue(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new M(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(R)?R:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new S(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){$(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ht(this._rawAsyncValidators)}};var ze=new y("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function ft(i,e){return[...e.path,i]}function pt(i,e,t=se){gt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),_t(i,e),yt(i,e),vt(i,e),mt(i,e)}function Pe(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function mt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function gt(i,e){let t=ot(i);e.validator!==null?i.setValidators(xe(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=at(i);e.asyncValidator!==null?i.setAsyncValidators(xe(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Pe(e._rawValidators,r),Pe(e._rawAsyncValidators,r)}function _t(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ze(i,e)})}function vt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ze(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ze(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function yt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Ct(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Vt(i){return Object.getPrototypeOf(i.constructor)===je}function Dt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===L?t=s:Vt(s)?n=s:r=s}),r||n||t||null}function ke(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Te(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var bt=class extends ne{constructor(e=null,t,n){super(ut(t),dt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Te(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ke(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ke(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Te(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Mt={provide:x,useExisting:N(()=>oe)},Ge=Promise.resolve(),oe=(()=>{class i extends x{constructor(t,n,r,s,p,Ye){super(),this._changeDetectorRef=p,this.callSetDisabledState=Ye,this.control=new bt,this._registered=!1,this.name="",this.update=new C,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Dt(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ct(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){pt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ge.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Ee(n);Ge.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ft(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(l(te,9),l(tt,10),l(it,10),l(re,10),l(Ae,8),l(ze,8))}}static{this.\u0275dir=_({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[T([Mt]),V,fe]})}}return i})();var At={provide:re,useExisting:N(()=>ae),multi:!0},ae=(()=>{class i extends je{writeValue(t){let n=t??"";this.setProperty("value",n)}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Q(i)))(r||i)}})()}static{this.\u0275dir=_({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,r){n&1&&f("input",function(p){return r.onChange(p.target.value)})("blur",function(){return r.onTouched()})},features:[T([At]),V]})}}return i})();var Et=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=g({type:i})}static{this.\u0275inj=m({})}}return i})();var Xe=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ze,useValue:t.callSetDisabledState??se}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=g({type:i})}static{this.\u0275inj=m({imports:[Et]})}}return i})();function It(i,e){if(i&1){let t=ye();o(0,"div",3),f("click",function(){let r=pe(t).$implicit,s=Y();return me(s.selectProduct(r))}),o(1,"h2"),c(2),a(),ve(3,"img",5),o(4,"p"),c(5),a(),o(6,"p"),c(7),a(),o(8,"p"),c(9),a()()}if(i&2){let t=e.$implicit;d(2),D(t.name),d(),Ce("alt",t.name),k("src",t.image,ge),d(2),D(t.description),d(2),K("Price: $",t.price,""),d(2),K("Available Quantity: ",t.availableQuantity,"")}}function St(i,e){if(i&1&&(o(0,"p",6),c(1),a()),i&2){let t=Y();d(),D(t.errorMessage)}}var W=class i{productAdded=new C;products=[{name:"Trimmer",image:"assets/",description:"High-quality product suitable for various needs.",price:100,availableQuantity:20}];selectedProduct=this.products[0];userQuantity=1;errorMessage="";totalPrice=0;addToCart(){this.userQuantity<=0||this.userQuantity>this.selectedProduct.availableQuantity?this.errorMessage="The requested quantity is not available.":(this.selectedProduct.availableQuantity-=this.userQuantity,this.totalPrice=this.userQuantity*this.selectedProduct.price,this.errorMessage="",alert(`Added ${this.userQuantity} ${this.selectedProduct.name}(s) to cart. Total price: $${this.totalPrice}`),this.productAdded.emit(this.userQuantity))}selectProduct(e){this.selectedProduct=e,this.userQuantity=1,this.errorMessage="",this.totalPrice=0}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["app-product-quantity"]],outputs:{productAdded:"productAdded"},decls:7,vars:3,consts:[[3,"click",4,"ngFor","ngForOf"],["for","quantity"],["type","number","id","quantity",3,"ngModelChange","ngModel"],[3,"click"],["style","color: red;",4,"ngIf"],[3,"src","alt"],[2,"color","red"]],template:function(t,n){t&1&&(X(0,It,10,6,"div",0),o(1,"label",1),c(2,"Quantity:"),a(),o(3,"input",2),be("ngModelChange",function(s){return De(n.userQuantity,s)||(n.userQuantity=s),s}),a(),o(4,"button",3),f("click",function(){return n.addToCart()}),c(5,"Add to Cart"),a(),X(6,St,2,1,"p",4)),t&2&&(k("ngForOf",n.products),d(3),Ve("ngModel",n.userQuantity),d(3),k("ngIf",n.errorMessage))},dependencies:[Fe,we,L,ae,Qe,oe],styles:[".quantity-manager[_ngcontent-%COMP%]{margin:20px;padding:20px;border:1px solid #ccc;width:300px;font-family:Arial,sans-serif}h2[_ngcontent-%COMP%]{color:#333}button[_ngcontent-%COMP%]{margin-top:10px;padding:5px 10px;background-color:#007bff;color:#fff;border:none;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}input[_ngcontent-%COMP%]{margin-top:10px;width:100%;padding:5px;border:1px solid #ccc;border-radius:4px}"]})};var E=class i{cartItemCount=0;updateCart(e){this.cartItemCount+=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["app-root"]],decls:10,vars:1,consts:[[1,"header"],[1,"app-title"],[1,"cart"],[1,"cart-icon"],[1,"cart-count"],[1,"product-container"],[3,"productAdded"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"h1",1),c(2,"Shopping Quantity Application"),a(),o(3,"div",2)(4,"span",3),c(5,"\u{1F6D2}"),a(),o(6,"span",4),c(7),a()()(),o(8,"div",5)(9,"app-product-quantity",6),f("productAdded",function(s){return n.updateCart(s)}),a()()),t&2&&(d(7),D(n.cartItemCount))},dependencies:[W],styles:[".header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background-color:#f8f9fa;border-bottom:1px solid #ddd}.app-title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#333;margin:0}.cart[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:18px;cursor:pointer}.cart-icon[_ngcontent-%COMP%]{margin-right:5px}.cart-count[_ngcontent-%COMP%]{font-size:16px;background-color:red;color:#fff;border-radius:50%;padding:2px 8px}.product-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;padding:20px}"]})};var q=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=g({type:i,bootstrap:[E]});static \u0275inj=m({imports:[Ie,Xe]})};var le=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=g({type:i,bootstrap:[E]});static \u0275inj=m({imports:[q,Se]})};export{le as a};
