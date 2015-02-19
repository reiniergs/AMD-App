/*
 * Main
 * Foundation docs: http://foundation.zurb.com/docs/javascript.html
 * Require.js docs: http://requirejs.org/docs/api.html
 *
 * All functionality should be added within a "require" block (see examples below).
 *
 * Create a new js file for each module, and load it with require.
 *
 * See module-example.js for an example module js.
 *
 */


// Require.js configuration
require.config({
    waitSeconds: 120,
    paths: {
        modernizr: 'vendor/modernizr',
        jquery: 'vendor/jquery',
        underscore: "vendor/underscore",
        backbone: "vendor/backbone",
        handlebars: "vendor/handlebars",
        foundation: "vendor/foundation/foundation",
        "foundation.abide": "vendor/foundation/foundation.abide",
        "foundation.accordion": "vendor/foundation/foundation.accordion",
        "foundation.alert": "vendor/foundation/foundation.alert",
        "foundation.clearing": "vendor/foundation/foundation.clearing",
        "foundation.dropdown": "vendor/foundation/foundation.dropdown",
        "foundation.equalizer": "vendor/foundation/foundation.equalizer",
        "foundation.interchange": "vendor/foundation/foundation.interchange",
        "foundation.joyride": "vendor/foundation/foundation.joyride",
        "foundation.magellan": "vendor/foundation/foundation.magellan",
        "foundation.offcanvas": "vendor/foundation/foundation.offcanvas",
        "foundation.orbit": "vendor/foundation/foundation.orbit",
        "foundation.reveal": "vendor/foundation/foundation.reveal",
        "foundation.slider": "vendor/foundation/foundation.slider",
        "foundation.tab": "vendor/foundation/foundation.tab",
        "foundation.tooltip": "vendor/foundation/foundation.tooltip",
        "foundation.topbar": "vendor/foundation/foundation.topbar",
        "calendar": "vendor/clndr",
        "moment": "vendor/moment",
        "domReady" : "vendor/domReady"
    },
    shim : {
        "foundation" : {
            deps : ['jquery']
        }
    }
});

