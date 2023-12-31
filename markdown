## マークダウン記法って何がいいの？

マークダウン記法を覚えておくといろいろいいことがあります。256timesでも使うことができるので、積極的に活用しながら、さまざまな記法をマスターしていきましょう！

- エンジニアが使っている主要なサービス（GitHubなど）で広く使われていて、きれいで見やすい文書が書けるようになります。
- 256timesのコメント欄でも使うことができるので、他メンバーに対して見やすい文書やコメントを残すことができます。
- 特にソースコードをコメント欄に貼り付けるとき、マークダウン記法を使っていれば「お！この人は慣れているな！」という印象を他の人に与えることができます。

## 最初に覚えておきたいマークダウン記法3選

最初に覚えておきたいのは以下の3つです。それぞれについて間違えやすいポイントを紹介していきます。

### 見出し

見出しの記号は「パウンド記号（シャープ）」で表現します。なお、「パウンド記号」のあとに半角空白がないとうまく表現できないので気をつけましょう。

### リスト

リストの記号は「ハイフン」を使うといいでしょう。「ハイフン」のあとに半角空白をいれないとうまく表現できないので気をつけましょう。

### ソースコード

ソースコードは「バッククオート」で表現します。複数行のコードを表現したかったら「バッククオート3つ」、文中でソースコードを表現したかったら「バッククオート1つ」で囲います。

たとえば`height`を使ったJavaScriptのソースコードで紹介してみます。

```
const height = 5;

for (let i = 1; i <= height; i++) {
  let row = '';
  row += ' '.repeat(height - i);
  row += '*'.repeat((i * 2) - 1);
  console.log(row);
}
```
学習のコツをシェアしよう！

ここから先はあなたがこれまでに身につけたプログラミング学習のコツを3つ、マークダウン記法を使ってメンバーとシェアしてみましょう。以下を自由に編集してみてください。

- あなたなりの学習のコツ1
**コードを書く前にタスクばらしをする。** 理解できている部分、そうでない部分に気がつくことができる。
- あなたなりの学習のコツ2
**手を動かしながら学習する。** 知識を頭に入れただけでは絶対に上達しない。
- あなたなりの学習のコツ3
**書いたコードをレビューをしてもらう。** 独学では気付けない、新たな学びを得ること多し。









