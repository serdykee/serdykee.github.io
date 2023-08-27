$(document).ready(function() { 
    $.ajax({ 
        url: "https://api.github.com/repos/serdykee/serdykee.github.io/contents/cert", 
        dataType: "json", 
        success: function(data) {
            var reversedData = data.reverse(); // Sắp xếp danh sách theo thứ tự đảo ngược
            $.each(reversedData, function(index, file) { 
                var fileUrl = file.download_url; 
                var fileName = file.name; 

                // Lấy số thứ tự từ index và thêm số 0 vào đầu
                var fileNumber = (index + 1).toString().padStart(2, '0');

                var listItem = "<li><a href='" + fileUrl + "' download>" + "File " + fileNumber + ": " + fileName + "</a></li>"; 
                $("#file-list").append(listItem); 
            });

            $("#file-list").hide().fadeIn(1000);
        } 
    }); 
});