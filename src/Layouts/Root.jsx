import { Outlet } from "react-router";

const Root = () => {
    return (
        <div className="mx-8 md:mx-16 lg:mx-32">
            <Outlet/>
        </div>
    );
};

export default Root;