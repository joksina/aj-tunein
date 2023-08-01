# Mini TuneIn App

A slimmed-down version of the TuneIn application using react boilerplate

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run coverage`

Launches the test runner and also runs the test coverage.

## Notes
Please read the Engineering design document below. It has some details on my architectural approach and some of the things I would have done to improve this implementation.

### Eng Document
Open [EDD](https://docs.google.com/document/d/1a63E-W52fVMtZB4ZcvJdod-jJvmOqxWWBxmnDGimY88/edit) for more notes on documentation and design decision

### Stations List Page
- Users are able to see the list of Stations
- Users can click each list and it links to the detail page
- Users can filter 
![Screen Shot 2023-07-31 at 6 11 40 PM](https://github.com/joksina/aj-tunein/assets/12619243/7ff9618d-4c92-4985-bf4b-5185d9b8228e)

### Station Details page
- Users can click back to go back to the Stations' list page
- Users can see details of the station
- Audio auto plays
![Screen Shot 2023-07-31 at 6 11 47 PM](https://github.com/joksina/aj-tunein/assets/12619243/eba2a889-f2cb-4441-a4d9-242f2b850dc5)

### Tag Filters
- When a user clicks `News`, it shows all stations related to `News`
![Screen Shot 2023-07-31 at 7 30 20 PM](https://github.com/joksina/aj-tunein/assets/12619243/79b9d9ba-77c7-404b-be2c-2b43f9399f9e)

### Test Coverage
I ran into a roadblock testing the custom hooks. If I had more time, I would spend some time on it.
![Screen Shot 2023-07-31 at 7 07 14 PM](https://github.com/joksina/aj-tunein/assets/12619243/1885baaf-e652-4936-b5ff-12240fc4eec1)
