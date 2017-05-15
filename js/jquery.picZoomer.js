
;
(function ($) {
    $.fn.picZoomer = function (options) {
        var opts = $.extend({}, $.fn.picZoomer.defaults, options),
                $this = this,
                $picBD = $('<div class="picZoomer-pic-wp"></div>').css({'width': opts.picWidth + '%', 'height': opts.picHeight + '%'}).appendTo($this),
                $pic = $this.children('img').addClass('picZoomer-pic').appendTo($picBD),
                $cursor = $('<div class="picZoomer-cursor"><i class="f-is picZoomCursor-ico"></i></div>').appendTo($picBD),
                cursorSizeHalf = {w: $cursor.width()/2, h: $cursor.height()*1.75},
        $zoomWP = $('<div class="picZoomer-zoom-wp"><img src="" alt="" class="picZoomer-zoom-pic"></div>').appendTo($this),
                $zoomPic = $zoomWP.find('.picZoomer-zoom-pic'),
                picBDOffset = {x: $picBD.offset().left, y: $picBD.offset().top};


        opts.zoomWidth = opts.zoomWidth || opts.picWidth;
        opts.zoomHeight = opts.zoomHeight || opts.picHeight;
        var zoomWPSizeHalf = {w: opts.zoomWidth / 2, h: opts.zoomHeight * 1.50};


        $zoomWP.css({'width': opts.zoomWidth + 'px', 'height': opts.zoomHeight + 'px'});
        $zoomWP.css(opts.zoomerPosition || {top: 0, left: opts.picWidth + '%'});

        $zoomPic.css({'width': opts.picWidth * opts.scale + '%', 'height': opts.picHeight * opts.scale + '%'});

        $picBD.on('mouseenter', function (event) {
            $cursor.show();
            $zoomWP.show();
            $zoomPic.attr('src', $pic.attr('src'))
        }).on('mouseleave', function (event) {
            $cursor.hide();
            $zoomWP.hide();
        }).on('mousemove', function (event) {
            var x = event.pageX - picBDOffset.x,
                    y = event.pageY - picBDOffset.y;

            $cursor.css({'left': x - cursorSizeHalf.w + 'px', 'top': y - cursorSizeHalf.h + 'px'});
            $zoomPic.css({'left': -(x * opts.scale - zoomWPSizeHalf.w) + 'px', 'top': -(y * opts.scale - zoomWPSizeHalf.h) + 'px'});

        });
        return $this;

    };

    var leftSize = 120;
    var picHeight = 100;
    var picWidth = 100;


    $.fn.picZoomer.defaults = {
        picWidth: 100,
        picHeight: 100,
        scale: 4,
        zoomerPosition: {top: '0', left: picWidth + 9 + '%'},
        zoomWidth: 500,
        zoomHeight: 500
    };
})(jQuery);