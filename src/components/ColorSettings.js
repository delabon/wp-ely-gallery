import ColorControl from './ColorControl';

const { 
    PanelBody,
} = wp.components;

const { __ } = wp.i18n;

const ColorSettings = ({ attributes, setAttributes }) => {

    return (

        <PanelBody
            title={ __('Color Settings', 'ely') }
            initialOpen={ false }
        >

            {attributes.hasOwnProperty('backgroundColor') &&(
                <ColorControl
                    label = { __('Background', 'ely') }
                    value = { attributes.backgroundColor }
                    onChange={ ( backgroundColor ) => setAttributes({ backgroundColor }) } 
                />
            )}

            {attributes.hasOwnProperty('borderColor') &&(
                <ColorControl
                    label = { __('Border', 'ely') }
                    value = { attributes.borderColor }
                    onChange={ ( borderColor ) => setAttributes({ borderColor }) } 
                />
            )}

            {attributes.hasOwnProperty('bottomBorderColor') &&(
                <ColorControl
                    label = { __('Bottom Border', 'ely') }
                    value = { attributes.bottomBorderColor }
                    onChange={ ( bottomBorderColor ) => setAttributes({ bottomBorderColor }) } 
                />
            )}

            <ColorControl
                label = { __('Title', 'ely') }
                value = { attributes.titleColor }
                onChange={ ( titleColor ) => setAttributes({ titleColor }) } 
            />

            <ColorControl
                label = { __('Author', 'ely') }
                value = { attributes.authorColor }
                onChange={ ( authorColor ) => setAttributes({ authorColor }) } 
            />

            <ColorControl
                label = { __('Date', 'ely') }
                value = { attributes.dateColor }
                onChange={ ( dateColor ) => setAttributes({ dateColor }) } 
            />

            <ColorControl
                label = { __('Categories', 'ely') }
                value = { attributes.categoryColor }
                onChange={ ( categoryColor ) => setAttributes({ categoryColor }) } 
            />

            <ColorControl
                label = { __('Excerpt', 'ely') }
                value = { attributes.excerptColor }
                onChange={ ( excerptColor ) => setAttributes({ excerptColor }) } 
            />

            <ColorControl
                label = { __('Read More Button', 'ely') }
                value = { attributes.readmoreColor }
                onChange={ ( readmoreColor ) => setAttributes({ readmoreColor }) } 
            />

            <ColorControl
                label = { __('Read More Button Background', 'ely') }
                value = { attributes.readmoreBGColor }
                onChange={ ( readmoreBGColor ) => setAttributes({ readmoreBGColor }) } 
            />

        </PanelBody>

    );

}

export default ColorSettings;
