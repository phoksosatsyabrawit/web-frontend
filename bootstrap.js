function showresult(){
    // alert("hello world");
    //declare variable get from bootstrap
    var empname = document.getElementById("name").value.trim();
    var ememail = document.getElementById("email").value.trim();
    var emsalary = document.getElementById("salary").value.trim();
    var emdate = document.getElementById("hiredate").value;
    var fmcurrency = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    });
    var salarycurrency = fmcurrency.format(emsalary);

    if(empname && ememail && emsalary && emdate !=null){
        alert("1.My FullName is: "+empname+"\n"+
              "2.My Email is: "+ememail+"\n"+
              "3.My Salary is: "+salarycurrency+"\n"+
              "4.Hire Date is: "+emdate);
    }else{
        alert("Please fill the information.");
    }
}
