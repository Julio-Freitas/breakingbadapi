(this.webpackJsonpbreakingbad=this.webpackJsonpbreakingbad||[]).push([[0],{53:function(n,e,t){n.exports=t.p+"static/media/bb.78d8a85c.png"},57:function(n,e,t){n.exports=t(99)},62:function(n,e,t){},99:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(17),c=t.n(o),i=(t(62),t(16)),u=t(45),l=t(102),s=t(18),f=t(27),p=t(14),d=t(46),b=t(54),m=t(47),h=t.n(m),v=t(10),x={characters:[],lastPageOffset:null};var E={quotes:[]};var g={list:[]};var O=Object(p.combineReducers)({home:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SAVE_ALL_CHARACTERS":return console.log(),Object(v.a)(Object(v.a)({},n),{},{characters:e.payload});case"LAST_PAGE_SEARCH":return Object(v.a)(Object(v.a)({},n),{},{lastPageOffset:e.payload});default:return n}},profiler:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_QUOTE_PROFILER":return Object(v.a)(Object(v.a)({},n),{},{quotes:e.payload});default:return n}},episodes:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_EPISODES":return Object(v.a)(Object(v.a)({},n),{},{list:e.payload});default:return n}}}),j=t(9),y=t.n(j),w=t(7),k=t(48),C=t.n(k).a.create({baseURL:"https://www.breakingbadapi.com/api/",headers:{"Content-Type":"application/json"}}),S=function(){return new Promise((function(n,e){C.get("characters?limit=10&offset=0").then((function(e){return n(e)})).catch((function(n){return e(n)}))}))},T=function(n,e){return new Promise((function(t,r){var a="limit=".concat(n||10,"&offset=").concat(e||0);C.get("characters?".concat(a)).then((function(n){return t(n)})).catch((function(n){return r(n)}))}))},_=function(n){return new Promise((function(e,t){C.get("characters?name=".concat(n)).then((function(n){return e(n)})).catch((function(n){return t(n)}))}))},A=y.a.mark(P),R=y.a.mark(N),L=y.a.mark(I);function P(){var n,e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.b)(S);case 3:return n=t.sent,e=n.data,t.next=7,Object(w.c)({type:"SAVE_ALL_CHARACTERS",payload:e});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),s.b.error("N\xe3o foi poss\xedvel obter os personagens!");case 12:case"end":return t.stop()}}),A,null,[[0,9]])}function N(n){var e,t,r;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.payload,a.prev=1,t=e.offset,a.next=5,Object(w.b)(T,10,t);case 5:if(!((r=a.sent).data.length>0)){a.next=11;break}return a.next=9,Object(w.c)({type:"LAST_PAGE_SEARCH",payload:t});case 9:a.next=15;break;case 11:return a.next=13,Object(w.b)(T,10,t-10);case 13:r=a.sent,s.b.error("N\xe3o foi poss\xedvel obter os personagens!");case 15:return a.next=17,Object(w.c)({type:"SAVE_ALL_CHARACTERS",payload:r.data});case 17:a.next=22;break;case 19:a.prev=19,a.t0=a.catch(1),s.b.error("N\xe3o foi poss\xedvel obter os personagens!");case 22:case"end":return a.stop()}}),R,null,[[1,19]])}function I(n){var e,t,r;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.payload,a.prev=1,a.next=4,Object(w.b)(_,e);case 4:return t=a.sent,r=t.data,a.next=8,Object(w.c)({type:"SAVE_ALL_CHARACTERS",payload:r});case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),s.b.error("N\xe3o foi poss\xedvel obter o personagen!");case 13:case"end":return a.stop()}}),L,null,[[1,10]])}var M=Object(w.a)([Object(w.d)("GET_ALL_CHARACTERS",P),Object(w.d)("GET_MORE_CHARACTERS",N),Object(w.d)("GET_NAME_CHARACTERS",I)]),F=function(n){return new Promise((function(e,t){C.get("quote?author=".concat(n)).then((function(n){return e(n)})).catch((function(n){return t(n)}))}))},H=y.a.mark(G),z=y.a.mark(D);function G(n){var e,t,r;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.payload,a.prev=1,a.next=4,Object(w.b)(F,e);case 4:return t=a.sent,r=t.data,a.next=8,Object(w.c)({type:"SET_QUOTE_PROFILER",payload:r});case 8:a.next=12;break;case 10:a.prev=10,a.t0=a.catch(1);case 12:case"end":return a.stop()}}),H,null,[[1,10]])}function D(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.c)({type:"SET_QUOTE_PROFILER",payload:[]});case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),z,null,[[0,5]])}var U=Object(w.a)([Object(w.d)("GET_QUOTE_PROFILER",G),Object(w.d)("CLEAN_QUOTE_PROFILER",D)]),q=function(){return new Promise((function(n,e){C.get("episodes").then((function(e){return n(e)})).catch((function(n){return e(n)}))}))},B=y.a.mark(V);function V(){var n,e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.b)(q);case 3:return n=t.sent,e=n.data,t.next=7,Object(w.c)({type:"SET_EPISODES",payload:e});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),s.b.error("N\xe3o foi poss\xedvel obter os epis\xf3dios");case 12:case"end":return t.stop()}}),B,null,[[0,9]])}var Q=Object(w.a)([Object(w.d)("GET_EPISODES",V)]),X=y.a.mark(J);function J(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(w.a)([M,U,Q]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),X)}var K,W=Object(b.a)(),Y=Object(p.createStore)((K=O,Object(f.a)({key:"CONSUMO_API_BREAKING_BAD",storage:h.a,whitelist:["breakingbad"]},K)),Object(d.composeWithDevTools)(Object(p.applyMiddleware)(W)));W.run(J);var Z=Object(f.b)(Y),$=t(49),nn=Object($.a)(),en=t(8),tn=function(n,e){if(!n&&!e)throw new Error("Os parametos de datas e  localiza\xe7\xe3o precisam ser passados ");var t=Date.parse(n);return isNaN(t)?"N\xe3o informado":new Date(n).toLocaleDateString(e)},rn=t(3),an=t(4);function on(){var n=Object(rn.a)(["\n  position: absolute;\n  backface-visibility: hidden;\n  transition: transform 0.8s;\n  bottom: 0;\n    width: 100%;\n  ","\n"]);return on=function(){return n},n}function cn(){var n=Object(rn.a)(["\n    font-weight: 500;\n    font-size: 16px;\n"]);return cn=function(){return n},n}function un(){var n=Object(rn.a)(["\n     font-weight: 500;\n    line-height: 1.2;\n    font-size: 1.25rem;\n"]);return un=function(){return n},n}function ln(){var n=Object(rn.a)(["\n    flex: 1 1 auto;\n    padding: 1.25rem;\n    display: flex;\n    flex-direction: column;\n"]);return ln=function(){return n},n}function sn(){var n=Object(rn.a)(["\n    height: 300px;\n    width: 100%;\n    object-fit: cover;\n    overflow: hidden;\n    opacity: .8;\n    border-radius: 6px;\n    object-position: top;\n    transform-style: preserve-3d;\n    transition: transform 0.8s;\n    position: absolute;\n\n","\n\n\n"]);return sn=function(){return n},n}function fn(){var n=Object(rn.a)(["\n  height: 300px;\n  padding: 10px;\n  overflow: hidden;\n  perspective: 1000px;\n  position: relative;\n  transition: transform 0.3s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return fn=function(){return n},n}function pn(){var n=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;\n  margin: 15px;\n  width: 252px;\n\n"]);return pn=function(){return n},n}var dn=an.b.div(pn()),bn=an.b.div(fn()),mn=an.b.img(sn(),(function(n){return n.effectImage&&"transform: rotateY(180deg);\n      transition: transform 0.8s;\n      opacity: 0.3;"})),hn=an.b.div(ln()),vn=an.b.span(un()),xn=an.b.label(cn()),En=an.b.div(on(),(function(n){return n.visibilityButton?"\n      opacity: 1;\n  ":"opacity: 0"}));function gn(){var n=Object(rn.a)(["\n  padding: 5px 10px;\n  text-align: center;\n  width: 100%;\n  color: "," ;;\n  font-family: 'Roboto'\n"]);return gn=function(){return n},n}function On(){var n=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color:"," ;\n  background-clip: border-box;\n  cursor: pointer;\n  border-radius: .25rem;\n"]);return On=function(){return n},n}var jn=an.b.div(On(),(function(n){var e=n.bgColor;return e||"#000 "})),yn=an.b.div(gn(),(function(n){var e=n.colorText;return e||"#fff "}));function wn(n){var e=n.text,t=n.onClick,r=n.colorText,o=n.bgColor;return a.a.createElement(jn,{bgColor:o},a.a.createElement(yn,{onClick:t,colorText:r},e))}wn.defaultProps={text:"",onclick:function(){},colorText:"",bgColor:""};var kn=wn,Cn=function(n){var e=n.character,t=n.fallbackClickCard,o=Object(r.useState)(!1),c=Object(en.a)(o,2),i=c[0],u=c[1];return a.a.createElement(dn,null,a.a.createElement(bn,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}},a.a.createElement(mn,{effectImage:i,src:e.img,alt:e.name}),a.a.createElement(En,{visibilityButton:i},a.a.createElement(kn,{text:"Ver detalhes",onClick:function(){return t(e)}}))),a.a.createElement(hn,null,a.a.createElement(vn,null,e.name),a.a.createElement(xn,null,"Aniver\u015baio: ",tn(e.birthday,"pt-BR"))))};Cn.defaultProps={character:{},fallbackClickCard:function(){}};var Sn=Cn;function Tn(){var n=Object(rn.a)(["\n  color: "," ;\n  position: absolute;\n  display: flex;\n  width: 100%;\n  text-align: center;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  font-size:18px;\n  cursor: default;\n"]);return Tn=function(){return n},n}function _n(){var n=Object(rn.a)(["\n  padding: 15px 10px;\n  text-align: center;\n  color: "," ;\n  font-family: 'Roboto';\n  width: 150px;\n  -webkit-transition: width 0.4s ease-in-out;\n  transition: width 0.4s ease-in-out;\n  z-index: 1;\n  :focus{\n    width: 100%;\n  }\n  ","\n\n"]);return _n=function(){return n},n}function An(){var n=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color:"," ;\n  background-clip: border-box;\n  cursor: pointer;\n  border-radius: .25rem;\n  position: relative;\n\n"]);return An=function(){return n},n}var Rn=an.b.div(An(),(function(n){var e=n.bgColor;return e||"#000 "})),Ln=an.b.input(_n(),(function(n){var e=n.colorText;return e||"#fff "}),(function(n){return n.focus&&"   width: 100%;"})),Pn=an.b.span(Tn(),(function(n){var e=n.colorLabel;return e||"#fff "}));function Nn(n){var e=n.text,t=n.onChange,o=n.colorText,c=n.bgColor,i=n.placeholder,u=n.type,l=n.label,s=n.colorLabel,f=Object(r.useState)(""),p=Object(en.a)(f,2),d=p[0],b=p[1],m=Object(r.useState)(!1),h=Object(en.a)(m,2),v=h[0],x=h[1];Object(r.useEffect)((function(){e&&b(e)}),[e]);return a.a.createElement(Rn,{bgColor:c,onMouseLeave:function(){return x(!1)}},a.a.createElement(Pn,{colorLabel:s,onClick:function(){document.querySelector("input[name=input]").focus(),x(!0)}},l),a.a.createElement(Ln,{type:u,onChange:function(n){var e=n.target.value;b(e),t&&t(e)},colorText:o,value:d,placeholder:i,focus:v,name:"input"}))}Nn.defaultProps={text:"",onclick:function(){},colorText:"",bgColor:""};var In=Nn;function Mn(){var n=Object(rn.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 20px auto;\n  max-width: 84%;\n  padding: 0 32px 0 14px;\n"]);return Mn=function(){return n},n}function Fn(){var n=Object(rn.a)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin: 20px auto;\n  max-width: 84%;\n"]);return Fn=function(){return n},n}var Hn=an.b.div(Fn()),zn=an.b.div(Mn()),Gn=Object(i.b)((function(n){return{home:n.home}}),null)((function(n){var e=n.home,t=n.history,o=Object(i.c)(),c=Object(r.useState)(null),u=Object(en.a)(c,2),l=u[0],s=u[1];Object(r.useEffect)((function(){o({type:"GET_ALL_CHARACTERS"})}),[o]),Object(r.useEffect)((function(){null!==l&&o({type:"GET_MORE_CHARACTERS",payload:{offset:l}})}),[l,o]);var f=function(n){return t.push("/detalhes",{profiler:n})};return a.a.createElement(a.a.Fragment,null,a.a.createElement(In,{type:"text",onChange:function(n){var e=n.split(" ").filter((function(n){return n})).join("+");o({type:"GET_NAME_CHARACTERS",payload:e})},colorText:"#000",label:"Pesquise pelo o nome do seu personagem favorito.",placeholder:"Digite o nome do personagem",colorLabel:"#ffa"}),a.a.createElement(Hn,null,e.characters.length>0&&e.characters.map((function(n,e){return a.a.createElement(Sn,{character:n,key:e,fallbackClickCard:f})}))),a.a.createElement(zn,null,a.a.createElement(kn,{text:"Voltar",onClick:function(){s(l<=0?0:e.lastPageOffset-10)}}),a.a.createElement(kn,{text:"Avan\xe7ar",onClick:function(){return s(e.lastPageOffset+10)}})))}));function Dn(){var n=Object(rn.a)(["\n  line-height: normal;\n  padding: 5px 0;\n  font-family: 'Open Sans';\n  span {\n    font-size: 18px;\n    font-weight: 500;\n    font-family: 'Roboto';\n    color: #fff;\n  }\n"]);return Dn=function(){return n},n}function Un(){var n=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n"]);return Un=function(){return n},n}function qn(){var n=Object(rn.a)(["\n  width: 350px;\n  height: 290px;\n  display: flex;\n  justify-content: center;\n  img {\n    max-width: 100%;\n    object-fit: fill;\n    width: auto;\n    height: 100%;\n    object-position: top;\n  }\n"]);return qn=function(){return n},n}function Bn(){var n=Object(rn.a)(["\n  padding: 20px 40px;\n  display: flex;\n  background-color: #ffffdd24;\n  margin-bottom: 30px;\n"]);return Bn=function(){return n},n}var Vn=an.b.div(Bn()),Qn=an.b.div(qn()),Xn=an.b.div(Un()),Jn=an.b.span(Dn()),Kn=Object(i.b)((function(n){return{quotes:n.profiler.quotes}}),null)((function(n){var e=n.history,t=n.quotes,o=Object(i.c)(),c=Object(r.useState)({}),u=Object(en.a)(c,2),l=u[0],s=u[1],f=Object(r.useState)(""),p=Object(en.a)(f,2),d=p[0],b=p[1],m=Object(r.useState)(0),h=Object(en.a)(m,2),v=h[0],x=h[1];Object(r.useEffect)((function(){return function(){return o({type:"CLEAN_QUOTE_PROFILER"})}}),[o]),Object(r.useEffect)((function(){if(e.location.state){var n=e.location.state.profiler;s(n),o({type:"GET_QUOTE_PROFILER",payload:n.name.split(" ").filter((function(n){return n})).join("+").toLocaleLowerCase()})}else e.push("/")}),[e,o]);var E=Object(r.useCallback)((function(){t.length>0&&(x(v+1),v===t.length&&x(0),t[v]&&b(t[v].quote))}),[t,b,v]);return Object(r.useEffect)((function(){setTimeout((function(){E()}),2e3)}),[E]),Object.keys(l).length&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Vn,null,a.a.createElement(Qn,null,a.a.createElement("img",{src:l.img,alt:""})),a.a.createElement(Xn,null,a.a.createElement(Jn,null,a.a.createElement("span",null,"Nome:")," ",l.name),a.a.createElement(Jn,null,a.a.createElement("span",null,"Apelido:")," ",l.nickname),a.a.createElement(Jn,null,a.a.createElement("span",null,"Aniver\u015bario:")," ",tn(l.birthday,"pt-BR")),a.a.createElement(Jn,null,a.a.createElement("span",null,"Ocupa\xe7\xe3o:")," ",l.occupation.join(" ")),a.a.createElement(Jn,null,a.a.createElement("span",null,"Categoria:")," ",l.category),a.a.createElement(Jn,null,a.a.createElement("span",null,"Status:")," ",function(n){if(!n)throw new Error("Valor n\xe3o foi passado");switch(n){case"Alive":return"Vivo";case"Presumed dead":return"Presumido como morto";case"Deceased":return"Morto";default:return""}}(l.status)),d&&a.a.createElement(Jn,null,a.a.createElement("span",null,"Cita\xe7\xf5es:")," ",d))))})),Wn=t(55);function Yn(){var n=Object(rn.a)(["\n  line-height: normal;\n  padding: 5px 0;\n  font-family: 'Open Sans';\n\n\n  span {\n    font-size: 18px;\n    font-weight: 600;\n    font-family: 'Roboto';\n    color: rgb(72 127 90);\n    padding-right:5px;\n  }\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;\n  margin: 15px;\n  width: 252px;\n  padding: 20px;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(rn.a)(["\n    display: flex;\n    flex-flow: row wrap;\n"]);return $n=function(){return n},n}var ne=an.b.div($n()),ee=an.b.div(Zn()),te=an.b.span(Yn()),re=function(n){var e=n.listEspisodes,t=n.viewSeason;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,null,e.map((function(n){return function(n){var e=n.air_date,r=n.characters,o=n.episode,c=n.season,i=n.series,u=n.title;if(t===Number(c))return a.a.createElement(ee,null,a.a.createElement(te,null,a.a.createElement("span",null,"T\xedtulo:")," ",u),a.a.createElement(te,null,a.a.createElement("span",null," Entrou no ar:")," ",tn(e,"pt-BR")),a.a.createElement(te,null,a.a.createElement("span",null,"Personagens:"),r.join(", ")),a.a.createElement(te,null,a.a.createElement("span",null,"Epis\xf3dio:")," ",o),a.a.createElement(te,null,a.a.createElement("span",null,"Temporada: "),c),a.a.createElement(te,null,a.a.createElement("span",null,"S\xe9rie:"),i))}(n)}))))};re.defaultProps={ListEpisodes:[]};var ae=re;function oe(){var n=Object(rn.a)(["\n  font-size: 15px;\n  padding: 5px 40px;\n  cursor: pointer;\n  color: #fff;\n  transition: 0.3s;\n  ","\n  :hover {\n    font-weight: bold;\n  }\n"]);return oe=function(){return n},n}function ce(){var n=Object(rn.a)(["\n  padding: 0px 40px;\n  display: flex;\n  background-color: #ffffdd24;\n  margin-bottom: 30px;\n"]);return ce=function(){return n},n}function ie(){var n=Object(rn.a)(["\n  padding: 20px 40px;\n  display: flex;\n  background-color: #ffffdd24;\n  font-size: 20px;\n  color: #fff;\n"]);return ie=function(){return n},n}function ue(){var n=Object(rn.a)(["\n  padding: 20px 40px;\n  display: flex;\n  background-color: #ffffdd24;\n  margin-bottom: 30px;\n"]);return ue=function(){return n},n}var le=an.b.div(ue()),se=an.b.span(ie()),fe=an.b.span(ce()),pe=an.b.span(oe(),(function(n){return n.selected&&"  font-weight: bold; background-color: #ffffdd24;"})),de=Object(i.b)((function(n){return{episodes:n.episodes.list}}),null)((function(n){var e=n.episodes,t=Object(r.useState)({}),o=Object(en.a)(t,2),c=o[0],u=o[1],l=Object(r.useState)(1),s=Object(en.a)(l,2),f=s[0],p=s[1],d=Object(i.c)();return Object(r.useEffect)((function(){d({type:"GET_EPISODES"})}),[d]),Object(r.useEffect)((function(){var n=[],t={};e.forEach((function(e){return n.push(e.season.trim())})),Object(Wn.a)(new Set(n)).forEach((function(n,e){return t["temp-".concat(e+1)]=n})),u(t)}),[e]),e.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null,"Mais Temporadas"),a.a.createElement(fe,null,Object.keys(c).map((function(n,e){return a.a.createElement(pe,{onClick:function(){return p(Number(n.split("-")[1]))},selected:f===e+1},e+1)}))),a.a.createElement(le,null,console.log(c),a.a.createElement(ae,{listEspisodes:e,viewSeason:f})))}));function be(){return a.a.createElement(l.d,null,a.a.createElement(l.b,{exact:!0,path:"/breakingbadapi",component:Gn}),a.a.createElement(l.b,{exact:!0,path:"/detalhes",component:Kn}),a.a.createElement(l.b,{exact:!0,path:"/episodios",component:de}),a.a.createElement(l.a,{to:"/breakingbadapi"}))}function me(){var n=Object(rn.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n  cursor: pointer;\n  z-index: 20;\n  display: none;\n  @media (max-width: 768px) {\n    display: flex;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.5s ease-out;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return me=function(){return n},n}function he(){var n=Object(rn.a)(["\n  padding: 18px 10px;\n  ","\n  :hover {\n    background-color: #ffffdd24;\n    transition: 0.5s ease-in;\n    cursor: pointer;\n  }\n  @media (max-width: 768px) {\n    color: #fff;\n  }\n"]);return he=function(){return n},n}function ve(){var n=Object(rn.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  @media (max-width: 768px) {\n    transform: ",";\n    transition: transform 0.3s ease-in-out;\n    flex-flow: column nowrap;\n    background-color: #0d2538;\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 40px;\n    z-index: 3;\n  }\n"]);return ve=function(){return n},n}function xe(){var n=Object(rn.a)(["\n  width: 100%;\n  height: 65px;\n  border-bottom: 2px solid #f1f1f1;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 768px) {\n    border-bottom: none;\n    height: auto;\n    padding: 0;\n  }\n"]);return xe=function(){return n},n}function Ee(){var n=Object(rn.a)(["\n  max-width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n  cursor: pointer;\n  width: 50%;\n"]);return Ee=function(){return n},n}function ge(){var n=Object(rn.a)(["\n  max-width: 100%;\n  width: 100%;\n  height: 270px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return ge=function(){return n},n}var Oe=an.b.div(ge()),je=an.b.img(Ee()),ye=an.b.div(xe()),we=an.b.ul(ve(),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),ke=an.b.li(he(),(function(n){return n.selected&&"color: #fff;\n    font-weight: 500;"})),Ce=an.b.div(me(),(function(n){return n.open?"#f1f1f1":"#333"}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"translateX(100%)":"translateX(0)"}),(function(n){return n.open?0:1}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"}));function Se(n){var e=n.open,t=n.optionsNav,r=n.fallbackClickMenu;return a.a.createElement(we,{open:e},t.length>0&&t.map((function(n,e){return a.a.createElement(ke,{key:e,onClick:function(){return r(n.path)},selected:n.selected},n.value)})))}function Te(n){var e=n.optionsNav,t=n.fallbackClickMenu,o=Object(r.useState)(!1),c=Object(en.a)(o,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){u(!1)}),[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Ce,{open:i,onClick:function(){return u(!i)}},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement(Se,{open:i,optionsNav:e,fallbackClickMenu:t}))}var _e=t(53),Ae=t.n(_e),Re=function(n){var e=n.history,t=n.optionsNav,o=Object(r.useState)(t),c=Object(en.a)(o,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){var n=t.map((function(n){return Object(v.a)(Object(v.a)({},n),{},{selected:n.path===e.location.pathname})}));u(n),e.listen((function(e){n=t.map((function(n){return Object(v.a)(Object(v.a)({},n),{},{selected:n.path===e.pathname})})),u(n)}))}),[e,t]),a.a.createElement(Oe,null,a.a.createElement(je,{src:Ae.a,alt:"logo",onClick:function(){return e.push("/")}}),a.a.createElement(ye,null,a.a.createElement(Te,{optionsNav:i,fallbackClickMenu:function(n){return e.push(n)}})))};Re.defaultProps={optionsNav:[{value:"",path:""}]};var Le=Re;function Pe(){var n=Object(rn.a)(["\n *{\n    margin: 0;\n    padding:0;\n    outline: none;\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  }\n\n\n  body{\n    background-color: rgb(72, 127, 90);\n  }\n\n  body  .Toastify  .Toastify__toast--success{\n  background: #0197f6;\n  }\n  body  .Toastify  .Toastify__toast--error{\n  background: #F2AF29;\n  }\n\n  img{\n    max-width: 100%;\n  }\n\n"]);return Pe=function(){return n},n}var Ne=Object(an.a)(Pe());var Ie=function(){return a.a.createElement(i.a,{store:Y},a.a.createElement(Le,{history:nn,optionsNav:[{value:"Home",path:"/breakingbadapi",selected:!1},{value:"Epis\xf3dios",path:"/episodios",selected:!1}]}),a.a.createElement(u.a,{persistor:Z},a.a.createElement(l.c,{history:nn},a.a.createElement(be,null),a.a.createElement(Ne,null)),a.a.createElement(s.a,{autoClose:3e3})))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ie,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.fab62a3f.chunk.js.map