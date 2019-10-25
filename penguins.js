//set banner for promise retrieval//

var setBanner = function(message)
{
    d3.select("#banner").text(message);
}


//promise//

var penguinPromise = d3.json("classData.json")

penguinPromise.then(function(penguin)
{
 setBanner("Pretty Pompous Penguins");
},
function(err)
{
 setBanner("Penguins Have Left the Building");
});
