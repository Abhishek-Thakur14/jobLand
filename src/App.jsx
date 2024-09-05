 import React from 'react'
 import "./App.css";
 import { ThemeProvider } from "@/components/theme-provider"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import JobListing from './pages/job-listing'
import ProtectedRoute from "./components/protected-route";

import JobPage from './pages/job'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'
import PostJob from './pages/post-job';
 
 const router= createBrowserRouter([
  {
    element:<AppLayout/>,// this all i have to setup all of our routes
    children:[
      {
      path:'/',
element:<LandingPage/>
      },
     
      {
        path:'/onboarding',
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path:'/jobs',
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path:'/job/:id',
        element:(
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
      {
        path:'/post-job',
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      }, 
      {
        path:'/saved-jobs',
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      }, 
        {
        path:'/my-jobs',
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
    ]
  }
 ])
 function App  ()  {
   return (
    
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         <RouterProvider router={router}/>
    </ThemeProvider>
   )
 }
 
 export default App 