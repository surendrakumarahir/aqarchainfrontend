function changeActiveTab(tab)
{
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
}

$(function () {
    $('body').prepend($('<div class="overlay"></div>'));
    $('#sidebarCollapse').on('click', function () {
        if($('#sidebar').hasClass('active'))
        {
            $('#sidebar').removeClass('active');
            $('body').removeClass('has-overlay');
        }
        else
        {
            $('#sidebar').addClass('active');
            $('body').addClass('has-overlay');
        }
    });

    $('.overlay, #sidebar a').on('click', function () {
        $('#sidebar').removeClass('active');
        $('body').removeClass('has-overlay');
    });
});