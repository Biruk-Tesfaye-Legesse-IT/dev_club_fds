import React from 'react';
import theme from './theme/theme';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/system';
import store from '../Business Layer/store/store'
import RoutedPages from './config/routes';

import setup from '../Data Layer/services/interceptors/setupinterceptors';

const generalStore = store();

function App() {
    return (
        <>
        <ThemeProvider theme={theme}>
            <Provider store={generalStore}>
                <RoutedPages/>
            </Provider>
        </ThemeProvider>
        </>
        
    );
}

setup(generalStore);

export default App;