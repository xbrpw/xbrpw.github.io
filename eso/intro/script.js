function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const { useState, useEffect } = React;
const { useSpring, animated, config } = ReactSpring;
const { useDrag } = ReactUseGesture;

function P1() {
  return /*#__PURE__*/(
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "464",
      fillRule: "evenodd",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      version: "1.1",
      viewBox: "0 0 256 464",
      xmlSpace: "preserve" }, /*#__PURE__*/

    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M1515 6513H223V5277h533v429c0 74 60 134 134 134h625z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3334 6513h-722v-673h722z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M2612 6513H1515v-673h83v673z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M2612 6513H1598v-673h1014z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M4626 6513H3334h625v-676c8 2 18 3 27 3h640z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3959 6513h-56v-701c16 13 35 21 56 26v676z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3904 6513h-570v-673h10c103 0 88-65 88-188v-375h420v429c0 43 20 81 52 106z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3344 5840h-10v-563h98v375c0 123 15 188-88 188z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M6445 6513h-722v-673h722z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M5723 6513H4626v-673h83v673z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M5723 6513H4709v-673h1014z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7820 5277h2305v1236h56V5277h-56z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7737 6513H6446h624V5277h750-84v1236z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7070 6513h-56V5277h56z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7015 6513h-570v-673c72-3 129-62 129-134v-429h441z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M6445 5840v-563h129v429c0 72-57 131-129 134z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M10126 6513H8834V5277h1292z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M8834 6513H7737V5277h83v1236z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M8834 6513H7820V5277h1014z" }))), /*#__PURE__*/


    React.createElement("g", { display: "inline" }, /*#__PURE__*/
    React.createElement("path", {
      fillRule: "evenodd",
      d: "M2685 4226L2573 4035 2471 4109 2589 4293z",
      className: "p1-fil9",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -73 -95.969)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M174.384 313.938l-11.136 17.183c-.672 1.152-.48 2.688.48 3.648l27.648-17.663-7.392-9.408z",
      className: "p1-fil0",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M150.097 203.061l5.184 40.223 32.543 55.966-26.976 14.496-26.303-52.318c-1.92-3.264-3.264-6.72-4.224-10.368l-6.047-23.903 25.823-24.192z",
      className: "p1-fil10",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M132.53 257.492l-.193-.672.288.576v.096zm-2.017-5.856l-6.815-19.776 1.536-.863 5.183 20.159c0 .192.096.384.096.576z",
      className: "p1-fil11",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M132.53 257.396l-.289-.576-1.824-5.184c-.096-.192-.096-.384-.096-.576l-5.183-20.16 24.67-14.687-17.375 41.183z",
      className: "p1-fil12",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M1925 4446L1969 4212 1844 4219 1808 4451z",
      className: "p1-fil9",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -73 -95.969)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M100.85 328.817l-18.623 8.544c-1.248.576-1.824 2.016-1.536 3.264h32.735l-1.248-11.904-11.424.096z",
      className: "p1-fil0",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M145.969 191.926l-28.895-6.624c0 6.24-12.192 47.71-16.8 59.998a50.943 50.943 0 00-2.783 11.424l-5.952 65.662 30.815.384 4.704-64.03 15.071-33.695c10.464-19.296 3.84-33.023 3.84-33.023z",
      className: "p1-fil10",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M122.834 132.984l19.871-.384s.576-24.864-13.055-25.248c-11.904-.288-13.152 15.456-13.152 15.456l6.432 10.176z",
      className: "p1-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M130.993 109.56c.768.288 1.44.672 2.112 1.152 5.856 4.608 3.552 14.976-.864 19.968-2.4 2.784-6.143 4.32-9.695 3.36-5.184-1.344-7.296-6.816-6.72-11.904.384-3.84 2.112-7.488 4.896-10.08 2.784-2.496 6.816-3.84 10.271-2.592z",
      className: "p1-fil14",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M133.681 127.512c1.056.864 2.688 1.056 3.936.48 1.248-.576 2.112-1.824 2.304-3.264.192-1.248-.288-2.592-1.248-3.264-.96-.672-2.592-.48-3.264.576l-1.632 5.472z",
      className: "p1-fil14",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M134.737 124.056l.864 17.76a6.22 6.22 0 01-5.472 6.527c-3.743.48-7.007-2.496-6.911-6.336l.288-16.607z",
      className: "p1-fil14",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M123.218 136.632v-2.4s4.992.96 8.927-3.552c0 0-2.016 4.896-8.927 5.952z",
      className: "p1-fil15",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M136.081 125.592c.384 0 .768-.096 1.152-.384.288-.192.48-.576.48-.96 0-.576-.48-1.056-.96-1.248-.096 0-.288 0-.384.192 0 .096 0 .288.192.384.384.096.672.384.672.672a.528.528 0 01-.288.48c-.192.192-.48.288-.768.288-.192 0-.288.096-.288.288 0 .192.096.288.288.288z",
      className: "p1-fil15",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M125.042 124.824c.096.576.864.96 1.824.864.96-.096 1.632-.672 1.536-1.344-.096-.576-.864-.96-1.824-.864-.96.096-1.632.672-1.536 1.344z",
      className: "p1-fil16",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M120.626 125.592l-1.056-.768-.192-.384.288-.096c.096 0 .288-.192.48-.384s.288-.384.48-.48l.864-1.152c-.192.48-.384.864-.576 1.344a5.5 5.5 0 01-.384.672c-.192.192-.288.384-.576.576l.096-.48.768 1.056v.096h-.096z",
      className: "p1-fil15",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M119.474 127.224c.384.192.768.384 1.152.48.384.096.768 0 1.152-.096.384-.096.672-.384.96-.672l.864-.96c-.096.192-.192.384-.192.672-.096.192-.192.384-.384.576a3 3 0 01-1.056.864c-.48.192-.96.192-1.44 0s-.768-.48-1.056-.864z",
      className: "p1-fil15",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M118.034 123.864c0 .576-.768 1.056-1.632 1.056-.192 0-.384 0-.576-.096a7.767 7.767 0 010-2.112c.192 0 .384-.096.576-.096.96 0 1.632.48 1.632 1.056z",
      className: "p1-fil16",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M124.274 120.408c0 .576 0 1.152.096 1.632.096.576.48.864.864.768.48 0 .768-.48 1.056-.96.192-.48.384-1.056.48-1.632l.192-.096.096.192c0 .576-.192 1.152-.384 1.728-.288.576-.672 1.152-1.44 1.248-.384 0-.768-.096-1.056-.288-.288-.288-.384-.576-.384-.864-.096-.576-.096-1.248.096-1.824l.192-.096.096.192z",
      className: "p1-fil15",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M117.074 119.928c0 .48 0 .96.096 1.344.096.48.288.768.672.672.288 0 .576-.384.768-.768.192-.384.288-.864.384-1.344l.192-.096.096.192c0 .48-.096.96-.288 1.44-.192.48-.48 1.056-1.152 1.152-.288 0-.672-.096-.864-.384-.192-.288-.288-.48-.288-.768-.096-.48 0-1.056.096-1.536l.192-.096z",
      className: "p1-fil15",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M129.842 118.776s.48-8.16 4.991-7.392c0 0-1.728-3.648-6.623-3.84-3.648-.192-7.008 1.728-9.12 4.608-1.152 1.536-2.688 4.32-3.264 6.336 1.728 0 14.016.288 14.016.288z",
      className: "p1-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M133.585 110.616s-3.456 1.44-1.824 7.584c1.728 6.144 5.376 2.304 5.376 2.304s1.152-9.984-3.552-9.888z",
      className: "p1-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M90.867 135.384l-.96 4.991s-18.432 44.255-9.216 46.079c7.488 1.536 25.247-11.424 25.247-11.424l-6.432-10.943-10.463 7.583s5.952-25.439 7.104-28.03c0 0 3.935-2.017 4.511-3.745.192-.672.192-1.824-2.111.288-1.056.96-3.168-.288-2.208-1.92.96-1.631 3.551-1.727 4.415.48 0 0 .864.384 1.248-.288.384-.672-1.152-3.167-3.072-3.167-1.247 0-2.303.48-2.303.48s2.303-5.856 1.824-6.048c-.48-.192-1.248-.096-3.744 6.336 0 0 1.44-5.184 1.536-5.952.096-.672-.672-1.44-1.248.192-.096.192-2.016 5.184-2.016 5.184s.48-3.552.48-3.84c.096-.768-.672-.864-1.056 0-.288.672-1.44 3.648-1.44 3.648z",
      className: "p1-fil14",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M151.249 165.815s.672-17.856-15.552-28.703c0 0-7.391 2.88-12.863 2.303-3.84 9.696-6.528 17.088-12.096 58.175 0 0 11.52-.48 18.912.096 10.943.768 21.887-3.936 21.887-3.936l-.288-27.84z",
      className: "p1-fil17",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M122.834 139.415L99.41 162.743s1.824 15.263 5.952 16.895l17.088-8.928.384-31.199z",
      className: "p1-fil17",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M104.402 195.67l-8.255 1.152c-1.344.192-2.688-.768-2.88-2.208l-2.4-17.184c-.192-1.344.768-2.688 2.112-2.88l8.255-1.152c1.344-.192 2.688.768 2.88 2.208l2.4 17.184c.192 1.344-.768 2.688-2.112 2.88z",
      className: "p1-fil18",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M162.768 179.446l-39.55 1.152v39.935s-.864 6.72 8.447 6.432c9.216-.288 24.096-1.44 24.096-1.44s5.568-2.496 6.72-8.736c1.151-6.144.287-37.439.287-37.439z",
      className: "p1-fil19",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M155.185 182.134s-5.376-44.638-19.104-43.487c-13.727 1.152-7.295 47.999-7.295 47.999l4.607.288s-8.351-47.999 4.032-47.71c12.384.287 14.016 47.998 14.016 47.998z",
      className: "p1-fil19",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M134.833 186.934c-1.44-2.4-2.88-4.8-4.224-7.2-3.743 1.056-7.2 1.92-10.08 2.496-2.591.48-4.991.96-6.815 1.344l-1.728.288c-1.056.192-1.728.288-1.728.288s-5.664-.768-6.912-2.784c-.288.096-.672.576-.576 1.056.384 1.728 2.112 2.688 2.112 2.688s-8.255 1.728-7.871 2.4c.48.672 6.143-.192 6.143-.192s-7.871 1.824-7.2 2.4c.289.192.673.096 6.528-.192 0 0-5.567 1.824-4.607 2.016 1.247.384 5.087-.384 5.087-.384s-3.84 1.44-3.072 1.632c.768.192 11.328-2.112 11.328-2.112s24-3.072 23.711-3.744z",
      className: "p1-fil14",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M159.793 167.063c-9.696 5.183-9.024 4.991-16.896 7.583 0 0-6.624-13.727-10.848-22.847-1.248-2.688-.672-5.856 1.344-7.968 3.264-3.456 8.64-2.496 11.328 1.536 3.936 6.048 15.168 21.696 15.168 21.696z",
      className: "p1-fil17",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M143.857 174.358l-6.432-12.767c-.096-.192-.288-.192-.384-.096-.192.096-.192.288-.096.384l6.432 12.767c.096.192.288.192.384.096.192-.096.192-.288.096-.384z",
      className: "p1-fil20",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M159.313 167.35c-3.552 1.825-6.528 3.648-9.024 4.704v.096a117.894 117.894 0 01-19.776 7.68c.576 2.4 1.152 5.472 1.728 7.872 24.768-3.456 29.951-11.904 30.143-13.056.48-.864-.864-3.744-3.071-7.2z",
      className: "p1-fil14",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }))));




}

