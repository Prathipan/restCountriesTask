const getcountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = ()=> {
        const countries = xhr.response;
        // console.log(countries);
        console.log(countries.map(data => data.name.common));

        console.log(countries.filter(data => data.population > 1_00_00_000).map(data => data.name.common));

        const filtered = countries.filter(data => data.languages && data.languages.spa == 'Spanish');
        console.log(filtered.map(data => data.name.common));

        // const filtered = countries.map(data => data.languages);
        // console.log(filtered);
    }
}

getcountries();