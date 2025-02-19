const today = document.querySelector('#todays-date');
today.innerText = `Today's Date: \n` + new Date().toLocaleDateString("tr-TR");