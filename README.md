
## How to run the lab

1. Clone the repository
```bash
  git clone 
```
2. Open the terminal and navigate to the repository
3. Run the following command to install the required packages
```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```

4. Run the following command to start the server
```bash
./vendor/bin/sail up -d
```

5. Run the following command to install the node packages
```bash
./vendor/bin/sail npm -C packages/filament-grapesjs-v3 install 
```

6. Run the following command to build the assets
```bash
   ./vendor/bin/sail composer dump
```