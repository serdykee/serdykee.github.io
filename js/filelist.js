const repoOwner = 'serdykee'; // Thay thế serdykee bằng tên người/quản trị sở hữu kho lưu trữ
const repoName = 'serdykee.github.io'; // Thay thế serdykee.github.io bằng tên kho lưu trữ

const perPage = 10; // Số file hiển thị trên mỗi trang
let currentPage = 1; // Trang hiện tại

function fetchFiles(page) {
  fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/cert?per_page=${perPage}&page=${page}`)
    .then(response => response.json())
    .then(data => {
      const files = data.map(file => file.name);
      console.log(files); // Do something with the list of files
      
      const fileElements = data.map(file => {
        const fileUrl = file.download_url;
        const fileName = file.name;
        return `<li><a href='${fileUrl}' download>${fileName}</a></li>`;
      });
      
      // Clear the file list
      document.getElementById('file-list').innerHTML = '';
      
      // Append the file elements to the file list
      fileElements.forEach(fileElement => {
        const listItem = document.createElement('li');
        listItem.innerHTML = fileElement;
        document.getElementById('file-list').appendChild(listItem);
      });
    })
    .catch(error => console.error(error));
}

// Hiển thị trang đầu tiên khi trang web được tải
fetchFiles(currentPage);

// Hàm để chuyển đổi giữa các trang
function goToPage(page) {
  // Kiểm tra giới hạn trang
  if (page < 1) {
    currentPage = 1;
  } else {
    currentPage = page;
  }
  
  // Gọi API để lấy danh sách file của trang hiện tại
  fetchFiles(currentPage);
}

// Ví dụ về sử dụng các nút "Trang trước" và "Trang sau" để chuyển đổi giữa các trang
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

prevPageButton.addEventListener('click', () => {
  goToPage(currentPage - 1);
});

nextPageButton.addEventListener('click', () => {
  goToPage(currentPage + 1);
});