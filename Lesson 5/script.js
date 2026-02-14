$(document).ready(function() {
    // Category 1 - Ice Cream
    $("#vanilla").click(function(){
        $(".info").attr("src", "category_01/vanilla/vanilla.txt");
    });
    
    $("#chocolate").click(function(){
        $(".info").attr("src", "category_01/chocolate/chocolate.txt");
    });
    
    $("#strawberry").click(function(){
        $(".info").attr("src", "category_01/strawberry/strawberry.txt");
    });
    
    // Category 2 - Sweets
    $("#pure").click(function(){
        $(".info").attr("src", "category_02/pure.txt");
    });
    
    $("#syrup").click(function(){
        $(".info").attr("src", "category_02/syrup.txt");
    });
    
    $("#sugar").click(function(){
        $(".info").attr("src", "category_02/sugar.txt");
    });
    
    // Category 3 - Hot Drinks
    $("#coffee").click(function(){
        $(".info").attr("src", "category_03/coffee.txt");
    });
    
    $("#tea").click(function(){
        $(".info").attr("src", "category_03/tea.txt");
    });
    
    $("#fruit").click(function(){
        $(".info").attr("src", "category_03/fruit.txt");
    });
});