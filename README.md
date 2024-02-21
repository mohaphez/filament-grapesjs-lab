
## How to run the lab

1. Clone the repository
```bash
  git clone https://github.com/mohaphez/filament-grapesjs-lab.git
```
2. Open the terminal and navigate to the repository

4. Run the following command to install the required packages
```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```

5. Run the following command to start the server
```bash
./vendor/bin/sail up -d
```

6. Run the following command to start the server
```bash
./vendor/bin/sail composer update
```

7. Run the following command to install the node packages
```bash
./vendor/bin/sail npm -C packages/filament-grapesjs-v3 install 
```

8. Run the following command to npm run dev
```bash
./vendor/bin/sail npm -C packages/filament-grapesjs-v3 run dev
```

6. Run the following command to build the assets
```bash
   ./vendor/bin/sail artisan filament:assets
```

7. Access to admin panel with this url and credential

```bash
http://localhost/admin

Username: admin@example.com
Password: password
```
