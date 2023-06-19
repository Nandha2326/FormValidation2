const form = document.querySelector(".form")

function Validate() {
    form.addEventListener('submit', p => {
        p.preventDefault();
        checkInputs();
    })
}

function checkInputs() {
    // getting ids in variables
    const fnamevalue = document.getElementById("fname");
    const lnamevalue = document.querySelector("#lname");
    const emailvalue = document.querySelector("#email");
    const MobileNovalue = document.querySelector("#MobileNo");
    const Agevalue = document.querySelector("#Age");
    const ProfilePicvalue = document.getElementById('ProfilePic');
    const AddressValue = document.querySelector("#Addre");
    const GenderValue = document.getElementsByName("gender");
    const SkillsValue = document.getElementsByName("Skills");
    const QualificationValue = document.getElementById("Qualification");
    const AgreeValue = document.getElementById("Agreebox");

    //  Trimming Variables
    const fname = fnamevalue.value.trim();
    const lname = lnamevalue.value.trim();
    const email = emailvalue.value.trim();
    const MobileNo = MobileNovalue.value.trim();
    const Age = Agevalue.value.trim();
    const Address = AddressValue.value;
    const Profile = ProfilePicvalue.value.trim();

    //to get Gender Value
    let mygender = "";
    for (const x of GenderValue) {
        if (x.checked) {
            mygender = x.value;
        }
    }
    //to get Skills Value
    let mySkills = [];
    for (const y of SkillsValue) {
        if (y.checked) {
            mySkills.push(y.value);
        }
    }

    //to Validate firstnameValue
    if (fname == "") {
        document.querySelector(' #firstname').innerHTML = "Please Enter firstname";
        document.querySelector("#fname").style.border = "2px solid red";
        // //Jquery Tried
        // $('#alert-fname').removeClass('alert-None');
        // $('#fname').addClass('alertShow2');
    }
    else {
        document.querySelector("#firstname").innerHTML = "";
        document.querySelector("#fname").style.border = "2px solid green";
    }
    //to Validate LastnameValue
    if (lname == "") {
        document.querySelector('#lastname').innerHTML = "Please Enter lastname";
        document.querySelector("#lname").style.border = "2px solid red";
    }
    else {
        document.querySelector("#lastname").innerHTML = "";
        document.querySelector("#lname").style.border = "2px solid green";
    }
    //to Validate EmailValue
    const check1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "") {
        document.querySelector("#mail").innerHTML = "Please Enter Your email !!";
        document.querySelector("#email").style.border = "2px solid red";
    }
    else if (!check1.test(email)) {
        document.querySelector("#mail").innerHTML = "Please Enter Your valid email !!";
        document.querySelector("#email").style.border = "2px solid red";
    }
    else {
        document.querySelector("#mail").innerHTML = "";
        document.querySelector("#email").style.border = "2px solid green";
    }
    //to Validate MobileNo
    const check2 = /^[0-9]{10}$/;
    if (MobileNo == "") {
        document.querySelector('#No').innerHTML = "Please Enter Phone No";
        document.querySelector("#MobileNo").style.border = "2px solid red";
    }
    else if (!check2.test(MobileNo)) {
        document.querySelector('#No').innerHTML = "Please Enter Valid Phone No";
        document.querySelector("#MobileNo").style.border = "2px solid red";
    }
    else {
        document.querySelector("#No").innerHTML = "";
        document.querySelector("#MobileNo").style.border = "2px solid green";
    }
    //to Validate AgeValue
    if (Age == "") {
        document.querySelector('#Agee').innerHTML = "Please Enter Your Age";
        document.querySelector("#Age").style.border = "2px solid red";
    }
    else {
        document.querySelector("#Agee").innerHTML = "";
        document.querySelector("#Age").style.border = "2px solid green";
    }

    //to  Validate Address
    if (Address == "") {
        document.querySelector('#Address').innerHTML = "Please Enter Your Adress";
        document.querySelector("#Addre").style.border = "2px solid red";
    }
    else {
        document.querySelector("#Address").innerHTML = "";
        document.querySelector("#Addre").style.border = "2px solid green";
    }

    //to  Validate Profile
    if (Profile == "") {
        document.querySelector('#Profile').innerHTML = "Please Upload your photo";
    }
    else {
        document.querySelector("#Profile").innerHTML = "";
    }

    //to  Validate Gender
    if (mygender == "") {
        document.querySelector('#alert-gender').innerHTML = "Please Enter Your Gender";
    }
    else {
        document.querySelector("#alert-gender").innerHTML = "";
    }

    //to  Validate Gender
    if (mySkills == "") {
        document.querySelector('#alert-Skills').innerHTML = "Please Enter Your Skills";
    }
    else {
        document.querySelector("#alert-Skills").innerHTML = "";
    }

    //to  Validate QualificationValue
    if (QualificationValue.value) {
        document.querySelector("#alert-Qual").innerHTML = "";
    }
    else {
        document.querySelector('#alert-Qual').innerHTML = "Please Enter Qualification";

    }

    //to  Validate AgreeValue
    if (!AgreeValue.checked) {
        document.querySelector('#Agreebox').style.outline = " 1px solid red";
        document.querySelector('#agww').style.color = "red";
    }
    else {
        document.querySelector('#Agreebox').style.outline = "1px solid green";
        document.querySelector("#agww").style.color = "green";
    }

}
// For Adding ProfilePic 
const Prof = document.getElementById('Prof');
// const ProfilePic = document.getElementById('ProfilePic');
const dt = document.getElementsByClassName('bt')
function changeImage(input) {
    var reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function (e) {
            Prof.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">
        <a class="bt" onclick="deleteImage()"><i class="fa-solid fa-trash rr"></i></a>`;
        }
        reader.readAsDataURL(input.files[0]);
    }
}
// For Delting ProfilePic 
function deleteImage() {
    Prof.innerHTML = "";
    ProfilePic.value = "";
}





