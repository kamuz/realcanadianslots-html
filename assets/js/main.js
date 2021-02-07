jQuery(document).ready(function($){

    /**
     * Jackpot Counter
     */
    $(document).progressiveJackpotTicker({ cultureName: 'FR_DOL' });

    /**
     * Top Menu
     */
    $('.toggle-menu').click(function(){
        $('.menu .nav').addClass('open-menu');
    });
    $('.close-menu').click(function(){
        $('.menu .nav').removeClass('open-menu');
    });
});