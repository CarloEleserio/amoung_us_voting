let voteCount = {
    Carlo : 0,
    Eleserio : 0,
    Jalalon : 0,
    Lee : 0,
    Barroca : 0,
    Pingris : 0,
    Corpuz : 0,
    Abundo : 0,
    Melton : 0,
    Simon: 0
};

$(document).ready(
    function(){
        $("#div1").click(
            function(){
                console.log("Carlo");
                voteCount.Carlo++;
                $("#p1vote").html(voteCount.Carlo);            
            }
        );

        $("#div2").click(
            function(){
                $("#div2").val("Eleserio");
                voteCount.Eleserio++;
                $("#p2vote").html(voteCount.Eleserio);            
            }
        );

        $("#div3").click(
            function(){
                $("#tank").val("Jalalon");
                voteCount.Jalalon++;
                $("#p3vote").html(voteCount.Jalalon);            
            }
        );

        $("#div4").click(
            function(){
                $("#tank").val("Lee");
                voteCount.Lee++;
                $("#p4vote").html(voteCount.Lee);            
            }
        );

        $("#div5").click(
            function(){
                $("#tank").val("Barroca");
                voteCount.Barroca++;
                $("#p5vote").html(voteCount.Barroca);            
            }
        );

        $("#div6").click(
            function(){
                $("#tank").val("Pingris");
                voteCount.Pingris++;
                $("#p6vote").html(voteCount.Pingris);            
            }
        );

        $("#div7").click(
            function(){
                $("#tank").val("Corpuz");
                voteCount.Corpuz++;
                $("#p7vote").html(voteCount.Corpuz);            
            }
        );

        $("#div8").click(
            function(){
                $("#tank").val("Abundo");
                voteCount.Abundo++;
                $("#p8vote").html(voteCount.Abundo);            
            }
        );

        $("#div9").click(
            function(){
                $("#tank").val("Melton");
                voteCount.Melton++;
                $("#p9vote").html(voteCount.Melton);            
            }
        );

        $("#div10").click(
            function(){
                $("#tank").val("Simon");
                voteCount.Simon++;
                $("#p10vote").html(voteCount.Simon);            
            }
        );
    }
)

