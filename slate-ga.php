		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
   
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-XXXXX-Y']);
        _gaq.push(['_trackPageview']);
		<!-- Track hashtags -->
		//_gaq.push(['_trackPageview', location.pathname + location.search + location.hash]);

        (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();