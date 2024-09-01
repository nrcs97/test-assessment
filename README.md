Aquí tienes un ejemplo de un archivo `README.md` para tu proyecto:

---

# Next.js Vehicle Filter and Result Application

This is a Next.js application that allows users to filter vehicle models by type and model year, and view the results on a separate page. The project uses Tailwind CSS for styling and React's `Suspense` for handling loading states.

## Features

- **Filter Page**: Allows users to select a vehicle type and model year. The "Next" button becomes enabled only when both selections are made.
- **Result Page**: Displays a list of vehicle models based on the selected vehicle type and model year.
- **Static Generation**: Utilizes `generateStaticParams` for pre-rendering the result pages based on the selected parameters.
- **Data Fetching**: Fetches vehicle data from the NHTSA API.
- **Responsive Design**: Styled with Tailwind CSS, following best practices for responsive design and accessibility.
- **Code Quality**: Configured with ESLint and Prettier to ensure consistent and clean code.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the root directory and add any necessary environment variables.

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

### Linting and Formatting

To check for linting errors:

```bash
npm run lint
# or
yarn lint
```

To format the code with Prettier:

```bash
npm run format
# or
yarn format
```

## Project Structure

- **pages/**: Contains the Next.js pages, including the filter and result pages.
- **components/**: Contains the reusable React components used in the application.
- **styles/**: Global styles and Tailwind CSS configuration.
- **.env.local**: Environment variables for the project (not included in the repository).
- **.eslintrc.js**: ESLint configuration.
- **.prettierrc**: Prettier configuration.

## API Endpoints

- **Vehicle Types**: Fetches the vehicle types for the filter dropdown.

  ```
  https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
  ```

- **Vehicle Models**: Fetches vehicle models by make ID and model year for the result page.

  ```
  https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json
  ```

## License

This project is licensed under the MIT License.

---

Feel free to modify the README to better suit your project's needs!
