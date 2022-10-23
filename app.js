const low_limit = document.querySelector("#low");
const top_limit = document.querySelector("#top");
const palindrome_btn = document.querySelector(".palindrome-btn");
const perfect_btn = document.querySelector(".perfect-btn");
const palindromeDom = document.querySelector(".palindrome");
const perfectDom = document.querySelector(".perfect");

const palindrome = () => {
  let palindrome_list = [];
  palindromeDom.innerHTML = "";
  console.log(low_limit.value);
  for (let i = low_limit.value ?? 1; i <= top_limit.value; i++) {
    if (String(i) == String(i).split("").reverse().join("")) {
      if (String(i) != "") {
        palindrome_list.push(i);
        palindromeDom.innerHTML += `${i} <br>`;
      }
    }
  }
  console.log(palindrome_list);
};

const perfect = () => {
  let perfect_list = [];
  perfectDom.innerHTML = "";
  console.log(low_limit.value);
  for (let i = low_limit.value ?? 1; i <= top_limit.value; i++) {
    check_list = []
    sum = 0
    if (i==0) continue;
    for (let y=0; y<i; y++ ){
        if (i%y == 0){
            check_list.push(y)
        }
    }
    check_list.forEach(element => {
        sum+=element
     });

    if (i==sum){
        perfect_list.push(i);
        perfectDom.innerHTML += `${i} <br>`;
    }
  }
  console.log(perfect_list);
};

palindrome_btn.addEventListener("click", palindrome);
perfect_btn.addEventListener("click", perfect);

console.log(low_limit.value);
console.log(top_limit.value);
