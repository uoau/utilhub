"use strict";require("core-js/modules/es.symbol.js"),require("core-js/modules/es.symbol.description.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.symbol.iterator.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.from.js"),require("core-js/modules/es.array.slice.js"),require("core-js/modules/es.function.name.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.deepFlattenArray=deepFlattenArray;var _isArray=require("../isArray");function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Map"===(t="Object"===t&&r.constructor?r.constructor.name:t)||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function deepFlattenArray(r){for(var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1/0,t=(2<arguments.length?arguments[2]:void 0)||[],o=0;o<r.length;o+=1){var a=r[o];0<e&&(0,_isArray.isArray)(a)?1<e?deepFlattenArray(a,e-1,t):t.push.apply(t,_toConsumableArray(a)):t.push(a)}return t}