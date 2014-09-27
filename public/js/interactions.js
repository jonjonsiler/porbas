$(document).ready(function(){
//                $('.item').draggable({
//                    iframeFix: true,
//                    helper: 'clone',
//                    refreshPositions: true
//                });
                /* Prevent default HTML5 draggable behavior */
                $("[draggable]").on('dragstart', function(event) {
                    event.originalEvent.dataTransfer.setData($(this).attr('data-type'), $(this).text()); // Use this line to get the actual data content from another location?
                }).on('dragend', function(event) {
                    event.preventDefault();
                });
                
                /* Dropzone support */
                $(".dropzone").on('dragover', function(event) {
                    //add preventDefault to stop default behaviour
                    event.preventDefault();
                    $(this).css('opacity', '.5');
                }).on('dragleave', function(event) {
                    //add preventDefault to stop default behaviour
                    event.preventDefault();
                    $(this).css('opacity', 1);
                });
 
                /* Dropzone actions */
                $(".dropzone").find('*').andSelf().on('drop', function(event) {
                    //restore the dropzone after dropevent
                    $('.dropzone').css('opacity', 1);
                    event.stopPropagation();
                    event.preventDefault();
                    console.log("dropped");

                    //Check the Data Type accepted by the drop zone which got the drop event.
//                    if ($(this).closest('.dropzone').attr('data-accept-type') == "Text") {
//                        var textData = event.originalEvent.dataTransfer.getData('Text');
//                        if (typeof textData == "undefined" || textData == "") {
//                            return;
//                        }
//                    }
//                    if ($(this).closest('.dropzone').attr('data-accept-type') == "HTML") {
//                        var htmlData = event.originalEvent.dataTransfer.getData('HTML');
//                        if (typeof htmlData == "undefined" || htmlData == "") {
//
//                            return;
//                        }
//                    }


                    //Find the Span which contains the count
//                    var prevCount = $(this).closest('.dropzone').find('span[id]').text();
//                    prevCount = parseInt(prevCount, 10);
//                    var newCount = prevCount + 1;

                    //Change the Count inside the Span
 //                   $(this).closest('.dropzone').find('span[id]').html(newCount);
                });
            });