/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

const { Fragment, useEffect } = wp.element;
import * as Constants from './constants';
const { BUTTON_FONTSIZE } = Constants;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';

export default function Edit( { attributes, setAttributes, clientId } ) {
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
		btnPadding,
	} = attributes;

	useEffect( () => {
		if ( ! uniqueId ) {
			setAttributes( {
				uniqueId: `bdt-blocks-${ clientId.slice( 0, 8 ) }`,
			} );
		}
	}, [] );

	const {
		[ `${ BUTTON_FONTSIZE }DeskRange` ]: btnFontSizeDesk,
		[ `${ BUTTON_FONTSIZE }TabRange` ]: btnFontSizeTab,
		[ `${ BUTTON_FONTSIZE }MobRange` ]: btnFontSizeMob,
		[ `${ BUTTON_FONTSIZE }Unit` ]: btnFontUnit,
	} = attributes;

	/**
	 * Presets Based Styles
	 */

	let presetStyles;
	switch ( preset ) {
		case 'style-1':
			presetStyles = `
			.${ uniqueId } .bdt-link-btn span{
				
				box-sizing: border-box;
				cursor: pointer;
				display: inline-block;
				font-weight: 400;
				text-align: center;
				text-transform: none;
				transition: .2s ease-in;
			
			 }
			 .${ uniqueId } .bdt-link-btn a{
	
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
			.${ uniqueId } .bdt-link-btn span{
				box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				display: inline-block;
				text-align:center;
			 }
			 .${ uniqueId } .bdt-link-btn a{
				box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				display: inline-block;
				text-align:center
				white-space: wrap;
			 }
			
			
			 .${ uniqueId } .bdt-link-btn span:hover {
				 	background-color: gray;
				 	text-decoration: none;
				 	box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
				 	border: 1px solid #395ddf;
				 }
			.${ uniqueId } .bdt-link-btn a:hover {
					background-color: gray;
					text-decoration: none;
					box-shadow: #fff 4px 4px 0 0, #395ddf 4px 4px 0 1px;
					border: 1px solid #395ddf;
				}	 
			.${ uniqueId } .bdt-link-btn span:focus {
				 	text-decoration: none;
				 }

			.${ uniqueId } .bdt-link-btn a:focus {
					text-decoration: none;
				}	 
	
			.${ uniqueId } .bdt-link-btn span:active {
				box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
				outline: 0;
			}
			.${ uniqueId } .bdt-link-btn a:active {
				box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
				outline: 0;
			}
		
			.${ uniqueId } .bdt-link-btn span:not([disabled]):active {
				box-shadow: #fff 2px 2px 0 0, #395ddf 2px 2px 0 1px;
				transform: translate(2px, 2px);
			}
			
			.${ uniqueId } .bdt-link-btn a:not([disabled]):active {
				box-shadow: #fff 2px 2px 0 0, #395ddf 2px 2px 0 1px;
				transform: translate(2px, 2px);
			}
         
			`;
			break;
		case 'style-3':
			presetStyles = `
			.${ uniqueId } .bdt-link-btn span {
				display: inline-block;
				transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
				margin: 0;
				text-align:center;
				

			}
			.${ uniqueId } .bdt-link-btn a {
				display: inline-block;
				transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
				margin: 0; 
				text-align:center;
				white-space: wrap;
			}
			  
			.${ uniqueId } .bdt-link-btn span:disabled {
				pointer-events: none;
			}
			.${ uniqueId } .bdt-link-btn a:disabled {
				pointer-events: none;
			}

            .${ uniqueId } .bdt-link-btn span:hover{
				box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
			     transform: translateY(-2px);
			}
			.${ uniqueId } .bdt-link-btn a:hover{
				box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
			     transform: translateY(-2px);
			}

			`;
			break;
		default:
			'';
	}

	const deskStyles = `
	
		.${ uniqueId } .bdt-link-btn{
			display: flex;
			align-items: ${ btnAlign };
			flex-direction: column;
		};
 	    .${ uniqueId } .bdt-link-btn span{
			border:${ btnBorder ? btnBorder : 1 }px ${ btnborderStyle } ${
		btnBorderColor ? btnBorderColor : '#ccc'
	};	
			font-size:${ btnFontSizeDesk }${ btnFontUnit };
			border-radius:${ btnRadius }px;
			background-color: ${ btnBgColor };
			padding: ${ btnPadding.top ? btnPadding.top : '5px' }  ${
		btnPadding.right ? btnPadding.right : '20px'
	} ${ btnPadding.bottom ? btnPadding.bottom : '5px' } ${
		btnPadding.left ? btnPadding.left : '20px'
	};
			color: ${ btnColor };
			line-height: 2.2;
		}
		.${ uniqueId } .bdt-link-btn span:hover{
			color:${ btnHoverColor };
			background-color:${ btnbgHoverColor };
		}
		.${ uniqueId } .bdt-link-btn a{
			border:${ btnBorder ? btnBorder : 1 }px ${ btnborderStyle } ${
		btnBorderColor ? btnBorderColor : '#ccc'
	};
			font-size:${ btnFontSizeDesk }${ btnFontUnit };
			border-radius:${ btnRadius }px;
			background-color: ${ btnBgColor };
			padding: ${ btnPadding.top ? btnPadding.top : '5px' }  ${
		btnPadding.right ? btnPadding.right : '20px'
	} ${ btnPadding.bottom ? btnPadding.bottom : '5px' } ${
		btnPadding.left ? btnPadding.left : '20px'
	};
			color: ${ btnColor };
			line-height: 2.2;
		}
		.${ uniqueId } .bdt-link-btn a:hover{
			color:${ btnHoverColor };
			background-color:${ btnbgHoverColor };
		}
		${ presetStyles }
	`;

	// tab style

	const tabStyles = `
	.${ uniqueId } .bdt-link-btn{
		display: flex;
		align-items: ${ btnAlign };
		flex-direction: column;
	};
	.${ uniqueId } .bdt-link-btn span{
		border:${ btnBorder ? btnBorder : 1 }px ${ btnborderStyle } ${
		btnBorderColor ? btnBorderColor : '#ccc'
	};
		font-size:${ btnFontSizeTab }${ btnFontUnit };
		border-radius:${ btnRadius }px;
		background-color: ${ btnBgColor };
		padding: ${ btnPadding.top ? btnPadding.top : '5px' }  ${
		btnPadding.right ? btnPadding.right : '25px'
	} ${ btnPadding.bottom ? btnPadding.bottom : '5px' } ${
		btnPadding.left ? btnPadding.left : '25px'
	};
		color: ${ btnColor };
		line-height: 2.2;
	}
	.${ uniqueId } .bdt-link-btn span:hover{
		color:${ btnHoverColor };
		background-color:${ btnbgHoverColor };
	}
	.${ uniqueId } .bdt-link-btn a{
		border:${ btnBorder ? btnBorder : 1 }px ${ btnborderStyle } ${
		btnBorderColor ? btnBorderColor : '#ccc'
	};
		font-size:${ btnFontSizeTab }${ btnFontUnit };
		border-radius:${ btnRadius }px;
		background-color: ${ btnBgColor };
		padding: ${ btnPadding.top ? btnPadding.top : '5px' }  ${
		btnPadding.right ? btnPadding.right : '20px'
	} ${ btnPadding.bottom ? btnPadding.bottom : '5px' } ${
		btnPadding.left ? btnPadding.left : '20px'
	};
		color: ${ btnColor };
		line-height: 2.2;
	}
	.${ uniqueId } .bdt-link-btn a:hover{
		color:${ btnHoverColor };
		background-color:${ btnbgHoverColor };
	}
		${ presetStyles }
	`;

	// mob style

	const mobStyles = `
	.${ uniqueId } .bdt-link-btn{
		display: flex;
		align-items: ${ btnAlign };
		flex-direction: column;
	};
	.${ uniqueId } .bdt-link-btn span{
		border:${ btnBorder ? btnBorder : 1 }px ${ btnborderStyle } ${
		btnBorderColor ? btnBorderColor : '#ccc'
	};
		font-size:${ btnFontSizeMob }${ btnFontUnit };
		border-radius:${ btnRadius }px;
		background-color: ${ btnBgColor };
		padding: ${ btnPadding.top ? btnPadding.top : '5px' }  ${
		btnPadding.right ? btnPadding.right : '20px'
	} ${ btnPadding.bottom ? btnPadding.bottom : '5px' } ${
		btnPadding.left ? btnPadding.left : '20px'
	};
		color: ${ btnColor };
		line-height: 2.2;
	}
	.${ uniqueId } .bdt-link-btn span:hover{
		color:${ btnHoverColor };
		background-color:${ btnbgHoverColor };
	}
	.${ uniqueId } .bdt-link-btn a{
		border:${ btnBorder ? btnBorder : 1 }px ${ btnborderStyle } ${
		btnBorderColor ? btnBorderColor : '#ccc'
	};
		font-size:${ btnFontSizeMob }${ btnFontUnit };
		border-radius:${ btnRadius }px;
		background-color: ${ btnBgColor };
		padding: ${ btnPadding.top ? btnPadding.top : '5px' }  ${
		btnPadding.right ? btnPadding.right : '20px'
	} ${ btnPadding.bottom ? btnPadding.bottom : '5px' } ${
		btnPadding.left ? btnPadding.left : '20px'
	};
		color: ${ btnColor };
		line-height: 2.2;
	}
	.${ uniqueId } .bdt-link-btn a:hover{
		color:${ btnHoverColor };
		background-color:${ btnbgHoverColor };
	}
	${ presetStyles }
	
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${ deskStyles }
		@media (max-width: 1024px) and (min-width: 768px) {
			${ tabStyles }
		}
		@media (max-width: 767px) {
			${ mobStyles }
		}
	`;

	useEffect( () => {
		if (
			JSON.stringify( blockStyle ) !== JSON.stringify( blockStyleCss )
		) {
			setAttributes( { blockStyle: blockStyleCss } );
		}
	}, [ attributes ] );

	return (
		<Fragment>
			<style>{ `${ softMinifyCssStrings( blockStyleCss ) }` }</style>
			<Inspector
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<div
				{ ...useBlockProps( {
					className: uniqueId,
				} ) }
			>
				<div className="container">
					<div className="bdt-button-wrap">
						<div className="bdt-link-btn">
							<RichText
								className="bdt-button"
								tagName="span"
								value={ btnText }
								onChange={ ( content ) =>
									setAttributes( { btnText: content } )
								}
								placeholder={ __(
									'Label…',
									'advanced-button'
								) }
							/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
