import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from '../Loading';
import ScrollToTop from "../ScrollToTop/index.jsx";

// Lazy load layouts
const DefaultLayout = lazy(() => import('../../layouts/DefaultLayouts'));
const AuthLayout = lazy(() => import('../../layouts/AuthLayout'));
const AdminLayout = lazy(() => import('../../layouts/AdminLayout'));

// Lazy load pages
const Home = lazy(() => import('../../pages/Home'));
const About = lazy(() => import('../../pages/About'));
const Posts = lazy(() => import('../../pages/Posts'));
const PostDetail = lazy(() => import('../../pages/PostDetail'));
const Contact = lazy(() => import('../../pages/Contact'));
const Privacy = lazy(() => import('../../pages/Privacy'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));
const Dashboard = lazy(() => import('../../pages/Dashboard'));
const Users = lazy(() => import('../../pages/Users'));
const Settings = lazy(() => import('../../pages/Settings'));
const NotFound = lazy(() => import('../../pages/NotFound'));

function AppRoutes() {
    return (
        <Suspense fallback={<Loading />}>
            <ScrollToTop />
            <Routes>
                {/* Default Layout Routes */}
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:postId" element={<PostDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="privacy" element={<Privacy />} />
                </Route>

                {/* Auth Layout Routes */}
                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                {/* Admin Layout Routes */}
                <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                {/* NotFound Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;