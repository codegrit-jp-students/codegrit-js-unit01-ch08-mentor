//グローバル変数
const LOCAL_SWITCH = "Switch文の「case」の中のブロックスコープ!!"; //ID 0
const LOCAL_BOB =  "ここはグローバルな関数「bob()」ローカル変数から連絡!!"; //ID 1
const GLOBAL = "グローバル変数(定数)「whatBobSays」で連絡!！"; //ID 2
const LOCAL_NEST_FUNCTION = 'グローバルな関数「bob()」の中で作られた関数!!'; //ID 3
const LOCAL_FOR = "ここはfor文のブロックスコープにあるローカル変数から連絡!!"; //ID 4
const LOCAL_OBJ = "オブジェクトで設定したオブジェクトメソッドで連絡中!!"; //ID 5

//吹き出しの番号を指定するID
let talkID = 0;
var whatBobSays =GLOBAL;

//起動時に呼ばれる
window.onload= function(){
    //起動時に呼び出す関数
    bob();
}

//talkIDに応じてBobの発する言葉を決める関数
function bob(){

    const  whatBobSays = LOCAL_BOB;
    const _whatBobSays = whatBobSays;

    for(let talkID=0; talkID<=5; talkID++){

        const  whatBobSays = LOCAL_FOR;

        switch(talkID){

            case 0:{
            //switch文をブロック{}で囲むことでローカル変数を作成可能。
            const whatBobSays =LOCAL_SWITCH;
            setDialog(whatBobSays,talkID);
            }
            break;
            case 1:
                //他の変数を介することで取得可能。ただし通常はやはり変数名を買えるはずなのでこのようなことはしなし。
                setDialog(_whatBobSays,talkID);
            break;
            case 2:{
                //varを使ったグローバル変数はwindowのプロパティで、これはthisを使って取得できる。
                setDialog(this.whatBobSays,talkID);
                }
            break;
            case 3:{
                //無名関数で定義。ブロックの中にあるので同じ名前で変数をつけても問題はない。
                const whatBobSays = function(){
                    const whatBobSays = LOCAL_NEST_FUNCTION;
                    return whatBobSays;
                };
                setDialog(whatBobSays(),talkID);
            }
            break;
            case 4:{
                //自身のスコープに存在しなければ一番近い外側のスコープから順番に探して行きます。これをスコープチェーンと言います。
                    setDialog(whatBobSays,talkID);
                }
            break;
            default:{
                //オブジェクトメソッドを作成する際はthisの使い方に注意する
                const whatBobSays = {
                    word:LOCAL_OBJ,
                    whatBobSays: function(){
                      return this.word;
                  }
                };
                setDialog(whatBobSays.whatBobSays(),talkID);
                }
             break;
        }
    }
}
//「発言する文字列」「発言を識別する番号」を入力すると
function setDialog(whatHeSays,talkID){
    if(talkID<=5){
        let bobSays = document.getElementsByClassName("bob-says");
        //Bobの吹き出しに文字列を表示
         bobSays[talkID].firstElementChild.innerHTML = whatHeSays;
         console.log(talkID);
         talkID++;
    }
}
