/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/advanced-button/attributes.js":
/*!**************************************************!*\
  !*** ./src/blocks/advanced-button/attributes.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/advanced-button/constants/index.js");
/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generators */ "./src/generators/index.js");


const {
  generateResRangleControlAttributes
} = _generators__WEBPACK_IMPORTED_MODULE_1__;
const {
  BUTTON_FONTSIZE
} = _constants__WEBPACK_IMPORTED_MODULE_0__;
const attributes = {
  uniqueId: {
    type: 'string'
  },
  blockStyle: {
    type: 'object'
  },
  preset: {
    type: 'string'
  },
  btnText: {
    type: 'string'
  },
  btnLinkObj: {
    type: 'object'
  },
  btnRadius: {
    type: 'string',
    default: '5'
  },
  btnAlign: {
    type: 'string',
    default: 'left'
  },
  btnBorder: {
    type: 'number',
    default: '1'
  },
  btnborderStyle: {
    type: 'string',
    default: 'solid'
  },
  btnBorderColor: {
    type: 'string',
    default: '#ccc'
  },
  btnColor: {
    type: 'string',
    default: '#E5F2EB'
  },
  btnHoverColor: {
    type: 'string',
    default: '#4248f5'
  },
  btnBgColor: {
    type: 'string',
    default: '#18C976'
  },
  btnbgHoverColor: {
    type: 'string',
    default: '#cccdeb'
  },
  btnPadding: {
    type: 'object',
    default: {
      top: '5px',
      left: '20px',
      right: '20px',
      bottom: '5px'
    }
  },
  ...generateResRangleControlAttributes({
    controlName: BUTTON_FONTSIZE,
    defaults: {
      [`${BUTTON_FONTSIZE}DeskRange`]: 18,
      [`${BUTTON_FONTSIZE}TabRange`]: 12,
      [`${BUTTON_FONTSIZE}MobRange`]: 10,
      [`${BUTTON_FONTSIZE}Unit`]: 'px'
    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/advanced-button/constants/index.js":
/*!*******************************************************!*\
  !*** ./src/blocks/advanced-button/constants/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUTTON_FONTSIZE": function() { return /* binding */ BUTTON_FONTSIZE; }
/* harmony export */ });
const BUTTON_FONTSIZE = 'buttonFontSize';

/***/ }),

/***/ "./src/blocks/advanced-button/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/advanced-button/edit.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/blocks/advanced-button/constants/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/advanced-button/editor.scss");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/advanced-button/inspector.js");
/* harmony import */ var _helper_softminify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/softminify */ "./src/helper/softminify.js");

/* eslint-disable no-console */


const {
  Fragment,
  useEffect
} = wp.element;

const {
  BUTTON_FONTSIZE
} = _constants__WEBPACK_IMPORTED_MODULE_3__;

// editor style


/**
 * Internal dependencies
 */


