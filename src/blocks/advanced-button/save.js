import { useBlockProps,RichText} from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { uniqueId, btnText,btnLinkObj } = attributes;
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
					<a href={
								btnLinkObj &&
								btnLinkObj.url &&
								btnLinkObj.url
							}
							target={
									btnLinkObj &&
									btnLinkObj.openInNewTab &&
												'_blank'
									}
							rel={
									btnLinkObj &&
									btnLinkObj.openInNewTab
									? 'noopener noreferrer'
									: 'noopener'
								}>
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
