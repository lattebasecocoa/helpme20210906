// 全書籍情報を取得（仮でJSONベタ書き）
export const getBooks = (result) => {
  const results =  {
    "items": [
      {
        "id": "qcZUBAAAQBAJ",
        "title": "しぐさでわかる「ネコの気持ち」",
        "authors": "ニャンコ友の会",
        "price": 550,
        "publisher": "PHP研究所",
        "publishedDate": "2014-02-07",
      }
    ]
  }
  result(results);
}
