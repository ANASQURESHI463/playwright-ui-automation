# Playwright UI Automation Framework

## Overview

This project is a simple UI automation framework built using **Playwright** and **JavaScript** following the **Page Object Model (POM)** design pattern.

### Features

* Playwright with JavaScript
* Page Object Model (POM)
* BasePage with reusable methods
* HTML reporting
* Screenshot capture on test failure
* Headless browser execution

---

## Project Structure

```text
ui_automation/
│
├── pages/
│   ├── BasePage.js
│   ├── HomePage.js
│   └── DashboardPage.js
│
├── tests/
│   ├── homepage.spec.js
│   └── dashboard.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Prerequisites

Before running the project, ensure the following are installed:

* Node.js
* npm

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd ui_automation
```

Install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

---

## Running the Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/dashboard.spec.js
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

---

## Generating the Test Report

After the test execution completes, Playwright automatically generates an HTML report.

To open the report, run:

```bash
npx playwright show-report
```

The report includes:

* Test execution summary
* Passed and failed tests
* Screenshots for failed tests
* Execution time
* Error details

---

## Report Location

The HTML report is generated in:

```text
playwright-report/
```

Open the report manually by opening:

```text
playwright-report/index.html
```

---

## Screenshot on Failure

Screenshots are automatically captured when a test fails.

They can be viewed:

* From the HTML report
* Or inside the `test-results/` folder

---

## Framework Design

This framework follows the Page Object Model (POM):

* **BasePage** contains reusable methods such as `click()`, `fill()`, `hover()`, and `goto()`.
* **Page classes** contain page-specific locators and actions.
* **Test classes** contain assertions and business scenarios.

This separation improves readability, maintainability, and reusability of the test code.

## Running the Project via GitHub Actions

This project can also be executed automatically using GitHub Actions.

To view the execution results:

1.Open the GitHub repository.
2.Click on the Actions tab.
3.Select the latest workflow run.
4.Review the test execution logs.
5. Download the playwright-report artifact to view the HTML report locally.

**This allows the test suite to be executed remotely without requiring a local machine.**
