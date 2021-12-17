const fs = require('fs');
const { tmp } = require('npm');
let HocVienKhoaHoc = require("./HocVien_KhoaHoc.json");

class HocVien_KhoaHoc {
    all() {
        try {
            return HocVienKhoaHoc;
        } catch (error) {
            console.log('error in download HocVien_KhoaHoc: ', error.message);
        }
    }

    upload() {
        try {
            fs.writeFile('src/models/HocVien_KhoaHoc.json', JSON.stringify(HocVienKhoaHoc), (err) => {
                if (err) {
                    throw err;
                }
                else HocVienKhoaHoc = require("./HocVien_KhoaHoc.json");
            });
        } catch (error) {
            console.log('error in upload HocVien_KhoaHoc: ', error.message);
        }
    }
    
    Rate(UserID, KhoaHocID, rate) {
        let tmp;
        tmp.UserID = UserID;
        tmp.KhoaHocID = KhoaHocID;
        tmp.DanhGia = toString(rate);
        HocVienKhoaHoc.push(tmp);
        HocVienKhoaHoc.upload();
    }

    getCourseByUser(UserID) {
        let tmp;
        for (var i = 0; i < HocVienKhoaHoc.HocVien_KhoaHoc.length; i++)
        {
            if(HocVienKhoaHoc.HocVien_KhoaHoc[i].UserID === UserID)
            {
                tmp += HocVienKhoaHoc.HocVien_KhoaHoc[i];
            }
        }
        return tmp;
    }
}

module.exports = new HocVien_KhoaHoc();