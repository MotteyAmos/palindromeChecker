


function check(){
    var input = document.querySelector("#input").value;
    var inputbox = document.querySelector(".input");
    var palindrome = document.querySelector(".palindrome");
    var notPalindrome = document.querySelector(".notPalindrome");
    var inputRearrange = "";

    inputLength = input.length;

    for (let i=inputLength-1; i >-1; i--){
       inputRearrange = inputRearrange.concat(input[i]);
    }

    if (inputRearrange.toLowerCase() === input.toLowerCase()){     
        palindrome.style.display = "block";
        notPalindrome.style.display = "";
    }
    else{
        palindrome.style.display = "";
        notPalindrome.style.display = "block";
    }

}

