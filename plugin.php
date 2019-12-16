<?php
/**
 * Plugin Name: Ely Gallery
 * Plugin URI: https://delabon.com/demo/ely-gallery/
 * Description: Powerfull touch support gallery. perfect for your photos and albums. 
 * Author: Sabri Taieb
 * Author URI: https://delabon.com/
 * Version: 3.0.4
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Defined
 */
define('ELY_VERSION', '3.0.4' );
define('ELY_URL', plugins_url( '', __FILE__ ) );
define('ELY_DEBUG', false );
define('ELY_REVIEW_URL', 'https://wordpress.org/support/plugin/ely-gallery/reviews/?rate=5#rate-response' );
define('ELY_IS_FREE', true );

/**
 * Init
 */
class Ely_Gallery{

	function __construct(){

        require_once __DIR__ . '/lib/Helpers.php';
        require_once __DIR__ . '/lib/Api.php';
        require_once __DIR__ . '/lib/gallery-shortcode.php';

		new Ely_Api();

        add_action( 'plugins_loaded', array( $this, 'load_language' ) );
        add_action( 'after_setup_theme', array( $this, 'image_sizes') );
		add_action( 'enqueue_block_assets', array( $this, 'load_assets') );
        add_action( 'enqueue_block_editor_assets', array( $this, 'load_editor_assets'), 9999 );
        add_action( 'admin_notices', array( $this, 'review_upgrade_notices' ) );
        add_action( 'admin_init', array( $this, 'hide_notices' ) );

        require_once __DIR__ . '/src/blocks/index.php';
    }
        
    /**
     * Load translation
     */
    function load_language() {
        load_plugin_textdomain( 'ely', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
    }

	/**
	 * Image Sizes
	 */
	function image_sizes(){
		add_theme_support( 'post-thumbnails' );
    }

	/**
	 * Enqueue Gutenberg block assets for both frontend and backend.
	 */
	function load_assets() { 
		
		if( ! is_admin() ){
	
			wp_enqueue_style(
				'ely-slick-slider', 
				plugins_url( '/ely-gallery/dist/slick.css', dirname( __FILE__ ) ), 
				array(), 
				ELY_VERSION 
			);

			wp_enqueue_style(
				'ely-style-build', 
				plugins_url( '/ely-gallery/dist/style.build.css', dirname( __FILE__ ) ), 
				array('ely-slick-slider'), 
				ELY_VERSION 
			);

			wp_enqueue_script(
				'ely-slick-plugin', 
				plugins_url( '/ely-gallery/dist/slick.min.js', dirname( __FILE__ ) ), 
				array('jquery'), 
                ELY_VERSION,
                true
			);

            wp_enqueue_script(
				'ely-frontend', 
				plugins_url( '/ely-gallery/dist/frontend.min.js', dirname( __FILE__ ) ), 
				array('jquery', 'ely-slick-plugin'), 
                ELY_VERSION,
                true
			);

			wp_localize_script('ely-frontend', 'ely_obj', array(
				'exit' => __('Exit', 'ely'),
				'fullscreen' => __('Fullscreen', 'ely'),
				'zoomin' => __('ZoomIn', 'ely'),
				'zoomout' => __('ZoomOut', 'ely'),
				'share' => __('Share', 'ely'),
				'prev_slide' => __('Prev Slide', 'ely'),
				'next_slide' => __('Next Slide', 'ely'),
			));

		}
		
	}

	/**
	 * Load Only Editor Assets 
	 */
	function load_editor_assets(){

		$dependencies = array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-editor',
			'wp-api-fetch',
			'wp-components',
			'wp-data',
			'wp-url',
			'lodash',
		);

		wp_enqueue_script(
			'ely-blocks-build', 
			plugins_url( '/ely-gallery/dist/blocks.build.js', dirname( __FILE__ ) ), 
			$dependencies, 
			ELY_VERSION, 
			true 
		);

		wp_localize_script( 'ely-blocks-build', 'ELY_PARAMS', [
			'is_free' => ELY_IS_FREE,
		]);

		wp_enqueue_style(
			'ely-block-editor-build', 
			plugins_url( '/ely-gallery/dist/editor.build.css', dirname( __FILE__ ) ), 
			array( 'wp-edit-blocks' ), 
			ELY_VERSION 
		);
		
	}

    /**
     * Shows the review and upgrade notices for the admin every 4 days
     */
    function review_upgrade_notices() {

        if( get_transient('ely_hide_notices') ) return;
        if( get_transient('ely_hide_review_notice') ) return;

        $url_hide_notices = add_query_arg( 'ely_hide_notices', 'true', Ely_Helpers::url() );
        $url_review_notice = add_query_arg( 'ely_hide_review_notice', 'true', Ely_Helpers::url() );

        ?>
            <div class="notice notice-warning">

                <p style="font-size: 15px;">

                    <?php _e("Hi there! you have been using <strong>Ely Gallery</strong> for few days. I hope it is helpful.", 'ely'); ?>
                    <br>
                    <?php _e("Would you mind give it 5-stars review to help spread the word? And to keep me updating it & adding more features to it!", 'ely' ); ?>

                </p>

                <p>
                    <a class="button button-primary" href="<?php echo $url_review_notice; ?>"><?php _e('Give it 5-stars', 'ely'); ?></a>
                    <a class="button" href="<?php echo $url_hide_notices; ?>"><?php _e('Thanks, later', 'ely') ?></a>
                </p>

            </div>
        <?php

    }

    /**
     * Hide admin notices
     */
    function hide_notices() {

        if( isset( $_REQUEST['ely_hide_notices'] ) ){
            set_transient('ely_hide_notices', 1, 5 * DAY_IN_SECONDS );
        }

        if( isset( $_REQUEST['ely_hide_review_notice'] ) ){
            set_transient('ely_hide_review_notice', 1, 30 * DAY_IN_SECONDS );

            echo '<script>location.href = "'.ELY_REVIEW_URL.'";</script>';
        }
	}
	
}

new Ely_Gallery();
