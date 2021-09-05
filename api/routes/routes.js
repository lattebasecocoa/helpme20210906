// expressをインポート
import express from "express";

// コントローラーから関数をインポート
import { showBooks } from "../controllers/book.js";

// ルーターの初期設定
const router = express.Router();

// 全書籍情報取得処理を呼び出し
router.get('/books', showBooks);

// ルーターをエクスポート
export default router;
