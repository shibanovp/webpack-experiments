'use strict'
function Work(params) {
    setTimeout(function() {
        alert('work complete');
    }, workSettings.delay)
    
}
console.log(workSettings)