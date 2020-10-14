const axios = require('axios').default;

module.exports = ({ raw, title, color, fields, user, discordID, isPatreon = true }) => {
    return axios.post('https://canary.discord.com/api/webhooks/766023643364720682/widK5r4YrKOxlEkVWgQI6PY-j1_Vl6V2Pa-W7yU52gkgRppJiQwmhrI3QsyKDHDcrnKo?wait=true', {
        embeds: [ {
            title,
            color,
        } ]
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(() => null);
};