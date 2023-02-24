from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.image import Image
from kivy.uix.scrollview import ScrollView
import pandas as pd
import pandas
import sqlite3

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

class FirstPage(Screen): #lines below make first app page with 4 buttons that each open other pages
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.add_widget(Button(text='Scan a label', on_press=self.go_to_second_page, size_hint=(.4, .15),
                               pos_hint={'x': .3, 'y': .8}))
        self.add_widget(Button(text='Search an ingredient', on_press=self.go_to_third_page, size_hint=(.4, .15),
                               pos_hint={'x': .3, 'y': .65}))
        self.add_widget(Button(text='How our rating system works', on_press=self.go_to_fourth_page, size_hint=(.4, .15),
                               pos_hint={'x': .3, 'y': .5}))
        self.add_widget(Button(text='Frequently asked questions', on_press=self.go_to_fifth_page, size_hint=(.4, .15),
                               pos_hint={'x': .3, 'y': .35}))
        self.add_widget(Button(text='Request an ingredient', on_press=self.go_to_sixth_page, size_hint=(.4, .15),
                               pos_hint={'x': .3, 'y': .2}))

    def go_to_second_page(self, instance): #starts page 2 protocol when user clicks button
        app = App.get_running_app()
        app.screen_manager.current = 'second'

    def go_to_third_page(self, instance): #starts page 3 protocol when user clicks button
        app = App.get_running_app()
        app.screen_manager.current = 'third'

    def go_to_fourth_page(self, instance): #starts page 4 protocol when user clicks button
        app = App.get_running_app()
        app.screen_manager.current = 'fourth'

    def go_to_fifth_page(self, instance): #starts page 5 protocol when user clicks button
        app = App.get_running_app()
        app.screen_manager.current = 'fifth'

    def go_to_sixth_page(self, instance): #starts page 6 protocol when user clicks button
        app = App.get_running_app()
        app.screen_manager.current = 'sixth'


class SecondPage(Screen): #opens fourth page when user clicks 'scan a product'
    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class ThirdPage(Screen): #opens fourth page when user clicks 'search an ingredient'
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        my_variable = None
        top_box = BoxLayout(size_hint=(.5, .18), pos_hint={'x': .25, 'y': .8}) #creates box
        label = Label(text='Search an ingredient below', ) #labels box
        top_box.add_widget(label) #assigns label to box
        self.add_widget(top_box) #makes box a widget
        bot_box = BoxLayout(size_hint=(.4, .05), pos_hint={'x': .3, 'y': .8}) #makes search bar
        self.search = TextInput(text='', multiline=False)  # allows text input in search bar
        self.search.bind(on_text_validate=self.update_string)  # binds string once user presses enter
        bot_box.add_widget(self.search) #makes search bar a widget
        self.add_widget(bot_box) #makes box for search bar a widget

    def update_string(self, instance): #starts new protocol once user presses enter
        self.user_string = instance.text #assings bound string to self.user_string
        a = self.user_string #makes this a variable we can work with for database fetching
        print(f"The user's text input is: {a}") #prints what user searched in terminal (for testing)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Ingredients WHERE IngName LIKE ?", ('%' +a+ '%',)) #searches first column in
            # database for matching ingredient name
        results = cursor.fetchall() # fetches results
        if len(results) == 0:
            print('No results found.') # if no matching ingredient
        else:
            for row in results:
                R = row
                print(R) # if matching ingredient
                self.my_variable = R
                self.manager.transition.direction = 'left'
                self.manager.current = 'seventh'
