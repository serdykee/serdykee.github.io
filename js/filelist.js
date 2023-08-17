$(document).ready(function() {
    $.ajax({
        url: "https://api.github.com/repos/serdykee/serdykee.github.io/contents/cert",
        dataType: "json",
        success: function(data) {
            $.each(data, function(index, file) {
                var fileUrl = file.download_url;
                var fileName = file.name;
                var listItem = "<li><a href='" + fileUrl + "' download>" + fileName + "</a></li>";
                $("#file-list").append(listItem);
            });
        }
    });
});