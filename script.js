// ============================================
// AGROFORTE - Robótica e Automação Agrícola
// ============================================

// --- Mock Data (Banco de Dados Simulado) ---
const newsData = [
    {
        id: 1,
        title: "Novo Robô Colheitador 5.0",
        summary: "A empresa AgroTech revelou seu mais novo robô autônomo com IA avançada, capaz de colher frutas delicadas sem danos.",
        category: "Robótica",
        date: "15/10/2023",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Drones no Combate a Pragas",
        summary: "Drones equipados com sensores multiespectrais estão revolucionando o monitoramento de pragas nas lavouras brasileiras.",
        category: "Tecnologia",
        date: "14/10/2023",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Tratores Autônomos em Alta",
        summary: "Novos tratores controlados por tablets permitem operações remotas com precisão centimétrica.",
        category: "Automação",
        date: "13/10/2023",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Irrigação Inteligente: Economia de 40%",
        summary: "Sistemas automatizados de irrigação baseados em sensores de umidade do solo reduzem o consumo de água significativamente.",
        category: "Sustentabilidade",
        date: "12/10/2023",
        image: "https://images.unsplash.com/photo-1563514227147-6d2ff479a4d7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Ordenha Robotizada",
        summary: "Nova geração de robôs de ordenha aumenta a produtividade leiteira em 30% e melhora o bem-estar animal.",
        category: "Pecuária",
        date: "11/10/2023",
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Pulverização de Precisão",
        summary: "Sistemas de pulverização localizada identificam ervas daninhas individualmente e aplicam herbicida apenas onde necessário.",
        category: "Automação",
        date: "10/10/2023",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80"
    }
];

// ==========================================
// 1. Renderização das Notícias (Feed)
// ==========================================
function renderNews() {
    const gridContainer = document.querySelector('.js-news-grid');
    
    if (!gridContainer) {
        console.error('Container de notícias não encontrado');
        return;
    }

    // Limpar conteúdo existente
    gridContainer.innerHTML = '';

    // Renderizar cada notícia
    newsData.forEach(news => {
        const card = document.createElement('article');
        card.className = 'news-card';
        
        card.innerHTML = `
            <img src="${news.image}" alt="${news.title}" class="card-image">
            <div class="card-content">
                <span class="news-tag">${news.category}</span>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-summary">${news.summary}</p>
                <span class="news-date"><i class="fa-regular fa-calendar"></i> ${news.date}</span>
            </div>
        `;
        
        gridContainer.appendChild(card);
    });
}

// ==========================================
// 2. Menu Hambúrguer (Mobile Toggle)
// ==========================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.js-menu-toggle');
    const navMenu = document.querySelector('.js-nav-menu');
    
    if (!menuToggle || !navMenu) {
        console.error('Elementos do menu não encontrados');
        return;
    }

    // Toggle do menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animação das barras do hambúrguer
        const bars = menuToggle.querySelectorAll('.bar');
        if (navMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Fechar menu ao clicar em um link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            
            const bars = menuToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
}

// ==========================================
// 3. Dark Mode (Alternância de Tema)
// ==========================================
function initThemeToggle() {
    const themeToggle = document.querySelector('.js-theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    if (!themeToggle) {
        console.error('Botão de tema não encontrado');
        return;
    }

    // Verificar preferência salva no localStorage
    const savedTheme = localStorage.getItem('agroforte-theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Toggle do tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Verificar se o tema atual é escuro
        const isDark = body.classList.contains('dark-mode');
        
        // Salvar preferência no localStorage
        localStorage.setItem('agroforte-theme', isDark ? 'dark' : 'light');
        
        // Trocar ícone
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// ==========================================
// 4. Inicialização Geral
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Agroforte inicializado...');
    
    // Renderizar notícias
    renderNews();
    
    // Inicializar menu mobile
    initMobileMenu();
    
    // Inicializartoggle de tema
    initThemeToggle();
});