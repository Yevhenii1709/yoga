window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let calc = require('./parts/calc'),
        contactForm = require('./parts/contact_form'),
        form = require('./parts/form'),
        modal = require('./parts/modal'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');
    
    calc();
    contactForm();
    form();
    modal();
    slider();
    tabs();
    timer();
});