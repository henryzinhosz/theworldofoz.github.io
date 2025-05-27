
class DiscordUserWidget {
    constructor(options) {
        this.userId = options.userId;
        this.apiUrl = options.apiUrl || '/api/discord/user';
        this.updateInterval = options.updateInterval || 60000; 
        this.elementId = options.elementId || 'discord-user-widget';
        this.cache = {};
        
        this.init();
    }

    async init() {
        await this.fetchUserData();
        this.interval = setInterval(() => this.fetchUserData(), this.updateInterval);
    }

    async fetchUserData() {
        try {
            const response = await fetch(`${this.apiUrl}/${this.userId}`);
            const data = await response.json();
            
            if (!response.ok) throw new Error(data.error || 'Erro desconhecido');
            
            this.updateUI(data);
            this.cache = data;
        } catch (error) {
            console.error('Erro ao atualizar dados do Discord:', error);

            if (this.cache.username) {
                this.updateUI(this.cache);
            }
        }
    }

    updateUI(data) {
        const widget = document.getElementById(this.elementId);
        if (!widget) return;

        widget.innerHTML = `
            <div class="discord-user">
                <img src="${data.avatar}" alt="${data.global_name}" class="discord-avatar">
                <div class="discord-info">
                    <span class="discord-name">${data.global_name}</span>
                    <span class="discord-username">@${data.username}</span>
                </div>
            </div>
        `;
    }
}

apiUrl: 'https://sua-api.onrender.com/api/discord/user'

// Uso:
// new DiscordUserWidget({
//     userId: 'SEU_USER_ID_DISCORD',
//     apiUrl: 'http://seu-site.com/api/discord/user',
//     elementId: 'discord-widget'
// });
