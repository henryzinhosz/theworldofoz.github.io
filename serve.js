// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações
app.use(cors());
app.use(express.json());

// Variável para cache dos dados
let userCache = {};
const CACHE_EXPIRATION = 300000; // 5 minutos

// Rota para buscar dados do usuário
app.get('/api/discord/user/:userId', async (req, res) => {
    const { userId } = req.params;
    const token = process.env.DISCORD_BOT_TOKEN;

    // Verifica se temos dados em cache recentes
    if (userCache[userId] && (Date.now() - userCache[userId].timestamp < CACHE_EXPIRATION)) {
        return res.json(userCache[userId].data);
    }

    try {
        const response = await axios.get(`https://discord.com/api/v10/users/${userId}`, {
            headers: {
                'Authorization': `Bot ${token}`
            }
        });

        const userData = {
            username: response.data.username,
            global_name: response.data.global_name || response.data.username,
            avatar: response.data.avatar 
                ? `https://cdn.discordapp.com/avatars/${userId}/${response.data.avatar}.png?size=256`
                : `https://cdn.discordapp.com/embed/avatars/${response.data.discriminator % 5}.png`,
            updatedAt: new Date().toISOString()
        };

        // Atualiza cache
        userCache[userId] = {
            data: userData,
            timestamp: Date.now()
        };

        res.json(userData);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error.response?.data || error.message);
        res.status(500).json({ error: 'Não foi possível obter dados do usuário' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
