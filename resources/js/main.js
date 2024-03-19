---
---

/***************************
 * Document initialization
 **************************/

// Browser Storage Support (https://stackoverflow.com/a/41462752/2538602)
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return false;
  }
}

$(document).ready(function(){
    /* SEARCH FUNCTIONALITY */
    var search = $('.search input');
    search.keyup(function() {
        var value = $(this).val();
        value = value ? value.toLowerCase() : null;
        var countActive = 0, countCompleted = 0;
        if(value) {
            $('.advisory').css('display', 'none');
        } else {
            $('.advisory').css('display', 'block');
        }

        $('.project').each(function () {
            var title = $(this).find('.header').data('title');
            var text = $(this).find('.content').text();
            if(value && ((!text || text.toLowerCase().indexOf(value) == -1) && (!title || title.toLowerCase().indexOf(value) == -1))) {
                $(this).parent().css('display', 'none');
            } else {
                if($(this).closest('.project-list').hasClass('active')) {
                    countActive++;
                } else {
                    countCompleted++;
                }
                $(this).parent().css('display', 'block');
            }
        });
        /* Hide unneeded blocks: */
        if(countActive == 0) {
            $('.title.active h2').css('display', 'none');
        } else {
            $('.title.active h2').css('display', 'block');
        }
        if(countCompleted == 0) {
            $('.title.completed h2').css('display', 'none');
        } else {
            $('.title.completed h2').css('display', 'block');
        }

        if(countActive + countCompleted == 0) {
            $('.no-results').css('display', 'block');
        } else {
            $('.no-results').css('display', 'none');
        }
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


    // If selected from home and available, open the requested project description modal:
    var projectLabel = window.location.href.split('#')[1];
    if(projectLabel) {
        $('#' + projectLabel + ' a.read-more').trigger('click');
    }

    /* PROJECT CONTRIBUTOR MODALS */
    $(document).on('click', 'a.contributors-modal', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        if($(this).closest('.project').hasClass('.modal-body')) {
            $('#modal-description').on('hidden.bs.modal', function () {
                $(target).modal('show');
            });
        } else {
            $(target).modal('show');
        }
        $('#modal-description').modal('hide');
    });

    // --- Preferences stored in localStorage ---

    const Storage = (namespace) => {
      return ({
        getPreference(key, defaultValue) {
          const res = localStorage.getItem(`${namespace}.${key}`);
          return res === null ? defaultValue : res;
        },
        setPreference(key, value, onChange) {
          const old = this.getPreference(key, null);
          if (old !== value) { // activate effect only if value changed.
            localStorage.setItem(`${namespace}.${key}`, value);
            onChange(old);
          }
        }
      });
    };

    function setupAlertCancel(alert, storage) {
      const messageId = alert.data('message_id');
      let onHide = () => {};
      if (messageId) {
        const key = `alert.${messageId}`;
        const isHidden = storage.getPreference(key, 'show') === 'hidden';
        if (isHidden) {
          alert.hide();
        }
        onHide = () => storage.setPreference(key, 'hidden', _ => {});
      }


      alert.find('.hide-with-preference').click(function() {
        alert.hide(), onHide();
      });
    }

    function setupAllAlertCancels(storage) {
      var alertBanners = $(".alert-warning");
      if (alertBanners.length) {
        setupAlertCancel(alertBanners, storage);
      }
    }

    if (storageAvailable('localStorage')) {
      const PreferenceStorage = Storage('ch.epfl.scala.preferences');
      setupAllAlertCancels(PreferenceStorage);
    }

});
