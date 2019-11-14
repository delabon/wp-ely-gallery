<?php
/**
 * Helpers
 */

class Ely_Helpers{

    /**
	 * Dumper ( debuging )
	 *
	 * @param any $data
	 * @param boolean $die
	 * @return void
	 */
	static function dump( $data, $die = true ){

		echo '<pre>';
		print_r( $data );
		echo '</pre>';

		if( $die ) die;

    }

    /**
     * Get current url
     *
     * @return string
     */
    static function url(){

        $url = isset($_SERVER['HTTPS']) && 'on' === $_SERVER['HTTPS'] ? 'https' : 'http';
        $url .= '://'.$_SERVER['HTTP_HOST'];
        //$url .= in_array($_SERVER['SERVER_PORT'], array('80', '443')) ? '' : ':'.$_SERVER['SERVER_PORT'];
        $url .= $_SERVER['REQUEST_URI'];    

        return $url;
    }

    /**
     * Returns a WP date fromat
     *
     * @param mixed $date
     * @return string
     */
    static function get_date( $date ){
		$date = new DateTime( $date );
        return $date->format( get_option('date_format') );
    }
 
    /**
     * Returns author data
     *
     * @param int $id
     * @return array
     */
    static function get_author( $id ){

        $user = get_userdata( $id );
        
        if( ! $user ){
            return false; 
        }

        $url = get_author_posts_url( $id );

        if( $user->first_name !== '' && $user->last_name !== '' ){
            return array(
                'name' => $user->first_name .' '. $user->last_name,
                'url' => $url 
            );
        }
        else{
            return array(
                'name' => $user->display_name,
                'url' => $url 
            );
		}
		
    }
    
}
