"use strict";(self.webpackChunkfeedback_loop_client=self.webpackChunkfeedback_loop_client||[]).push([[592],{6335:(l,_,a)=>{a.d(_,{P:()=>c});var h=a(914),o=a(5e3),u=a(6580),n=a(3616);let c=(()=>{class r extends h.Hb{constructor(t,s){super(t),this.store=t,this.authQuery=s,this.appConfig={headers:{Authorization:`Bearer ${this.authQuery.jwtToken}`}},this.getall(),this.authQuery.$jwtToken.subscribe(e=>this.appConfig={headers:{Authorization:`Bearer ${e}`}})}getall(){return this.get({params:{populate:"*"},headers:this.appConfig.headers}).subscribe()}getOne(t){return this.get(t,{params:{populate:"*"},headers:this.appConfig.headers}).subscribe()}addRequest(t){return this.add(Object.assign(Object.assign({},t),{data:t}),this.appConfig).subscribe()}updateRequest(t,s){return this.update(t,{data:{content:s.content,rawContent:s.rawContent,category:s.category,severity:s.severity,status:s.status,associatedTask:s.associatedTask,createdByUser:s.createdByUser}},this.appConfig).subscribe()}}return r.\u0275fac=function(t){return new(t||r)(o.LFG(u.y),o.LFG(n.i))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},622:(l,_,a)=>{a.d(_,{e:()=>d});var h=a(8505),o=a(2340),u=a(8025),n=a(5e3),c=a(4277),r=a(520);let d=(()=>{class t{constructor(e,i){this.authStore=e,this.http=i;let p=window.sessionStorage.getItem("AkitaStores");p&&this.get(JSON.parse(p).auth).subscribe()}get(e){return this.http.get(`${o.N.strapi_server}/api/auth/${o.N.strapi_auth_provider}/callback`,{params:{access_token:e}}).pipe((0,h.b)(i=>{i.accessToken=e,this.authStore.update(i)}))}add(e){this.authStore.add(e)}update(e,i){this.authStore.update(e,i)}remove(e){this.authStore.remove(e)}reset(){this.authStore.update((0,u.l)({})),window.sessionStorage.clear()}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(c.C),n.LFG(r.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);