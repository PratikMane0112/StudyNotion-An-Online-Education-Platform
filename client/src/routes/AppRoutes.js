import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import CourseDetails from "../pages/CourseDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Rateus from "../pages/Rateus";
import PrivacyPolicy from "../pages/privacypolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import Error from "../pages/Error";
import OpenRoute from "../components/core/Auth/OpenRoute";
import Login from "../pages/Login"; 
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import UpdatePassword from "../pages/UpdatePassword";
import VerifyEmail from "../pages/VerifyEmail";   
import PrivateRoute from "../components/core/Auth/PrivateRoute";
import Dashboard from "../pages/Dashboard";
import MyProfile from "../components/core/Dashboard/MyProfile";
import Settings from "../components/core/Dashboard/Settings";
import EnrolledCourses from "../components/core/Dashboard/EnrolledCourses";
import Cart from "../components/core/Dashboard/Cart";    
import AddCourse from "../components/core/Dashboard/AddCourse";
import MyCourses from "../components/core/Dashboard/MyCourses";
import EditCourse from "../components/core/Dashboard/EditCourse";
import Instructor from "../components/core/Dashboard/InstructorDashboard/Instructor";
import ViewCourse from "../pages/ViewCourse";
import VideoDetails from "../components/core/ViewCourse/VideoDetails";
import { ACCOUNT_TYPE } from "../utils/constants";

// Create a routes array that can be used directly with Routes component
const getAppRoutes = (user) => [
  // Main Routes
  { path: "/", element: <Home /> },
  { path: "catalog/:catalogName", element: <Catalog /> },
  { path: "courses/:courseId", element: <CourseDetails /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },               
  { path: "/project", element: <Project /> },
  { path: "/rateus", element: <Rateus /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },  
  { path: "/termsandconditions", element: <TermsAndConditions /> },
        
  // Auth Routes
  { 
    path: "signup",
    element: <OpenRoute><Signup /></OpenRoute>          
  },
  { 
    path: "login",
    element: <OpenRoute><Login /></OpenRoute>
  },
  { 
    path: "forgot-password",
    element: <OpenRoute><ForgotPassword /></OpenRoute>
  },
  { 
    path: "verify-email",
    element: <OpenRoute><VerifyEmail /></OpenRoute>
  },
  { 
    path: "update-password/:id",
    element: <OpenRoute><UpdatePassword /></OpenRoute>
  },

  // Dashboard Routes
  {
    path: "",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      { path: "dashboard/my-profile", element: <MyProfile /> },
      { path: "dashboard/settings", element: <Settings /> },
      ...(user?.accountType === ACCOUNT_TYPE.STUDENT ? [
        { path: "dashboard/cart", element: <Cart /> },
        { path: "dashboard/enrolled-courses", element: <EnrolledCourses /> },
      ] : []),
      ...(user?.accountType === ACCOUNT_TYPE.INSTRUCTOR ? [
        { path: "dashboard/instructor", element: <Instructor /> },
        { path: "dashboard/add-course", element: <AddCourse /> },
        { path: "dashboard/my-courses", element: <MyCourses /> },
        { path: "dashboard/edit-course/:courseId", element: <EditCourse /> },
      ] : []),
    ]
  },

  // Course Routes
  {
    path: "",
    element: <PrivateRoute><ViewCourse /></PrivateRoute>,
    children: [
      ...(user?.accountType === ACCOUNT_TYPE.STUDENT ? [
        { 
          path: "view-course/:courseId/section/:sectionId/sub-section/:subSectionId",
          element: <VideoDetails />
        },
      ] : []),
    ]
  },

  // 404 Error route
  { path: "*", element: <Error /> },
];

export default getAppRoutes;
