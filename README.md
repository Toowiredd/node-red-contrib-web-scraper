# Node-RED Web Scraper Node



This is a custom Node-RED node that provides web scraping functionality.

## Installation

Run the following command in your Node-RED user directory (typically ~/.node-red):
npm install node-red-contrib-web-scraper

## Usage

1. Drag the Web Scraper node onto your flow.
2. Double-click to configure it. You can set a default URL and CSS selector in the node's properties.
3. Connect an input node to provide the URL and selector (overriding the defaults if needed).
4. Connect the output to another node to process the scraped data.

## Input

The input message should have a payload object with the following properties:

- url: The URL to scrape
- selector (optional): A CSS selector to target specific elements

## Output

The output message will have a payload object with the following properties:

- url: The URL that was scraped
- scrapedData: An array of scraped text content

## Example

Here's a simple flow demonstrating how to use the Web Scraper node:

\\\json
[
    {
        "id": "inject",
        "type": "inject",
        "name": "Inject URL",
        "props": [{"p": "payload"}],
        "repeat": "",
        "crontab": "",
        "once": false,
        "payload": "{\"url\":\"https://example.com\",\"selector\":\"h1\"}",
        "payloadType": "json",
        "x": 130,
        "y": 80,
        "wires": [["web_scraper"]]
    },
    {
        "id": "web_scraper",
        "type": "web-scraper",
        "name": "Web Scraper",
        "url": "",
        "selector": "",
        "x": 340,
        "y": 80,
        "wires": [["debug"]]
    },
    {
        "id": "debug",
        "type": "debug",
        "name": "Debug",
        "active": true,
        "x": 550,
        "y": 80,
        "wires": []
    }
]
\\\

This flow injects a URL and CSS selector, passes it to the Web Scraper node, and then outputs the result to a debug node.

## License

MIT
