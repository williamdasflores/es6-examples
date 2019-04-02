//sdata = '{"devide_id":"' + devide_id + '","guid"":"' + guid + '","username":"' + username + '","}'

//Using template string it will become...
const device_id = 4;
const guid = 20;
const username = 'williamdasflores';

const data = `{"device_id": "${device_id}", "guid"": "${guid}", "username": "${username}","}`
console.log(data);