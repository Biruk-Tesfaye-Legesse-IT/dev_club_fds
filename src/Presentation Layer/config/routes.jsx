import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';


import Account from '../pages/Account';

import NotFound from '../pages/404';

import LoginPage from '../pages/auth/login';

import Event from '../pages/event/Event';
import AddNewEvent from '../pages/event/AddNewEvent';
import EditEvent from '../pages/event/EditEvent';
import EventDetails from '../pages/event/EventDetails';

import Scout from '../pages/scouts/Scout';
import HireNewScout from '../pages/scouts/HireNewScout';
import EditScout from '../pages/scouts/EditScout';
import ScoutDetails from '../pages/scouts/ScoutDetails';

import PrivateRoute from './routeGuard';


function RoutedPages() {
    
    return (  
        <Router>
               
            <Routes>
                
                <Route exact path='/login' element={<LoginPage/>}/>

                <Route exact path='/' element={<PrivateRoute/>}>

                  {/* Event Routes */}
                  <Route exact path="/" element={< Event />} />               
                  <Route exact path="/addEvent" element={< AddNewEvent />} />
                  <Route exact path="/editEvent/:id" element={< EditEvent />} />
                  <Route exact path="/eventDetails/:id" element={< EventDetails />} />


                  {/* Scout Routes */}
                  <Route exact path="/scouts" element={<  Scout />} />               
                  <Route exact path="/addScout" element={< HireNewScout />} />
                  <Route exact path="/editScout/:id" element={< EditScout />} />
                  <Route exact path="/scoutDetails/:id" element={< ScoutDetails />} />


                  {/* Account Routes */}
                  <Route exact path="/account" element={< Account />} />

                
                </Route>

                
                <Route path="*" element={< NotFound />} />
                {/* <Route path="*" element={<Navigate to ="/404" />}/> */}
            </Routes>
        </Router>
    );
}



export default RoutedPages;
  


