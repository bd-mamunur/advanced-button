/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

const { Fragment, useEffect } = wp.element;

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
	} = attributes;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({ uniqueId: `bdt-blocks-${clientId.slice(0, 8)}` });
		}
	}, []);


	

	/**
	 * Presets Based Styles
	 */

	let presetStyles;
	switch (preset) {
		case 'style-1':
			presetStyles = `
			.${uniqueId} .bdt-button{
				border-radius: 4px;
				background-color: green;
				border: 0;
				box-sizing: border-box;
				color: #fff;
				cursor: pointer;
				display: inline-block;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				padding: 12px 40px;
				text-align: center;
				text-transform: none;
				white-space: nowrap;
				transition: .2s ease-in;
			 }
			`;
			break;
		case 'style-2':
			presetStyles = `
			.${uniqueId} .bdt-button{
				background-color: #395ddf;
				border: 1px solid #395ddf;
				box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				padding: 12px 40px;
				color:black;
			
			 }

			 .${uniqueId} span:hover {
				 	background-color: #395ddf;
				 	text-decoration: none;
				 	box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				 	border: 1px solid #395ddf;
				 }
			.${uniqueId} span:focus {
				 	text-decoration: none;
				 }
	
			.${uniqueId} span:active {
				box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
				outline: 0;
			}
		
			.${uniqueId} span:not([disabled]):active {
				box-shadow: #fff 2px 2px 0 0, #395ddf 2px 2px 0 1px;
				transform: translate(2px, 2px);
			}		 
         
			`;
			break;
		case 'style-3':
			presetStyles = `

			 .${uniqueId} .bdt-button {
				color: #000;
				background-color: green;
				padding: 12px 40px;
				border: 1px solid #266DB6;
				position: relative;
				touch-action: manipulation; 
			}
			  
			.${uniqueId} .bdt-button:hover{
				outline: 0;
			}
			.${uniqueId} .bdt-button:active {
				outline: 0;
			  }
			  
			  .${uniqueId} .bdt-button:hover {
				background-color: transparent;
			  }
			  
			  .${uniqueId} .bdt-button:before {
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
			  
			  .${uniqueId} .bdt-button:hover:before {
				background-color: #6DCFF6;
				content: "";
				position: absolute;
			  }
			
			`;
			break;
		case 'style-4':
			presetStyles = `   
		 	.${uniqueId} .bdt-button{
				outline: 0;
				border: 1px solid black;
				position: relative;
				background-color: green;
				padding: 12px 40px;
				color:black;
				
			  }
			  
			.${uniqueId} span.bdt-button:after {
				content: "";
				background-color: #ffe54c;
				width: 100%;
				z-index: -1;
				position: absolute;
				height: 100%;
				top: 7px;
				left: 7px;
				transition: 0.2s;
			  }
			  
		    .${uniqueId} span.bdt-button:hover:after {
				top: 0px;
				left: 0px;
			  }
			
			`;
			break;
			case 'style-5':
				presetStyles = ``;
			
			break;
		default:
			'';
	}


	const deskStyles = `

	  ${presetStyles}
	`;
	const tabStyles = `
	    ${presetStyles}
	`;
	const mobStyles = `
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
	console.log(presetStyles)
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
					<span>
						<RichText
							className='bdt-button'
							role='button'
							tagName="span"
							value={ btnText }
							onChange={ ( content ) => setAttributes( { btnText:content } ) }
							placeholder={__('Label…', 'advanced-button')}
						/>
					</span>
						


					{/* <button className="bdt-button button-2" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-3" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-4" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-5" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-6" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-7" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-8" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-9" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-10" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-11" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-12" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-13" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-14" >
					<span>Button</span>
					</button>
					<button className="bdt-button button-15" >
					<span>Button</span>
					</button> */}
				</div>
			</div>

			</div>
		</Fragment>
	);
}
