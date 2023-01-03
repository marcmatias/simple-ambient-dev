# SimpleAmbientDev

A simple ambient for web development with docker and a lite-server watching files changes

## Start

First run will need to create an `.env` file to set users UID GID in `docker-compose.yml`
```bash
    cp env-copy .env
```

Now we can build and run docker containers
```bash
    # Build/Up container with base packages to start work
    make up

    # Run lite-server. This will watch all html, css and js files in root folder
    # http://localhost:3000/templates/file_name.html will show template with auto
    # reload every change you make
    make watch
```

HTML files in `templates/*.html` can be accessed with your browser in
`http://localhost:3000/templates/index.html`. Every change will automatiacally refresh
browser. Changes in `templates/assets/css/*.css` files will be captured too.
