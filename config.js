module.exports = {
    client: {
        token: 'NzIwNzQ5NjI4OTE5Nzc1Mjgy.XuKgZg.OxYb9L8gcRKPN_VbCpKFqOToBVQ',
    },
    
    dashboard: {
        url: 'http://localhost',
        port: 3000,
        secret: 'BtRQe6KkKmSEfcZOLSYTPCc-VsNCmCt6'
    }
};

/*
    How to get theses informations ?

    First, authenticate yourself on the page https://discord.com/developers/applications

    If you don't have a bot yet, create one by clicking on "New application", fill in the requested information and in the bot tab don't forget to click on "Add bot".

    The token of your bot is in the bot tab, by default you can't read it but there is a button to copy it.
    The "secret client" is in the general information tab, as for the token there is a button to copy it.

    If you develop locally you can leave the default values for the dashboard part, otherwise I guess you have enough knowledge to host a project online.
*/