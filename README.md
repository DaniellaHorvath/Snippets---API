Activity Overview

GOAL: Create endpoints to POST code snippets and then GET them back.

User Stories (Snippets)
As a user, I can add a snippet to the data store, so that I can look it up again when I need it
As a user, I can request a snippet by its ID, so that I can see the snippet again

Functional Requirements
Users can make POST request to /snippets to create a new snippet
Users can make a GET request to /snippets to get all the snippets currently in the data store
Users can make a GET request to e.g. /snippets/3 to retrieve the snippet with the ID of 3

Choosing a Framework
JavaScript & Typescript	Express.js: A fast and minimalist web framework that provides a robust set of features for building APIs.	
Express.js documentation - https://expressjs.com/

Seed Data
Available in the src folder - seeddata.json format

