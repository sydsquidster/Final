var responseDiv= document.body.querySelector(".response");


document.body.querySelector(".butt").addEventListener("click", function(){
    var TextValueUser = document.body.querySelector(".inputuser").value;
    var TextValuePass = document.body.querySelector(".inputpass").value;
    if(TextValueUser ==="cool" && TextValuePass ==="password"){
        createNav();
        createWrapper();
        navigate("Grade View");
        document.getElementById("input").style.display = "none";
    } else {
        responseDiv.innerHTML = "Wrong username or password"
    }
})

var pages=["Grade View" , "Add Grade"];

function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);

    document.body.appendChild(nav);

    function createButton(pg){
        var button = document.createElement("button");
        button.innerHTML=pg;
        button.addEventListener("click" , function(){
            navigate(pg);
        })
        nav.appendChild(button);
    }
}

function createWrapper(){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    if(pg==="Grade View") {
        viewPage()
    }else if(pg==="Add Grade"){
        addPage()
    }
}

function viewPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    header.innerHTML="Grades";
    wrapper.appendChild(header);
}


function addPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML = "Add Grades";
    wrapper.appendChild(header);

    var student = document.createElement("input");
    student.setAttribute("type" , "text");
    student.setAttribute("placeholder" , "Student Name");

    var grade = document.createElement("input");
    grade.setAttribute("type" , "text");
    grade.setAttribute("placeholder" , "Grade");

    wrapper.appendChild(student);
    wrapper.appendChild(grade);


    var btn = document.createElement("Button");
    btn.innerHTML = "Submit Grade";
    var submitted = document.createElement("h3");
    wrapper.appendChild(submitted);
    btn.addEventListener("click" , function() {
        if(student.value.length > 1){
            if(isNaN(Number(grade.value)) <= 0 && (isNaN(Number(grade.value >= 100)))){
                list.push({grade: student.value, note: grade.value})
                renderList();

            }else if(isNaN(Number(grade.value)) === true){
                submitted.innerHTML = "Type a proper grade.";
            }
        }else if (student.value.length === Number){
            submitted.innerHTML = "Type a proper student name.";
        }

    })

    wrapper.appendChild(btn);


    var submittedGrade = document.createElement("h4");
    wrapper.appendChild(submittedGrade);
    var list=[{grade: "" , note: ""}];

    function renderList(){
        submittedGrade.innerHTML = "";
        for (var i=0; i<list.length; i++){
            var ele = document.createElement("div");
            ele.innerHTML = list[i].grade + " " + list[i].note;
            submittedGrade.appendChild(ele);

        }
    }

}


