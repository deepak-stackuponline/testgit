
interface User {
  Sl: number;
  firstName: string;
  email: string;
  phone: string;
}

const pageItems = 5;
let currentPage = 1;
let items: User[] = [];

const tableList = document.getElementById('userTable') as HTMLTableSectionElement;
const prevBtn = document.getElementById('previousButton') as HTMLButtonElement;
const nextBtn = document.getElementById('nextButton') as HTMLButtonElement;

const spinnerDiv = document.getElementById('spinner') as HTMLDivElement;
const contentDiv = document.getElementById('content') as HTMLDivElement;

async function fetchData(): Promise<void> {
  try {
    const response = await fetch("https://mocki.io/v1/465348e0-a44b-44ca-9efc-17b215f898cd");
    const data: User[] = await response.json();
    items = data;

    spinnerDiv.style.display = 'none';
    contentDiv.style.display = 'block';

    tableView();
  } catch (error) {
    console.error("Error fetching data:", error);
    spinnerDiv.innerHTML = '<div class="alert alert-danger">Failed to load data</div>';
  }
}

function tableView(): void {
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

function showSpinner(): void {
  spinnerDiv.style.display = 'block';
  contentDiv.style.display = 'none';
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showSpinner();
    setTimeout(() => {
      spinnerDiv.style.display = 'none';
      contentDiv.style.display = 'block';
      tableView();
    }, 500);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(items.length / pageItems)) {
    currentPage++;
    showSpinner();
    setTimeout(() => {
      spinnerDiv.style.display = 'none';
      contentDiv.style.display = 'block';
      tableView();
    }, 500);
  }
});

fetchData();
