$('#actionbtn').click(function() {
    $('#twd').accordion({
        active: false,
        collapsible: true,
        animate: 200,
        event: 'mouseover'
    })
    
    $('#cast').sortable({
        axis: 'y',
        cursor: "grab",
        items: 'li:nth-of-type(2n)',
        placeholder: "sortable-placeholder"
    })
    
    $('#innerDiv1').draggable({
        containment: "parent",
        revert: true,
        disabled: false
    })

    $('article').resizable({
        animate: true,
        aspectRatio: 1,
        maxWidth: 400,
        maxHeight: 400
    })

    $('#cal').datepicker({
        beforeShowDay: $.datepicker.noWeekends,
        changeMonth: true,
        changeYear: true,
        firstDay: 1
    })

    // let dateOptions = {
    //     beforeShowDay: $.datepicker.noWeekends,
    //     changeMonth: true,
    //     changeYear: true,
    //     firstDay: 1
    // }

    // $('#cal').datepicker(dateOptions)

    $('#circleDiv').click(function() {
        $('#bounceCircle').toggle('bounce', {
            times: 10,
            distance: 100
        }, 'slow')
    })

    $('#explodeDiv').click(function() {
        $('#explodeCircle').toggle('explode', {pieces: 100, easing: 'easeOutBounce', duration: 5000})
    })

    $('#foldDiv').click(function() {
        $('#foldCircle').toggle('fold', {duration: 2000, size: '50%', horizFirst: true})
    })


})

