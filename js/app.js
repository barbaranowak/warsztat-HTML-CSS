document.addEventListener("DOMContentLoaded", function() {


    //rozwijane menu

    var o_firmie = document.querySelector(".ofirmie");
    console.log(o_firmie);
    var show_list = document.querySelector(".ul2");
    console.log(show_list);

    o_firmie.addEventListener("mouseover", function(event) {
        show_list.style.display = "block";
    });
    o_firmie.addEventListener("mouseout", function(event) {
        show_list.style.display = "none";
    });

    //boxy w sekcji nr 2

    var box1 = document.querySelector("#white_chair");
    console.log(box1);
    var hide_box1_p = document.querySelector(".box1_p");
    console.log(hide_box1_p);

    box1.addEventListener("mouseover", function(event) {
        hide_box1_p.style.display = "none";
    });
    box1.addEventListener("mouseout", function(event) {
        hide_box1_p.style.display = "block";
    });

    var box2 = document.querySelector("#child");
    var hide_box2_p = document.querySelector(".box2_p");

    box2.addEventListener("mouseover", function(event) {
        hide_box2_p.style.display = "none";
    });
    box2.addEventListener("mouseout", function(event) {
        hide_box2_p.style.display = "block";
    });

    //slider

    var btn_nxt = document.getElementById("nextPicture");
    console.log(btn_nxt);
    var btn_prev = document.getElementById("prevPicture");
    console.log(btn_prev);

    var list_elements = document.querySelectorAll(".chairs_img");
    console.log(list_elements);
    for (var i = 0; i < list_elements.length; i++) {
        console.log(list_elements[i]);
    }

    var index = 0;

    list_elements[0].classList.add("visible");
    console.log(list_elements[0]);

    btn_nxt.addEventListener("click", function(event) {
        list_elements[index].classList.remove("visible");
        index++;
        if (index >= list_elements.length) {
            index = 0;
        }
        list_elements[index].classList.add("visible");
    });

    btn_prev.addEventListener("click", function(event) {
        list_elements[index].classList.remove("visible");
        index--;
        if (index < 0) {
            index = list_elements.length - 1;
        }
        list_elements[index].classList.add("visible");
    });

    //rozwinieta lista drop-down

    var arrow_1 = document.querySelector("#first_arrow");
    console.log(arrow_1);
    var arrow_2 = document.querySelector("#second_arrow");
    console.log(arrow_2);
    var arrow_3 = document.querySelector("#third_arrow");
    console.log(arrow_3);
    var list_1 = document.querySelector("#first_list");
    console.log(list_1);
    var list_2 = document.querySelector("#second_list");
    console.log(list_2);
    var list_3 = document.querySelector("#third_list");
    console.log(list_3);

    arrow_1.addEventListener("click", function(event) {
        list_1.classList.toggle("visible");
    });

    arrow_2.addEventListener("click", function(event) {
        list_2.classList.toggle("visible");
    });

    arrow_3.addEventListener("click", function(event) {
        list_3.classList.toggle("visible");
    });

    //KALKULATOR

    var clair = first_list.querySelector("li:first-child");
    console.log(clair);
    var margarita = first_list.querySelector("li:nth-child(2)");
    console.log(margarita);
    var selena = first_list.querySelector("li:last-child");
    console.log(selena);
    var title = document.querySelector(".title");
    console.log(title);
    var value = document.querySelector(".value");
    console.log(value);

    clair.addEventListener("click", function(event) {
        title.innerText = "Clair chair";
        value.innerText = "249";
        value.dataset.price = "249";
        list_1.classList.toggle("visible");
    });
    margarita.addEventListener("click", function(event) {
        title.innerText = "Margarita chair";
        value.innerText = "299";
        value.dataset.price = "299";
        list_1.classList.toggle("visible");
    });
    selena.addEventListener("click", function(event) {
        title.innerText = "Selena chair";
        value.innerText = "319";
        value.dataset.price = "319";
        list_1.classList.toggle("visible");
    });
    var red = second_list.querySelector("li:first-child");
    console.log(red);
    var black = second_list.querySelector("li:nth-child(2)");
    console.log(black);
    var orange = second_list.querySelector("li:last-child");
    console.log(orange);
    var color = document.querySelector(".color");
    console.log(color);
    var colorValue = document.querySelector(".color_value");
    console.log(colorValue);

    red.addEventListener("click", function(event) {
        color.innerText = "Czerwony";
        colorValue.innerText = "49";
        colorValue.dataset.price = "49";
        list_2.classList.toggle("visible");
    });
    black.addEventListener("click", function(event) {
        color.innerText = "Czarny";
        colorValue.innerText = "0";
        colorValue.dataset.price = "";
        list_2.classList.toggle("visible");
    });
    orange.addEventListener("click", function(event) {
        color.innerText = "Pomarańczowy";
        colorValue.innerText = "59";
        colorValue.dataset.price = "59";
        list_2.classList.toggle("visible");
    });

    var tkanina = third_list.querySelector("li:first-child");
    console.log(tkanina);
    var skora = third_list.querySelector("li:last-child");
    console.log(skora);
    var pattern = document.querySelector(".pattern");
    console.log(pattern);
    var patternValue = document.querySelector(".pattern_value");
    console.log(patternValue);

    tkanina.addEventListener("click", function(event) {
        pattern.innerText = "Tkanina";
        patternValue.innerText = "19";
        patternValue.dataset.price = "19";
        list_3.classList.toggle("visible");
    });

    skora.addEventListener("click", function(event) {
        pattern.innerText = "Skóra";
        patternValue.innerText = "79";
        patternValue.dataset.price = "79";
        list_3.classList.toggle("visible");
    });

    var checkbox_transport = document.querySelector("#transport");
    console.log(checkbox_transport);
    var transport_el = document.querySelector(".transport");
    console.log(transport);
    var transportValue = document.querySelector(".transport_value");
    console.log(transportValue);

    checkbox_transport.addEventListener("click", function() {
        if (transport_el.innerText == "") {
            transport_el.innerText = "Transport";
            transportValue.innerText = "29";
        } else {
            transport_el.innerText = "";
            transportValue.innerText = "";
        }
    });

    var transport = document.querySelector("#transport");
    var clair_price = parseFloat(value.dataset.price);
    console.log(transport.dataset.price);
    console.log(clair_price);
    var suma = 0;
    suma = suma + Number(transport.dataset.price) + Number(clair_price);


    var final_price = document.querySelector(".sum");
    final_price.innerText = suma;


});
