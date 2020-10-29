

function total(){
    let price1Total = document.querySelectorAll('.price1');
    let price2Total = document.querySelectorAll('.price2');
    let popTotal = document.querySelectorAll('.pol');
    let p1 = document.getElementById('p1total');
    let p2 = document.getElementById('p2total');
    let p3 = document.getElementById('p3total');
    let p0 = document.getElementById('p0total');
    let pnum = document.querySelectorAll('.pnum');
    let pname = document.querySelectorAll('.pname');
    let price1Sum = []
    let price2Sum = []
    let price3Sum = []

    
    price1Total.forEach((price)=>{
    price1Sum.push((Number(price.innerText)));

    });

    price2Total.forEach((price2)=>{
        price2Sum.push((Number(price2.innerText)));
    });

    popTotal.forEach((price3)=>{
        price3Sum.push((Number(price3.innerText)));
    });

    

    var total=0;
    var total2 = 0;
    var total3 = 0;
    for(var i in price1Sum) {sum =  total += price1Sum[i];  }
    for(var i in price2Sum) { sum2 =  total2 += price2Sum[i]; }
    for(var i in price3Sum) { sum3 =  total3 += price3Sum[i]; }


    //console.log(sum)
    //console.log(sum2)
    //console.log(sum3)
 

    p1.innerText = sum;
    p2.innerText = sum2;
    p3.innerText = sum3;
    p0.classList.remove('hidden')
    p0.innerText = pname.length;
    
}
