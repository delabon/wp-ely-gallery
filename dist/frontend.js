/**
 * Ely Gallery Plugin :: Powerfull Touch Support Gallery
 * Author :: Sabri Taieb
 */
(function( $ ){
    'use strict';
  
    var body = $('body');
    var win = $(window);
    var galleries = $('.gallery-fg');
    var sliders = {};
    var pageUrl = window.location.href;
    var pageTitle = document.getElementsByTagName("title")[0].innerHTML;
    var icons = {
        arrowRight : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z" /></svg>',
        arrowLeft : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M16 8.972h-12.793l6.146 6.146-0.707 0.707-7.353-7.353 7.354-7.354 0.707 0.707-6.147 6.147h12.793v1z" /></svg>',
        zoomIn : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M16.604 15.896l-5.173-5.173c0.975-1.137 1.569-2.61 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.737 0-3.369 0.676-4.597 1.904-1.228 1.227-1.903 2.86-1.903 4.596 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.086-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 12c-3.033 0-5.5-2.467-5.5-5.5 0-1.47 0.571-2.851 1.61-3.89 1.039-1.038 2.42-1.61 3.89-1.61 3.033 0 5.5 2.467 5.5 5.5 0 3.033-2.467 5.5-5.5 5.5zM7 6h2v1h-2v2h-1v-2h-2v-1h2v-2h1v2z" /></svg>',
        zoomOut : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5zM4 5.972h5v1h-5v-1z" /></svg>',
        close : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z" /></svg>',
        share : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M6.795 13.396c-1.11-1.037-1.747-2.502-1.747-4.021 0-3.033 2.468-5.5 5.5-5.5h2.912l-2.646-2.646 0.707-0.707 3.854 3.854-3.854 3.854-0.707-0.707 2.646-2.646h-2.912c-2.481 0-4.5 2.019-4.5 4.5 0 1.261 0.508 2.429 1.429 3.29l-0.682 0.729zM16.048 9.030v6.47c0 0.275-0.225 0.5-0.5 0.5h-14c-0.275 0-0.5-0.225-0.5-0.5v-6.475h-1v6.475c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-6.47h-1z" /></svg>',
        facebook : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M12.461 5.57l-0.309 2.93h-2.342v8.5h-3.518v-8.5h-1.753v-2.93h1.753v-1.764c0-2.383 0.991-3.806 3.808-3.806h2.341v2.93h-1.465c-1.093 0-1.166 0.413-1.166 1.176v1.464h2.651z" /></svg>',
        twitter : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M15.253 5.038c0.011 0.151 0.011 0.302 0.011 0.454 0 4.605-3.506 9.912-9.913 9.912-1.974 0-3.808-0.572-5.351-1.564 0.281 0.032 0.551 0.042 0.842 0.042 1.629 0 3.127-0.55 4.325-1.488-1.532-0.032-2.815-1.036-3.257-2.417 0.215 0.032 0.431 0.054 0.656 0.054 0.314 0 0.627-0.043 0.918-0.118-1.596-0.324-2.794-1.726-2.794-3.419 0-0.011 0-0.033 0-0.043 0.464 0.258 1.003 0.42 1.575 0.442-0.938-0.626-1.553-1.694-1.553-2.901 0-0.647 0.173-1.241 0.475-1.759 1.715 2.115 4.293 3.496 7.184 3.646-0.055-0.259-0.087-0.529-0.087-0.799 0-1.919 1.554-3.483 3.484-3.483 1.003 0 1.909 0.42 2.546 1.1 0.787-0.151 1.541-0.442 2.211-0.841-0.259 0.809-0.809 1.489-1.532 1.919 0.702-0.075 1.381-0.269 2.007-0.539-0.475 0.69-1.068 1.306-1.747 1.802z" /></svg>',
        fullscreen : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M15.996 11.352l0.004 4.648-4.649-0.004 0.001-1 2.94 0.003-5.792-5.791-5.792 5.792 2.94-0.003 0.001 1-4.649 0.003 0.004-4.649 1 0.001-0.003 2.939 5.792-5.791-5.792-5.792 0.003 2.939-1 0.001-0.004-4.648 4.649 0.004-0.001 1-2.94-0.003 5.792 5.792 5.792-5.792-2.94 0.003-0.001-1 4.649-0.004-0.004 4.649-1-0.001 0.003-2.939-5.792 5.791 5.792 5.792-0.003-2.939 1-0.001z" /></svg>',
        normalscreen : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M3 3v11h11v-11h-11zM13 13h-9v-9h9v9z" /></svg>'
    };
    var socialShare = {
        facebook : 'https://www.facebook.com/share.php?u=',
        twitter : 'https://twitter.com/intent/tweet?url=',
    };
  
    window.ely_gallery = {
        currentId: false,
        currentSlide: false,
    };
  
    /**
     * Add Gallery id & current slide index to page url
     */
    function changePageUrl( currentId, currentSlideIndex ){
        history.pushState(
            { 
                elyGalleryId: currentId,
                elyGallerySlide: currentSlideIndex
            }, 
            pageTitle, 
            pageUrl.replace( /#fg=.*/gi, '' ) + '#fg=' + currentId + '&slide=' + currentSlideIndex
        );
    }
  
    /**
     * Change back the page url
     */
    function changeBackPageUrl(){
        history.pushState(
            { 
                elyGalleryId: false,
                elyGallerySlide: false,
            }, 
            pageTitle, 
            pageUrl.replace( /#fg=.*/gi, '' )
        );
    }
  
    /**
     * Get Gallery ID / Slide From Browser Hash
     * @return {object}
     */
    function getDataFromBrowserHash(){
        if( location.hash == '' ) return false;
  
        var hash = location.hash;
        var regex = /fg=(.+?)&slide=(\d\d?)/gi;
        var result = regex.exec( hash );
        
        if( ! result ) return false;
        
        return {
            id : result[1],
            slideIndex : parseInt( result[2] ),
        };
    }
  
    /**
     * Open Gallery if url params are set
     */
    function openByUrlParams(){
  
        var data = getDataFromBrowserHash();
                        
        if( ! data ) return;
  
        var slider = sliders[ parseInt( data.id ) ];
        
        if( ! slider ) return;
                
        openLightbox( data.id, data.slideIndex - 1 );   
        changePageUrl( data.id, data.slideIndex );
    }
  
    /**
     * Detect Bowser Back And Forward Events
     */
    function browserBackForwardEvents(){
        
        win.on('popstate', function( e ){
            
            if( ! e.originalEvent.state ){
                closeLightbox();
                return;
            }
  
            if( ! e.originalEvent.state.hasOwnProperty('elyGalleryId') ){
                closeLightbox();
                return;
            }
  
            var id = e.originalEvent.state.elyGalleryId;
            var slide = e.originalEvent.state.elyGallerySlide;
  
            if( ! id ){
                closeLightbox();
                return;
            }
  
            openLightbox( id, slide - 1 );
        });
    }
  
    /**
     * Init Justified Gallery (Premium)
     */
    function  execJustified(gallery) {}
  
    /**
     * Go Full Screen
     */
    function goFullScreen(){
        var i = document.body;
  
        if (i.requestFullscreen) {
            i.requestFullscreen();
        } else if (i.webkitRequestFullscreen) {
            i.webkitRequestFullscreen();
        } else if (i.mozRequestFullScreen) {
            i.mozRequestFullScreen();
        } else if (i.msRequestFullscreen) {
            i.msRequestFullscreen();
        }
  
        body.addClass('__ely_lightbox_fullscreen');
    }
  
    /**
     * Exit Full Screen
     */
    function exitFullScreen(){
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
  
        body.removeClass('__ely_lightbox_fullscreen');
    }
  
    /**
     * Add toolbar markup to lightbox
     */
    function toolbarMarkup( shadow ){
        shadow.append(
            '\
            <div class="ely_lightbox_info">\
                <div><span class="ely_lightbox_counter">0/0</span>\
                <span class="ely_lightbox_caption"></span></div>\
            </div>\
            <div class="ely_lightbox_toolbar">\
                <ul>\
                    <li class="ely_lightbox_btn_exit" title="'+ely_obj.exit+'">'+ icons.close +'</li>\
                    <li class="ely_lightbox_btn_fullscreen" title="'+ely_obj.fullscreen+'">'+ icons.fullscreen +'</li>\
                    <li class="ely_lightbox_btn_zoomin" title="'+ely_obj.zoomin+'">'+ icons.zoomIn +'</li>\
                    <li class="ely_lightbox_btn_zoomout" title="'+ely_obj.zoomout+'">'+ icons.zoomOut +'</li>\
                    <li class="ely_lightbox_btn_share" title="'+ely_obj.share+'">\
                        '+ icons.share +'\
                        <ul class="ely_lightbox_subtoolbar">\
                            <li data-share="facebook">'+ icons.facebook +'</li>\
                            <li data-share="twitter">'+ icons.twitter +'</li>\
                        </ul>\
                    </li>\
                    <li class="ely_lightbox_btn_prev_slide" title="'+ely_obj.prev_slide+'">'+ icons.arrowLeft +'</li>\
                    <li class="ely_lightbox_btn_next_slide" title="'+ely_obj.next_slide+'">'+ icons.arrowRight +'</li>\
                </ul>\
            </div>'
        );
    }
  
    /**
     * Prepare every lightbox items
     * @param {object} items 
     */
    function prepareLightboxItems( items ){
        items.find('a, div').remove();
        return items.removeClass('item-fg').wrapInner('<div class="ely-lightbox-slide"></div>');
    }
  
    /**
     * Open Lightbox
     * @param {string} id 
     * @param {int} slideIndex 
     */
    function openLightbox( id, slideIndex ){
  
        var data = sliders[ id ];
  
        body.addClass('__ely_lightbox_opened');
        
        data.shadow.addClass('__open');
        data.slider.slick('getSlick').slickGoTo( slideIndex, false ); // false = no animation
    }
  
    /**
     * Close Lightbox ( all )
     */
    function closeLightbox() {
  
        Object.keys(sliders).forEach(function( key, i) {            
            sliders[key].shadow.removeClass('__open');
        });
  
        body.removeClass('__ely_lightbox_opened');
    }
  
    /**
     * Init
     * @param {object} gallery 
     */
    function startGallery( gallery ){
  
        var items = gallery.find('.item-fg');
        var id = gallery.attr('id').replace('ely-', '');
        var shadow = $('<div id="ely-shadow-'+id+'" class="ely-shadow"></div>')
        var lightbox = $('<div id="ely-lightbox-'+id+'" class="ely-lightbox"></div>')
        var clonedItems = prepareLightboxItems( items.clone() );
  
        lightbox.append(clonedItems);
        shadow.append(lightbox);
        body.append(shadow);
  
        toolbarMarkup(shadow);
  
        // Start slick slider
        var slider = $('#ely-lightbox-' + id).slick();
        
        sliders[ id ] = {
            itemNum: items.length,
            slider: slider,
            shadow: shadow,
        };
  
        // Event :: open lightbox
        items.on('click', function(e){
            e.preventDefault();
  
            var slideIndex = $( this ).data('num');
  
            openLightbox( id, slideIndex );
            changePageUrl( id, slideIndex + 1);
        });
  
        // Event :: on slide change // set counter and caption
        slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
  
            var caption = lightbox.find('.slick-current img').attr("alt");
  
            if( caption !== "" ){
                shadow.find('.ely_lightbox_caption').text( lightbox.find('.slick-current img').attr("alt") ).show(); 
            }
            else{
                shadow.find('.ely_lightbox_caption').text( lightbox.find('.slick-current img').attr("alt") ).hide(); 
            }
  
            shadow.find('.ely_lightbox_counter').text( (currentSlide + 1) +'/'+ items.length );             
        });
  
        // Event :: on exit click
        shadow.find('.ely_lightbox_btn_exit').on('click', function(e){
            e.preventDefault();
  
            shadow.removeClass('__open');
            body.removeClass('__ely_lightbox_opened');
  
            closeLightbox();
            changeBackPageUrl();
        });
  
        // Event :: on zoomin / zoomout click
        shadow.find('.ely_lightbox_btn_zoomin, .ely_lightbox_btn_zoomout').on('click', function(e){
            e.preventDefault();
            
            var self = $( this );
            var img = lightbox.find('.slick-current img');
            var scale = parseInt( img.attr('data-scale') ) || 1;
  
            if( self.is('.ely_lightbox_btn_zoomin') ){
                scale += 1;
            }
            else{
                scale -= 1;
            }
  
            if( scale == 0 ) return true;
  
            img.attr('data-scale', scale )
                .css('transform','scale3d('+scale+', '+scale+', 1)');
        });
  
        // Event :: on share click
        shadow.find('.ely_lightbox_btn_share').on( 'click', function( e ){
            e.stopPropagation();
            e.preventDefault();
  
            body.toggleClass('__ely_lightbox_share');
        });

        // Event :: on share links click
        shadow.find('.ely_lightbox_subtoolbar li').on( 'click', function( e ){
            e.preventDefault();

            var self = $(this);
            var url = socialShare[ self.data('share') ] + encodeURI( location.href );
            var win = window.open(url, '_blank');
            
            win.focus();
        });
  
        // Event :: on fullscreen click
        shadow.find('.ely_lightbox_btn_fullscreen').on( 'click', function(){
            if( body.hasClass('__ely_lightbox_fullscreen') ){
                exitFullScreen();
            }
            else{
                goFullScreen();
            }
        });
  
        // Event :: on next/prev slide click
        shadow.find('.ely_lightbox_btn_prev_slide, .ely_lightbox_btn_next_slide').on( 'click', function(){
            if( $(this).hasClass('ely_lightbox_btn_next_slide') ){
                slider.slick('getSlick').slickNext(); 
            }
            else{
                slider.slick('getSlick').slickPrev(); 
            }
  
            changePageUrl( id, slider.find('.slick-current').data('num') + 1);
        });
  
    }
  
    galleries.each(function( galleryCount ){
  
        var gallery = $(this);
        var images = $( 'img', this );
        var count = 0;
        
        images.on('load',function(){
  
            count = count + 1;
  
            if( count == images.length ){
                startGallery( gallery );
  
                if( galleryCount + 1 === galleries.length ){
                    setTimeout(function(){
                        browserBackForwardEvents();        
                        openByUrlParams();                          
                    }, 300 );
                }
            }
  
        }).each(function() {
            if(this.complete) $(this).trigger('load'); // jQuery 3
        });    
  
    });
  
  })( jQuery );
  
