import DoughnutChart from "./DoughtChart";

const CardsHome = ({ color, title, image, total, subtotal }) => {
  const percentage = total > 0 ? ((subtotal / total) * 100).toFixed(0) : 0;
  return (
    <div
      className={`rounded-lg bg-gradient-to-l ${color} flex flex-col gap-3 px-3 py-5 `}
    >
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center w-7 h-7 rounded-full bg-[#ffffff83] ">
          {image}
        </div>
        <h3 className="text-lg">{title}</h3>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h5 className="text-xl font-bold"> {subtotal}</h5>
            <p className="text-[#e9ecf7] text-sm">de {total} usuarios</p>
          </div>
          <DoughnutChart percentage={percentage} />
        </div>
      </div>
    </div>
  );
};

export default CardsHome;
