const panelMembers = [
  {
    name: "Arneget Abu Rwad",
    position: "Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "John Doe",
    position: "President",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Arif Shakib",
    position: "Vice President",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    position: "General Secretary",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mike Johnson",
    position: "Treasurer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Brown",
    position: "Technical Lead",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

// Events data
const events = [
  {
    title: "AI Workshop",
    date: "2024-02-15",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual Event",
    description:
      "Join us for an interactive workshop on the latest AI technologies and their applications.",
    link: "#",
  },
  {
    title: "CareerCrafters",
    date: "2024-02-20",
    time: "10:00 AM - 4:00 PM",
    location: "BIST Campus",
    description:
      "Explore career opportunities and get insights from industry professionals in this day-long event.",
    link: "#",
  },
  {
    title: "Research Seminar",
    date: "2024-02-25",
    time: "3:00 PM - 6:00 PM",
    location: "BIST Auditorium",
    description:
      "Discover cutting-edge research in computer science presented by leading academics and researchers.",
    link: "#",
  },
];

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Web Development in 2024",
        excerpt: "A comprehensive guide for beginners looking to start their journey in web development.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        author: "John Doe",
        date: "2024-02-10",
        readTime: "5 min read",
        category: "Web Development"
    },
    {
        id: 2,
        title: "The Future of Artificial Intelligence",
        excerpt: "Exploring the latest trends and innovations in AI technology and its impact on society.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        author: "Jane Smith",
        date: "2024-02-08",
        readTime: "7 min read",
        category: "AI"
    },
    {
        id: 3,
        title: "Cybersecurity Best Practices for Developers",
        excerpt: "Essential security practices every developer should implement in their projects.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        author: "Mike Johnson",
        date: "2024-02-05",
        readTime: "6 min read",
        category: "Security"
    }
];

// Utility function for DOM manipulation
const DOM = {
  create: (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
  },

  select: (selector) => document.querySelector(selector),

  selectAll: (selector) => document.querySelectorAll(selector),
};

