

/*
   * scrollConnectors uses d3 to connect paths to media elements
   * Inspired by www.nytimes.com/newsgraphics/2013/07/21/silk-road/
   *
   * @param mediaItems {string | array} Use string of CSS selector class, or provide array of objects with x/y properties
   * @param connectors {array} Array of objects with x/y properties, [{x:1, y:2}, {x:3, y:4}]
   * @param bgImage    {string} URL for the background image 
   * @param options    {object} Set various optional options svg: d3 svg dom object, 
   * 
   */
  function scrollConnectors(mediaItems, connectors, bgImage, options){


    var scrollConnect = {

        init : function(mediaItems, connectors, bgImage, options){

            var defaultOptions = {
                dotcolor  : '#000000',
                dotsize   : 5,
                linecolor : '#000000',
                linesize  : 0.5
            };

            var self = this;

            this.opts          = this.extend(defaultOptions, options);
            this.mediaItems    = this.getMediaItemPosition(mediaItems);
            this.bgImage       = bgImage;
            this.bgOffset      = this.viewPortWidthHeight().width - this.bgImage.width; //x value of bgimage
            this.connectorData = connectors.map(function(d){ d.x += self.bgOffset; return d;});
            this.svg           = this.createSVG();
            this.bgImageSVG    = this.appendBackgroundImg();
            this.pathGroup     = this.svg.append('g').attr('class', 'pathgroup');
            this.dotGroup      = this.svg.append('g').attr('class', 'dotgroup');
            this.connectors    = this.appendConnectors();
            this.pathConnector = this.magicPathConnector();
            this.paths         = this.drawPaths();

            d3.select(window).on("scroll", function(){ 
                
                self.redrawPaths(self); 

            });

        },


        //if CSS selector string passed in, convert to [{x:1, y:2}]
        getMediaItemPosition : function(arg){
            if(typeof arg === 'string'){
                var data = [];
                var elm  = d3.selectAll(arg);
                
                for(var i=0; i < elm[0].length; i++){
                    data.push(this.getOffset(elm[0][i]));
                }
                //return [{x:1, y:2}] array
                return data;
            } else {
                //not a string, return the array
                return arg;
            }
        },


        //cross-browser compatible offset detection for media elements
        getOffset : function(elm){
            var x=0,y=0;
            while(true){
                x += (elm.offsetLeft + (elm.width||0));
                y += (elm.offsetTop  + ((elm.height||0)/2));
                if(elm.offsetParent === null){
                    break;
                }
                elm = elm.offsetParent;
            }
            return {x:x, y:y};
        },


        //similar to jQuery's $.extend. Combines two objects.
        extend : function(obj1, obj2){
            for(var i=1; i<arguments.length; i++)
                for(var key in arguments[i])
                    if(arguments[i].hasOwnProperty(key))
                        arguments[0][key] = arguments[i][key];
            return arguments[0];
        },


        //load background image and get size. Inefficient, but no way to get size from SVG image tag
        //this will later determine the size and position of the svg, and call init()
        getBackgroundImageSize : function(m, c, url, opt){
            var image = new Image(),
                self  = this;
            image.onload = function(){
                self.init(m, c, {width:this.width, height:this.height, url:url}, opt);
            }
            image.src = url || '';
        },


        //creates and returns svg ref, which will be in the background of page. Set height of viewBox to max data
        createSVG : function(){
            var svg = d3.select('body')
              .append('svg')
              .attr('width', '100%')
              .attr('height', '100%')
              .attr('viewBox', '0 0 ' + this.viewPortWidthHeight().width + ' ' + this.bgImage.height)
              .attr('preserveAspectRatio', 'xMidYMin')
              .style({'position':'fixed', 'z-index': '-1', 'top':0, 'left':0});

             return svg;
        },


        //append background image, and justify right as default for now
        appendBackgroundImg : function(){

            var bgImageSVG = this.svg.append('image')
               .attr('xlink:href', this.bgImage.url)
               .attr('height', this.bgImage.height + 'px')
               .attr('width',  this.bgImage.width  + 'px')
               .attr('y', 0)
               .attr('x', this.bgOffset);//right adjusted for now

            return bgImageSVG;
        },


        appendConnectors : function(){
            var bgOffset = this.bgOffset;
            var connectors = this.dotGroup.selectAll('.dots')
               .data(this.connectorData)
               .enter()
               .append('circle')
               .attr('class', 'dots')
               .attr('r', this.opts.dotsize)
               .attr('cx', function(d){ return d.x})
               .attr('cy', function(d){ return d.y})
               .attr('fill', this.opts.dotcolor);

            return connectors;
        },


        //http://bl.ocks.org/mbostock/3960741
        magicPathConnector : function(){
            var line = d3.svg.line()
                .interpolate(function(points){
                var x0 = points[0][0],y0 = points[0][1],x1,y1,x2,path = [x0, ",", y0],i = 0,n = points.length;
                while (++i < n) {
                    x1 = points[i][0], y1 = points[i][1], x2 = (x0 + x1) / 2;
                    path.push("C", x2, ",", y0, " ", x2, ",", y1, " ", x1, ",", y1);
                    x0 = x1, y0 = y1;
                }
                return path.join("");
            });
            return line;
        },


        drawPaths : function(){
            var line = this.pathConnector,
                con  = this.connectorData,
                ofst = this.bgOffset;

            var paths = this.pathGroup.selectAll('.path')
                .data(this.mediaItems)
                .enter()
                .append('path')
                .attr('class', 'link')
                .style({'stroke-width': this.opts.linesize, 'stroke':this.opts.linecolor, 'fill':'none'})
                .attr('d', function(d, i){ return line([[con[i].x, con[i].y], [d.x, d.y]]) });

            return paths;
        },


        //http://stackoverflow.com/a/872537/838158
        getScrollTop : function(){
            if(typeof window.pageYOffset !== 'undefined'){
                //most browsers except IE before 9
                return window.pageYOffset;
            } else{
                var b = document.body; //IE 'quirks'
                var d = document.documentElement; //IE with doctype
                d = (d.clientHeight)? d : b;
                return d.scrollTop;
            }
        },


        redrawPaths : function(self){
            var ofst = self.getScrollTop(),
                line = self.pathConnector,
                //apply scrolltop offset to each y value of mediaitems (non-mutable)
                mI   = self.mediaItems.map(function(d){ var y = d.y - ofst; return {x:d.x, y:y}; }),
                con  = self.connectorData;

            self.paths.each(function(d, i){
                d3.select(this)
                  .attr("d", line([[con[i].x, con[i].y], [mI[i].x, mI[i].y]]));
            });
        },


        //cross-browser viewport width and height.
        viewPortWidthHeight : function(){
            var w = Math.max(document.documentElement.clientWidth,  window.innerWidth  || 0),
                h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            return {width: w, height: h};
        }
    }

    //console messages for older version of ie.
    var console = window.console || { error: function() {} };

    //include d3 CDN if it's not included in project, otherwise initialize
    if(typeof window.d3 !== 'object'){
        var d3inc = document.createElement('script'); 
            d3inc.type  = 'text/javascript'; 
            d3inc.async = true;
            d3inc.src   = 'http://d3js.org/d3.v3.min.js';
            d3inc.onload = d3inc.onreadystatechange = function() {
                //get background image first, which will call init()
                scrollConnect.getBackgroundImageSize(mediaItems, connectors, bgImage, options); 
            }
        var s = document.getElementsByTagName('script')[0]; 
            s.parentNode.insertBefore(d3inc, s);
    } else {
        scrollConnect.getBackgroundImageSize(mediaItems, connectors, bgImage, options);
    }
  }

