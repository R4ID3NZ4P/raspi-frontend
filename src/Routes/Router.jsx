import { Routes, Route } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Root/>}>
                <Route index element={<Home/>}></Route>
            </Route>
        </Routes>
    );
};

export default Router;