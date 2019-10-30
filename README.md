# Coveo Front End Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Mini Documentation

This project is written in React (using Hooks), TypeScript, and Redux.
To run this project, you will first need to create a .env file with the line
`REACT_APP_TOKEN='YOUR COVEO API TOKEN HERE'`.

The src code is organized as follows:

| Folder/File | Purpose                                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Assets      | Contains SVG assets.                                                                                                                                                                                                                  |
| Components  | Contains all React function components. Typically I separate components between route and reusabe components, but since this app has only one route, I decided to place them all under here. See the Component tree below for layout. |
| Helpers     | Contains helper files with functions such as API fetching or query helper functions.                                                                                                                                                  |
| Models      | Defines certain interfaces used throughout the application.                                                                                                                                                                           |
| Store       | Contains folders for reducers, actions, and types, along with an index.ts file to combine all reducers.                                                                                                                               |
| tests       | Contains all tests. Decided to put them here for easy viewing, rather than alongside their functional counterparts.                                                                                                                   |
| App.tsx     | Renders Header, SearchMain, and HistoryState components under a Router component.                                                                                                                                                     |
| index.tsx   | Renders App under the Redux Provider component.                                                                                                                                                                                       |

Component tree:

<pre>
Components
|   
+---Header >> Contains SAQ title, Filterbar button, and Searchbar
|   |   index.css
|   |   index.tsx
|   |   
|   \---Searchbar >> Allows searching for a basic query. Updates 'query' and 'firstResult' (page) state on search
|           index.css
|           index.tsx
|           
+---HistoryState >> Allows syncing of URL to Redux state and vice versa. Returns null.
|       index.tsx
|       
+---Loading >> A simple Loading circle component with a prop 'fullScreen' to display over all components or not.
|       index.css
|       index.tsx
|       
\---SearchMain >> The component that calls the API and populates Filterbar, Pagination, and SearchResults with data
    |   index.css
    |   index.tsx
    |   
    +---Filterbar >> Loops through all the filter facets and passes data to child 'FilterGroup' components
    |   |   index.css
    |   |   index.tsx
    |   |   
    |   \---FilterGroup >> Displays each filter facet with the lookup values and number of results, with checkboxes
    |           index.css
    |           index.tsx
    |           
    +---Pagination >> Uses data passed from SearchMain to determine how many pages to display.
    |       index.css
    |       index.tsx
    |       
    \---SearchResults >> Loops through all results and feeds the data to child ResultItem components
        |   index.css
        |   index.tsx
        |   
        \---ResultItem >> Displays a single result item with title, image, price, country, and category
                index.css
                index.tsx
</pre>

## The challenge

The SAQ is the government-run liquor store monopoly that we have in Quebec, we indexed the different wines and beers there and made it available through our REST Search API. Don’t be surprised if the prices are high!

The challenge, if you accept it, is about building a search interface based on the Coveo REST API.

See [the documentation section](#documentation)

You can access this api through https://cloudplatform.coveo.com/rest/search with the token we will provide you. This token grants you access to a Coveo index containing different types of alcohols which are sold in [SAQ](saq.com).

## Examples

### Searching Amber Ales

    https://cloudplatform.coveo.com/rest/search?access_token=YOUR_TOKEN&q=Bi%C3%A8re%20rousse

### Searching beers under 10\$

    https://cloudplatform.coveo.com/rest/search?access_token=YOUR_TOKEN&q=@tpprixnum%3C10

### Searching Merlot

    https://cloudplatform.coveo.com/rest/search?access_token=YOUR_TOKEN&q=@tpcepagenomsplitgroup==Merlot

## Documentation

- [Query syntax documentation](http://onlinehelp.coveo.com/en/ces/7.0/User/coveo_query_syntax_reference.htm)
- [REST API documentation](https://developers.coveo.com/display/public/SearchREST/Invoking+the+REST+Search+API)
- [REST parameter documentation](https://developers.coveo.com/display/SearchREST/Query+Parameters)
- [Response format documentation](https://developers.coveo.com/display/SearchREST/Query+Results)

## Inspiration

Need inspiration? you can see some examples of our sites and implementations here:

- http://saq.coveodemo.com
- https://help.salesforce.com

But, don't copy the code, we will know :)

## Advice

- **Try to design and implement your solution as you would do for real production code**. Show us how you create clean, maintainable code that does awesome stuff. Build something that we'd be happy to contribute to. This is not a programming contest where dirty hacks win the game.
- Feel free to add more features! Really, we're curious about what you can think of. We'd expect the same if you worked with us.
- Documentation and maintainability is a plus.
- Don't you forget those unit tests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
