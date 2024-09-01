import { Car } from "@/types/types";
import Link from "next/link";

type Params = { makeId: number; year: number };

export async function generateStaticParams() {
  const slugs: Params[] = [];
  try {
    const data = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
      {
        method: "GET",
      }
    ).then((res) => res.json());

    for (let i = 2015; i <= 2024; i++) {
      data.forEach((car: Car) => {
        slugs.push({ makeId: car.MakeId, year: i });
      });
    }
  } catch (err) {
    return [];
  }

  return slugs;
}

async function getData(params: Params) {
  let data;
  try {
    data = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`,
      { method: "GET" }
    ).then((res) => res.json());
  } catch (err) {
    return null;
  }
  return data;
}

export default async function Page({ params }: { params: Params }) {
  const data = await getData(params);
  if (!data)
    return (
      <main className="py-[2rem] flex flex-col gap-y-[1rem] items-center">
        <h1 className="w-fit mx-auto text-[20px]">
          There was an error while loading the models. Please, try again later.
        </h1>
        <Link
          href="/"
          className="border-[1px] border-white rounded-md p-[0.5rem] hover:opacity-80 transition duration-300"
        >
          Go back
        </Link>
      </main>
    );

  return (
    <main className="py-[2rem]">
      <Link
        href="/"
        className="p-[1rem] text-[24px] hover:opacity-80 transition duration-300"
      >
        {"<-"}
      </Link>
      <header>
        <h1 className="text-[36px] text-center font-bold">
          {data.Results[0].Make_Name}
        </h1>
        <h2 className="text-[28px] text-center font-medium">
          {"Year: " + params.year}
        </h2>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-[3rem] gap-x-[3rem] justify-items-center py-[2rem] sm:py-[5rem]">
        {data.Results.map((car: any, index: number) => {
          return (
            <ul
              style={{ boxShadow: "0 2px 8px rgba(255, 255, 255, 0.3)" }}
              key={index}
              className="border-gray-600 border-[1px] p-[2rem] rounded-xl gap-[1rem] w-[250px] h-[150px] overflow-hidden transition duration-300 hover:scale-105 cursor-pointer"
            >
              <li className="text-[20px] font-bold">{car.Make_Name}</li>
              <li className="text-[18px] font-medium">{car.Model_Name}</li>
            </ul>
          );
        })}
      </section>
    </main>
  );
}
