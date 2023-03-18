$(function () {
              $('[data-toggle="popover"]').popover()
            });
            
            $(document).click(function (event) {
              $('[data-toggle="popover"]').each(function () {
                if (!$(this).is(event.target) && $(this).has(event.target).length === 0 && $('.popover').has(event.target).length === 0) {
                  $(this).popover('hide');
                }
              });
            });