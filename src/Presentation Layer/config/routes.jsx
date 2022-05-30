import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';


import Account from '../pages/account/Account';

import NotFound from '../pages/404/404';

import LoginPage from '../pages/auth/login';

import Event from '../pages/event/Event';
import AddNewEvent from '../pages/event/AddNewEvent';
import EditEvent from '../pages/event/EditEvent';
import EventDetails from '../pages/event/EventDetails';

import Scout from '../pages/scouts/Scout';
import HireNewScout from '../pages/scouts/HireNewScout';
import EditScout from '../pages/scouts/EditScout';
import ScoutDetails from '../pages/scouts/ScoutDetails';

import Skill from '../pages/skills/Skill';
import CreateNewSkill from '../pages/skills/CreateNewSkill';
import EditSkill from '../pages/skills/EditSkill';

import Applications from '../pages/applications/Applications';
import Applicants from '../pages/applicants/Applicants';
import Candidates from '../pages/candidates/Candidates';
import Accepteds from '../pages/accepteds/Accepteds';

import Parameters from '../pages/parameters/parameters';

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

                    {/* Application Routes */}
                    <Route exact path="/applicationEvents" element={<  Applications />} />               
                    <Route exact path="/applicants/:id" element={< Applicants />} />
                    <Route exact path="/candidates/:id" element={< Candidates />} />
                    <Route exact path="/accepteds/:id" element={< Accepteds />} />

                    {/* Skill Routes */}
                    <Route exact path="/skills" element={<  Skill />} />               
                    <Route exact path="/addSkill" element={< CreateNewSkill />} />
                    <Route exact path="/editSkill/:id" element={< EditSkill />} />
                    {/* <Route exact path="/scoutDetails/:id" element={< ScoutDetails />} /> */}


                    {/* Account Routes */}
                    <Route exact path="/account" element={< Account />} />

                    {/* Parameters Routes */}
                    <Route exact path="/parameters" element={< Parameters />} />
                
                </Route>

                
                <Route path="*" element={< NotFound />} />
                {/* <Route path="*" element={<Navigate to ="/404" />}/> */}
            </Routes>
        </Router>
    );
}



export default RoutedPages;
  


