# SimpleAmbientDev

A simple ambient for web development with docker and a lite-server watching files changes

## Make Shortcuts

```bash
    # Up container with base packages to start work
    make up

    # Run lite-server. This will watch all html, css and js files in root folder
    # http://localhost:3000/templates/file_name.html will show template with auto
    # reload every change you make
    make watch
```

## Start

Edit `templates/index.html` file follow `Make Shortcuts` instructions and access
`http://localhost:3000/templates/index.html` and you will see your template auto
updating every code changes you make
