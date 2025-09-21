import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import Navbar from "./pages/Navbar/Navbar";
import AcceptInvitation from "./pages/Project/AcceptInvitation";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Subscription from "./pages/Subscription/Subscription";
import UpgradeSuccess from "./pages/Subscription/UpgradeSuccess";
import { getUser } from "./Redux/Auth/Action";
import { fetchProjects } from "./Redux/Project/Action";


function App() {
  const dispatch=useDispatch();
  const {auth} = useSelector(store=>store)
  
  useEffect(() => {
    dispatch(getUser())
    dispatch(fetchProjects({}))
  }, [auth.jwt])

  console.log(auth)

  return (
    <>
      {
        auth.user ? <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails />} />
        <Route path="/upgrade_plan" element={<Subscription />} />
        <Route path="/upgrade_plan/success" element={<UpgradeSuccess />} />
        <Route path="/accept_invitation" element={<AcceptInvitation />} />
      </Routes>
      </div> : <Auth/>
      }
    </>
  );
}

export default App;
