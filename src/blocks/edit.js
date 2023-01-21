import { generateID, UploadImageIcon } from '../global';
import ResponsiveSettings from '../components/ResponsiveSettings';

const {
    InspectorControls,
    MediaUpload,
} = wp.blockEditor;

const { 
    Button,
    SelectControl,
    TextControl,
} = wp.components;

const {
    Fragment,
    Component
} = wp.element;

const { __ } = wp.i18n;
const { apiFetch } = wp;
const { addQueryArgs } = wp.url;

class Edit extends  Component{

    constructor(...args){
        super(...args);

        this.state = {
            images: [],
            upload_dir: [],
            design: this.props.attributes.design,
            loading: true,
        };

        this.loadImages = this.loadImages.bind( this );
        this.renderStyle = this.renderStyle.bind( this );
    }

    componentDidMount(){
        generateID( this.props.attributes.uid, this.props.setAttributes );
        this.loadImages();
    }

    componentDidUpdate( old ){
        if( old.attributes.ids !== this.props.attributes.ids ){
            this.loadImages();
        }
    }

    loadImages(){

        const self = this;
        const { ids, design } = this.props.attributes;

        apiFetch({
            path: addQueryArgs( '/ely/v1/images', {
                ids,
            }),
        })
        .then( list => {        
            
            let images = list.images;
            
            if( images[0] === false ){
                images = [];
            }
                
            self.setState({ 
                images,
                upload_dir: list.upload_dir, 
                loading: false 
            });
        })
        .catch( () => {
            self.setState({ 
                images: [],
                upload_dir: [] ,
                loading: false 
            });
        });
    }

    renderStyle(){

        const {
            uid,
            fontSize,
            mobileFontSize,
            tabletFontSize,
        } = this.props.attributes;

        const output = `
            #${uid}.gallery-fg{
                font-size: ${mobileFontSize}px;
            }
            
            @media all and (min-width: 768px) {
                #${uid}.gallery-fg{
                    font-size: ${tabletFontSize}px;
                }
            }

            @media all and (min-width: 992px) {
                #${uid}.gallery-fg{
                    font-size: ${fontSize}px;
                }
            }
        `;

        return output;
    }

    render(){

        const {
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        if( this.state.loading ){
            return __('Loadding', 'ely');
        }
        
        const output = this.state.images.map( image => {   
            
            const url = this.state.upload_dir.baseurl + '/' + image.file;

            return (
                <div class="item-fg">
                    <img src={url} alt={image.caption} />   
                    {image.caption &&(
                        <div class="caption">{image.caption}</div> 
                    )}
                    <a href={'#'} />
                </div>
            )
        });
        
        return [

            isSelected && (
                <InspectorControls>

                    <hr />

                    <div className="fancyg-alert">
                        {__('This is only a preview. The complete design is on the frontend.','ely')}
                    </div>

                    <SelectControl
                        label={ __('Design','ely')}
                        value={ attributes.design }
                        options={ [
                            { label: __('Grid','ely'), value: 'grid' },
                            { label: __('Justified','ely'), value: 'justified' },
                            { label: __('Fullwidth','ely'), value: 'fullwidth' },
                            { label: __('Masonry','ely'), value: 'masonry' },
                        ] }
                        onChange={ design => {
                            setAttributes({ design }); 
                            this.setState({ design }); // forces the child component 'ResponsiveSettings' to re-render
                        }}
                    />

                    { attributes.design === 'justified' &&(
                        <TextControl
                            label={ __('Row Height (px)','ely')}
                            value={ attributes.rowHeight }
                            onChange={ ( rowHeight ) => setAttributes( { rowHeight } ) }
                        />
                    )}

                    <ResponsiveSettings 
                        design={this.state.design} // forces the child component 'ResponsiveSettings' to re-render
                        attributes={attributes} 
                        setAttributes={setAttributes} 
                    />

                </InspectorControls>
            ),

            <Fragment>

                <MediaUpload
                    gallery = { true }
                    multiple = { true }
                    className = {'ely-uploader'}
                    onSelect = { ( media ) => {
                        return setAttributes({
                            ids: media.map( image => image.id ).join(','),
                        })
                    }}
                    type = { 'image' }
                    value = { attributes.ids.split(',') }
                    render = { function( obj ) {
                        return (

                            <Button
                                className = { attributes.imageID ? '' : 'button-ely-upload' }
                                onClick = { obj.open } 
                            >
                                <UploadImageIcon/>
                            </Button>

                        )
                    } }
                />
                
                <style>{this.renderStyle()}</style>

                <div 
                    id={attributes.uid}
                    data-id={attributes.uid}
                    class="gallery-fg size-fullsize-fg fg_gallery_started" 
                    data-design={attributes.design} 
                    data-desktop={attributes.columns} 
                    data-tablet={attributes.tabletColumns} 
                    data-mobile={attributes.mobileColumns} 
                    data-rowheight={attributes.rowHeight} 
                >
                    {output}
                </div>

            </Fragment>

        ]

    }
    
}

export default Edit;
