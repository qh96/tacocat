const puppeteer = require("puppeteer");
const EventEmitter = require("events");
const fs = require("fs");

const states = {
  NOT_INITIALIZED: "notInitialized",
  INITIALIZING: "initializing",
  INITIALIZED: "initialized"
};

const customEvents = {
  data: "customEventData",
  end: "end"
};

const wait = ms =>
  new Promise(resolve => setTimeout(resolve.bind(null, ms), ms));

const urls = [
  "https://www.indeed.com/jobs?q=software+grad&l=United+States&jt=fulltime&explvl=entry_level",
  "https://www.indeed.com/jobs?q=software+college&l=United+States&jt=fulltime&explvl=entry_level",
  "https://www.indeed.com/jobs?q=software+university&l=United+States&jt=fulltime&explvl=entry_level",
  "https://www.indeed.com/jobs?q=software+graduate&l=United+States&jt=fulltime&explvl=entry_level",
  "https://www.indeed.com/jobs?q=entry+software&l=United+States&jt=fulltime&explvl=entry_level",
  "https://www.indeed.com/jobs?q=junior+developer&l=United+States&jt=fulltime&explvl=entry_level"
];

const titleSelector = "h2.title";
const companySelector = "span.company";
const locationSelector = ".location";
const dateSelector = "span.date";

const paginationMax = 2;

/**
 * Main Class
 * @extends EventEmitter
 * @constructor
 */
class Crawler extends EventEmitter {
  constructor(options) {
    super();
    this._options = options;
    this._browser = undefined;
    this._state = states.NOT_INITIALIZED;
  }

  /**
   * Init browser
   * @returns {Promise<void>}
   * @private
   */
  _init = async () => {
    this._state = states.INITIALIZING;
    this._browser && this._browser.removeAllListeners();
    const options = Object.assign(
      {},
      {
        headless: true,
        args: [
          "--lang=en-GB",
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-gpu",
          "--disable-dev-shm-usage"
        ],
        defaultViewport: null,
        pipe: true,
        slowMo: 100
      },
      this._options
    );
    this._browser = await puppeteer.launch(options);

    this._state = states.INITIALIZED;
  };

  /**
   * Run crawler
   * @private
   */
  _run = async () => {
    const page = await this._browser.newPage();

    for (const url of urls) {
      await page.goto(url);

      let paginationIndex = 0;
      let jobIndex = 0;
      for (
        paginationIndex;
        paginationIndex < paginationMax;
        paginationIndex++
      ) {
        const jobCount = await page.evaluate(
          companySelector => document.querySelectorAll(companySelector).length,
          companySelector
        );

        const nextPageUrl = await page.evaluate(
          _ => document.querySelector(`a[aria-label='Next']`).href
        );
        await page.goto(nextPageUrl);

        let title,
          link,
          company,
          place,
          type = "Full-Time",
          level = "Entry Level",
          date;
        for (jobIndex; jobIndex < jobCount; jobIndex++) {
          [company, place, date, title, link] = await page.evaluate(
            (
              companySelector,
              locationSelector,
              dateSelector,
              titleSelector,
              jobIndex
            ) => {
              const cpny = document.querySelectorAll(companySelector)[jobIndex];
              const loca = document.querySelectorAll(locationSelector)[
                jobIndex
              ];
              const dt = document.querySelectorAll(dateSelector)[jobIndex];
              const tt = document.querySelectorAll(titleSelector)[jobIndex];
              const nxt = document.querySelectorAll("a.jobtitle")[jobIndex];
              return [
                cpny ? cpny.innerText : "Not Applied",
                loca ? loca.innerText : "Not Applied",
                dt ? dt.innerText : "Not Applied",
                tt ? tt.innerText : "Not Applied",
                nxt ? nxt.href : "Not Applied"
              ];
            },
            companySelector,
            locationSelector,
            dateSelector,
            titleSelector,
            jobIndex
          );

          this.emit(customEvents.data, {
            link: link,
            title: title,
            company: company,
            place: place,
            date: date,
            senorityLevel: level,
            employmentType: type,
            industries: "Not Applied"
          });
        }
      }
    }
    await page.close();
    this.emit(customEvents.end);
  };

  run = async () => {
    try {
      if (this._state === states.NOT_INITIALIZED) {
        await this._init();
      } else if (this._state == states.INITIALIZING) {
        const timeout = 10000;
        const waitTime = 10;
        let elapsed = 0;

        while (_state !== states.initialized) {
          await wait(waitTime);
          elapsed += waitTime;

          if (elapsed >= timeout) {
            throw new Error(`Initialize timeout exceeded: ${timeout}ms`);
          }
        }
      }
      await this._run();
    } catch (err) {
      //TODO
      console.log(err.message);
    }
  };

  close = async () => {
    this._browser &&
      this._browser.removeAllListeners() &&
      (await this._browser.close());
    this._browser = undefined;
    this._state = states.NOT_INITIALIZED;
  };
}

(async () => {
  let crawler = new Crawler({});
  let res = {
    table: []
  };
  crawler.on(
    customEvents.data,
    ({
      link,
      title,
      company,
      place,
      senorityLevel,
      date,
      employmentType,
      industries
    }) => {
      res.table.push({
        title: title,
        company: company,
        place: place,
        date: date,
        link: link,
        senorityLevel: senorityLevel,
        employmentType: employmentType,
        industries: industries
      });
    }
  );

  crawler.on(customEvents.end, () => {
    console.log("All done!");
    let time = '{"time" : ' + '"' + new Date().toLocaleString() + '",';
    fs.writeFile(
      "src/indeed_output.json",
      time + '"data" : ' + JSON.stringify(res.table) + "}",
      "utf8",
      () => {}
    );
  });

  await Promise.all([crawler.run()]);

  await crawler.close();
})();
