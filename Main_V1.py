from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.boxlayout import BoxLayout

class CSA(App):
    def build(self):
        layout = BoxLayout(orientation='vertical')
        btn1 = Button(text='Button 1')
        btn1 = Button(size_hint=(.4, .3), pos_hint ={'center_x':.5, 'center_y':.5}, background_color = (.9, .6, .8, 1), text="Scan a label")
        btn2 = Button(text='Button 2')
        btn2 = Button(size_hint=(.4, .3), pos_hint ={'center_x':.5, 'center_y':.5}, background_color = (.9, .6, .8, 1), text="Look up an ingredient")
        btn3 = Button(text='Button 3')
        btn3 = Button(size_hint=(.4, .3), pos_hint ={'center_x':.5, 'center_y':.5}, background_color = (.9, .6, .8, 1), text="How our rating system works")
        btn4 = Button(text='Button 4')
        btn4 = Button(size_hint=(.4, .3), pos_hint ={'center_x':.5, 'center_y':.5}, background_color = (.9, .6, .8, 1), text="Request an ingredient")
        btn5 = Button(text='Button 5')
        btn5 = Button(size_hint=(.4, .3), pos_hint={'center_x': .5, 'center_y': .5}, background_color=(.9, .6, .8, 1), text="Frequently asked questions")
        layout.add_widget(btn1)
        layout.add_widget(btn2)
        layout.add_widget(btn3)
        layout.add_widget(btn4)
        layout.add_widget(btn5)
        return layout

if __name__ == '__main__':
    CSA().run()
