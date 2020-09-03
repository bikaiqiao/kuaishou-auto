var arr = files.listDir("/storage/emulated/0/DCIM/");
var hiddenName = files.getExtension("/storage/emulated/0/DCIM/"+arr[0])
log(files.getExtension("/storage/emulated/0/DCIM/"+arr[0]))
var img = images.read("/storage/emulated/0/DCIM/"+arr[0]);
//对图片进行操作
var imageBase64 = images.toBase64(img, hiddenName, 100 )
log(imageBase64)
// 回收图片
img.recycle();