// Function to render panel members
function renderPanelMembers() {
  const panelContainer = DOM.select(".panel-members");
  if (!panelContainer) return;

  panelMembers.forEach((member) => {
    const memberCard = DOM.create(
      "div",
      "card panel-member",
      `
            <div class="panel-member-image">
                <img src="${member.image}" alt="${member.name}" loading="lazy">
            </div>
            <div class="panel-member-info">
                <h3>${member.name}</h3>
                <span class="panel-member-position">${member.position}</span>
                <div class="social-links">
                    ${member.social ? `
                        <a href="${member.social.facebook}" target="_blank" rel="noopener noreferrer" class="social-link facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="${member.social.twitter}" target="_blank" rel="noopener noreferrer" class="social-link twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="${member.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
        `
    );
    panelContainer.appendChild(memberCard);
  });
}

// Function to render events
function renderEvents() {
    const eventContainer = DOM.select(".event-cards");
    if (!eventContainer) return;

    events.forEach(event => {
        const eventCard = DOM.create("div", "card event-card", `
            <div class="event-info">
                <h3>${event.title}</h3>
                <p><i class="far fa-calendar-alt"></i>${new Date(event.date).toLocaleDateString()}</p>
                <p><i class="far fa-clock"></i>${event.time}</p>
                <p><i class="fas fa-map-marker-alt"></i>${event.location}</p>
                <p class="event-description">${event.description}</p>
                <a href="${event.link}" class="event-link">Learn More</a>
            </div>
        `);
        eventContainer.appendChild(eventCard);
    });
}

// Function to render blog posts
function renderBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    blogGrid.innerHTML = ''; // Clear existing content

    blogPosts.forEach(post => {
        const blogCard = document.createElement('article');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-user"></i>${post.author}</span>
                    <span><i class="far fa-clock"></i>${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="/blog/${post.id}" class="read-more">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
}

// Function to add scroll reveal animations
function addScrollReveal() {
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".feature", {
      delay: 200,
      distance: "20px",
      origin: "bottom",
      interval: 100,
    });
    ScrollReveal().reveal(".panel-member", {
      delay: 200,
      distance: "20px",
      origin: "bottom",
      interval: 100,
    });
    ScrollReveal().reveal(".event-card", {
      delay: 200,
      distance: "20px",
      origin: "bottom",
      interval: 100,
    });
  } else {
    console.warn("ScrollReveal is not defined. Skipping animations.");
  }
}

// Function to animate features
function animateFeatures() {
  const features = document.querySelectorAll(".feature");
  features.forEach((feature, index) => {
    feature.style.opacity = "0";
    feature.style.transform = "translateY(20px)";
    feature.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    feature.style.transitionDelay = `${index * 0.1}s`;

    setTimeout(() => {
      feature.style.opacity = "1";
      feature.style.transform = "translateY(0)";
    }, 100);
  });
}

// Updated mobile menu handling function
function handleMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    const mobileAuthButtons = document.querySelectorAll('.mobile-auth-buttons button');
    const body = document.body;
    let isMenuOpen = false;

    if (!menuToggle || !mobileMenuContainer) return;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        menuToggle.classList.toggle('active');
        mobileMenuContainer.classList.toggle('active');
        body.style.overflow = isMenuOpen ? 'hidden' : '';

        // Reset transitions
        mobileNavLinks.forEach(link => {
            link.style.transition = 'none';
            link.style.opacity = '0';
            link.style.transform = 'translateX(20px)';
        });

        mobileAuthButtons.forEach(button => {
            button.style.transition = 'none';
            button.style.opacity = '0';
            button.style.transform = 'translateY(20px)';
        });

        // Force reflow
        mobileMenuContainer.offsetHeight;

        // Animate elements if menu is opening
        if (isMenuOpen) {
            mobileNavLinks.forEach((link, index) => {
                link.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, 100 + (index * 50));
            });

            mobileAuthButtons.forEach((button, index) => {
                button.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }, 300 + (index * 50));
            });
        }
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);
    mobileMenuClose?.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && 
            !mobileMenuContainer.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            toggleMenu();
        }
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });
}

// Function to handle form submission
function handleFormSubmission(formId, action) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;

            try {
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                if (action === "register") {
                    // Check if passwords match
                    if (data.password !== data["confirm-password"]) {
                        throw new Error("Passwords do not match");
                    }
                    // Remove confirm-password from data
                    delete data["confirm-password"];
                }

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Here you would typically send this data to your backend
                console.log(`${action.charAt(0).toUpperCase() + action.slice(1)} data:`, data);

                // Set login state
                localStorage.setItem("isLoggedIn", "true");

                // Show success message
                alert(`${action.charAt(0).toUpperCase() + action.slice(1)} successful!`);

                // Redirect to home page
                window.location.href = "index.html";

            } catch (error) {
                // Show error message
                alert(error.message || `${action.charAt(0).toUpperCase() + action.slice(1)} failed. Please try again.`);
                
                // Reset button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Function to update nav based on auth state
function updateNavAuth() {
    const desktopAuthButtons = document.querySelector(".auth-buttons.desktop-only");
    const mobileAuthButtons = document.querySelector(".mobile-auth-buttons");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        const logoutBtn = `
            <button class="login-btn">
                <i class="fas fa-sign-out-alt"></i>
                <span>Logout</span>
            </button>
        `;
        
        if (desktopAuthButtons) {
            desktopAuthButtons.innerHTML = logoutBtn;
            desktopAuthButtons.querySelector(".login-btn").addEventListener("click", handleLogout);
        }
        if (mobileAuthButtons) {
            mobileAuthButtons.innerHTML = logoutBtn;
            mobileAuthButtons.querySelector(".login-btn").addEventListener("click", handleLogout);
        }
    } else {
        const authButtons = `
            <button class="login-btn">
                <i class="fas fa-sign-in-alt"></i>
                <span>Login</span>
            </button>
            <button class="register-btn">
                <i class="fas fa-user-plus"></i>
                <span>Register</span>
            </button>
        `;
        
        if (desktopAuthButtons) {
            desktopAuthButtons.innerHTML = authButtons;
            desktopAuthButtons.querySelector(".login-btn").addEventListener("click", openLoginForm);
            desktopAuthButtons.querySelector(".register-btn").addEventListener("click", openRegisterForm);
        }
        if (mobileAuthButtons) {
            mobileAuthButtons.innerHTML = authButtons;
            mobileAuthButtons.querySelector(".login-btn").addEventListener("click", openLoginForm);
            mobileAuthButtons.querySelector(".register-btn").addEventListener("click", openRegisterForm);
        }
    }

    // Add hover effect for button icons
    document.querySelectorAll('.login-btn, .register-btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            
            if (icon) {
                icon.style.transform = 'translateX(3px) scale(1.1)';
            }
            if (text) {
                text.style.transform = 'translateX(3px)';
            }
        });

        button.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            
            if (icon) {
                icon.style.transform = 'translateX(0) scale(1)';
            }
            if (text) {
                text.style.transform = 'translateX(0)';
            }
        });
    });
}

// Function to handle logout
function handleLogout() {
  // Clear auth state (replace with actual logout logic)
  localStorage.removeItem("isLoggedIn");
  updateNavAuth();
  window.location.href = "index.html";
}

// Function to open register form
function openRegisterForm() {
  window.location.href = "register.html";
}

// Function to open login form
function openLoginForm() {
  window.location.href = "login.html";
}

// Function to handle button clicks
function handleButtonClicks() {
  const heroJoinBtn = document.getElementById("hero-join-btn");
  const contactBtn = document.getElementById("contact-btn");
  const mobileLoginBtn = document.getElementById("mobile-login-btn");
  const mobileRegisterBtn = document.getElementById("mobile-register-btn");

  if (heroJoinBtn) heroJoinBtn.addEventListener("click", openRegisterForm);
  if (contactBtn) contactBtn.addEventListener("click", openRegisterForm);
  if (mobileLoginBtn) mobileLoginBtn.addEventListener("click", openLoginForm);
  if (mobileRegisterBtn)
    mobileRegisterBtn.addEventListener("click", openRegisterForm);
}

// Function to add smooth scrolling functionality
function initSmoothScroll() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-nav-links a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add active class to clicked link
      this.classList.add('active');
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') {
        // If it's the home link, scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Find the target element
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Get navbar height for offset
          const navbar = document.querySelector('.navbar');
          const navbarHeight = navbar.offsetHeight;
          
          // Calculate scroll position
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          // Scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // If mobile menu is open, close it
          const menuToggle = document.querySelector('.menu-toggle');
          const mobileMenuContainer = document.querySelector('.mobile-menu-container');
          if (menuToggle && menuToggle.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileMenuContainer.classList.remove('active');
            document.body.style.overflow = '';
          }
        }
      }
    });
  });
}

// Function to handle contact form submission
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const formDataObj = Object.fromEntries(formData.entries());

            try {
                // Show loading state
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalBtnText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Simulate API call (replace with your actual API endpoint)
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Log the form data (replace with your actual form submission logic)
                console.log('Form submitted:', formDataObj);

                // Show success message
                showNotification('Message sent successfully!', 'success');

                // Reset form
                contactForm.reset();

            } catch (error) {
                console.error('Error submitting form:', error);
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                // Reset button state
                const submitBtn = contactForm.querySelector('.submit-btn');
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Function to show notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Add styles for the notification
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '8px';
    notification.style.backgroundColor = type === 'success' ? '#4EEAC9' : '#ff4444';
    notification.style.color = '#fff';
    notification.style.zIndex = '9999';
    notification.style.transition = 'all 0.3s ease';
    notification.style.transform = 'translateX(100%)';

    // Add to document
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Update the init function
function init() {
  console.log("Initializing...");
  try {
    // Add this line to handle section containers
    handleSectionContainers();
    
    renderPanelMembers();
    renderEvents();
    renderBlogPosts();
    handleMobileMenu();
    addScrollReveal();
    animateFeatures();
    updateNavAuth();
    handleButtonClicks();
    handleFormSubmission("register-form", "register");
    handleFormSubmission("login-form", "login");
    initSmoothScroll();
    handleContactForm();
    initSectionPatterns();
    initResponsiveHero();
    initButtonAnimations();
    console.log("All handlers set up");

    // Add the observer for stats animation
    const statsContainer = document.querySelector('.hero-stats');
    if (statsContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsContainer);
    }
  } catch (error) {
    console.error("Error during initialization:", error);
  }
}

// Run initialization when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const handleScroll = debounce(() => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}, 100);

window.addEventListener("scroll", handleScroll);

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function initLazyLoad() {
  document.querySelectorAll('.feature, .panel-member, .event-card').forEach(element => {
    observer.observe(element);
  });
}

// Add this to handle the view all button
document.querySelector('.view-all-btn')?.addEventListener('click', () => {
    window.location.href = '/blog';
});

// Add ripple effect to buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .join-btn, .contact-btn, .view-all-btn, .register-btn, .login-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add section patterns
document.querySelectorAll('section').forEach(section => {
    const pattern = document.createElement('div');
    pattern.classList.add('section-pattern');
    section.appendChild(pattern);
});

// Add this function to handle section patterns
function initSectionPatterns() {
    document.querySelectorAll('section').forEach(section => {
        const pattern = document.createElement('div');
        pattern.classList.add('section-pattern');
        
        // Create a unique pattern for each section
        const patternStyle = `
            background-image: radial-gradient(circle at 50% 50%, 
                rgba(124, 58, 237, 0.03) 0%, 
                rgba(247, 70, 158, 0.03) 100%);
            opacity: ${Math.random() * 0.5 + 0.3};
            transform: rotate(${Math.random() * 360}deg);
        `;
        
        pattern.style.cssText = patternStyle;
        section.appendChild(pattern);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for activity cards animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all activity cards
    document.querySelectorAll('.activity-card').forEach(card => {
        observer.observe(card);
    });

    // Add hover effect for activity buttons
    document.querySelectorAll('.activity-card .btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'translateX(5px)';
        });

        button.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'translateX(0)';
        });
    });
});

// Add this new function to handle section containers
function handleSectionContainers() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Skip if section is already in a container
        if (!section.parentElement.classList.contains('section-container')) {
            // Create container only if it doesn't exist
            const container = document.createElement('div');
            container.classList.add('section-container');
            section.parentNode.insertBefore(container, section);
            container.appendChild(section);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for gradient spheres
    document.addEventListener('mousemove', (e) => {
        const spheres = document.querySelectorAll('.gradient-sphere');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        spheres.forEach((sphere, index) => {
            const depth = (index + 1) * 20;
            const moveX = (mouseX - 0.5) * depth;
            const moveY = (mouseY - 0.5) * depth;

            sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Smooth transition for grid on scroll
    let lastScrollY = window.scrollY;
    const grid = document.querySelector('.background-grid');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY;
        const translateY = parseFloat(grid.style.transform?.split('translateY(')[1]) || 0;
        
        grid.style.transform = `translateY(${translateY - delta * 0.1}px)`;
        lastScrollY = scrollY;
    });
});

// Add this to your existing init function
function initResponsiveHero() {
    const handleResize = () => {
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const heroStats = document.querySelector('.hero-stats');
        
        // Adjust content width based on screen size
        if (window.innerWidth <= 768) {
            heroContent.style.width = '100%';
            heroStats.style.width = '100%';
        } else {
            heroContent.style.width = '';
            heroStats.style.width = '';
        }
    };

    // Initial call
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);
}

// Add this function to your init() function
function initButtonAnimations() {
    // Add ripple effect to auth buttons
    const buttons = document.querySelectorAll('.auth-buttons button, .mobile-auth-buttons button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600);
        });

        // Add hover animation for icon and text
        button.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            
            if (icon) {
                icon.style.transform = 'translateX(-3px) scale(1.1)';
            }
            if (text) {
                text.style.transform = 'translateX(3px)';
            }
        });

        button.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            
            if (icon) {
                icon.style.transform = 'translateX(0) scale(1)';
            }
            if (text) {
                text.style.transform = 'translateX(0)';
            }
        });
    });
}

// Add this new function
function animateNumbers() {
    const stats = [
        { element: document.querySelector('.stat-item:nth-child(1) .stat-number'), end: 100 },
        { element: document.querySelector('.stat-item:nth-child(2) .stat-number'), end: 5 },
        { element: document.querySelector('.stat-item:nth-child(3) .stat-number'), end: 10 }
    ];

    stats.forEach(stat => {
        if (!stat.element) return;
        
        let current = 0;
        const increment = stat.end / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= stat.end) {
                current = stat.end;
                clearInterval(timer);
            }
            stat.element.textContent = Math.floor(current) + '+';
        }, 30);
    });
}

// Initialize form handlers when document is ready
document.addEventListener('DOMContentLoaded', function() {
    handleFormSubmission("login-form", "login");
    handleFormSubmission("register-form", "register");
    
    // Add password visibility toggle
    document.querySelectorAll('.input-icon-wrapper input[type="password"]').forEach(input => {
        const wrapper = input.parentElement;
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'password-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
        
        toggleBtn.addEventListener('click', () => {
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            toggleBtn.innerHTML = `<i class="fas fa-eye${type === 'password' ? '' : '-slash'}"></i>`;
        });
        
        wrapper.appendChild(toggleBtn);
    });
});


