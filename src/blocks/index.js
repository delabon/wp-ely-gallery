import {IconGalleryFormat} from './../global';
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'ely/blocks', {
	
	title: __( 'Ely Gallery', 'ely' ), 
    
	icon: IconGalleryFormat, 
	
	category: 'common', 

	keywords: [
		__( 'gallery', 'ely' ),
		__( 'image', 'ely' ),
		__( 'ely', 'ely' ),
    ],
    
    supports: {
        html:false,
    },

    edit: Edit,

    save: () => null,

});
