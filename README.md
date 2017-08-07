
Demo : [clean_blog-ext](https://d2m.tech/clean_blog-ext/)

### From [StartBoostrap Clean-blog Theme](https://startbootstrap.com/template-overviews/clean-blog/).

[Current Jekyll version](https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll) allows end-users to edit/add post displayed on home page. Other pages can only be modified on html, yml files.
Note : [on Wordpress version](https://github.com/deviodigital/cleanblog), end-users can access all contents, design.



### Propositions :

- end-users can edit/add pages

- a custom editor, served locally on a Virtualbox, communicate with github server to update the metadata.


#### Demo editor

- [duplicate and edit a post then update production site](https://drive.google.com/open?id=0B8fHSjalmbNEODBRZ0lXZl9udlk)

- [add a new page with content then update navigation header](https://drive.google.com/open?id=0B8fHSjalmbNEbC1Qd0laaW5RNmc)


#### Limitations :

- at this time, main contribution is kept private : liquid lib to access metadata on build, custom editor

- build time has grown with plugin jekyll-asset and compress options activated, see [webpacked-jekyll-assets-react](https://github.com/admien33/webpacked-jekyll-assets-react) to get a faster build time. Todo integration.

- Next step : [clean_agency_demo01](https://github.com/admien33/clean_agency_demo01.git) :
	
	 - add new pages with custom sections and custom design. 

	 - webpacked assets, webfont loader. [Page speed insight](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fd2m.tech%2Fclean_agency_demo01%2F&tab=desktop). 

	 - angularjs used to render detailed articles, blog section.



