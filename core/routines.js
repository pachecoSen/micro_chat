"use strict";

const {src, dest} = require('gulp'),
    {resolve} = require('path');

const load = path_base => {
    const node_modules = resolve(path_base, './node_modules'),
        public_dir = resolve(path_base, './public/');
    
    console.log('>> Starting routines...');

    const vue = new Promise((res, rej) => {
        let msg = '>>> Vue generator routine failed...';
        try {
            src(resolve(node_modules, './vue/dist/vue.min.js'))
                .pipe(dest(resolve(public_dir, './vue')));   

            msg = '>>> Vue generator routine completed...';
            
            res(true);
        } catch (error) {
            rej(false);
        } finally {
            console.log(msg);
        }
    });

    const fontawesome = new Promise((res, rej) => {
        let msg = '>>> Font Awesome generator routine failed...';
        try {
            const path_fontawesome = resolve(node_modules, './@fortawesome/fontawesome-free/'),
                public_fontawesome = resolve(public_dir, './fontawesome');

            src(resolve(path_fontawesome, './js/all.min.js'))
                .pipe(dest(public_fontawesome));

            src(resolve(path_fontawesome, './css/all.min.css'))
                .pipe(dest(public_fontawesome));

            msg = '>>> Font Awesome generator routine completed...';
            
            res(true);
        } catch (error) {
            rej(false);
        } finally {
            console.log(msg);
        }
    });

    Promise.all([vue, fontawesome]).then(res => {
        if(-1 === res.indexOf(false))
            console.log('>> Completed routines...');
        else
            console.log('>> Some routine did not end correctly...');
    });
}


module.exports = {load};