//利用JQuery的一个用法来获取元素id,这样就不用频繁使用document.getElementById("")了
function $(idstr){
    return document.getElementById(idstr);
}
function addInformation()
{
    //new a table as default
    var tb = $("table")
    //new a row for new information
    var tr = tb.insertRow();


    var serialnumCell = tr.insertCell();
    serialnumCell.innerHTML = $("AddSerialNum").value;

    var idCell = tr.insertCell();
    idCell.innerHTML = $("AddId").value;

    var nameCell = tr.insertCell();
    nameCell.innerHTML = $("AddName").value;

    var sexCell = tr.insertCell();
    var sex = document.getElementsByName("AddSex");
    if(sex[0].checked == true)
    {
        sexCell.innerHTML = "男"
    }
    else
    {
        sexCell.innerHTML = "女"
    }

    var ageCell = tr.insertCell();
    ageCell.innerHTML = $("AddAge").value;

    var modifyCell = tr.insertCell();
    modifyCell.innerHTML = "<input type=\"button\" value=\"modify\"  onclick=\"ModifyInformation(this)\" />";

    var deleteCell = tr.insertCell();
    deleteCell.innerHTML = "<input type=\"button\" value=\"delete\"  onclick=\"DeleteInformation(this)\" />";

    //reset
    $("AddSerialNum").value = "";
    $("AddId").value = "";
    $("AddName").value = "";
    sex[0].checked = true;
    $("AddAge").value = "";

    //$("AddInformation").style.display = "block";
}
//global variable
var changeInformation;

//modify
function ModifyInformation(obj)
{
    //get information's Node
    var tr = obj.parentNode.parentNode;

    changeInformation = tr;
    $("ModifySerialNum").value = tr.children[0].innerHTML;
    $("ModifyId").value = tr.children[1].innerHTML;
    $("ModifyName").value =tr.children[2].innerHTML;

    //for choose sex
    var sex = tr.children[3].innerHTML;
    var chooseSex = document.getElementsByName("ModifySex");
    if(sex=="男")
    {
        chooseSex[0].checked = true;
    }
    else
    {
        chooseSex[1].checked = true;
    }

    $("ModifyAge").value = tr.children[4].innerHTML;

    //modify visibility
    $("modify").style.display = "block";
}
//delete
function DeleteInformation(obj)
{
    //var parentN = obj.parentNode.parentNode;
    //to delete Node,to delete Information
    obj.parentNode.parentNode.remove();
}

//to change serial number
function SerialNum()
{
    var num = 1;
}

//in modify, save information
function SaveInformation()
{
    //in this function,it assigns the current content to the "modify table"
    changeInformation.children[0].innerHTML = $("ModifySerialNum").value;
    changeInformation.children[1].innerHTML = $("ModifyId").value;
    changeInformation.children[2].innerHTML = $("ModifyName").value;

    var sex = document.getElementsByName("ModifySex");
    if(sex[0].checked == true)
    {
        changeInformation.children[3].innerHTML = "男";
    }
    else
    {
        changeInformation.children[3].innerHTML = "女";
    }

    changeInformation.children[4].innerHTML = $("ModifyAge").value;

    $("modify").style.display = "none";

}
//in modify, cancel information
function ModifyCancelInformation()
{
    $("modify").style.display = "none";
}

//in add, cancel information
function AddCancelInformation()
{
    $("AddInformation").style.display = "none";
}
function AddButton()
{
    $("AddInformation").style.display = "block";
}
