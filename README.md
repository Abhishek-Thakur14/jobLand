# Jobland - Job Portal Website

Jobland is a job portal web application where users can browse available jobs and post new job opportunities. With functionalities like applying for jobs, saving jobs, and checking the hiring status, Jobland makes it easy for users to navigate the job market efficiently.

## Features

- **Browse Jobs**: Search for jobs based on various criteria like job title, company, location, etc.
- **Post Jobs**: Employers can post job opportunities with detailed descriptions.
- **Apply for Jobs**: Users can apply to listed jobs directly from the platform.
- **Save Jobs**: Option to save jobs for future reference.
- **Hiring Status**: View whether the job's hiring status is open or closed.
- **User Authentication**: Secure authentication using Clerk for both job seekers and employers.

## Tech Stack

- **Frontend**: Built with React for a dynamic and responsive user experience.
- **Styling**: Tailwind CSS for modern and customizable styles, and Shadcn for reusable UI components.
- **Backend**: Supabase for managing database operations and real-time features.
- **Authentication**: Clerk for secure and easy-to-manage user authentication.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed (v14 or later)
- Supabase account
- Clerk account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Neeraj-Fulpatiya/jobLand.git

2. Navigate to the project directory:
   cd jobLand

3. Install the dependencies:
   ```bash
   npm install
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```bash
     REACT_APP_SUPABASE_URL=your_supabase_url
     REACT_APP_SUPABASE_KEY=your_supabase_key
     REACT_APP_CLERK_FRONTEND_API=your_clerk_frontend_api
     ```
5. Start the development server:
   ```bash
   npm run dev
## Usage

- **For Job Seekers**: Browse jobs, apply directly, and save the ones you like.
- **For Employers**: Post job listings and manage job applications.

## Note

Your feedback is invaluable! If you spot any bugs or have suggestions for enhancements, please don't hesitate to contact me at [techpro.neeraj@gmail.com](mailto:techpro.neeraj@gmail.com). Thank you for your support!
