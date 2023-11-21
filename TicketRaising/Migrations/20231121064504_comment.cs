using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TicketRaising.Migrations
{
    public partial class comment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Ticket_TicketsId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_TicketsId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "TicketsId",
                table: "Comments");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_TicketId",
                table: "Comments",
                column: "TicketId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Ticket_TicketId",
                table: "Comments",
                column: "TicketId",
                principalTable: "Ticket",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Ticket_TicketId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_TicketId",
                table: "Comments");

            migrationBuilder.AddColumn<int>(
                name: "TicketsId",
                table: "Comments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comments_TicketsId",
                table: "Comments",
                column: "TicketsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Ticket_TicketsId",
                table: "Comments",
                column: "TicketsId",
                principalTable: "Ticket",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
