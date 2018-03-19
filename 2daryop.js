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
