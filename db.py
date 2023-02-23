import sqlite3
import pandas
conn = sqlite3.connect('test.db')

print("Opened database successfully"); # prints if successful 

df = pandas.read_csv('formu.csv') # opens csv 


drop_table = "DROP TABLE IF EXISTS INGREDIENTS"
conn.execute(drop_table) # drops any old table to create table with current csv

create_sql = """CREATE TABLE INGREDIENTS ( INGREDIENT_NAME TEXT, TYPE TEXT, GLUTEN_FREE INT, VEGAN INT, ECO_FRIENDLY INT, LINKS TEXT, SUMMARY TEXT, TESTED INT, EFFECTIVE INT, CATEGORY TEXT)"""
conn.execute(create_sql) # creates table with some text and some integers (type 0/1)

df.to_sql('INGREDIENTS', conn, if_exists='replace', index=False) # saves csv to created table in sql

cursor = conn.cursor() 
cursor.execute("select * from Ingredients")
results = cursor.fetchall()
print (len(results)) # prints the length of results (number of rows)


#notes for later:
#like %string%
#SQlite like statement
