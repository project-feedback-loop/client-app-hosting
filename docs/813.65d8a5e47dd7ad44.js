"use strict";(self.webpackChunkfeedback_loop_client=self.webpackChunkfeedback_loop_client||[]).push([[813],{5813:(Ut,f,r)=>{r.r(f),r.d(f,{ViewEntityModule:()=>At});var u=r(914),t=r(5e3),m=r(9826),S=r(3616),Z=r(6819),y=r(6832),x=r(4419),w=r(3455),O=r(8793),V=r(7465),k=r(6335),C=r(6101),b=r(9033),J=r(5319),Q=r(9565),l=r(9352),I=r(4817),d=r(9808),U=r(4112),N=r(7797),P=r(4933),v=r(4770),T=r(6762),M=r(5405),q=r(5499),E=r(2382);function Y(n,a){if(1&n&&t._UZ(0,"app-req-list-item",17),2&n){const e=t.oxw().$implicit,i=t.oxw();t.Q6J("request",i.getRequestList(e))}}function j(n,a){if(1&n&&t._UZ(0,"app-task-list-item",18),2&n){const e=t.oxw().$implicit,i=t.oxw();t.Q6J("flTask",i.getTaskList(e))}}function H(n,a){if(1&n&&t._UZ(0,"app-milestone-card",19),2&n){const e=t.oxw().$implicit,i=t.oxw();t.Q6J("flMilestone",i.getMilestoneList(e))}}function L(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",10)(2,"div",11)(3,"input",12),t.NdJ("click",function(s){const c=t.CHM(e).$implicit;return t.oxw().selecting(c.id,s)}),t.qZA()(),t.TgZ(4,"div",13),t.YNc(5,Y,1,1,"app-req-list-item",14),t.YNc(6,j,1,1,"app-task-list-item",15),t.YNc(7,H,1,1,"app-milestone-card",16),t.qZA()()()}if(2&n){const e=a.$implicit,i=t.oxw();t.xp6(3),t.Q6J("checked",i.selected.includes(e.id?e.id:-1)),t.xp6(2),t.Q6J("ngIf","request"==i.type),t.xp6(1),t.Q6J("ngIf","task"==i.type),t.xp6(1),t.Q6J("ngIf","milestone"==i.type)}}let z=(()=>{class n{constructor(e,i,s,o,c,p,_){this.route=e,this.requestQuery=i,this.taskQuery=s,this.milestoneQuery=o,this.requestService=c,this.taskService=p,this.milestoneService=_,this.selected=[],this.closed=new t.vpe,this.selectedList=new t.vpe}ngOnInit(){}ngAfterContentInit(){"request"===this.type?(this.requestService.getall(),this.list=this.requestQuery.$requests):"task"===this.type?(this.taskService.getall(),this.list=this.taskQuery.$tasks):"milestone"===this.type&&(this.milestoneService.getall(),this.list=this.milestoneQuery.$milestones),this.preSelected&&(this.selected=[...this.preSelected])}selecting(e,i){if(e)if(i.target.checked)this.multiSelect?this.selected.push(e):this.selected=[e];else{let s=this.selected.indexOf(e);this.selected.splice(s,1)}}pickSelectedRequest(){if(this.selected.length>0)this.selectedList.emit(this.multiSelect?this.selected:this.selected[0]);else{let e;this.multiSelect&&(e=this.selected),this.selectedList.emit(e)}this.close()}close(){this.closed.emit(!1)}getRequestList(e){return e}getTaskList(e){return e}getMilestoneList(e){return e}creatingNew(){this.sourceId&&this.route.navigate([`/${this.type}/new`],{queryParams:{id:this.sourceId}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.F0),t.Y36(y.Z),t.Y36(x.R),t.Y36(w.l),t.Y36(k.P),t.Y36(C.Y),t.Y36(b.l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-associate"]],inputs:{preSelected:["preselect","preSelected"],multiSelect:"multiSelect",sourceId:"sourceId",type:"type"},outputs:{closed:"closed",selectedList:"selectedList"},decls:16,vars:5,consts:[[1,"body"],[1,"header"],[1,"search-container"],[1,"icon-div",3,"click"],[1,"material-symbols-rounded"],[1,"am-demo-bd"],[2,"border-bottom","1px solid #ddd"],[3,"placeholder","maxLength"],[1,"main"],[4,"ngFor","ngForOf"],[1,"option-card"],[1,"checkbox-container"],["type","checkbox",3,"checked","click"],[1,"element-container"],[3,"request",4,"ngIf"],[3,"flTask",4,"ngIf"],[3,"flMilestone",4,"ngIf"],[3,"request"],[3,"flTask"],[3,"flMilestone"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.NdJ("click",function(){return i.close()}),t.TgZ(4,"span",4),t._uU(5," close "),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6),t._UZ(8,"SearchBar",7),t.qZA()(),t.TgZ(9,"div",3),t.NdJ("click",function(){return i.pickSelectedRequest()}),t.TgZ(10,"span",4),t._uU(11," done "),t.qZA()()()(),t.TgZ(12,"div",8)(13,"List"),t.YNc(14,L,8,4,"div",9),t.ALo(15,"async"),t.qZA()()()),2&e&&(t.xp6(8),t.Q6J("placeholder","Search")("maxLength",20),t.xp6(6),t.Q6J("ngForOf",t.lcZ(15,3,i.list)))},directives:[l.NB,l.ns,d.sg,d.O5,M.U,T.T,q.T],pipes:[d.Ov],styles:[".body[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr;grid-template-columns:1fr;height:100%;position:relative}.search-container[_ngcontent-%COMP%]{height:50px;width:100%;display:grid;grid-template-columns:50px auto 50px;align-items:center;background-color:#fff}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.main[_ngcontent-%COMP%]{overflow-y:auto;height:100%}.icon-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.option-card[_ngcontent-%COMP%]{display:flex;text-align:start;padding:0 10px}.checkbox-container[_ngcontent-%COMP%]{padding:13px 12px 0 5px}.checkbox-container[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:20px;height:20px}.element-container[_ngcontent-%COMP%]{flex:1}.button[_ngcontent-%COMP%]{margin-left:17px;cursor:pointer}"]}),n})();var $=r(5513);const F=["taskSegment"];function R(n,a){1&n&&(t.TgZ(0,"span",33),t._uU(1," arrow_back "),t.qZA())}const A=function(n){return{opacity:n}};function B(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",35),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).updateEntity()}),t._uU(1,"Update"),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("type","primary")("disabled",e.canUpdateEntity())("ngStyle",t.VKq(5,A,e.canUpdateEntity()?1:.5))("inline",!0)("size","small")}}function D(n,a){if(1&n&&t.YNc(0,B,2,7,"div",34),2&n){const e=t.oxw();t.Q6J("ngIf",e.canUserEdit())}}function W(n,a){if(1&n&&(t.TgZ(0,"header",36)(1,"div",37)(2,"span",38),t._UZ(3,"img",39),t.qZA(),t.TgZ(4,"div",40)(5,"span",41),t._uU(6),t.qZA(),t._UZ(7,"WhiteSpace",42),t.TgZ(8,"span",13),t._uU(9),t.ALo(10,"date"),t.qZA()()()()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("src",e.createdUser.picture,t.LSH),t.xp6(3),t.hij(" ",e.createdUser.name," "),t.xp6(1),t.Q6J("size","xs"),t.xp6(2),t.hij(" ",t.xi3(10,4,e.entityObj.createdAt,"h:mm a . MMM d, y")," ")}}function K(n,a){if(1&n&&t._UZ(0,"div",45),2&n){const e=t.oxw(2);t.Q6J("MarkdownContentParser",e.request.content)}}function G(n,a){if(1&n&&t._UZ(0,"div",45),2&n){const e=t.oxw(2);t.Q6J("MarkdownContentParser",e.task.content)}}function X(n,a){if(1&n&&t._UZ(0,"div",45),2&n){const e=t.oxw(2);t.Q6J("MarkdownContentParser",e.milestone.content)}}function tt(n,a){if(1&n&&(t.TgZ(0,"div",43),t.YNc(1,K,1,1,"div",44),t.YNc(2,G,1,1,"div",44),t.YNc(3,X,1,1,"div",44),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf","request"===e.entity),t.xp6(1),t.Q6J("ngIf","task"===e.entity),t.xp6(1),t.Q6J("ngIf","milestone"===e.entity)}}function et(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"markdown-editor",47),t.NdJ("selectedMention",function(s){return t.CHM(e),t.oxw(2).getMention(s)})("jsonContentChange",function(s){return t.CHM(e),t.oxw(2).request.content=s})("content",function(s){return t.CHM(e),t.oxw(2).request.rawContent=s.raw})("selectedTag",function(s){return t.CHM(e),t.oxw(2).getTag(s)}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("tagArray",e.global.requestTagArray)("mentionArray",e.global.mentionArray)("enableMenu",!1)("jsonContent",e.request.content)}}function it(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"markdown-editor",47),t.NdJ("selectedMention",function(s){return t.CHM(e),t.oxw(2).getMention(s)})("jsonContentChange",function(s){return t.CHM(e),t.oxw(2).task.content=s})("content",function(s){return t.CHM(e),t.oxw(2).task.rawContent=s.raw})("selectedTag",function(s){return t.CHM(e),t.oxw(2).getTag(s)}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("tagArray",e.global.taskTagArray)("mentionArray",e.global.mentionArray)("enableMenu",!1)("jsonContent",e.task.content)}}function nt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"markdown-editor",47),t.NdJ("selectedMention",function(s){return t.CHM(e),t.oxw(2).getMention(s)})("jsonContentChange",function(s){return t.CHM(e),t.oxw(2).milestone.content=s})("content",function(s){return t.CHM(e),t.oxw(2).milestone.rawContent=s.raw})("selectedTag",function(s){return t.CHM(e),t.oxw(2).getTag(s)}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("tagArray",e.global.milestoneTagArray)("mentionArray",e.global.mentionArray)("enableMenu",!1)("jsonContent",e.milestone.content)}}function st(n,a){if(1&n&&(t.TgZ(0,"div",43),t.YNc(1,et,1,4,"markdown-editor",46),t.YNc(2,it,1,4,"markdown-editor",46),t.YNc(3,nt,1,4,"markdown-editor",46),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf","request"===e.entity),t.xp6(1),t.Q6J("ngIf","task"===e.entity),t.xp6(1),t.Q6J("ngIf","milestone"===e.entity)}}function ot(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",48)(1,"app-field-select",49),t.NdJ("defaultValueChange",function(s){return t.CHM(e),t.oxw().request.category=s}),t.qZA(),t.TgZ(2,"app-field-select",50),t.NdJ("defaultValueChange",function(s){return t.CHM(e),t.oxw().request.severity=s}),t.qZA(),t.TgZ(3,"app-field-select",51),t.NdJ("defaultValueChange",function(s){return t.CHM(e),t.oxw().request.module=s}),t.qZA(),t.TgZ(4,"app-field-select",52),t.NdJ("defaultValueChange",function(s){return t.CHM(e),t.oxw().request.status=s}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.canUserEdit())("options",e.fields.categories)("defaultValue",e.request.category),t.xp6(1),t.Q6J("disabled",!e.canUserEdit())("options",e.fields.severities)("defaultValue",e.request.severity),t.xp6(1),t.Q6J("disabled",!e.canUserEdit())("options",e.fields.modules)("defaultValue",e.request.module),t.xp6(1),t.Q6J("disabled",!e.canUserEdit())("options",e.fields.requestStatus)("defaultValue",e.request.status)}}function at(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",48)(1,"app-field-select",53),t.NdJ("defaultValueChange",function(s){return t.CHM(e),t.oxw().task.priority=s}),t.qZA(),t.TgZ(2,"app-field-select",52),t.NdJ("defaultValueChange",function(s){return t.CHM(e),t.oxw().task.status=s}),t.qZA(),t.TgZ(3,"app-field-select",51),t.NdJ("defaultValueChange",function(s){return t.CHM(e),t.oxw().task.module=s}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.canUserEdit())("options",e.fields.taskPriorites)("defaultValue",e.task.priority),t.xp6(1),t.Q6J("disabled",!e.canUserEdit())("options",e.fields.taskStatus)("defaultValue",e.task.status),t.xp6(1),t.Q6J("disabled",!e.canUserEdit())("options",e.fields.modules)("defaultValue",e.task.module)}}function rt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",48)(1,"app-field-select",52),t.NdJ("defaultValueChange",function(s){return t.CHM(e),t.oxw().milestone.status=s}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.canUserEdit())("options",e.fields.taskStatus)("defaultValue",e.milestone.status)}}function ct(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",54),t.NdJ("click",function(){return t.CHM(e),t.oxw().showDeleteAlert()}),t._UZ(1,"img",55),t.ALo(2,"categoryImgPath"),t.TgZ(3,"span",56),t._uU(4,"Delete"),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("ngStyle",t.VKq(5,A,e.canUserEdit()?1:.5))("nzPlacement","bottomLeft"),t.xp6(1),t.Q6J("src",t.lcZ(2,3,"delete.svg"),t.LSH)}}function lt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",57),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(),o=t.MAs(29);return s.showEntityModal(o.selectedIndex)}),t._UZ(1,"img",58),t.ALo(2,"categoryImgPath"),t.TgZ(3,"span",59),t._uU(4,"Add"),t.qZA()()}2&n&&(t.xp6(1),t.Q6J("src",t.lcZ(2,1,"fl-add.png"),t.LSH))}function dt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"SwipeAction",62),t.NdJ("onOpen",function(){const o=t.CHM(e).$implicit;return t.oxw(2).swipeOpen("task",o.id)})("onClose",function(){return t.CHM(e),t.oxw(2).swipeClose()}),t._UZ(1,"app-task-list-item",63),t.qZA()}if(2&n){const e=a.$implicit,i=t.oxw(2);t.Q6J("autoClose",!0)("right",i.rightSwipeAction)("disabled",!i.canUserEdit()),t.xp6(1),t.Q6J("disabled",!1)("size","min")("flTask",e)}}function pt(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,dt,2,6,"SwipeAction",61),t.ALo(2,"async"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e.taskQuery.selectMany(e.request.associatedTasks)))}}function _t(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"SwipeAction",62),t.NdJ("onOpen",function(){const o=t.CHM(e).$implicit;return t.oxw(2).swipeOpen("request",o.id)})("onClose",function(){return t.CHM(e),t.oxw(2).swipeClose()}),t._UZ(1,"app-req-list-item",64),t.qZA()}if(2&n){const e=a.$implicit,i=t.oxw(2);t.Q6J("autoClose",!0)("right",i.rightSwipeAction)("disabled",!i.canUserEdit()),t.xp6(1),t.Q6J("disabled",!1)("size","min")("request",e)}}function ut(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,_t,2,6,"SwipeAction",61),t.ALo(2,"async"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e.requestQuery.selectMany(e.task.requests)))}}function mt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"SwipeAction",62),t.NdJ("onOpen",function(){const o=t.CHM(e).$implicit;return t.oxw(2).swipeOpen("milestone",o.id)})("onClose",function(){return t.CHM(e),t.oxw(2).swipeClose()}),t._UZ(1,"app-milestone-card",65),t.qZA()}if(2&n){const e=a.$implicit,i=t.oxw(2);t.Q6J("autoClose",!0)("right",i.rightSwipeAction)("disabled",!i.canUserEdit()),t.xp6(1),t.Q6J("size","min")("flMilestone",e)}}const ht=function(n){return[n]};function gt(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,mt,2,5,"SwipeAction",61),t.ALo(2,"async"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e.milestoneQuery.selectMany(t.VKq(3,ht,e.task.associatedMilestone))))}}function ft(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"SwipeAction",62),t.NdJ("onOpen",function(){const o=t.CHM(e).$implicit;return t.oxw(2).swipeOpen("task",o.id)})("onClose",function(){return t.CHM(e),t.oxw(2).swipeClose()}),t._UZ(1,"app-task-list-item",63),t.qZA()}if(2&n){const e=a.$implicit,i=t.oxw(2);t.Q6J("autoClose",!0)("right",i.rightSwipeAction)("disabled",!i.canUserEdit()),t.xp6(1),t.Q6J("disabled",!1)("size","min")("flTask",e)}}function yt(n,a){if(1&n&&(t.TgZ(0,"div",60),t.YNc(1,ft,2,6,"SwipeAction",61),t.ALo(2,"async"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e.taskQuery.selectMany(e.milestone.tasks)))}}function xt(n,a){1&n&&(t.TgZ(0,"span",66),t._uU(1," home "),t.qZA())}function wt(n,a){1&n&&(t.TgZ(0,"span",66),t._uU(1," task "),t.qZA())}function kt(n,a){1&n&&(t.TgZ(0,"span",66),t._uU(1," emoji_flags "),t.qZA())}function Ct(n,a){1&n&&(t.TgZ(0,"span",66),t._uU(1," person "),t.qZA())}function bt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"app-add-associate",67),t.NdJ("selectedList",function(s){return t.CHM(e),t.oxw().getSelectedRequest(s)})("closed",function(){return t.CHM(e),t.oxw().showRequestModel=!1}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("sourceId",e.getSourceId())("multiSelect",!0)("preselect",e.getEntityAssociaties("request"))("type","request")}}function vt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"app-add-associate",67),t.NdJ("selectedList",function(s){return t.CHM(e),t.oxw().getSelectedTask(s)})("closed",function(){return t.CHM(e),t.oxw().showTaskModel=!1}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("sourceId",e.getSourceId())("multiSelect",!0)("preselect",e.getEntityAssociaties("task"))("type","task")}}function Tt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"app-add-associate",67),t.NdJ("selectedList",function(s){return t.CHM(e),t.oxw().getSelectedMilestone(s)})("closed",function(){return t.CHM(e),t.oxw().showMilestoneModel=!1}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("sourceId",e.getSourceId())("multiSelect",!1)("preselect",e.getEntityAssociaties("milestone"))("type","milestone")}}let Mt=(()=>{class n{constructor(e,i,s,o,c,p,_,h,g,St,Zt,Ot,Vt,Jt,Qt,It){this.activatedRoute=e,this.authQuery=i,this.userQuery=s,this.requestQuery=o,this.taskQuery=c,this.milestoneQuery=p,this.fields=_,this.global=h,this.requestService=g,this.taskService=St,this.milestoneService=Zt,this.userService=Ot,this.navigationService=Vt,this.notifier=Jt,this.modal=Qt,this.router=It,this.entity="",this.rightSwipeAction=[{text:" Remove ",onPress:()=>this.swipeDelete(),className:"del-associate-btn"}],this.swipeObj={},this.request={},this.task={},this.milestone={},this.oldRequest={},this.oldTask={},this.oldMilestone={},this.entityObj={},this.showRequestModel=!1,this.showTaskModel=!1,this.showMilestoneModel=!1}ngOnInit(){this.activatedRoute.params.subscribe(e=>{e.entity&&e.id&&(this.entity=e.entity,console.log(this.entity),this.getEntity(e.id),this.taskSegment&&(this.taskSegment.selectedIndex=0))}),this.authSubscription=this.authQuery.$authUser.subscribe(e=>this.authUser=e)}getCreatedUser(e){this.userQuery.hasEntity(e)||this.userService.get(e).subscribe(),this.userSubscription=this.userQuery.selectEntity(e).subscribe(i=>{console.log(i),this.createdUser=i})}hasEntityInQuery(e,i){switch(e){case"request":this.requestQuery.hasEntity(i)||this.requestService.getOne(i);break;case"task":this.taskQuery.hasEntity(i)||this.taskService.getOne(i);break;case"milestone":this.milestoneQuery.hasEntity(i)||this.milestoneService.getOne(i);break;default:console.log("Unknown entity in hasEntityInQuery",e)}}getEntity(e){this.hasEntityInQuery(this.entity,e),"request"===this.entity?this.requestSubscription=this.requestQuery.selectEntity(e).subscribe(i=>{i?(console.log(i),this.request=Object.assign({},i),this.entityObj=Object.assign({},i),this.oldRequest=Object.assign({},i),this.request.createdByUser?this.getCreatedUser(this.request.createdByUser):this.requestService.getOne(e),this.request.associatedTasks&&this.request.associatedTasks.forEach(s=>{this.hasEntityInQuery("task",s)})):console.log(`No entity present for given id ${e}, entity ${this.entity}`)}):"task"===this.entity?this.taskSubscription=this.taskQuery.selectEntity(e).subscribe(i=>{i?(this.task=Object.assign({},i),this.oldTask=Object.assign({},i),this.entityObj=Object.assign({},i),this.task.createdByUser?this.getCreatedUser(this.task.createdByUser):this.taskService.getOne(e),this.task.requests&&this.task.requests.forEach(s=>{this.hasEntityInQuery("request",s)}),this.task.associatedMilestone&&this.hasEntityInQuery("milestone",this.task.associatedMilestone)):console.log(`No entity present for given id ${e}, entity ${this.entity}`)}):"milestone"===this.entity?this.milestoneSubscription=this.milestoneQuery.selectEntity(e).subscribe(i=>{i?(this.milestone=Object.assign({},i),this.oldMilestone=Object.assign({},i),this.entityObj=Object.assign({},i),this.milestone.createdByUser?this.getCreatedUser(this.milestone.createdByUser):this.milestoneService.getOne(e),this.milestone.tasks&&this.milestone.tasks.forEach(s=>{this.hasEntityInQuery("task",s)})):console.log(`No entity present for given id ${e}, entity ${this.entity}`)}):console.log("Unknown entity")}getTag(e){if("request"===this.entity)switch(e.type){case"Category":this.request.category=e.tag;break;case"Severity":this.request.severity=e.tag;break;case"Module":this.request.module=e.tag;break;default:console.log(`Unknown tag type in ${this.entity}: `,e.type)}else if("task"===this.entity)switch(e.type){case"Priority":this.task.priority=e.tag;break;case"Status":this.task.status=e.tag;break;case"Module":this.task.module=e.tag;break;default:console.log(`Unknown tag type in ${this.entity}: `,e.type)}else"milestone"===this.entity?"Status"===e.type&&(this.milestone.status=e.tag):console.log("Unknown entity in getTag",this.entity,e)}getMention(e){console.log(e)}canUserEdit(){return!(!this.authUser||!this.createdUser)&&this.authUser.id===this.createdUser.id}isEntityUpdated(){return"request"===this.entity?JSON.stringify(this.request)!==JSON.stringify(this.oldRequest):"task"===this.entity?JSON.stringify(this.task)!==JSON.stringify(this.oldTask):"milestone"===this.entity&&JSON.stringify(this.milestone)!==JSON.stringify(this.oldMilestone)}canUpdateEntity(){return this.canUserEdit()&&this.isEntityUpdated()}updateEntity(){if(console.log("Coming to updateEntity"),this.canUpdateEntity()){switch(console.log("Coming to updateEntity passing return"),this.entity){case"request":null!=this.request&&null!=this.request.id&&(this.oldRequest=Object.assign({},this.request),null==this.request.associatedTasks&&(this.request.associatedTasks=[]),this.request.createdByUser=this.authQuery.user.id,this.requestService.updateRequest(this.request.id,this.request));break;case"task":console.log("Coming to updateEntity to task"),null!=this.task&&null!=this.task.id&&(this.oldTask=Object.assign({},this.task),null==this.task.requests&&(this.task.requests=null),null==this.task.associatedMilestone&&(this.task.associatedMilestone=null),console.log("Coming to updateEntity to task",this.task),this.taskService.updateTask(this.task.id,this.task));break;case"milestone":null!=this.milestone&&null!=this.milestone.id&&(this.oldMilestone=Object.assign({},this.milestone),this.milestoneService.updateMilestone(this.milestone.id,this.milestone))}this.notifierSubscription&&this.notifierSubscription.unsubscribe(),this.notifierSubscription=this.notifier.action$.pipe((0,u.vE)(`${this.entity.toLocaleLowerCase()}s`),(0,u.IY)("PUT")).subscribe(e=>{"request"===this.entity&&this.request&&this.request.id&&this.requestService.getOne(this.request.id),"task"===this.entity&&this.task&&this.task.id&&this.taskService.getOne(this.task.id),"milestone"===this.entity&&this.milestone&&this.milestone.id&&this.milestoneService.getOne(this.milestone.id)})}}swipeDelete(){var e,i,s;if(this.swipeObj.selectedEntity&&this.swipeObj.entityId)switch(this.entity){case"request":"task"===this.swipeObj.selectedEntity&&(this.request.associatedTasks=null===(e=this.request.associatedTasks)||void 0===e?void 0:e.filter(o=>o!==this.swipeObj.entityId));break;case"task":"request"===this.swipeObj.selectedEntity?this.task.requests=null===(i=this.task.requests)||void 0===i?void 0:i.filter(o=>o!=this.swipeObj.entityId):"milestone"===this.swipeObj.selectedEntity&&this.task.associatedMilestone===this.swipeObj.entityId&&(this.task.associatedMilestone=null);break;case"milestone":console.log(this.swipeObj.selectedEntity,this.swipeObj.entityId),"task"===this.swipeObj.selectedEntity&&(this.milestone.tasks=null===(s=this.milestone.tasks)||void 0===s?void 0:s.filter(o=>o!==this.swipeObj.entityId))}}swipeOpen(e,i){this.swipeObj.selectedEntity=e,this.swipeObj.entityId=i}swipeClose(){console.log("SwipeClose"),this.swipeObj={}}getSelectedRequest(e){console.log(this.entity,"Selected Request",e),"task"===this.entity&&(this.task.requests=e)}getSelectedTask(e){switch(console.log(this.entity,"Selected Task",e),this.entity){case"request":this.request.associatedTasks=e;break;case"milestone":this.milestone.tasks=e}}getSelectedMilestone(e){console.log(this.entity,"Selected Milestone",e),"task"===this.entity&&(this.task.associatedMilestone=e)}getEntityAssociaties(e){if("request"===this.entity&&this.request){if("task"===e&&this.request.associatedTasks)return[...this.request.associatedTasks]}else if("task"===this.entity&&this.task){if("request"===e&&this.task.requests)return this.task.requests;if("milestone"===e&&this.task.associatedMilestone)return[this.task.associatedMilestone]}else if("milestone"===this.entity&&this.milestone&&"task"===e&&this.milestone.tasks)return this.milestone.tasks;return[]}getSourceId(){return this.entityObj.id}showEntityModal(e){switch(this.entity){case"request":case"milestone":this.showTaskModel=!0;break;case"task":0===e?this.showRequestModel=!0:1===e&&(this.showMilestoneModel=!0)}}getSegmentValues(){switch(this.entity){case"request":let e="Tasks (0)";return this.request.associatedTasks&&(e=`Tasks (${this.request.associatedTasks.length})`),[[e]];case"task":let i="Requests (0)",s="Milestone (0)";return this.task.requests&&(i=`Requests (${this.task.requests.length})`),this.task.associatedMilestone&&(s="Milestone (1)"),[[i],[s]];case"milestone":let o="Tasks (0)";return this.milestone.tasks&&(o=`Tasks (${this.milestone.tasks.length})`),[[o]]}return[]}showDeleteAlert(){this.modal.alert("Delete","Are you sure ?",[{text:"Cancel",onPress:()=>console.log("cancel"),style:{color:"var(--accent-text-color)",background:"var(--accent-bg-color)"}},{text:"OK",onPress:()=>this.deleteEntity(),style:{color:"var(--accent-text-color)",background:"var(--accent-bg-color)"}}],"android")}deleteEntity(){if(this.canUserEdit()){switch(this.entity){case"request":this.request.id&&this.requestService.deleteRequest(this.request.id);break;case"task":this.task.id&&this.taskService.deleteTask(this.task.id);break;case"milestone":this.milestone.id&&this.milestoneService.deleteMilestone(this.milestone.id)}this.notifierSubscription&&this.notifierSubscription.unsubscribe(),this.notifierSubscription=this.notifier.action$.pipe((0,u.vE)(`${this.entity.toLocaleLowerCase()}s`),(0,u.IY)("DELETE")).subscribe(e=>{this.navigationService.back()})}}tabBarTabOnPress(e){switch(this.global.selectedIndex=e.index,e.index){case 0:this.global.entity="Request",this.router.navigate(["home/requests"]);break;case 1:this.global.entity="Task",this.router.navigate(["home/tasks"]);break;case 2:this.global.entity="Milestone",this.router.navigate(["home/milestones"])}}ngOnDestroy(){this.requestSubscription&&this.requestSubscription.unsubscribe(),this.taskSubscription&&this.taskSubscription.unsubscribe(),this.milestoneSubscription&&this.milestoneSubscription.unsubscribe(),this.authSubscription&&this.authSubscription.unsubscribe(),this.notifierSubscription&&this.notifierSubscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.gz),t.Y36(S.i),t.Y36(Z.o),t.Y36(y.Z),t.Y36(x.R),t.Y36(w.l),t.Y36(O.$),t.Y36(V.U),t.Y36(k.P),t.Y36(C.Y),t.Y36(b.l),t.Y36(J.T),t.Y36(Q.f),t.Y36(u.kt),t.Y36(l.Z7),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-view-entity"]],viewQuery:function(e,i){if(1&e&&t.Gf(F,5),2&e){let s;t.iGM(s=t.CRH())&&(i.taskSegment=s.first)}},decls:55,vars:47,consts:[[1,"new-entity-container"],[3,"icon","mode","rightContent"],["nav_bar_arrow",""],["nav_bar_submit",""],[1,"nec-body"],[1,"nec-modal"],["model",""],["class","req-list-item-header",4,"ngIf"],[1,"nec-modal-body"],["class","nec-editor",4,"ngIf"],[1,"nec-modal-footer"],["class","first-element",4,"ngIf"],[1,"req-list-item-footer"],[1,"rlth-time-user"],["class","del-associate-btn add-associate-btn-border","nz-button","","nz-dropdown","",3,"ngStyle","nzPlacement","click",4,"ngIf"],[1,"associatedDiv"],[1,"nec-model-entities-div"],[1,"associate-div-segmented"],[1,"ad-segmented-control",3,"tintColor","values"],["taskSegment",""],["class","add-associate-btn","nz-button","",3,"click",4,"ngIf"],["class","nec-model-entity-container",4,"ngIf"],["tabBarPosition","bottom",1,"home-tab-bar",3,"activeTab","tintColor","unselectedTintColor","onPress"],["title","Home","key","1",3,"icon","selectedIcon"],["home_icon",""],["title","Tasks","key","2",3,"icon","selectedIcon"],["task_icon",""],["title","Milestones","key","3",3,"icon","selectedIcon"],["milestone_icon",""],["title","Account","key","4",3,"icon","selectedIcon"],["account_icon",""],[1,"modal",3,"ngModel","transparent","maskClosable","ngModelChange"],[3,"sourceId","multiSelect","preselect","type","selectedList","closed",4,"ngIf"],["appBackButton","",1,"material-symbols-rounded","button-icon"],["Button","","class","button-icon button-feel-accent","style","margin-right: 4px",3,"type","disabled","ngStyle","inline","size","click",4,"ngIf"],["Button","",1,"button-icon","button-feel-accent",2,"margin-right","4px",3,"type","disabled","ngStyle","inline","size","click"],[1,"req-list-item-header"],[1,"rlth-time"],[1,"material-symbols-rounded","rlth-time-icon"],["alt","",1,"rlth-time-icon",3,"src"],[1,"rlth-time-div"],[1,"rlth-time-text"],[3,"size"],[1,"nec-editor"],["class","req-list-item-container",3,"MarkdownContentParser",4,"ngIf"],[1,"req-list-item-container",3,"MarkdownContentParser"],["class","nec-markdown-editor","placeholder","Say Something",3,"tagArray","mentionArray","enableMenu","jsonContent","selectedMention","jsonContentChange","content","selectedTag",4,"ngIf"],["placeholder","Say Something",1,"nec-markdown-editor",3,"tagArray","mentionArray","enableMenu","jsonContent","selectedMention","jsonContentChange","content","selectedTag"],[1,"first-element"],["name","Category",1,"nec-entity-fields",3,"disabled","options","defaultValue","defaultValueChange"],["name","Severity",1,"nec-entity-fields",3,"disabled","options","defaultValue","defaultValueChange"],["name","Module",1,"nec-entity-fields",3,"disabled","options","defaultValue","defaultValueChange"],["name","Status",1,"nec-entity-fields",3,"disabled","options","defaultValue","defaultValueChange"],["name","Priority",1,"nec-entity-fields",3,"disabled","options","defaultValue","defaultValueChange"],["nz-button","","nz-dropdown","",1,"del-associate-btn","add-associate-btn-border",3,"ngStyle","nzPlacement","click"],["alt","Add",1,"button-icon","del-associate-img",3,"src"],[1,"del-associate-text"],["nz-button","",1,"add-associate-btn",3,"click"],["alt","Add",1,"button-icon","add-associate-img",3,"src"],[1,"add-associate-text"],[1,"nec-model-entity-container"],["style","background-color: transparent; margin-top: 6px;",3,"autoClose","right","disabled","onOpen","onClose",4,"ngFor","ngForOf"],[2,"background-color","transparent","margin-top","6px",3,"autoClose","right","disabled","onOpen","onClose"],[1,"task-list-item",3,"disabled","size","flTask"],[1,"task-list-item",3,"disabled","size","request"],[1,"task-list-item",3,"size","flMilestone"],[1,"material-symbols-rounded"],[3,"sourceId","multiSelect","preselect","type","selectedList","closed"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"Navbar",1),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.YNc(4,R,2,0,"ng-template",null,2,t.W1O),t.YNc(6,D,1,1,"ng-template",null,3,t.W1O),t.TgZ(8,"div",4)(9,"div",5,6),t.YNc(11,W,11,7,"header",7),t.TgZ(12,"div",8),t.YNc(13,tt,4,3,"div",9),t.YNc(14,st,4,3,"div",9),t.qZA(),t.TgZ(15,"div",10),t.YNc(16,ot,5,12,"div",11),t.YNc(17,at,4,9,"div",11),t.YNc(18,rt,2,3,"div",11),t.TgZ(19,"footer",12)(20,"span",13),t._uU(21),t.ALo(22,"date"),t.qZA(),t.TgZ(23,"div",13),t.YNc(24,ct,5,7,"div",14),t.qZA()()()(),t.TgZ(25,"div",15)(26,"div",16)(27,"div",17),t._UZ(28,"SegmentedControl",18,19),t.TgZ(30,"div",13),t.YNc(31,lt,5,3,"div",20),t.qZA()(),t.YNc(32,pt,3,3,"div",21),t.YNc(33,ut,3,3,"div",21),t.YNc(34,gt,3,5,"div",21),t.YNc(35,yt,3,3,"div",21),t.qZA()()(),t.TgZ(36,"TabBar",22),t.NdJ("onPress",function(o){return i.tabBarTabOnPress(o)}),t.TgZ(37,"TabBarItem",23),t.YNc(38,xt,2,0,"ng-template",null,24,t.W1O),t.qZA(),t.TgZ(40,"TabBarItem",25),t.YNc(41,wt,2,0,"ng-template",null,26,t.W1O),t.qZA(),t.TgZ(43,"TabBarItem",27),t.YNc(44,kt,2,0,"ng-template",null,28,t.W1O),t.qZA(),t.TgZ(46,"TabBarItem",29),t.YNc(47,Ct,2,0,"ng-template",null,30,t.W1O),t.qZA()(),t.TgZ(49,"Modal",31),t.NdJ("ngModelChange",function(o){return i.showRequestModel=o}),t.YNc(50,bt,1,4,"app-add-associate",32),t.qZA(),t.TgZ(51,"Modal",31),t.NdJ("ngModelChange",function(o){return i.showTaskModel=o}),t.YNc(52,vt,1,4,"app-add-associate",32),t.qZA(),t.TgZ(53,"Modal",31),t.NdJ("ngModelChange",function(o){return i.showMilestoneModel=o}),t.YNc(54,Tt,1,4,"app-add-associate",32),t.qZA()()),2&e){const s=t.MAs(5),o=t.MAs(7),c=t.MAs(29),p=t.MAs(39),_=t.MAs(42),h=t.MAs(45),g=t.MAs(48);t.xp6(1),t.Q6J("icon",s)("mode","light")("rightContent",o),t.xp6(1),t.hij(" ",t.lcZ(3,42,i.entity)," "),t.xp6(9),t.Q6J("ngIf",i.createdUser),t.xp6(2),t.Q6J("ngIf",!i.canUserEdit()),t.xp6(1),t.Q6J("ngIf",i.canUserEdit()),t.xp6(2),t.Q6J("ngIf","request"===i.entity),t.xp6(1),t.Q6J("ngIf","task"===i.entity),t.xp6(1),t.Q6J("ngIf","milestone"===i.entity),t.xp6(3),t.hij(" Last Updated . ",t.xi3(22,44,i.entityObj.updatedAt,"h:mm a . MMM d, y")," "),t.xp6(3),t.Q6J("ngIf",i.canUserEdit()),t.xp6(4),t.Q6J("tintColor","#E9EDFF")("values",i.getSegmentValues()),t.xp6(3),t.Q6J("ngIf",i.canUserEdit()),t.xp6(1),t.Q6J("ngIf","request"===i.entity&&i.request.associatedTasks&&0===c.selectedIndex),t.xp6(1),t.Q6J("ngIf","task"===i.entity&&i.task.requests&&0===c.selectedIndex),t.xp6(1),t.Q6J("ngIf","task"===i.entity&&i.task.associatedMilestone&&1===c.selectedIndex),t.xp6(1),t.Q6J("ngIf","milestone"===i.entity&&i.milestone.tasks&&0===c.selectedIndex),t.xp6(1),t.Q6J("activeTab",i.global.selectedIndex)("tintColor","var(--accent-text-color)")("unselectedTintColor","var(--extra-dim-text-color)"),t.xp6(1),t.Q6J("icon",p)("selectedIcon",p),t.xp6(3),t.Q6J("icon",_)("selectedIcon",_),t.xp6(3),t.Q6J("icon",h)("selectedIcon",h),t.xp6(3),t.Q6J("icon",g)("selectedIcon",g),t.xp6(3),t.Q6J("ngModel",i.showRequestModel)("transparent",!0)("maskClosable",!0),t.xp6(1),t.Q6J("ngIf",i.showRequestModel),t.xp6(1),t.Q6J("ngModel",i.showTaskModel)("transparent",!0)("maskClosable",!0),t.xp6(1),t.Q6J("ngIf",i.showTaskModel),t.xp6(1),t.Q6J("ngModel",i.showMilestoneModel)("transparent",!0)("maskClosable",!0),t.xp6(1),t.Q6J("ngIf",i.showMilestoneModel)}},directives:[l.w5,I.z,d.O5,l.r0,d.PC,l.yG,U.J,N.k1,P.I,v.wA,v.cm,l.d5,d.sg,l.$n,T.T,M.U,q.T,l.pu,l._i,l.zS,E.JJ,E.On,z],pipes:[d.rS,d.uU,$.I,d.Ov],styles:[".new-entity-container[_ngcontent-%COMP%]{width:100%;height:100%;background-color:transparent;display:flex;flex-direction:column}.nec-body[_ngcontent-%COMP%]{width:100%;flex:1;overflow:scroll}.home-tab-bar[_ngcontent-%COMP%]{flex:1}.nec-loader[_ngcontent-%COMP%]{height:30%}.nec-modal-header[_ngcontent-%COMP%], .second-element[_ngcontent-%COMP%]{padding:12px;display:flex;min-height:45px;max-height:50px;justify-content:space-between;align-items:center}.nec-modal-body[_ngcontent-%COMP%]{overflow-y:auto}.nec-modal-footer[_ngcontent-%COMP%] > .second-element[_ngcontent-%COMP%]{border-top:1px solid var(--border-bottom)}.nec-modal-div[_ngcontent-%COMP%]{display:flex;align-items:center}.arrow-span[_ngcontent-%COMP%]{margin:0 12px;color:gray}.nec-close-btn[_ngcontent-%COMP%]{color:gray}.nec-post-btn[_ngcontent-%COMP%]{font-size:1rem;padding:8px 12px;border-radius:16px}.first-element[_ngcontent-%COMP%]{display:flex;padding-top:12px;padding-bottom:12px;column-gap:16px;row-gap:16px;flex-wrap:wrap}.req-list-item-header[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:space-between;align-items:center;align-content:center}.rlth-time[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%!important}.rlth-time-icon[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin-right:6px;text-align:center;display:flex;justify-content:center;align-items:center}.rlth-time-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;margin:auto}.rlth-time-icon-min[_ngcontent-%COMP%]{width:11px;height:11px}.rlth-time-icon-space[_ngcontent-%COMP%]{margin-left:8px}.rlth-time-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;max-width:100%;font-size:1rem;margin-left:6px}.rlth-time-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1}.rlth-time-text[_ngcontent-%COMP%]{font-size:1rem;text-transform:capitalize}.rlth-time-user[_ngcontent-%COMP%]{font-size:.9rem;font-weight:350;color:var(--dim-text-color);text-align:center;display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;max-width:calc(90vw - 50px)}.rlth-time-user-min[_ngcontent-%COMP%]{font-size:.7rem}.rlth-time-user-black[_ngcontent-%COMP%]{color:#000!important}.req-list-item-footer[_ngcontent-%COMP%]{flex:1;padding-top:6px;display:flex;justify-content:space-between;align-items:center}.add-associate-img[_ngcontent-%COMP%]{width:12px;height:12px;margin:auto}.add-associate-btn[_ngcontent-%COMP%]{display:flex;align-items:center;padding:6px 16px;background-color:var(--accent-bg-color);color:var(--accent-text-color);border-radius:5px}.add-associate-text[_ngcontent-%COMP%]{margin-left:6px}.del-associate-img[_ngcontent-%COMP%]{width:12px;height:12px;margin:auto}.nec-model-request[_ngcontent-%COMP%]{width:100%;padding:12px 3px;display:flex;justify-content:space-between;align-items:center;font-size:1rem;font-weight:350}.task-list-item[_ngcontent-%COMP%]   .rlth-minsize[_ngcontent-%COMP%]{background-color:var(--dim-bg-color)}.nec-model-entity[_ngcontent-%COMP%]{padding:16px}.nec-model-entity-container[_ngcontent-%COMP%]{padding:8px 16px 16px}.associate-div-segmented[_ngcontent-%COMP%]{padding:16px 16px 8px;display:flex;justify-content:space-between}"]}),n})();var qt=r(5268);const Et=[{path:":entity/:id",component:Mt}];let At=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[qt.m,m.Bz.forChild(Et)]]}),n})()}}]);