$(function()
{
	/*
	 * Input Masks
	 * Edited by Farook
	 * Converted all ID based reference to Class based reference 
	 * Changed Phone mask  from (999) 999-9999 to (9999) 9999-9999 on 21/2/2014
	 * Added Mobile mask  (99) 99999-99999 on 21/2/2014
	 */
	$.extend($.inputmask.defaults, {
        'autounmask': true
    });

	$(".inputmask-date").inputmask("d/m/y", {autoUnmask: true});
    $(".inputmask-date-1").inputmask("d/m/y",{ "placeholder": "*"});
    $(".inputmask-date-2").inputmask("d/m/y",{ "placeholder": "dd/mm/yyyy" });
    $(".inputmask-phone").inputmask("mask", {"mask": "(9999) 9999-9999"});
	$(".inputmask-mobile").inputmask("mask", {"mask": "(99) 99999-99999"});
    $(".inputmask-tax").inputmask({"mask": "99-9999999"});
    $(".inputmask-decimal").inputmask('decimal', { rightAlignNumerics: false });
    $(".inputmask-currency").inputmask('\u20AC 999,999,999.99', { numericInput: true, rightAlignNumerics: false, greedy: false});
    $(".inputmask-ssn").inputmask("999-99-9999", {clearMaskOnLostFocus: true });

});