// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header()); 

function Header() {
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1 = document.createElement('h1');
    const tempSpan = document.createElement('span');

    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(tempSpan);

    var d = new Date();
    dateSpan.textContent = d;
    h1.textContent = 'Lambda Times';
    tempSpan.textContent = 'Temp : 98°';

    return headerDiv
}

