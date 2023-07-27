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
					<a href="www.facebook.com"  target='_blank' rel='noopener'>
					 <span>	
						<RichText.Content
						    tagName='span'
							role='button'
							className='bdt-button'
							value={ btnText }
						/>
					  </span>				 
					</a>
				</div>
			</div>

				)
			}
		
		</div>
	);
}
