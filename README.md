# Sports Poster Generator

A React application that allows users to create and customize sports event posters with team information, player lists, and custom backgrounds.

## Features

- Create sports event posters with team information
- Customize team names, slogans, venue, date and player names
- Upload custom background image for poster
- Download posters as PNG images

## Tech Stack & Rules for clean, modular code

Stack

- React
- TypeScript
- SASS/SCSS
- ESLint

Rules (bulletproof-react)

- Import restrictions and order
- Line break style
- TS specific rules (unused variables, any type)
- Filename and Folder name convention (kebab-case)

Other things to Note.
- Tried to make components follow SOLID principle
- Dynamnic image fetching from unsplash API
- Error boundaries to ensure the whole app does not crash (used on data fetching components)
- Used CRACO for alias imports.
  

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## Project Structure

Feature-based file structure as project size is small, and features are easily separated by concern.

```
src/
├── components/         # Reusable UI components & non feature-related components
├── feature/           # Feature-based modules
│   ├── canvas-konva/  # Poster editing features using konva library
│   ├── poster-customization/  # Poster editing features(legacy)
│   └── poster-download/       # Poster download features
|   |__ select-game/           # select game feature
├── hooks/          # General hooks that are reusable
├── providers/          # Providers used in page level
├── mockdata/          # Mock data for teams and players
└── pages/           # Pages components
tests/
├── home-page.test.tsx        # E2E test using Playwright
├── poster-page.test.tsx
```

Inside each feature, we have the following file structure

```
feature-name/
├── components/ # Non-reusable components used for the feature.
│ ├── index.tsx/ # Component Code
│ └── styles.scss/ # styling file
├── context/ # context used for feature
├── hooks/ # hooks used for feature
└── helpers/ # helpers used for this feature
```

## Usage

1. Select a game from the game list
2. Enter edit mode to customize the poster
3. Edit team information, player names, and upload background images
4. Download the customized poster

## Testing

To run the test locally

```bash
npx playwright test
#or
yarn playwright test
```

Playwright UI mode (for interactive testing and debugging)

```bash
npx playwright test --ui
#or
yarn playwright test --ui
```

## Test Results (E2E)


https://github.com/user-attachments/assets/9aa88f1d-9f27-4121-bbd3-2888db9a58c5



## Trade-offs or Shortcuts Taken

1. Used Context API instead of State Management Libraries (would use for prod)

- To showcase that I have an understanding of context API, and it's limitations.
- Handle re-rendering through splitting up context.
- Simplicity and Maintainability. Small project, small context can be handled with only context API

2. Testing Unit Test, Integration Test

- Wrote E2E test using Playwright
- Unit Testing and Integration Testing passed as E2E testing is more important
- If I had more time, would definitely focus on integration testing

3. Did not Persist state for poster (don't know if its a shortcut)

- From UX perspective, didn't seem correct to save the data user has changed. Don't have an API to change backend, but also, if user leaves, usually changes are not saved.
- Also, would be weird if we change player name, and that data persists.
