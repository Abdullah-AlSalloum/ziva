
# Ziva Manager

Ziva Manager is a comprehensive, responsive inventory management system designed for a small team. It provides a full suite of tools to track inventory, manage team tasks, log orders, and maintain operational awareness through a central dashboard.

## Project structure

```text
src/
  app/App.tsx             Application shell and current tab coordinator
  components/             Feature and shared UI components
  config/                 Runtime configuration such as Cognito
  i18n/                   Arabic/English resources and formatting helpers
  services/
    auth/                 Cognito integration and session persistence
    database/              Temporary local development adapter
  types/                  Shared domain types
  main.tsx                Vite entry point
backend/                  Reserved boundary for API Gateway/Lambda code
```

The frontend is intentionally separated from backend concerns. The current
`LocalDatabase` implementation is temporary and should be replaced behind the
same service boundary when the AWS API is introduced. See
[`backend/README.md`](./backend/README.md) for the target architecture.

## Features

- **Secure User Authentication**: User profiles and password policies are managed by AWS Cognito, including mandatory password changes when configured by the user pool.
- **"At-a-Glance" Dashboard**: A central hub that provides key metrics (Items to Reorder, Your Pending Tasks), a list of tasks assigned to you, and a real-time feed of recent team activities.
- **Advanced Inventory Management**:
    - Add, edit, and permanently remove stock items.
    - A powerful table view with **sorting** by name, type, supplier, or quantity.
    - Instant **search** to filter items.
    - Bulk **Import/Export** of inventory data via CSV files.
- **Automated Reorder Alerts**: Items with a quantity below 3 are automatically moved to a "Reorder Needed" section for immediate attention.
- **Team Task Management**:
    - Create and assign tasks to any team member with a due date.
    - Track task status (`To Do`, `In Progress`, `Completed`).
    - **In-app notifications with sound** alert users when they are assigned a new task.
- **Order & Request Logging**:
    - A section to log daily orders that have been sent to customers.
    - A section to log pending requests for out-of-stock items.
- **Development data adapter**: Operational data is currently persisted in browser local storage through an isolated adapter. This is not a production data store.
- **Production authentication**: Set `VITE_AWS_REGION`, `VITE_COGNITO_USER_POOL_ID`, and `VITE_COGNITO_USER_POOL_CLIENT_ID` from a Cognito public app client to activate Cognito login. Do not configure a client secret in this browser app.
- **UI & UX**:
    - A clean, modern interface with **Dark Mode**.
    - Fully responsive design for use on desktops, tablets, and mobile devices.
    - Confirmation dialogs for critical actions to prevent mistakes.

## Authentication

The app uses AWS Cognito for authentication. Local authentication fallback is
disabled so a missing Cognito configuration fails closed instead of creating a
second insecure authentication system.

For production authentication:

1. Create a Cognito User Pool.
2. Create a public app client without a client secret.
3. Configure the values directly in your local `.env` file:

```env
VITE_AWS_REGION=your-aws-region
VITE_COGNITO_USER_POOL_ID=your-user-pool-id
VITE_COGNITO_USER_POOL_CLIENT_ID=your-public-app-client-id
```

When all three values are present, the app uses Cognito for sign-in and session restoration. Do not commit `.env` or add a client secret to this browser application. User profile and operational records still use the temporary local adapter until the AWS data API is connected.

Run the test suite with:

```bash
npm test
```

---

## How to Deploy Your Application

Follow these steps to put your application on the internet so your team can use it from anywhere. We will use [Vercel](https://vercel.com), a free and easy-to-use hosting service.

### Prerequisites

1.  **Your Project Files**: Make sure you have all the application files (`index.html`, `src/`, `backend/`, etc.) in a single folder on your computer.
2.  **A GitHub Account**: You will need a free account on [GitHub](https://github.com).

### Step 1: Create a GitHub Repository

1.  **Log in to GitHub** and click the `+` icon in the top-right, then select **"New repository"**.
2.  Give your repository a name (e.g., `invictus-manager`).
3.  Choose "Public" or "Private".
4.  Click **"Create repository"**.
5.  On the next page, GitHub will show you instructions to "push an existing repository from the command line." Follow those instructions to upload your project folder to this new repository.

### Step 2: Deploy with Vercel

1.  **Sign up for Vercel**: Go to [vercel.com](https://vercel.com) and sign up for a free "Hobby" account. It's easiest to sign up using your GitHub account.
2.  **Import Your Project**:
    - Once logged in to your Vercel dashboard, click **"Add New..." -> "Project"**.
    - Find the GitHub repository you just created (`invictus-manager`) and click the **"Import"** button next to it.
3.  **Configure the Project**:
    - Vercel is smart and will likely detect you have a static `index.html` file.
    - You **do not need to change any settings**. The default settings for a static site will work perfectly for this project.
    - Click the **"Deploy"** button.
4.  **Done!**
    - Vercel will now build and deploy your application. The process takes about 30-60 seconds.
    - Once it's finished, you'll see a screenshot of your app and be given a public URL (like `invictus-manager.vercel.app`).

You can now share this URL with your team! They can access the inventory management system from any device.
