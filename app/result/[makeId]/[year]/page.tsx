import { Car, CarModel, DetailData, Params } from "@/types/types";
import Link from "next/link";

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
      data.Results.forEach((car: Car) => {
        slugs.push({ makeId: car.MakeId.toString(), year: i.toString() });
      });
    }
  } catch (err) {
    return [];
  }

  return slugs;
}

export default async function Page({ params }: { params: Params }) {
  let data = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`,
    { method: "GET" }
  ).then((res) => res.json());

  return (
    <main className="py-[2rem]">
      <Link
        href="/"
        className="p-[1rem] text-[24px] hover:opacity-80 transition duration-300"
      >
        {"<-"}
      </Link>
      <header>
        <h2 className="text-[28px] text-center font-medium">
          {"Year: " + params.year}
        </h2>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-[3rem] gap-x-[3rem] justify-items-center py-[2rem] sm:py-[5rem]">
        {data.Results.map((car: CarModel, index: number) => {
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
