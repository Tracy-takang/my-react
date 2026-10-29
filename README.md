# DORA HR Dashboard

A React employee directory dashboard for viewing team information, tracking employee statuses, and handling leave requests.

## Features

- Search employees by name, role, or department.
- View employee details, statuses, and team statistics.
- Approve or reject leave requests.
- Navigate the directory with pagination controls.
- Export the currently filtered employee list to CSV.

## Tech stack

- React 19
- JavaScript and CSS
- Create React App, powered by `react-scripts` 5
- Testing Library and `web-vitals`

## Prerequisites

- Node.js 18 or later
- npm (included with Node.js)

## Installation

```bash
git clone https://github.com/Tracy-takang/my-react.git
cd my-react
npm install
```

## Running and building

Start the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Run the test suite:

```bash
npm test
```

## Project structure

```text
my-react/
├── public/                 Static files and images
├── src/
│   ├── components/         Dashboard UI components
│   ├── data/               Employee and navigation data
│   ├── Icon/               SVG icon component
│   ├── utils/              CSV export and status helpers
│   ├── App.js              Main dashboard and state
│   ├── App.css             Dashboard styles
│   ├── index.js            Application entry point
│   └── index.css           Global styles
├── .github/workflows/      GitHub Actions workflows
├── package.json            Dependencies and npm scripts
└── README.md
```

## Author

[Tracy-takang](https://github.com/Tracy-takang)

## License

No license file is currently included in this repository. Add a license before distributing or reusing this project.
