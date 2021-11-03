var students_names=[];

function submit() {
   var name_1 = document.getElementById("nameofthestudent1").value;
   var name_2 = document.getElementById("nameofthestudent2").value;
   var name_3 = document.getElementById("nameofthestudent3").value;
   var name_4 = document.getElementById("nameofthestudent4").value;
   var name_5 = document.getElementById("nameofthestudent5").value;
   students_names.push(name_1);
   students_names.push(name_2);
   students_names.push(name_3);
   students_names.push(name_4);
   students_names.push(name_5);
   console.log(students_names); 
   document.getElementById("display_name").innerHTML=students_names;
   document.getElementById("submitbut").style.display="none";
   document.getElementById("sortbut").style.display="inline-block"
}
function sort(){
     students_names.sort();
     console.log(students_names);
     document.getElementById("display_name").innerHTML=students_names;
}