async function generateStaticParams() {
  const slugs = [];
  try {
    const data = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
      {
        method: "GET",
      }
    ).then((res) => res.json());

    for (let i = 2015; i <= 2024; i++) {
      data.Results.forEach((car) => {
        slugs.push({ makeId: car.MakeId, year: i });
      });
    }
  } catch (err) {
    return [];
  }

  return slugs;
}

generateStaticParams();
