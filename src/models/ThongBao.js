const fs = require('fs');
let ThongBao = require("./ThongBao.json");

class Notification {
    all() {
        try {
            return ThongBao;
        } catch (error) {
            console.log('error in download ThongBao: ', error.message);
        }
    }

    upload() {
        try {
            fs.writeFile('src/models/ThongBao.json', JSON.stringify(ThongBao), (err) => {
                if (err) {
                    throw err;
                }
                else ThongBao = require("./ThongBao.json");
            });
        } catch (error) {
            console.log('error in upload ThongBao: ', error.message);
        }
    }

    getNotificationByID(ThongBaoID, KhoaHocID) {
        try {
            for (var i = 0; i < ThongBao.ThongBao.length; i++) {
                if (ThongBao.ThongBao[i].ThongBaoID === ThongBaoID && ThongBao.ThongBao[i].KhoaHocID === KhoaHocID) return ThongBao.ThongBao[i];
            }
        } catch (error) {
            console.log('error in ThongBao: ', error.message);
        }
    }
}

module.exports = new Notification();