FROM python:3.9.5-slim-buster

WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt
RUN pip install -U flask-cors


COPY . /usr/src/app/
CMD ["flask", "run", "-h", "0.0.0.0", "-p", "5000"]