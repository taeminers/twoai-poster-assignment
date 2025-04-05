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
-Tried to make components follow SOLID principles.

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
│   ├── poster-customization/  # Poster editing features
│   └── poster-download/       # Poster download features
|   |__ select-game/           # select game feature
├── mockdata/          # Mock data for teams and players
└── pages/           # Pages components
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

## Trade-offs or Shortcuts Taken

1. Used Context API instead of State Management Libraries.

- To showcase that I have an understanding of context API, and it's limitations.
- Handle re-rendering through splitting up context.
- Simplicity and Maintainability. Small project, small context can be handled with only context API

2. Testing Unit Test, Integration Test, E2E Test.

- Simply no time to implement a thorough test.
- If I had the time, I would test
  - Data flow through contexts
  - User Interactions for selecting game, editing poster through inputs
  - Image upload functionality
  - Download functionality

3. Did not Persist state for poster (don't know if its a shortcut)

- From UX perspective, didn't seem correct to save the data user has changed. Don't have an API to change backend, but also, if user leaves, usually changes are not saved.
- Also, would be weird if we change player name to something weird, and that data persists.
