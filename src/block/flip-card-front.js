import { InnerBlocks } from '@wordpress/block-editor';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const ALLOWED_BLOCKS = [ 'core/image', 'core/heading', 'core/paragraph' ];
const TEMPLATE = [
	[ 'core/image' ],
    [ 'core/heading', { placeholder: 'Card Title' } ],
	[ 'core/paragraph', { placeholder: 'Summary' } ]
];

/**********************************************************
 * Registering Child Innerblock for the Flip Cards block
 **********************************************************/
registerBlockType( 'cgb/front-card', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Front Side' ), // Block title.
	icon: 'welcome-add-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	parent: [ 'cgb/flip-card' ],
	category: 'layout widgets', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'front' ),
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
				<h2>Front Content</h2>
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
			<div className="flip-card_front">
					<InnerBlocks.Content />
			</div>
		);
	},
} );