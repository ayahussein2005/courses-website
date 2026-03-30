// JavaScript for Dynamic Course Creation
// This demonstrates DOM manipulation by creating new HTML elements

document.addEventListener('DOMContentLoaded', function() {
    
    // Get the button and container
    const showCoursesBtn = document.getElementById('showCoursesBtn');
    const coursesContainer = document.getElementById('coursesContainer');
    
    // Check if elements exist (only on home page)
    if (showCoursesBtn && coursesContainer) {
        
        // Variable to track if courses are shown
        let coursesShown = false;
        
        // Array of courses data
        const courses = [
            {
                icon: 'fa-code',
                title: 'تطوير الويب',
                description: 'تعلم HTML, CSS, JavaScript وبناء مواقع احترافية',
                duration: '40 ساعة',
                level: 'مبتدئ'
            },
            {
                icon: 'fa-palette',
                title: 'تصميم جرافيك',
                description: 'احترف Photoshop و Illustrator وأنشئ تصاميم مميزة',
                duration: '35 ساعة',
                level: 'مبتدئ'
            },
            {
                icon: 'fa-bullhorn',
                title: 'تسويق إلكتروني',
                description: 'تعلم استراتيجيات التسويق الرقمي و SEO',
                duration: '30 ساعة',
                level: 'متوسط'
            },
            {
                icon: 'fa-briefcase',
                title: 'إدارة أعمال',
                description: 'أساسيات الإدارة والقيادة وتطوير المشاريع',
                duration: '45 ساعة',
                level: 'متوسط'
            },
            {
                icon: 'fa-mobile-alt',
                title: 'تطوير تطبيقات الجوال',
                description: 'بناء تطبيقات Android و iOS باستخدام أحدث التقنيات',
                duration: '50 ساعة',
                level: 'متقدم'
            },
            {
                icon: 'fa-database',
                title: 'علم البيانات',
                description: 'تعلم تحليل البيانات والذكاء الاصطناعي',
                duration: '60 ساعة',
                level: 'متقدم'
            }
        ];
        
        // Add click event listener to button
        showCoursesBtn.addEventListener('click', function() {
            
            if (!coursesShown) {
                // Create and add course cards dynamically
                courses.forEach((course, index) => {
                    
                    // Create column div
                    const colDiv = document.createElement('div');
                    colDiv.className = 'col-lg-4 col-md-6 mb-4';
                    
                    // Create course card div
                    const cardDiv = document.createElement('div');
                    cardDiv.className = 'course-card';
                    cardDiv.style.opacity = '0';
                    cardDiv.style.transform = 'translateY(20px)';
                    
                    // Create course icon
                    const iconDiv = document.createElement('div');
                    iconDiv.className = 'course-icon';
                    const icon = document.createElement('i');
                    icon.className = `fas ${course.icon}`;
                    iconDiv.appendChild(icon);
                    
                    // Create course title
                    const title = document.createElement('h3');
                    title.textContent = course.title;
                    
                    // Create course description
                    const description = document.createElement('p');
                    description.textContent = course.description;
                    
                    // Create course info
                    const infoDiv = document.createElement('div');
                    infoDiv.className = 'course-info';
                    
                    const durationSpan = document.createElement('span');
                    durationSpan.innerHTML = `<i class="fas fa-clock"></i> ${course.duration}`;
                    
                    const levelSpan = document.createElement('span');
                    levelSpan.innerHTML = `<i class="fas fa-signal"></i> ${course.level}`;
                    
                    infoDiv.appendChild(durationSpan);
                    infoDiv.appendChild(levelSpan);
                    
                    // Create register button
                    const button = document.createElement('button');
                    button.className = 'btn btn-primary w-100 mt-3';
                    button.setAttribute('data-bs-toggle', 'modal');
                    button.setAttribute('data-bs-target', '#registerModal');
                    button.innerHTML = '<i class="fas fa-user-plus"></i> سجل الآن';
                    
                    // Append all elements to card
                    cardDiv.appendChild(iconDiv);
                    cardDiv.appendChild(title);
                    cardDiv.appendChild(description);
                    cardDiv.appendChild(infoDiv);
                    cardDiv.appendChild(button);
                    
                    // Append card to column
                    colDiv.appendChild(cardDiv);
                    
                    // Append column to container
                    coursesContainer.appendChild(colDiv);
                    
                    // Animate the card after a delay
                    setTimeout(() => {
                        cardDiv.style.transition = 'all 0.5s ease';
                        cardDiv.style.opacity = '1';
                        cardDiv.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                
                // Change button text and icon
                showCoursesBtn.innerHTML = '<i class="fas fa-check-circle"></i> تم عرض الكورسات';
                showCoursesBtn.classList.remove('btn-primary');
                showCoursesBtn.classList.add('btn-secondary');
                showCoursesBtn.disabled = true;
                
                coursesShown = true;
                
            }
        });
    }
    
    // Form submission handler (for contact form)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Form submission handler (for register modal)
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            alert('تم إرسال طلب التسجيل بنجاح! سنتواصل معك قريباً.');
            
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
            if (modal) {
                modal.hide();
            }
            
            // Reset form
            registerForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Handle course registration in course modal
    const courseModalPayBtn = document.querySelector('#courseModal .btn-success');
    if (courseModalPayBtn) {
        courseModalPayBtn.addEventListener('click', function() {
            alert('تمت عملية الدفع بنجاح! يمكنك الآن البدء بالكورس.');
            const modal = bootstrap.Modal.getInstance(document.getElementById('courseModal'));
            modal.hide();
        });
    }
    
});

// Additional animation on scroll
window.addEventListener('scroll', function() {
    const statBoxes = document.querySelectorAll('.stat-box');
    
    statBoxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (boxPosition < screenPosition) {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }
    });
});