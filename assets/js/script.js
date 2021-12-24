const fireworks = ['⠄', '⡢', '⢑', '⠈', '⠀', '⢀', '⣠', '⣤', '⡶', '⠞', '⠋', '⠁', '⠀', '⠈', '⠙', '⠳', '⣆', '⡀', '⠀', '⠆', '⡷', '⣹', '⢈', '⠀', '⠐', '⠪', '⢅', '⡀', '⠀'];
var fire_index = 0;

function startTime() {
  document.title = fireworks[fire_index];
  var body = document.getElementsByTagName("BODY")[0],
    h2 = document.getElementsByTagName("H2"),
    pre = document.getElementsByTagName("PRE"),
    p = document.getElementsByTagName("P"),
    today = new Date(),
    h = today.getHours(),
    m = today.getMinutes(),
    s = today.getSeconds(),
    char = document.getElementById("char");
  if (h >= 18 || h <= 5) {
    body.style.backgroundColor = "#1e1e1e";
    h2[0].style.color = "#faf6e9";
    pre[0].style.color = "#faf6e9";
    pre[1].style.color = "#faf6e9";
    p[0].style.color = "#faf6e9";
    p[1].style.color = "#faf6e9";
    p[2].style.color = "#faf6e9";
    p[3].style.color = "#faf6e9";
    p[4].style.color = "#faf6e9";
  }
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + "</br>" + m;

  setTimeout(startTime, 300);
  fire_index++;
  if(fire_index == fireworks.length){
    fire_index = 0
  }
}

function checkTime(x) {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}

let time = new Date(),
  jam = time.getHours();

let i = 0,
  moo = 0,
  txt = "りんさんおはようございます！！",
  txt1 = "りんさんこんにちは！！",
  txt2 = "りんさんこんばんは！！",
  txt3 = "なぜりんさんはまだ寝ていないのですか？？",
  speed = 150;

function charSay() {
  let asd = document.getElementById("chartext"),
    char = document.getElementById("char");

  if (moo == 0) {
    setTimeout(() => {
      asd.style.opacity = "0";
    }, 500);
    setTimeout(() => {
      asd.innerHTML = "また今度ね、、";
    }, 1500);
    setTimeout(() => {
      asd.style.opacity = "1";
    }, 2000);
    $.get("cat_2.txt", function (data) {
      char.innerHTML = data;
    });
    moo = 1;
  } else {
    setTimeout(() => {
      asd.style.opacity = "0";
    }, 500);
    setTimeout(() => {
      asd.innerHTML = "ニャー〜";
    }, 1500);
    setTimeout(() => {
      asd.style.opacity = "1";
    }, 2000);
    $.get("cat_3.txt", function (data) {
      char.innerHTML = data;
    });
  }
}