// Main functionality goes here
require(['jquery','foundation'], function ($,foundation) {

    console.log('jquery, foundation loaded');

    require(['domReady!'], function() {

        /**
         * Foundation Modules
         */

        // Abide (validation)
        var abideCollection = $('[data-abide]');
        if (abideCollection.length > 0) {
            requirejs(['foundation.abide'], function () {
                console.log('foundation.abide loaded');
                Foundation.init($(document));
            });
        }

        // Accordion
        var accordionCollection = $('[data-accordion]');
        if (accordionCollection.length > 0) {
            requirejs(['foundation.accordion'], function () {
                console.log('foundation.accordion loaded');
                Foundation.init($(document));
            });
        }

        // Alert
        var alertCollection = $('[data-alert]');
        if (alertCollection.length > 0) {
            requirejs(['foundation.alert'], function () {
                console.log('foundation.alert loaded');
                Foundation.init($(document));
            });
        }

        // Clearing
        var clearingCollection = $('[data-clearing]');
        if (clearingCollection.length > 0) {
            requirejs(['foundation.clearing'], function () {
                console.log('foundation.clearing loaded');
                Foundation.init($(document));
            });
        }

        // DropDown
        var dropdownCollection = $('[data-dropdown]');
        if (dropdownCollection.length > 0) {
            requirejs(['foundation.dropdown'], function () {
                console.log('foundation.dropdown loaded');
                Foundation.init($(document));
            });
        }

        // Equalizer
        var equalizerCollection = $('[data-equalizer]');
        if (equalizerCollection.length > 0) {
            requirejs(['foundation.equalizer'], function () {
                console.log('foundation.equalizer loaded');
                Foundation.init($(document));
            });
        }

        // Interchange
        var interchangeCollection = $('[data-interchange]');
        if (interchangeCollection.length > 0) {
            requirejs(['foundation.interchange'], function () {
                console.log('foundation.interchange loaded');
                Foundation.init($(document));
            });
        }

        // Joyride
        var joyrideCollection = $('[data-joyride]');
        if (joyrideCollection.length > 0) {
            requirejs(['foundation.joyride'], function () {
                console.log('foundation.joyride loaded');
                Foundation.init($(document));
            });
        }

        // Magellan
        var magellanCollection = $('[data-magellan]');
        if (magellanCollection.length > 0) {
            requirejs(['foundation.magellan'], function () {
                console.log('foundation.magellan loaded');
                Foundation.init($(document));
            });
        }

        // Offcanvas
        var offcanvasCollection = $('[data-offcanvas]');
        if (offcanvasCollection.length > 0) {
            requirejs(['foundation.offcanvas'], function () {
                console.log('foundation.offcanvas loaded');
                Foundation.init($(document));
            });
        }

        // Orbit
        var orbitCollection = $('[data-orbit]');
        if (orbitCollection.length > 0) {
            requirejs(['foundation.orbit'], function () {
                console.log('foundation.orbit loaded');
                Foundation.init($(document));
            });
        }

        // Reveal
        var revealCollection = $('[data-reveal]');
        if (revealCollection.length > 0) {
            requirejs(['foundation.reveal'], function () {
                console.log('foundation.reveal loaded');
                Foundation.init($(document));
            });
        }

        // Slider
        var sliderCollection = $('[data-slider]');
        if (sliderCollection.length > 0) {
            requirejs(['foundation.slider'], function () {
                console.log('foundation.slider loaded');
                Foundation.init($(document));
            });
        }

        // Tabs
        var tabCollection = $('[data-tab]');
        if (tabCollection.length > 0) {
            requirejs(['foundation.tab'], function () {
                console.log('foundation.tab loaded');
                Foundation.init($(document));
            });
        }

        // Tooltip
        var tooltipCollection = $('[data-tooltip]');
        if (tooltipCollection.length > 0) {
            requirejs(['foundation.tooltip'], function () {
                console.log('foundation.tooltip loaded');
                Foundation.init($(document));
            });
        }

        // Topbar
        var topbarCollection = $('[data-topbar]');
        if (topbarCollection.length > 0) {
            requirejs(['foundation.topbar'], function () {
                console.log('foundation.topbar loaded');
                Foundation.init($(document));
            });
        }

        // show hide toggles
        var toggleCollection = $('.showHideToggle');
        if (toggleCollection.length > 0) {
            requirejs(['cruise/toggler'], function (toggler) {
                toggler.init();
                console.log('toggler loaded');
            });
        }

        $('#rvlxCategoryModal').on('opened', function () {
            $(window).trigger('resize');
        });

        /**
         *
         * Module Dispatcher
         *
         * Loads javascript modules with require.js, and runs module's "init" method if defined
         *
         * Modules must be declared with "data-module" attribute in the html.
         * Optional attributes are "data-path" and "data-type".
         *
         * Examples:
         * <div data-module='my-module'>  // will load public/resources/default/js/my-module.js
         * <div data-module='my-module' data-path='category/subcategory/'>  // will load public/resources/default/js/category/subcategory/my-module.js
         * <div data-module='my-module' data-path='category/subcategory/' data-type='local'>  // assuming that the current site is "www.mysite.com", will load public/resources/www.mysite.com/js/category/subcategory/my-module.js
         */
            var current_site_dir = 'js/';
            var module_collection = $('[data-module]');

            module_collection.each(function(index, currentModule) {

                var module_name = $(currentModule).attr('data-module');
                var module_type = $(currentModule).attr('data-type');
                var module_path = $(currentModule).attr('data-path');
                
                module_path = module_path ? module_path : '';

                var module_path =  current_site_dir + module_path + module_name + '.js';

                requirejs([module_path], function (module) {
                    console.log('MODULE LOADED: ' + $(currentModule).attr('data-module'));
                    if (module && module.init) {
                        module.init($(currentModule));
                    }
                }.bind(this));

            }.bind(this));



    });

});
