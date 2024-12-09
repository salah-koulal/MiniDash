// // Dashboard Management
// document.addEventListener('DOMContentLoaded', () => {
//     // Get all menu items
//     const menuItems = document.querySelectorAll('.menu ul li a');
    
//     // Handle menu item clicks
//     menuItems.forEach(item => {
//         item.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             // Remove active class from all items
//             menuItems.forEach(link => link.classList.remove('active'));
            
//             // Add active class to clicked item
//             this.classList.add('active');
            
//             // Get the clicked menu item text
//             const menuText = this.querySelector('span').textContent;
//             console.log(`Navigating to: ${menuText}`);
            
//             // Here you can add specific functionality for each menu item
//             switch(menuText.toLowerCase()) {
//                 case 'dashboard':
//                     loadDashboard();
//                     break;
//                 case 'charts':
//                     loadCharts();
//                     break;
//                 case 'products':
//                     loadProducts();
//                     break;
//                 case 'clients':
//                     loadClients();
//                     break;
//                 case 'posts':
//                     loadPosts();
//                     break;
//                 case 'favorites':
//                     loadFavorites();
//                     break;
//                 case 'settings':
//                     loadSettings();
//                     break;
//                 case 'logout':
//                     handleLogout();
//                     break;
//             }
//         });
//     });
// });

// // Placeholder functions for each section
// function loadDashboard() {
//     console.log('Loading Dashboard content...');
//     // Add dashboard content loading logic here
// }

// function loadCharts() {
//     console.log('Loading Charts content...');
//     // Add charts content loading logic here
// }

// function loadProducts() {
//     console.log('Loading Products content...');
//     // Add products content loading logic here
// }

// function loadClients() {
//     console.log('Loading Clients content...');
//     // Add clients content loading logic here
// }

// function loadPosts() {
//     console.log('Loading Posts content...');
//     // Add posts content loading logic here
// }

// function loadFavorites() {
//     console.log('Loading Favorites content...');
//     // Add favorites content loading logic here
// }

// function loadSettings() {
//     console.log('Loading Settings content...');
//     // Add settings content loading logic here
// }

// function handleLogout() {
//     console.log('Processing logout...');
//     // Add logout logic here
//     if (confirm('Are you sure you want to logout?')) {
//         // Add actual logout functionality here
//         console.log('User logged out');
//     }
// }