function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    uniqueId,
    blockStyle,
    preset,
    btnText,
    btnRadius,
    btnAlign,
    btnBorder,
    btnborderStyle,
    btnBorderColor,
    btnBgColor,
    btnbgHoverColor,
    btnColor,
    btnHoverColor,
    btnPadding
  } = attributes;
  useEffect(() => {
    if (!uniqueId) {
      setAttributes({
        uniqueId: `bdt-blocks-${clientId.slice(0, 8)}`
      });
    }
  }, []);
  const {
    [`${BUTTON_FONTSIZE}DeskRange`]: btnFontSizeDesk,
    [`${BUTTON_FONTSIZE}TabRange`]: btnFontSizeTab,
    [`${BUTTON_FONTSIZE}MobRange`]: btnFontSizeMob,
    [`${BUTTON_FONTSIZE}Unit`]: btnFontUnit
  } = attributes;

  /**
   * Presets Based Styles
   */

  let presetStyles;
  switch (preset) {
    case 'style-1':
      presetStyles = `
			.${uniqueId} .bdt-link-btn span{
				
				box-sizing: border-box;
				cursor: pointer;
				display: inline-block;
				font-weight: 400;
				text-align: center;
				text-transform: none;
				transition: .2s ease-in;
			
			 }
			 .${uniqueId} .bdt-link-btn a{
	
				box-sizing: border-box;
				cursor: pointer;
				display: inline-block;
				font-weight: 400;
				text-align: center;
				text-transform: none;
				transition: .2s ease-in;
				white-space: wrap;
			 }
			
			`;
      break;
    case 'style-2':
      presetStyles = `
			.${uniqueId} .bdt-link-btn span{
				box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				display: inline-block;
				text-align:center;
			 }
			 .${uniqueId} .bdt-link-btn a{
				box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				display: inline-block;
				text-align:center
				white-space: wrap;
			 }
			
			
			 .${uniqueId} .bdt-link-btn span:hover {
				 	background-color: gray;
				 	text-decoration: none;
				 	box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				 	border: 1px solid #395ddf;
				 }
			.${uniqueId} .bdt-link-btn a:hover {
					background-color: gray;
					text-decoration: none;
					box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
					border: 1px solid #395ddf;
				}	 
			.${uniqueId} .bdt-link-btn span:focus {
				 	text-decoration: none;
				 }

			.${uniqueId} .bdt-link-btn a:focus {
					text-decoration: none;
				}	 
	
			.${uniqueId} .bdt-link-btn span:active {
				box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
				outline: 0;
			}
			.${uniqueId} .bdt-link-btn a:active {
				box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
				outline: 0;
			}
		
			.${uniqueId} .bdt-link-btn span:not([disabled]):active {
				box-shadow: #fff 2px 2px 0 0, #395ddf 2px 2px 0 1px;
				transform: translate(2px, 2px);
			}
			
			.${uniqueId} .bdt-link-btn a:not([disabled]):active {
				box-shadow: #fff 2px 2px 0 0, #395ddf 2px 2px 0 1px;
				transform: translate(2px, 2px);
			}
         
			`;
      break;
    case 'style-3':
      presetStyles = `
			.${uniqueId} .bdt-link-btn span {
				display: inline-block;
				transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
				margin: 0;
				text-align:center;
				

			}
			.${uniqueId} .bdt-link-btn a {
				display: inline-block;
				transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
				margin: 0; 
				text-align:center;
				white-space: wrap;
			}
			  
			.${uniqueId} .bdt-link-btn span:disabled {
				pointer-events: none;
			}
			.${uniqueId} .bdt-link-btn a:disabled {
				pointer-events: none;
			}

            .${uniqueId} .bdt-link-btn span:hover{
				box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
			     transform: translateY(-2px);
			}
			.${uniqueId} .bdt-link-btn a:hover{
				box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
			     transform: translateY(-2px);
			}

			`;
      break;
    default:
      '';
  }
  const deskStyles = `
	
		.${uniqueId} .bdt-link-btn{
			display: flex;
			align-items: ${btnAlign};
			flex-direction: column;
		};
 	    .${uniqueId} .bdt-link-btn span{
			border:${btnBorder ? btnBorder : 1}px ${btnborderStyle} ${btnBorderColor ? btnBorderColor : '#ccc'};	
			font-size:${btnFontSizeDesk}${btnFontUnit};
			border-radius:${btnRadius}px;
			background-color: ${btnBgColor};
			padding: ${btnPadding.top ? btnPadding.top : '5px'}  ${btnPadding.right ? btnPadding.right : '20px'} ${btnPadding.bottom ? btnPadding.bottom : '5px'} ${btnPadding.left ? btnPadding.left : '20px'};
			color: ${btnColor};
			line-height: 2.2;
		}
		.${uniqueId} .bdt-link-btn span:hover{
			color:${btnHoverColor};
			background-color:${btnbgHoverColor};
		}
		.${uniqueId} .bdt-link-btn a{
			border:${btnBorder ? btnBorder : 1}px ${btnborderStyle} ${btnBorderColor ? btnBorderColor : '#ccc'};
			font-size:${btnFontSizeDesk}${btnFontUnit};
			border-radius:${btnRadius}px;
			background-color: ${btnBgColor};
			padding: ${btnPadding.top ? btnPadding.top : '5px'}  ${btnPadding.right ? btnPadding.right : '20px'} ${btnPadding.bottom ? btnPadding.bottom : '5px'} ${btnPadding.left ? btnPadding.left : '20px'};
			color: ${btnColor};
			line-height: 2.2;
		}
		.${uniqueId} .bdt-link-btn a:hover{
			color:${btnHoverColor};
			background-color:${btnbgHoverColor};
		}
		${presetStyles}
	`;

  // tab style

  const tabStyles = `
	.${uniqueId} .bdt-link-btn{
		display: flex;
		align-items: ${btnAlign};
		flex-direction: column;
	};
	.${uniqueId} .bdt-link-btn span{
		border:${btnBorder ? btnBorder : 1}px ${btnborderStyle} ${btnBorderColor ? btnBorderColor : '#ccc'};
		font-size:${btnFontSizeTab}${btnFontUnit};
		border-radius:${btnRadius}px;
		background-color: ${btnBgColor};
		padding: ${btnPadding.top ? btnPadding.top : '5px'}  ${btnPadding.right ? btnPadding.right : '25px'} ${btnPadding.bottom ? btnPadding.bottom : '5px'} ${btnPadding.left ? btnPadding.left : '25px'};
		color: ${btnColor};
		line-height: 2.2;
	}
	.${uniqueId} .bdt-link-btn span:hover{
		color:${btnHoverColor};
		background-color:${btnbgHoverColor};
	}
	.${uniqueId} .bdt-link-btn a{
		border:${btnBorder ? btnBorder : 1}px ${btnborderStyle} ${btnBorderColor ? btnBorderColor : '#ccc'};
		font-size:${btnFontSizeTab}${btnFontUnit};
		border-radius:${btnRadius}px;
		background-color: ${btnBgColor};
		padding: ${btnPadding.top ? btnPadding.top : '5px'}  ${btnPadding.right ? btnPadding.right : '20px'} ${btnPadding.bottom ? btnPadding.bottom : '5px'} ${btnPadding.left ? btnPadding.left : '20px'};
		color: ${btnColor};
		line-height: 2.2;
	}
	.${uniqueId} .bdt-link-btn a:hover{
		color:${btnHoverColor};
		background-color:${btnbgHoverColor};
	}
		${presetStyles}
	`;

  // mob style

  const mobStyles = `
	.${uniqueId} .bdt-link-btn{
		display: flex;
		align-items: ${btnAlign};
		flex-direction: column;
	};
	.${uniqueId} .bdt-link-btn span{
		border:${btnBorder ? btnBorder : 1}px ${btnborderStyle} ${btnBorderColor ? btnBorderColor : '#ccc'};
		font-size:${btnFontSizeMob}${btnFontUnit};
		border-radius:${btnRadius}px;
		background-color: ${btnBgColor};
		padding: ${btnPadding.top ? btnPadding.top : '5px'}  ${btnPadding.right ? btnPadding.right : '20px'} ${btnPadding.bottom ? btnPadding.bottom : '5px'} ${btnPadding.left ? btnPadding.left : '20px'};
		color: ${btnColor};
		line-height: 2.2;
	}
	.${uniqueId} .bdt-link-btn span:hover{
		color:${btnHoverColor};
		background-color:${btnbgHoverColor};
	}
	.${uniqueId} .bdt-link-btn a{
		border:${btnBorder ? btnBorder : 1}px ${btnborderStyle} ${btnBorderColor ? btnBorderColor : '#ccc'};
		font-size:${btnFontSizeMob}${btnFontUnit};
		border-radius:${btnRadius}px;
		background-color: ${btnBgColor};
		padding: ${btnPadding.top ? btnPadding.top : '5px'}  ${btnPadding.right ? btnPadding.right : '20px'} ${btnPadding.bottom ? btnPadding.bottom : '5px'} ${btnPadding.left ? btnPadding.left : '20px'};
		color: ${btnColor};
		line-height: 2.2;
	}
	.${uniqueId} .bdt-link-btn a:hover{
		color:${btnHoverColor};
		background-color:${btnbgHoverColor};
	}
	${presetStyles}
	
	`;

  /**
   * Block All Styles
   */
  const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;
  useEffect(() => {
    if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
      setAttributes({
        blockStyle: blockStyleCss
      });
    }
  }, [attributes]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `${(0,_helper_softminify__WEBPACK_IMPORTED_MODULE_6__.softMinifyCssStrings)(blockStyleCss)}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: uniqueId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-button-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-link-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "bdt-button",
    tagName: "span",
    value: btnText,
    onChange: content => setAttributes({
      btnText: content
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Label…', 'advanced-button')
  }))))));
}

/***/ }),

/***/ "./src/blocks/advanced-button/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/advanced-button/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/advanced-button/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/advanced-button/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/advanced-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/advanced-button/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/advanced-button/attributes.js");




/**
 * Internal dependencies
 */



// import attributes


/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: 'admin-site-alt3'
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/advanced-button/inspector.js":
/*!*************************************************!*\
  !*** ./src/blocks/advanced-button/inspector.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/advanced-button/constants/index.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls */ "./src/controls/index.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/advanced-button/attributes.js");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const {
  ResRangleControl,
  AlignmentControl,
  ColorControl,
  TabPanelControl
} = _controls__WEBPACK_IMPORTED_MODULE_5__;
const {
  BUTTON_FONTSIZE
} = _constants__WEBPACK_IMPORTED_MODULE_4__;

const alignIconOption = [{
  name: 'editor-alignleft',
  value: 'flex-start'
}, {
  name: 'editor-aligncenter',
  value: 'center'
}, {
  name: 'editor-alignright',
  value: 'flex-end'
}, {
  name: 'menu-alt',
  value: 'stretch'
}];
const Inspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    preset,
    btnText,
    btnLinkObj,
    btnRadius,
    btnAlign,
    btnBorder,
    btnborderStyle,
    btnBorderColor,
    btnColor,
    btnHoverColor,
    btnBgColor,
    btnbgHoverColor,
    btnPadding
  } = attributes;
  const objAttrs = {
    attributes,
    setAttributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  const bdtboxcontrol = newValue => {
    setAttributes({
      btnPadding: newValue
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'advanced-button'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('preset', 'advanced-button'),
    value: preset,
    options: [{
      label: 'Preset 1',
      value: 'style-1'
    }, {
      label: 'Preset 2',
      value: 'style-2'
    }, {
      label: 'Preset 3',
      value: 'style-3'
    }],
    onChange: presetV => {
      setAttributes({
        preset: presetV
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Label', 'advanced-button'),
    value: btnText,
    onChange: v => setAttributes({
      btnText: v
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, {
    searchInputPlaceholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link Here..', 'advanced-button'),
    value: btnLinkObj,
    settings: [{
      id: 'openInNewTab',
      title: 'Open in new tab?'
    }],
    onChange: data => setAttributes({
      btnLinkObj: data
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResRangleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'advanced-button'),
    controlName: BUTTON_FONTSIZE,
    objAttrs: objAttrs,
    noUnits: false,
    max: 100,
    min: 5
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Padding', 'advanced-button'),
    values: btnPadding,
    onChange: newValue => bdtboxcontrol(newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Radius', 'advanced-button'),
    value: btnRadius,
    onChange: btnValue => setAttributes({
      btnRadius: btnValue
    }),
    min: 1,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Alignment', 'advanced-button'),
    value: btnAlign,
    onChange: value => setAttributes({
      btnAlign: value
    }),
    options: alignIconOption
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'advanced-button'),
    value: btnBorder,
    onChange: border => setAttributes({
      btnBorder: border
    }),
    min: 0,
    max: 10
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Style', 'advanced-button'),
    value: btnborderStyle,
    options: [{
      label: 'Solid',
      value: 'solid'
    }, {
      label: 'Dotted',
      value: 'dotted'
    }, {
      label: 'Dashed',
      value: 'dashed'
    }, {
      label: 'Double',
      value: 'double'
    }, {
      label: 'Groove',
      value: 'groove'
    }],
    onChange: borderStyle => {
      setAttributes({
        btnborderStyle: borderStyle
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border color', 'advanced-button'),
    color: btnBorderColor,
    colorName: "btnBorderColor",
    onChange: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanelControl, {
    normalComponent: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'advanced-button'),
      color: btnColor,
      colorName: "btnColor",
      onChange: setAttributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background color', 'advanced-button'),
      color: btnBgColor,
      colorName: "btnBgColor",
      onChange: setAttributes
    })),
    hoverComponent: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Color', 'advanced-button'),
      color: btnHoverColor,
      colorName: "btnHoverColor",
      onChange: setAttributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Hover', 'advanced-button'),
      color: btnbgHoverColor,
      colorName: "btnbgHoverColor",
      onChange: setAttributes
    }))
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/advanced-button/save.js":
/*!********************************************!*\
  !*** ./src/blocks/advanced-button/save.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    btnText,
    btnLinkObj
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `${uniqueId}`
  }), btnText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-button-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-link-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: btnLinkObj && btnLinkObj.url && btnLinkObj.url,
    target: btnLinkObj && btnLinkObj.openInNewTab && '_blank',
    rel: btnLinkObj && btnLinkObj.openInNewTab ? 'noopener noreferrer' : 'noopener'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: btnText
  }))))));
}

/***/ }),

/***/ "./src/controls/alignment-control/index.js":
/*!*************************************************!*\
  !*** ./src/controls/alignment-control/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/alignment-control/style.scss");

/**
 * wordpress dependencies
 */



// import style

const AlignmentControl = _ref => {
  let {
    label,
    value,
    instanceId,
    options,
    onChange
  } = _ref;
  const id = `btn-group-${instanceId}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    className: "bdt-alignment",
    id: id,
    label: label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "btn-group",
    id: id
  }, options && options.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: index,
      icon: item.name,
      variant: value === item.value ? 'primary' : 'secondary',
      onClick: () => onChange(item.value)
    });
  })));
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withInstanceId)(AlignmentControl));

