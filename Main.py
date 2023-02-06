from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.uix.boxlayout import BoxLayout


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
        top_box = BoxLayout(size_hint=(.5, .18), pos_hint={'x': .25, 'y': .8}) #creates box
        label = Label(text='Search an ingredient below', ) #labels box
        top_box.add_widget(label) #assigns label to box
        self.add_widget(top_box) #makes box a widget
        bot_box = BoxLayout(size_hint=(.5, .05), pos_hint={'x': .25, 'y': .8}) #makes search bar
        self.search = TextInput(text='', multiline=False) #allows text input in search bar
        self.search.bind(on_text_validate=self.update_string) #binds string once user presses enter
        bot_box.add_widget(self.search) #makes search bar a widget
        self.add_widget(bot_box) #makes box for search bar a widget

    def update_string(self, instance): #starts new protocol once user presses enter
        self.user_string = instance.text #assings bound string to self.user_string
        a = self.user_string #makes this a variable we can work with for database fetching
        print(f"The user's text input is: {a}") #prints what user searched in terminal (for testing)

class FourthPage(Screen): #opens fourth page when user clicks 'how our rating system works'
    def __init__(self, **kwargs):
        super().__init__(**kwargs)


class FifthPage(Screen): #opens fifth page when user clicks 'frequently asked questions'
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

class SixthPage(Screen):
    def __init__(self, **kwargs): #opens sixth page when user clicks 'request an ingredient'
        super().__init__(**kwargs)


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
        return self.screen_manager


if __name__ == '__main__': #runs app
    MyApp().run()
