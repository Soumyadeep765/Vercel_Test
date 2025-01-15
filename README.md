# Vercel Demo Project

This project demonstrates how to set up two different API routes on Vercel: one using **Express** and another using **module exports**. 

## Features

- **Express API**: A route that handles requests using an Express server.
- **Module Exports API**: A route that uses module exports for handling requests without a server.

## Project Structure
```
src/
├── express.js   # Express API
├── module.js    # Module exports API
package.json     # Dependencies and scripts
vercel.json      # Vercel configuration for routing
readme.md
```

## API Routes

1. **Module Exports Route: `/api/module`**
   - **Description**: This route is handled by the `module.js` file. It uses a lightweight, serverless function to respond to requests.
   - **Response**: Returns a simple JSON message like `{"message": "Hello from Module Export on Vercel!"}`.

2. **Express Route: `/api/express`**
   - **Description**: This route is handled by the `express.js` file. It uses an Express server to manage requests and responses.
   - **Response**: Returns a JSON message like `{"message": "Hello from Express on Vercel!"}`.

## Vercel Configuration

The `vercel.json` file defines the routing for the two APIs:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/module",
      "dest": "/src/module.js"
    },
    {
      "src": "/api/express",
      "dest": "/src/express.js"
    }
  ]
}
```
### Key Updates:
- **API Routes** section clearly defines the two routes (`/api/module` and `/api/express`).
- Each route is described in detail, including the file that handles the route and the type of response users can expect.

This simple structure should make it easy to understand what each route does.
