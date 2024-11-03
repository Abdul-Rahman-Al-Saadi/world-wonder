const fetchWonders = async () => {
    
    const response = await fetch("https://www.world-wonders-api.org/v0/wonders");
    if(response.ok){
        console.log("successful");
    }else {
        console.log("unsuccessful")
    }
    const data = await response.json();

    return data;

}
const container = document.querySelector('.container');
// const data = fetchWonders();
let currentWonder;

const createCards = async () => {
    
    const wonders = await fetchWonders();
    console.log(wonders);
    for (const wonder of wonders) {
        const parentDiv = document.createElement('div');
        const img = document.createElement('img');
        const anchor = document.createElement('a');
        const h3 = document.createElement('h3');
        const childDiv = document.createElement('div');
        childDiv.append(img);
        parentDiv.append(childDiv, h3, anchor);
        
        parentDiv.classList = 'card';
        anchor.innerText = "More Details";
        img.classList = 'card-img';
        h3.classList = 'wonder-name';

        img.src = await wonder.links.images[0];
        h3.innerText = wonder.name;
        console.log(wonder);
        // const flatWonder = flattenObject(wonder);
        // const queryString = new URLSearchParams(flatWonder).toString();
        anchor.href = `details.html`;
        anchor.addEventListener('click', () => {
            localStorage.setItem('wonder', JSON.stringify(wonder));
        });
        

        container.appendChild(parentDiv);
    };
};
createCards();



