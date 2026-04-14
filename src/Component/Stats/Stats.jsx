import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { TimelineContext } from "../Context/TimelineContext";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

 
  const callCount = timeline.filter((t) => t.actionType === "call").length;
  const textCount = timeline.filter((t) => t.actionType === "text").length;
  const videoCount = timeline.filter((t) => t.actionType === "video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Text", value: textCount, fill: "#7E35E1" },
    { name: "Video", value: videoCount, fill: "#37A163" },
  ];

  return (
    <div className="max-w-10/12 mx-auto mt-10">
      <h1 className="font-bold text-2xl mb-6">Friendship Analytics</h1>

      <div className="flex justify-center items-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
