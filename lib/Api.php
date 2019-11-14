<?php

class Ely_Api{

	private $version;
	private $namespace;

	/**
	 * Constructor.
	 */
	public function __construct() {

		$this->version   = '1';
        $this->namespace = 'ely/v' . $this->version;
        $this->run();
        
    }
    
	/**
	 * Run all of the plugin functions.
	 */
	public function run() {
		add_action( 'rest_api_init', array( $this, 'create_endpoints' ) );
	}

    /**
     * Creates REST Endpoints
     */
    public function create_endpoints(){

		register_rest_route(
			$this->namespace,
			'/images',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get_images' ),
                'permission_callback' => function () { return true; /* its public */ },
			)
        );
        
    }

    /**
     * Render
     *
     * @return \WP_REST_Response
     */
    public function get_images( $request ){
        
        $ids = explode(',', $request->get_param( 'ids' ) );

        if( empty( $ids ) ){
            return $this->response(array(
                'upload_dir' => wp_get_upload_dir(),
                'images' => array(),
                'noids' => true,
            ));
        }

        $images = array();

        foreach( $ids as $id ){
            
            $data = wp_get_attachment_metadata( $id );
            
            if( $data ){
                $data['caption'] = wp_get_attachment_caption( $id );
                $images[] = $data;
            }
        }

        return $this->response(array( 
            'upload_dir' => wp_get_upload_dir(),
            'images' => $images 
        ));
    }

    /**
     * Response
     *
     * @param mixed $data
     * @return WP_REST_Response
     */
    private function response( $data ){
        $response = new \WP_REST_Response( $data );
        $response->set_status(200);
    
        return $response;
    }
}