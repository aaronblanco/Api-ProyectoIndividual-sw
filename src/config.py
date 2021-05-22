import os

user='postgres'
password='postgres'
host='postgres'
port=5432
database='postgres'

DATABASE_CONNECTION_URI = f'postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}'
