from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput

class SearchPage(BoxLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.orientation = "vertical"
        self.add_widget(Label(text="search ingredient below", size_hint_y=None, height=30))
        self.ingredient_input = TextInput(multiline=False, height=30)
        self.add_widget(self.ingredient_input)

class CSA(App):
    def build(self):
        return SearchPage()

if __name__ == '__main__':
    CSA().run()
