function like(x) {
    x.classList.toggle("fas");
    x.classList.toggle("text-danger");
}

function save(x) {
    x.classList.toggle("fas");
    x.classList.toggle("text-primary");
}


function certificate() {
    let nameValue = document.getElementById("nameInput").value;
    let courseValue = document.getElementById("courseInput").value;
    // console.log(nameValue,courseValue);
    document.getElementById("name").innerHTML=nameValue;
    document.getElementById("course").innerHTML=courseValue;
    document.getElementById("course2").innerHTML=courseValue;

    let developerText = "Certified "+ courseValue +" Developer";

    document.getElementById("developText").innerHTML=developerText;

    let date = new Date();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let year = date.getFullYear();

    let showdate = day+"/"+month+"/"+year;
    document.getElementById("date").innerHTML=showdate;

    document.getElementById("certificate").style.display="block";
    document.getElementById("btnCerti").style.display="block";
    document.getElementById("formcerti").style.display="none";

    // console.log(month,day,year);
}