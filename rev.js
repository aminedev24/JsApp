//const { table } = require("console");

let productName = document.getElementById('name'),
productPrice1 = document.getElementById('price1'),
productPrice2 = document.getElementById('price2'),
pop = document.getElementById('p&p'),
btn = document.getElementById('add'),
date = document.getElementById('date'),
num = 0,

//save = document.getElementById('export'),

tbody = document.getElementById('tbody');

var table = document.getElementById('myTable');


/*
colorBtn.onclick  = ()=>{
    image.click();
}
*/
[productName,productPrice1,productPrice2].forEach((input)=>{
    input.onkeyup = (e)=>{
        if(e.keyCode == 13){
            AddRows();
        }}});

btn.addEventListener('click', AddRows,false)

//productColor.style.backgroundColor  = '';

function AddRows(){
    let x = document.createElement('TD');
    let y = document.createElement('TD');
    let z = document.createElement('TD');
    let w = document.createElement('TD');
    let b = document.createElement('button');
    let b1 = document.createElement('button'); 
    let b2 = document.createElement('button'); 
    let b3 = document.createElement('button'); 
    let b4 = document.createElement('button'); 

    //let d = document.createElement('TD');
    let div = document.createElement('div');
     
    //var w = document.createElement('TD');
    //var a = document.createElement('a');
    //a.setAttribute('href', '#')
    if(price1.value && price2.value && productName.value){
        var name = productName.value;
        let price1 = productPrice1.value;
        let price2 = productPrice2.value;
        let pol = price1 - price2;
        //let e = date.value;
        w.innerText = pol;

        [b,b1,b2,b3].forEach((btn)=>{
            btn.innerText = 'Edit';
            btn.setAttribute('class','edit');
        });
        
        b4.innerText = 'remove';
        b4.setAttribute('class','remove');
        x.append(name,b);
     
        x.setAttribute('class', 'pname');
        y.append(price1,b1);
        y.setAttribute('class', 'price1');
        z.append(price2,b2);
        z.setAttribute('class','price2');
        w.setAttribute('class','pol')
        w.appendChild(b3)
      
        //d.append(b4)
       num+=1

      
        document.getElementById('myTr').append(x,y,z,w);

        var tr = document.getElementById('myTr');
    
        pop = document.querySelectorAll('.pol');
        price1Total = document.querySelectorAll('.price1');
        price2Total = document.querySelectorAll('.price2');
        pnames = document.querySelectorAll('.pname');
        //selectElem();
        
        [x,z,y].forEach((td)=>{
        
            td.onmouseover = ()=>{
                td.firstElementChild.style.display = 'block';
            }

            td.onmouseout = ()=>{
                td.firstElementChild.style.display = 'none';
                //td.contentEditable = 'false';
            }

          
        })
        
        span = "<span class='num'>"+num+ " . </span>";
      
        x.innerHTML+=span;
        
       
        //console.log(pnames)
      
        if(tr.childElementCount >4){
            let h = document.createElement('TD');
            let f = document.createElement('TD');
            let v = document.createElement('TD');
            let t = document.createElement('TD');
            let s = document.createElement('TD');
            let tr3 = document.createElement('TR');
            let tr4 = document.createElement('TR');
            let r = document.createElement('TD');
            let btn = document.createElement('button');
         
            btn.innerText = 'sum';
            h.setAttribute('class','hidden');
            f.setAttribute('class', 'hidden');
            btn.setAttribute('id', 'total');
            tr4.setAttribute('class','btns')
            tr3.setAttribute('class','sum');
    

           // alert('table row has more than 2 table data')
            let tr2 = document.createElement('TR');
            tr2.setAttribute('id','myTr2');
            r.append(btn);
            r.style.padding = '5px';
           
            tr2.append(x,y,z,w);
            tr3.append(f,v,t,s);
            tr4.append(h,r);
            tbody.append(tr2,tr3,tr4); 

           
            trow2 = document.getElementById('myTr2');
            let sum = document.querySelectorAll('.sum');
            let btns = document.querySelectorAll('.btns');
            pnums = document.querySelectorAll('.pnum')
            
           
            
            //console.log(sum);
            if(sum.length && btns.length > 1){
                sum[0].remove();
                btns[0].remove();
            }
            //div.style.display = 'none';
            var sum2 = document.querySelector('.sum');
            var tdata = sum2.children;
            
            

            for(i=0;i<tdata.length;i++){
                tdata[i].setAttribute('id','p'+i + 'total')
                tdata[0].classList.add('p0total');
            }
            let button = document.getElementById('total');
            button.addEventListener('click',total,false);
            
            
            //console.log(edit);
            edit.forEach((btn)=>{
                btn.addEventListener('click',editCell,false)
            })

           
        }
        edit = document.querySelectorAll('.edit');
        remove = document.querySelectorAll('remove');
         //console.log(edit);
        
        
        productName.value = '';
        productPrice1.value = '';
        productPrice2.value = '';
        
        remove.forEach((remo)=>{
            remo.addEventListener('click',removeRow,false);
        })       
        edit.forEach((btn)=>{
            btn.addEventListener('click',editCell,false)
        })
        //date.value = '';
    }
}



function editCell(e){
    if(e.currentTarget && e.currentTarget.innerText == 'Edit'){
        e.currentTarget.parentElement.contentEditable = true;
        e.currentTarget.contentEditable = false;
        e.currentTarget.innerText = 'Save';


    }else if( e.currentTarget && e.currentTarget.innerText == 'Save'){
        e.currentTarget.parentElement.contentEditable = false;
        e.currentTarget.innerText = 'Edit';
        e.currentTarget.parentElement.parentElement.children[3].innerText = parseInt(e.currentTarget.parentElement.parentElement.children[1].innerText) - parseInt(e.currentTarget.parentElement.parentElement.children[2].innerText)
    

    }
}

function removeRow(e){
    if(e.currentTarget){
        e.currentTarget.parentElement.remove();
        
    }
}
/*
productColor = document.getElementById('color')
colorBtn = document.getElementById('colorBtn'),
image = document.getElementById('image');

window.onload = async () =>{

    console.log(table.firstElementChild.children[0].children[3]);
    img = document.createElement('img');
    img.setAttribute('src', 'image_icon.png');
    img.setAttribute('id', 'productImage')
    //table.firstElementChild.children[0].children[3].append(img);
}
*/
