# Note App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

With this project you can administrate notes, you can create, edit, archive, active and delete notes

There is a relational database to persist information

It was developed with nestjs backend framework and with react frontend library

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
  - [StandAlone](#stand-alone-installation)
  - [Docker](#docker-installation)
  - [Script](#script-installation)
- [Usage](#usage)

## Requirements

- Node v18.16.1
- NPM v9.8.0
- PostgresSql 16.2-1
- Docker 4.25.1
- docker-compose v2.23.0-desktop.1

You need an PostgesSql server and you have to create a table name note, you have the sql script in note.sql

## Installation

### Stand Alone Installation

1. Create a .env file in frontend, backend and project root folders
2. Open a terminal for frontend and backend
3. Install dependencies in each project with npm i
4. Run backend with npm run start:dev
5. Run frontend with npm run dev

### Docker Installation

1. Create .env files in frontend, backend and root
2. Run in terminal:
   > docker-compose up

### Script Installation

Requirements:

- Docker
- docker-compose
- Linux/Unix environment

Run in terminal:
> sh startEnvironment.sh

## Usage

You can now open your browser and go to http://localhost:3001 and use the app

There is also an online version in https://note.nlp-project.me
