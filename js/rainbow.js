setInterval(changeColor, 8000); // thay màu chữ sau mỗi 8 giây
        
        function changeColor() {
            var textElement = document.querySelector(".rainbow-text");
            textElement.style.animation = "rainbow 8s linear infinite";
        }