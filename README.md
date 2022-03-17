[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fqh96%2Ftacocat)](https://hits.seeyoufarm.com)
---

This is a platform supporting the latest free software engineer job information for the new graduates.
The keywords include software grad, entry Software, Software university, Software graduate, Software college and junior developer,
will be used for LinkedIn job search.

Supported by automatic hard-working website scrapers targeting on LinkedIn & Indeed.
See [Indeed-web-crawler](https://github.com/qh96/indeed-job-crawler/tree/develop) and [LinkedIn scraper](https://www.npmjs.com/package/linkedin-jobs-scraper) for more details.

## Demo

**[Try it here](https://eattacocat.herokuapp.com/)**

Note that the column can be `sortable`. Nimbly to use `search` for better filtering.

## Usage

To configure your system for development, first install Node.js, npm and make, and
then run `npm install`. This will install some dependencies using npm. The Environment
I use is `Node 12.18` and `npm 6.14`.

To display the website, run `make display`. Then visit `localhost:3000` as default. To run the
scraper, simply run `make run`, and wait for 60 seconds until page reloading.
