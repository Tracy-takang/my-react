# DORA HR Dashboard

A React employee directory dashboard.

## Features

- Search employees by name, role, or department.
- Approve or reject leave requests.
- View employee statistics in stat cards.
- Navigate pages with pagination.
- Export the currently filtered employees to CSV.

## Tech stack

- React (Create React App)
- JavaScript
- Plain CSS

## Project structure

```text
src/
├── components/  Reusable dashboard interface components.
├── data/        Employee, statistics, and navigation data.
├── Icon/        SVG icon component.
└── utils/       Status formatting and CSV export helpers.
```

## Getting started

Prerequisite: Node.js 18 or later.

```bash
npm install
npm start
npm run build
```

## Notes

Place avatar images in `public/images/avatars` and the logo in `public/images/logo.png`.

## License

MIT
