<script src="https://code.jquery.com/jquery-3.6.0.min.js">
  {/* $(document).ready(function(){
    // Open modal when icon is clicked
    $('.icon').click(function() {
      $('.modal').fadeIn();
    });

    // Close modal when modal content or outside of modal is clicked
    $('.modal, .modal-content').click(function(e) {
      if(e.target !== this) return;
      $('.modal').fadeOut();
    });
  }); */}

$(".icon").click(function() {
                        // let ID = $(this).attr("id");
                        // $("#delBooking").val(ID);
                        $(".modal").modal("show");
                    });
</script>