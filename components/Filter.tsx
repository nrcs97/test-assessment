import { Car } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Filter() {
  const [data, setData] = useState<Car[] | null>();
  const [filter, setFilter] = useState<{
    car: Car | null;
    year: number | null;
  }>({
    car: null,
    year: null,
  });

  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
          {
            method: "GET",
          }
        ).then((res) => res.json());

        setData(response.Results);
      } catch (err) {
        setData(null);
      }
    }

    getData();
  }, []);

  function handleOnChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value, selectedIndex } = event.target;

    switch (name) {
      case "car":
        if (value !== "Select a car") {
          const selectedOptionElement = event.target.options[selectedIndex];
          const id = selectedOptionElement.getAttribute("data-key") as string;
          const car = data?.find((car) => car.MakeId === parseInt(id)) as Car;
          setFilter({ ...filter, car: car });
        } else setFilter({ ...filter, car: null });
        break;
      case "year":
        if (value !== "Select a year") {
          setFilter({ ...filter, year: parseInt(value) });
        } else setFilter({ ...filter, year: null });
        break;
      default:
        break;
    }
  }

  return (
    <section className="flex flex-col gap-y-[2rem] items-center">
      {data ? (
        <>
          <h2>Select one of our vehicles right below</h2>
          <div className="flex flex-col gap-y-[1rem] sm:flex-row gap-x-[3rem]">
            <select
              name="car"
              className="p-[0.5rem] px-[3rem] text-center border-white border-[1px] rounded-full text-white bg-transparent w-[250px] transition duration-300 hover:opacity-70"
              onChange={handleOnChange}
            >
              <option className="text-black">Select a car</option>
              {data?.map((car, index) => (
                <option
                  key={index}
                  data-key={car.MakeId}
                  className="text-black bg-transparent"
                >
                  {car.MakeName}
                </option>
              ))}
            </select>
            <select
              name="year"
              className="p-[0.5rem] px-[3rem] text-center border-white border-[1px] rounded-full text-white bg-transparent w-[250px] transition duration-100 hover:opacity-70"
              onChange={handleOnChange}
            >
              <option className="text-black">Select a year</option>
              {years.map((year, index) => (
                <option key={index} className="text-black bg-transparent">
                  {year}
                </option>
              ))}
            </select>
          </div>
          <Link
            href={`/result/${filter.car?.MakeId}/${filter.year}`}
            className={`${
              filter.car && filter.year
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-40"
            } w-[100px] min-h-[24px] text-center hover:opacity-80`}
          >
            Next
          </Link>
        </>
      ) : (
        <div className="flex gap-x-[1rem]">
          <div className="animate-ping w-[10px] h-[10px] bg-white rounded-full" />
          <div className="animate-ping w-[10px] h-[10px] bg-white rounded-full" />
          <div className="animate-ping w-[10px] h-[10px] bg-white rounded-full" />
        </div>
      )}
    </section>
  );
}
