const fs = require('fs');
const path = require('path');

const testDirectory = './tests/endpoints';
const genDirectory = "./tests/generator"
const outputDirectory = './docs/examples';
const templatePath = './scripts/exampletemplate.html'; // Path to your HTML template

async function findTestFiles(dir, fileList = []) {
    // Look through all files within a base directory and see if they are test files
    try {
        const files = await fs.readdir(dir, { withFileTypes: true });
        for (let file of files) {
            const res = path.resolve(dir, file.name);
            if (file.isDirectory()) {
                await findTestFiles(res, fileList); 
            } else if (file.name.endsWith('.test.js')) {
                fileList.push(res); 
            }
        }
    } catch (err) {
        console.error('Error reading directory:', err);
    }
    return fileList;
}


// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
}
async function getFiles() {
    let all_files = []
    await fs.readdir(genDirectory, (err, files) => {
        console.log("files", files)
        if (err) throw err
        all_files.push(files)
    })
    // Read all files from the test directory
    await fs.readdir(testDirectory, (err, files) => {
        if (err) throw err;
        all_files.push(files)
    });
    console.log({ all_files })
    return all_files
}
// Read the HTML template
fs.readFile(templatePath, 'utf8', async (err, template) => {
    if (err) throw err;
    let all_files = await getFiles()
    all_files.forEach(file => {
        const filePath = path.join(testDirectory, file);
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) throw err;
            // Pull the content of the jest test block via regex
            const extractBlock = content.match(/test\(.*?\)\s*=>\s*{([\s\S]*?)},\s*\d+\s*\)/);
            // Ensure there was anything returned / i.e. this was a jest test file
            if (extractBlock && extractBlock[1]) {
                // Strip out the bits we do not need from the file
                let block = extractBlock[1]
                    .replace(/^\s*import fetch.*\n?/gm, '')
                    .replace(/^\s*global\.fetch.*\n?/gm, '')
                    .replaceAll(/expect\((.*?)\)\.toBeDefined\(\)/g, 'console.log($1)') // Convert expects to logs
                    .trim();

                // Adjust indentation (simple left trim here, more sophisticated methods might be needed)
                block = block.split('\n').map(line => line.replace(/^ {4}/, '')).join('\n');

                const docName = file.replace('.test.js', '');

                // Replace placeholder in template
                const filledTemplate = template.replaceAll('${docName}', docName)
                    .replaceAll('${pageBody}', `<pre><code class="language-javascript">${escapeHtml(block)}</code></pre>`);

                // Write to file
                const outputFilePath = path.join(outputDirectory, `${docName}.html`);
                fs.writeFile(outputFilePath, filledTemplate, err => {
                    if (err) throw err;
                    console.log(`Example file created: ${outputFilePath}`);
                });
            }
        });
    });
    const exampleLinks = '<ul>' + all_files.map(file => {
        const docName = file.replace('.test.js', '');
        return `<li><a href="/docs/examples/${docName}.html">${docName}</a></li>`
    }).join('') + "</ul>"

    // Write the index file for all
    const indexOutputPath = path.join(outputDirectory, `index.html`);
    const filledTemplate = template
        // .replaceAll("Examples", "")
        .replaceAll("Example:", "")
        // .replaceAll(":", "")
        .replaceAll('${docName}', 'Home')
        .replaceAll("    ", "")
        .replaceAll('${pageBody}', `
            ${exampleLinks
            }
        `)
    fs.writeFile(indexOutputPath, filledTemplate, err => {
        if (err) throw err;
        console.log(`Example file created: ${indexOutputPath}`);
    });

    // Update the modules file and index file to have links to the examples
    const indexPath = './docs/index.html';
    const modulesPath = "./docs/modules.html"
    fs.readFile(modulesPath, 'utf8', (err, content) => {
        if (err) throw err;
        if (content.indexOf("Examples") >= 0) return
        const updatedContent = content.replace("</h3>",
            `</h3>
             <h3 class="tsd-index-heading">Examples</h3>
             ${exampleLinks}
            `
        );
        fs.writeFile(modulesPath, updatedContent, err => {
            if (err) throw err;
            console.log(`Updated modules file: ${modulesPath}`);
        });
    });
    fs.readFile(indexPath, 'utf8', (err, content) => {
        if (err) throw err;
        if (content.indexOf("Examples") >= 0) return
        const updatedContent = content.replace("</h2>",
            `</h2>
             <p>Examples</p>
             ${exampleLinks}
            `
        );
        fs.writeFile(indexPath, updatedContent, err => {
            if (err) throw err;
            console.log(`Updated modules file: ${indexPath}`);
        });
    });
});



function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
