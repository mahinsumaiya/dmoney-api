const newman = require('newman');
require('dotenv').config();
 
newman.run({

    
    collection:`https://api.postman.com/collections/38095946-5bedc08f-09c3-4cdf-9832-effb882f3b73?access_key=${process.env.secretkey}`,
    
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
