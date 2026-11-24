# CIPET GYAN

**CIPET GYAN** is a focused learning platform for CIPET students, with study materials, previous-year papers, video learning, mock tests and student reviews. The website also presents career support, recruitment assistance and industrial consultancy for plastics and polymer industries.

## Live website

[Visit CIPET GYAN](https://cipetgyan.me/)

## Features

- Responsive homepage and mobile app showcase
- Study materials, notes, syllabus and previous-year papers
- Video learning and student reviews
- Career support, recruitment and industrial consultancy information
- Three distinct Netlify enquiry forms

## Local review preview

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Forms remain disabled in local review; they do not send or store entries.

## Build

```bash
npm run build
```

## Netlify enquiry forms

Contact forms are named `general-enquiry`, `employer-recruitment`, and `candidate-profile`. Notification email subjects identify the enquiry type, and submissions are viewable in the Netlify dashboard under **Forms**. The production build enables submissions using `VITE_NETLIFY_FORMS_ENABLED=true`.

In Netlify, enable automatic form detection and create email notifications under **Forms > Submission notifications**. Recipients outside your Netlify team may need to confirm notifications. Candidate resumes are limited to 8 MB; Netlify recommends extra security configuration for uploads containing personal information. Set and publish a retention period before collecting submissions.

## Routes

- `/` — Home
- `/about` — About CIPET GYAN
- `/services` — Service descriptions
- `/careers` — Careers and job updates
- `/education` — Learning support
- `/contact` — Enquiry forms
- `/disclaimer` — Independence and service disclaimers
- `/terms-and-conditions`, `/privacy-policy`, `/refund-policy`, `/delete-account` — Legal and account routes
