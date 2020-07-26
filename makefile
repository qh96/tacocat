run:
	node indeed-crawler.js
	node linkedin-crawler.js

github:
	git add .
	- git commit -a
	git push origin master
	git push heroku master

prod: run github

	
	
	
