import { useEffect, useState } from "react";
import Row from "./__row";
import classNames from "classnames";

const Home = () => {
    const [data, setData] = useState([]);
    const [buzzer, setBuzzer] = useState(false);
    const [fan, setFan] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    return (
        <div>
            {/* data display */}
            <div className="flex justify-end">
                <div className="stats bg-amber-500 text-primary-content">
                    <div className="stat">
                        <div className={classNames("stat-title text-black")}>
                            Buzzer Status
                        </div>
                        <div
                            className={classNames(
                                "stat-value text-center",
                                buzzer ? "text-red-600" : "text-green-500"
                            )}
                        >
                            {buzzer ? "On" : "Off"}
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-black">Fan Status</div>
                        <div
                            className={classNames(
                                "stat-value text-center",
                                fan ? "text-red-600" : "text-green-500"
                            )}
                        >
                            {fan ? "On" : "Off"}
                        </div>
                    </div>
                </div>
                    <div className="self-end border-0">
                        <button
                            className={classNames(
                                "btn btn-sm btn-error",
                                fan && buzzer ? "" : "btn-disabled"
                            )}
                        >
                            Disable
                        </button>
                    </div>
            </div>

            {/* table */}
            <div className="overflow-x-auto border border-[#39FF14] rounded-md">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Timestamp</th>
                            <th>Sensor Reading (ppm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {data.map((val, idx) => (
                            <Row data={val} key={idx} idx={idx} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
