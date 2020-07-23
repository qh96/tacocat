[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fqh96%2Ftacocat)](https://hits.seeyoufarm.com)


Tacocat
=====
This is a platform supporting the latest free software engineer job information for the new graduates.
The keywords includes software grad, entry Software, Software university, Software graduate, Software college, junior developer,
will be used for LinkedIn job search.

Temporarily supported by a hard-working [LinkedIn scraper](https://www.npmjs.com/package/linkedin-jobs-scraper), which works 996 and never sleep.
**Only for self study purpose. No commercial usage allowed!!!**

各位亲人们喜欢的话麻烦加个star谢谢谢~

Demo
---------------------------
[Try it here](https://eattacocat.herokuapp.com/)

Note that the column can be `sortable`. Nimbly to use `search` for better filtering.

Usage
---------------------------
To configure your system for development, first install Node.js and npm and
then run `npm install`. This will install some dependencies using npm. The Environment 
I use is `Node 12.18` and `npm 6.14`.


To display the website, run `npm start`. Then visit `localhost:3000` as default. To run the 
scraper, simply run `node index.js`, and wait for 2 minutes until page reloading.


Work in Progress
---------------------------
一开始是打算在heroku上部署自动化爬虫的，发现网站政策不允许，太穷租不起服务器，暂时只能搁置。而且，
不甚了解爬虫涉及到的法律问题，于是不做高频爬取，本项目也仅仅限于学习交流目的，请设置爬虫的`option`以
延长爬取间隔，即`slowMo`，防止出现服务器宕机等其他影响。暂时打算每天不定期更新网站，可以关注网站下面的爬取日期


TODO
----------------
- 爬虫server
- 差异对比
- 推送