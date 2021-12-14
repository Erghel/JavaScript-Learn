var name="";
var price=0;
var sum=0;
var out="";
var clear="";
var text="";
function cl1(name, price)
{
if(sessionStorage.getItem('ssum')!=null)
{
sum=parseInt(sessionStorage.getItem('ssum'));
out=sessionStorage.getItem('sout');
}

out +=name + " " + price + "\n";
sum+= price;
document.getElementById('text').value = out+sum;
sessionStorage.setItem('ssum',sum);
sessionStorage.setItem('sout',out);

}

function cl()
{
sum=0;
out="";
document.getElementById('text').value = clear;
sessionStorage.removeItem('sout');
sessionStorage.removeItem('ssum');
}

document.getElementById('text').value="sdgfdfgdfs";
