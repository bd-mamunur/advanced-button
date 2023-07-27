/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls} from '@wordpress/block-editor';
import { PanelBody,SelectControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl } = Controls;
const { GRID_COLUMNS } = Constants;

import objAttributes from './attributes';

// import colorcontrol
// import ColorControl from '../../controls/color-control';

const Inspector = ({ attributes, setAttributes }) => {
	const { preset} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	return (
	
			<InspectorControls>
				{/* <ColorControl
					label={__('Title Color', 'bdt-blocks')}
					color={titleColor}
					attrName="titleColor"
					setAttributes={setAttributes}
				/> */}

				<PanelBody title={__('Button', 'advanced-button')}>
			
						<SelectControl
							label={__('preset','advanced-button')}
							value={ preset }
							options={ [
								{ label: 'Preset 1', value: 'style-1' },
								{ label: 'Preset 2', value: 'style-2' },
								{ label: 'Preset 3', value: 'style-3' },
								{ label: 'Preset 4', value: 'style-4' },
								{ label: 'Preset 5', value: 'style-5' },
								{ label: 'Preset 6', value: 'style-6' },
								{ label: 'Preset 7', value: 'style-7' },
								{ label: 'Preset 8', value: 'style-8' },
								{ label: 'Preset 9', value: 'style-9' },
								{ label: 'Preset 10', value: 'style-10' },
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
				
			</InspectorControls>
	
	);
};

export default Inspector;
