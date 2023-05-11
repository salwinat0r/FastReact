#!/bin/bash

# Start the backend server
uvicorn main:app --reload &

# Install dependencies and start the frontend server
cd frontend
npm install
npm start
