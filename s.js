



function z() {
    document.head.innerHTML=`
    <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link id="favicon" rel="icon" href="7.png">
    <title>Les Cours De PIE</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="style.css">




 
    `
    document.addEventListener("DOMContentLoaded", function() {
      const faviconElement = document.getElementById('favicon');
      if (faviconElement) {
          localStorage.setItem('savedFavicon', faviconElement.getAttribute('href'));
      }
  });
  
  function updateFavicon(newIcon) {
      const faviconElement = document.getElementById('favicon');
      if (faviconElement) {
          faviconElement.href = newIcon;
          localStorage.setItem('savedFavicon', newIcon);
      }
  }
  
  // استخدم هذه الوظيفة عند الحاجة لتحديث الأيقونة
  updateFavicon("7.png");
   
    document.getElementsByClassName("button")[0].innerHTML ='<button onclick="b()" style="border:1px solid white; background-color: black;"><img src="2.png" alt="" style="border:none;height: 40px;"></button>';
    document.getElementsByClassName("navbar")[0].style.backgroundColor = 'black';
    document.getElementsByClassName("navbar-toggler")[0].style.backgroundColor = '#ebc88d';
    document.getElementsByClassName("button")[0].style.background = "black";
    let i= document.getElementsByClassName("a");
   

      // Appliquer les styles à chaque lien
      Array.from(i).forEach(link => {
          link.style.textDecoration = "none";
          // link.style.fontSize = "23px";
          // link.style.fontWeight = "bold";
          link.style.color = "#ebc88d";
          link.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";

          // Ajouter un style au survol
          link.addEventListener("mouseover", () => {
              link.style.color = "#9c7941";
          });

          link.addEventListener("mouseout", () => {
              link.style.color = "#ebc88d"; // Restaurer la couleur initiale
          });
      });
      let l = document.querySelectorAll("h1");
      l.forEach(link => {
        link.style.color = "#9c7941";
      });
      let h = document.querySelectorAll("hr");
      h.forEach(link => {
        link.style.backgroundColor = "#ebc88d";
      });
      let d1= document.getElementsByClassName("col-md-5");
      Array.from(d1).forEach(link => {
  link.style.background = "rgba(0,0,0,.4)";
  link.style.color = "#ebc88d";
  link.style.textShadow = "2px 2px 2px black";
});
      let b = document.getElementsByClassName("b");
      Array.from(b).forEach(link => {
        link.style.backgroundColor = "#ebc88d";
        link.style.color = "black";
        link.style.boxShadow = "-10px 10px 10px 5px  #9c7941"; // Ombre
        link.style.border = "2px solid #9c7941"; 

      });
      let foter = document.getElementsByClassName("foter");
      Array.from(foter).forEach(link => {
        link.style.backgroundColor = "rgba(21,12,7,0.65)";
        link.style.color = "#ebc88d";
      });




      localStorage.setItem("theme", "dark");
      let mediaQuery = window.matchMedia("(max-width: 726px)");
    
    if (mediaQuery.matches) {
        document.body.style.backgroundImage = "url('44.png')";
        localStorage.setItem("background", "44.png"); // حفظ الخلفية
    } else {
        document.body.style.backgroundImage = "url('4.png')";
        localStorage.setItem("background", "4.png"); // حفظ الخلفية
  //document.body.style.backgroundImage = "url('4.png')";}
}

  document.getElementsByClassName("navbar")[0].style.backgroundColor = 'black';



function updateBackground() {
  let mediaQuery = window.matchMedia("(max-width: 726px)");
  
  if (mediaQuery.matches) {
      document.body.style.backgroundImage = "url('44.png')";
      localStorage.setItem("background", "44.png"); // حفظ الخلفية
  } else {
      document.body.style.backgroundImage = "url('4.png')";
      localStorage.setItem("background", "4.png"); // حفظ الخلفية
  }
}

// تشغيل الوظيفة عند تحميل الصفحة
window.onload = function() {
  let savedBackground = localStorage.getItem("background");
  if (savedBackground) {
      document.body.style.backgroundImage = `url('${savedBackground}')`;
  } else {
      updateBackground(); // إذا لم يكن هناك قيمة محفوظة، نفذ التحقق العادي
  }
};

// تشغيل الوظيفة عند تغيير حجم النافذة
window.matchMedia("(max-width: 726px)").addEventListener("change", updateBackground);

}


  
  function b(){
    document.head.innerHTML=`
    <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link id="favicon" rel="icon" href="6.png">
    <title>Les Cours De PIE</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="style.css">

    `
    document.addEventListener("DOMContentLoaded", function() {
      const faviconElement = document.getElementById('favicon');
      if (faviconElement) {
          localStorage.setItem('savedFavicon', faviconElement.getAttribute('href'));
      }
  });
  
  function updateFavicon(newIcon) {
      const faviconElement = document.getElementById('favicon');
      if (faviconElement) {
          faviconElement.href = newIcon;
          localStorage.setItem('savedFavicon', newIcon);
      }
  }
  
  // استخدم هذه الوظيفة عند الحاجة لتحديث الأيقونة
  updateFavicon("6.png");

// تشغيل الوظيفة عند تحميل الصفحة

    //document.body.style.backgroundImage = "none";
       //document.body.style.backgroundImage = "url('5.png')";
       //document.body.style.backgroundRepeat = "no-repeat";
      // document.body.style.backgroundSize = "cover";
    document.getElementsByClassName("button")[0].innerHTML ='<button onclick="z()" style=" border:1px solid black; height: 40px; background-color: white;margin=0px;"><img src="3.png" alt=""  style="margin=0px;height: 30px;" ></button>';
    document.getElementsByClassName("navbar")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("navbar-toggler")[0].style.backgroundColor = 'white';
    let i= document.getElementsByClassName("a");
   

      // Appliquer les styles à chaque lien
      Array.from(i).forEach(link => {
            link.style.textDecoration = "none";
           // link.style.fontSize = "23px";  
             //link.style.fontWeight = "bold";
            link.style.color = "#a0d30c";
            link.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";

            // Ajouter un style au survol
            link.addEventListener("mouseover", () => {
                link.style.color = "#377201";
            });

            link.addEventListener("mouseout", () => {
                link.style.color = "#a0d30c"; // Restaurer la couleur initiale
            });
        });
        let l = document.querySelectorAll("h1");
      l.forEach(link => {
        link.style.color = "#377201";
      });
      let h = document.querySelectorAll("hr");
      h.forEach(link => {
        link.style.backgroundColor = "#377201";
      });
      let d1= document.getElementsByClassName("col-md-5");
      Array.from(d1).forEach(link => {
  link.style.background = "rgba(255, 255, 255, 0.71)";
  link.style.color = "#696355";
  link.style.textShadow = "2px 2px 2px rgb(255 255 255)";
});
let b = document.getElementsByClassName("b");
      Array.from(b).forEach(link => {
        link.style.backgroundColor = "#828284";
        link.style.color = "white";
        link.style.boxShadow = "-10px 10px 10px 5px  #9b9a95cc"; // Ombre
        link.style.border = "2px solid white"; 

      });
      let foter = document.getElementsByClassName("foter");
      Array.from(foter).forEach(link => {
        link.style.backgroundColor = "rgb(213 213 211 / 58%)";
        link.style.color = "#212322";
      });



      localStorage.setItem("theme", "light");
      let mediaQuery = window.matchMedia("(max-width: 726px)");
    
    if (mediaQuery.matches) {
        document.body.style.backgroundImage = "url('55.png')";
        localStorage.setItem("background", "55.png"); // حفظ الخلفية
    } else {
        document.body.style.backgroundImage = "url('5.png')";
        localStorage.setItem("background", "5.png"); // حفظ الخلفية
    }
 // document.body.style.backgroundImage = "url('5.png')";
  document.getElementsByClassName("navbar")[0].style.backgroundColor = 'white';


  function updateBackground() {
    let mediaQuery = window.matchMedia("(max-width: 726px)");
    
    if (mediaQuery.matches) {
        document.body.style.backgroundImage = "url('55.png')";
        localStorage.setItem("background", "55.png"); // حفظ الخلفية
    } else {
        document.body.style.backgroundImage = "url('5.png')";
        localStorage.setItem("background", "5.png"); // حفظ الخلفية
    }
}

// تشغيل الوظيفة عند تحميل الصفحة
window.onload = function() {
    let savedBackground = localStorage.getItem("background");
    if (savedBackground) {
        document.body.style.backgroundImage = `url('${savedBackground}')`;
    } else {
        updateBackground(); // إذا لم يكن هناك قيمة محفوظة، نفذ التحقق العادي
    }
};

// تشغيل الوظيفة عند تغيير حجم النافذة
window.matchMedia("(max-width: 726px)").addEventListener("change", updateBackground);


     }


