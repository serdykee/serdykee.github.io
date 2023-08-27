$(document).ready(function() { 
    $.ajax({ 
        url: "https://api.github.com/repos/serdykee/serdykee.github.io/contents/cert", 
        dataType: "json", 
        success: function(data) {
            var reversedData = data.reverse(); // Sắp xếp danh sách theo thứ tự đảo ngược
            $.each(data, function(index, file) { 
                var fileUrl = file.download_url; 
                var fileName = file.name; 
                var listItem = "<li><a href='" + fileUrl + "' download>" + fileName + "</a></li>"; 
                $("#file-list").append(listItem); 
            });

            $("#file-list").hide().fadeIn(5000);
        } 
    }); 
});