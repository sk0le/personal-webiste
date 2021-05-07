# g-e

## About The Project

This project is made in 1-2 weeks so there is a lot of space for improvement. This virtual assistant can't actually open files, programs, but it can help you with every-day questions, and answer to them.

Parts of the project:

- Google search API that is written in Flask(Python), this is simple web scraping, and return you answers, links, and related questions to your question.
- Front-End written in React, using Web Speech API from javascript. It collects your question sends it to API, when answer is returned, it reads it out loud.

What I plan to do is to:

- Add Todo and controling that Todo List with speech
- Add schedule
- Add programming help

### Built With

This is built with:

- [ReactJS](https://reactjs.org/)
- [Flask](https://flask.palletsprojects.com/en/1.1.x/)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [Beautiful Soup 4](https://pypi.org/project/beautifulsoup4/)

## Getting Started

To get started you would need to clone this repository

```bash
git clone https://github.com/sk0le/g.e.

cd ./g.e.
```

### Google search API

If you want to setup API this is how you do it(assuming you cloned repository, and have env activated)

```bash
cd google-search-api

pip install -r requirements.txt

python wsgi.py
```

### Virtual Assistant

This is have to setup frontend for this project

```bash
cd virtual-assistant

npm install

npm run start
```
