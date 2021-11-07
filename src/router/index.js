import { lazy, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./config";
import { isloggedIn } from "../helpers";
import Layout from "../layout";
import Loader from "../components/loader";
import MovieProfile from "../pages/movieProfile";

const Home = lazy(() => import("../pages/home"));
const Categories = lazy(() => import("../pages/categories"));
const MovieCategories = lazy(() =>
  import("../pages/categories/movieCategories")
);
const Login = lazy(() => import("../pages/auth/login"));
const Search = lazy(() => import("../components/search"));
const UserProfile = lazy(() => import("../pages/userProfile"));
const Error = lazy(() => import("../pages/error"));
const isLogged = isloggedIn();

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute isLogin={isLogged} path="/login" restricted={true} exact>
            <Login />
          </PublicRoute>
          <Layout>
            <PublicRoute isLogin={isLogged} path="/" exact>
              <Home />
            </PublicRoute>
            <PublicRoute isLogin={isLogged} path="/categories" exact>
              <Categories />
            </PublicRoute>
            <PublicRoute isLogin={isLogged} path="/categories/:name/:id" exact>
              <MovieCategories />
            </PublicRoute>
            <PublicRoute isLogin={isLogged} path="/movie-profile/:id" exact>
              <MovieProfile />
            </PublicRoute>
            <PrivateRoute isLogin={isLogged} path="/user-profile" exact>
              <UserProfile />
            </PrivateRoute>
          </Layout>
          <PublicRoute isLogin={isLogged} path="/search" exact>
            <Search />
          </PublicRoute>
          <PublicRoute isLogin={isLogged} path="/error" exact>
            <Error />
          </PublicRoute>
          <PublicRoute isLogin={isLogged}>
            <Error />
          </PublicRoute>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRouter;
