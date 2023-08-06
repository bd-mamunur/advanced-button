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
const { GRID_COLUMNS, BUTTON_FONTSIZE } = Constants;

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
				<PanelBody title={__('Button', 'advanced-button')}>
			
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
				
				</PanelBody>

				<PanelBody title={__('Column Settings', 'advanced-button')}>
					<ResRangleControl
						label={__('Grid Columns', 'advanced-button')}
						controlName={GRID_COLUMNS}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={4}
					/>
				</PanelBody>

				<PanelBody
				title={__('Button', 'advanced-icon-box')}
				initialOpen={false}
			>
				<TextControl
					label={__('Button Label', 'advanced-icon-box')}
					value={btnText}
					onChange={(v) => setAttributes({btnText: v })}
				/>
				<LinkControl
					searchInputPlaceholder={__(
						'Link Here..',
						'advanced-icon-box'
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
					label={__('Button Font Size', 'advanced-icon-box')}
					controlName={BUTTON_FONTSIZE}
					objAttrs={objAttrs}
					noUnits={false}
					max={50}
					min={5}
				/>

				<RangeControl
					label={__('Button Radius', 'advanced-icon-box')}
					value={btnRadius}
					onChange={(btnValue) =>
						setAttributes({ btnRadius: btnValue })
					}
					min={1}
					max={100}
				/>
				<AlignmentControl
					label={__('Button Alignment', 'advanced-icon-box')}
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
					label={__('Border', 'advanced-icon-box')}
					value={btnBorder}
					onChange={(border) => setAttributes({ btnBorder: border })}
					min={0}
					max={10}
				/>
				<ColorControl
					label={__('Border color', 'advanced-icon-box')}
					color={btnBorderColor}
					colorName="btnBorderColor"
					onChange={setAttributes}
				/>
				<CardDivider />
				<ColorControl
					label={__('Color', 'advanced-icon-box')}
					color={btnColor}
					colorName="btnColor"
					onChange={setAttributes}
				 /> 
			 <ColorControl
					label={__('Background color', 'advanced-icon-box')}
					color={btnBgColor}
					colorName="btnBgColor"
					onChange={setAttributes}
				/>
			</PanelBody>
				
			</InspectorControls>
	
	);
};

export default Inspector;
