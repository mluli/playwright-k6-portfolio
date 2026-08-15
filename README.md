# Advanced QA Automation & Performance Testing Suite

This repository demonstrates a production-grade QA Automation and Performance testing framework. It features automated End-to-End (E2E) API testing, schema validations, and load testing integrated directly into a GitHub Actions CI/CD pipeline.

---

## Tech Stack & Architecture

* E2E & API Automation: Playwright (TypeScript)
* Performance & Load Testing: k6 (JavaScript)
* CI/CD Integration: GitHub Actions (Ubuntu Runners)
* Target APIs: PokeAPI & ReqRes REST API
* Reporting: Playwright HTML Reporter & k6 JSON Artifacts

playwright-k6-portfolio/
├── .github/
│   └── workflows/
│       └── playwright.yml      # CI/CD Pipeline Configuration
├── tests/
│   ├── api-pokeapi.spec.ts     # PokeAPI Tests & Response Validations
│   ├── api-reqres.spec.ts      # ReqRes CRUD & Schema Tests
│   └── performance/
│       └── load-test.js        # k6 Load & Stress Testing Script
├── package.json
└── playwright.config.ts        # Playwright Test Runner Config

---

## Test Suite Breakdown

### 1. API Integration & Functional Testing (Playwright)

* PokeAPI (api-pokeapi.spec.ts): Validates Pokemon endpoint data integrity, HTTP 200 status codes, and JSON response payload structure.
* ReqRes (api-reqres.spec.ts): Validates CRUD operations, status code verifications (200 OK, 201 Created), and execution timing.

### 2. Performance & Load Testing (k6)

* Ramp-up Scenario: Simulates up to 10 Virtual Users (VUs).
* Threshold Policy: Enforces that 95% of API requests complete in < 1500ms (p(95) < 1500).
* Pass/Fail Criteria: Zero error rate toleration on critical endpoints.

---

## Local Setup & Execution

### Prerequisites

* Node.js (v18 or higher)
* npm (v9 or higher)

### Installation

git clone [https://github.com/mluli/playwright-k6-portfolio.git]
cd playwright-k6-portfolio
npm install
npx playwright install --with-deps

### Running Tests Locally

npx playwright test
npx playwright show-report
k6 run tests/performance/load-test.js

---

## CI/CD Pipeline Workflow

The GitHub Actions workflow runs automatically on every push or pull_request to the main branch:

1. Environment Provisioning: Provisions an ubuntu-latest runner with Node.js LTS.
2. Playwright Execution: Installs dependencies, runs headless API tests, and generates HTML reports.
3. k6 Installation & Load Test: Installs k6 dynamically, executes load tests against target endpoints, and outputs metrics.
4. Artifact Retention: Uploads execution logs and visual HTML reports as downloadable artifacts stored for 30 days.

---

## Author

María Luciana Diaz
QA / QC Engineer | Test Automation Specialist

* LinkedIn: [https://www.linkedin.com/in/marialucianadiaz](https://www.google.com/searcq=https://www.linkedin.com/in/marialucianadiaz)[cite: 1]
* GitHub: [https://github.com/mluli](https://www.google.com/search?q=https://github.com/mluli)[cite: 1]
* Certifications: ISTQB® Certified Tester Foundation Level[cite: 1]
