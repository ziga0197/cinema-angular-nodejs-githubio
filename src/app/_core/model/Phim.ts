export class Phim {
    MaPhim: string;
    TenPhim: string;
    Trailer: string;
    HinhAnh: string;
    MoTa: string;
    MaNhom: string;
    NgayKhoiChieu: string;
    DanhGia: number;
    LichChieu: [
        {
            GiaVe: number
            MaLichChieu: number
            MaNhom: string
            MaPhim: number
            MaRap: number
            NgayChieuGioChieu: string
            Rap: {
                MaRap: number,
                TenRap: string,
                SoGhe: number,
                MaNhom: string
            }
            ThoiLuong: number;
        }
    ];
}
