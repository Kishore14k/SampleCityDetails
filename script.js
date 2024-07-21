const button=document.querySelector('button')
let resdiv=document.createElement('div')
resdiv.id='result'
document.querySelector('.overall').appendChild(resdiv)
button.addEventListener('click',showdetails)
function showdetails(){
    const input=document.querySelector(".input")
    const city=input.options[input.selectedIndex].value
    let LiteracyRate=0, Population=0, Area=0
    switch(city){
        case 'Chennai':
            LiteracyRate=87.7
            Population=80000
            Area=8768787
            break
        case 'Mumbai':
            LiteracyRate=80.8
            Population=90000
            Area=9687566
            break
        case 'Bengaluru':
            LiteracyRate=84.7
            Population=70000
            Area=7565645
            break
        case 'Kolkata':
            LiteracyRate=82.9
            Population=60000
            Area=6535435
            break
        case 'Delhi':
            LiteracyRate=85.4
            Population=50000
            Area=4346746
            break
    }
    let output=`The Indian City ${city} has a literacy rate of ${LiteracyRate}% and population of ${Population} with area ${Area} metersquare`
    document.getElementById('result').innerHTML=output
}



