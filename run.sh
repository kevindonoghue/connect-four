#!/bin/bash

cd frontend
npm run build
cd ../backend
export FLASK_APP=connect-four.py
flask run
