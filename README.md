# About Project

A sample finvault UI design convertion to react app, for PoC.. [Click here](https://osueke-christian.github.io/finvault-test) to view deployed site, or manually visit https://osueke-christian.github.io/finvault-test


## Steps to lunch and test the app locally

- Clone repository
- Run `npm install` to install project dependencies
- Run `npm start` to launch project (most likely on `http://localhost:3000`)
- Visit `http://localhost:3000` to preview app.
- To deploy to your personal github page, change the `homepage` paramter in package.json to match your repository settings.

*Note:*
> Your repository name should be `finvault-test` for this to work seamlessly.. else update the routing to match your repository name
- Run `npm run deploy`
- Visit your github page to preview (https://{username}.github.io/{repo-name})


## Suggestions for Further Improvements

- Mock table data using state objects instead of hard coding html
- Use storybook for a more isolated component development and better component documentation
- Write scripts for react component testing
- Configure CI/CD with github actions, Circle CI, or other variants
