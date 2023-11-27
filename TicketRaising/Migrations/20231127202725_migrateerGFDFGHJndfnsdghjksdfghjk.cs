using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TicketRaising.Migrations
{
    public partial class migrateerGFDFGHJndfnsdghjksdfghjk : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ticket_TypesofTickets_TypesId",
                table: "Ticket");

            migrationBuilder.DropIndex(
                name: "IX_Ticket_TypesId",
                table: "Ticket");

            migrationBuilder.DropColumn(
                name: "TypesId",
                table: "Ticket");

            migrationBuilder.CreateIndex(
                name: "IX_Ticket_TicketTypeId",
                table: "Ticket",
                column: "TicketTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ticket_TypesofTickets_TicketTypeId",
                table: "Ticket",
                column: "TicketTypeId",
                principalTable: "TypesofTickets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ticket_TypesofTickets_TicketTypeId",
                table: "Ticket");

            migrationBuilder.DropIndex(
                name: "IX_Ticket_TicketTypeId",
                table: "Ticket");

            migrationBuilder.AddColumn<int>(
                name: "TypesId",
                table: "Ticket",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Ticket_TypesId",
                table: "Ticket",
                column: "TypesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ticket_TypesofTickets_TypesId",
                table: "Ticket",
                column: "TypesId",
                principalTable: "TypesofTickets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
