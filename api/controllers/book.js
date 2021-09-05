// BookModel取得処理をインポート
import { getBooks } from "../models/bookModel.js";

// 全書籍情報を取得
export const showBooks = (req, res) => {
    getBooks((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
