import {configureStore} from '@reduxjs/toolkit'
import dashboardReducer from "./components/Dashboard/DashboardSlice"
export const store= configureStore({
    reducer:{
        dashboard:dashboardReducer
    }
})