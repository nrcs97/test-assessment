export type Car = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export type DetailData = {
  Results: CarModel[];
};

export type CarModel = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export type Params = { makeId: string; year: string };