function P2() {
  return /*#__PURE__*/(
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "464",
      fillRule: "evenodd",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      version: "1.1",
      viewBox: "0 0 256 464",
      xmlSpace: "preserve" }, /*#__PURE__*/

    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M1515 6513H223V5277h533v429c0 74 60 134 134 134h625z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3334 6513h-722v-673h722z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M2612 6513H1515v-673h83v673z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M2612 6513H1598v-673h1014z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M4626 6513H3334h625v-676c8 2 18 3 27 3h640z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3959 6513h-56v-701c16 13 35 21 56 26v676z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3904 6513h-570v-673h10c103 0 88-65 88-188v-375h420v429c0 43 20 81 52 106z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3344 5840h-10v-563h98v375c0 123 15 188-88 188z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M6445 6513h-722v-673h722z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M5723 6513H4626v-673h83v673z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M5723 6513H4709v-673h1014z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7820 5277h2305v1236h56V5277h-56z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7737 6513H6446h624V5277h750-84v1236z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7070 6513h-56V5277h56z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7015 6513h-570v-673c72-3 129-62 129-134v-429h441z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M6445 5840v-563h129v429c0 72-57 131-129 134z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M10126 6513H8834V5277h1292z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M8834 6513H7737V5277h83v1236z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M8834 6513H7820V5277h1014z" }))), /*#__PURE__*/


    React.createElement("g", { display: "inline" }, /*#__PURE__*/
    React.createElement("path", {
      fillRule: "evenodd",
      d: "M5164 4197L5039 4204 5067 4451 5184 4446z",
      className: "p2-fil21",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -369.781 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M116.925 328.818L98.3 337.362c-1.248.576-1.824 2.016-1.536 3.264H129.5l-1.248-11.904-11.423.096z",
      className: "p2-fil22",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M5399 4197L5274 4204 5302 4451 5419 4446z",
      className: "p2-fil21",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -369.781 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M139.484 328.818l-18.624 8.544c-1.247.576-1.823 2.016-1.535 3.264h32.735l-1.248-11.904-11.424.096z",
      className: "p2-fil22",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M5378 3228L4958 3238 5024 4371 5451 4371z",
      className: "p2-fil23",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -369.781 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M5078 3236L5077 3238 5154 3434 5216 4372 5218 4373 5219 4371 5157 3433 5080 3237z",
      className: "p2-fil24",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -369.781 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M128.348 116.473a9.07 9.07 0 00-2.304 1.248c-6.431 4.991-3.84 16.223.864 21.695 2.592 2.976 6.72 4.704 10.56 3.744 5.568-1.44 7.872-7.392 7.392-12.96-.384-4.128-2.208-8.16-5.376-10.944-3.072-2.687-7.488-4.223-11.232-2.783z",
      className: "p2-fil25",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M124.316 132.216l-.864 19.296c-.192 3.551 2.4 6.72 5.952 7.103a6.787 6.787 0 007.584-6.911l-.384-18.048-12.288-1.536z",
      className: "p2-fil25",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M136.796 145.944v-2.688s-5.472 1.056-9.792-3.84c0 0 2.208 5.28 9.792 6.528z",
      className: "p2-fil26",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M134.396 131.256h-.096c-.288-.288-.864.192-.48.48.576.576 1.632-.192.96-.864-.576-.576-1.632.288-1.056.96.576.672 1.632-.384.864-.864-.768-.576-1.344.672-.48 1.056.384.192.672-.48.192-.672z",
      className: "p2-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M135.932 128.184c-1.44-.096-2.88 0-4.32.192-.672.096-.48 1.056.192.96 1.344-.192 2.688-.288 4.128-.192.672 0 .672-.96.096-.96z",
      className: "p2-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M143.612 129.624c-.288-.288-.864.192-.48.48.576.576 1.632-.192.96-.864-.576-.576-1.632.288-1.056.96.576.672 1.632-.384.864-.864-.768-.576-1.344.672-.48 1.056.384.192.672-.48.192-.672z",
      className: "p2-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M140.06 127.416c1.152-.48 2.496-.768 3.744-.96.576-.096.768.864.192.96-1.248.192-2.4.48-3.552.96-.576.192-.96-.672-.384-.864z",
      className: "p2-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M126.908 120.984c1.92-.672 7.392-1.92 14.592.384l-.864-8.735s-12.48-1.44-22.271 4.224l2.112 12.095s1.055.576 2.207.288c.48.48 1.056.672 1.824.384 1.248-.384 1.536-1.728 1.728-2.88.192-1.92.48-3.84.672-5.664z",
      className: "p2-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M122.684 130.008c2.112.096 3.84.48 4.224-1.344.384-1.632.288-9.216 3.936-7.584 2.688 1.152 4.704 1.056 8.16.096 1.44-.384 2.592.384 2.592.192 0 0-2.88-8.16-11.52-7.487-2.688.192-4.896 2.112-6.048 4.608-1.44 3.071-1.536 6.815-1.44 10.08l.096 1.535z",
      className: "p2-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M139.484 133.752l.768-1.152.096.576c-.384-.288-.576-.576-.768-.864-.192-.288-.288-.672-.384-.96.192.288.48.576.672.768.288.192.576.384.768.384l.48.096-.288.576-1.152.864h-.192v-.192z",
      className: "p2-fil27",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M140.828 135.672c-.288.384-.672.768-1.152.96a2.12 2.12 0 01-1.536 0c-.48-.192-.864-.576-1.152-.96-.096-.192-.288-.384-.384-.672-.096-.192-.192-.48-.192-.672l.96.96c.384.288.672.576 1.056.672.384.192.768.192 1.152.096a6.664 6.664 0 001.248-.48z",
      className: "p2-fil28",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M140.828 135.672c-.192.48-.672.768-1.152.96-.48.192-1.056.192-1.632 0-.48-.192-.864-.576-1.152-.96-.096-.192-.288-.384-.384-.672-.096-.288-.192-.48-.192-.672.384.288.672.672 1.056.96.384.288.672.576 1.056.672.384.192.768.192 1.152.192.384-.096.864-.192 1.248-.384z",
      className: "p2-fil27",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M131.132 131.256h-.192a3.442 3.442 0 003.456 3.456 3.442 3.442 0 003.456-3.456 3.442 3.442 0 00-3.456-3.456 3.441 3.441 0 00-3.456 3.456h.384c0-1.632 1.344-3.072 3.072-3.072 1.632 0 3.072 1.344 3.072 3.072 0 1.632-1.344 3.072-3.072 3.072s-3.072-1.344-3.072-3.072z",
      className: "p2-fil1",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M139.868 129.432h-.192a3.442 3.442 0 003.456 3.456 3.442 3.442 0 003.456-3.456 3.442 3.442 0 00-3.456-3.456 3.442 3.442 0 00-3.456 3.456h.384c0-1.632 1.344-3.072 3.072-3.072 1.632 0 3.072 1.344 3.072 3.072 0 1.632-1.344 3.072-3.072 3.072s-3.072-1.344-3.072-3.072z",
      className: "p2-fil1",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M125.372 135.96c-1.152.864-2.975 1.152-4.224.48-1.343-.576-2.303-2.016-2.495-3.552-.192-1.344.288-2.88 1.344-3.552 1.056-.672 2.88-.48 3.551.672z",
      className: "p2-fil25",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M122.3 133.272c-.287 0-.575-.096-.768-.288-.191-.192-.287-.288-.287-.48 0-.288.192-.576.671-.672a.528.528 0 00.288-.48.528.528 0 00-.48-.288c-.671.192-1.151.672-1.151 1.344 0 .48.192.864.575 1.056.384.288.768.384 1.249.384a.413.413 0 00.383-.384.413.413 0 00-.383-.384z",
      className: "p2-fil27",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M5140 2352L5139 2356 5218 2369 5219 2365z",
      className: "p2-fil1",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -369.781 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M5280 2348L5281 2352 5309 2348 5309 2344z",
      className: "p2-fil1",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -369.781 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M122.108 150.84l-.48-2.784s7.488 0 8.448 3.936c0 0 2.016-3.648 7.776-4.608v4.224l-8.16 2.495-7.68-3.36z",
      className: "p2-fil29",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M153.308 156.695l19.583 5.088s16.224-18.047 16.991-18.623c.769-.672 10.752 2.496 10.752 2.496l-11.52 21.407c-2.783 7.008-6.911 10.944-10.847 11.136l-32.16-6.432 7.297-15.072z",
      className: "p2-fil25",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M189.307 144.024s2.207-4.512 2.592-5.184c.767-1.728 1.92-6.048 1.92-6.048s1.343-.288 1.247 2.688c-.096 2.976.48 2.112.48 2.112s6.24-7.584 7.68-7.008c.576.192-.192 2.016-1.248 2.976s-2.112 2.496-2.112 2.496 5.856-5.28 7.2-4.416c0 0 .672.48-1.248 2.112-2.592 2.112-4.32 4.128-4.32 4.128s5.76-4.128 6.432-3.648c1.056.768-4.8 4.896-5.76 6.432 0 0 4.32-3.36 4.512-2.304.096 1.056-5.28 4.8-7.776 10.368z",
      className: "p2-fil25",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M193.914 138.36s.48.096 1.056.672c.576.576 1.248 1.536 1.248 2.784l-.384-.096c.864-.96 1.92-1.44 2.688-1.536.768-.096 1.248 0 1.248 0 0 .096-.48.096-1.248.288a5.071 5.071 0 00-2.496 1.536l-.384.384v-.48a3.823 3.823 0 00-1.056-2.592c-.48-.576-.96-.768-.864-.864z",
      className: "p2-fil30",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M103.101 155.927l-19.583 5.088s-16.224-18.047-16.992-18.623c-.768-.672-10.752 2.496-10.752 2.496l11.52 21.407c2.784 7.008 6.912 10.944 10.848 11.136l32.159-6.432-7.296-15.072z",
      className: "p2-fil25",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M67.102 143.16s-2.208-4.512-2.592-5.184c-.768-1.728-1.92-6.048-1.92-6.048s-1.344-.288-1.248 2.688c.096 2.976-.48 2.112-.48 2.112s-6.24-7.584-7.68-7.008c-.576.192.192 2.016 1.248 2.976s2.112 2.496 2.112 2.496-5.855-5.28-7.2-4.416c0 0-.671.48 1.249 2.112 2.591 2.112 4.32 4.128 4.32 4.128s-5.76-4.128-6.432-3.648c-1.056.768 4.8 4.896 5.76 6.432 0 0-4.32-3.36-4.512-2.304-.096 1.056 5.28 4.8 7.775 10.272l9.6-4.704z",
      className: "p2-fil25",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M62.494 137.496c0 .096-.384.288-.864.864-.48.576-1.056 1.536-1.056 2.592v.48l-.384-.384a5.07 5.07 0 00-2.496-1.536c-.768-.192-1.248-.192-1.248-.288 0 0 .48-.192 1.248 0 .768.096 1.92.576 2.688 1.536l-.384.096c0-1.248.672-2.304 1.248-2.784.576-.576 1.056-.672 1.056-.672z",
      className: "p2-fil30",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M141.02 151.512c-1.728-.672-3.552-1.056-5.76-1.056-4.608 1.44-9.216 1.44-13.823 0-1.92.192-6.336.48-12.576 2.304l-25.343 8.255-3.84 17.28 28.127-4.704s-2.592 37.15-1.248 43.295l40.99-1.056-1.823-22.56.672-19.68 29.95 4.705-4.127-16.608-31.103-10.08z",
      className: "p2-fil29",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M53.95 146.04l-7.2-4.128c-1.247-.672-1.631-2.304-.96-3.456l8.64-14.976c.672-1.248 2.208-1.632 3.456-.96l7.2 4.128c1.248.672 1.632 2.304.96 3.456l-8.64 14.976c-.672 1.248-2.304 1.632-3.456.96z",
      className: "p2-fil18",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M171.643 268.244v.48h24.095v-36.383c0-2.976-2.4-5.376-5.375-5.376h-13.92a5.367 5.367 0 00-5.376 5.376v36.383h.48v-.48h.48v-35.903a4.404 4.404 0 014.416-4.416h13.92c2.4 0 4.415 2.016 4.415 4.416v35.423h-23.23v.48h.48-.48z",
      className: "p2-fil22",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M178.555 229.461h10.272c1.152 0 2.016-.96 2.016-2.016 0-1.152-.96-2.016-2.016-2.016h-10.272c-1.152 0-2.016.96-2.016 2.016 0 1.152.96 2.016 2.016 2.016z",
      className: "p2-fil31",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M165.403 340.242h29.951a6.678 6.678 0 006.72-6.72v-68.926a6.678 6.678 0 00-6.72-6.72h-29.95a6.678 6.678 0 00-6.72 6.72v68.926a6.678 6.678 0 006.72 6.72z",
      className: "p2-fil31",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M179.13 340.242h29.952a6.678 6.678 0 006.72-6.72v-68.926a6.678 6.678 0 00-6.72-6.72h-29.951a6.678 6.678 0 00-6.72 6.72v68.926a6.678 6.678 0 006.72 6.72z",
      className: "p2-fil32",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M205.05 326.899c.864 0 1.632-.768 1.632-1.632v-52.99c0-.865-.768-1.633-1.632-1.633-.864 0-1.632.768-1.632 1.632v52.99c0 .865.768 1.632 1.632 1.632z",
      className: "p2-fil33",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M195.642 326.899c.864 0 1.632-.768 1.632-1.632v-52.99c0-.865-.768-1.633-1.632-1.633-.864 0-1.632.768-1.632 1.632v52.99c0 .865.768 1.632 1.632 1.632z",
      className: "p2-fil33",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M186.33 326.899c.865 0 1.633-.768 1.633-1.632v-52.99c0-.865-.768-1.633-1.632-1.633-.864 0-1.632.768-1.632 1.632v52.99c0 .865.768 1.632 1.632 1.632z",
      className: "p2-fil33",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }))));




}

