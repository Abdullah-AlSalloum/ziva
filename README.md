
# Invictus Manager

Invictus Manager is a comprehensive, responsive inventory management system designed for a small team. It provides a full suite of tools to track inventory, manage team tasks, log orders, and maintain operational awareness through a central dashboard.

## Features

- **Secure User Authentication**: Each of the 7 users has their own profile with a password. A mandatory password change on first login ensures each user's account is secure.
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
- **Data Persistence**: All application data (inventory, users, tasks, etc.) is saved directly in the browser's local storage, so your information is still there even after closing the tab or restarting the computer.
- **UI & UX**:
    - A clean, modern interface with **Dark Mode**.
    - Fully responsive design for use on desktops, tablets, and mobile devices.
    - Confirmation dialogs for critical actions to prevent mistakes.

---

## How to Deploy Your Application

Follow these steps to put your application on the internet so your team can use it from anywhere. We will use [Vercel](https://vercel.com), a free and easy-to-use hosting service.

### Prerequisites

1.  **Your Project Files**: Make sure you have all the application files (`index.html`, `App.tsx`, `components/`, etc.) in a single folder on your computer.
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
