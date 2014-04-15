# Afterglow

Afterglow is a minimal dark Theme for Sublime Text 2 and 3. Also it is a syntax color scheme. The theme is based on the great theme [Spacegray](https://github.com/kkga/spacegray). The syntax color scheme is mostly derived from [idlefingers](http://idlefingers.co.uk/).


## Design & Colors

#### Afterglow default

![Afterglow](Screenshots/Afterglow-default.png)

[View a larger screenshot](https://raw.githubusercontent.com/YabataDesign/afterglow-theme/master/Screenshots/Afterglow-default.png)

#### Afterglow blue

![Afterglow blue](Screenshots/Afterglow-blue.png)

[View a larger screenshot](https://raw.githubusercontent.com/YabataDesign/afterglow-theme/master/Screenshots/Afterglow-blue.png)

#### Afterglow magenta

![Afterglow magenta](Screenshots/Afterglow-magenta.png)

[View a larger screenshot](https://raw.githubusercontent.com/YabataDesign/afterglow-theme/master/Screenshots/Afterglow-magenta.png)

#### Afterglow orange

![Afterglow orange](Screenshots/Afterglow-orange.png)

[View a larger screenshot](https://raw.githubusercontent.com/YabataDesign/afterglow-theme/master/Screenshots/Afterglow-orange.png)

#### Afterglow green

![Afterglow green](Screenshots/Afterglow-green.png)

[View a larger screenshot](https://raw.githubusercontent.com/YabataDesign/afterglow-theme/master/Screenshots/Afterglow-green.png)

*The font used in the screenshots is [__Inconsolata -g__](http://leonardo-m.livejournal.com/77079.html).*


## Installation

### Package Control

The easiest way to install is using [Sublime Package Control](https://sublime.wbond.net/).

* Open `Command Palette` using menu item `Tools -> Command Palette...`, or `Cmd+Shift+P` (OS X) `Ctrl+Shift+P` (Win/Linux)
* Type `Package Control: Install Package`
* Search `Theme - Afterglow`


### Git Installation

Locate your Sublime Text `Packages directory` by using the menu item `Preferences -> Browse Packages...`.

Then, clone the repository using this command:

    git clone https://github.com/Yabatadesign/afterglow-theme/ "Theme - Afterglow"


### Manual installation

* Download the [GitHub .zip](https://github.com/Yabatadesign/afterglow-theme/archive/master.zip)
* Unzip the files and rename the folder to `Theme - Afterglow`
* Find your `Packages` directory using the menu item  `Preferences -> Browse Packages...`
* Copy the folder into your Sublime Text `Packages` directory.


## Activating the Theme

Activate this theme and color scheme by modifying your user preferences file, which you can find using the menu item `Sublime Text -> Preferences -> Settings - User`.

Then add the following code settings, depending on the theme you choose. **(After activating the theme, you must restart Sublime Text.)**

### Settings for Afterglow

    {
        "theme": "Afterglow.sublime-theme",
        "color_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
    }

### Settings for Afterglow-blue

    {
        "theme": "Afterglow-blue.sublime-theme",
        "color_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
    }

### Settings for Afterglow-magenta

    {
        "theme": "Afterglow-magenta.sublime-theme",
        "color_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
    }

### Settings for Afterglow-orange

    {
        "theme": "Afterglow-orange.sublime-theme",
        "color_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
    }

### Settings for Afterglow-green

    {
        "theme": "Afterglow-green.sublime-theme",
        "color_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
    }


## Tab Height Size Options

You can change the height of the file tabs (medium or small) by adding either to your preferences file `Sublime Text -> Preferences -> Settings - User`:

    {
        "tabs_medium": true
    }

or

    {
        "tabs_small": true
    }

![Afterglow Tabs](Screenshots/Afterglow-tabs.png)


## Sidebar Size Options

You can change the font size of the sidebar and the row padding.

To **change the font size** (12, 13 or 14; default size is 11), you must add this to your preferences file `Sublime Text -> Preferences -> Settings - User`:

    {
        "sidebar_size_12": true
    }

or

    {
        "sidebar_size_13": true
    }

or

    {
        "sidebar_size_14": true
    }

![Afterglow Sidebar Size](Screenshots/Afterglow-sidebar-size.png)


To **change the row padding** (medium or large), you must add this to your preferences file `Sublime Text -> Preferences -> Settings - User`:

    {
        "sidebar_row_padding_medium": true
    }

or

    {
        "sidebar_row_padding_large": true
    }

![Afterglow Sidebar Row Padding](Screenshots/Afterglow-sidebar-row-padding.png)


## Markdown

![Afterglow markdown](Screenshots/Afterglow-markdown.png)

#### To enable Afteglow for Markdown

First, **open a markdown(.md) file**, then navigate to `Sublime Text -> Preferences -> Settings - More -> Syntax Specific - User` in the menu bar.

Add to your current settings or replace with the following:

    {
        "color_scheme": "Packages/Theme - Afterglow/Afterglow-markdown.tmTheme",
        "draw_centered": true,
        "draw_indent_guides": false,
        "trim_trailing_white_space_on_save": false,
        "word_wrap": true,
        "wrap_width": 80  // Sets the # of characters per line
    }


## Dock Icon

You can also download a replacement icon for Sublime Text [here](https://github.com/YabataDesign/sublime-text-icon).

![Sublime Text icon](https://raw.githubusercontent.com/YabataDesign/sublime-text-icon/master/Sublime_text_256x256x32.png)


## Retina Resolution UI

Afterglow Theme support retina display.
