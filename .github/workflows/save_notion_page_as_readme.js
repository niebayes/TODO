const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require('fs');

const NOTION_API_KEY = 'secret_DgYm1Y6FKbGmyP2q7pPcs0ivFunyBbjJFbusrYXrXuG'
const pageId = '1266ebf5241c4390ba4e66aa6f995ed1'
const filePath = `README.md`;

async function main() {
    try {
        const notion = new Client({
            auth: NOTION_API_KEY,
        });

        // passing notion client to the option
        const n2m = new NotionToMarkdown({ notionClient: notion });

        const mdblocks = await n2m.pageToMarkdown(pageId);
        const mdString = n2m.toMarkdownString(mdblocks);
        fs.writeFileSync(filePath, mdString.parent);

    } catch (error) {
        console.error(error);
    }
}

console.log("fetching page...");
main();
