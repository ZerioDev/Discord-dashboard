module.exports = {
    users: {
        type: ['TEXT NOT NULL PRIMARY KEY', 'JSON'],
        values: (ID) => [ID, { connections: 0 }],
        insert: ['id', 'dashboard']
    }
};