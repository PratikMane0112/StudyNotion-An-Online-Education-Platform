import "./App.css";
import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import BackToTop from "./components/common/BackToTop";
import Loading from "./components/common/Loading";
import { useSelector } from "react-redux";
import getAppRoutes from "./routes/AppRoutes";

function App() {
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(true);
  
  // Get routes from our routes file
  const routes = getAppRoutes(user);
  const appRoutes = useRoutes(routes);                  

  useEffect(() => {
    // Simulate a loading time for demonstration
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex-1 w-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      {appRoutes}
      <BackToTop />
    </div>
  );
}

export default App;
