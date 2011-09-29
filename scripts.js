jQuery(document).ready(function() {
	//put all your jQuery goodness in here.
	jQuery('#toc_toggle > a').click(function() {
		jQuery('#toc_area').slideToggle();
	});
	
	jQuery('#toc_toggle').css('display', 'block');
	
	jQuery('input#navSearch').focus(function() {
		if (jQuery(this).attr('value') == 'search')
		{
			jQuery(this).attr('value', '');
			jQuery(this).css('color', '#000');
		}
	});
	
	jQuery('input#navSearch').blur(function() {
		if (jQuery(this).attr('value') == '')
		{
			jQuery(this).attr('value', 'search');
			jQuery(this).css('color', '#999');
		}
	});
});