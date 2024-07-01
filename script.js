function encrypt(){
    var text = document.getElementById("text").value;
    var key =parseInt(document.getElementById("key").value);
    var result = "";
    for(var i=0;i<text.length;i++){
        var code = text.charCodeAt(i);
        result += String.fromCharCode(code+key);
        }
        document.getElementById("encryptResult").innerHTML = result;
        }
 function decrypt(){
         var text = document.getElementById("text2").value;
         var key =parseInt(document.getElementById("key2").value);
         var result = "";
            for(var i=0;i<text.length;i++){
                var code = text.charCodeAt(i);
                result += String.fromCharCode(code-key);
                }
                document.getElementById("decryptResult").innerHTML = result;
                }