/***/ }),

/***/ "./src/controls/color-control/index.js":
/*!*********************************************!*\
  !*** ./src/controls/color-control/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/color-control/style.scss");

/**
 * WordPress dependencies
 */




/**
 * Color Control
 */

const ColorControl = _ref => {
  let {
    label,
    color,
    onChange,
    colorName
  } = _ref;
  const [showColorPanel, setShowColorPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-color-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
					.bdt-color-control-wrapper .components-base-control__label, .bdt-color-control-wrapper .components-base-control__field, .bdt-color-control-wrapper .components-base-control {
						margin-bottom: 0 !important;
					}
				`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: {
      justifyContent: 'flex-end'
    },
    gap: 0
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    id: "color-control",
    label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'advanced-icon-box')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "bdt-color-control",
    onClick: () => setShowColorPanel(true)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: color
  }))), showColorPanel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    position: "bottom right",
    onClose: () => setShowColorPanel(false),
    onFocusOutside: () => setShowColorPanel(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
    color: color,
    disableAlpha: false,
    onChangeComplete: value => {
      onChange({
        [colorName]: value.hex
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "bdt-clear-btn",
    onClick: () => onChange({
      [colorName]: ''
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear', 'advanced-icon-box')))));
};
/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./src/controls/index.js":
/*!*******************************!*\
  !*** ./src/controls/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResRangleControl": function() { return /* reexport safe */ _res_rangle_control__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "AlignmentControl": function() { return /* reexport safe */ _alignment_control__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "ColorControl": function() { return /* reexport safe */ _color_control__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "TabPanelControl": function() { return /* reexport safe */ _tab_control__WEBPACK_IMPORTED_MODULE_3__["default"]; }
/* harmony export */ });
/* harmony import */ var _res_rangle_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./res-rangle-control */ "./src/controls/res-rangle-control/index.js");
/* harmony import */ var _alignment_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alignment-control */ "./src/controls/alignment-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _tab_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-control */ "./src/controls/tab-control/index.js");





/***/ }),

/***/ "./src/controls/res-btn/index.js":
/*!***************************************!*\
  !*** ./src/controls/res-btn/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



const ResBtn = _ref => {
  let {
    resMode,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "res-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Desktop' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Desktop'
      });
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Desktop');
    },
    icon: "desktop",
    title: "Desktop"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Tablet' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Tablet'
      });
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    },
    icon: "tablet",
    title: "Tablet"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Mobile' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Mobile'
      });
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    },
    icon: "smartphone",
    title: "Mobile"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ResBtn);

/***/ }),

/***/ "./src/controls/res-rangle-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/res-rangle-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res-btn */ "./src/controls/res-btn/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/res-rangle-control/style.scss");




const ResRangleControl = _ref => {
  let {
    label,
    controlName,
    objAttrs,
    noUnits,
    units,
    min,
    max
  } = _ref;
  const {
    attributes,
    setAttributes
  } = objAttrs;
  const {
    resMode
  } = attributes;
  const {
    [`${controlName}DeskRange`]: deskRange,
    [`${controlName}TabRange`]: tabRange,
    [`${controlName}MobRange`]: mobRange,
    [`${controlName}Unit`]: selectedUnit
  } = attributes;
  if (!units) units = units || ['px', '%'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-res-rangle-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    align: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    id: "res-label",
    label: label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resMode: resMode,
    setAttributes: setAttributes
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, !noUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "units-wrapper"
  }, units && units.map((unit, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: index,
      variant: selectedUnit === unit ? 'primary' : 'secondary',
      onClick: () => setAttributes({
        [`${controlName}Unit`]: unit
      })
    }, unit);
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "res-controls"
  }, resMode === 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: deskRange,
    onChange: value => setAttributes({
      [`${controlName}DeskRange`]: value
    }),
    min: min,
    max: max
  })), resMode === 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: tabRange,
    onChange: value => setAttributes({
      [`${controlName}TabRange`]: value
    }),
    min: min,
    max: max
  })), resMode === 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: mobRange,
    onChange: value => setAttributes({
      [`${controlName}MobRange`]: value
    }),
    min: min,
    max: max
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ResRangleControl);

/***/ }),

/***/ "./src/controls/tab-control/index.js":
/*!*******************************************!*\
  !*** ./src/controls/tab-control/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/tab-control/style.scss");




const MyTabPanel = _ref => {
  let {
    normalComponent,
    hoverComponent
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "my-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: 'tab1',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Normal", 'advanced-button'),
      className: 'tab-one bdt-tab'
    }, {
      name: 'tab2',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'advanced-button'),
      className: 'tab-two bdt-tab'
    }]
  }, tab => {
    if (tab.name === "tab1") {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, normalComponent);
    } else if (tab.name === "tab2") {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hoverComponent);
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MyTabPanel);

/***/ }),

/***/ "./src/generators/index.js":
/*!*********************************!*\
  !*** ./src/generators/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateResRangleControlAttributes": function() { return /* binding */ generateResRangleControlAttributes; }
/* harmony export */ });
const generateResRangleControlAttributes = _ref => {
  let {
    controlName,
    defaults = {}
  } = _ref;
  const {
    [`${controlName}DeskRange`]: deskRange,
    [`${controlName}TabRange`]: tabRange,
    [`${controlName}MobRange`]: mobRange,
    [`${controlName}Unit`]: unit = 'px'
  } = defaults;
  return {
    [`${controlName}DeskRange`]: {
      type: 'number',
      default: deskRange
    },
    [`${controlName}TabRange`]: {
      type: 'number',
      default: tabRange
    },
    [`${controlName}MobRange`]: {
      type: 'number',
      default: mobRange
    },
    [`${controlName}Unit`]: {
      type: 'string',
      default: unit
    }
  };
};

/***/ }),

/***/ "./src/helper/softminify.js":
/*!**********************************!*\
  !*** ./src/helper/softminify.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "softMinifyCssStrings": function() { return /* binding */ softMinifyCssStrings; }
/* harmony export */ });
// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
const softMinifyCssStrings = function () {
  let cssString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  return cssString.replace(/\s+/g, ' ').replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, '');
};

/***/ }),

/***/ "./src/blocks/advanced-button/editor.scss":
/*!************************************************!*\
  !*** ./src/blocks/advanced-button/editor.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/advanced-button/style.scss":
/*!***********************************************!*\
  !*** ./src/blocks/advanced-button/style.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/alignment-control/style.scss":
/*!***************************************************!*\
  !*** ./src/controls/alignment-control/style.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/color-control/style.scss":
/*!***********************************************!*\
  !*** ./src/controls/color-control/style.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/res-rangle-control/style.scss":
/*!****************************************************!*\
  !*** ./src/controls/res-rangle-control/style.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/tab-control/style.scss":
/*!*********************************************!*\
  !*** ./src/controls/tab-control/style.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/advanced-button/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/advanced-button/block.json ***!
  \***********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"bdt/advanced-button","version":"0.1.0","title":"Advanced Button","category":"advanced-button","description":"Simple advanced button block description.","supports":{"html":false,"anchor":true,"align":true},"textdomain":"advanced-button","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/advanced-button/index": 0,
/******/ 			"blocks/advanced-button/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgutenberg_boilerplate"] = self["webpackChunkgutenberg_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/advanced-button/style-index"], function() { return __webpack_require__("./src/blocks/advanced-button/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map