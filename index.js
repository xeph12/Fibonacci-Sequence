var Data = [0, 1]

$(document).keypress(function (event){
    var n = ($("input").val())
        if(event.key === "Enter"){
            Data = [0, 1]
            for(var x  = 0; x < n-1; x++){
            var z = Data[x+1] + Data[x]
                Data.push(z)
        }
        $(".res1").html("n("+n+"): " + Data[n])

        document.getElementById('numberContainer').innerHTML ="";
        const container = document.getElementById('numberContainer');
    
        for (let i = 1; i <= n; i++) {
            const p = document.createElement('p');
            p.textContent = "n("+(i)+"): "+ Data[i];
            container.appendChild(p);
        }
        }


    }
)