function P3() {
  return /*#__PURE__*/(
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "464",
      fillRule: "evenodd",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      version: "1.1",
      viewBox: "0 0 256 464",
      xmlSpace: "preserve" }, /*#__PURE__*/

    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M1515 6513H223V5277h533v429c0 74 60 134 134 134h625z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3334 6513h-722v-673h722z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M2612 6513H1515v-673h83v673z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M2612 6513H1598v-673h1014z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M4626 6513H3334h625v-676c8 2 18 3 27 3h640z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3959 6513h-56v-701c16 13 35 21 56 26v676z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3904 6513h-570v-673h10c103 0 88-65 88-188v-375h420v429c0 43 20 81 52 106z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M3344 5840h-10v-563h98v375c0 123 15 188-88 188z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M6445 6513h-722v-673h722z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M5723 6513H4626v-673h83v673z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M5723 6513H4709v-673h1014z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7820 5277h2305v1236h56V5277h-56z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7737 6513H6446h624V5277h750-84v1236z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7070 6513h-56V5277h56z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M7015 6513h-570v-673c72-3 129-62 129-134v-429h441z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M6445 5840v-563h129v429c0 72-57 131-129 134z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M10126 6513H8834V5277h1292z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M8834 6513H7737V5277h83v1236z" })), /*#__PURE__*/

    React.createElement("clipPath", { clipRule: "nonzero" }, /*#__PURE__*/
    React.createElement("path", { d: "M8834 6513H7820V5277h1014z" }))), /*#__PURE__*/


    React.createElement("g", { display: "inline" }, /*#__PURE__*/
    React.createElement("path", {
      fillRule: "evenodd",
      d: "M8203 4182L8328 4189 8300 4436 8183 4431z",
      className: "p3-fil21",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -667.373 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M129.116 327.378l18.624 8.544c1.248.576 1.824 2.016 1.536 3.264H116.54l1.248-11.903 11.423.095z",
      className: "p3-fil22",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M7968 4182L8093 4189 8065 4436 7948 4431z",
      className: "p3-fil21",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -667.373 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M106.557 327.378l18.623 8.544c1.248.576 1.824 2.016 1.536 3.264H93.981l1.248-11.903 11.424.095z",
      className: "p3-fil22",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M7989 3176L8417 3186 8350 4342 7915 4342z",
      className: "p3-fil34",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -667.373 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      d: "M8219 3386L8297 3187 8291 3184 8212 3385 8149 4342 8156 4343z",
      className: "p3-fil35",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      transform: "matrix(.096 0 0 .096 -667.373 -95.97)" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M113.469 137.496s1.152 4.032 3.84 5.856c0-.192.096-7.392.096-7.392l-4.032 1.536z",
      className: "p3-fil22",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M121.148 120.696c-.768.192-1.535.576-2.207 1.056-6.432 4.32-4.8 15.072-.672 20.544 2.304 3.072 6.047 4.896 9.695 4.224 5.376-.96 7.968-6.432 7.872-11.712-.096-3.936-1.536-7.872-4.32-10.656-2.688-2.784-6.72-4.512-10.368-3.456z",
      className: "p3-fil36",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M117.02 138.936c-1.151.768-2.88.864-4.031.192-1.248-.672-2.016-2.112-2.112-3.552-.096-1.344.48-2.688 1.536-3.264 1.056-.576 2.688-.288 3.36.864z",
      className: "p3-fil36",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M116.157 135.384l-2.208 18.24c-.48 3.36 1.824 6.527 5.088 7.103 3.84.768 7.487-2.112 7.68-5.952l.96-17.087z",
      className: "p3-fil36",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M127.004 149.208l.192-2.496s-5.28.672-8.927-4.32c0 0 1.727 5.184 8.735 6.816z",
      className: "p3-fil26",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M125.852 135.192c-.288-.288-.768.096-.48.384.576.576 1.536-.096.96-.768-.576-.672-1.536.192-1.056.768.48.672 1.536-.192.864-.768-.672-.576-1.344.576-.576.96.384.192.672-.384.288-.576z",
      className: "p3-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M127.484 132.312c-1.344-.192-2.784-.192-4.128-.096-.576.096-.48.96.096.96 1.248-.096 2.592-.096 3.936.096.576.096.768-.864.096-.96z",
      className: "p3-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M134.012 134.232c-.288-.288-.768.096-.48.384.576.576 1.536-.096.96-.768-.576-.672-1.536.192-1.056.768.48.672 1.536-.192.864-.768-.672-.576-1.344.576-.576.96.384.192.672-.384.288-.576z",
      className: "p3-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M130.46 137.88l.864-1.056.096.48c-.384-.288-.576-.576-.672-.864a1.852 1.852 0 01-.288-.96c.288.576.768 1.152 1.248 1.248l.384.096-.288.384-1.152.672h-.192v-.096z",
      className: "p3-fil28",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M130.46 137.88l.864-1.056.096.48c-.384-.288-.576-.576-.672-.864a1.852 1.852 0 01-.288-.96c.288.576.768 1.152 1.248 1.248l.384.096-.288.384-1.152.672h-.192v-.096z",
      className: "p3-fil28",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M131.42 131.928c1.152-.384 2.4-.576 3.648-.672.576 0 .672.864.096.864a21.642 21.642 0 00-3.456.576c-.48.192-.864-.672-.384-.864z",
      className: "p3-fil13",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M114.717 136.248c-.288 0-.576-.096-.768-.288-.192-.192-.288-.384-.288-.48 0-.288.288-.576.672-.672.192 0 .288-.192.192-.384 0-.192-.192-.288-.384-.192a1.43 1.43 0 00-1.152 1.152v.096c0 .384.192.672.48.96.288.288.672.384 1.056.384.192 0 .288-.096.288-.288 0-.192-.096-.288-.288-.288z",
      className: "p3-fil28",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M125.756 147c-3.072-.384-9.311-2.496-10.175-12.672l1.824-1.536s4.991 9.696 18.143 4.8c0 0-.672 7.68-6.816 9.216-.96.288-2.016.288-2.976.192z",
      className: "p3-fil22",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M128.636 140.184l2.784-.096s-1.152 2.4-2.784.096z",
      className: "p3-fil1",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M119.325 125.976s7.007-5.568 13.151-.768c0 0-4.512-7.487-11.615-6.047-7.2 1.44-8.832 8.735-8.544 13.247 0 0 2.304-.768 3.36.864v1.152s1.824 1.536 1.824 1.344c0-.192 4.8-6.72 1.92-9.792z",
      className: "p3-fil22",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M119.325 125.976s8.16 2.976 14.303.96c0 0-2.016-6.144-10.464-5.28-8.447.864-3.84 4.32-3.84 4.32z",
      className: "p3-fil22",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M169.243 165.911l-8.256-1.248c-1.344-.192-2.304-1.536-2.112-2.88l2.592-17.183c.192-1.344 1.536-2.304 2.88-2.112l8.256 1.248c1.344.192 2.304 1.536 2.112 2.88l-2.592 17.183c-.192 1.344-1.536 2.304-2.88 2.112z",
      className: "p3-fil18",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M136.796 163.703c1.824 5.088 3.552 11.52 4.128 18.432 1.344 16.031-.48 28.99-.48 28.99l-42.623 1.249 2.496-47.23c13.824-1.057 25.151-2.017 36.48-1.537z",
      className: "p3-fil37",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M106.269 167.351s4.128-16.223 4.416-16.415c0 0 1.536-.48 3.36-.48.576 1.056 2.016 2.496 6.24 2.592 4.895.192 5.951-1.344 6.623-2.112 5.28 1.824 9.408 3.263 9.984 10.175.288 3.744-.096 2.208 1.344 19.2l.672 8.447-36.479-.192 3.744-21.215z",
      className: "p3-fil37",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M166.94 201.43c-15.168 5.472-29.28-17.567-29.28-17.567l13.536-11.328 11.135 14.496 2.88-27.648 8.16-.672s2.88 39.36-6.432 42.72z",
      className: "p3-fil38",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M172.891 167.64c-2.304 0-4.704 0-7.008-.097v-1.056l-.288-2.784s-1.92-5.472-4.32-6.624c.096-.384.576-.864 1.152-.864 2.016.192 3.264 2.016 3.264 2.016s.96-9.503 1.728-9.12c.864.385.864 5.376.864 5.376s.768-7.583 1.44-6.911c.288.288 0 0 .384 6.623 0 0 1.44-5.855 1.92-4.8.48 1.345.192 5.76.192 5.76s1.152-4.511 1.536-3.647c.288.864-.96 12.96-.96 12.96s0 1.247.096 2.975z",
      className: "p3-fil38",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M126.908 150.936s9.6-1.44 31.103 28.223l-18.623 13.727-12.384-41.95z",
      className: "p3-fil37",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M140.06 173.783l.768 17.663c0 .192.192.288.384.288s.288-.192.288-.384l-.768-17.663c0-.192-.192-.288-.384-.288s-.288.192-.288.384z",
      className: "p3-fil39",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M159.067 250.485h-42.43c-1.728 0-3.072-1.344-3.072-3.072v-30.911c0-1.728 1.344-3.072 3.072-3.072h42.43a3.033 3.033 0 013.072 3.072v30.91a3.033 3.033 0 01-3.072 3.073z",
      className: "p3-fil18",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M146.492 216.214v-.672h-14.976v-3.264c0-2.016.768-3.744 2.112-5.088a7.255 7.255 0 015.088-2.112c2.016 0 3.744.768 5.088 2.112 1.248 1.344 2.112 3.072 2.112 5.088v3.936h.672v-.672.672h.672v-3.936c0-4.704-3.84-8.448-8.448-8.448-4.704 0-8.448 3.84-8.448 8.448v4.608h16.992v-.672h-.672z",
      className: "p3-fil18",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M137.18 199.798c-.768 0-1.44.096-2.016.192l-32.83-2.784.191-9.023s-6.624-.96-13.344-.288c0 0-4.607 17.759 4.608 20.735 7.584 2.4 35.807-.096 40.895-.576.768.192 1.728.384 2.592.384 3.648 0 6.624-1.92 6.624-4.32 0-2.4-2.976-4.32-6.624-4.32z",
      className: "p3-fil38",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M113.277 150.648s-16.512-2.112-25.824 37.535c0 0 7.008.192 15.936.383l9.792-37.918z",
      className: "p3-fil37",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }), /*#__PURE__*/

    React.createElement("path", {
      fillRule: "evenodd",
      strokeWidth: "0.096",
      d: "M102.813 188.566l.48-11.807c0-.192-.096-.384-.288-.384-.192 0-.384.096-.384.288l-.48 11.808c0 .191.096.383.288.383.192 0 .384-.096.384-.288z",
      className: "p3-fil39",
      clipRule: "evenodd",
      imageRendering: "optimizeQuality",
      opacity: "1",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision" }))));




}

function App() {
  const [{ x }, set] = useSpring(() => ({
    x: 0 }));

  const bind = useDrag(
  ({ movement: [x], velocity, down, direction: [dx], tap }) => {
    if (!down) {
      if (x > -100) {
        set({ x: 0 });
      } else if (x < -300) {
        set({ x: -400 });
      } else {
        set({ x: -200 });
      }
      return;
    }
    set({ x });
  },
  {
    initial: () => [x.get(), 0],
    bounds: { left: -400, right: 0, top: 0, bottom: 476 },
    rubberband: true });


  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("div", _extends({ className: "container" }, bind()), /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("div", { className: "title1" }, /*#__PURE__*/
    React.createElement(animated.ul, {
      className: "titleList",
      style: {
        y: x.to({
          range: [-400, -200, 0],
          output: [-60, -30, 0] }) } }, /*#__PURE__*/



    React.createElement("li", { className: "titleItem" }, "Outstanding"), /*#__PURE__*/
    React.createElement("li", { className: "titleItem" }, "Extraordinary"), /*#__PURE__*/
    React.createElement("li", { className: "titleItem" }, "Superb"))), /*#__PURE__*/


    React.createElement("div", { className: "title2" }, "REAL ESTATE"), /*#__PURE__*/
    React.createElement("div", { className: "title3" }, "AGENTS")), /*#__PURE__*/

    React.createElement("svg", { className: "blob", width: "256", height: "464", viewBox: "0 0 256 464" }, /*#__PURE__*/
    React.createElement(animated.path, {
      d: x.to({
        range: [-400, -200, 0],
        output: [
        "M 157.81292,131.16918 C 128.33979,127.45582 59.004493,121.76045 53.287478,168.06051 47.570462,214.36057 86.454799,213.14326 77.881699,234.66986 69.308599,256.19646 59.042495,268.13837 67.634107,288.98209 76.225718,309.82581 103.27857,320.05328 138.34249,312.55156 173.40641,305.04984 204.93111,298.87002 208.02612,279.75926 211.12113,260.6485 189.48716,257.88808 188.5557,229.54606 187.62424,201.20404 212.01456,174.45091 200.8528,155.7634 189.69104,137.07589 187.28605,134.88254 157.81292,131.16918 Z",
        "M 157.81292,131.16918 C 128.33979,127.45582 48.756902,138.1566 53.287478,168.06051 57.818054,197.96442 75.182448,197.77187 73.782662,224.42227 72.382877,251.07266 70.314846,257.89078 72.757903,278.7345 75.20096,299.57822 88.114636,303.32873 113.94876,307.60312 139.78288,311.87751 159.84171,314.24141 176.25858,295.13065 192.67546,276.01989 203.83379,256.86332 190.60522,228.5213 177.37665,200.17928 205.866,189.8223 211.10039,171.13479 216.33478,152.44728 187.28605,134.88254 157.81292,131.16918 Z",
        "M 157.81292,131.16918 C 128.33979,127.45582 86.672992,124.83473 71.733144,166.01099 56.793295,207.18725 69.033893,203.92043 80.955976,230.57083 92.87806,257.22123 55.968217,259.9403 59.436033,279.75926 62.90385,299.57822 94.985717,299.83924 132.0922,306.16316 169.19868,312.48708 186.48544,320.38997 198.80328,288.98209 211.12113,257.57422 199.73475,245.59097 195.72902,217.24895 191.72328,188.90693 209.96504,178.54995 215.19943,159.86244 220.43382,141.17493 187.28605,134.88254 157.81292,131.16918 Z"] }),


      style: {
        fill: x.to({
          range: [-400, -200, 0],
          output: ["#fdeae7", "#d3eacf", "#eae7fd"] }) } })), /*#__PURE__*/




    React.createElement(animated.div, {
      className: "person person1",
      style: { transform: x.to(x => `rotate(${x / 10}deg)`) } }, /*#__PURE__*/

    React.createElement(P1, null)), /*#__PURE__*/

    React.createElement(animated.div, {
      className: "person person2",
      style: { transform: x.to(x => `rotate(${x / 10 + 20}deg)`) } }, /*#__PURE__*/

    React.createElement(P2, null)), /*#__PURE__*/

    React.createElement(animated.div, {
      className: "person person3",
      style: { transform: x.to(x => `rotate(${x / 10 + 40}deg)`) } }, /*#__PURE__*/

    React.createElement(P3, null)), /*#__PURE__*/

    React.createElement("div", { className: "text" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facere"), /*#__PURE__*/



    React.createElement("div", { className: "navDots" }, /*#__PURE__*/
    React.createElement(animated.div, {
      className: "navDot",
      style: {
        backgroundColor: x.to({
          range: [-400, -200, 0],
          output: ["#000", "#000", "#e0c5c0"] }),

        transform: x.to({
          range: [-400, -200, 0],
          output: ["scale(1)", "scale(1)", "scale(1.2)"] }) } }), /*#__PURE__*/



    React.createElement(animated.div, {
      className: "navDot",
      style: {
        backgroundColor: x.to({
          range: [-400, -200, 0],
          output: ["#000", "#e0c5c0", "#000"] }),

        transform: x.to({
          range: [-400, -200, 0],
          output: ["scale(1)", "scale(1.2)", "scale(1)"] }) } }), /*#__PURE__*/



    React.createElement(animated.div, {
      className: "navDot",
      style: {
        backgroundColor: x.to({
          range: [-400, -200, 0],
          output: ["#e0c5c0", "#000", "#000"] }),

        transform: x.to({
          range: [-400, -200, 0],
          output: ["scale(1.2)", "scale(1)", "scale(1)"] }) } })))));







}

ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById("root"));