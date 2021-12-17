const fs = require('fs');
let KhoaHoc = require("./KhoaHoc.json");

class Course {
    all() {
        try {
            return KhoaHoc;
        } catch (error) {
            console.log('error in download KhoaHoc: ', error.message);
        }
    }

    upload() {
        try {
            fs.writeFile('src/models/KhoaHoc.json', JSON.stringify(KhoaHoc), (err) => {
                if (err) {
                    throw err;
                }
                else KhoaHoc = require("./KhoaHoc.json");
            });
        } catch (error) {
            console.log('error in upload KhoaHoc: ', error.message);
        }
    }

    getCourseByID(id) {
        try {
            for (var i = 0; i < KhoaHoc.KhoaHoc.length; i++) {
                if (KhoaHoc.KhoaHoc[i].KhoaHocID === id) return KhoaHoc.KhoaHoc[i];
            }
        } catch (error) {
            console.log('error in KhoaHoc: ', error.message);
        }
    }

    SortByRate() {
        var check = false;
        do {
            for (var i = 0; i < KhoaHoc.KhoaHoc.length - 1; i++) {
                if (parseFloat(KhoaHoc.KhoaHoc[i].DiemDanhGia) > parseFloat(KhoaHoc.KhoaHoc[i+1].DiemDanhGia))
                {
                    [KhoaHoc.KhoaHoc[i].DiemDanhGia, KhoaHoc.KhoaHoc[i+1].DiemDanhGia] = [KhoaHoc.KhoaHoc[i+1].DiemDanhGia, KhoaHoc.KhoaHoc[i].DiemDanhGia];
                }
            }
        } while (check);
    }

    SortByDate() {
        var check = false;
        do {
            for (var i = 0; i < KhoaHoc.KhoaHoc.length - 1; i++) {
                if (Date.parse(KhoaHoc.KhoaHoc[i].NgayBatDau) < Date.parse(KhoaHoc.KhoaHoc[i+1].DiemDanhGia))
                {
                    [KhoaHoc.KhoaHoc[i].DiemDanhGia, KhoaHoc.KhoaHoc[i+1].DiemDanhGia] = [KhoaHoc.KhoaHoc[i+1].DiemDanhGia, KhoaHoc.KhoaHoc[i].DiemDanhGia];
                }
            }
        } while (check);
    }

    
}

module.exports = new Course();