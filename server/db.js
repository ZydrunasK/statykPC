import mysql2 from 'mysql2/promise';

export let connection = null;

try {
    connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'StatykPc',
    });
} catch (error) {
    console.log(error);
}