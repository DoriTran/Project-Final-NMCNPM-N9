const fs = require('fs');
let NguoiDung = require("./NguoiDung.json");

class User {
    all() {
        try {
            return NguoiDung;
        } catch (error) {
            console.log('error in download User: ', error.message);
        }
    }

    upload() {
        try {
            fs.writeFile('src/models/NguoiDung.json', JSON.stringify(NguoiDung), (err) => {
                if (err) {
                    throw err;
                }
                else NguoiDung = require("./NguoiDung.json");
            });
        } catch (error) {
            console.log('error in upload User: ', error.message);
        }
    }

    getUserByID(id) {
        try {
            for (var i = 0; i < NguoiDung.Users.length; i++) {
                if (NguoiDung.Users[i].UserID === id) return NguoiDung.Users[i];
            }
        } catch (error) {
            console.log('error in User: ', error.message);
        }
    }
}

module.exports = new User();