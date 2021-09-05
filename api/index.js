// expressをインポート
import express from "express";
// corsをインポート
import cors from "cors";
// ルーターをインポート
import Router from "./routes/routes.js";

// expressの初期処理
const app = express();

// Portを指定
const PORT = 5000;
// Hostを指定
const HOST = '0.0.0.0';

// JSONオブジェクトが使えるように設定
app.use(express.json());
// CORSが使えるように設定
app.use(cors());
// Router設定が使えるように設定
app.use(Router);

// サーバーを待ち受け状態に設定
app.listen(PORT, HOST);
// サーバーの起動確認用のコンソール出力
console.log(`Running on http://${HOST}:${PORT}`);
