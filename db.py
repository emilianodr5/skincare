import sqlite3
import pandas
conn = sqlite3.connect('test.db')

print("Opened database successfully");

df = pandas.read_csv('formu.csv')


drop_table = "DROP TABLE IF EXISTS INGREDIENTS"
conn.execute(drop_table)

create_sql = """CREATE TABLE INGREDIENTS ( INGREDIENT_NAME TEXT, TYPE TEXT, GLUTEN_FREE INT, VEGAN INT, ECO_FRIENDLY INT, LINKS TEXT, SUMMARY TEXT, TESTED INT, EFFECTIVE INT, CATEGORY TEXT)"""
conn.execute(create_sql)

df.to_sql('INGREDIENTS', conn, if_exists='replace', index=False)

cursor = conn.cursor()
cursor.execute("select * from Ingredients")
results = cursor.fetchall()
print (len(results))

#like %string%
#SQlite like statement
