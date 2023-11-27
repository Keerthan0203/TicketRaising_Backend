using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TicketRaising.Migrations
{
    public partial class migrateerGFDFGHJndfnsdghjk : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ticket_TypesofTickets_typesId",
                table: "Ticket");

            migrationBuilder.RenameColumn(
                name: "typesId",
                table: "Ticket",
                newName: "TypesId");

            migrationBuilder.RenameIndex(
                name: "IX_Ticket_typesId",
                table: "Ticket",
                newName: "IX_Ticket_TypesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ticket_TypesofTickets_TypesId",
                table: "Ticket",
                column: "TypesId",
                principalTable: "TypesofTickets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ticket_TypesofTickets_TypesId",
                table: "Ticket");

            migrationBuilder.RenameColumn(
                name: "TypesId",
                table: "Ticket",
                newName: "typesId");

            migrationBuilder.RenameIndex(
                name: "IX_Ticket_TypesId",
                table: "Ticket",
                newName: "IX_Ticket_typesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ticket_TypesofTickets_typesId",
                table: "Ticket",
                column: "typesId",
                principalTable: "TypesofTickets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
