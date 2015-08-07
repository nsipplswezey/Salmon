/*global Modernizr, $jq */

// /**
//  * Reponsive and gracefully degrading header video
//    More info on http://zerosixthree.se/create-a-responsive-header-video-with-graceful-degradation/
//  * -----------------------------------------------------------------------------
//  */
'use strict';

var HeaderVideo = function(settings) {
    if (settings.element.length === 0) {
        return;
    }
    this.init(settings);
};

HeaderVideo.prototype.init = function(settings) {
    this.$jqelement = $jq(settings.element);
    this.settings = settings;
    this.videoDetails = this.getVideoDetails();

    $jq(this.settings.closeTrigger).hide();
    this.setFluidContainer();
    this.bindUIActions();

    if(this.videoDetails.teaser && Modernizr.video && !Modernizr.touch) {
        this.appendTeaserVideo();
    }
};

HeaderVideo.prototype.bindUIActions = function() {
    var that = this;
    $jq(this.settings.playTrigger).on('click', function(e) {
        e.preventDefault();
        that.appendIframe();
    });
    $jq(this.settings.closeTrigger).on('click', function(e){
        e.preventDefault();
        that.removeIframe();
    });
};

HeaderVideo.prototype.appendIframe = function() {
    var html = '<iframe id="header-video__video-element" src="'+this.videoDetails.videoURL+'?rel=0&amp;hd=1&autohide=1&showinfo=0&autoplay=1&enablejsapi=1&origin=*" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    $jq(this.settings.playTrigger).fadeOut();
    $jq(this.settings.closeTrigger).fadeIn();
    this.$jqelement.append(html);
};

HeaderVideo.prototype.removeIframe = function() {
    $jq(this.settings.playTrigger).fadeIn();
    $jq(this.settings.closeTrigger).fadeOut();
    this.$jqelement.find('#header-video__video-element').remove();
};

HeaderVideo.prototype.appendTeaserVideo = function() {
    var source = this.videoDetails.teaser;
    var html = '<video autoplay="true" loop="true" muted id="header-video__teaser-video" class="header-video__teaser-video"><source src="'+source+'.webm" type="video/mp4"><source src="'+source+'.mp4" type="video/mp4"></video>';
    this.$jqelement.append(html);
};

HeaderVideo.prototype.setFluidContainer = function() {
    var element = this.$jqelement;
    element.data('aspectRatio', this.videoDetails.videoHeight / this.videoDetails.videoWidth);

    $jq(window).resize(function() {
        var windowWidth = $jq(window).width();
        var windowHeight = $jq(window).height();

        element.width(Math.ceil(windowWidth));
        element.height(Math.ceil(windowWidth * element.data('aspectRatio'))); //Set the videos aspect ratio, see https://css-tricks.com/fluid-width-youtube-videos/

        if(windowHeight < element.height()) {
            element.width(Math.ceil(windowWidth));
            element.height(Math.ceil(windowHeight));
        }
    }).trigger('resize');
};

HeaderVideo.prototype.getVideoDetails = function() {
    var mediaElement = $jq(this.settings.media);

    return {
        videoURL: mediaElement.attr('data-video-URL'),
        teaser: mediaElement.attr('data-teaser'),
        videoHeight: mediaElement.attr('data-video-height'),
        videoWidth: mediaElement.attr('data-video-width')
    };
};
