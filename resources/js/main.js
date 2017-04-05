---
---

/***************************
 * Document initialization
 **************************/

$(document).ready(function(){
    var search = $('.search input');
    console.log(search);
    search.keyup(function() {
        console.log('key');
        var value = $(this).val();
        value = value ? value.toLowerCase() : null;
        $('.project').each(function () {
            var title = $(this).find('h2').text();
            var text = $(this).find('.content').text();
            if(value && (text.toLowerCase().indexOf(value) == -1 && title.toLowerCase().indexOf(value) == -1)) {
                $(this).css('display', 'none');
            } else {
                $(this).css('display', 'block');
            }
        });
    });
});
