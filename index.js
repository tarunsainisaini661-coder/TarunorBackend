require('dotenv').config()

const express = require('express');

const app = express();

const port = 4000;

const githubData = {
    "login": "tarunsaini",
    "id": 3828644,
    "node_id": "MDQ6VXNlcjM4Mjg2NDQ=",
    "avatar_url": "https://avatars.githubusercontent.com/u/3828644?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tarunsaini",
    "html_url": "https://github.com/tarunsaini",
    "followers_url": "https://api.github.com/users/tarunsaini/followers",
    "following_url": "https://api.github.com/users/tarunsaini/following{/other_user}",
    "gists_url": "https://api.github.com/users/tarunsaini/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tarunsaini/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tarunsaini/subscriptions",
    "organizations_url": "https://api.github.com/users/tarunsaini/orgs",
    "repos_url": "https://api.github.com/users/tarunsaini/repos",
    "events_url": "https://api.github.com/users/tarunsaini/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tarunsaini/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2013-03-11T05:32:55Z",
    "updated_at": "2025-02-03T06:39:01Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/twitter', (req, res) => {
    res.send('https://x.com/saini_tarun2032')
})


app.get('/login', (req, res) => {
    res.send('<h1>please login at chai or code</h1>')
})


app.get('/youtube', (req, res) => {
    res.send("<h1>Chai or code</h1>")
})


app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${port}`);

})

