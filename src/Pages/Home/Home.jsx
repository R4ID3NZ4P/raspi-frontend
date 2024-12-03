import { useEffect, useState } from "react";
import Row from "./__row";
import classNames from "classnames";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Home = () => {
    const [data, setData] = useState([]);
    const [buzzer, setBuzzer] = useState(false);
    const [fan, setFan] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => setData(res.slice(0, 25)));
    }, []);

    return (
        <div className="flex flex-col items-center w-full">
            {/* data display */}
            <div className="flex md:flex-col justify-center items-end my-8 w-full">
                <div className="flex justify-center items-center w-full">
                    <div>
                        {/* line chart */}
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="title" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="id"
                                stroke="#8884d8"
                            />
                        </LineChart>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="stats bg-amber-500 text-primary-content">
                            <div className="stat">
                                <div
                                    className={classNames(
                                        "stat-title text-black"
                                    )}
                                >
                                    Buzzer Status
                                </div>
                                <div
                                    className={classNames(
                                        "stat-value text-center",
                                        buzzer
                                            ? "text-red-600"
                                            : "text-green-500"
                                    )}
                                >
                                    {buzzer ? "On" : "Off"}
                                </div>
                            </div>

                            <div className="stat">
                                <div className="stat-title text-black">
                                    Fan Status
                                </div>
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
                        <div className="border-0">
                            <button
                                className={classNames(
                                    "btn btn-sm btn-error mt-2",
                                    fan && buzzer ? "" : "btn-disabled"
                                )}
                            >
                                Disable
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* table */}
            <div className="overflow-x-auto border border-cyan-900 rounded-lg my-5 w-full">
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
