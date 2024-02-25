# Iqro-e_commerce

# node -version

    20.10.0

### Installation Instructions

Follow these steps to install and run the project:

1. **Install Dependencies**:

```
yarn install
```

2. **Run the Project**:

```
yarn run dev
```

3. **Build the Project**:

```
yarn run build
```

### Building Commands for docker:

1. **Build the Docker image**:

```
docker build -t e_commerce_front .
```

2. **Run Docker Container**:

```
docker run -p 3000:3000 e_commerce_front .
```

[//]: # ()

[//]: # (```)

[//]: # (docker run -p 8080:80 --name e_commerce_front -d e_commerce_front)

[//]: # (```)

[//]: # ()

[//]: # (3. **Logni ko'rish uchun**:)

[//]: # ()

[//]: # (```)

[//]: # (   docker logs -f e_commerce_front)

[//]: # (```)

[//]: # ()

[//]: # (4. **Agar log da error ko'rsatmasa baruzerda tekshiramiz**:)

[//]: # ()

[//]: # (```)

[//]: # (localhost:8080)

[//]: # (```)

[//]: # ()

[//]: # (5. **Agar oldin deploy qilgan bo'lsangiz unda ishlab turga container ni to'xtatib o'chiramiz va tepadagi)

[//]: # (   1,2,3-bosqichdagi)

[//]: # (   ishlarni qaytaramiz**:)

[//]: # ()

[//]: # (```)

[//]: # (docker stop e_commerce_front && docker rm e_commerce_front)

[//]: # (```)
