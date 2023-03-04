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
        revert: true
    })
})

