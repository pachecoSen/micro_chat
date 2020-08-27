"use strict";

const {src, dest} = require('gulp'),
    {resolve} = require('path');

const load = path_base => {
    const node_modules = resolve(path_base, './node_modules'),
        public_dir = resolve(path_base, './public/');
    
    console.log('>> Starting routines ...');
    src(resolve(node_modules, './vue/dist/vue.min.js')).pipe(dest(resolve(public_dir, './vue')));
    console.log('>> Completed routines ...');
}


module.exports = {load};