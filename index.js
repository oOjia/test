let image = new Image();
// let bg = new Image();
// let btn = new Image();
// let left = new Image();
// let right = new Image();
// bg.src = "./img/bg.png";
// left.src = "./img/left.png";
// right.src = "./img/right.png";
// btn.src = "./img/btn.png";  
function upload() {
    // ctx.drawImage(bg, 0, 0, 300, 500)

	let file = document.querySelector('input[type=file]').files[0]  // 获取选择的文件，这里是图片类型
	let reader = new FileReader()
        reader.readAsDataURL(file) //读取文件并将文件以URL的形式保存在resulr属性中 base64格式
        reader.onload = function(e) { // 文件读取完成时触发 
            let result = e.target.result // base64格式图片地址 
            image.crossOrigin = '';
            image.src = result // 设置image的地址为base64的地址 
            
       }
 }
 function makeImg(canvas) {
    let img = document.getElementById("save_img");
    let tempSrc = canvas.toDataURL("image/png");
    img.src = tempSrc;
    console.log(tempSrc)
  }
  function createPic(){
    let canvas = document.getElementById("resultCanvas"); 
    // if(canvas.getContext){
        let img = document.getElementById("save_img");
        img.setAttribute("crossOrigin",'Anonymous')
        let tempSrc = canvas.toDataURL("image/png");
        img.src = tempSrc;
    // }
    console.log(tempSrc)
  }
  
 function paintBg(){
    let img = document.getElementById("save_img");
    let bg = new Image();
    let btn = new Image();
    let left = new Image();
    let right = new Image();
    bg.src = "bg.png";
    left.src = "left.png";
    right.src = "right.png";
    btn.src = "btn.png";  
    
    let name = document.getElementById("name").value;
    let school = document.getElementById("school").value;
    let second = document.getElementById("second").value||"";
    let degree = document.getElementById("degree").value;
    let rant = document.getElementById("rant").value;
    let canvas = document.getElementById("resultCanvas"); 
    let ctx = canvas.getContext("2d");
    // if(name&&school&&degree&&rant){
        bg.onload = function(){
            ctx.clearRect(0,0,1080,1920);
            ctx.drawImage(bg, 0, 0, 1080, 1920);
            ctx.drawImage(btn, 299, 525);
            ctx.drawImage(image,0,0,image.width,650,135,970,800,650);    
            ctx.fillStyle="#000000";
            ctx.font = 'bold 57px Adobe Ming Std';
            ctx.fillText(`2020录取捷报`, 358,603);
            ctx.font = 'bold 50px Adobe Ming Std';
            ctx.fillText(`益文${name}同学`, 125, 743)
            ctx.fillText(`${school}`, 730, 743)
            ctx.font = 'bold 40px Adobe Ming Std';
            ctx.fillText(`背景: ${degree}`, 125, 843)
            ctx.fillText(`2020 QS`, 480, 843)
            ctx.fillText(`世界大学排名`, 480, 893)
            ctx.fillText(second, 125, 893)
            ctx.font = 'bold 70px Adobe Ming Std';
            ctx.fillStyle="#B61D1C";
            ctx.fillText(rant, 797, 873)
            ctx.font = 'bold 50px Adobe Ming Std';
            ctx.fillText(`录取学校: `, 480, 743)
            ctx.drawImage(left, 66, 1500);
            ctx.drawImage(right, 268, 1500);
            console.log(image)
            let tempSrc = canvas.toDataURL("image/png");
            img.src = tempSrc;
        }
    // }else{
    //     alert("填写信息不完整")
    // }
 }


let imageData;
 function loadImage(src, callback) {
    var img = new Image();

    img.onload = callback;
    img.setAttribute('crossorigin', 'anonymous'); // works for me

    img.src = src;

    return img;
}
function doInput(id){
    var inputObj = document.createElement('input');
    inputObj.addEventListener('change',readFile,false);
    inputObj.type = 'file';
    inputObj.accept = 'image/*';
    inputObj.id = id;
    inputObj.click();
}
function readFile(){
    var file = this.files[0];//获取input输入的图片
    if(!/image\/\w+/.test(file.type)){
        alert("请确保文件为图像类型");
        return false;
    }//判断是否图片，在移动端由于浏览器对调用file类型处理不同，虽然加了accept = 'image/*'，但是还要再次判断
    var reader = new FileReader();
    reader.readAsDataURL(file);//转化成base64数据类型
    reader.onload = function(e){
            drawToCanvas(this.result);
            // imageData = this.result
        }
}

function drawToCanvas(imgData){
    let saveImage = document.getElementById("save_img");
    let bg = document.getElementById("bg");
    let btn = document.getElementById("btn");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    let txt = document.getElementById("txt");
    let info = document.getElementsByClassName("info")[0];

    let name = document.getElementById("name").value;
    let school = document.getElementById("school").value;
    let second = document.getElementById("second").value||"";
    let degree = document.getElementById("degree").value;
    let rant = document.getElementById("rant").value;
    var cvs = document.querySelector('#resultCanvas');
    var ctx = cvs.getContext('2d');
    var img = new Image;
        img.crossOrigin="anonymous";
        bg.crossOrigin="anonymous";
        btn.crossOrigin="anonymous";
        left.crossOrigin="anonymous";
        right.crossOrigin="anonymous";
        img.src = imgData;

        addClass(info,"hiden");
        removeClass(txt,"hiden");
        
        img.onload = function(){//必须onload之后再画
            // ctx.drawImage(img,0,0,300,400);
            ctx.drawImage(bg, 0, 0, 1080, 1920);
            ctx.drawImage(btn, 299, 525);
            ctx.drawImage(img,0,0,img.width,650,135,970,800,650);
            ctx.fillStyle="#000000";
            ctx.font = 'bold 57px Adobe Ming Std';
            ctx.fillText(`2020录取捷报`, 358,603);
            ctx.font = 'bold 50px Adobe Ming Std';
            ctx.fillText(`益文${name}同学`, 125, 743)
            ctx.fillText(`${school}`, 730, 743)
            ctx.font = 'bold 40px Adobe Ming Std';
            ctx.fillText(`背景: ${degree}`, 125, 843)
            ctx.fillText(`2020 QS`, 480, 843)
            ctx.fillText(`世界大学排名`, 480, 893)
            ctx.fillText(second, 125, 893)
            ctx.font = 'bold 70px Adobe Ming Std';
            ctx.fillStyle="#B61D1C";
            ctx.fillText(rant, 797, 873)
            ctx.font = 'bold 50px Adobe Ming Std';
            ctx.fillText(`录取学校: `, 480, 743)
            ctx.drawImage(left, 66, 1500);
            ctx.drawImage(right, 268, 1500);
            strDataURI = cvs.toDataURL();//获取canvas base64数据
            saveImage.src = strDataURI;
        }
}

function addClass(obj, cls){
    var obj_class = obj.className,//获取 class 内容.
    blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
    obj.className = added;//替换原来的 class.
  }
  function removeClass(obj, cls){
    var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
    obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
    removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
    obj.className = removed;//替换原来的 class.
  }