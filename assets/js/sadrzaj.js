function bar () {
    var burger = document.getElementById("burger");

    let root = document.documentElement;

    burger.onclick = function () {
        if (!burger.classList.contains("is-active"))
            openNav();
        else
            closeNav();
    };

    document.getElementById("sunce").onclick = function () {
        svetlo();
    }

    document.getElementById("mesec").onclick = function () {
        tamno();
    }
    

    var bla = document.getElementById("bla");

    bla.onclick = function(){ closeNav(); }

    function openNav() {
        document.getElementById("burger").classList.add("is-active");
        document.getElementById("sadrzaj").classList.add("otvoreno");
        document.getElementById("bla").style.display="block";
    }

    function closeNav() {
        document.getElementById("burger").classList.remove("is-active");
        document.getElementById("sadrzaj").classList.remove("otvoreno");
        document.getElementById("bla").style.display="none";
    }

    function svetlo(){
        document.getElementById("sunce").classList.remove("tema");
        document.getElementById("mesec").classList.add("tema");
        root.style.setProperty('--pozadina', "#FFFFFF");
        root.style.setProperty('--bojap', "#000000");
    }

    function tamno(){
        document.getElementById("sunce").classList.add("tema");
        document.getElementById("mesec").classList.remove("tema");
        root.style.setProperty('--pozadina', "#111111");
        root.style.setProperty('--bojap', "#CCCCCC");
    }
};