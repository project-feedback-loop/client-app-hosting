"use strict";(self.webpackChunkfeedback_loop_client=self.webpackChunkfeedback_loop_client||[]).push([[592],{53:(w,g,s)=>{s.d(g,{W:()=>x});var e=s(5e3),_=s(2626),h=s(6832),n=s(4419),f=s(3455),v=s(6335),y=s(6101),d=s(9033),u=s(9352),a=s(9808),p=s(5405),m=s(6762),O=s(5499);function E(o,r){if(1&o&&e._UZ(0,"app-req-list-item",18),2&o){const t=e.oxw().$implicit,i=e.oxw();e.Q6J("req",i.getRequestList(t))}}function M(o,r){if(1&o&&e._UZ(0,"app-task-list-item",19),2&o){const t=e.oxw().$implicit,i=e.oxw();e.Q6J("flTask",i.getTaskList(t))}}function A(o,r){if(1&o&&e._UZ(0,"app-milestone-card",20),2&o){const t=e.oxw().$implicit,i=e.oxw();e.Q6J("flMilestone",i.getMilestoneList(t))}}function T(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"div",11)(2,"div",12)(3,"input",13),e.NdJ("click",function(l){const C=e.CHM(t).$implicit;return e.oxw().selecting(C.id,l)}),e.qZA()(),e.TgZ(4,"div",14),e.YNc(5,E,1,1,"app-req-list-item",15),e.YNc(6,M,1,1,"app-task-list-item",16),e.YNc(7,A,1,1,"app-milestone-card",17),e.qZA()()()}if(2&o){const t=r.$implicit,i=e.oxw();e.xp6(3),e.Q6J("checked",i.selected.includes(t.id?t.id:-1)),e.xp6(2),e.Q6J("ngIf","request"==i.type),e.xp6(1),e.Q6J("ngIf","task"==i.type),e.xp6(1),e.Q6J("ngIf","milestone"==i.type)}}let x=(()=>{class o{constructor(t,i,l,c,C,P,S){this.route=t,this.requestQuery=i,this.taskQuery=l,this.milestoneQuery=c,this.requestService=C,this.taskService=P,this.milestoneService=S,this.selected=[],this.closed=new e.vpe,this.selectedList=new e.vpe}ngOnInit(){}ngAfterContentInit(){"request"===this.type?(this.requestService.getall(),this.list=this.requestQuery.$requests):"task"===this.type?(this.taskService.getall(),this.list=this.taskQuery.$tasks):"milestone"===this.type&&(this.milestoneService.getall(),this.list=this.milestoneQuery.$milestones),this.preSelected&&(this.selected=this.preSelected)}selecting(t,i){if(t)if(i.target.checked)this.multiSelect?this.selected.push(t):this.selected=[t];else{let l=this.selected.indexOf(t);this.selected.splice(l,1)}}pickSelectedRequest(){if(this.selected.length>0)this.selectedList.emit(this.multiSelect?this.selected:this.selected[0]);else{let t;this.multiSelect&&(t=this.selected),this.selectedList.emit(t)}this.close()}close(){this.closed.emit(!1)}getRequestList(t){return t}getTaskList(t){return t}getMilestoneList(t){return t}creatingNew(){this.sourceId&&this.route.navigate([`/${this.type}/new`],{queryParams:{id:this.sourceId}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.F0),e.Y36(h.Z),e.Y36(n.R),e.Y36(f.l),e.Y36(v.P),e.Y36(y.Y),e.Y36(d.l))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-associate"]],inputs:{preSelected:["preselect","preSelected"],multiSelect:"multiSelect",sourceId:"sourceId",type:"type"},outputs:{closed:"closed",selectedList:"selectedList"},decls:18,vars:9,consts:[[1,"body"],[1,"header"],[1,"search-container"],[1,"icon-div",3,"click"],[1,"material-symbols-rounded"],[1,"am-demo-bd"],[2,"border-bottom","1px solid #ddd"],[3,"placeholder","maxLength"],["Button","",1,"button",3,"type","size","inline","click"],[1,"main"],[4,"ngFor","ngForOf"],[1,"option-card"],[1,"checkbox-container"],["type","checkbox",3,"checked","click"],[1,"element-container"],[3,"req",4,"ngIf"],[3,"flTask",4,"ngIf"],[3,"flMilestone",4,"ngIf"],[3,"req"],[3,"flTask"],[3,"flMilestone"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.NdJ("click",function(){return i.close()}),e.TgZ(4,"span",4),e._uU(5," close "),e.qZA()(),e.TgZ(6,"div",5)(7,"div",6),e._UZ(8,"SearchBar",7),e.qZA()(),e.TgZ(9,"div",3),e.NdJ("click",function(){return i.pickSelectedRequest()}),e.TgZ(10,"span",4),e._uU(11," done "),e.qZA()()(),e.TgZ(12,"div",8),e.NdJ("click",function(){return i.creatingNew()}),e._uU(13),e.qZA()(),e.TgZ(14,"div",9)(15,"List"),e.YNc(16,T,8,4,"div",10),e.ALo(17,"async"),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("placeholder","Search")("maxLength",20),e.xp6(4),e.Q6J("type","primary")("size","small")("inline",!0),e.xp6(1),e.hij("new ",i.type,""),e.xp6(3),e.Q6J("ngForOf",e.lcZ(17,7,i.list)))},directives:[u.NB,u.r0,u.ns,a.sg,a.O5,p.U,m.T,O.T],pipes:[a.Ov],styles:[".body[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr;grid-template-columns:1fr;height:100%;position:relative}.search-container[_ngcontent-%COMP%]{height:50px;width:100%;display:grid;grid-template-columns:50px auto 50px;align-items:center;background-color:#fff}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.main[_ngcontent-%COMP%]{overflow-y:auto;height:100%}.icon-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.option-card[_ngcontent-%COMP%]{display:flex;text-align:start;padding:0 10px}.checkbox-container[_ngcontent-%COMP%]{padding:13px 12px 0 5px}.checkbox-container[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:20px;height:20px}.element-container[_ngcontent-%COMP%]{flex:1}.button[_ngcontent-%COMP%]{margin-left:17px;cursor:pointer}"]}),o})()},622:(w,g,s)=>{s.d(g,{e:()=>y});var e=s(8505),_=s(2340),h=s(8025),n=s(5e3),f=s(4277),v=s(520);let y=(()=>{class d{constructor(a,p){this.authStore=a,this.http=p;let m=window.sessionStorage.getItem("AkitaStores");m&&JSON.parse(m).auth&&this.get(JSON.parse(m).auth).subscribe()}get(a){return this.http.get(`${_.N.strapi_server}/api/auth/${_.N.strapi_auth_provider}/callback`,{params:{access_token:a}}).pipe((0,e.b)(p=>{p.accessToken=a,this.authStore.update(p)}))}add(a){this.authStore.add(a)}update(a,p){this.authStore.update(a,p)}remove(a){this.authStore.remove(a)}reset(){this.authStore.update((0,h.l)({})),window.sessionStorage.clear()}}return d.\u0275fac=function(a){return new(a||d)(n.LFG(f.C),n.LFG(v.eN))},d.\u0275prov=n.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},4465:(w,g,s)=>{s.d(g,{e:()=>x});var e=s(9808),_=s(914),h=s(9646),n=s(5e3),f=s(7465),v=s(2626);let y=(()=>{class o{constructor(){this.entities=["Request","Task","Milestone"],this.categories=["Issue","Feature","Feedback"],this.severities=["ShowStopper","Critical","Major","Minor"],this.modules=["Grid","Canvas","Explorer","Data Panel","IDE Client","IDE Server","Style Panel","Route","Offline"],this.taskPriorites=["Urgent","High","Medium","Low"],this.taskStatus=["Yet To Start","In Discussion","In Progress","Completed","Testing","Released"],this.milestoneStatus=["Yet To Start","In Discussion","In Progress","Completed","Testing","Released"]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var d=s(6335),u=s(9565),a=s(3616),p=s(9352),m=s(4817),O=s(7797),E=s(6718),M=s(2382);let A=(()=>{class o{constructor(){this.name="",this.options=[],this.defaultValue="",this.size="small"}ngOnInit(){this.selectOptions=this.options.map(t=>({label:t,value:t}))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-field-select"]],inputs:{name:"name",options:"options",defaultValue:"defaultValue",size:"size"},decls:1,vars:5,consts:[["nzAllowClear","",3,"nzSize","nzOptions","ngModel","nzPlaceHolder","nzShowArrow"]],template:function(t,i){1&t&&n._UZ(0,"nz-select",0),2&t&&n.Q6J("nzSize",i.size)("nzOptions",i.selectOptions)("ngModel",i.defaultValue)("nzPlaceHolder","No "+i.name)("nzShowArrow",!1)},directives:[E.Vq,M.JJ,M.On],styles:["nz-select[_ngcontent-%COMP%]{min-width:80px}nz-option-item[_ngcontent-%COMP%]{width:-moz-fit-content!important;width:fit-content!important}"]}),o})();const T=function(o){return{opacity:o}};let x=(()=>{class o{constructor(t,i,l,c,C,P,S,k){this.global=t,this.activatedRoute=i,this.fields=l,this.requestService=c,this.navigationService=C,this.notifier=P,this.authQuery=S,this.toast=k,this.entity="",this.entityPlaceholder="Title",this.showModel=!1,this.postResponseReceived=!1,this.request={}}ngOnInit(){this.activatedRoute.params.subscribe(t=>{t.entity&&(this.entity=(new e.rS).transform(t.entity)),this.entityPlaceholder=this.entity+" title"}),this.entityPlaceholder=this.entity+" title"}ngAfterViewInit(){}postEntity(){this.canPostEntity()&&(this.request.createdByUser=this.authQuery.user.id,this.requestService.addRequest(this.request),this.notifierSubscription=this.notifier.action$.pipe((0,_.vE)(`${this.entity.toLocaleLowerCase()}s`),(0,_.IY)("POST")).subscribe(t=>{this.postResponseReceived=!0,this.navigationService.back()}))}canPostEntity(){return!!this.request.rawContent}getEntityList(){let t=[];return this.fields.entities.forEach(i=>t.push({label:i,value:i})),t}getTag(t){"Category"==t.type?this.request.category=t.tag:"Severity"==t.type?this.request.severity=t.tag:"Module"==t.type?this.request.module=t.tag:console.log("Unknown tag type: ",t.type)}getMention(t){console.log(t)}canDeactivate(){if(this.canPostEntity()&&!this.postResponseReceived){const t=window.confirm("There are unsaved changes! Are you sure?");return(0,h.of)(t)}return(0,h.of)(!0)}ngOnDestroy(){this.notifierSubscription&&this.notifierSubscription.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(f.U),n.Y36(v.gz),n.Y36(y),n.Y36(d.P),n.Y36(u.f),n.Y36(_.kt),n.Y36(a.i),n.Y36(p.kl))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-create-new-entity"]],inputs:{entity:"entity"},decls:27,vars:15,consts:[[1,"new-entity-container"],[1,"nec-modal"],["model",""],[1,"nec-modal-header"],[1,"nec-modal-header-left","nec-modal-div"],[1,"button-feel","button-feel-accent","soft-span-text"],[1,"arrow-span"],[1,"soft-span-text"],[1,"nec-modal-header-right","nec-modal-div"],["appBackButton","",1,"material-symbols-rounded","button-icon","nec-close-btn"],[1,"nec-modal-body"],[1,"nec-editor"],["placeholder","Say Something",1,"nec-markdown-editor",3,"tagArray","mentionArray","enableMenu","jsonContent","selectedMention","jsonContentChange","content","selectedTag"],[1,"nec-modal-footer"],[1,"first-element"],["name","Category",3,"options","defaultValue"],["name","Severity",3,"options","defaultValue"],["name","Module",3,"options","defaultValue"],[1,"second-element"],[1,"nec-modal-footer-left","nec-modal-div"],[1,"nec-modal-footer-right","nec-modal-div"],[1,"button-feel","button-feel-accent","button-icon","nec-post-btn",3,"ngStyle","click"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3)(4,"div",4)(5,"div",5),n._uU(6," New "),n.qZA(),n.TgZ(7,"span",6),n._uU(8,"\u203a"),n.qZA(),n.TgZ(9,"span",7),n._uU(10),n.qZA()(),n.TgZ(11,"div",8)(12,"span",9),n._uU(13," close "),n.qZA()()(),n.TgZ(14,"div",10)(15,"div",11)(16,"markdown-editor",12),n.NdJ("selectedMention",function(c){return i.getMention(c)})("jsonContentChange",function(c){return i.request.content=c})("content",function(c){return i.request.rawContent=c.raw})("selectedTag",function(c){return i.getTag(c)}),n.qZA()()(),n.TgZ(17,"div",13)(18,"div",14),n._UZ(19,"app-field-select",15)(20,"app-field-select",16)(21,"app-field-select",17),n.qZA(),n.TgZ(22,"div",18),n._UZ(23,"div",19),n.TgZ(24,"div",20)(25,"div",21),n.NdJ("click",function(){return i.postEntity()}),n._uU(26),n.qZA()()()()()()),2&t&&(n.xp6(10),n.Oqu(i.entity),n.xp6(6),n.Q6J("tagArray",i.global.tagArray)("mentionArray",i.global.mentionArray)("enableMenu",!1)("jsonContent",i.request.content),n.xp6(3),n.Q6J("options",i.fields.categories)("defaultValue",i.request.category),n.xp6(1),n.Q6J("options",i.fields.severities)("defaultValue",i.request.severity),n.xp6(1),n.Q6J("options",i.fields.modules)("defaultValue",i.request.module),n.xp6(4),n.Q6J("ngStyle",n.VKq(13,T,i.canPostEntity()?1:.5)),n.xp6(1),n.hij("Post ",i.entity,""))},directives:[m.z,O.k1,A,e.PC],styles:[".new-entity-container[_ngcontent-%COMP%]{width:100%;height:100%;padding:36px 0 12px;background-color:transparent}.nec-loader[_ngcontent-%COMP%]{height:30%}.nec-modal[_ngcontent-%COMP%]{width:94vw;overflow:scroll;margin:auto;display:grid;grid-template-rows:45px 1fr auto;grid-template-columns:1fr;max-height:100%;border-radius:16px;background-color:#fff;box-shadow:#0000001f 0 1px 3px,#0000003d 0 1px 2px}.nec-modal-header[_ngcontent-%COMP%], .second-element[_ngcontent-%COMP%]{padding:12px;display:flex;min-height:45px;max-height:50px;justify-content:space-between}.nec-modal-body[_ngcontent-%COMP%]{overflow-y:auto}.nec-modal-footer[_ngcontent-%COMP%] > .second-element[_ngcontent-%COMP%]{border-top:1px solid var(--border-bottom)}.nec-modal-div[_ngcontent-%COMP%]{display:flex;align-items:center}.arrow-span[_ngcontent-%COMP%]{margin:0 12px;color:gray}.nec-close-btn[_ngcontent-%COMP%]{color:gray}.nec-post-btn[_ngcontent-%COMP%]{font-size:1rem;padding:8px 12px;border-radius:16px}.first-element[_ngcontent-%COMP%]{display:flex;padding:12px;column-gap:10px}.nec-entity-fields[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin-right:12px}"]}),o})()}}]);