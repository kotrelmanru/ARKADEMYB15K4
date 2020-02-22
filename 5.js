findSame(["cat", "listen", "code", "act", "silent", "tac"]);
findSame(["try", "fire", "dark"]);

function findSame(string){
  // cek atring
  // console.log("cek string "+ Array.isArray(string));
  if (Array.isArray(string)) {
    // console.log("array");
    for (var i = 0; i < string.length; i++) {
      var strN=string[i];
      // ubah ke arrayB
      var arrStr = strN.split('');//data yg dibandingkan
      for (var s = 0; s < string.length; s++) {
        if (string[s]!=strN) {
          var result = [];
          var strN2 = string[s];
          var lenStrN2=strN2.length;
          if (strN.length==lenStrN2) {
            var arrStr2 = strN2.split('');
            for (var a = 0; a < arrStr2.length; a++) {
              // arrStr2[a]
              if (strN.indexOf(arrStr2[a])==0) {
                // console.log(strN.indexOf(arrStr2[a]));
                result.push(strN2);
                // console.log(strN2);
              }
            }
          }
            if (result.length=="") {
              console.log("Tidak ditemukan!");
              // console.log(result.length);
            }else {
              console.log(result[0]);
            }

        }
      }
    }
  }
}