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
				
					<a href="www.facebook.com"  target='_blank' rel='noopener'>
						<RichText.Content
						    tagName='span'
							className='bdt-button'
							value={ btnText }
						/>
									 
					</a>

				)
			}
		
		</div>
	);
}
