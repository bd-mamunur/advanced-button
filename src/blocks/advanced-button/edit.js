/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

const { Fragment, useEffect } = wp.element;
import * as Constants from './constants';
const {  BUTTON_FONTSIZE,BUTTON_SIZE} =Constants;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
	    preset,
		btnText,
		btnRadius,
		btnAlign,
		btnBorder,
		btnBorderColor,
		btnBgColor,
		btnColor,
	} = attributes;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({ uniqueId: `bdt-blocks-${clientId.slice(0, 8)}` });
		}
	}, []);

	const {
		[`${BUTTON_SIZE}DeskRange`]: btnSizeDesk,
		[`${BUTTON_SIZE}TabRange`]: btnSizeTab,
		[`${BUTTON_SIZE}MobRange`]: btnSizeMob,
		[`${BUTTON_SIZE}Unit`]: btnUnit,
	} = attributes;

	const {
		[`${BUTTON_FONTSIZE}DeskRange`]: btnFontSizeDesk,
		[`${BUTTON_FONTSIZE}TabRange`]: btnFontSizeTab,
		[`${BUTTON_FONTSIZE}MobRange`]: btnFontSizeMob,
		[`${BUTTON_FONTSIZE}Unit`]: btnFontUnit,
	} = attributes;
	

	/**
	 * Presets Based Styles
	 */
	 //padding:18px 0;
	let presetStyles;
	switch (preset) {
		case 'style-1':
			presetStyles = `
			.${uniqueId} .bdt-link-btn span{
				border:${btnBorder ? btnBorder : 1}px solid ${btnBorderColor ? btnBorderColor : '#ccc'};
				box-sizing: border-box;
				color: ${btnColor};
				cursor: pointer;
				background-color: ${btnBgColor};
				display: inline-block;
				font-weight: 400;
				text-align: center;
				text-transform: none;
				white-space: nowrap;
				transition: .2s ease-in;
			
			 }
			 .${uniqueId} .bdt-link-btn a{
				border:${btnBorder ? btnBorder : 1}px solid ${btnBorderColor ? btnBorderColor : '#ccc'};
				box-sizing: border-box;
				color: ${btnColor};
				cursor: pointer;
				background-color: ${btnBgColor};
				display: inline-block;
				font-weight: 400;
				text-align: center;
				text-transform: none;
				white-space: nowrap;
				transition: .2s ease-in;
				white-space: wrap;
			 }
			
			`;
			break;
		case 'style-2':
			presetStyles = `
			.${uniqueId} .bdt-link-btn span{
				border:${btnBorder ? btnBorder : 1}px solid ${btnBorderColor ? btnBorderColor : '#ccc'};
				background-color: ${btnBgColor};
				box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				display: inline-block;
				color:${btnColor};
				text-align:center;
			 }
			 .${uniqueId} .bdt-link-btn a{
				border:${btnBorder ? btnBorder : 1}px solid ${btnBorderColor ? btnBorderColor : '#ccc'};
				background-color: ${btnBgColor};
				box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				display: inline-block;
				color:${btnColor};
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
				border:${btnBorder ? btnBorder : 1}px solid ${btnBorderColor ? btnBorderColor : '#ccc'};
				color: ${btnColor};
				background-color: ${btnBgColor};
				display: inline-block;
				position: relative;
				touch-action: manipulation; 
				text-align:center;
			}
			.${uniqueId} .bdt-link-btn a {
				border:${btnBorder ? btnBorder : 1}px solid ${btnBorderColor ? btnBorderColor : '#ccc'};
				color: ${btnColor};
				background-color: ${btnBgColor};
				display: inline-block;
				position: relative;
				touch-action: manipulation; 
				text-align:center;
				white-space: wrap;
			}
			  
			.${uniqueId} .bdt-link-btn span:hover{
				outline: 0;
			}
			.${uniqueId} .bdt-link-btn a:hover{
				outline: 0;
			}
			.${uniqueId} .bdt-link-btn span:active {
				outline: 0;
			}
			.${uniqueId} .bdt-link-btn a:active {
				outline: 0;
			}
			  
			.${uniqueId} .bdt-link-btn span:hover {
				background-color: transparent;
			}
			.${uniqueId} .bdt-link-btn a:hover {
				background-color: transparent;
			}
			  
			.${uniqueId} .bdt-link-btn span:before {
				background-color: #D5EDF6;
				content: "";
				height: calc(100% + 3px);
				position: absolute;
				right: -7px;
				top: -9px;
				transition: background-color 300ms ease-in;
				width: 100%;
				z-index: -1;
			}

			.${uniqueId} .bdt-link-btn a:before {
				background-color: #D5EDF6;
				content: "";
				height: calc(100% + 3px);
				position: absolute;
				right: -7px;
				top: -9px;
				transition: background-color 300ms ease-in;
				width: 100%;
				z-index: -1;
			}
			  
			.${uniqueId} .bdt-link-btn span:hover:before {
				background-color: #6DCFF6;
				content: "";
				position: absolute;
			}
			.${uniqueId} .bdt-link-btn a:hover:before {
				background-color: #6DCFF6;
				content: "";
				position: absolute;
			}
			
			`;
			break;
		default:
			'';
	}

	
	const deskStyles = `
		.${uniqueId} .bdt-button-wrap{
				text-align: ${btnAlign};
		}
 	    .${uniqueId} .bdt-action span{
			width:${btnSizeDesk}${btnUnit};
			font-size:${btnFontSizeDesk}${btnFontUnit};
			border-radius:${btnRadius}px;
			line-height: 2.2;
		}
		.${uniqueId} .bdt-action a{
			width:${btnSizeDesk}${btnUnit};
			font-size:${btnFontSizeDesk}${btnFontUnit};
			border-radius:${btnRadius}px;
			line-height: 2.2;
			
		}
		${presetStyles}
	`;
	const tabStyles = `
	.${uniqueId} .bdt-button-wrap{
		text-align: ${btnAlign};	
	}
	.${uniqueId} .bdt-action span{
		width:${btnSizeTab}${btnUnit};
		font-size:${btnFontSizeTab}${btnFontUnit};
		border-radius:${btnRadius}px;
		line-height: 2.2;
	}
	.${uniqueId} .bdt-action a{
		width:${btnSizeTab}${btnUnit};
		font-size:${btnFontSizeTab}${btnFontUnit};
		border-radius:${btnRadius}px;
		line-height: 2.2;
	}
		${presetStyles}
	`;
	const mobStyles = `
	.${uniqueId} .bdt-button-wrap{
		text-align: ${btnAlign};
	}
	.${uniqueId} .bdt-action span{
		width:${btnSizeMob}${btnUnit};
		font-size:${btnFontSizeMob}${btnFontUnit};
		border-radius:${btnRadius}px;
		line-height: 2.2;
	}
	.${uniqueId} .bdt-action a{
		width:${btnSizeMob}${btnUnit};
		font-size:${btnFontSizeMob}${btnFontUnit};
		border-radius:${btnRadius}px;
		line-height: 2.2;
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
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);
	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: uniqueId,
				})}
			>
			
				<div className="container">
				<div className="bdt-button-wrap">
			 	<div className="bdt-link-btn bdt-action">	
						<RichText
							className='bdt-button'
							tagName="span"
							value={ btnText }
							onChange={ ( content ) => setAttributes( { btnText:content } ) }
							placeholder={__('Label…', 'advanced-button')}
						/>
					</div>	
				</div>
			</div>

			</div>
		</Fragment>
	);
}