class SeventhPage(Screen):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.my_variable = None

    def on_pre_enter(self):
        super().on_pre_enter()
        self.my_variable = None
        r = self.manager.get_screen('third').my_variable
        if r is not None:
            ing_name = TextInput(text=f'Ingredient: {r[0]}',readonly=True, size_hint=(0.5, 0.2),pos_hint={'center_x': 0.5, 'center_y': 0.7} )
            self.add_widget(ing_name)
            goal= TextInput(text=f'This ingredient is used as: {r[1]}',readonly=True, size_hint=(0.5, 0.2),pos_hint={'center_x': 0.5, 'center_y': 0.6} )
            self.add_widget(goal)
            summary = TextInput(text=r[6], readonly=True, size_hint=(0.5, 0.2), pos_hint={'center_x': 0.5, 'center_y': 0.5}, multiline=True,)
            self.add_widget(summary)
            if int(r[2]) == 1 | int(r[3]) == 1 | int(r[4]) == 1:
                cats = TextInput(text='This ingredient is vegan, gluten free, and eco-friendly', readonly=True, size_hint=(0.5, 0.2),
                                    pos_hint={'center_x': 0.5, 'center_y': 0.35}, multiline=True, )
                self.add_widget(cats)
            if int(r[2]) == 1 | int(r[3]) == 1 | int(r[4]) == 0:
                cats = TextInput(text='This ingredient is vegan and gluten free', readonly=True, size_hint=(0.5, 0.2),
                                    pos_hint={'center_x': 0.5, 'center_y': 0.35}, multiline=True, )
                self.add_widget(cats)
            if int(r[2]) == 1 | int(r[3]) == 0 | int(r[4]) == 1:
                cats = TextInput(text='This ingredient is vegan and ecofriendly', readonly=True, size_hint=(0.5, 0.2),
                                    pos_hint={'center_x': 0.5, 'center_y': 0.35}, multiline=True, )
                self.add_widget(cats)
            if int(r[2]) == 0 | int(r[3]) == 1 | int(r[4]) == 1:
                cats = TextInput(text='This ingredient is gluten free and eco-friendly', readonly=True, size_hint=(0.5, 0.2),
                                    pos_hint={'center_x': 0.5, 'center_y': 0.35}, multiline=True, )
                self.add_widget(cats)
            if int(r[2]) == 1 | int(r[3]) == 0 | int(r[4]) == 0:
                cats = TextInput(text='This ingredient is vegan', readonly=True, size_hint=(0.5, 0.2),
                                    pos_hint={'center_x': 0.5, 'center_y': 0.35}, multiline=True, )
                self.add_widget(cats)
            if int(r[2]) == 0 | int(r[3]) == 0 | int(r[4]) == 1:
                cats = TextInput(text='This ingredient is eco-friendly', readonly=True, size_hint=(0.5, 0.2),
                                    pos_hint={'center_x': 0.5, 'center_y': 0.35}, multiline=True, )
                self.add_widget(cats)
            if int(r[2]) == 0 | int(r[3]) == 1 | int(r[4]) == 0:
                cats = TextInput(text='This ingredient is gluten free', readonly=True, size_hint=(0.5, 0.2),
                                    pos_hint={'center_x': 0.5, 'center_y': 0.35}, multiline=True, )
                self.add_widget(cats)
            if int(r[2]) == 0 | int(r[3]) == 0 | int(r[4]) == 0:
                cats = TextInput(text='This ingredient is not vegan, gluten free, or eco-friendly', readonly=True, size_hint=(0.5, 0.2),
                                    pos_hint={'center_x': 0.5, 'center_y': 0.35}, multiline=True, )
                self.add_widget(cats)
            links = TextInput(text=f'Sources: {r[5]}', readonly=True, size_hint=(0.5, 0.2),
                                pos_hint={'center_x': 0.5, 'center_y': 0.3}, multiline=True, )
            self.add_widget(links)


class FourthPage(Screen): #opens fourth page when user clicks 'how our rating system works' (needs work)
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.bind()
        self.bind(height=self.set_height)
        self.img = Image(source='lung.png')
        self.add_widget(self.img)

    def set_height(self, instance, value):
        self.height = value


class FifthPage(Screen): # (Needs work)
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.size = (1, 2) # size
        self.pos_hint = {'x': .3} # position
        scroll_view = ScrollView() # allows scrolling on page
        layout = BoxLayout(orientation='vertical', spacing=2, size_hint=(.65, 2)) # text box size & spacing
        layout.bind(minimum_height=layout.setter('height')) # height
        df = pd.read_excel('FAQ.xlsx') # reads excel sheet of pretyped FAQ
        num_rows = len(df) # number of rows = length dataframe
        for i in range(min(num_rows, 22)): #from row 1-22
            text_input = TextInput(text=str(df.iloc[i, 0]), size_hint=(.65, 2), font_size=14, font_name='Arial') # font
            if i == 3: # needed a bigger box
                text_input.size_hint = (.65, 2.75)
            elif i == 7: # needed a bigger box
                text_input.size_hint = (.65, 3.5)
            if i % 2 == 0: # questions color
                text_input.background_color = (.975, .975, 1, 1)  # very light blue background for even widgets
            else: # answers color
                text_input.background_color = (.9, .9, 1, 1)  # light blue background for odd widgets
            layout.add_widget(text_input)
        scroll_view.add_widget(layout)
        self.add_widget(scroll_view)

class SixthPage(Screen):
    def __init__(self, **kwargs): #opens sixth page when user clicks 'request an ingredient'
        super().__init__(**kwargs)
        top_box = BoxLayout(size_hint=(.5, .18), pos_hint={'x': .25, 'y': .8})  # creates box
        label = Label(text='Are we missing something? Request an ingredient below.', )  # labels box
        top_box.add_widget(label)  # assigns label to box
        self.add_widget(top_box)  # makes box a widget
        bot_box = BoxLayout(size_hint=(.4, .05), pos_hint={'x': .3, 'y': .8})  # makes input bar
        self.req = TextInput(text='', multiline=False)  # allows text input in bar
        self.req.bind(on_text_validate=self.update_string)  # binds string once user presses enter
        bot_box.add_widget(self.req)  # makes search bar a widget
        self.add_widget(bot_box)  # makes box for search bar a widget

    def update_string(self, instance):  # starts new protocol once user presses enter
        self.user_string = instance.text  # assings bound string to self.user_string
        a = self.user_string  # makes this a variable we can work with for database fetching
        print(f"The user's text input is: {a}")  # prints what user searched in terminal (for testing)




class ScreenManagement(ScreenManager):
    pass


class MyApp(App):
    def build(self):
        self.screen_manager = ScreenManagement() #lines belowmake each page a widget
        self.screen_manager.add_widget(FirstPage(name='first'))
        self.screen_manager.add_widget(SecondPage(name='second'))
        self.screen_manager.add_widget(ThirdPage(name='third'))
        self.screen_manager.add_widget(FourthPage(name='fourth'))
        self.screen_manager.add_widget(FifthPage(name='fifth'))
        self.screen_manager.add_widget(SixthPage(name='sixth'))
        self.screen_manager.add_widget(SeventhPage(name='seventh'))
        return self.screen_manager


if __name__ == '__main__': #runs app
    MyApp().run()
