# Next.js Vehicle Filter and Result Application

This is a Next.js application that allows users to filter vehicle models by type and model year, and view the results on a separate page. The project was styled with Tailwind CSS.

## Features

- **Filter Page**: Allows users to select a vehicle type and model year. The "Next" button becomes enabled only when both selections are made.
- **Result Page**: Displays a list of vehicle models based on the selected vehicle type and model year.
- **Static Generation**: Utilizes `generateStaticParams` for pre-rendering the result pages based on the selected parameters.
- **Data Fetching**: Fetches vehicle data from the NHTSA API.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nrcs97/test-assessment.git
   cd test-assessment
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the root directory.

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

### Building the Application

To build the application for production:

```bash
npm run build
# or
yarn build
```

This will generate the optimized build files in the `.next` directory.

## Project Structure

- **app/**: Contains the Next.js pages, including the filter and result pages.
- **components/**: Contains the Filter component components used in the application.
- **.env.local**: Environment variables for the project (not included in the repository).

## API Endpoints

- **Vehicle Types**: Fetches the vehicle types for the filter dropdown.

  ```
  https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
  ```

- **Vehicle Models**: Fetches vehicle models by make ID and model year for the result page.

  ```
  https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json
  ```
