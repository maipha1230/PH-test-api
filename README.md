# PH-test-api
 
สามารถทดสอบระบบได้ที่ http://203.158.201.117/ (username: admin, password: princh@dmin)

หากต้องการรันบน localhost 

ทำการ import ไฟล์ ph-test_db.sql ลง database

แก้ไฟล์ .env 

PORT = 3001 // port ของ server

DB_NAME = "ph-test" // ชื่อ database

DB_USER = "root" // username ของ database

DB_PASSWORD = "" // รหัสผ่านของ database

JWT_SECRET = "ph-test" // secret ของ jwt

ในส่วนของ host database จะทำการรันบน localhost หรือ 127.0.0.1

จากนั้นที่ termial พิมพ์ npm install เพื่อติดตั้ง package และ npm start เพื่อรันโปรเจกต์

ในการรันบน localhost จะใช้ username: admin, password: princh@dmin

