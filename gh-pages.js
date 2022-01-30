var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/kypi/DominionTracker.git', // Update to point to your repository  
        user: {
            name: 'Anthony Hernandez', // update to use your name
            email: 'AnthonyUTD@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)