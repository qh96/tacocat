const { LinkedinScraper, events, } = require("linkedin-jobs-scraper");

(async () => {
    // Programatically disable logger
    setTimeout(() => LinkedinScraper.disableLogger(), 5000);

    // Each scraper instance is associated with one browser.
    // Concurrent queries will be runned on different pages within the same browser instance.
    const scraper = new LinkedinScraper({
        headless: true,
        slowMo: 10,
    });

    var res = {
        table: []
    };

    // Listen for custom events
    scraper.on(events.custom.data, ({ 
        query,
        location,
        link,
        title,
        company,
        place,
        date,
        description,
        senorityLevel,
        jobFunction,
        employmentType,
        industries 
    }) => {
        res.table.push(
            {
                query : query, 
                location : location,
                title : title,
                company: company,
                place : place,
                date : date,
                // description: description,
                link : link,
                senorityLevel: senorityLevel,
                function: jobFunction,
                employmentType: employmentType,
                industries: industries
            }
        );
    });

    scraper.on(events.custom.error, (err) => { console.error(err); });
    scraper.on(events.custom.end, () => { 
        console.log('All done!'); 
        let fs = require('fs');
        let time = "{\"time\" \: " + "\"" + new Date().toLocaleString() + "\",";
        fs.writeFile('src/output.json', time + "\"data\" \: " + JSON.stringify(res.table) + "}", 'utf8', () => { });
    });

    // Listen for puppeteer specific browser events
    scraper.on(events.puppeteer.browser.targetcreated, () => { });
    scraper.on(events.puppeteer.browser.targetchanged, () => { });
    scraper.on(events.puppeteer.browser.targetdestroyed, () => { });
    scraper.on(events.puppeteer.browser.disconnected, () => { });

    // This will be executed on browser side
    const descriptionProcessor = () => document.querySelector(".description__text")
            .innerText
            .replace(/[\s\n\r]+/g, " ")
            .trim();

    // Run queries concurrently
    await Promise.all([
        scraper.run(
            "software graduate",
            "United States",
            {
                paginationMax: 2,
            }
        ),
        scraper.run(
            "software grad",
            "United States",
            {
                paginationMax: 2,
            }
        ),
        scraper.run(
            "software college",
            "United States",
            {
                paginationMax: 2,
            }
        ),
        scraper.run(
            "software university",
            "United States",
            {
                paginationMax: 2,
            }
        ),
        scraper.run(
            "entry software",
            "United States",
            {
                paginationMax: 2,
            }
        ),
        scraper.run(
            "junior developer",
            "United States",
            {
                paginationMax: 2,
            }
        ),
        // scraper.run(
        //     ["Developer", "Software Engineer"],
        //     ["San Francisco", "New York"],
        //     {
        //         paginationMax: 1,
        //         descriptionProcessor,
        //         optimize: true, // Block resources such as images, fonts etc to improve bandwidth usage
        //     }
        // )
    ]);

    // Close browser
    await scraper.close();
})();