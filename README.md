# Js2DArrayOperation
二次元配列の操作

## 処理
配列の内容を追加、変更、削除を行います。

## コード
```
(function() {
    'use strict'

    var team = [["佐藤","鈴木","田中"],["岸田","有森","峯川"],["武田","武藤","神田"]];
    console.log(team);
    console.log("チーム数は" + team.length + "チームです。");
    console.log();

    console.log("*** 追加 ***");
    team.push(["芥川","太宰","直木"]);
    team[0].push("田沢");
    console.log(team);
    console.log("チーム数は" + team.length + "チームです。");
    console.log();

    console.log("*** 変更 ***");
    team[0][2] = "佐川";
    console.log(team);
    console.log("チーム数は" + team.length + "チームです。");
    console.log();

    console.log("*** 削除 ***");
    team.pop(3);
    team[2].splice(1, 1);
    console.log(team);
    console.log("チーム数は" + team.length + "チームです。");

})();
```

## 出力結果  
```
[ [ '佐藤', '鈴木', '田中' ],
  [ '岸田', '有森', '峯川' ],
  [ '武田', '武藤', '神田' ] ]
チーム数は3チームです。

*** 追加 ***
[ [ '佐藤', '鈴木', '田中', '田沢' ],
  [ '岸田', '有森', '峯川' ],
  [ '武田', '武藤', '神田' ],
  [ '芥川', '太宰', '直木' ] ]
チーム数は4チームです。

*** 変更 ***
[ [ '佐藤', '鈴木', '佐川', '田沢' ],
  [ '岸田', '有森', '峯川' ],
  [ '武田', '武藤', '神田' ],
  [ '芥川', '太宰', '直木' ] ]
チーム数は4チームです。

*** 削除 ***
[ [ '佐藤', '鈴木', '佐川', '田沢' ],
  [ '岸田', '有森', '峯川' ],
  [ '武田', '神田' ] ]
チーム数は3チームです。
```
  
## 開発環境
| 開発ツール |  |
|:-|:-|
| OS | Windows10 |
| 仮想化ソフト | Oracle VM VirtualBox 5.2 |
| 構築ソフト | Vagrant 2.0.2 |
| 仮想化上OS | CentOS 6.9 |
| SSHクライアント | PuTTY 0.6.8 |
| FTPクライアント | Cyberduck 6.3.5 |
| エディタ | Atom 1.24.0 |
| 開発言語 | Java Script |
| Js環境 | Node.js 8.10.0 |
