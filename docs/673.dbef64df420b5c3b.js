"use strict";(self.webpackChunkfeedback_loop_client=self.webpackChunkfeedback_loop_client||[]).push([[673],{53:(E,y,s)=>{s.d(y,{W:()=>Q});var i=s(5e3),g=s(2626),f=s(6832),e=s(4419),A=s(3455),N=s(6335),k=s(6101),_=s(9033),v=s(9352),x=s(9808),h=s(5864),Z=s(7410),w=s(5499);function P(d,u){if(1&d&&i._UZ(0,"app-req-list-item",18),2&d){const o=i.oxw().$implicit,r=i.oxw();i.Q6J("req",r.getRequestList(o))}}function U(d,u){if(1&d&&i._UZ(0,"app-task-list-item",19),2&d){const o=i.oxw().$implicit,r=i.oxw();i.Q6J("flTask",r.getTaskList(o))}}function q(d,u){if(1&d&&i._UZ(0,"app-milestone-card",20),2&d){const o=i.oxw().$implicit,r=i.oxw();i.Q6J("flMilestone",r.getMilestoneList(o))}}function I(d,u){if(1&d){const o=i.EpF();i.TgZ(0,"div")(1,"div",11)(2,"div",12)(3,"input",13),i.NdJ("click",function(m){const C=i.CHM(o).$implicit;return i.oxw().selecting(C.id,m)}),i.qZA()(),i.TgZ(4,"div",14),i.YNc(5,P,1,1,"app-req-list-item",15),i.YNc(6,U,1,1,"app-task-list-item",16),i.YNc(7,q,1,1,"app-milestone-card",17),i.qZA()()()}if(2&d){const o=u.$implicit,r=i.oxw();i.xp6(3),i.Q6J("checked",r.selected.includes(o.id?o.id:-1)),i.xp6(2),i.Q6J("ngIf","request"==r.type),i.xp6(1),i.Q6J("ngIf","task"==r.type),i.xp6(1),i.Q6J("ngIf","milestone"==r.type)}}let Q=(()=>{class d{constructor(o,r,m,O,C,b,L){this.route=o,this.requestQuery=r,this.taskQuery=m,this.milestoneQuery=O,this.requestService=C,this.taskService=b,this.milestoneService=L,this.selected=[],this.closed=new i.vpe,this.selectedList=new i.vpe}ngOnInit(){}ngAfterContentInit(){"request"===this.type?(this.requestService.getall(),this.list=this.requestQuery.$requests):"task"===this.type?(this.taskService.getall(),this.list=this.taskQuery.$tasks):"milestone"===this.type&&(this.milestoneService.getall(),this.list=this.milestoneQuery.$milestones),this.preSelected&&(this.selected=this.preSelected)}selecting(o,r){if(o)if(r.target.checked)this.multiSelect?this.selected.push(o):this.selected=[o];else{let m=this.selected.indexOf(o);this.selected.splice(m,1)}}pickSelectedRequest(){if(this.selected.length>0)this.selectedList.emit(this.multiSelect?this.selected:this.selected[0]);else{let o;this.multiSelect&&(o=this.selected),this.selectedList.emit(o)}this.close()}close(){this.closed.emit(!1)}getRequestList(o){return o}getTaskList(o){return o}getMilestoneList(o){return o}creatingNew(){this.sourceId&&this.route.navigate([`/${this.type}/new`],{queryParams:{id:this.sourceId}})}}return d.\u0275fac=function(o){return new(o||d)(i.Y36(g.F0),i.Y36(f.Z),i.Y36(e.R),i.Y36(A.l),i.Y36(N.P),i.Y36(k.Y),i.Y36(_.l))},d.\u0275cmp=i.Xpm({type:d,selectors:[["app-add-associate"]],inputs:{preSelected:["preselect","preSelected"],multiSelect:"multiSelect",sourceId:"sourceId",type:"type"},outputs:{closed:"closed",selectedList:"selectedList"},decls:18,vars:9,consts:[[1,"body"],[1,"header"],[1,"search-container"],[1,"icon-div",3,"click"],[1,"material-symbols-rounded"],[1,"am-demo-bd"],[2,"border-bottom","1px solid #ddd"],[3,"placeholder","maxLength"],["Button","",1,"button",3,"type","size","inline","click"],[1,"main"],[4,"ngFor","ngForOf"],[1,"option-card"],[1,"checkbox-container"],["type","checkbox",3,"checked","click"],[1,"element-container"],[3,"req",4,"ngIf"],[3,"flTask",4,"ngIf"],[3,"flMilestone",4,"ngIf"],[3,"req"],[3,"flTask"],[3,"flMilestone"]],template:function(o,r){1&o&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),i.NdJ("click",function(){return r.close()}),i.TgZ(4,"span",4),i._uU(5," close "),i.qZA()(),i.TgZ(6,"div",5)(7,"div",6),i._UZ(8,"SearchBar",7),i.qZA()(),i.TgZ(9,"div",3),i.NdJ("click",function(){return r.pickSelectedRequest()}),i.TgZ(10,"span",4),i._uU(11," done "),i.qZA()()(),i.TgZ(12,"div",8),i.NdJ("click",function(){return r.creatingNew()}),i._uU(13),i.qZA()(),i.TgZ(14,"div",9)(15,"List"),i.YNc(16,I,8,4,"div",10),i.ALo(17,"async"),i.qZA()()()),2&o&&(i.xp6(8),i.Q6J("placeholder","Search")("maxLength",20),i.xp6(4),i.Q6J("type","primary")("size","small")("inline",!0),i.xp6(1),i.hij("new ",r.type,""),i.xp6(3),i.Q6J("ngForOf",i.lcZ(17,7,r.list)))},directives:[v.NB,v.r0,v.ns,x.sg,x.O5,h.U,Z.T,w.T],pipes:[x.Ov],styles:[".body[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr;grid-template-columns:1fr;height:100%;position:relative}.search-container[_ngcontent-%COMP%]{height:50px;width:100%;display:grid;grid-template-columns:50px auto 50px;align-items:center;background-color:#fff}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.main[_ngcontent-%COMP%]{overflow-y:auto;height:100%}.icon-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.option-card[_ngcontent-%COMP%]{display:flex;text-align:start;padding:0 10px}.checkbox-container[_ngcontent-%COMP%]{padding:13px 12px 0 5px}.checkbox-container[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:20px;height:20px}.element-container[_ngcontent-%COMP%]{flex:1}.button[_ngcontent-%COMP%]{margin-left:17px;cursor:pointer}"]}),d})()},5673:(E,y,s)=>{s.r(y),s.d(y,{MilestoneModule:()=>H});var i=s(9808),g=s(2626),f=(()=>{return(n=f||(f={})).YetToStart="Yet To Start",n.InDiscussion="In Discussion",n.InProgress="In Progress",n.Completed="Completed",n.Testing="Testing",n.Released="Released",f;var n})(),e=s(5e3),A=s(9033),N=s(3616),k=s(4419),_=s(9352),v=s(4817),x=s(2712),h=s(2382),Z=s(7410),w=s(53);function P(n,c){1&n&&(e.TgZ(0,"span",14),e._uU(1," arrow_back "),e.qZA())}function U(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",15),e.NdJ("click",function(){return e.CHM(t),e.oxw().submitMilestone()}),e._uU(1,"Submit"),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("type","primary")("disabled",!t.submitMode)("inline",!0)("size","small")}}function q(n,c){1&n&&e._UZ(0,"app-task-list-item",16),2&n&&e.Q6J("flTask",c.$implicit)}function I(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"app-add-associate",17),e.NdJ("closed",function(){return e.CHM(t),e.oxw().closeModal()})("selectedList",function(a){return e.CHM(t),e.oxw().getSelectedTasks(a)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("multiSelect",!0)("preselect",t.selectedList)}}let Q=(()=>{class n{constructor(t,l,a,p,S){this.milestoneService=t,this.route=l,this.activeRoute=a,this.authQuery=p,this.taskQuery=S,this.showModal=!1,this.milestone={},this.selectedList=[],this.submitMode=!1,this.activeRoute.queryParams.subscribe(J=>{J.id&&this.selectedList.push(J.id)})}ngOnInit(){}submitMilestone(){this.submitMode&&(this.milestone={title:this.title,status:f.YetToStart,tasks:this.selectedList.length>0?this.selectedList:null,createdByUser:this.authQuery.user.id},this.milestoneService.addMilestone(this.milestone),this.route.navigate(["/home/milestones"]))}editing(){this.submitMode=!!this.title}openModal(){this.showModal=!0}closeModal(){this.showModal=!1}getSelectedTasks(t){t&&(this.selectedList=t)}getAssociateTasks(){return null==this.milestone.tasks&&(this.milestone.tasks=[]),this.taskQuery.selectMany(this.milestone.tasks)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.l),e.Y36(g.F0),e.Y36(g.gz),e.Y36(N.i),e.Y36(k.R))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-milestone"]],decls:27,vars:16,consts:[[1,"new-req-body"],[3,"icon","mode","rightContent"],["nav_bar_arrow",""],["nav_bar_submit",""],[1,"new-req-container"],[3,"size"],[1,"timeline-options-container"],[1,"timeline-title-span"],["type","text",1,"timeline-sub-container",3,"ngModel","keyup","ngModelChange"],["Button","","size","small",1,"button-icon",2,"margin-right","4px",3,"type","inline","size","click"],[1,"timeline-sub-container"],[3,"flTask",4,"ngFor","ngForOf"],[1,"modal",3,"ngModel","transparent","maskClosable","ngModelChange","onClose"],["type","task",3,"multiSelect","preselect","closed","selectedList",4,"ngIf"],["appBackButton","",1,"material-symbols-rounded","button-icon"],["Button","",1,"button-icon",2,"margin-right","4px",3,"type","disabled","inline","size","click"],[3,"flTask"],["type","task",3,"multiSelect","preselect","closed","selectedList"]],template:function(t,l){if(1&t&&(e.TgZ(0,"div",0)(1,"Navbar",1),e._uU(2," New Milestone "),e.qZA(),e.YNc(3,P,2,0,"ng-template",null,2,e.W1O),e.YNc(5,U,2,4,"ng-template",null,3,e.W1O),e.TgZ(7,"div",4),e._UZ(8,"WhiteSpace",5),e.TgZ(9,"WingBlank",5)(10,"nz-timeline")(11,"nz-timeline-item")(12,"div",6)(13,"span",7),e._uU(14,"Title"),e.qZA()(),e.TgZ(15,"input",8),e.NdJ("keyup",function(){return l.editing()})("ngModelChange",function(p){return l.title=p}),e.qZA()(),e.TgZ(16,"nz-timeline-item")(17,"div",6)(18,"span",7),e._uU(19,"Associated Tasks"),e.qZA(),e.TgZ(20,"div",9),e.NdJ("click",function(){return l.openModal()}),e._uU(21,"Add"),e.qZA()(),e.TgZ(22,"div",10),e.YNc(23,q,1,1,"app-task-list-item",11),e.ALo(24,"async"),e.qZA()()()()(),e.TgZ(25,"Modal",12),e.NdJ("ngModelChange",function(p){return l.showModal=p})("onClose",function(){return l.closeModal()}),e.YNc(26,I,1,2,"app-add-associate",13),e.qZA()()),2&t){const a=e.MAs(4),p=e.MAs(6);e.xp6(1),e.Q6J("icon",a)("mode","light")("rightContent",p),e.xp6(7),e.Q6J("size","md"),e.xp6(1),e.Q6J("size","md"),e.xp6(6),e.Q6J("ngModel",l.title),e.xp6(5),e.Q6J("type","primary")("inline",!0)("size","small"),e.xp6(3),e.Q6J("ngForOf",e.lcZ(24,14,l.getAssociateTasks())),e.xp6(2),e.Q6J("ngModel",l.showModal)("transparent",!0)("maskClosable",!0),e.xp6(1),e.Q6J("ngIf",l.showModal)}},directives:[_.w5,v.z,_.r0,_.yG,_.gx,x.PD,x.Zv,h.Fj,h.JJ,h.On,i.sg,Z.T,_.zS,i.O5,w.W],pipes:[i.Ov],styles:[".new-req-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%;height:100%;overflow:hidden}Navbar[_ngcontent-%COMP%]{flex:1;min-height:50px;max-height:50px;z-index:10}.new-req-container[_ngcontent-%COMP%]{overflow:scroll;flex:1;width:100%;height:calc(100% - 50px)}nz-timeline[_ngcontent-%COMP%]{width:100%}input[_ngcontent-%COMP%]{outline:none;border:1px solid transparent;width:100%}"]}),n})();var d=s(5861),u=s(6101),o=s(9565),r=s(3455),m=s(4342);function O(n,c){1&n&&(e.TgZ(0,"span",10),e._uU(1," arrow_back "),e.qZA())}function C(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",13),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).toggleButtonValue()}),e._uU(1,"Edit"),e.qZA()}2&n&&e.Q6J("type","primary")("inline",!0)("size","small")}function b(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",14),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).updateMilestone()}),e._uU(1,"Submit"),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("type","primary")("disabled",t.compareChanges())("inline",!0)("size","small")}}function L(n,c){if(1&n&&(e.YNc(0,C,2,3,"div",11),e.YNc(1,b,2,4,"div",12)),2&n){const t=e.oxw();e.Q6J("ngIf",!t.editMode),e.xp6(1),e.Q6J("ngIf",t.editMode)}}function z(n,c){if(1&n&&(e.TgZ(0,"span",28)(1,"span"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.Oqu(null==t.milestone?null:t.milestone.title)}}function Y(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",29)(1,"input",30),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw(2).milestone.title=a}),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.milestone.title)}}function B(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",13),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).openModal()}),e._uU(1,"Add"),e.qZA()}2&n&&e.Q6J("type","primary")("inline",!0)("size","small")}function D(n,c){if(1&n&&e._UZ(0,"app-task-list-item",31),2&n){const t=c.$implicit,l=e.oxw(2);e.Q6J("flTask",t)("size",l.min)}}function R(n,c){1&n&&(e.TgZ(0,"span"),e._uU(1,"No Data"),e.qZA())}function F(n,c){if(1&n&&(e.TgZ(0,"div",15)(1,"div",16)(2,"span",17)(3,"span",18),e._uU(4," info "),e.qZA(),e._uU(5," General Information "),e.qZA(),e.TgZ(6,"span",19),e._uU(7,"Posted By"),e.qZA(),e.TgZ(8,"span",20)(9,"span"),e._uU(10),e.qZA()(),e.TgZ(11,"span",19),e._uU(12,"Created At"),e.qZA(),e.TgZ(13,"span",20)(14,"span"),e._uU(15),e.ALo(16,"date"),e.qZA()(),e.TgZ(17,"span",19),e._uU(18,"Status"),e.qZA(),e.TgZ(19,"span",20)(20,"span"),e._uU(21),e.qZA()(),e.TgZ(22,"span",19),e._uU(23,"Progress"),e.qZA(),e.TgZ(24,"div",21),e._UZ(25,"nz-progress",22),e.ALo(26,"number"),e.qZA()(),e.TgZ(27,"div",16)(28,"span",17)(29,"span",18),e._uU(30," description "),e.qZA(),e._uU(31," Title "),e.qZA(),e.YNc(32,z,3,1,"span",23),e.YNc(33,Y,2,1,"div",24),e.qZA(),e.TgZ(34,"div",16)(35,"div",25)(36,"span",17)(37,"span",18),e._uU(38," task "),e.qZA(),e._uU(39," Associated Task "),e.qZA(),e.YNc(40,B,2,3,"div",11),e.qZA(),e.TgZ(41,"div",20),e.YNc(42,D,1,2,"app-task-list-item",26),e.ALo(43,"async"),e.YNc(44,R,2,0,"span",27),e.qZA()()()),2&n){const t=e.oxw();e.xp6(10),e.Oqu("support@app-studio.io"),e.xp6(5),e.Oqu(e.lcZ(16,10,null==t.milestone?null:t.milestone.createdAt)),e.xp6(6),e.Oqu(null==t.milestone?null:t.milestone.status),e.xp6(4),e.Q6J("nzPercent",e.lcZ(26,12,t.milestone.percentage))("nzShowInfo",!0),e.xp6(7),e.Q6J("ngIf",!t.editMode),e.xp6(1),e.Q6J("ngIf",t.editMode),e.xp6(7),e.Q6J("ngIf",t.editMode),e.xp6(2),e.Q6J("ngForOf",e.lcZ(43,14,t.getAssociatedTasks())),e.xp6(2),e.Q6J("ngIf",0==t.getAssociatedTaskArray().length)}}function V(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"app-add-associate",32),e.NdJ("closed",function(){return e.CHM(t),e.oxw().closeModal()})("selectedList",function(a){return e.CHM(t),e.oxw().getSelectedTasks(a)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("sourceId",t.getSourceId())("multiSelect",!0)("preselect",t.milestone.tasks)}}const W=[{path:"new",component:Q},{path:"view/:id",component:(()=>{class n{constructor(t,l,a,p,S,J,j){this.taskService=t,this.router=l,this.activeRoute=a,this.navigation=p,this.milestoneQuery=S,this.milestoneService=J,this.taskQuery=j,this.milestone={},this.editMode=!1,this.status=Object.values(f),this.showModal=!1,this.min="min",this.milestoneUpdate=!1,this.showLoader=!0,this.activeRoute.params.subscribe(M=>{M.id&&(this.milestoneId=M.id,this.milestoneService.getOne(M.id),this.milestoneSubscription=this.milestoneQuery.selectEntity(M.id).subscribe(T=>{null!=T&&(this.milestone=Object.assign({},T),this.oldMilestone=Object.assign({},T),this.oldMilestone.tasks=[...T.tasks?T.tasks:[]],this.showLoader=!1,null!=this.milestone.tasks&&this.milestone.tasks.forEach(G=>{this.taskService.getOne(G)}))}))}),a.queryParams.subscribe(M=>{this.editMode=!!M.edit&&M.edit})}ngOnInit(){this.milestone.percentage="0"}updateMilestone(){var t=this;return(0,d.Z)(function*(){t.milestoneUpdate||(null!=t.milestone&&null!=t.milestone.id&&t.milestoneService.updateMilestone(t.milestone.id,t.milestone),t.router.navigate([`/milestone/view/${t.milestone.id}`])),t.navigation.back()})()}toggleButtonValue(){this.router.navigate([this.router.url],{queryParams:{edit:!0}})}compareChanges(){return!!this.milestone&&(this.milestoneUpdate=JSON.stringify(this.oldMilestone)===JSON.stringify(this.milestone),this.milestoneUpdate)}openModal(){this.showModal=!0}closeModal(){this.showModal=!1}getAssociatedTasks(){return null==this.milestone.tasks&&(this.milestone.tasks=[]),this.taskQuery.selectMany(this.milestone.tasks)}getSelectedTasks(t){t&&(this.milestone.tasks=t)}getSourceId(){return this.milestone.id}getAssociatedTaskArray(){var t;return(null===(t=this.milestone)||void 0===t?void 0:t.tasks)?this.milestone.tasks:[]}ngOnDestroy(){this.milestoneSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.Y),e.Y36(g.F0),e.Y36(g.gz),e.Y36(o.f),e.Y36(r.l),e.Y36(A.l),e.Y36(k.R))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-view-milestone"]],decls:13,vars:11,consts:[[1,"new-req-body"],[3,"icon","mode","rightContent"],["nav_bar_arrow",""],["nav_bar_submit",""],[1,"new-req-container"],[3,"size"],["class","content_viewer",4,"ngIf"],["text","Loading Milestone",3,"toast","animating"],[1,"modal",3,"ngModel","transparent","maskClosable","ngModelChange","onClose"],["type","task",3,"sourceId","multiSelect","preselect","closed","selectedList",4,"ngIf"],["appBackButton","",1,"material-symbols-rounded","button-icon"],["Button","","size","small","class","button-icon timeline-button",3,"type","inline","size","click",4,"ngIf"],["Button","","class","button-icon","style","margin-right: 4px",3,"type","disabled","inline","size","click",4,"ngIf"],["Button","","size","small",1,"button-icon","timeline-button",3,"type","inline","size","click"],["Button","",1,"button-icon",2,"margin-right","4px",3,"type","disabled","inline","size","click"],[1,"content_viewer"],[1,"timeline-div-container"],[1,"timeline-heading"],[1,"material-symbols-rounded"],[1,"timeline-title-span"],[1,"timeline-sub-container"],[1,"timeline-sub-container","timeline-sub-container-flex"],[3,"nzPercent","nzShowInfo"],["class","timeline-sub-container desc-font",4,"ngIf"],["class","timeline-prop-container",4,"ngIf"],[1,"timeline-options-container"],[3,"flTask","size",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"timeline-sub-container","desc-font"],[1,"timeline-prop-container"],[1,"timeline-sub-container",3,"ngModel","ngModelChange"],[3,"flTask","size"],["type","task",3,"sourceId","multiSelect","preselect","closed","selectedList"]],template:function(t,l){if(1&t&&(e.TgZ(0,"div",0)(1,"Navbar",1),e._uU(2," Milestone "),e.qZA(),e.YNc(3,O,2,0,"ng-template",null,2,e.W1O),e.YNc(5,L,2,2,"ng-template",null,3,e.W1O),e.TgZ(7,"div",4),e._UZ(8,"WhiteSpace",5),e.YNc(9,F,45,16,"div",6),e._UZ(10,"ActivityIndicator",7),e.qZA(),e.TgZ(11,"Modal",8),e.NdJ("ngModelChange",function(p){return l.showModal=p})("onClose",function(){return l.closeModal()}),e.YNc(12,V,1,3,"app-add-associate",9),e.qZA()()),2&t){const a=e.MAs(4),p=e.MAs(6);e.xp6(1),e.Q6J("icon",a)("mode","light")("rightContent",p),e.xp6(7),e.Q6J("size","md"),e.xp6(1),e.Q6J("ngIf",!l.showLoader),e.xp6(1),e.Q6J("toast",!0)("animating",l.showLoader),e.xp6(1),e.Q6J("ngModel",l.showModal)("transparent",!0)("maskClosable",!0),e.xp6(1),e.Q6J("ngIf",l.showModal)}},directives:[_.w5,v.z,i.O5,_.r0,_.yG,m.M,h.Fj,h.JJ,h.On,i.sg,Z.T,_.dA,_.zS,w.W],pipes:[i.uU,i.JJ,i.Ov],styles:[".new-req-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%;width:100%;overflow:hidden}Navbar[_ngcontent-%COMP%]{flex:1;min-height:50px;max-height:50px;z-index:10}.content_viewer[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 50px);padding:6px;background-color:var(--dim-bg-color)}.new-req-container[_ngcontent-%COMP%]{overflow:scroll;flex:1;width:100%;height:calc(100% - 50px)}input[_ngcontent-%COMP%]{border:1px solid var(--dim-text-color);padding:.5rem;width:100%}"]}),n})()}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(W)],g.Bz]}),n})();var $=s(3926);let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[i.ez,K,$.m]]}),n})()}}]);