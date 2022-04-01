import React from 'react';
import { BrowserRouter as Router,Routes, Route, Redirect } from 'react-router-dom';
import Account from './pages/Account';
import Event from './pages/Event';
import theme from './theme/theme';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/system';
import store from '../Business Layer/store/store'

const generalStore = store();

function App() {
    return (
        <>
        <ThemeProvider theme={theme}>
            <Provider store={generalStore}>
                <Router>
                    <Routes>
                        <Route exact path="/" element={< Event />} />
                        <Route exact path="/account" element={< Account />} />
                        {/* <Route exact path="/settings" element={< Settings />} /> */}
                        {/* <Route exact path="/tables" element={< Tables />} /> */}
                        {/* <Redirect from="*" to="/" /> */}    
                    </Routes>
                </Router>
            </Provider>
        </ThemeProvider>
        </>
        
    );
}

export default App;