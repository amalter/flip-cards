import { InnerBlocks } from '@wordpress/block-editor';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const ALLOWED_BLOCKS = [ 'core/image', 'core/heading', 'core/paragraph' ];
const TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Back side content' } ]
];

/**********************************************************
 * Registering Child Innerblock for the Flip Cards block
 **********************************************************/
registerBlockType( 'cgb/back-card', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Back Side' ), // Block title.
	icon: 'welcome-add-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	parent: [ 'cgb/flip-card' ],
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'back' ),
        __( 'flip' ),
		__( 'card' ),
		__( 'Add card' ),
	],

	/**
	 * 
	 * Edit function for Child Slide Block
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		return (
			<div className={ props.className }>
				<h4>Back side</h4>
				<InnerBlocks
                    allowedBlocks={ ALLOWED_BLOCKS }
                    template={ TEMPLATE }
					templateLock="false"
				/>
			</div>
		);
	},

	/**
	 *
	 * Save function for Child Slide Block
	 * 
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {

		return (
			<div className="flip-card_side flip-card_back">
					<InnerBlocks.Content />
                    <div className="flip-card_side-btn flip-card_back-btn">
                        <div>Flip</div>
                        <img src={cgbGlobal.flipBackSvg}></img>
					</div>
			</div>
		);
	},
} );