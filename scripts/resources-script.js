// Resources Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeResources();
});

function initializeResources() {
    initResourcesAccordion();
    renderLearningRoadmap();
    renderArticles();
    setupInteractivity();
}

function initResourcesAccordion() {
    const accordionItems = document.querySelectorAll('.resource-accordion-item');
    
    // Tüm itemlar kapalı başlasın (varsayılan açık kaldırıldı)
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.resource-accordion-header');
        const icon = item.querySelector('.resource-accordion-icon');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.resource-accordion-icon').style.transform = 'rotate(0deg)';
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

function renderLearningRoadmap() {
    const container = document.getElementById('learning-roadmap');
    if (!container) return;

    const roadmapHTML = resourcesData.roadmap.map((category, categoryIndex) => {
        const completedCount = category.items.filter(item => item.completed).length;
        const totalCount = category.items.length;
        const progressPercentage = (completedCount / totalCount) * 100;

        const itemsHTML = category.items.map((item, index) => {
            // Link varsa göster (completed durumuna bakmaksızın)
            const linkHTML = item.link ? 
                `<a href="${item.link}" target="_blank" class="roadmap-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>` : '';

            return `
                <div class="roadmap-item ${item.completed ? 'completed' : ''}" data-category="${category.category}" data-index="${index}">
                    <div class="roadmap-checkbox">
                        <input type="checkbox" ${item.completed ? 'checked' : ''} 
                               onchange="toggleRoadmapItem('${category.category}', ${index})">
                        <span class="checkmark"></span>
                    </div>
                    <span class="roadmap-task">${item.task}</span>
                    ${linkHTML}
                </div>
            `;
        }).join('');

        return `
            <div class="roadmap-category-accordion">
                <div class="roadmap-category-header" onclick="toggleRoadmapCategory(${categoryIndex})">
                    <div class="roadmap-title">
                        <i class="${category.icon}"></i>
                        <h3>${category.category}</h3>
                    </div>
                    <div class="roadmap-progress">
                        <span class="progress-text">${completedCount}/${totalCount}</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                        </div>
                    </div>
                    <i class="fas fa-chevron-down roadmap-category-icon"></i>
                </div>
                <div class="roadmap-category-content">
                    <div class="roadmap-items">
                        ${itemsHTML}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = roadmapHTML;
}

function toggleRoadmapCategory(categoryIndex) {
    const categoryElement = document.querySelectorAll('.roadmap-category-accordion')[categoryIndex];
    const content = categoryElement.querySelector('.roadmap-category-content');
    const icon = categoryElement.querySelector('.roadmap-category-icon');
    
    const isActive = content.classList.contains('active');
    
    // Close all categories
    document.querySelectorAll('.roadmap-category-content').forEach(otherContent => {
        otherContent.classList.remove('active');
    });
    document.querySelectorAll('.roadmap-category-icon').forEach(otherIcon => {
        otherIcon.style.transform = 'rotate(0deg)';
    });
    
    // Toggle current category
    if (!isActive) {
        content.classList.add('active');
        icon.style.transform = 'rotate(180deg)';
    }
}

function renderArticles() {
    const container = document.getElementById('articles-grid');
    if (!container) return;

    const articlesHTML = resourcesData.articles.map(article => `
        <div class="article-card">
            <div class="article-header">
                <div class="article-meta">
                    <span class="article-date">${article.date}</span>
                    <span class="article-read-time">${article.readTime}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <div class="article-author">by ${article.author}</div>
                <div class="article-source">${article.source}</div>
            </div>
            <div class="article-content">
                <p class="article-description">${article.description}</p>
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="article-footer">
                <a href="${article.url}" target="_blank" class="article-button">
                    <i class="fas fa-book-open"></i>
                    Read Article
                </a>
            </div>
        </div>
    `).join('');

    container.innerHTML = articlesHTML;
}

function toggleRoadmapItem(categoryName, itemIndex) {
    // Find the category in the data
    const category = resourcesData.roadmap.find(cat => cat.category === categoryName);
    if (!category) return;

    // Toggle the completed state
    category.items[itemIndex].completed = !category.items[itemIndex].completed;

    // Re-render the roadmap to update progress bars
    renderLearningRoadmap();

    // Optional: Save to localStorage for persistence
    saveRoadmapProgress();
}

function saveRoadmapProgress() {
    try {
        localStorage.setItem('roadmapProgress', JSON.stringify(resourcesData.roadmap));
    } catch (e) {
        console.log('Could not save roadmap progress to localStorage');
    }
}

function loadRoadmapProgress() {
    try {
        const savedProgress = localStorage.getItem('roadmapProgress');
        if (savedProgress) {
            const parsedProgress = JSON.parse(savedProgress);
            // Merge saved progress with current data
            parsedProgress.forEach(savedCategory => {
                const currentCategory = resourcesData.roadmap.find(cat => cat.category === savedCategory.category);
                if (currentCategory) {
                    savedCategory.items.forEach((savedItem, index) => {
                        if (currentCategory.items[index]) {
                            currentCategory.items[index].completed = savedItem.completed;
                        }
                    });
                }
            });
        }
    } catch (e) {
        console.log('Could not load roadmap progress from localStorage');
    }
}

function setupInteractivity() {
    // Load saved roadmap progress
    loadRoadmapProgress();

    // Add hover effects and animations
    setupCardAnimations();
    setupScrollAnimations();
}

function setupCardAnimations() {
    // Article cards hover effects
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Roadmap links hover effects
    const roadmapLinks = document.querySelectorAll('.roadmap-link');
    roadmapLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all major sections
    document.querySelectorAll('.resource-section').forEach(section => {
        observer.observe(section);
    });

    // Observe cards with stagger effect
    document.querySelectorAll('.quick-link-card, .article-card, .roadmap-category').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
}