function activateVideoLinks() {
  document.querySelectorAll(".video-link").forEach(link => {
      link.addEventListener("click", function(event) {
          //event.preventDefault();
          //let videoSrc = this.getAttribute("href");
          //let width = window.innerWidth;  // عرض النافذة الحالية
          //let height = window.innerHeight; // ارتفاع النافذة الحالية
          //let newWindow = window.open("videoPlayer.html?video=" + encodeURIComponent(videoSrc), "_blank");
      });
  });
}


/*window.onload = function () {
    if (performance.navigation.type === 1) { // تحقق مما إذا كان هناك تحديث للصفحة
        window.location.href = "index.html"; // الانتقال إلى `index.html` فقط عند التحديث
    }
};
*/

window.onload = function () {

   if (performance.navigation.type === 1) { // تحقق مما إذا كان هناك تحديث للصفحة
        window.location.href = "index.html"; // الانتقال إلى `index.html` فقط عند التحديث
    }
activateVideoLinks();
  const savedTheme = localStorage.getItem("theme") || "light"; // استرجاع آخر وضع تم حفظه
  applyTheme(savedTheme);
};

function applyTheme(theme) {
  if (theme === "dark") {
      z(); // تطبيق الوضع الداكن فقط إذا كان محفوظًا
  } else {
      b(); // تطبيق الوضع الفاتح فقط إذا كان محفوظًا
  }
  
}




  