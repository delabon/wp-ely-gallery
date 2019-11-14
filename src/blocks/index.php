<?php
/**
 * Bordered Grid
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Ely_Blocks{

    function __construct(){
        add_action( 'init', array( $this, 'init' ) );
    }

    /**
     * Registers the block
     */
    function init(){

        // Check if the register function exists
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        
        register_block_type( 'ely/blocks', array(
            'attributes' => array(
                'uid' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'ids' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'design' => array(
                    'type' => 'string',
                    'default' => 'grid'
                ),
                'columns' => array(
                    'type' => 'number',
                    'default' => 3
                ),
                'tabletColumns' => array(
                    'type' => 'number',
                    'default' => 2
                ),
                'mobileColumns' => array(
                    'type' => 'number',
                    'default' => 1
                ),
                'fontSize' => array(
                    'type' => 'number',
                    'default' => 15
                ),
                'tabletFontSize' => array(
                    'type' => 'number',
                    'default' => 16
                ),
                'mobileFontSize' => array(
                    'type' => 'number',
                    'default' => 16
                ),
                'rowHeight' => array(
                    'type' => 'string',
                    'default' => '170'
                ),
            ),
            'render_callback' => array( $this, 'render' ),
        ));
        
    }

    /**
     * Server-side Rendering
     */
    function render( $attributes ) {
        return $this->renderStyle($attributes) . ely_gallery_shortcode($attributes);
    }
    
    private function renderStyle( $attributes ){
        
        extract($attributes);

        return "
            <style>
            #{$uid}.gallery-fg{
                font-size: {$mobileFontSize}px;
            }
            
            @media all and (min-width: 768px) {
                #{$uid}.gallery-fg{
                    font-size: {$tabletFontSize}px;
                }
            }

            @media all and (min-width: 992px) {
                #{$uid}.gallery-fg{
                    font-size: {$fontSize}px;
                }
            }
            </style>";
    }
    
}

new Ely_Blocks;
