# Playwright POM Booking Automation Framework

Advanced end-to-end and API test automation framework for the Restful-Booker platform[](https://automationintesting.online) using **Playwright** and **TypeScript**.

This project demonstrates professional test automation practices:
- Page Object Model (POM) for UI tests
- Reusable API helpers
- Structured, maintainable, and scalable architecture
- Positive and negative scenarios with real bug discovery

## Project Structure
aqa-pom-automation/
├── page-object/                # Page Object Model classes
│   ├── home-page.ts
│   ├── room-page.ts
│   ├── booking-page.ts
│   └── Components/calendar.ts
├── helpers/                    # API helpers
│   ├── auth-token.ts
│   ├── create-booking.ts
│   └── create-room.ts
├── tests/
│   ├── API/
│   │     └── book-room.spec.ts               # API tests
│   │     └── create-room.spec.ts
│   │     └── delete-room.spec.ts
│   │     └── edit-room.spec.ts                    
│   └── UI/
│       └── booking.spec.ts     # UI tests with POM
│
├── playwright.config.ts
├── test-cases.txt              # Manual test cases
└── README.md

## Key Features
- Full Page Object Model implementation for UI
- Reusable API helpers for authentication and data creation
- Comprehensive coverage: valid/invalid booking, overlapping dates, visibility of booked dates
- Real bugs discovered and documented (frontend crash on 409, selectable booked dates)

## Running Tests
npm install
npx playwright install

npx playwright test                    # All tests
npx playwright test tests/UI           # UI tests only
npx playwright test tests/API          # API tests only
npx playwright test --headed           # Headed mode
npx playwright show-report             # HTML report

## Found Defects

Critical: Frontend crashes on overlapping dates (409 Conflict not handled)
High: Booked dates remain selectable despite visual indication
High: Past dates can be booked successfully

## Test Cases
Detailed manual test cases in test-cases.txt with expected and actual results.

## Artifacts (on failure)

The project captures debugging artifacts automatically:
- HTML report: `playwright-report/`
- Trace / video / screenshots: `test-results/`

In CI, these artifacts are uploaded for each run.
Locally, you can open the report with:

npx playwright show-report

## Quarantine tests

Some UI tests are tagged as `@quarantine` due to instability of the public demo environment.
Stable suite:
npx playwright test --grep-invert "@quarantine"

Full suite:
npx playwright test