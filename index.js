let image;
function upload() {
    let bg = new Image();
    bg.src = "./img/bg"

    let canvas = document.querySelector("#resultCanvas"); 
    let ctx = canvas.getContext("2d");
    ctx.drawImage(bg, 0, 0, 300, 500)

	let file = document.querySelector('input[type=file]').files[0]  // 获取选择的文件，这里是图片类型
	let reader = new FileReader()
        reader.readAsDataURL(file) //读取文件并将文件以URL的形式保存在resulr属性中 base64格式
        reader.onload = function(e) { // 文件读取完成时触发 
            let result = e.target.result // base64格式图片地址 
            image = new Image();
            image.src = result // 设置image的地址为base64的地址 
            image.onload = function(){ 
                // let canvas = document.querySelector("#resultCanvas"); 
                // let ctx = canvas.getContext("2d");
                // // ctx.clearRect(0, 0, 700, 1000);
                // ctx.drawImage(bg, 0, 0, 300, 500)
                // // canvas.width = image.width; // 设置canvas的画布宽度为图片宽度 
                // // canvas.height = image.height; 
                // // context.drawImage(image, 0, 0, image.width, image.height) // 在canvas上绘制图片 
                // let dataUrl = canvas.toDataURL('image/jpeg', 0.92) // 0.92为压缩比，可根据需要设置，设置过小会影响图片质量 
                                                                   // dataUrl 为压缩后的图片资源，可将其上传到服务器 
            } 
       }
 }
 function paintBg(){
    let bg = new Image();
    let btn = new Image();
    let left = new Image();
    let right = new Image();
    let name = document.getElementById("name").value;
    let school = document.getElementById("school").value;
    let nation = document.getElementById("nation").value;
    let degree = document.getElementById("degree").value;
    let rant = document.getElementById("rant").value;
    bg.src = "./img/bg.png";
    left.src = "./img/left.png";
    right.src = "./img/right.png";
    btn.src = "./img/btn.png";
    if(name&&school&&nation&&degree&&rant){
        bg.onload = function(){
            let canvas = document.querySelector("#resultCanvas"); 
            let ctx = canvas.getContext("2d");
            ctx.clearRect(0,0,1080,1920);
            ctx.drawImage(bg, 0, 0, 1080, 1920);
            ctx.drawImage(btn, 299, 525);
            ctx.drawImage(image,0,0,image.width,650,135,1000,800,650);      
            // ctx.drawImage(bg, 0, 0, 300, 520);
            ctx.font = 'bold 57px Adobe Ming Std';
            ctx.fillText(`2020录取捷报`, 358,603);
            ctx.font = 'bold 50px Adobe Ming Std';
            ctx.fillText(`益文${name}同学`, 125, 773)
            ctx.fillText(`${school}`, 730, 773)
            ctx.font = 'bold 40px Adobe Ming Std';
            ctx.fillText(`背景: ${nation}`, 125, 873)
            ctx.fillText(`2020 QS`, 480, 873)
            ctx.fillText(`世界大学排名`, 480, 923)
            ctx.fillText(degree, 125, 923)
            ctx.font = 'bold 70px Adobe Ming Std';
            ctx.fillStyle="#B61D1C";
            ctx.fillText(rant, 797, 903)
            ctx.font = 'bold 50px Adobe Ming Std';
            ctx.fillText(`录取学校: `, 480, 773)
            ctx.drawImage(left, 66, 1360);
            ctx.drawImage(right, 268, 1500);
        }
    }else{
        alert("填写信息不完整")
    }
    
 }