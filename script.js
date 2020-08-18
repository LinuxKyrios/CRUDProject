$(document).ready(function() {
    // saving a comment into database
    $(document).on('click', '#submit_btn', function() {
        var name = $('#name').val();
        var comment = $('#comment').val();
        $.ajax({
            url: 'serwer.php',
            type: 'POST',
            data: {
                'save': 1,
                'name': name,
                'comment': comment,
            },
            success: function(response) {
                $('#name').val('');
                $('#comment').val('');
                $('#display_area').append(response);
            }
        });
    });
    // deleting a comment from database
    $(document).on('click', '.delete', function() {
        var id = $(this).data('id');
        $clicked_btn = $(this);
        $.ajax({
            url: 'serwer.php',
            type: 'GET',
            data: {
                'delete': 1,
                'id': id,
            },
            success: function(response) {
                // removing the deleted comment
                $clicked_btn.parent().remove();
                $('#name').val('');
                $('#comment').val('');
            }
        });
    });
    var edit_id;
    var $edit_comment;
    $(document).on('click', '.edit', function() {
        edit_id = $(this).data('id');
        $edit_comment = $(this).parent();
        // grab the comment wantet to edit
        var name = $(this).siblings('.display_name').text();
        var comment = $(this).siblings('.comment_text').text();
        // to place comment in form
        $('#name').val(name);
        $('#comment').val(comment);
        $('#submit_btn').hide();
        $('#update_btn').show();
    });
    $(document).on('click', '#update_btn', function() {
        var id = edit_id;
        var name = $('#name').val();
        var comment = $('#comment').val();
        $.ajax({
            url: 'serwer.php',
            type: 'POST',
            data: {
                'update': 1,
                'id': id,
                'name': name,
                'comment': comment,
            },
            success: function(response) {
                $('#name').val('');
                $('#comment').val('');
                $('#submit_btn').show();
                $('#update_btn').hide();
                $edit_comment.replaceWith(response);
            }
        });
    });
});