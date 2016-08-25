var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') + 
'//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();

var i = 1;


googletag.cmd.push(function() 
{ 
	for(i = 1;i <= 50;i++)
{

	googletag.defineSlot('/1458073/dm_web_top_300x250', [300, 250], '300x250_right_'+i).addService(googletag.pubads());
	googletag.pubads().enableSingleRequest();
    	googletag.pubads().collapseEmptyDivs();
    	googletag.enableServices();
       	googletag.display("300x250_right_"+i);
}
	
});      


/*
function loadAd(divId)
{

  googletag.cmd.push(function() 
  { 
    googletag.defineSlot('/1458073/dm_web_top_300x250', [300, 250], divId).addService(googletag.pubads()); 
    googletag.cmd.push(function(){googletag.display(divId)});
  });

}
*/

function loadAd()

{

  googletag.cmd.push(function() 
  { 
    googletag.defineSlot('/1458073/dm_web_top_300x250', [300, 250], '300x250_top_1').addService(googletag.pubads()); 
    googletag.cmd.push(function(){googletag.display('300x250_top_1')});
  });

}
