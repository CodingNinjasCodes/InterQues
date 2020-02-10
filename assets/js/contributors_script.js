// function to display a list of all contributors GitHub username on the homepage
(function getContributorsUsernames(){
    fetch('https://api.github.com/repos/CodingNinjasCodes/InterQues/contributors')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        // console.log(data);

        var body = document.getElementsByTagName("body")[0];
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        var numberOfListItems = data.length;

        var row = document.createElement("tr");

        for (let i = 0; i < numberOfListItems; i++) {

            var cell = document.createElement("td");
            cell.style.textAlign = 'center';
            cell.style.padding = 5 + "px";

            let img = document.createElement('img');
            img.src = data[i].avatar_url;
            img.style.width = 90 + "px";
            img.style.height = 90 + "px";

            let para = document.createElement('p');
            
            var a = document.createElement('a');
            var link = document.createTextNode(data[i].login);
            a.appendChild(link);
            a.href = data[i].html_url;

            para.appendChild(a);

            cell.appendChild(img);
            cell.appendChild(para);

            row.appendChild(cell);
        }

        tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        
        // tbl.border = 1;

    });

})();