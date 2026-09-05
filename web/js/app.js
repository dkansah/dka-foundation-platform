// Donation Amount Tracking
let selectedAmount = 0;

// Select donation amount
function selectAmount(amount) {
    selectedAmount = amount;
    document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Process donation
function processDonation() {
    const customAmount = document.getElementById('customAmount').value;
    const amount = customAmount || selectedAmount;
    
    if (!amount || amount <= 0) {
        alert('Please select or enter a donation amount');
        return;
    }
    
    // Simulate donation processing
    alert(`Thank you for your donation of £${amount}! Redirecting to payment gateway...`);
    // In production, integrate with Stripe, PayPal, or similar
}

// Process recurring donation
function processRecurringDonation() {
    const amount = selectedAmount;
    
    if (!amount || amount <= 0) {
        alert('Please select a monthly donation amount');
        return;
    }
    
    alert(`Thank you for committing to £${amount}/month! Redirecting to setup...`);
    // In production, integrate with recurring payment system
}

// Modal Functions
function openModal(type) {
    const modalId = type + 'Modal';
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(type) {
    const modalId = type + 'Modal';
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Smooth scroll function
function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Impact Chart
window.addEventListener('load', function() {
    const ctx = document.getElementById('impactChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Education', 'Healthcare', 'Environment', 'Community', 'Human Rights', 'Other'],
                datasets: [{
                    data: [25, 20, 20, 15, 15, 5],
                    backgroundColor: [
                        '#003366',
                        '#00509e',
                        '#00A86B',
                        '#FFD700',
                        '#FFA500',
                        '#ddd'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
});

// Form submission handlers
function submitForm(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! We will be in touch soon.');
        form.reset();
    });
}

submitForm('partnerForm');
submitForm('volunteerForm');
submitForm('advocateForm');
