# HVBDS_Test
> Bài test ứng tuyển

# Cấu trúc thư mục

> Gồm 2 thư mục cho 2 project riêng biệt

> ./node-backend/ dùng cho NodeJS backend

> ./vue-frontend/ dùng cho VueJS fronend

## Cài đặt Front-end

``` bash
# Tại folder ./vue-frontend
# install dependencies
npm install

# Khởi tạo server để sử dụng localhost:8080
npm run dev
```

## Cài đặt Back-end

> Config database tại file ./config/config.json

``` bash
# install dependencies
npm install

# Run migration khởi tạo database
npx sequelize db:migrate

# Khởi tạo server để sử dụng localhost:3000
node index.js
```
