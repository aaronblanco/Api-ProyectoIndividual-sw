import os

user='postgres'
password='postgres'
host='localhost'
port=5432
database='apiDra'

DATABASE_CONNECTION_URI = f'postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}'

