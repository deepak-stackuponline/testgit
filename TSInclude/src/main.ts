
interface User {
  Sl: number;
  firstName: string;
  email: string;
  phone: number;
}

//scss
//sass



const pageItems = 5;
let currentPage = 1;
let items: User[] = [];

const tableList = document.getElementById('userTable') as HTMLElement;
const prevBtn = document.getElementById('previousButton') as HTMLElement;
const nextBtn = document.getElementById('nextButton') as HTMLElement;

// const spinnerDiv = document.getElementById('spinner') as HTMLElement;
// const contentDiv = document.getElementById('content') as HTMLElement;

async function fetchData():Promise<void> {
  try {
    const response = await fetch("https://mocki.io/v1/465348e0-a44b-44ca-9efc-17b215f898cd");
    const data: User[] = await response.json();
    items = data;
   
    // spinnerDiv.style.display = 'none';
    // contentDiv.style.display = 'block';
  (document.getElementById('spinner') as HTMLElement).style.display = 'none';
  (document.getElementById('content') as HTMLElement).style.display = 'block';

  // document.getElementById('spinner').style.display = 'none';  
  // document.getElementById('content').style.display = 'block';

    tableView();
  } catch (error) {
    console.error("Error fetching data:", error);
    (document.getElementById('spinner') as HTMLElement).innerHTML = '<div class="alert alert-danger">Failed to load data</div>';
    // document.getElementById('spinner').innerHTML = '<div class="alert alert-danger">Failed to load data</div>';
  }
}

function tableView():void {
  tableList.innerHTML = '';

  const start = (currentPage - 1) * pageItems;
  const end = start + pageItems;
  const paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${paginatedItems[i].Sl}</td>
      <td>${paginatedItems[i].firstName}</td>
      <td>${paginatedItems[i].email}</td>
      <td>${paginatedItems[i].phone}</td>
    `;
    tableList.appendChild(row);
  }
}

function showSpinner():void {

  (document.getElementById('spinner') as HTMLElement).style.display = 'block';
  (document.getElementById('content') as HTMLElement).style.display = 'none';


  // spinnerDiv.style.display = 'block';
  // contentDiv.style.display = 'none';


    // document.getElementById('spinner').style.display = 'none';
    // document.getElementById('content').style.display = 'block';
}

prevBtn.addEventListener('click', function ()  {
  if (currentPage > 1) {
    currentPage--;
    showSpinner();
    fetchData();
    tableView();
  }
});

nextBtn.addEventListener('click', function () {
  if (currentPage < Math.ceil(items.length / pageItems)) {
    currentPage++;
    showSpinner();
    fetchData();
    tableView();
  }
});

fetchData();
