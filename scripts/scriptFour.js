        var sdflogo = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="152" height="172" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M70.396,0l19.067,41.667l39.802,16.534l10.705,-10.902l-6.012,35.024l-49.189,4.642l-5.533,8.866l-13.582,0.115l-5.98,-8.104l-48.561,-5.646l-3.529,-33.562l10.259,10.495l36.551,-16.657l16.002,-42.472Z" style="fill:#fff;"/><path d="M129.294,79.457l-127.22,73.318l26.274,-2.885l-16.027,20.667l127.22,-73.319l6.128,-15.684l-16.375,-2.097Z" style="fill:#fff;"/><path d="M142.63,152.687l-127.212,-73.331l-15.418,3.391l5.169,14.39l127.212,73.331l-15.942,-20.335l26.191,2.554Z" style="fill:#fff;"/></svg>' ;
        var b64 = btoa(sdflogo);
        var domurl = self.URL || self.webkitURL || self ;
        var sdflogoimg = new Image();
        sdflogoimg.src = "data:image/svg+xml;base64,"+b64 ;