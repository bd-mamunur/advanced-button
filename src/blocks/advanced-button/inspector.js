/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls,__experimentalLinkControl as LinkControl} from '@wordpress/block-editor';
import { PanelBody,SelectControl,CardDivider,TextControl,TabPanel,RangeControl,__experimentalBoxControl as BoxControl  } from '@wordpress/components';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl,AlignmentControl,ColorControl,TabPanelControl } = Controls;
const { BUTTON_FONTSIZE,BUTTON_SIZE } = Constants;

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
		btnborderStyle,
		btnBorderColor,
		btnColor,
		btnHoverColor,
		btnBgColor,
		btnbgHoverColor,
		btnPadding 
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };
	console.log(btnPadding);
	return (
	
			<InspectorControls>
				    <TabPanel
						className="my-tab-panel"
						activeClass="active-tab"
						
						tabs={ [
							{
								name: 'tab1',
								title: __('Design','advanced-button'),
								className: 'tab-one adb-btn',
							},
							{
								name: 'tab2',
								title: __('Settings','advanced-button'),
								className: 'tab-two adb-btn',
							},
						] }
					>
						{ ( tab ) =>{if(tab.name==='tab1'){
								return (
									<PanelBody title={__('Design', 'advanced-button')}
									initialOpen={false}>
										<ResRangleControl
										label={__('Button Size', 'advanced-button')}
										controlName={BUTTON_SIZE}
										objAttrs={objAttrs}
										noUnits={false}
										max={100}
										min={5}
									/>
								</PanelBody>
								)
						}else if(tab.name==="tab2"){
							return (
								<PanelBody title={__('Settings', 'advanced-button')}
									initialOpen={false}>
										<RangeControl
										label={__('Border', 'advanced-button')}
										value={btnBorder}
										onChange={(border) => setAttributes({ btnBorder: border })}
										min={0}
										max={10}
									/>
							</PanelBody>
							)
						}} }
					</TabPanel>
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
				
				<CardDivider />
				{/* button size remove */}
				<ResRangleControl
					label={__('Button Size', 'advanced-button')}
					controlName={BUTTON_SIZE}
					objAttrs={objAttrs}
					noUnits={false}
					max={100}
					min={5}
				/>
				<CardDivider />
				<ResRangleControl
					label={__('Font Size', 'advanced-button')}
					controlName={BUTTON_FONTSIZE}
					objAttrs={objAttrs}
					noUnits={false}
					max={100}
					min={5}
				/>
				<BoxControl
				    label={__('Button Padding','advanced-button')}
					 values={btnPadding}
					 onChange={ ( nextValues ) => setAttributes( {btnPadding:nextValues} ) }
				/>
				<CardDivider/>
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

		 		<SelectControl
					 label={__('Border Style','advanced-button')}
			 		value={ btnborderStyle }
			 		options={ [
					 { label: 'Solid', value: 'solid' },
					 { label: 'Dotted', value: 'dotted' },
				 	 { label: 'Dashed', value: 'dashed' },
					 {label:'Double', value:'double'},
					 {label:'Groove', value:'groove'}
			 		] }
					 onChange={ ( borderStyle ) => { setAttributes( { btnborderStyle:borderStyle } ) } }
				 />


				<ColorControl
					label={__('Border color', 'advanced-button')}
					color={btnBorderColor}
					colorName="btnBorderColor"
					onChange={setAttributes}
				/>
				<CardDivider />
				<TabPanelControl  
					normalComponent={<>
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
				 	</>
					}
					hoverComponent={
					<>
					<ColorControl
						label={__('Hover Color', 'advanced-button')}
						color={btnHoverColor}
						colorName="btnHoverColor"
						onChange={setAttributes}
					 /> 
					 <ColorControl
						label={__('Background Hover', 'advanced-button')}
						color={btnbgHoverColor}
						colorName="btnbgHoverColor"
						onChange={setAttributes}
					 />
					 
					 </>	
					}  
				/>
			</PanelBody>
				
			</InspectorControls>
	
	);
};

export default Inspector;
