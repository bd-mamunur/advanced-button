/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls,__experimentalLinkControl as LinkControl} from '@wordpress/block-editor';
import { PanelBody,SelectControl,CardDivider,TextControl,Button,RangeControl, } from '@wordpress/components';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl,AlignmentControl,ColorControl } = Controls;
const {  BUTTON_FONTSIZE } = Constants;

import objAttributes from './attributes';

const alignIconOption = [
	{ name: 'editor-alignleft', value: 'left' },
	{ name: 'editor-aligncenter', value: 'center' },
	{ name: 'editor-alignright', value: 'right' },
];

const Inspector = ({ attributes, setAttributes }) => {
	const {
		preset,
		btnText,
		btnLinkObj,
		btnRadius,
		btnAlign,
		btnBorder,
		btnBorderColor,
		btnColor,
		btnBgColor
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	return (
	
			<InspectorControls>
				<PanelBody
				title={__('Button', 'advanced-button')}
				initialOpen={false}
			>
  
  				<SelectControl
					label={__('preset','advanced-button')}
					value={ preset }
					options={ [
					{ label: 'Preset 1', value: 'style-1' },
					{ label: 'Preset 2', value: 'style-2' },
					{ label: 'Preset 3', value: 'style-3' },
						
					] }
					onChange={ ( presetV ) => { setAttributes( { preset:presetV } ) } }
				/>

				<TextControl
					label={__('Button Label', 'advanced-button')}
					value={btnText}
					onChange={(v) => setAttributes({btnText: v })}
				/>
				<LinkControl
					searchInputPlaceholder={__(
						'Link Here..',
						'advanced-button'
					)}
					value={btnLinkObj}
					settings={[
						{
							id: 'openInNewTab',
							title: 'Open in new tab?',
						},
					]}
					onChange={(data) => setAttributes({ btnLinkObj: data })}
					
					
				/>
				<Button
					onClick={() => setAttributes({ btnLinkObj: null })}
					variant="primary"
				>
					Clear
				</Button>

				<CardDivider />
				<ResRangleControl
					label={__('Button Size', 'advanced-button')}
					controlName={BUTTON_FONTSIZE}
					objAttrs={objAttrs}
					noUnits={false}
					max={100}
					min={5}
				/>

				<RangeControl
					label={__('Button Radius', 'advanced-button')}
					value={btnRadius}
					onChange={(btnValue) =>
						setAttributes({ btnRadius: btnValue })
					}
					min={1}
					max={100}
				/>
				<AlignmentControl
					label={__('Button Alignment', 'advanced-button')}
					value={btnAlign}
					onChange={(value) =>
						setAttributes({
							btnAlign: value,
						})
					}
					options={alignIconOption}
				/>

				<CardDivider />
				<RangeControl
					label={__('Border', 'advanced-button')}
					value={btnBorder}
					onChange={(border) => setAttributes({ btnBorder: border })}
					min={0}
					max={10}
				/>
				<ColorControl
					label={__('Border color', 'advanced-button')}
					color={btnBorderColor}
					colorName="btnBorderColor"
					onChange={setAttributes}
				/>
				<CardDivider />
				<ColorControl
					label={__('Color', 'advanced-button')}
					color={btnColor}
					colorName="btnColor"
					onChange={setAttributes}
				 /> 
			 <ColorControl
					label={__('Background color', 'advanced-button')}
					color={btnBgColor}
					colorName="btnBgColor"
					onChange={setAttributes}
				/>
			</PanelBody>
				
			</InspectorControls>
	
	);
};

export default Inspector;
