
function upload() {
    alert(1)
	let file = document.querySelector('input[type=file]').files[0]  // 获取选择的文件，这里是图片类型
	let reader = new FileReader()
        reader.readAsDataURL(file) //读取文件并将文件以URL的形式保存在resulr属性中 base64格式
        reader.onload = function(e) { // 文件读取完成时触发 
            let result = e.target.result // base64格式图片地址 
            var image = new Image();
            image.src = result // 设置image的地址为base64的地址 
            image.onload = function(){ 
                var canvas = document.querySelector("#resultCanvas"); 
                var context = canvas.getContext("2d"); 
                canvas.width = image.width; // 设置canvas的画布宽度为图片宽度 
                canvas.height = image.height; 
                context.drawImage(image, 0, 0, image.width, image.height) // 在canvas上绘制图片 
                let dataUrl = canvas.toDataURL('image/jpeg', 0.92) // 0.92为压缩比，可根据需要设置，设置过小会影响图片质量 
                                                                   // dataUrl 为压缩后的图片资源，可将其上传到服务器 
            } 
       }
 }