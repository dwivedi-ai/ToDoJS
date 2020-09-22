// Strike out the Todo's which gets clicked

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete the todo

$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(200, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Creating todos

$("input[type='text'").keypress(function(event){
    if (event.which === 13){
        //grabbing text from the input box
        var todoText = $(this).val();
        $(this).val("");
        if(todoText.trim() === ""){
            alert("Cannot add empty box");
        }else{
            // Creating new li
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
        }
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});