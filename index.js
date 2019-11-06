let dragula = require('dragula');

var scrollable = true;

var listener = function (e) {
    if (!scrollable) {
        e.preventDefault();
    }
}

document.addEventListener('touchmove', listener, { passive: false });

dragula([dndContainer], {
    direction: 'horizontal'
}).on('drag', function (el, source) {
    scrollable = false;
}).on('drop', function (el, source) {
    scrollable = true;
});