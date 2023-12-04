namespace TicketRaising.Dto
{
    public class UserCommentDto
    {
        public int UserId { get; set; }
        public int TicketId { get; set; }
        public string Comment { get; set; }
        public DateTime CreatedOn { get; set; }

    }
}
