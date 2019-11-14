<?php 

class Ely_Shortcode_Helper{

    /**
     * Is shortcode
     */
    static function isShortcode( $shortcode ){
        if( preg_match( '/\[[^\/].+?\]/', $shortcode, $match ) ) return true;
        return false;
    }

    /**
     * Get atts
     * @param string $shortcode
     * @return array|bool
     */
    static function parseAtts( $shortcode ){

        if( ! self::isShortcode( $shortcode ) ) return false;

        // no atts
        if( strpos( $shortcode, '=' ) === false ){
            return array( 0 => str_replace( array('[', ']', ' '), '', $shortcode ) );
        }

        // get shortcode name
        $name = preg_replace('/\s.*/', '', $shortcode);
        $name = str_replace('[','',$name);

        // get atts
        preg_match( '/\['.$name.'\s(.*?)\]/', $shortcode, $match );

        // filter each attr
        return array_reduce( explode( ' ', $match[1] ), function ( $newArr, $attr ){
            if( $attr == '' ) return $newArr;
            
            $parts = explode( '=', $attr );
            $newArr[ $parts[0] ] = str_replace( array('"',"'"), '', $parts[1] );

            return  $newArr;
        }, array( 0 => $name ) );
    }

    /**
     * Create shortcode from attributes
     * @param array $atts
     * @return string
     */
    static function createFromAtts( $atts ){
        // create it
    }

}
