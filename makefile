run:
	node indeed-crawler.js
	node linkedin-crawler.js

github:
	git add .
	- git commit -a
	git push origin master

github-update-output:
	git add .
	git commit -m 'update OUTPUT'
	git push origin master
	git push heroku master

display:
	npm start 

prod: run github-update-output

heroku:
	git add .
	- git commit -a
	git push origin master
	git push heroku master

	
	
	
