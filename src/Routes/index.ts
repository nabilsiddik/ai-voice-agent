import {createBrowserRouter } from "react-router-dom";
import App from './../App';
import DiscussionRoom from "@/pages/DiscussionRoom";
import Dashboard from "@/pages/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Dashboard,
            },
            {
                path: '/discussion-room/:id',
                Component: DiscussionRoom
            }
        ]
    }
])

export default router