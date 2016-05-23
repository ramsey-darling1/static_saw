$(document).foundation();

$(document).ready(function(){

    $('.phase-trigger').click(function(){
        var phase = $(this).attr('data-phase');
        $('.phase-'+phase+' .component-wrap').slideToggle();
    });

    $('.switch-input').click(function(){
        var issue_type = $(this).attr('data-issue-type');
        var high = $('.high-end').html();
        var low = $('.low-end').html();
        switch(issue_type){
            case 'small':
                if($(this).is(':checked')){
                    high = Number(high) + 2;
                    low = Number(low) + 1;
                }else{
                    high = Number(high) - 2;
                    low = Number(low) - 1;
                }
                break;
            case 'med':
                if($(this).is(':checked')){
                    high = Number(high) + 5;
                    low = Number(low) + 3;
                }else{
                    high = Number(high) - 5;
                    low = Number(low) - 3;
                }
                break;
            case 'large':
                if($(this).is(':checked')){
                    high = Number(high) + 8;
                    low = Number(low) + 6;
                }else{
                    high = Number(high) - 8;
                    low = Number(low) - 6;
                }
                break;
        }
        $('.high-end').html(high);
        $('.low-end').html(low);
    });
});
