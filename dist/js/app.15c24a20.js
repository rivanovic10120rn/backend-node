(function(e){function t(t){for(var n,r,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0695":function(e,t,a){"use strict";a("ec4e")},1080:function(e,t,a){},1672:function(e,t,a){},"1dc7":function(e,t,a){},2124:function(e,t,a){},3108:function(e,t,a){"use strict";a("5031")},"35a3":function(e,t,a){"use strict";a("73ff")},"403d":function(e,t,a){},4101:function(e,t,a){},"44e2":function(e,t,a){"use strict";a("a709")},"457f":function(e,t,a){"use strict";a("9298")},5031:function(e,t,a){},"51b8":function(e,t,a){"use strict";a("ad3d")},5403:function(e,t,a){},5538:function(e,t,a){"use strict";a("9c3b")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",[a("b-navbar",{attrs:{id:"nav",toggleable:"lg",type:"dark"}},[a("b-navbar-brand",{attrs:{to:"/"}},[a("b-icon-droplet-fill",{attrs:{variant:"danger"}}),e._v(" 6th Company")],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/squads"}},[e._v("Squads")]),a("b-nav-item",{attrs:{to:"/soldiers"}},[e._v("Soldiers")]),a("b-nav-item",{attrs:{to:"/loadouts"}},[e._v("Loadouts")]),a("b-nav-item",{attrs:{to:"/missions"}},[e._v("Missions")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[e.token?a("b-nav-item",{on:{click:function(t){return e.logout()}}},[e._v("Log Out")]):a("b-nav-item",{attrs:{to:"/login"}},[e._v("Log In")])],1)],1)],1)],1),a("router-view")],1)},s=[],r=a("5530"),i=a("2f62"),c={name:"App",computed:Object(r["a"])({},Object(i["d"])(["token"])),mounted:function(){localStorage.token&&this.setToken(localStorage.token)},methods:Object(r["a"])(Object(r["a"])({},Object(i["c"])(["removeToken","setToken"])),{},{logout:function(){this.removeToken()}})},u=c,l=(a("034f"),a("2877")),d=Object(l["a"])(u,o,s,!1,null,null,null),m=d.exports,f=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Header",{attrs:{subtitle:"Overview"}}),a("img",{attrs:{alt:"chapter banner held",width:"1100",src:"https://cdnb.artstation.com/p/assets/images/images/034/657/147/4k/klaher-baklaher-bloodangels2.jpg?1612876829"}})],1)},h=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"naslov"},[a("img",{attrs:{alt:"horizontal drapery",width:"850",src:"https://www.warhammer-community.com/wp-content/uploads/2019/11/224cf832.jpg"}}),a("h1",[e._v(" The Blood Angels 6th Company 'Eternals'")]),e.subtitle?a("h3",[a("b",[e._v(" "+e._s(e.subtitle)+" ")])]):e._e()])},g=[],v={name:"Header",props:{subtitle:String}},S=v,_=(a("7a47"),Object(l["a"])(S,b,g,!1,null,"f79020c0",null)),j=_.exports,O={name:"Home",components:{Header:j}},q=O,w=(a("0695"),Object(l["a"])(q,p,h,!1,null,"bd01b17a",null)),k=w.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{subtitle:"Squads"}}),a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"column"},[a("SquadList")],1)])],1)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column"},[a("img",{attrs:{alt:"horizontal-drapery",width:"800",src:"https://pbs.twimg.com/media/EnxljX5W8AACAW2.jpg"}})])}],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-pagination",{staticClass:"customPagination",attrs:{"total-rows":e.squads.length,"per-page":e.perPage,"aria-controls":"squad-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),a("b-table",{attrs:{id:"squad-table",bordered:"","head-variant":"dark",hover:"",fixed:"",items:e.squads,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}}),a("b-pagination",{attrs:{"total-rows":e.squads.length,"per-page":e.perPage,"aria-controls":"squad-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},x=[],I={name:"SquadList",data:function(){return{fields:["name","type","status"],currentPage:1,perPage:20}},mounted:function(){this.fetchSquads()},computed:Object(r["a"])({},Object(i["d"])(["squads"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["fetchSquads"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleSquad",params:{id:e.id}})}})},$=I,B=(a("dbad"),Object(l["a"])($,C,x,!1,null,"63f75527",null)),L=B.exports,M={name:"Squads",components:{Header:j,SquadList:L},data:function(){return{subtitle:""}}},D=M,W=(a("f5e3"),Object(l["a"])(D,y,P,!1,null,"f99c6de0",null)),E=W.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{subtitle:"Soldiers"}}),a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"column"},[a("SoldierList")],1)])],1)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column"},[a("img",{attrs:{alt:"horizontal-drapery",width:"550",src:"https://warhammerart.com/wp-content/uploads/2018/01/Blood-Angels-Command-Company.jpg"}})])}],H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-pagination",{attrs:{"total-rows":e.soldiers.length,"per-page":e.perPage,"aria-controls":"soldiers-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),a("b-table",{attrs:{id:"soldiers-table",bordered:"","head-variant":"dark",hover:"",fixed:"",items:e.soldiers,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}}),a("b-pagination",{attrs:{"total-rows":e.soldiers.length,"per-page":e.perPage,"aria-controls":"soldiers-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},z=[],N={name:"SoldierList",data:function(){return{fields:["name","tag","role","status"],currentPage:1,perPage:20}},mounted:function(){this.fetchSoldiers()},computed:Object(r["a"])({},Object(i["d"])(["soldiers"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["fetchSoldiers"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleSoldier",params:{id:e.id}})}})},G=N,J=(a("3108"),Object(l["a"])(G,H,z,!1,null,"667927f2",null)),R=J.exports,F={name:"Soldiers",components:{Header:j,SoldierList:R},data:function(){return{subtitle:""}}},V=F,X=(a("ec3c"),Object(l["a"])(V,T,A,!1,null,"714e38ba",null)),Y=X.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{subtitle:"Loadouts"}}),a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"column"},[a("LoadoutList")],1)])],1)},Q=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column"},[a("img",{attrs:{alt:"horizontal-drapery",src:"https://i.pinimg.com/736x/a7/c3/4b/a7c34b1489e0d7a5a463f3e73ebe069f.jpg"}})])}],U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-pagination",{attrs:{"total-rows":e.loadouts.length,"per-page":e.perPage,"aria-controls":"loadouts-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),a("b-table",{attrs:{id:"loadouts-table",bordered:"","head-variant":"dark",hover:"",fixed:"",items:e.loadouts,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"cell(hasGrenades)",fn:function(e){return[e.value?a("b-icon",{attrs:{icon:"check-circle",variant:"success",scale:"1"}}):a("b-icon",{attrs:{icon:"x-circle",variant:"danger",scale:"1"}})]}}])}),a("b-pagination",{attrs:{"total-rows":e.loadouts.length,"per-page":e.perPage,"aria-controls":"loadouts-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},Z=[],ee={name:"LoadoutList",data:function(){return{fields:["type","rangedWeapon","meleeWeapon","armourType",{key:"hasGrenades",tdClass:"align-middle"}],currentPage:1,perPage:20}},mounted:function(){this.fetchLoadouts()},computed:Object(r["a"])({},Object(i["d"])(["loadouts"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["fetchLoadouts"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleLoadout",params:{id:e.id}})}})},te=ee,ae=(a("621f"),Object(l["a"])(te,U,Z,!1,null,"5567f07e",null)),ne=ae.exports,oe={name:"Loadouts",components:{Header:j,LoadoutList:ne},data:function(){return{subtitle:""}}},se=oe,re=(a("bb14"),Object(l["a"])(se,K,Q,!1,null,"aca9dbb8",null)),ie=re.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{subtitle:"Missions"}}),a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"column"},[a("MissionList")],1)])],1)},ue=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column"},[a("img",{attrs:{alt:"horizontal-drapery",width:"625",src:"https://warofsigmarus.s3.amazonaws.com/uploads/blogging/picture1/4964/qmJYVuFh36arvtqw.jpg"}})])}],le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-pagination",{attrs:{"total-rows":e.missions.length,"per-page":e.perPage,"aria-controls":"missions-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),a("b-table",{attrs:{id:"missions-table",bordered:"","head-variant":"dark",hover:"",fixed:"",items:e.missions,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"cell(hasGrenades)",fn:function(e){return[e.value?a("b-icon",{attrs:{icon:"check-circle",variant:"success",scale:"1"}}):a("b-icon",{attrs:{icon:"x-circle",variant:"danger",scale:"1"}})]}}])}),a("b-pagination",{attrs:{"total-rows":e.missions.length,"per-page":e.perPage,"aria-controls":"missions-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},de=[],me={name:"MissionsList",data:function(){return{fields:["description","location",{key:"assignedSquad.name",label:"Assigned Squad"},"missionStatus"],currentPage:1,perPage:10}},mounted:function(){this.fetchMissions()},computed:Object(r["a"])({},Object(i["d"])(["missions"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["fetchMissions"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleMission",params:{id:e.id}})}})},fe=me,pe=(a("35a3"),Object(l["a"])(fe,le,de,!1,null,"36985dfa",null)),he=pe.exports,be={name:"Missions",components:{Header:j,MissionList:he}},ge=be,ve=(a("8189"),Object(l["a"])(ge,ce,ue,!1,null,"ad09c4fe",null)),Se=ve.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{subtitle:e.squad.name}}),a("Squadmates"),a("AssignedMissions"),a("img",{attrs:{alt:"generic-shooting-pose",width:"850",src:"https://www.warhammer-community.com/wp-content/uploads/2020/07/Eq57vMH2uu3HpA0W.jpg"}})],1)},je=[],Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{attrs:{id:"squadmates-table",bordered:"","head-variant":"dark",hover:"",fixed:"",items:e.soldiers,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}})],1)},qe=[],we={name:"Squadmates",data:function(){return{fields:["name","tag","role","status"],currentPage:1,perPage:10}},mounted:function(){this.fetchSoldiersBySquadID(this.$route.params.id)},computed:Object(r["a"])({},Object(i["d"])(["soldiers"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["fetchSoldiersBySquadID"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleSoldier",params:{id:e.id}})}})},ke=we,ye=(a("5b96"),Object(l["a"])(ke,Oe,qe,!1,null,"cd187dd8",null)),Pe=ye.exports,Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{attrs:{id:"assigned-missions-table",bordered:"","head-variant":"dark",hover:"",fixed:"",items:e.missions,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}})],1)},xe=[],Ie={name:"AssignedMissions",data:function(){return{fields:["description","location",{key:"assignedSquad.name",label:"Assigned Squad"},"missionStatus"],currentPage:1,perPage:10}},mounted:function(){this.fetchMissionsBySquadID(this.$route.params.id)},computed:Object(r["a"])({},Object(i["d"])(["missions"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["fetchMissionsBySquadID"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleMission",params:{id:e.id}})}})},$e=Ie,Be=(a("ba40"),Object(l["a"])($e,Ce,xe,!1,null,"d7244024",null)),Le=Be.exports,Me={name:"SingleSquad",components:{Header:j,Squadmates:Pe,AssignedMissions:Le},data:function(){return{subtitle:""}},computed:Object(r["a"])({},Object(i["d"])(["squad"])),methods:Object(r["a"])({},Object(i["b"])(["fetchSquadByID"])),mounted:function(){this.fetchSquadByID(this.$route.params.id)}},De=Me,We=Object(l["a"])(De,_e,je,!1,null,"5603361a",null),Ee=We.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{subtitle:e.soldier.name}}),a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"column"},[a("SoldierInfo",{attrs:{tag:e.soldier.tag,role:e.soldier.role,status:e.soldier.status,rangedWeapon:e.soldier.equippedWith.rangedWeapon,meleeWeapon:e.soldier.equippedWith.meleeWeapon,armourType:e.soldier.equippedWith.armourType,squadName:e.soldier.squad.name}}),e._v(" Ovde ce ici lista svih poruka ")],1)])],1)},Ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column"},[a("img",{attrs:{alt:"tactical marine",width:"850",src:"https://www.asgard.gg/wp-content/uploads/2018/12/332_573355124bf35.jpg"}})])}],He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-sold"},[e.tag?a("h5",[a("b",[e._v("Soldier Tag:")]),e._v(" "+e._s(e.tag))]):e._e(),e.role?a("h5",[a("b",[e._v("Soldier Role:")]),e._v(" "+e._s(e.role))]):e._e(),e.status?a("h5",[a("b",[e._v("Soldier Status:")]),e._v(" "+e._s(e.status))]):e._e(),e.rangedWeapon?a("h5",[a("b",[e._v("Soldier's Ranged Weapons:")]),e._v(" "+e._s(e.rangedWeapon))]):e._e(),e.meleeWeapon?a("h5",[a("b",[e._v("Soldier's Melee Weapons:")]),e._v(" "+e._s(e.meleeWeapon))]):e._e(),e.armourType?a("h5",[a("b",[e._v("Soldier's Armour:")]),e._v(" "+e._s(e.armourType))]):e._e(),e.squadName?a("h5",[a("b",[e._v("Soldier's Squad:")]),e._v(" "+e._s(e.squadName))]):e._e()])},ze=[],Ne={name:"SoldierInfo",props:{tag:String,role:String,status:String,rangedWeapon:String,meleeWeapon:String,armourType:String,squadName:String}},Ge=Ne,Je=(a("c3f5"),Object(l["a"])(Ge,He,ze,!1,null,"082bbe45",null)),Re=Je.exports,Fe={name:"SingleSoldier",components:{Header:j,SoldierInfo:Re},computed:Object(r["a"])({},Object(i["d"])(["soldier"])),data:function(){return{subtitle:"",fields:["tag","role","status"],tag:"",role:"",status:"",rangedWeapon:"",meleeWeapon:"",armourType:"",squadName:""}},methods:Object(r["a"])({},Object(i["b"])(["fetchSoldierByID"])),mounted:function(){this.fetchSoldierByID(this.$route.params.id)}},Ve=Fe,Xe=(a("c41d"),Object(l["a"])(Ve,Te,Ae,!1,null,"4ce749c2",null)),Ye=Xe.exports,Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{subtitle:"For Sanguinius"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("SquadmatesMission",{attrs:{squadID:e.mission.assignedSquad.id}})],1),a("div",{staticClass:"column"},[a("MissionInfo",{attrs:{description:e.mission.description,location:e.mission.location,assignedSquad:e.mission.assignedSquad.name,missionStatus:e.mission.missionStatus}})],1)]),e._m(0)],1)},Qe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("img",{attrs:{alt:"mission fluff",src:"http://geniusproductions.co.uk/Cetus/images/d/da/Blood_Angels_Crest.jpg"}})]),a("div",{staticClass:"column"},[e._v(" ovde ce ici svi komentari ")])])}],Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{attrs:{id:"squadmates-table",bordered:"","head-variant":"dark",hover:"",fixed:"",items:e.soldiers,squadID:e.squadID,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}})],1)},Ze=[],et={name:"SquadmatesMission",props:{squadID:String},data:function(){return{fields:["name","tag","role","status"],currentPage:1,perPage:10}},watch:{squadID:function(e,t){this.fetchSoldiersBySquadID(this.squadID)}},mounted:function(){this.fetchSoldiersBySquadID(this.squadID)},computed:Object(r["a"])({},Object(i["d"])(["soldiers"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["fetchSoldiersBySquadID"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleSoldier",params:{id:e.id}})}})},tt=et,at=(a("72d5"),Object(l["a"])(tt,Ue,Ze,!1,null,"49c4b4c8",null)),nt=at.exports,ot=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-sold"},[e.description?a("h5",[a("b",[e._v("Mission information:")]),e._v(" "+e._s(e.description))]):e._e(),e.location?a("h5",[a("b",[e._v("Target location:")]),e._v(" "+e._s(e.location))]):e._e(),e.assignedSquad?a("h5",[a("b",[e._v("Assigned Squad:")]),e._v(" "+e._s(e.assignedSquad))]):e._e(),e.missionStatus?a("h5",[a("b",[e._v("Mission status:")]),e._v(" "+e._s(e.missionStatus))]):e._e()])},st=[],rt={name:"MissionInfo",props:{description:String,location:String,assignedSquad:String,missionStatus:String}},it=rt,ct=(a("44e2"),Object(l["a"])(it,ot,st,!1,null,"b8a50e92",null)),ut=ct.exports,lt={name:"SingleMission",components:{Header:j,SquadmatesMission:nt,MissionInfo:ut},data:function(){return{subtitle:"",description:"",location:"",assignedSquad:"",missionStatus:""}},computed:Object(r["a"])({},Object(i["d"])(["mission"])),methods:Object(r["a"])({},Object(i["b"])(["fetchMissionByID"])),mounted:function(){this.fetchMissionByID(this.$route.params.id)}},dt=lt,mt=(a("6a73"),Object(l["a"])(dt,Ke,Qe,!1,null,"a04e0956",null)),ft=mt.exports,pt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{subtitle:e.loadout.type}}),a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"column"},[a("LoadoutInfo",{attrs:{grenades:e.loadout.hasGrenades,rangedWeapon:e.loadout.rangedWeapon,meleeWeapon:e.loadout.meleeWeapon,armourType:e.loadout.armourType}}),a("Loadouters")],1)])],1)},ht=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column"},[a("img",{attrs:{alt:"loadouts",width:"850",src:"https://i.pinimg.com/736x/a7/c3/4b/a7c34b1489e0d7a5a463f3e73ebe069f.jpg"}})])}],bt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-sold"},[a("h5",[a("b",[e._v("Grenades:")]),e._v(" "+e._s(e.grenades))]),e.rangedWeapon?a("h5",[a("b",[e._v("Ranged Weapons:")]),e._v(" "+e._s(e.rangedWeapon))]):e._e(),e.meleeWeapon?a("h5",[a("b",[e._v("Melee Weapons:")]),e._v(" "+e._s(e.meleeWeapon))]):e._e(),e.armourType?a("h5",[a("b",[e._v("Armour:")]),e._v(" "+e._s(e.armourType))]):e._e()])},gt=[],vt={name:"LoadoutInfo",props:{grenades:Boolean,rangedWeapon:String,meleeWeapon:String,armourType:String,squadName:String}},St=vt,_t=(a("5538"),Object(l["a"])(St,bt,gt,!1,null,"45a0df56",null)),jt=_t.exports,Ot=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{attrs:{id:"loadouters-table",bordered:"","head-variant":"dark",hover:"",fixed:"",items:e.soldiers,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}})],1)},qt=[],wt={name:"Loadouters",data:function(){return{fields:["name","tag","role","status"],currentPage:1,perPage:10}},mounted:function(){this.fetchSoldiersByLoadoutID(this.$route.params.id)},computed:Object(r["a"])({},Object(i["d"])(["soldiers"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["fetchSoldiersByLoadoutID"])),{},{rowClicked:function(e,t){this.$router.push({name:"SingleSoldier",params:{id:e.id}})}})},kt=wt,yt=(a("457f"),Object(l["a"])(kt,Ot,qt,!1,null,"317c8652",null)),Pt=yt.exports,Ct={name:"SingleLoadout",components:{Header:j,LoadoutInfo:jt,Loadouters:Pt},computed:Object(r["a"])({},Object(i["d"])(["loadout"])),data:function(){return{subtitle:"",fields:["name","tag","role","status"],grenades:"",rangedWeapon:"",meleeWeapon:"",armourType:""}},methods:Object(r["a"])({},Object(i["b"])(["fetchLoadoutByID"])),mounted:function(){this.fetchLoadoutByID(this.$route.params.id)}},xt=Ct,It=(a("c6bb"),Object(l["a"])(xt,pt,ht,!1,null,"473b725e",null)),$t=It.exports,Bt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("Header",{attrs:{subtitle:"Log In"}}),a("b-form",{on:{submit:e.onSubmit}},[a("b-form-group",{attrs:{label:"Soldier Tag:","label-for":"tag"}},[a("b-form-input",{attrs:{id:"tag",placeholder:"Enter tag",required:""},model:{value:e.form.tag,callback:function(t){e.$set(e.form,"tag",t)},expression:"form.tag"}})],1),a("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"dark"}},[e._v("Submit")])],1)],1)},Lt=[],Mt={name:"Login",components:{Header:j},data:function(){return{form:{tag:"",password:""}}},methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["login"])),{},{onSubmit:function(e){e.preventDefault(),this.login(this.form),this.$router.push({name:"Home"})}})},Dt=Mt,Wt=(a("51b8"),Object(l["a"])(Dt,Bt,Lt,!1,null,"567c0c68",null)),Et=Wt.exports;n["default"].use(f["a"]);var Tt=[{path:"/",name:"Home",component:k},{path:"/squads",name:"Squads",component:E},{path:"/soldiers",name:"Soldiers",component:Y},{path:"/loadouts",name:"Loadouts",component:ie},{path:"/missions",name:"Missions",component:Se},{path:"/squads/:id",name:"SingleSquad",component:Ee},{path:"/soldiers/:id",name:"SingleSoldier",component:Ye},{path:"/missions/:id",name:"SingleMission",component:ft},{path:"/loadouts/:id",name:"SingleLoadout",component:$t},{path:"/login",name:"Login",component:Et}],At=new f["a"]({mode:"history",base:"/",routes:Tt}),Ht=At;a("d3b7"),a("e9c4");n["default"].use(i["a"]);var zt=new i["a"].Store({state:{items:[],squads:[],squad:[],soldiers:[],soldier:[],loadouts:[],loadout:[],missions:[],mission:[],token:""},mutations:{addSquads:function(e,t){e.squads=t},getSquadByID:function(e,t){e.squad=t},addSoldiers:function(e,t){e.soldiers=t},getSoldierByID:function(e,t){e.soldier=t},addLoadouts:function(e,t){e.loadouts=t},getLoadoutByID:function(e,t){e.loadout=t},addMissions:function(e,t){e.missions=t},getMissionByID:function(e,t){e.mission=t},setToken:function(e,t){e.token=t,localStorage.token=t},removeToken:function(e){e.token="",localStorage.token=""}},actions:{fetchSquads:function(e){var t=e.commit;fetch("http://localhost:8080/admin/squads",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return t("addSquads",e)}))},fetchSquadByID:function(e,t){var a=e.commit;fetch("http://localhost:8080/admin/squads/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return a("getSquadByID",e)}))},fetchSoldiers:function(e){var t=e.commit;fetch("http://localhost:8080/admin/soldiers",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return t("addSoldiers",e)}))},fetchSoldierByID:function(e,t){var a=e.commit;fetch("http://localhost:8080/admin/soldiers/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return a("getSoldierByID",e)}))},fetchSoldiersBySquadID:function(e,t){var a=e.commit;fetch("http://localhost:8080/admin/soldiers/squad/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return a("addSoldiers",e)}))},fetchSoldiersByLoadoutID:function(e,t){var a=e.commit;fetch("http://localhost:8080/admin/soldiers/loadout/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return a("addSoldiers",e)}))},fetchLoadouts:function(e){var t=e.commit;fetch("http://localhost:8080/admin/loadouts",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return t("addLoadouts",e)}))},fetchLoadoutByID:function(e,t){var a=e.commit;fetch("http://localhost:8080/admin/loadouts/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return a("getLoadoutByID",e)}))},fetchMissions:function(e){var t=e.commit;fetch("http://localhost:8080/admin/missions",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return t("addMissions",e)}))},fetchMissionByID:function(e,t){var a=e.commit;fetch("http://localhost:8080/admin/missions/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return a("getMissionByID",e)}))},fetchMissionsBySquadID:function(e,t){var a=e.commit;fetch("http://localhost:8080/admin/missions/squad/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){return a("addMissions",e)}))},login:function(e,t){var a=e.commit;fetch("http://localhost:9000/api_login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.msg?alert(e.msg):a("setToken",e.token)}))}},modules:{}}),Nt=a("5f5b"),Gt=a("b1e0");a("f9e3"),a("2dd8");n["default"].use(Nt["a"]),n["default"].use(Gt["a"]),n["default"].config.productionTip=!1,new n["default"]({router:Ht,store:zt,render:function(e){return e(m)}}).$mount("#app")},"5b96":function(e,t,a){"use strict";a("1672")},"621f":function(e,t,a){"use strict";a("9d79")},"6a73":function(e,t,a){"use strict";a("9800")},"72d5":function(e,t,a){"use strict";a("aad2")},"73ff":function(e,t,a){},"7a47":function(e,t,a){"use strict";a("1dc7")},8189:function(e,t,a){"use strict";a("5403")},"84ee":function(e,t,a){},"85ec":function(e,t,a){},9108:function(e,t,a){},9298:function(e,t,a){},9800:function(e,t,a){},"9c3b":function(e,t,a){},"9d79":function(e,t,a){},a709:function(e,t,a){},aad2:function(e,t,a){},ad3d:function(e,t,a){},ba40:function(e,t,a){"use strict";a("1080")},bb14:function(e,t,a){"use strict";a("84ee")},c3f5:function(e,t,a){"use strict";a("fa12")},c41d:function(e,t,a){"use strict";a("e97e")},c6bb:function(e,t,a){"use strict";a("4101")},dbad:function(e,t,a){"use strict";a("9108")},e97e:function(e,t,a){},ec3c:function(e,t,a){"use strict";a("403d")},ec4e:function(e,t,a){},f5e3:function(e,t,a){"use strict";a("2124")},fa12:function(e,t,a){}});
//# sourceMappingURL=app.15c24a20.js.map