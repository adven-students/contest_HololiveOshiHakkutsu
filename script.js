async function loadCSV() {
    const CSVdata = await fetch("推し活素材/holoform.csv");
    const text = await CSVdata.text();
    // console.log(text)
    const data = text.trim().split('\n')
        .map(line => line.split(',').map(x => x.trim()));
    console.log(data)
    const keys = data[0];
    console.log(keys)
    const newData = data.slice(1).map((item) => {
        let obj = {};
        keys.forEach((key, i) => (obj[key] = item[i]));
        return obj;
    });
    console.log(newData);
    // const dataCSV = resCSV.trim().split(/\r\n|\n/).map(line => line.split(','));
    // const htmlData = dataCSV.map(data => `<tr><th>${data[0]}</th><td>${data[1]}</td><td>${data[2]}</td><td>${data[3]}</td><td>${data[4]}</td></tr>`).join('');
    // document.getElementById('tableCSV').insertAdjacentHTML('beforeend',htmlData);
}
loadCSV();