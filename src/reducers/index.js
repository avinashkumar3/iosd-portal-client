import {combineReducers} from 'redux' ;

import authReducer from './authReducer' ;
import blogReducer from './blogReducer' ;
import libraryReducer from './libraryReducer' ;
import eventReducer from './eventReducer' ;
import mentorReducer from './mentorReducer';
import projectReducer from './projectReducer';
import profileReducer from './profileReducer';
import coursesReducer from './courseReducer' ;
import progressReducer from './progessReducer' ;

const rootReducer = combineReducers({
    auth : authReducer,
    blog : blogReducer,
    library : libraryReducer,
    events : eventReducer ,
    mentors : mentorReducer,
    projects : projectReducer,
    profile : profileReducer,
    courses : coursesReducer ,
    progress : progressReducer
});

export default rootReducer ;
