jQuery(function() {
    var pagetop = $('.back_top');
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 400); //0.5秒かけてトップへ戻る
        return false;
      });
    });