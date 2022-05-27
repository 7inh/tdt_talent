import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("profile").del();

    // Inserts seed entries
    await knex("profile").insert([
        {account_id: 1, full_name: "Nguyen Van Anh", phone_number: "0988778667", address: "Ha Noi", description :"UX/UI Research"},
        {account_id: 2, full_name: "Nguyen Van Hai", phone_number: "0988764343", address: "TP Ho Chi Minh", description :"I'm Graphic Designer"},
        {account_id: 3, full_name: "Nguyen Van Ngoc", phone_number: "098834656", address: "TP Ho Chi Minh", description :"Web Developer"},
        {account_id: 4, full_name: "Le Thi Van", phone_number: "0344546775", address: "Da Nang", description :"Tester"},
        {account_id: 5, full_name: "Nguyen Ngoc Bao Tran", phone_number: "0230344353", address: "Ha Noi", description :"Senior UX/UI"},
        {account_id: 6, full_name: "Le Thanh Long", phone_number: "0343457364", address: "TP Ho Chi Minh", description :"Flutter "},
        {account_id: 7, full_name: "Hoang Van Thu", phone_number: "0986545637", address: "Ha Noi", description :"Fullstack Developer"},
        {account_id: 8, full_name: "Nguyen Quoc Dan", phone_number: "0278536478", address: "Ha Noi", description :"UX Research"},
        {account_id: 9, full_name: "Mai hong Hac", phone_number: "0948576644", address: "TP Ho Chi Minh", description :""},
    ]);
}
