import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./app/store.jsx";
import {Provider} from 'react-redux'
import './i18n.js';
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 300, sm: 600, md: 960, lg: 1280, xl: 1920,
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(<ThemeProvider theme={theme}>
    <Provider store={store}>
        <App/>
    </Provider>
</ThemeProvider>)
