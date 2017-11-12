        $(document).ready(function () {
            $("#replace_btn").click(function () {
                var term = $("#needle").val()
                var new_term = $("#replacement").val()
                var strNewString = $('#replace_content').html().replace(new RegExp("\\b" + term + "\\b", "ig"), new_term);
                $('#replace_content').html(strNewString);
                var count = strNewString.match(new RegExp("\\b" + new_term + "\\b", "ig")).length;
                document.getElementById("counter").value = count + " wyrazów";
                setTimeout(function () {
                    $("#replace_feature").fadeOut("slow");
                }, 1500);
            });
        });