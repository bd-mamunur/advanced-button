/**
 * wordpress dependencies
 */
import { BaseControl, ButtonGroup, Button } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';

// import style
import './style.scss';


const AlignmentControl = ({ label, value, instanceId, options, onChange }) => {
	const id = `btn-group-${instanceId}`;

	return (
		<BaseControl className="bdt-alignment" id={id} label={label}>
			<ButtonGroup className="btn-group" id={id}>
				{options &&
					options.map((item, index) => {
						return (
							<Button
								key={index}
								icon={item.name}
								variant={
									value === item.value
										? 'primary'
										: 'secondary'
								}
								onClick={() => onChange(item.value)}
							/>
						);
					})}
			</ButtonGroup>
		</BaseControl>
	);
};

export default withInstanceId(AlignmentControl);
