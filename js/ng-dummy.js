
angular.module('me.mnmlst.ng-dummy', [])

.directive('dummy', function() {


   

    Math.seedrandom('dummy');

    var origin; // used to start at 0 each time.

    function dummyText ( opts ) {
        var corpus = opts.corpus || 'lorem',
            i = opts.start,
            isRandom = typeof(i) === 'undefined',
            mustReset = typeof(origin) === 'undefined',
            skip = opts.skip || 1,
            sentences = opts.sentences || 1,
            words = opts.words,
            text = texts[corpus] || texts.lorem,
            len = text.length,
            output = [],
            s;

        if ( isRandom ) {
            i = Math.floor( Math.random() * len );
        }

        if ( mustReset ) {
            origin = i;
        }

        if ( isRandom ) {
            // possible modulo of a negative number, so take care here.
            i = ((i + len - origin) % len + len) % len;
        }

        while( sentences-- ) {
            s = text[i];
            if ( words ) {
                s = s.split(' ').slice(0,words).join(' ');
            }
            output.push( s );
            i = (i + skip) % len;
        }

        return output.join(' ');
    }

    function parseAttrs (str, prior) {
        var opts = prior || {},
            reWords = /^([0-9]+)w$/,
            reSentences = /^([0-9]+)s?$/,
            reStart = /^@([0-9]+)$/,
            reSkip = /^\+([0-9]+)$/,
            reCorpus = /^[a-z]+$/,
            matches;

        str.split(' ').forEach( function (s) {
            if ( matches = reWords.exec(s) ) {
                opts.words = parseInt(matches[1]);
                opts.sentences = 0;
            } else if ( matches = reSentences.exec(s) ) {
                opts.sentences = parseInt(matches[1]);
                opts.words = 0;
            } else if ( matches = reStart.exec(s) ) {
                opts.start = parseInt(matches[1]);
            } else if ( matches = reSkip.exec(s) ) {
                opts.skip = parseInt(matches[1]);
            } else if ( matches = reCorpus.exec(s) ) {
                opts.corpus = matches[0];
            }
        });
        return opts;
    }

    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            var opts = defaults[element[0].tagName] || defaults.P,
                span = document.createElement('span');

            if ( attrs.dummy ) {
                opts = parseAttrs( attrs.dummy, opts );
            }

            span.textContent = dummyText( opts );
            span.className = 'ng-dummy-text';
            element[0].appendChild( span );
        }
    };
});
