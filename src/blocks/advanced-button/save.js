import { useBlockProps,RichText} from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { uniqueId, btnText } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `${uniqueId}`,
			})}
					>
						
			{ 
			btnText && 
				
			(
			<div className="container">
				<div className="bdt-button-wrap">
				<div className="bdt-link-btn">
					<a href="www.facebook.com"  target='_blank' rel='noopener'>
						<RichText.Content
							value={ btnText }
						/>
					</a>
				</div>	
				</div>
			</div>

				)
			}
		
		</div>
	);
}
