/**
 * Created by huangfeng on 2014/5/15.
 */

window.html5Upload={
    html5FileSuppert:function(){
        if(window.File && window.FileList && window.FileReader && window.Blob){
            return true
        }else{
            return false
        }
    },
    uType : {
        'image':['gif','jpg','jpeg','bmp','png'],
        'video':['wmv','avi','mpeg','mpg','asf','mp4','mkv','vob','webm','mov','rm','rmvb','swf','flv'],
        'audio':['wma','wav','mp3'],
        'pack':['iso','zip','rar','7z','tar','tar2','exe'],
        'office':['doc','docx','xls','xlsx','ppt','pptx','pdf','psd'],
        'document':['txt','rtf','doc','xml']
    },
    filterFileType :function(type,FileType){
        var isContain=false;
        for(var f in this.uType[type]){
            if(this.uType[type][f]==FileType){
                return true
            }
        }
        return  isContain
    },
    formaSize:function(k){
         if(k>1048576){
             return Math.round(k/(1048576))+"M";
         }else{
             return Math.round(k/1024)+"k";
         }
    },
    fileSelected:function(type,size,totleSize,fileNum,fileId){
        if(!this.html5FileSuppert()){
            return  { result:false, info:"你的浏览器不支持"}
        }
        var file =document.getElementById(fileId).files;
        var fileArray=[];
        var allSize=0;
        if(fileNum!=null&&file.length>fileNum){
            return  { result:false, info:"上传个数不能超过"+fileNum+"个"}
        }
        for(var i= 0,f;f=file[i];i++){
            f.index=i;
            var indexes= f.name.lastIndexOf('.');
            var FileType = f.name.substring(indexes+1, f.name.length).toLowerCase();
            if(type&&indexes&&!this.filterFileType(type,FileType)){
                return  { result:false, info:f.name+"不是上传的类型"}
            }
            if(size&&f.size > size*1024 * 1024){
                return  { result:false, info:f.name+"太大,请上传小于6M的图片"}
            }
            allSize=allSize+f.size;
            fileArray.push(f);
        }
        if(totleSize&&allSize>totleSize*1024 * 1024){
            return  { result:false, info:"总大小超过了"+totleSize}
        }
        return  { result:true,totleSize:this.formaSize(allSize),totleNumber: i,file:fileArray};
    },
    creatPopUploadMsg: function(msg){
        var pop='<div class="uploadPop clearfix" id="upload"><i class="closeUpBtn" id="closeUpBtn"></i>' +
            '<div class="pop-innerbox">' +
            '<div class="uploadImg" id="uploadImg"></div><div class="msg">'+msg+'</div>'+
            '</div></div>';
        $("body").append(pop);
    },
   handleFiles: function (files,size) {
    window.URL = window.URL || window.webkitURL;
     var img = new Image();
    if (window.URL) {
      img.src = window.URL.createObjectURL(files[0]); //创建一个object URL，并不是你的本地路径
      //img.width = 80;
      img.onload = function (e) {
        window.URL.revokeObjectURL(this.src); //图片加载后，释放object URL
      }
      $("#img").html(img)
      $("#txt").html('<p>图片大小'+size+' ,正在上传中...</p>')
    } else if (window.FileReader) {
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function (e) {
      img.src = this.result;
        //img.width = 80;
      }
      $("#img").html(img)
      $("#txt").html('<p>图片大小'+size+' ,正在上传中...</p>')
    } else {
      //ie
      obj.select();
      obj.blur();
      var nfile = document.selection.createRange().text;
      document.selection.empty();
      img.src = nfile;
      //img.width = 80;
      img.onload = function () {
      }
      $("#img").html(img)
      $("#txt").html('<p>图片大小'+size+' ,正在上传中...</p>')
    }
  },
    uploadFile :function(type,size,totleSize,fileNum,fileId,url) {
        //type:类型,size:单个文件大小(M),totleSize:总文件大小(M),fileNum:文件个数,fileId：上传表单id ,url:上传到服务器url
        // 不限制传null callback 回调函数
       // $.alertMask()
        //this.creatPopUploadMsg("上传中...");
        if(arguments.length!=6){
            $("#txt").html("缺少上传路径");
           return false;
         };
        var fileResult=this.fileSelected(type,size,totleSize,fileNum,fileId);
        if(!fileResult.result){
          $("#txt").html(fileResult.info)
          //Utils.removeLoadMask()
          return false;
        }
        this.handleFiles(fileResult.file,fileResult.totleSize)
      for (var i = 0, file; file = fileResult.file[i], i < fileResult.file.length; i++) {
          (function (file, that){
            var xhr = new XMLHttpRequest();
            var fd = new FormData();
            fd.append("picture", file);
            fd.append("callback", "callback");
            setTimeout(function(){
                if(xhr!=null){
                  $("#txt").html('上传超时');
                  //Utils.removeLoadMask()
                  xhr.abort();
                }
            },60000)
            if(xhr.upload){
              xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200){
                  var data = eval("(" + xhr.responseText + ")");
                  console.log(data)
                  if (data.status == 0) {
                    $("#txt").html('图片上传成功')
                  } else {
                    $("#txt").html('图片上传失败')
                  }
                  xhr = null;
                  //Utils.removeLoadMask()
                }
              };
              xhr.open("post", url);
              xhr.send(fd);
            }
           /* $.support.cors = true;
            $.ajax({
              type:'post',
              timeout:10000,
              dataType:"json",
              url:url,
              data:fd,
              contentType:false,//必须false才会自动加上正确的Content-Type
               * 必须false才会避开jQuery对 formdata 的默认处理
               * XMLHttpRequest会对 formdata 进行正确的处理
              processData:false,
              success:function(data){
                console.log(data)
                $("#txt").html('图片上传成功')
              },
              error:function(data){
                console.log("error--"+data.toString())
                $("#txt").html('图片上传成功')
              }
            })*/
          })(file, this);
        }
    }
}
