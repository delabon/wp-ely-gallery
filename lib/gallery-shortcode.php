<?php 

/**
 * Builds the Gallery shortcode output.
 *
 * This implements the functionality of the Gallery Shortcode for displaying
 * WordPress images on a post.
 *
 * @staticvar int $instance
 *
 * @param array $attr  Attributes of the gallery shortcode.
 * @return string HTML content to display gallery.
 */
function ely_gallery_shortcode( $attr ) {

	$atts = shortcode_atts( array(
		'ids'			=> '',
		'uid'         	=> 0,
		'columns'    	=> 3,
		'tabletColumns' => 2,
		'mobileColumns' => 1,
		'design'     	=> 'grid',
		'rowHeight'	 	=> '170px',
		'size'       	=> 'fullsize',
	), $attr, 'gallery' );

	$atts = apply_filters( 'ely_gallery_attr_filter', $atts );

	if ( empty( $attr['ids'] ) ) {
		return '';
	}

	$ids = explode( ',', $attr['ids'] );
	$images = array();
	$feed_output = "\n";

	foreach( $ids as $image_id ){
		
		$data = wp_get_attachment_metadata( $image_id );
		
		if( $data ){

			$data['id'] = $image_id;
			$data['caption'] = wp_get_attachment_caption( $image_id );
			$data['orientation'] = '';

			if ( isset( $data['height'], $data['width'] ) ) {
				$data['orientation'] = ( $data['height'] > $data['width'] ) ? 'portrait' : 'landscape';
			}

			$images[] = $data;
		}

		$feed_output .= wp_get_attachment_link( $image_id, $atts['size'], true ) . "\n";
	}

	if ( empty( $images ) ) {
		return '';
	}

	if ( is_feed() ) {
		return $feed_output;
	}

	$gallery_div = "<div 
		id='{$atts['uid']}'
		data-id='{$atts['uid']}'
		class='gallery-fg size-{$atts['size']}-fg' 
		data-design='{$atts['design']}' 
		data-desktop='{$atts['columns']}'
		data-tablet='{$atts['tabletColumns']}' 
		data-mobile='{$atts['mobileColumns']}' 
		data-rowheight='{$atts['rowHeight']}' 
	>";

	$count = 0;

	foreach ( $images as $image ) {

		$url = wp_get_attachment_image_src( $image['id'], 'original' );

		$gallery_div .='
			<div class="item-fg" data-num="'.$count.'" data-orientation="'.$image['orientation'].'">
				<img src="'.$url[0].'" alt="'.$image['caption'].'" />   
		';

		if( ! empty($image['caption']) ){
			$gallery_div .='
				<div class="caption">'.$image['caption'].'</div> 
			';
		}

		$gallery_div .='
			<a href="'.$url[0].'"></a>
		</div>';

		$count += 1;
	}

	return $gallery_div."</div>\n";
}
