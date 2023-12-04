using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TicketRaising.Migrations
{
    public partial class addcommentss : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserComments",
                table: "Ticket");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserComments",
                table: "Ticket",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
