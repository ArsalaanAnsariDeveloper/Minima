# Minima ---

## What is Minima? 

Minima is a budget organization tool targeted at small companies and startups. We created this project for the Rehive Fintech Hackathon.

## What problem are we trying to fix?

Startups and small businesses tend to not have established Human Resource departments and struggle with organizing budgets and finances within members of the organization. In addition financial transactions within a small company are often not authenticated or regulated by any system making it difficult to track incorrect and fraudulent transactions within the company.

## How do we fix this problem?

We created a budgeting webapp that allows users in the company to make authorized internal and external transactions. All company transactions are publicly viewable on the webapp, and employees can make transactions based on three criteria:

1. Spending Power : How much money the user can transact with
2. Budgets: The amount of money allocated for each budget (Food, Investments, Travel, Recreation)
3. Authentication: Does the user have the privilege to make this transaction?

## Setup

Our tech stack includes React for the front end, and Node.js + Express + mongoDB for the backend.
We use the Rehive API  with out mongoDB server extensively to make transactions between users and external parties seamless.

To install the dependencies type:

	yarn (or npm install)
	
To start the app run:

	yarn dev (or npm run dev)
	
	
