function FC4()
		{
			var x = document.getElementById("num").value;
			var numlist = "";
			for (i=1; i<=Math.sqrt(x); i++)
			{
				if (x % i == 0)
				{
					numlist=numlist.concat(String(i), "<br>", String(x/i), "<br>-------------------<br>");
				}
			}
			numlist=numlist.concat("<br>")
			document.getElementById("output").innerHTML=numlist;
		}

function FC5()
		{
			var x = document.getElementById("num").value;
			x = x.toFixed(Math.floor(Math.log10(x)));
			var numlist = [1];
			while (x-1)
			{
				f = findFactor(x);
				x /= f;
				numlist+=numlist.map(numlist*3);
				numlist=Array.from(Set(numlist));
			}
			numlist.sort(function(a, b){return a-b});
			numlist=numlist.join("<br>").concat("<br>")
			document.getElementById("output").innerHTML=numlist;

			function findFactor(n)
				{
    					for (d=2; d<=Math.ceil(n.toFixed(Math.log10(n)).sqrt()); d++):
       					if (n % d == 0):
            					return(d)
    					return(n)
				}
		}

function BC()
		{
			var num = document.getElementById("num").value;
			var b1 = document.getElementById("b1").value;
			var b2 = document.getElementById("b2").value;
			document.getElementById("output").innerHTML=parseInt(num, b1).toString(b2);
		}
		
function TR()
		{
			var o = document.getElementById("num").value;
			var deg = document.getElementById("deg").checked;
			if (deg!=1)
			{
				var pi = document.getElementById("pi?").checked;
				if (pi==1) // If angle is in terms if pi...
				{
					o *= Math.atan(1)*4;
				}
			}
			else
			{
				o *= Math.atan(1)*4/180;
			}
			k = 1000
			output = 	"sin = "+String(Math.round(Math.sin(o)*k)/k)+"<br>"+
						"cos = "+String(Math.round(Math.cos(o)*k)/k)+"<br>"+
						"tan = "+String(Math.round(Math.tan(o)*k)/k)+"<br>"+
						"csc = "+String(Math.round(1/Math.sin(o)*k)/k)+"<br>"+
						"sec = "+String(Math.round(1/Math.cos(o)*k)/k)+"<br>"+
						"cot = "+String(Math.round(1/Math.tan(o)*k)/k)+"<br>";
			document.getElementById("output").innerHTML=output;
		}
function degr()
		{
			document.getElementById("pi").innerHTML="";
			return 0;
		}
function radi()
		{
			document.getElementById("pi").innerHTML='Is it in terms of pi?<br><input type="radio" name="pi" value="1" id="pi?"><label for="pi?">Yes</label> / <input type="radio" name="pi" value="0" id="nopi"><label for="nopi">No</label><br>';
			return 0;
		}
