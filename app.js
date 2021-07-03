async function getActiveData(state, district) {
    let data1 = 0, data2 = 0, data3 = 0;
    let result = await fetch(
        'https://api.covid19india.org/state_district_wise.json'
    );
    let final = await result.json();
    data1 = final[state].districtData[district].active;
    data2 = final[state].districtData[district].confirmed;
    data3 = final[state].districtData[district].deceased;

    return [data1, data2, data3];
}

function getCovidStatus(Mydistrict) {
    let active = document.getElementById('active');
    let confirm = document.getElementById('confirm');
    let deceased = document.getElementById('deceased');
    let district = document.getElementById('district');
    district.innerHTML = Mydistrict

    getActiveData('Tamil Nadu', Mydistrict).then(e => {
        active.innerHTML = e[0];
        confirm.innerHTML = e[1];
        deceased.innerHTML = e[2];
    });
}

let active = document.getElementById('active');
let confirm = document.getElementById('confirm');
let deceased = document.getElementById('deceased');
active.innerHTML = 0;
confirm.innerHTML = 0;
deceased.innerHTML = 0;


function submitData() {
    let value = document.getElementById('inputBox').value.trim().toLowerCase();
    let Mydistrict = String.fromCharCode(value.charCodeAt(0) - 32) + value.substr(1, value.length)
    document.getElementById('inputBox').value = ''
    if (value === "") {
        let active = document.getElementById('active');
        let confirm = document.getElementById('confirm');
        let deceased = document.getElementById('deceased');
        let district = document.getElementById('district');
        district.innerHTML = '';
        active.innerHTML = 0;
        confirm.innerHTML = 0;
        deceased.innerHTML = 0;
    } else {
        getCovidStatus(Mydistrict)
    }
}






