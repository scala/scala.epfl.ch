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
                $(this).parent().css('display', 'none');
            } else {
                $(this).parent().css('display', 'block');
            }
        });
    });

    /* PROJECT DESCRIPTION MODALS */
    $(document).on('click', 'a.read-more', function(e) {
        e.preventDefault();
        var content = $(this).closest('.project').html();
        var container = $('#modal-description .project');
        container.html(content);
        container.find('.references').append('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>');
        container.find('.content').remove();
        container.find('.modal-content-text').removeClass('hidden');
        $('#modal-description').modal('show');
    });

    /* PROJECT CONTRIBUTOR MODALS */
    $(document).on('click', 'a.contributors-modal', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('#modal-description').on('hidden.bs.modal', function () {
            $(target).modal('show');
        });
        $('#modal-description').modal('hide');
    });
});
