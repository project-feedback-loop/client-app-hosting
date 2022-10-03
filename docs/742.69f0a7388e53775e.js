"use strict";(self.webpackChunkfeedback_loop_client=self.webpackChunkfeedback_loop_client||[]).push([[742],{5742:(re,m,a)=>{a.r(m),a.d(m,{RequestModule:()=>te});var p=a(9808),l=a(2626),d=a(9830),e=a(5e3),g=a(6335),q=a(3616),c=a(9352),h=a(4817),v=a(7797);function w(n,i){1&n&&(e.TgZ(0,"span",7),e._uU(1," arrow_back "),e.qZA())}function T(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().submitRequest()}),e._uU(1,"Submit"),e.qZA()}2&n&&e.Q6J("type","primary")("inline",!0)("size","small")}let y=(()=>{class n{constructor(t,s,o,r){this.requestService=t,this.router=s,this.activeRoute=o,this.authQuery=r,this.request={},this.rawContent="",o.queryParams.subscribe(_=>{_.id&&(this.selectedTask=_.id)})}ngOnInit(){}submitRequest(){this.jsonContent&&(this.request={content:this.jsonContent,rawContent:this.rawContent,category:d.MM.Issue,severity:d.Ly.Minor,status:d.gE.Open,associatedTask:this.selectedTask?this.selectedTask:null,createdByUser:this.authQuery.user.id},this.requestService.addRequest(this.request)),this.router.navigate(["/"])}getEditorContent(t){this.jsonContent=t.json,this.rawContent=t.raw}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.P),e.Y36(l.F0),e.Y36(l.gz),e.Y36(q.i))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-req"]],inputs:{request:"request"},decls:10,vars:5,consts:[[1,"new-req-body"],[3,"icon","mode","rightContent"],["nav_bar_arrow",""],["nav_bar_submit",""],[1,"new-req-container"],[3,"size"],[3,"jsonContent","content"],["appBackButton","",1,"material-symbols-rounded","button-icon"],["Button","",1,"button-icon",2,"margin-right","4px",3,"type","inline","size","click"]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0)(1,"Navbar",1),e._uU(2," New Request "),e.qZA(),e.YNc(3,w,2,0,"ng-template",null,2,e.W1O),e.YNc(5,T,2,3,"ng-template",null,3,e.W1O),e.TgZ(7,"div",4)(8,"WingBlank",5)(9,"markdown-editor",6),e.NdJ("content",function(r){return s.getEditorContent(r)}),e.qZA()()()()),2&t){const o=e.MAs(4),r=e.MAs(6);e.xp6(1),e.Q6J("icon",o)("mode","light")("rightContent",r),e.xp6(7),e.Q6J("size","md"),e.xp6(1),e.Q6J("jsonContent",s.request.content)}},directives:[c.w5,h.z,c.r0,c.gx,v.k1],styles:[".new-req-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%;overflow:hidden}Navbar[_ngcontent-%COMP%]{flex:1;min-height:50px;max-height:50px;z-index:10}markdown-editor[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 60px)}.new-req-container[_ngcontent-%COMP%]{padding-top:10px}"]}),n})();var Z=a(5861),M=a(7465),A=a(6101),k=a(9565),R=a(6832),b=a(6324),z=a(4419),J=a(4112),f=a(6718),C=a(2382),Q=a(7410),U=a(53);const N=["viewContent"];function V(n,i){1&n&&(e.TgZ(0,"span",10),e._uU(1," arrow_back "),e.qZA())}function O(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",13),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).toggleButtonValue()}),e._uU(1,"Edit"),e.qZA()}2&n&&e.Q6J("type","primary")("inline",!0)("size","small")}function I(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",14),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).updateRequest()}),e._uU(1,"Submit"),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("type","primary")("disabled",t.compareRequest())("inline",!0)("size","small")}}function S(n,i){if(1&n&&(e.YNc(0,O,2,3,"div",11),e.YNc(1,I,2,4,"div",12)),2&n){const t=e.oxw();e.Q6J("ngIf",!t.editMode),e.xp6(1),e.Q6J("ngIf",t.editMode)}}function Y(n,i){if(1&n&&e._UZ(0,"div",27),2&n){const t=e.oxw(2);e.Q6J("MarkdownContentParser",t.request.content)}}function j(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"markdown-editor",28,29),e.NdJ("jsonContentChange",function(o){return e.CHM(t),e.oxw(2).request.content=o}),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("jsonContent",t.request.content)}}function P(n,i){if(1&n&&(e.TgZ(0,"div",16)(1,"span",17)(2,"span",18),e._uU(3," dataset "),e.qZA(),e._uU(4," Properties "),e.qZA(),e.TgZ(5,"span",19),e._uU(6,"Status"),e.qZA(),e.TgZ(7,"span",20)(8,"span"),e._uU(9),e.qZA()(),e.TgZ(10,"span",19),e._uU(11,"Category"),e.qZA(),e.TgZ(12,"span",20)(13,"span"),e._uU(14),e.qZA()(),e.TgZ(15,"span",19),e._uU(16,"Severity"),e.qZA(),e.TgZ(17,"span",20)(18,"span"),e._uU(19),e.qZA()()()),2&n){const t=e.oxw(2);e.xp6(9),e.Oqu(t.request.status),e.xp6(5),e.Oqu(t.request.category),e.xp6(5),e.Oqu(t.request.severity)}}function B(n,i){if(1&n&&e._UZ(0,"nz-option",34),2&n){const t=i.$implicit;e.Q6J("nzValue",t)("nzLabel",t)}}function E(n,i){if(1&n&&e._UZ(0,"nz-option",34),2&n){const t=i.$implicit;e.Q6J("nzValue",t)("nzLabel",t)}}function F(n,i){if(1&n&&e._UZ(0,"nz-option",34),2&n){const t=i.$implicit;e.Q6J("nzValue",t)("nzLabel",t)}}function L(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",16)(1,"span",17)(2,"span",18),e._uU(3," dataset "),e.qZA(),e._uU(4," Properties "),e.qZA(),e.TgZ(5,"div",30)(6,"div",31)(7,"span",19),e._uU(8,"Status"),e.qZA(),e.TgZ(9,"div",20)(10,"nz-select",32),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(2).request.status=o}),e.YNc(11,B,1,2,"nz-option",33),e.qZA()()(),e.TgZ(12,"div",31)(13,"span",19),e._uU(14,"Category"),e.qZA(),e.TgZ(15,"div",20)(16,"nz-select",32),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(2).request.category=o}),e.YNc(17,E,1,2,"nz-option",33),e.qZA()()(),e.TgZ(18,"div",31)(19,"span",19),e._uU(20,"Severity"),e.qZA(),e.TgZ(21,"div",20)(22,"nz-select",32),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(2).request.severity=o}),e.YNc(23,F,1,2,"nz-option",33),e.qZA()()()()()}if(2&n){const t=e.oxw(2);e.xp6(10),e.Q6J("ngModel",t.request.status),e.xp6(1),e.Q6J("ngForOf",t.statusArray),e.xp6(5),e.Q6J("ngModel",t.request.category),e.xp6(1),e.Q6J("ngForOf",t.categoryArray),e.xp6(5),e.Q6J("ngModel",t.request.severity),e.xp6(1),e.Q6J("ngForOf",t.severityArray)}}function H(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",13),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).openModal()}),e._uU(1,"Add"),e.qZA()}2&n&&e.Q6J("type","primary")("inline",!0)("size","small")}function W(n,i){if(1&n&&e._UZ(0,"app-task-list-item",35),2&n){const t=e.oxw(2);e.Q6J("flTask",t.associatedTask)("size",t.min)}}function G(n,i){1&n&&(e.TgZ(0,"span"),e._uU(1,"No Data"),e.qZA())}function D(n,i){if(1&n&&(e.TgZ(0,"div",15)(1,"div",16)(2,"span",17)(3,"span",18),e._uU(4," info "),e.qZA(),e._uU(5," General Information "),e.qZA(),e.TgZ(6,"span",19),e._uU(7,"Posted By"),e.qZA(),e.TgZ(8,"span",20)(9,"span"),e._uU(10),e.qZA()(),e.TgZ(11,"span",19),e._uU(12,"Created At"),e.qZA(),e.TgZ(13,"span",20)(14,"span"),e._uU(15),e.ALo(16,"date"),e.qZA()()(),e.TgZ(17,"div",16)(18,"div",21)(19,"span",17)(20,"span",18),e._uU(21," description "),e.qZA(),e._uU(22," Description "),e.qZA()(),e.YNc(23,Y,1,1,"div",22),e.YNc(24,j,2,1,"markdown-editor",23),e.qZA(),e.YNc(25,P,20,3,"div",24),e.YNc(26,L,24,6,"div",24),e.TgZ(27,"div",16)(28,"div",21)(29,"span",17)(30,"span",18),e._uU(31," task "),e.qZA(),e._uU(32," Associated Task "),e.qZA(),e.YNc(33,H,2,3,"div",11),e.qZA(),e.TgZ(34,"div",20),e.YNc(35,W,1,2,"app-task-list-item",25),e.YNc(36,G,2,0,"span",26),e.qZA()()()),2&n){const t=e.oxw();e.xp6(10),e.Oqu(t.request.userEmail),e.xp6(5),e.Oqu(e.lcZ(16,9,t.request.createdAt)),e.xp6(8),e.Q6J("ngIf",!t.editMode&&t.request.content),e.xp6(1),e.Q6J("ngIf",t.editMode),e.xp6(1),e.Q6J("ngIf",!t.editMode),e.xp6(1),e.Q6J("ngIf",t.editMode),e.xp6(7),e.Q6J("ngIf",t.editMode),e.xp6(2),e.Q6J("ngIf",null!=t.taskQuery.getEntity(t.request.associatedTask)),e.xp6(1),e.Q6J("ngIf",null==t.taskQuery.getEntity(t.request.associatedTask))}}function $(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"app-add-associate",36),e.NdJ("closed",function(){return e.CHM(t),e.oxw().closeModal()})("selectedList",function(o){return e.CHM(t),e.oxw().getSelectedTask(o)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("sourceId",t.getSourceId())("multiSelect",!1)("preselect",t.getAssociatedTaskArray())}}const X=[{path:"new",component:y},{path:"view/:id",component:(()=>{class n{constructor(t,s,o,r,_,ne,ie,se,oe,ae){this.route=t,this.global=s,this.taskService=o,this.router=r,this.navigation=_,this.requestQuery=ne,this.requestService=ie,this.userQuery=se,this.taskQuery=oe,this.authQuery=ae,this.editMode=!1,this.buttonValue="Edit",this.title="Request",this.statusArray=Object.values(d.gE),this.categoryArray=Object.values(d.MM),this.severityArray=Object.values(d.Ly),this.moduleArray=Object.values(d.Fz),this.showModal=!1,this.min="min",this.requestUpdate=!1,this.showLoader=!0,this.associatedTask={},this.route.params.subscribe(u=>{u.id&&(this.requestId=u.id,this.reqSubscription=this.requestQuery.selectEntity(u.id).subscribe(x=>{null!=x&&(this.request=Object.assign({},x),this.oldRequest=Object.assign({},this.request),this.showLoader=!1,this.getAssociatedTask())}))}),this.route.queryParams.subscribe(u=>{console.log("Calling in QueryParams"),this.requestService.getOne(this.requestId),this.editMode=!!u.edit&&u.edit})}updateRequest(){var t=this;return(0,Z.Z)(function*(){t.requestUpdate||(null!=t.request&&null!=t.request.id&&(null==t.request.associatedTask&&(t.request.associatedTask=null),t.request.createdByUser=t.authQuery.user.id,t.requestService.updateRequest(t.request.id,t.request)),t.navigation.back())})()}ngOnInit(){}ngAfterViewInit(){}updateContentView(){}toggleButtonValue(){this.router.navigate([this.router.url],{queryParams:{edit:!0}}),setTimeout(()=>{this.editMode||this.updateContentView()},1)}openModal(){this.showModal=!0}closeModal(){this.showModal=!1}getSelectedTask(t){var s;(null===(s=this.request)||void 0===s?void 0:s.id)&&(this.request.associatedTask=t)}compareRequest(){return!!this.request&&(this.requestUpdate=JSON.stringify(this.request)===JSON.stringify(this.oldRequest),this.requestUpdate)}getAssociatedTask(){null!=this.taskSubscription&&this.taskSubscription.unsubscribe(),this.request.associatedTask&&this.taskService.getOne(this.request.associatedTask),this.taskSubscription=this.taskQuery.selectEntity(this.request.associatedTask).subscribe(t=>{t&&(this.associatedTask=t)})}getSourceId(){var t;return null===(t=this.request)||void 0===t?void 0:t.id}getAssociatedTaskArray(){var t;return[(null===(t=this.request)||void 0===t?void 0:t.associatedTask)?this.request.associatedTask:-1]}ngOnDestroy(){this.reqSubscription.unsubscribe(),this.taskSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.gz),e.Y36(M.U),e.Y36(A.Y),e.Y36(l.F0),e.Y36(k.f),e.Y36(R.Z),e.Y36(g.P),e.Y36(b.o),e.Y36(z.R),e.Y36(q.i))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-view-req"]],viewQuery:function(t,s){if(1&t&&e.Gf(N,5),2&t){let o;e.iGM(o=e.CRH())&&(s.viewContent=o.first)}},decls:13,vars:13,consts:[[1,"new-req-body"],[3,"icon","mode","rightContent"],["nav_bar_arrow",""],["nav_bar_submit",""],[1,"new-req-container"],[3,"size"],["class","content_viewer",4,"ngIf"],[3,"toast","text","animating"],[1,"modal",3,"ngModel","transparent","maskClosable","ngModelChange","onClose"],["type","task",3,"sourceId","multiSelect","preselect","closed","selectedList",4,"ngIf"],["appBackButton","",1,"material-symbols-rounded","button-icon"],["Button","","size","small","class","button-icon timeline-button",3,"type","inline","size","click",4,"ngIf"],["Button","","class","button-icon","style","margin-right: 4px",3,"type","disabled","inline","size","click",4,"ngIf"],["Button","","size","small",1,"button-icon","timeline-button",3,"type","inline","size","click"],["Button","",1,"button-icon",2,"margin-right","4px",3,"type","disabled","inline","size","click"],[1,"content_viewer"],[1,"timeline-div-container"],[1,"timeline-heading"],[1,"material-symbols-rounded"],[1,"timeline-title-span"],[1,"timeline-sub-container"],[1,"timeline-options-container"],["class","timeline-sub-container desc-font",3,"MarkdownContentParser",4,"ngIf"],["class","",3,"jsonContent","jsonContentChange",4,"ngIf"],["class","timeline-div-container",4,"ngIf"],[3,"flTask","size",4,"ngIf"],[4,"ngIf"],[1,"timeline-sub-container","desc-font",3,"MarkdownContentParser"],[1,"",3,"jsonContent","jsonContentChange"],["markdownEditor",""],[1,"timeline-prop-container"],[1,"timeline-props-item"],["nzSize","small",1,"timeline-options-select",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"],[3,"flTask","size"],["type","task",3,"sourceId","multiSelect","preselect","closed","selectedList"]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0)(1,"Navbar",1),e._uU(2),e.qZA(),e.YNc(3,V,2,0,"ng-template",null,2,e.W1O),e.YNc(5,S,2,2,"ng-template",null,3,e.W1O),e.TgZ(7,"div",4),e._UZ(8,"WhiteSpace",5),e.YNc(9,D,37,11,"div",6),e._UZ(10,"ActivityIndicator",7),e.qZA(),e.TgZ(11,"Modal",8),e.NdJ("ngModelChange",function(r){return s.showModal=r})("onClose",function(){return s.closeModal()}),e.YNc(12,$,1,3,"app-add-associate",9),e.qZA()()),2&t){const o=e.MAs(4),r=e.MAs(6);e.xp6(1),e.Q6J("icon",o)("mode","light")("rightContent",r),e.xp6(1),e.hij(" ",s.title," "),e.xp6(6),e.Q6J("size","md"),e.xp6(1),e.Q6J("ngIf",!s.showLoader),e.xp6(1),e.Q6J("toast",!0)("text","Loading Request")("animating",s.showLoader),e.xp6(1),e.Q6J("ngModel",s.showModal)("transparent",!0)("maskClosable",!0),e.xp6(1),e.Q6J("ngIf",s.showModal)}},directives:[c.w5,h.z,p.O5,c.r0,c.yG,J.J,v.k1,f.Vq,C.JJ,C.On,p.sg,f.Ip,Q.T,c.dA,c.zS,U.W],pipes:[p.uU],styles:[".new-req-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%;width:100%;overflow:hidden}Navbar[_ngcontent-%COMP%]{flex:1;min-height:50px;max-height:50px;z-index:10}.content_viewer[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 50px);padding:6px;background-color:var(--dim-bg-color)}.new-req-container[_ngcontent-%COMP%]{overflow:scroll;flex:1;width:100%;height:calc(100% - 50px)}"]}),n})()}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.Bz.forChild(X)],l.Bz]}),n})();var ee=a(3926);let te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,K,ee.m]]}),n})()}}]);