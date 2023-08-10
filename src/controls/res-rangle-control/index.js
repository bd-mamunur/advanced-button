import {
	BaseControl,
	RangeControl,
	Flex,
	FlexItem,
	ButtonGroup,
	Button,
} from '@wordpress/components';
import ResBtn from '../res-btn';

import './style.scss';

const ResRangleControl = ({
	label,
	controlName,
	objAttrs,
	noUnits,
	units,
	min,
	max,
}) => {
	const { attributes, setAttributes } = objAttrs;
	const { resMode } = attributes;

	const {
		[`${controlName}DeskRange`]: deskRange,
		[`${controlName}TabRange`]: tabRange,
		[`${controlName}MobRange`]: mobRange,
		[`${controlName}Unit`]: selectedUnit,
	} = attributes;

	if (!units) units = units || ['px', '%'];

	return (
		<div className="bdt-res-rangle-control">
			<Flex align="flex-start">
				<FlexItem>
					<BaseControl id="res-label" label={label}>
						<ResBtn
							resMode={resMode}
							setAttributes={setAttributes}
						/>
					</BaseControl>
				</FlexItem>
				<FlexItem>
					{!noUnits && (
						<ButtonGroup className="units-wrapper">
							{units &&
								units.map((unit, index) => {
									return (
										<Button
											key={index}
											variant={
												selectedUnit === unit
													? 'primary'
													: 'secondary'
											}
											onClick={() =>
												setAttributes({
													[`${controlName}Unit`]:
														unit,
												})
											}
										>
											{unit}
										</Button>
									);
								})}
						</ButtonGroup>
					)}
				</FlexItem>
			</Flex>
			<div className="res-controls">
				{resMode === 'Desktop' && (
					<div className="single-rangle">
						<RangeControl
							value={deskRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}DeskRange`]: value,
								})
							}
							min={min}
							max={max}
						/>
					</div>
				)}
				{resMode === 'Tablet' && (
					<div className="single-rangle">
						<RangeControl
							value={tabRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}TabRange`]: value,
								})
							}
							min={min}
							max={max}
						/>
					</div>
				)}
				{resMode === 'Mobile' && (
					<div className="single-rangle">
						<RangeControl
							value={mobRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}MobRange`]: value,
								})
							}
							min={min}
							max={max}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ResRangleControl;