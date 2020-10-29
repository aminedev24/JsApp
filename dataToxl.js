let save = document.getElementById('export')
let save2 = document.getElementById('export_csv');

//onclick="tableToExcel('testTable', 'W3C Example Table')"
save.onclick= function (e){
    exportToExcel('testTable','Reports Of Products',e);
}

save2.onclick = function(e){
    exportToExcel('testTable','Reports Of Products',e);

}

function exportToExcel(table, filename = '',e){
    var downloadurl;
    var dataFileType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById('myTable');
    let button = document.getElementById('total');
    let num = document.querySelectorAll('.num');
    let edit = document.querySelectorAll('#edit');

   // num.forEach((num)=>{
     //   num.remove();
    //})
   
    num.forEach((num)=>{
        num.remove();
    })
    edit.forEach((btn)=>{
        btn.remove();
   })
    button.remove();
    
    var tableHTMLData = tableSelect.outerHTML.replace(/ /g, '%20');
  // pecify file name
    if(e.currentTarget.id == 'export_csv'){
        filename = filename?filename+'.csv':'export_csv_data.csv';
    }else{
        filename = filename?filename+'.xls':'export_excel_data.xls';

    }
  


    // Create download link element
    downloadurl = document.createElement("a");
    
    document.body.appendChild(downloadurl);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTMLData], {
            type: dataFileType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadurl.href = 'data:' + dataFileType + ', ' + tableHTMLData;
    
        // Setting the file name
        downloadurl.download = filename;
        
        //triggering the function
        downloadurl.click();
    }
}

