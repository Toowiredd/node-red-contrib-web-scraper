module.exports = function(RED) {
    const axios = require('axios');
    const cheerio = require('cheerio');

    function WebScraperNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.on('input', async function(msg) {
            const url = msg.payload.url || config.url;
            const selector = msg.payload.selector || config.selector;

            if (!url) {
                node.error("No URL provided");
                return;
            }

            try {
                const response = await axios.get(url);
                const $ = cheerio.load(response.data);
                
                let scrapedData;
                if (selector) {
                    scrapedData = .map((i, el) => .text()).get();
                } else {
                    scrapedData = body.text();
                }

                msg.payload = {
                    url: url,
                    scrapedData: scrapedData
                };

                node.send(msg);
            } catch (error) {
                node.error("Error scraping website: " + error.message);
            }
        });
    }

    RED.nodes.registerType("web-scraper", WebScraperNode);
}
