function getBeijingDate() {
    var now = new Date(); 
    var nowUtc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(nowUtc + 3600000 * 8);
}

function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function calculateDays() {
    const startDate = new Date('2022-05-20');
    // const enteredDate = new Date(document.getElementById('inputDate').value);
    const now = getBeijingDate();

    // const daysFromStart = Math.ceil((enteredDate - startDate) / (1000 * 60 * 60 * 24))+1;
    const daysFromNow = Math.ceil((now - startDate) / (1000 * 60 * 60 * 24))+1;

    const nextHundredDays = 100 - ((daysFromNow-1) % 100);
    const nextAnniversary = (isLeapYear(now.getFullYear()) ? 366 : 365) - ((daysFromNow-1) % (isLeapYear(now.getFullYear()) ? 366 : 365));

    // document.getElementById('daysFromStart').innerText = `从2022年5月20日到输入的日期一共有${daysFromStart}天`;
    document.getElementById('daysFromNow').innerText = `今天我们恋爱了${daysFromNow}天`;
    document.getElementById('nextHundredDays').innerText = `距离下一个百天纪念日还有${nextHundredDays}天`;
    document.getElementById('nextAnniversary').innerText = `距离下一个周年纪念日还有${nextAnniversary}天`;
}

function calculateTodays(){
    const startDate = new Date('2022-05-20');
    const enteredDate = new Date(document.getElementById('inputDate').value);
    const daysFromStart = Math.ceil((enteredDate - startDate) / (1000 * 60 * 60 * 24))+1;
    document.getElementById('daysFromStart').innerText = `到${enteredDate}，我们恋爱了${daysFromStart}天`;
}