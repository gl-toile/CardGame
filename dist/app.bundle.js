!function(t){var e={};function i(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=332)}({332:function(t,e,i){"use strict";i.r(e);var a=function(t,e,i){this.titre=t,this.texte=e,this.texteVerso=i||null,this.cost=0,console.log("init carte")};a.prototype.displayText=function(){console.log(this.nom)};var o=function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6;this.fatalitiesCount=0,this.maxFatalities=6,a.call(this,t,e,i),this.prototype=a.prototype,this.maxFatalities=o,console.log("histoire initialisée"),console.log(o)};o.prototype=Object.create(a.prototype),o.constructor=o,o.prototype.addFatalities=function(t){this.fatalitiesCount+=t,console.log("+"+t+" fatalité(s) sur "+this.titre),this.checkFatalities()},o.prototype.fatalityState=function(){return this.fatalitiesCount+"/"+this.maxFatalities},o.prototype.displayFatalityState=function(){console.log(this.titre+" : "+this.fatalityState())},o.prototype.checkFatalities=function(){this.fatalitiesCount>=this.maxFatalities&&(this.displayFatalityState(),console.log("Seuil de fatalité atteint ! ("+this.fatalityState()+")"),this.retournerCarte())},o.prototype.retournerCarte=function(){console.log("-----------------");for(var t=this.texteVerso.length,e="",i=0;i<t;i++)e+="-";console.log(e),console.log(this.texteVerso),console.log(e)};var n=function(){console.log("app")};n.prototype.lancer=function(){var t=new o("Intrigue 1a","L'attaque du chat chouette","Le monstre a sorti griffes, il vous saute au visage et vous empeche de dormir",6),e=new o("Acte 1a","Une petite Blonde sur un lit douillet","Ce contenu a été censuré...",3);console.log("partie lancée"),t.displayText(),e.addFatalities(1),t.addFatalities(1),e.addFatalities(1),t.addFatalities(1),t.addFatalities(1),e.addFatalities(1),t.addFatalities(1),t.addFatalities(1),t.addFatalities(1),t.addFatalities(1),e.addFatalities(1),t.addFatalities(1),t.addFatalities(1),t.addFatalities(1),t.addFatalities(1),e.addFatalities(1),t.addFatalities(1),t.addFatalities(1)},n.prototype.clickIntrigue=function(){console.log("clickIntrigue")},n.prototype.clickActe=function(){console.log("clickActe")};(new n).lancer()}});