function typeWriter() {
  if (jam >= 4 && jam < 10) {
    if (i == 4) {
      document.getElementById("greeting").innerHTML += " 🌻</br>";
    }
    if (i < txt.length) {
      document.getElementById("greeting").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  if (jam >= 10 && jam < 18) {
    if (i == 4) {
      document.getElementById("greeting").innerHTML += " 🌞</br>";
    }
    if (i < txt1.length) {
      document.getElementById("greeting").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  if (jam >= 18 && jam < 23) {
    if (i == 4) {
      document.getElementById("greeting").innerHTML += " 🌝</br>";
    }
    if (i < txt2.length) {
      document.getElementById("greeting").innerHTML += txt2.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  if (jam >= 23) {
    if (i == 6) {
      document.getElementById("greeting").innerHTML += " 👻</br>";
    }
    if (i < txt3.length) {
      document.getElementById("greeting").innerHTML += txt3.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  if (jam >= 0 && jam < 4) {
    if (i == 6) {
      document.getElementById("greeting").innerHTML += " 👻</br>";
    }
    if (i < txt3.length) {
      document.getElementById("greeting").innerHTML += txt3.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

var kotobaka = [
  "もしもし",
  "こんにちは、ナンダと申します！",
  "なんでしょうか？",
  "ごめんなさい!",
  "事故に会いました！",
  "ふらふらしています！",
  "血液型何ですか？俺はO型です！",
  "何かアレルギーがありますか？",
  "１＋５＝ 🍓",
  "どこが痛みますか?",
  "いらっしゃいませ！",
  "少々お待ちください、どちら様でしょうか？",
  "どこへ行きたいですか？",
  "りん様にお話たいのですが？",
  "旅行の目的は何ですか？",
  "はい、どうぞ！",
  "コーヒーをいただけますか？",
  "ここには何を書けばいいですか？",
  "何か手伝いましょか？",
  "心配しないでください！",
  "俺を待たないでください！",
  "たとえ雨が降っても、行かなければならない！",
  "いつでも来てください！",
  "天気が晴れたら、散歩しましょう！",
  "いつ来ましたか？",
  "俺はね、日本語ができませんよ！",
  "今何歳ですか？",
  "『生活』この漢字を読むことができますか？",
  "ごきげんいかがですか？",
  "どうして？",
  "どうしてユベ来なかったのですか？",
  "あの場所の名前は何ですか？",
  "カバンの中に本と鉛筆がありますね？",
  "机の下にはちくんがいますか？",
  "机の上にはちくんがいますか？",
  "はちくんは元気ですか？",
  "これはりんさんのためのwebsiteですよ！",
  "りんさんはきれいですね、",
  "俺はインドネシア人ですよ！",
  "お疲れ様でした！",
  "いってらっしゃい！",
  "またいらっしてください！",
  "最近どうしていますか？",
  "インドネシアへ行ったことがありますか？",
  "ここは暑いよ！",
  "好きな食べ物がありますか？",
  "嫌いな食べ物がありますか？",
  "りんさんは何がほしいですか？",
  "学校をさぼってダメですよ！",
  "ここで座ってもいいですか？",
  "本を読みなさい！",
];

let xyz = 0,
  jarak = 52,
  minimal = 0,
  rx = Math.floor(Math.random() * jarak) + minimal;

function nezumi() {
  if (xyz < kotobaka[rx].length) {
    document.getElementById("kotoba").innerHTML += kotobaka[rx].charAt(xyz);
    xyz++;
    setTimeout(nezumi, speed);
  }
}

function getWeather(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a5c8d7374c83319c33e3e0819d4edde`;
  let pre = document.getElementById("icon");
  document.getElementById("city").innerHTML = city;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let main = result["main"],
        sparator = " ",
        breakline = "</br>",
        temp = sparator + main["temp"] + " °C",
        humidity = sparator + main["humidity"] + " %",
        feelsLike = sparator + main["feels_like"] + " °C",
        windSpeed = sparator + result["wind"]["speed"] + " m/s";

      let weather = result["weather"];
      //console.log(result);

      for (i in weather) {
        let icon = weather[i]["icon"];
        if (icon == "02n" || icon == "01n") {
          pre.classList.add("c" + icon);
        } else if (icon.includes("n")) {
          let replaced = icon.replace("n", "d");
          pre.classList.add("c" + replaced);
        } else {
          pre.classList.add("c" + icon);
        }
        document.getElementById("main").innerHTML =
          weather[i]["description"] +
          temp +
          " | like" +
          feelsLike +
          breakline +
          "wind" +
          windSpeed +
          " | humidity" +
          humidity;
      }
      typeWriter();
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function getCity() {
  return new Promise((resolve, reject) => {
    fetch("https://ipapi.co/json/")
      .then(function (response) {
        response.json().then((jsonData) => {
          resolve(jsonData);
        });
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

async function asyncCall() {
  const result = await getCity();
  getWeather(result["city"], result["country"]);
}

asyncCall();
$.get("cat_1.txt", function (data) {
  char.innerHTML = data;
});
