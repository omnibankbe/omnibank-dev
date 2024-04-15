import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import ArticleDetailPage from "./pages/ArticleDetailPage/ArticleDetailPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import AccountPage from "./pages/AccountPage/AccountPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage.jsx";
import AdminPage from "./pages/AdminPage/AdminPage.jsx";
import ContactAdminPage from "./pages/ContactAdminPage/ContactAdminPage.jsx";
import TicketDetailPage from "./pages/TicketDetailPage/TicketDetailPage.jsx";
function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            [REDACTED]
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
