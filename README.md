## Environment Variables

This project requires the following environment variables:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
- `CLERK_SECRET_KEY`: Your Clerk secret key
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: Authentication sign-in URL
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: Authentication sign-up URL
- `NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL`: Redirect URL after sign-in
- `NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL`: Redirect URL after sign-up
- `DATABASE_URL`: Your PostgreSQL database connection string
- `SIGNING_SECRET`: Your webhook signing secret

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard

DATABASE_URL=your_database_url
SIGNING_SECRET=your_signing_secret
```
