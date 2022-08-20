// This App component is the top-level component which will be common across all the different pages.
// use this App component to keep state when navigating between pages.

import '../styles/global.css';
const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />

}
export default App;